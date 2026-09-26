(() => {
  'use strict';
  const current = document.documentElement.lang;
  if (!['fa', 'en', 'tr', 'ar'].includes(current)) return;
  try { localStorage.setItem('razmehr-language', current); } catch (_) {}

  const menu = document.querySelector('[data-language-menu]');
  const trigger = menu?.querySelector('[data-language-trigger]');
  if (!menu || !trigger) return;

  function close() {
    menu.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  trigger.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = menu.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(open));
  });

  menu.addEventListener('click', (event) => {
    const option = event.target.closest('[data-set-language]');
    if (!option) return;
    const selected = option.dataset.setLanguage;
    if (!['fa', 'en', 'tr', 'ar'].includes(selected)) return;
    close();
    if (selected === current) return;
    try { localStorage.setItem('razmehr-language', selected); } catch (_) {}
    window.location.assign(`yazd-${selected}.html`);
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
})();
