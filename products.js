/*
 * منبع واحد محصولات رازمهر برای صفحه اصلی و فروشگاه مستقل.
 * قانون تصاویر: فایل محصول اصلی نگه داشته می‌شود و هیچ نوشته، لوگو یا
 * جزئی از بسته‌بندی با هوش مصنوعی یا ویرایش تصویری تغییر نمی‌کند.
 */
const PRODUCTS = [
  { cat:{fa:"مکمل رنگ",tr:"Renk Takviyesi",en:"Color Supplement"}, catKey:"color", tag:{fa:"ویژه",tr:"Özel",en:"Featured"},
    img:"img/volum.jpg", displayImg:"img/product-display/volum.png", name:{fa:"ولومایزر",tr:"VoluM@izer",en:"VoluM@izer"},
    desc:{fa:"مکمل افزایش حجم و شفافیت رنگ مو، بدون آمونیاک",tr:"Saç rengi hacim ve parlaklık takviyesi",en:"Hair color volume & clarity booster"},
    price:{fa:"۵٬۷۰۰٬۰۰۰",tr:"5.700.000",en:"5,700,000"}, priceN:5700000 },

  { cat:{fa:"مراقبت مو",tr:"Saç Bakımı",en:"Hair Care"}, catKey:"hair", tag:{fa:"پرفروش",tr:"Çok Satan",en:"Bestseller"},
    img:"img/esprey.jpg", displayImg:"img/product-display/esprey.png", name:{fa:"اسپری ۲۰ کاره موراها",tr:"Moraha 20in1 Sprey",en:"Moraha 20in1 Spray"},
    desc:{fa:"محافظت شدید، ضد وز و ضد گره در یک اسپری",tr:"Yoğun koruma, anti-frizz ve düğüm önleyici",en:"Intense protection, anti-frizz & anti-knot"},
    price:{fa:"۳٬۸۰۰٬۰۰۰",tr:"3.800.000",en:"3,800,000"}, priceN:3800000 },

  { cat:{fa:"احیا مو",tr:"Saç Onarımı",en:"Hair Repair"}, catKey:"repair", tag:null,
    img:"img/freeze.jpg", displayImg:"img/product-display/freeze.png", name:{fa:"فریز — احیا مو",tr:"Freeze — Saç Onarımı",en:"Freeze — Hair Repair"},
    desc:{fa:"احیای عمقی و بازسازی موهای آسیب‌دیده",tr:"Derin onarım ve yıpranmış saç bakımı",en:"Deep repair for damaged hair"},
    price:{fa:"۷٬۲۰۰٬۰۰۰",tr:"7.200.000",en:"7,200,000"}, priceN:7200000 },

  { cat:{fa:"احیا مو",tr:"Saç Onarımı",en:"Hair Repair"}, catKey:"repair", tag:{fa:"حرفه‌ای",tr:"Profesyonel",en:"Pro"},
    img:"img/plex.jpg", displayImg:"img/product-display/plex.png", name:{fa:"پلکس موراها — احیا مو",tr:"Moraha Plex",en:"Moraha Smart Plex"},
    desc:{fa:"تقویت‌کننده حرفه‌ای پیوندهای مو، ۵۰ گرم",tr:"Profesyonel saç bağı güçlendirici, 50 g",en:"Pro hair bond booster, 50 g"},
    price:{fa:"۳٬۲۰۰٬۰۰۰",tr:"3.200.000",en:"3,200,000"}, priceN:3200000 },

  { cat:{fa:"احیا مو",tr:"Saç Onarımı",en:"Hair Repair"}, catKey:"repair", tag:null,
    img:"img/lpp.jpg", displayImg:"img/product-display/lpp.png", name:{fa:"ماسک مو LPP & PPT زکابر",tr:"Zekaber LPP & PPT Maske",en:"Zekaber LPP & PPT Mask"},
    desc:{fa:"ترمیم کورتکس و کوتیکل، مخصوص موی رنگ‌شده، ۵۰۰ میل",tr:"Korteks ve kütikül onarımı, 500 ml",en:"Cortex & cuticle repair, 500 ml"},
    price:{fa:"۲٬۵۵۰٬۰۰۰",tr:"2.550.000",en:"2,550,000"}, priceN:2550000 },

  { cat:{fa:"احیا مو",tr:"Saç Onarımı",en:"Hair Repair"}, catKey:"repair", tag:{fa:"پرفروش",tr:"Çok Satan",en:"Bestseller"},
    img:"img/botax.jpg", displayImg:"img/product-display/botax.png", name:{fa:"ماسک بوتاکس مو زکابر",tr:"Zekaber Saç Botoks Maskesi",en:"Zekaber Hair Botox Mask"},
    desc:{fa:"کلاژن و پروتئین، ضد وز و صاف‌کننده، ۵۰۰ میل",tr:"Kolajen ve protein, anti-frizz, 500 ml",en:"Collagen & protein, anti-frizz, 500 ml"},
    price:{fa:"۲٬۵۵۰٬۰۰۰",tr:"2.550.000",en:"2,550,000"}, priceN:2550000 },

  { cat:{fa:"شامپو",tr:"Şampuan",en:"Shampoo"}, catKey:"shampoo", tag:null,
    img:"img/shampo.jpg", displayImg:"img/product-display/shampo.png", name:{fa:"شامپو ضد ریزش زکابر",tr:"Zekaber Dökülme Karşıtı Şampuan",en:"Zekaber Anti-Hair Loss Shampoo"},
    desc:{fa:"کراتین و کلاژن، تقویت و رشد مجدد مو، بدون سولفات",tr:"Keratin ve kolajen, sülfatsız",en:"Keratin & collagen, sulfate-free"},
    price:{fa:"۱٬۲۵۰٬۰۰۰",tr:"1.250.000",en:"1,250,000"}, priceN:1250000 },

  { cat:{fa:"احیا مو",tr:"Saç Onarımı",en:"Hair Repair"}, catKey:"repair", tag:{fa:"حرفه‌ای",tr:"Profesyonel",en:"Pro"},
    img:"img/coktail.jpg", displayImg:"img/product-display/coktail.png", name:{fa:"هیر کوکتل زکابر",tr:"Zekaber Hair Cocktail",en:"Zekaber Hair Cocktail"},
    desc:{fa:"پودر ترمیم و احیای پیشرفته مو، ۵۰ گرم",tr:"Gelişmiş onarım ve canlandırma pudrası, 50 g",en:"Advanced repair & revival powder, 50 g"},
    price:{fa:"۱٬۸۰۰٬۰۰۰",tr:"1.800.000",en:"1,800,000"}, priceN:1800000 },

  { cat:{fa:"مراقبت مو",tr:"Saç Bakımı",en:"Hair Care"}, catKey:"hair", tag:null,
    img:"img/koster.jpg", displayImg:"img/product-display/koster.png", name:{fa:"اسپری دوفاز کستر انرژی",tr:"Koster Energy İki Fazlı Sprey",en:"Koster Energy Two-Phase Spray"},
    desc:{fa:"نرم‌کننده دوفاز بدون آبکشی، ۲۵۰ میل",tr:"Durulanmayan iki fazlı bakım, 250 ml",en:"Leave-in two-phase conditioner, 250 ml"},
    price:{fa:"۳٬۲۰۰٬۰۰۰",tr:"3.200.000",en:"3,200,000"}, priceN:3200000 }
];
