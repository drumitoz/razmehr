const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM, ResourceLoader, VirtualConsole } = require('jsdom');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(check) {
  for (let i = 0; i < 300; i++) { if (check()) return; await delay(10); }
  assert.fail('Timed out waiting for page state');
}
async function page(file = 'index.html', options = {}) {
  const requests = [], errors = [], scrolls = [];
  let activeNews = 0, maxNews = 0;
  class LocalResources extends ResourceLoader {
    fetch(url) {
      const parsed = new URL(url), name = decodeURIComponent(parsed.pathname.slice(1));
      requests.push(name);
      assert.equal(parsed.origin, 'https://razmehrbeauty.com', 'No external resources');
      if (options.fail?.(name)) return Promise.reject(new Error('Simulated offline resource'));
      const isNews = /^beauty-news-\d/.test(name);
      if (isNews) maxNews = Math.max(maxNews, ++activeNews);
      return delay(options.delay?.(name) || 1).then(() => {
        if (isNews) activeNews--;
        return fs.readFileSync(path.join(root, name));
      });
    }
  }
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', error => {
    if (error.type === 'unhandled-exception') errors.push(error.message);
  });
  const dom = new JSDOM(read(file), {
    url: 'https://razmehrbeauty.com/' + file + (options.hash || ''),
    runScripts: 'dangerously', resources: new LocalResources(), pretendToBeVisual: true, virtualConsole,
    beforeParse(window) {
      if (options.language) window.localStorage.setItem('razmehr-language', options.language);
      window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
      window.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
      window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
      window.scrollTo = () => {};
      window.HTMLElement.prototype.scrollIntoView = function () { scrolls.push(this.id); };
      window.fetch = async url => {
        requests.push(String(url));
        const manifest = JSON.parse(read('beauty-news-manifest.json'));
        options.manifest?.(manifest);
        return { ok: true, json: async () => manifest };
      };
    }
  });
  await until(() => dom.window.document.readyState === 'complete');
  return { dom, window: dom.window, requests, errors, scrolls, get maxNews() { return maxNews; } };
}

test('Persian homepage loads no translation dictionaries or article batches', async () => {
  const p = await page();
  try {
    await until(() => p.window.RAZMEHR_BEAUTY_NEWS?.stories?.length === 3);
    assert.deepEqual(p.requests.filter(x => /^(translations-|beauty-news-\d|beauty-news-locales)/.test(x)), []);
    assert.ok(p.requests.includes('fonts/fonts.css'));
    assert.equal(p.window.document.querySelectorAll('.beauty-news-home .bn-card').length, 3);
    assert.equal(p.window.RAZMEHR_BEAUTY_NEWS.stories[0].paragraphs.length, 0);
    assert.deepEqual(p.errors, []);
  } finally { p.window.close(); }
});

test('Each chosen language is loaded once, updates direction and retains live corrections', async () => {
  const p = await page();
  try {
    for (const lang of ['en', 'tr', 'ar', 'fa']) {
      await p.window.RAZMEHR_I18N.setLanguage(lang);
      assert.equal(p.window.document.documentElement.lang, lang);
      assert.equal(p.window.document.documentElement.dir, ['fa', 'ar'].includes(lang) ? 'rtl' : 'ltr');
      assert.equal(p.window.document.querySelector('[data-language-current]').textContent, lang.toUpperCase());
      if (lang !== 'fa') assert.ok(p.window['RAZMEHR_TRANSLATIONS_' + lang.toUpperCase()]['۳۶۴ نفر خریداری کرده‌اند']);
      if (lang === 'tr') assert.equal(p.window.RAZMEHR_TRANSLATIONS_TR['کوتاهی'], 'Saç Kesimi');
      if (lang === 'ar') assert.equal(p.window.RAZMEHR_TRANSLATIONS_AR['کوتاهی'], 'قص الشعر');
    }
    const count = p.requests.length;
    await p.window.RAZMEHR_I18N.setLanguage('en');
    assert.equal(p.requests.length, count);
    assert.equal(p.requests.filter(x => x === 'translations-en.js').length, 1);
    assert.ok(!p.requests.some(x => /translations-en-(news|stories|editorial)/.test(x)));
    assert.equal(p.window.document.querySelector('[data-language-trigger]').getAttribute('aria-busy'), 'false');
    assert.deepEqual(p.errors, []);
  } finally { p.window.close(); }
});

