# قرارداد انتشار امن بیوتی نیوز

این ساختار برای جلوگیری از تغییر روزانه فایل‌های بزرگ سایت طراحی شده است.

## فایل‌های ثابت

- index.html و beauty-news.html فقط beauty-news-loader.js و کنترل‌کننده سبک i18n.js را بارگذاری می‌کنند. ترجمه‌ها پس از انتخاب زبان، فقط برای همان زبان دریافت می‌شوند؛ ترجمه‌های خبر در beauty-news-locales-en.js، beauty-news-locales-tr.js و beauty-news-locales-ar.js قرار دارند.
- beauty-news-loader.js فایل Manifest را بدون کش می‌خواند. صفحهٔ اصلی فقط خلاصهٔ سه کارت را از homeStories نمایش می‌دهد و فایل‌های کامل خبر را دانلود نمی‌کند. آرشیو کامل فقط در beauty-news.html، با حداکثر چهار درخواست هم‌زمان دریافت می‌شود.
- فایل‌های بارگذار و صفحه‌ها در انتشار روزانه خبر نباید تغییر کنند.

## فایل کوچک قابل تغییر

beauty-news-manifest.json تنها نقطه کنترل انتشار روزانه است. فیلد files فهرست فایل‌های خبر را از جدید به قدیم نگه می‌دارد. homeStoryIds و latestStoryIds دقیقاً سه خبر منتخب را مشخص می‌کنند. ticker و issue نیز از همین فایل خوانده می‌شوند.

بعد از افزودن فایل خبر و تغییر انتخاب سه خبر، دستور `node scripts/build-news-home.mjs` را اجرا کنید. این دستور فقط در همان Manifest، فیلدهای homeStories و homeStoriesVersion را به‌روز می‌کند. خلاصه‌ها شامل متن کارت، تصویر و ترجمهٔ کارت هستند؛ paragraphs، deck، insight و sources نباید در آن‌ها قرار بگیرد. homeStoriesVersion باید برابر version باشد. این تغییر جزئی از همان Commit اتمی روزانه است و فایل خروجی جداگانه ندارد.

اگر ناشر قدیمی این مرحله را انجام ندهد، بارگذار برای سازگاری فقط فایل‌های موردنیاز پیدا کردن سه خبر منتخب را از جدید به قدیم دریافت می‌کند و پس از یافتن آن‌ها متوقف می‌شود؛ خلاصهٔ قدیمی با نسخه یا شناسهٔ ناسازگار نمایش داده نمی‌شود.

## فایل خبر روزانه

هر اجرای موفق حداکثر یک فایل beauty-news-YYYY-MM-DD.js ایجاد می‌کند. این فایل فقط آرایه stories را تعریف و آن را با نام دقیق خودش در window.RAZMEHR_BEAUTY_NEWS.batches ثبت می‌کند. فایل خبر حق تغییر DOM، استفاده از innerHTML، fetch، بارگذاری اسکریپت دیگر یا تغییر Feature Flag را ندارد.

هر داستان تازه علاوه بر متن فارسی، فیلد `locales` با کلیدهای `en`، `tr` و `ar` دارد. برای هر زبان تمام فیلدهای متنی `tag`، `title`، `shortTitle`، `summary`، `date`، `readTime`، `alt`، `credit`، `deck`، `paragraphs`، `insight` و نام منابع در `sources` به همان ترتیب نوشته می‌شوند. شناسه، دسته‌بندی، نشانی تصویر و نشانی منابع مشترک‌اند. ترجمه باید تألیفی، دقیق و بازبینی‌شده باشد؛ متن فارسی در زبان دیگر و ترجمه ماشینیِ خام قابل انتشار نیست.

مانیفست نیز در `locales.en`، `locales.tr` و `locales.ar` برای هر زبان `latestLabel`، سه متن `ticker` و `issue` با فیلدهای `label`، `date` و `updated` دارد. بارگذار این داده‌ها را هنگام تغییر زبان بدون بارگذاری دوباره خبرها نمایش می‌دهد. فایل‌های beauty-news-locales-en.js، beauty-news-locales-tr.js و beauty-news-locales-ar.js ترجمه چهار خبر ۲۱ تا ۲۳ سپتامبر و رابط صفحه را نگه می‌دارند و در انتشار روزانه تغییر نمی‌کنند؛ beauty-news-locales.js قدیمی دیگر در صفحات بارگیری نمی‌شود.

الگوی انتهای فایل:

  const registry = window.RAZMEHR_BEAUTY_NEWS = window.RAZMEHR_BEAUTY_NEWS || {};
  if (!Array.isArray(registry.batches)) registry.batches = [];
  registry.batches = registry.batches.filter((batch) => batch.file !== 'beauty-news-YYYY-MM-DD.js');
  registry.batches.push({ file: 'beauty-news-YYYY-MM-DD.js', stories });

## انتشار اتمی

Commit روزانه فقط می‌تواند شامل فایل خبر جدید، تصاویر همان خبر و beauty-news-manifest.json باشد. تغییر index.html، beauty-news.html، beauty-news-loader.js، beauty-news-locales.js، feature-flags.js یا فایل‌های تاریخی ممنوع است. شاخه main فقط با fast-forward و force=false به‌روزرسانی می‌شود. در صورت تغییر HEAD، خطای تصویر، منبع، نحو، ترجمه یا Manifest هیچ Push انجام نمی‌شود.
