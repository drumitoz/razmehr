(function () {
  'use strict';

  const liveOverrides = {
    en: {
      "۳۶۴ نفر خریداری کرده‌اند": "364 people have purchased this course",
      "در حال برگزاری": "Course in Progress",
      "پایان یافته": "Course Completed"
    },
    tr: {
      "۳۶۴ نفر خریداری کرده‌اند": "364 kişi bu eğitimi satın aldı",
      "در حال برگزاری": "Eğitim Devam Ediyor",
      "پایان یافته": "Eğitim Tamamlandı"
    },
    ar: {
      "۳۶۴ نفر خریداری کرده‌اند": "اشترى هذه الدورة 364 شخصًا",
      "در حال برگزاری": "الدورة جارية الآن",
      "پایان یافته": "انتهت الدورة"
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
