(() => {
  'use strict';

  const stories = [
    {
      id: 'dior-spring-2027-silver-surfer-beauty',
      category: 'runway makeup hair nails trend',
      tag: 'زیبایی هفته مد پاریس',
      title: 'خط چشم نقره‌ای و موج‌های ساحلی دیور؛ زیبایی بهار ۲۰۲۷ در پاریس',
      shortTitle: 'خط چشم نقره‌ای و موج‌های ساحلی در نمایش دیور',
      summary: 'دیور برای بهار ۲۰۲۷، خط چشم نقره‌ای نامتقارن را کنار پوست تازه، موهای موج‌دار ساحلی و ناخن‌های قرمز ناهماهنگ گذاشت؛ ترکیبی که درخشش را به یک نقطه محدود می‌کند.',
      date: '۸ مهر ۱۴۰۵',
      readTime: '۴ دقیقه مطالعه',
      image: 'img/beauty-news-dior-spring-2027-silver-liner.jpg',
      alt: 'نمای نزدیک مدل نمایش دیور بهار ۲۰۲۷ با رشته‌های ظریف نقره‌ای در امتداد چشم، پوست طبیعی و موی کوتاه با بافت نرم',
      credit: 'تصویر: اولیویه رز برای Christian Dior Parfums، از طریق Vogue',
      deck: 'نمایش بهار و تابستان ۲۰۲۷ دیور (Dior) روز ۲۹ سپتامبر ۲۰۲۶ در باغ تویلری پاریس برگزار شد. طبق گزارش Vogue، پیتر فیلیپس (Peter Philips) دو برداشت از خط چشم نقره‌ای ساخت و گیدو پالائو (Guido Palau) موها را با بافتی آزاد و شبیه موی پس از ساحل همراه کرد.',
      paragraphs: [
        'در یک گروه از مدل‌ها، رشته‌های بسیار ظریف و براق در امتداد بیرونی چشم قرار گرفت؛ در گروه دیگر، بالی کوتاه از اکلیل نقره‌ای گوشه چشم را روشن کرد. ریمل کنار گذاشته شد تا درخشش به‌جای سنگین‌کردن مژه‌ها، مانند یک جزئیات سبک و آینده‌نگر دیده شود.',
        'بقیه چهره عمداً آرام ماند: کمی رنگ گرم روی گونه، درخشش کنترل‌شده روی پوست و لب‌های شفاف. این تعادل باعث شد خط نقره‌ای در مرکز توجه بماند، بی‌آنکه آرایش کامل صورت نمایشی و سنگین شود. بافت آزاد مو نیز همین حس را ادامه داد؛ ظاهر نهایی مرتب بود، اما بیش از حد ساخته‌شده به نظر نمی‌رسید.',
        'آما کواشی (Ama Quashie) برای ناخن دست و پا دو قرمز دقیقاً یکسان انتخاب نکرد: شرابی روی دست و قرمز یاقوتی روی پا. این ناهماهنگی حساب‌شده با ایده کلی نمایش هم‌سو بود؛ زیبایی‌ای که از تقارن کامل فاصله می‌گیرد و هر بخش را مستقل اما هماهنگ نگه می‌دارد.',
        'برای نسخه سالنی، مهم‌ترین نکته محدودکردن درخشش است. یک خط فلزی باریک یا اکلیل فشرده در گوشه بیرونی چشم، کنار پوست طبیعی و لب خنثی، ایده را قابل‌پوشیدن می‌کند. در مو نیز بافت نرم و حرکت طبیعی، جای حجم‌سازی یا تثبیت سنگین را می‌گیرد.'
      ],
      insight: 'نگاه رازمهر: قدرت این ظاهر در تضاد میان یک جزئیات درخشان و زمینه‌ای آرام است. اگر خط نقره‌ای انتخاب می‌شود، پوست و لب را ساده نگه دارید و برای فرم چشم جای آن را تنظیم کنید؛ تقلید دقیق از زاویه نمایش برای همه چهره‌ها نتیجه یکسانی ندارد.',
      sources: [
        { name: 'ووگ (Vogue) — گزارش پشت‌صحنه مو، آرایش و ناخن دیور', url: 'https://www.vogue.com/article/beauty-jonathan-andersons-spring-2027-dior-runway' },
        { name: 'آسوشیتدپرس (AP) — گزارش مستقل نمایش ۲۹ سپتامبر در باغ تویلری', url: 'https://apnews.com/article/fashion-paris-dior-rihanna-d6ed747e4b07fbcdd01c7d74bd3922bb' },
        { name: 'فدراسیون مد و اوت کوتور پاریس (FHCM) — تقویم رسمی هفته مد پاریس', url: 'https://www.fhcm.paris/en/paris-fashion-week' }
      ],
      locales: {
        en: {
          tag: 'Paris Fashion Week beauty',
          title: 'Silver liner and surf waves define Dior’s spring 2027 beauty look',
          shortTitle: 'Silver liner and surf waves at Dior',
          summary: 'For spring 2027, Dior paired asymmetric silver eye accents with fresh skin, loose surf texture and deliberately mismatched red nails, keeping shine focused in one place.',
          date: '30 September 2026',
          readTime: '4 min read',
          alt: 'Close-up of a model at Dior spring 2027 wearing fine silver strands along the eyes, natural-looking skin and softly textured short hair',
          credit: 'Image: Olivier Rose for Christian Dior Parfums, via Vogue',
          deck: 'Dior’s spring/summer 2027 show took place in Paris’s Tuileries Garden on 29 September 2026. According to Vogue, Peter Philips created two versions of silver liner, while Guido Palau gave the hair a loose, post-beach texture.',
          paragraphs: [
            'One group of models wore hair-thin reflective strands along the outer eye; another had a short wing of chunky silver glitter. Mascara was left out so the shine read as a light, futuristic detail rather than a heavy wall of lashes.',
            'The rest of the face was intentionally quiet: a believable warmth on the cheeks, controlled sheen on the skin and clear gloss on the lips. That balance kept the silver line in focus without turning the entire face into a theatrical makeup look. Loose hair texture carried the same idea—the result was polished, but not visibly overworked.',
            'Ama Quashie chose two related, rather than identical, reds for hands and feet: burgundy on the nails and ruby on the toes. The measured mismatch echoed the show’s wider idea of moving away from perfect symmetry while keeping each element in conversation with the others.',
            'For a salon interpretation, restraint matters most. A fine metallic line or a concentrated touch of glitter at the outer corner can make the idea wearable when paired with natural skin and a neutral lip. In the hair, soft texture and movement can replace heavy volume or rigid hold.'
          ],
          insight: 'Razmehr’s view: The strength of this look comes from setting one luminous detail against a calm background. If silver liner is the focus, keep skin and lips simple and adjust its placement to the client’s eye shape; copying the runway angle exactly will not suit every face.',
          sources: ['Vogue — backstage report on Dior hair, makeup and nails', 'Associated Press — independent report on the 29 September Tuileries show', 'FHCM — official Paris Fashion Week calendar']
        },
        tr: {
          tag: 'Paris Moda Haftası güzelliği',
          title: 'Dior’un 2027 ilkbahar güzelliğinde gümüş eyeliner ve plaj dalgaları',
          shortTitle: 'Dior’da gümüş eyeliner ve plaj dalgaları',
          summary: 'Dior, 2027 ilkbaharında asimetrik gümüş göz detaylarını taze ten, serbest plaj dokusu ve bilinçli biçimde farklı kırmızı ojelerle eşleştirerek ışıltıyı tek noktada topladı.',
          date: '30 Eylül 2026',
          readTime: '4 dakika okuma',
          alt: 'Dior 2027 ilkbahar defilesinde göz boyunca ince gümüş şeritler, doğal görünümlü ten ve yumuşak dokulu kısa saçla bir modelin yakın planı',
          credit: 'Görsel: Olivier Rose, Christian Dior Parfums için; Vogue aracılığıyla',
          deck: 'Dior’un 2027 ilkbahar/yaz defilesi 29 Eylül 2026’da Paris’teki Tuileries Bahçesi’nde düzenlendi. Vogue’a göre Peter Philips iki farklı gümüş eyeliner yorumu hazırlarken Guido Palau saçlara plaj sonrasını andıran serbest bir doku verdi.',
          paragraphs: [
            'Modellerin bir bölümünde gözün dışına saç teli inceliğinde yansıtıcı şeritler yerleştirildi; diğerlerinde kısa ve yoğun bir gümüş sim kuyruğu kullanıldı. Işıltının ağır bir kirpik duvarına dönüşmemesi için maskara uygulanmadı; böylece detay hafif ve fütüristik kaldı.',
            'Yüzün geri kalanı özellikle sakindi: yanaklarda doğal bir sıcaklık, ciltte kontrollü parlaklık ve dudaklarda şeffaf bir bitiş vardı. Bu denge, tüm makyajı teatralleştirmeden gümüş çizgiyi öne çıkardı. Serbest saç dokusu da aynı fikri sürdürdü; görünüm özenliydi ama fazla yapılmış hissi vermiyordu.',
            'Ama Quashie el ve ayak tırnaklarında aynı kırmızı yerine birbiriyle ilişkili iki ton seçti: ellerde bordo, ayaklarda yakut kırmızısı. Bu ölçülü uyumsuzluk, kusursuz simetriden uzaklaşırken bütün parçaları birbiriyle bağlantılı tutan defile yaklaşımını tamamladı.',
            'Salon yorumunda en önemli nokta ışıltıyı sınırlamak. Dış köşede ince metalik bir çizgi ya da yoğunlaştırılmış küçük bir sim dokunuşu; doğal ten ve nötr dudakla birlikte kullanılınca fikri günlük hale getirir. Saçta ise yumuşak doku ve hareket, sert sabitleme ile fazla hacmin yerini alabilir.'
          ],
          insight: 'Razmehr’in yorumu: Görünümün gücü, tek bir parlak ayrıntının sakin bir zeminle karşılaşmasından geliyor. Gümüş eyeliner odaktaysa teni ve dudağı sade tutun; çizginin yerini göz şekline göre ayarlayın. Defiledeki açıyı birebir kopyalamak her yüz için aynı sonucu vermez.',
          sources: ['Vogue — Dior’un saç, makyaj ve tırnak detaylarına dair kulis haberi', 'Associated Press — 29 Eylül Tuileries defilesine ilişkin bağımsız haber', 'FHCM — resmi Paris Moda Haftası takvimi']
        },
        ar: {
          tag: 'جمال أسبوع باريس للموضة',
          title: 'خط فضي وتموجات شاطئية في إطلالة ديور الجمالية لربيع ٢٠٢٧',
          shortTitle: 'خط فضي وتموجات شاطئية في عرض ديور',
          summary: 'جمعت ديور لربيع ٢٠٢٧ بين تفاصيل فضية غير متناظرة حول العين وبشرة نضرة وشعر متموج بحرية ودرجتين مختلفتين عمداً من الأحمر للأظافر، فتركز اللمعان في نقطة واحدة.',
          date: '٣٠ سبتمبر ٢٠٢٦',
          readTime: 'قراءة ٤ دقائق',
          alt: 'لقطة قريبة لعارضة في ديور ربيع ٢٠٢٧ بخيوط فضية دقيقة بمحاذاة العينين وبشرة طبيعية وشعر قصير بملمس ناعم',
          credit: 'الصورة: Olivier Rose لصالح Christian Dior Parfums، عبر Vogue',
          deck: 'أُقيم عرض ديور لربيع وصيف ٢٠٢٧ في حديقة التويلري بباريس يوم ٢٩ سبتمبر ٢٠٢٦. ووفق Vogue، ابتكر بيتر فيليبس نسختين من خط العين الفضي، فيما منح غيدو بالاو الشعر ملمساً حراً يشبه مظهره بعد الشاطئ.',
          paragraphs: [
            'وضعت مجموعة من العارضات خيوطاً عاكسة بالغة الدقة عند الطرف الخارجي للعين، بينما ظهرت المجموعة الأخرى بجناح قصير من اللمعان الفضي الكثيف. جرى الاستغناء عن الماسكارا كي يبدو البريق تفصيلاً خفيفاً ومستقبلياً، لا كتلة ثقيلة فوق الرموش.',
            'بقيت بقية ملامح الوجه هادئة عمداً: دفء طبيعي على الخدين، ولمعة مضبوطة على البشرة، وشفاه شفافة. أبقى هذا التوازن الخط الفضي في مركز الانتباه من دون تحويل كامل الوجه إلى مكياج مسرحي. وواصل ملمس الشعر الحر الفكرة نفسها؛ نتيجة مصقولة لا تبدو مبالغاً في صنعها.',
            'اختارت آما كواشي درجتين مترابطتين لا متطابقتين لليدين والقدمين: عنابي للأظافر وياقوتي لأظافر القدم. عكس هذا الاختلاف المحسوب فكرة العرض الأوسع؛ الابتعاد عن التناظر الكامل مع إبقاء العناصر في حوار بصري واحد.',
            'في النسخة المناسبة للصالون، يأتي ضبط اللمعان أولاً. يمكن لخط معدني رفيع أو لمسة مركزة من البريق عند الزاوية الخارجية أن تجعل الفكرة قابلة للارتداء إلى جانب بشرة طبيعية وشفاه حيادية. وفي الشعر، يحل الملمس الناعم والحركة محل الحجم الزائد أو التثبيت القاسي.'
          ],
          insight: 'رؤية رازمهر: تأتي قوة الإطلالة من وضع تفصيل مضيء واحد فوق خلفية هادئة. عندما يكون الخط الفضي هو المحور، أبقوا البشرة والشفاه بسيطتين واضبطوا موضعه وفق شكل العين؛ فتقليد زاوية منصة العرض حرفياً لا يناسب كل وجه.',
          sources: ['Vogue — تقرير من الكواليس عن شعر ديور ومكياجه وأظافره', 'Associated Press — تقرير مستقل عن عرض التويلري في ٢٩ سبتمبر', 'FHCM — التقويم الرسمي لأسبوع باريس للموضة']
        }
      }
    }
  ];

  const registry = window.RAZMEHR_BEAUTY_NEWS = window.RAZMEHR_BEAUTY_NEWS || {};
  if (!Array.isArray(registry.batches)) registry.batches = [];
  registry.batches = registry.batches.filter((batch) => batch.file !== 'beauty-news-2026-09-30.js');
  registry.batches.push({ file: 'beauty-news-2026-09-30.js', stories });
})();
