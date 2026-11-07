(function () {
  'use strict';

  const STORAGE_KEY = 'razmehr-language';
  const supported = new Set(['fa', 'en', 'tr', 'ar']);
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const translatableAttributes = ['alt', 'aria-label', 'placeholder', 'title', 'content'];
  let currentLanguage = 'fa';
  let applying = false;
  let selection = 0;
  const loadedLanguages = new Set(['fa']);
  const scripts = new Map();
  const version = '20261107-perf1';
  const languageNames = { fa: 'فارسی', en: 'English', tr: 'Türkçe', ar: 'العربية' };
  const messages = {
    fa: ['در حال بارگیری زبان', 'زبان بارگیری نشد؛ دوباره انتخاب کنید.'],
    en: ['Loading language', 'Could not load this language. Please select it again.'],
    tr: ['Dil yükleniyor', 'Dil yüklenemedi. Lütfen yeniden seçin.'],
    ar: ['جارٍ تحميل اللغة', 'تعذر تحميل اللغة. يُرجى اختيارها مرة أخرى.']
  };

  function loadScript(file) {
    if (scripts.has(file)) return scripts.get(file);
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = file + '?v=' + version;
      script.async = false;
      const fail = () => {
        clearTimeout(timer);
        script.remove();
        scripts.delete(file);
        reject(new Error('Language resource unavailable: ' + file));
      };
      const timer = setTimeout(fail, 20000);
      script.onload = () => { clearTimeout(timer); resolve(); };
      script.onerror = fail;
      document.head.appendChild(script);
    });
    scripts.set(file, promise);
    return promise;
  }

  async function ensureLanguage(language) {
    if (loadedLanguages.has(language)) return;
    await loadScript('translations-' + language + '.js');
    if (!Object.keys(window['RAZMEHR_TRANSLATIONS_' + language.toUpperCase()] || {}).length) {
      scripts.delete('translations-' + language + '.js');
      throw new Error('Translation dictionary is empty: ' + language);
    }
    // The large English editorial dictionaries belong only to the news page.
    if (language === 'en' && document.getElementById('freshArticlesMount')) {
      await Promise.all(['news', 'stories-1', 'stories-2', 'editorial-news']
        .map(part => loadScript('translations-en-' + part + '.js')));
    }
    if (document.getElementById('freshArticlesMount') || document.querySelector('.beauty-news-home')) {
      await loadScript('beauty-news-locales-' + language + '.js');
    }
    // Apply shared, tiny editorial corrections after every base dictionary.
    await loadScript('translations-live-overrides.js');
    window.RAZMEHR_APPLY_LIVE_TRANSLATIONS?.(language);
    loadedLanguages.add(language);
  }

  function status(text, busy) {
    let node = document.getElementById('language-status');
    if (!node) {
      node = document.createElement('div');
      node.id = 'language-status';
      node.className = 'language-status';
      node.setAttribute('role', 'status');
      node.setAttribute('aria-live', 'polite');
      document.body.appendChild(node);
    }
    node.textContent = text;
    node.hidden = !text;
    document.querySelectorAll('[data-language-trigger]').forEach(button => {
      button.setAttribute('aria-busy', String(busy));
    });
  }

  function dictionary() {
    const dictionaries = {
      en: window.RAZMEHR_TRANSLATIONS_EN,
      tr: window.RAZMEHR_TRANSLATIONS_TR,
      ar: window.RAZMEHR_TRANSLATIONS_AR
    };
    return dictionaries[currentLanguage] || {};
  }

  function preserveWhitespace(source, translated) {
    const leading = source.match(/^\s*/)?.[0] || '';
    const trailing = source.match(/\s*$/)?.[0] || '';
    return leading + translated + trailing;
  }

  function translateTextNode(node) {
    if (!node || !node.parentElement) return;
    if (node.parentElement.closest('script,style,noscript')) return;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const original = originalText.get(node);
    if (currentLanguage === 'fa') {
      if (node.nodeValue !== original) node.nodeValue = original;
      return;
    }
    const key = original.trim();
    const translated = dictionary()[key] || key;
    if (translated && node.nodeValue !== preserveWhitespace(original, translated)) {
      node.nodeValue = preserveWhitespace(original, translated);
    }
  }

  function translateAttributes(element) {
    if (!element?.getAttribute) return;
    let originals = originalAttributes.get(element);
    if (!originals) {
      originals = {};
      translatableAttributes.forEach((name) => {
        if (element.hasAttribute(name)) originals[name] = element.getAttribute(name);
      });
      originalAttributes.set(element, originals);
    }
    Object.entries(originals).forEach(([name, original]) => {
      const translated = currentLanguage !== 'fa' ? dictionary()[original.trim()] : null;
      const next = translated || original;
      if (element.getAttribute(name) !== next) element.setAttribute(name, next);
    });
  }

  function applyTo(root) {
    if (!root) return;
    applying = true;
    try {
      if (root.nodeType === Node.TEXT_NODE) translateTextNode(root);
      if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root);
      const owner = root.nodeType === Node.DOCUMENT_NODE ? root : root.ownerDocument;
      const walker = owner.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
        else translateAttributes(node);
      }
    } finally {
      applying = false;
    }
  }

  function updateLanguageControls() {
    document.querySelectorAll('[data-language-current]').forEach((node) => {
      node.textContent = currentLanguage.toUpperCase();
    });
    document.querySelectorAll('[data-set-language]').forEach((button) => {
      const active = button.dataset.setLanguage === currentLanguage;
      button.classList.toggle('active', active);
      button.setAttribute('aria-checked', String(active));
    });
    document.querySelectorAll('[data-language-menu]').forEach((menu) => menu.classList.remove('open'));
    document.querySelectorAll('[data-language-trigger]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
  }

  async function setLanguage(language, options = {}) {
    const targetLanguage = supported.has(language) ? language : 'fa';
    const request = ++selection;
    if (!loadedLanguages.has(targetLanguage)) {
      status(messages[currentLanguage][0] + ' · ' + languageNames[targetLanguage], true);
      try {
        await ensureLanguage(targetLanguage);
      } catch (error) {
        if (request === selection) status(messages[currentLanguage][1], false);
        console.warn('[Razmehr language]', error);
        return currentLanguage;
      }
    }
    if (request !== selection) return currentLanguage;
    currentLanguage = targetLanguage;
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'fa' || currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.body?.classList.remove('lang-fa', 'lang-en', 'lang-tr', 'lang-ar');
    document.body?.classList.add(`lang-${currentLanguage}`);
    // Arabic shares the established RTL layout rules with Persian while
    // retaining its own language identity for translation and controls.
    if (currentLanguage === 'ar') document.body?.classList.add('lang-fa');
    if (options.persist !== false) {
      try { localStorage.setItem(STORAGE_KEY, currentLanguage); } catch (_) { /* Private browsing. */ }
    }
    status('', false);
    applyTo(document);
    updateLanguageControls();
    document.dispatchEvent(new CustomEvent('razmehr:language-change', { detail: { language: currentLanguage } }));
    return currentLanguage;
  }

  function toggleMenu(button) {
    const menu = button.closest('[data-language-menu]');
    const open = !menu.classList.contains('open');
    document.querySelectorAll('[data-language-menu]').forEach((item) => item.classList.remove('open'));
    menu.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
  }

  function initialize() {
    let preferred = 'fa';
    try { preferred = localStorage.getItem(STORAGE_KEY) || 'fa'; } catch (_) { /* Use Persian. */ }
    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-language-trigger]');
      if (trigger) {
        event.preventDefault();
        event.stopPropagation();
        toggleMenu(trigger);
        return;
      }
      const choice = event.target.closest('[data-set-language]');
      if (choice) {
        event.preventDefault();
        setLanguage(choice.dataset.setLanguage);
        return;
      }
      document.querySelectorAll('[data-language-menu]').forEach((menu) => menu.classList.remove('open'));
      document.querySelectorAll('[data-language-trigger]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        document.querySelectorAll('[data-language-menu]').forEach((menu) => menu.classList.remove('open'));
        document.querySelectorAll('[data-language-trigger]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
      }
    });
    const observer = new MutationObserver((mutations) => {
      if (applying || currentLanguage === 'fa') return;
      mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => applyTo(node)));
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    setLanguage(preferred, { persist: false });
  }

  window.RAZMEHR_I18N = {
    get language() { return currentLanguage; },
    setLanguage,
    apply: applyTo
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
