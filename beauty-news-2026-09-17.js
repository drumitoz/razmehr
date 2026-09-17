(() => {
  'use strict';

  const stories = [
    {
      id: 'allure-best-beauty-2026-nails',
      category: 'nails beauty industry',
      tag: 'خبر ناخن',
      title: 'بهترین‌های ناخن ۲۰۲۶ از نگاه Allure؛ سرعت، دوام و جلوه‌های صدفی در مرکز توجه',
      shortTitle: 'برندگان ناخن Allure ۲۰۲۶ معرفی شدند',
      summary: 'از لاک ۶۰ ثانیه‌ای و رنگ صدفی چندوجهی تا بیس‌کت، تاپ‌کت و ناخن‌های آماده؛ فهرست تازه Allure مسیرهای مهم بازار ناخن امسال را نشان می‌دهد.',
      date: '۲۶ شهریور ۱۴۰۵',
      readTime: '۴ دقیقه مطالعه',
      image: 'img/beauty-news/allure-best-beauty-2026-nails.webp',
      alt: 'دستی با فرنچ قرمز براق که دسته‌ای موی بلوند را در پس‌زمینه مشکی گرفته است',
      credit: 'تصویر: ارو رادیش (Arrow Radisch) · طراحی صحنه: سارا پوسامای (Sarah Possamai) / Allure',
      deck: 'Allure در سی‌امین سال جوایز «Best of Beauty»، برندگان ۲۰۲۶ را معرفی کرد. در بخش ناخن، انتخاب‌ها فقط روی رنگ متمرکز نیستند؛ کاهش زمان اجرا، ماندگاری، ترمیم و پاک‌کردن آسان‌تر، چهار محور برجسته این فهرست‌اند.',
      paragraphs: [
        'بخش ناخن امسال ۱۰ برنده دارد. Sally Hansen Insta-Dri در گروه لاک سریع‌خشک انتخاب شده؛ Allure می‌گوید فرمول آن در ۶۰ ثانیه خشک می‌شود. Mooncat Pearl Clutcher نیز با جلوه صدفیِ متغیر میان صورتی، سبز، نقره‌ای و یاسی، عنوان لاک بادوام را گرفته است؛ نشانه‌ای از ادامه محبوبیت رنگ‌هایی که زیر نور ظاهر متفاوتی پیدا می‌کنند.',
        'در بخش ژل خانگی، Olive & June Gel Mani System به‌دلیل فرمول خودتراز، چراغ LED پنج‌انگشتی و بیس جداشونده انتخاب شده است. OPI Natural Nail Base Coat و Zoya Ultra Glossy Seal Top Coat هم به‌ترتیب در گروه بیس‌کت و تاپ‌کت برنده شده‌اند؛ دو مرحله‌ای که نشان می‌دهند کیفیت نتیجه نهایی فقط به رنگ لاک وابسته نیست.',
        'فهرست برندگان به مراقبت و ترمیم هم توجه دارد: Essie Break Fix Liquid Nail Patch برای پوشاندن ترک‌های کوچک، Heirée The Cuticle Pen برای مراقبت از کوتیکول و Zoya Remove Plus برای پاک‌کردن لاک انتخاب شده‌اند. در گروه ناخن‌های آماده نیز Glamnetic برای مدل‌های کوتاه و Kiss برای مدل‌های بلند برنده شده‌اند.'
      ],
      insight: 'برای سالن‌ها، پیام مهم این فهرست یک نام تجاری خاص نیست؛ مشتری هم‌زمان نتیجه براق، زمان اجرای کمتر و ماندگاری قابل‌پیش‌بینی می‌خواهد. معرفی شفاف زمان خشک‌شدن، دوام تقریبی و روش ریموو می‌تواند انتخاب سرویس را ساده‌تر کند. این جوایز بر پایه آزمون تحریریه Allure هستند و جای ارزیابی حرفه‌ای محصول و سازگاری آن با هر مشتری را نمی‌گیرند.',
      sources: [
        {
          name: 'Allure — برندگان بخش ناخن ۲۰۲۶',
          url: 'https://www.allure.com/story/best-of-beauty-2026-nail-product-winners'
        },
        {
          name: 'Allure — فهرست کامل برندگان ۲۰۲۶',
          url: 'https://www.allure.com/story/best-of-beauty-2026-all-winners-index'
        }
      ]
    }
  ];

  const registry = window.RAZMEHR_BEAUTY_NEWS = window.RAZMEHR_BEAUTY_NEWS || {};
  if (!Array.isArray(registry.batches)) registry.batches = [];
  registry.batches = registry.batches.filter((batch) => batch.file !== 'beauty-news-2026-09-17.js');
  registry.batches.push({ file: 'beauty-news-2026-09-17.js', stories });
})();
