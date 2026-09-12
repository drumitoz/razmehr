/*
 * کلیدهای مستقل امکانات سایت رازمهر
 * برای خارج‌کردن کامل هر قابلیت از نمایش عمومی، مقدار همان کلید را false کنید.
 */
window.RAZMEHR_FEATURES = Object.freeze({
  beautyNews: true,
  birthdayTheme: true,
  birthdayThemeEndsAt: '2026-09-13T11:00:00+03:30'
});

document.documentElement.classList.toggle(
  'feature-beauty-news-off',
  !window.RAZMEHR_FEATURES.beautyNews
);
