/*
 * کلیدهای مستقل امکانات سایت رازمهر
 * برای خارج‌کردن کامل بیوتی نیوز از نمایش عمومی، مقدار beautyNews را false کنید.
 */
window.RAZMEHR_FEATURES = Object.freeze({
  beautyNews: false
});

document.documentElement.classList.toggle(
  'feature-beauty-news-off',
  !window.RAZMEHR_FEATURES.beautyNews
);
