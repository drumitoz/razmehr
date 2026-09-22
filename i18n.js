(function () {
  'use strict';

  const STORAGE_KEY = 'razmehr-language';
  const supported = new Set(['fa', 'en']);
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const translatableAttributes = ['alt', 'aria-label', 'placeholder', 'title', 'content'];
  let currentLanguage = 'fa';
  let applying = false;

  function dictionary() {
    return window.RAZMEHR_TRANSLATIONS_EN || {};
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
    const translated = dictionary()[key];
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
      const translated = currentLanguage === 'en' ? dictionary()[original.trim()] : null;
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

  function setLanguage(language, options = {}) {
    currentLanguage = supported.has(language) ? language : 'fa';
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'fa' ? 'rtl' : 'ltr';
    document.body?.classList.toggle('lang-fa', currentLanguage === 'fa');
    document.body?.classList.toggle('lang-en', currentLanguage === 'en');
    document.body?.classList.remove('lang-tr');
    if (options.persist !== false) localStorage.setItem(STORAGE_KEY, currentLanguage);
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
    currentLanguage = supported.has(localStorage.getItem(STORAGE_KEY)) ? localStorage.getItem(STORAGE_KEY) : 'fa';
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
        if (typeof window.setLang === 'function' && window.setLang !== setLanguage) window.setLang(choice.dataset.setLanguage);
        else setLanguage(choice.dataset.setLanguage);
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
      if (applying || currentLanguage !== 'en') return;
      mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => applyTo(node)));
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    setLanguage(currentLanguage, { persist: false });
  }

  window.RAZMEHR_I18N = {
    get language() { return currentLanguage; },
    setLanguage,
    apply: applyTo
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