test('Saved Turkish preference downloads Turkish only', async () => {
  const p = await page('index.html', { language: 'tr' });
  try {
    await until(() => p.window.RAZMEHR_I18N.language === 'tr');
    assert.ok(p.requests.includes('translations-tr.js'));
    assert.ok(!p.requests.includes('translations-en.js'));
    assert.ok(!p.requests.includes('translations-ar.js'));
    assert.equal(p.window.RAZMEHR_TRANSLATIONS_TR['کوتاهی'], 'Saç Kesimi');
    assert.deepEqual(p.errors, []);
  } finally { p.window.close(); }
});

test('A failed language request preserves Persian and can be retried', async () => {
  let fail = true;
  const p = await page('index.html', { fail: name => name === 'translations-en.js' && fail });
  try {
    await p.window.RAZMEHR_I18N.setLanguage('en');
    assert.equal(p.window.RAZMEHR_I18N.language, 'fa');
    assert.equal(p.window.document.getElementById('language-status').hidden, false);
    fail = false;
    await p.window.RAZMEHR_I18N.setLanguage('en');
    assert.equal(p.window.RAZMEHR_I18N.language, 'en');
  } finally { p.window.close(); }
});

test('Selecting Persian while another language is loading cancels the pending switch', async () => {
  const p = await page('index.html', { delay: name => name === 'translations-en.js' ? 80 : 1 });
  try {
    const pending = p.window.RAZMEHR_I18N.setLanguage('en');
    p.window.document.querySelector('[data-set-language="fa"]').click();
    await pending;
    assert.equal(p.window.RAZMEHR_I18N.language, 'fa');
    assert.equal(p.window.document.documentElement.dir, 'rtl');
  } finally { p.window.close(); }
});

test('Old daily publishers fall back to only the batches needed for three home cards', async () => {
  const p = await page('index.html', { manifest: m => { delete m.homeStoriesVersion; } });
  try {
    await until(() => p.window.RAZMEHR_BEAUTY_NEWS?.stories?.length === 3);
    assert.equal(p.requests.filter(x => /^beauty-news-\d/.test(x)).length, 2);
    assert.deepEqual(p.errors, []);
  } finally { p.window.close(); }
});

test('Opening the news page loads the archive, preserves deep links and translates it', async () => {
  const manifest = JSON.parse(read('beauty-news-manifest.json'));
  const id = manifest.homeStoryIds[0];
  const p = await page('beauty-news.html', { hash: '#' + id });
  try {
    await until(() => p.window.RAZMEHR_BEAUTY_NEWS?.stories?.length > 3);
    assert.equal(p.requests.filter(x => /^beauty-news-\d/.test(x)).length, manifest.files.length);
    assert.ok(p.maxNews <= 4);
    assert.ok(p.window.document.getElementById(id));
    await until(() => p.scrolls.includes(id));
    await p.window.RAZMEHR_I18N.setLanguage('en');
    assert.ok(p.window.document.getElementById(id).textContent.includes('Martine Rose'));
    assert.ok(p.requests.includes('translations-en-stories-1.js'));
    assert.ok(!p.requests.includes('translations-ar.js'));
    assert.deepEqual(p.errors, []);
  } finally { p.window.close(); }
});

test('Shop keeps lazy language selection and currency formatting', async () => {
  const p = await page('shop.html');
  try {
    assert.ok(!p.requests.some(x => x.startsWith('translations-')));
    await p.window.RAZMEHR_I18N.setLanguage('tr');
    assert.equal(p.window.document.documentElement.lang, 'tr');
    assert.ok(p.window.document.getElementById('grid').textContent.includes('$'));
    assert.deepEqual(p.errors, []);
  } finally { p.window.close(); }
});
