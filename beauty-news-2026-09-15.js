(() => {
  'use strict';

  const stories = [
    {
      id: 'emmys-2026-small-beauty-details',
      category: 'beauty celebrity redcarpet trend',
      tag: 'فرش قرمز',
      title: 'جزئیات کوچک امی ۲۰۲۶ خبرساز شدند؛ از باب ایتالیایی تا فرنچ مشکی و درخشش صدفی',
      shortTitle: 'امی ۲۰۲۶؛ وقتی جزئیات کوچک مو و ناخن دیده شدند',
      summary: 'باب کوتاه با نوک‌های برگشته، فرنچ مشکی و لاک صدفی صورتی؛ فرش قرمز امی نشان داد یک جزئیات دقیق می‌تواند کل ظاهر را تعریف کند.',
      date: '۲۴ شهریور ۱۴۰۵',
      readTime: '۴ دقیقه مطالعه',
      image: 'img/beauty-news/emmys-2026-micro-bob.webp',
      alt: 'نمای نزدیک مدل باب ایتالیایی کوتاه لوکیتا مکسول با نوک‌های برگشته در مراسم امی ۲۰۲۶',
      credit: 'لوکیتا مکسول (Lukita Maxwell) در هفتادوهشتمین دوره امی · NBC / Getty Images / Vogue',
      deck: 'در هفتادوهشتمین دوره جوایز امی (78th Primetime Emmy Awards) که ۱۴ سپتامبر ۲۰۲۶ در لس‌آنجلس برگزار شد، ظاهرهای ماندگار الزاماً شلوغ‌ترین‌ها نبودند؛ مو، میکاپ و ناخن با تغییرهای کوچک اما حساب‌شده به نقطه اصلی استایل تبدیل شدند.',
      paragraphs: [
        'یکی از روشن‌ترین نمونه‌ها، باب ایتالیایی بسیار کوتاه لوکیتا مکسول (Lukita Maxwell) بود. نوک‌های مو به‌جای خوابیدن روی فک، رو به داخل پیچیده و درست زیر چشم‌ها قرار گرفته بودند؛ فرمی که هم صورت را قاب می‌گرفت و هم به یک کوتاهی کلاسیک، حالت گرافیکی و امروزی می‌داد. ووگ (Vogue) و الور (Allure) هر دو این مدل را از جزئیات شاخص شب دانستند.',
        'در ناخن‌ها، آلیسون جنی (Allison Janney) فرنچ مشکی را با لباسش هماهنگ کرد و سلنا گومز (Selena Gomez) سراغ پوشش صدفی صورتی با درخشش طلایی رفت؛ مانیکوری که تام باچیک (Tom Bachik) آن را «سان‌ست فراست» (Sunset Frost) نامیده است. انتخاب‌های سفید براق و نیمه‌شفاف هم نشان دادند فرم ساده ناخن، وقتی با بافت و بازتاب نور همراه شود، همچنان ظرفیت خبرسازشدن دارد.',
        'موها نیز دو مسیر هم‌زمان داشتند: حجم طبیعی و کنترل‌نشده در فرهای امی راسوم (Emmy Rossum) و فرم‌های بسیار صیقلی یا جمع‌شده در دیگر ظاهرها. نقطه مشترک این انتخاب‌ها، حفظ شخصیت بافت مو بود؛ حتی مدل‌های مرتب، بیش از آنکه یکدست و بی‌حرکت باشند، با یک پیچ، فرق یا رشته آزاد شناخته می‌شدند.'
      ],
      insight: 'پیام کاربردی این فرش قرمز، انتخاب یک امضای کوچک است: نوک برگشته باب، رنگ متفاوت فرنچ یا درخشش ظریف روی لاک. وقتی همان یک جزئیات با دقت اجرا شود، لازم نیست مو، میکاپ و ناخن هم‌زمان پرجزئیات باشند؛ نتیجه هم حرفه‌ای‌تر است و هم راحت‌تر به استایل روزمره ترجمه می‌شود.',
      sources: [
        {
          name: 'Vogue',
          url: 'https://www.vogue.com/slideshow/small-beauty-details-emmys-9-14-2026'
        },
        {
          name: 'Allure',
          url: 'https://www.allure.com/gallery/best-beauty-looks-2026-emmy-awards'
        },
        {
          name: 'Reuters',
          url: 'https://www.reuters.com/lifestyle/key-winners-78th-emmy-awards-2026-09-15/'
        },
        {
          name: 'Television Academy',
          url: 'https://www.televisionacademy.com/'
        }
      ]
    }
  ];

  const registry = window.RAZMEHR_BEAUTY_NEWS = window.RAZMEHR_BEAUTY_NEWS || {};
  if (!Array.isArray(registry.batches)) registry.batches = [];
  registry.batches = registry.batches.filter((batch) => batch.file !== 'beauty-news-2026-09-15.js');
  registry.batches.push({ file: 'beauty-news-2026-09-15.js', stories });
})();
