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

  window.RAZMEHR_APPLY_LIVE_TRANSLATIONS = (language) => {
    const key = 'RAZMEHR_TRANSLATIONS_' + language.toUpperCase();
    if (window[key]) Object.assign(window[key], liveOverrides[language] || {});
  };
  ['en', 'tr', 'ar'].forEach(window.RAZMEHR_APPLY_LIVE_TRANSLATIONS);
})();
