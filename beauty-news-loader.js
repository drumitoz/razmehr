(() => {
  'use strict';

  const state = window.RAZMEHR_BEAUTY_NEWS = window.RAZMEHR_BEAUTY_NEWS || {};
  state.batches = [];

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);

  const safeId = (value) => /^[a-z0-9-]+$/.test(String(value || '')) ? String(value) : '';
  const safeCategories = (value) => /^[a-z ]+$/.test(String(value || '')) ? String(value).trim() : '';
  const safeAsset = (value) => {
    const asset = String(value || '').trim();
    return /^(?:https:\/\/|img\/)[^\s"'<>]+$/.test(asset) ? asset : '';
  };
  const safeSource = (value) => {
    const source = String(value || '').trim();
    return /^https:\/\/[^\s"'<>]+$/.test(source) ? source : '';
  };

  const normalizeStory = (story) => {
    if (!story || typeof story !== 'object') return null;
    const id = safeId(story.id);
    const image = safeAsset(story.image);
    if (!id || !image || !story.title || !story.shortTitle || !story.summary) return null;
    return {
      id,
      category: safeCategories(story.category),
      tag: String(story.tag || ''),
      title: String(story.title || ''),
      shortTitle: String(story.shortTitle || ''),
      summary: String(story.summary || ''),
      date: String(story.date || ''),
      readTime: String(story.readTime || ''),
      image,
      alt: String(story.alt || ''),
      credit: String(story.credit || ''),
      deck: String(story.deck || ''),
      paragraphs: Array.isArray(story.paragraphs) ? story.paragraphs.map(String) : [],
      insight: String(story.insight || ''),
      sources: Array.isArray(story.sources) ? story.sources.map((source) => ({
        name: String(source?.name || ''),
        url: safeSource(source?.url)
      })).filter((source) => source.name && source.url) : []
    };
  };

  const cardMarkup = (story, home = false) => {
    const cardClass = home ? 'bn-card reveal' : 'latest-card';
    const copyClass = home ? 'bn-card-copy' : 'latest-copy';
    const tagClass = home ? 'bn-tag' : 'tag';
    const metaClass = home ? 'bn-meta' : 'latest-meta';
    const liveClass = home ? ' class="bn-live"' : '';
    const href = home ? 'beauty-news.html#' + story.id : '#' + story.id;
    return '<a class="' + cardClass + ' filterable" data-category="' + escapeHtml(story.category) +
      '" href="' + href + '"><img src="' + escapeHtml(story.image) + '" alt="' + escapeHtml(story.alt) +
      '" loading="lazy" referrerpolicy="no-referrer"><div class="' + copyClass + '"><span class="' +
      tagClass + '">' + escapeHtml(story.tag) + '</span><h3>' + escapeHtml(story.shortTitle) +
      '</h3><p>' + escapeHtml(story.summary) + '</p><div class="' + metaClass + '"><span' +
      liveClass + '>تازه</span><span>' + escapeHtml(story.date) + '</span></div></div></a>';
  };

  const sourceMarkup = (sources) => sources.map((source) =>
    '<a href="' + escapeHtml(source.url) + '" target="_blank" rel="noopener noreferrer">' +
    escapeHtml(source.name) + '</a>'
  ).join('<span>،</span>');

  const articleMarkup = (story) =>
    '<article class="article filterable" id="' + story.id + '" data-category="' +
    escapeHtml(story.category) + '"><aside class="article-aside"><img src="' +
    escapeHtml(story.image) + '" alt="' + escapeHtml(story.alt) +
    '" loading="lazy" referrerpolicy="no-referrer"><div class="archive-note">' +
    escapeHtml(story.credit) + '</div></aside><div class="article-body"><div class="article-kicker">' +
    escapeHtml(story.tag) + ' · ' + escapeHtml(story.date) + '</div><h2>' +
    escapeHtml(story.title) + '</h2><p class="article-deck">' + escapeHtml(story.deck) +
    '</p>' + story.paragraphs.map((paragraph) => '<p>' + escapeHtml(paragraph) + '</p>').join('') +
    '<div class="analysis"><strong>نگاه رازمهر</strong>' + escapeHtml(story.insight) +
    '</div><div class="source"><span>' + (story.sources.length > 1 ? 'منابع گزارش:' : 'منبع گزارش:') +
    '</span>' + sourceMarkup(story.sources) + '</div></div></article>';

  const selectStories = (ids, storyMap, fallback) => {
    const selected = Array.isArray(ids) ? ids.map((id) => storyMap.get(id)).filter(Boolean) : [];
    return selected.length ? selected : fallback;
  };

  const applyActiveFilter = () => {
    const selected = document.querySelector('.filter.active')?.dataset.filter || 'all';
    document.querySelectorAll('.filterable').forEach((item) => {
      const categories = (item.dataset.category || '').split(' ');
      item.hidden = selected !== 'all' && !categories.includes(selected);
    });
  };

  const render = (manifest, stories) => {
    const storyMap = new Map(stories.map((story) => [story.id, story]));
    const homeStories = selectStories(manifest.homeStoryIds, storyMap, stories.slice(0, 3)).slice(0, 3);
    const latestStories = selectStories(manifest.latestStoryIds, storyMap, stories.slice(0, 3)).slice(0, 3);

    const homeGrid = document.querySelector('.beauty-news-home .bn-grid');
    if (homeGrid && homeStories.length) {
      homeGrid.innerHTML = homeStories.map((story) => cardMarkup(story, true)).join('');
      requestAnimationFrame(() => homeGrid.querySelectorAll('.reveal').forEach((card) => card.classList.add('in')));
    }

    const freshMount = document.getElementById('freshNewsMount');
    if (freshMount && latestStories.length) {
      freshMount.innerHTML = '<div class="section-title"><h2>تازه‌ترین خبرها</h2><span>' +
        escapeHtml(manifest.latestLabel || '') + '</span></div><section class="latest-grid" aria-label="تازه‌ترین خبرهای بیوتی نیوز">' +
        latestStories.map((story) => cardMarkup(story)).join('') + '</section>';
    }

    const articlesMount = document.getElementById('freshArticlesMount');
    if (articlesMount) articlesMount.innerHTML = stories.map(articleMarkup).join('');

    const ticker = document.querySelector('.ticker-row');
    if (ticker && Array.isArray(manifest.ticker) && manifest.ticker.length) {
      ticker.innerHTML = '<span class="ticker-label">خبر داغ</span>' +
        manifest.ticker.slice(0, 3).map((item) => '<span>' + escapeHtml(item) + '</span>').join('<i></i>');
    }

    const issue = document.querySelector('.issue');
    if (issue && manifest.issue) {
      issue.innerHTML = '<span>' + escapeHtml(manifest.issue.label || 'شماره این هفته') +
        '</span><strong>' + escapeHtml(manifest.issue.date || '') + '</strong><span>' +
        escapeHtml(manifest.issue.updated || '') + '</span>';
    }

    applyActiveFilter();
    if (location.hash) {
      requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
    }
    document.dispatchEvent(new CustomEvent('razmehr:beauty-news-ready', {
      detail: { version: manifest.version, storyCount: stories.length }
    }));
  };

  const loadScript = (file, version) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = file + '?v=' + encodeURIComponent(version);
    script.async = false;
    script.onload = resolve;
    script.onerror = () => reject(new Error('بارگذاری فایل خبر ناموفق بود: ' + file));
    document.head.appendChild(script);
  });

  const init = async () => {
    if (window.RAZMEHR_FEATURES?.beautyNews === false) return;
    try {
      const response = await fetch('beauty-news-manifest.json?t=' + Date.now(), {
        cache: 'no-store',
        credentials: 'same-origin'
      });
      if (!response.ok) throw new Error('Manifest در دسترس نیست');
      const manifest = await response.json();
      if (manifest.schemaVersion !== 1 || !Array.isArray(manifest.files)) {
        throw new Error('ساختار Manifest معتبر نیست');
      }
      const files = manifest.files.filter((file) => /^beauty-news-\d{4}-\d{2}-\d{2}\.js$/.test(file));
      if (files.length !== manifest.files.length) throw new Error('نام فایل خبر معتبر نیست');
      state.batches = [];
      for (const file of files) await loadScript(file, manifest.version || Date.now());
      const batches = new Map(state.batches.map((batch) => [batch.file, batch]));
      const seen = new Set();
      const stories = [];
      files.forEach((file) => {
        const batch = batches.get(file);
        (batch?.stories || []).forEach((rawStory) => {
          const story = normalizeStory(rawStory);
          if (story && !seen.has(story.id)) {
            seen.add(story.id);
            stories.push(story);
          }
        });
      });
      if (!stories.length) throw new Error('هیچ خبر معتبری بارگذاری نشد');
      state.manifest = manifest;
      state.stories = stories;
      render(manifest, stories);
    } catch (error) {
      console.error('[Razmehr Beauty News]', error);
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
