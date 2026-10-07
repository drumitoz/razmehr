(function () {
  'use strict';

  const liveOverrides = {
    en: {
      "۳۱۲ نفر خریداری کرده‌اند": "312 people have purchased this course",
      "در حال برگزاری": "Course in Progress"
    },
    tr: {
      "۳۱۲ نفر خریداری کرده‌اند": "312 kişi bu eğitimi satın aldı",
      "در حال برگزاری": "Eğitim Devam Ediyor"
    },
    ar: {
      "۳۱۲ نفر خریداری کرده‌اند": "اشترى هذه الدورة 312 شخصًا",
      "در حال برگزاری": "الدورة جارية الآن"
    }
  };

  window.RAZMEHR_TRANSLATIONS_EN = Object.assign(
    window.RAZMEHR_TRANSLATIONS_EN || {},
    liveOverrides.en
  );
  window.RAZMEHR_TRANSLATIONS_TR = Object.assign(
    window.RAZMEHR_TRANSLATIONS_TR || {},
    liveOverrides.tr
  );
  window.RAZMEHR_TRANSLATIONS_AR = Object.assign(
    window.RAZMEHR_TRANSLATIONS_AR || {},
    liveOverrides.ar
  );
})();
