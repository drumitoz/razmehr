#!/usr/bin/env python3
"""Build the four crawlable, localized Yazd editorial pages."""
from html import escape
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]

# Names are editorial translations, rather than machine-translated UI strings.
PLACES = [
    ("historic-yazd", "بافت تاریخی یزد", "Historic City of Yazd", "Yezd Tarihi Kenti", "مدينة يزد التاريخية"),
    ("fahadan", "محله فهادان", "Fahadan Quarter", "Fahadan Mahallesi", "حي فهادان"),
    ("jameh-mosque", "مسجد جامع یزد", "Jameh Mosque of Yazd", "Yezd Ulu Camii", "مسجد يزد الجامع"),
    ("amir-chakhmaq", "مجموعه امیرچخماق", "Amir Chakhmaq Complex", "Emir Çakmak Külliyesi", "مجمع أمير جخماق"),
    ("dowlat-abad", "باغ دولت‌آباد", "Dowlat Abad Garden", "Devletabad Bahçesi", "حديقة دولت آباد"),
    ("fire-temple", "آتشکده زرتشتیان", "Yazd Fire Temple", "Yezd Ateş Tapınağı", "معبد النار الزرادشتي في يزد"),
    ("towers-of-silence", "دخمه زرتشتیان", "Towers of Silence", "Sessizlik Kuleleri", "أبراج الصمت"),
    ("water-museum", "موزه آب", "Yazd Water Museum", "Yezd Su Müzesi", "متحف المياه في يزد"),
    ("mirror-museum", "موزه آینه و روشنایی", "Mirror and Lighting Museum", "Ayna ve Işık Müzesi", "متحف المرايا والإضاءة"),
    ("lari-house", "خانه لاری‌ها", "Lari House", "Lârîler Evi", "بيت اللاريين"),
    ("ziaieh", "مدرسه ضیائیه", "Ziaieh School", "Ziyaiye Medresesi", "مدرسة ضيائية"),
    ("twelve-imams", "بقعه دوازده امام", "Davazdah Imam Shrine", "On İki İmam Türbesi", "ضريح الأئمة الاثني عشر"),
    ("khan-bazaar", "بازار خان", "Khan Bazaar", "Han Çarşısı", "بازار خان"),
    ("six-windcatchers", "آب‌انبار شش بادگیری", "Six Windcatchers Cistern", "Altı Rüzgârlı Sarnıç", "خزان المياه ذو أبراج الرياح الستة"),
    ("clock-square", "میدان وقت‌الساعت", "Vaght-o-Sa'at Square", "Vaktü's Saat Meydanı", "ميدان وقت الساعة"),
    ("malek-house", "خانه ملک‌التجار", "Malek-ol-Tojjar House", "Malek-ol-Tojjar Evi", "بيت ملك التجار"),
    ("city-walls", "برج و باروی قدیمی شهر", "Old City Walls", "Eski Şehir Surları", "أسوار المدينة القديمة"),
    ("zarch-qanat", "مسیر قنات زارچ", "Zarch Qanat", "Zarç Kanatı", "قناة زارچ"),
    ("narin-castle", "نارین‌قلعه میبد", "Narin Castle, Meybod", "Meybod Narin Kalesi", "قلعة نارين في ميبد"),
    ("meybod-icehouse", "یخچال خشتی میبد", "Meybod Adobe Icehouse", "Meybod Kerpiç Buzhanesi", "بيت الجليد الطيني في ميبد"),
    ("meybod-dovecote", "کبوترخانه میبد", "Meybod Dovecote", "Meybod Güvercinliği", "برج الحمام في ميبد"),
    ("chak-chak", "زیارتگاه چک‌چک", "Chak Chak Shrine", "Çak Çak Ziyaretgâhı", "مزار چك چك"),
    ("kharanaq", "بافت تاریخی خرانق", "Historic Kharanaq", "Tarihi Haranak", "خرانق التاريخية"),
    ("abarkuh-cypress", "سرو ابرکوه", "Abarkuh Cypress", "Eberkuh Servisi", "سرو أبركوه"),
    ("aghazadeh", "خانه آقازاده ابرکوه", "Aghazadeh House, Abarkuh", "Eberkuh Ağazade Evi", "بيت آقازاده في أبركوه"),
    ("pahlavanpur", "باغ پهلوان‌پور", "Pahlavanpur Garden", "Pehlivanpur Bahçesi", "حديقة بهلوان بور"),
    ("saryazd", "قلعه سریزد", "Saryazd Castle", "Seryezd Kalesi", "قلعة سريزد"),
    ("fahraj-mosque", "مسجد جامع فهرج", "Jameh Mosque of Fahraj", "Fehrec Ulu Camii", "مسجد فهرج الجامع"),
]

# Short visitor notes for the full directory; the three image stories below are separate.
PLACE_NOTES = {
 "fahadan": ("در کوچه‌های فهادان می‌توان ساباط‌ها، دیوارهای خشتی و خانه‌های قدیمی را از نزدیک دید.", "Walk among Fahadan's shaded passages, earthen walls and traditional houses.", "Fahadan'ın gölgeli geçitleri, kerpiç duvarları ve geleneksel evleri arasında yürüyün.", "تجوّلوا بين ممرات فهادان المظلّلة وجدرانها الطينية وبيوتها التقليدية."),
 "jameh-mosque": ("سردر بلند و کاشی‌کاری مسجد جامع، یکی از چشم‌گیرترین منظره‌های بافت قدیم یزد است.", "The mosque's soaring entrance and tilework make it a landmark of old Yazd.", "Yüksek taçkapısı ve çinileriyle cami, eski Yezd'in simgelerindendir.", "تجعل البوابة العالية والكسوة الخزفية من المسجد معلماً بارزاً في يزد القديمة."),
 "dowlat-abad": ("در باغ دولت‌آباد، آب و درخت و بادگیر بلند عمارت کنار هم فضای یک باغ ایرانی را می‌سازند.", "Water, trees and a tall windcatcher shape the experience of this Persian garden.", "Su, ağaçlar ve yüksek rüzgâr kulesi bu İran bahçesinin atmosferini oluşturur.", "تجتمع المياه والأشجار وبرج الرياح العالي في مشهد من مشاهد الحديقة الفارسية."),
 "fire-temple": ("آتشکده، از مکان‌های مهم جامعهٔ زرتشتی یزد و فرصتی برای آشنایی با میراث زندهٔ آن است.", "The fire temple offers a glimpse into Yazd's living Zoroastrian heritage.", "Ateş tapınağı, Yezd'in yaşayan Zerdüşt mirasını tanımak için bir duraktır.", "يتيح معبد النار التعرّف إلى التراث الزرادشتي الحي في يزد."),
 "towers-of-silence": ("دخمه‌ها بر بلندی‌های حاشیهٔ شهر قرار دارند و یادآور آیین‌های خاک‌سپاری زرتشتیان در گذشته‌اند.", "On the hills outside the city, the towers recall former Zoroastrian funerary practices.", "Kent dışındaki tepelerde bulunan kuleler, geçmişteki Zerdüşt cenaze geleneklerini hatırlatır.", "تذكّر الأبراج القائمة على التلال خارج المدينة بطقوس الدفن الزرادشتية القديمة."),
 "water-museum": ("موزهٔ آب در خانه‌ای تاریخی، روایت زندگی در اقلیم خشک و نقش قنات در آن را پیش چشم می‌گذارد.", "In a historic house, the museum traces how qanats sustained life in an arid city.", "Tarihi bir evdeki müze, kanatların kurak bir kentte yaşamı nasıl beslediğini anlatır.", "يعرض المتحف في بيت تاريخي دور القنوات في الحياة داخل مدينة جافة."),
 "mirror-museum": ("این عمارت با آینه‌کاری‌ها و نمایش آثار روشنایی، گوشه‌ای متفاوت از هنر و زندگی شهری یزد را نشان می‌دهد.", "Mirrored decoration and lighting objects offer a different view of Yazd's decorative arts.", "Aynalı süslemeler ve aydınlatma eserleri, Yezd'in bezeme sanatına farklı bir bakış sunar.", "تقدّم الزخارف المرآتية وأدوات الإضاءة جانباً مختلفاً من فنون يزد الزخرفية."),
 "lari-house": ("حیاط، بادگیر و اتاق‌های پیرامونی خانهٔ لاری‌ها، شیوهٔ زندگی در خانه‌های سنتی یزد را نشان می‌دهند.", "Its courtyard, windcatchers and surrounding rooms evoke life in a traditional Yazd home.", "Avlusu, rüzgâr kuleleri ve çevresindeki odaları geleneksel Yezd evindeki yaşamı yansıtır.", "يستحضر فناء البيت وأبراج رياحه وغرفه المحيطة حياة البيوت التقليدية في يزد."),
 "twelve-imams": ("این بقعه در مسیر پیاده‌روی بافت تاریخی، با گنبد و معماری آجری‌اش توجه را جلب می‌کند.", "This domed brick shrine is a memorable stop on a walk through the old city.", "Tuğla örgülü kubbesiyle bu türbe, eski şehir yürüyüşünde dikkat çeker.", "يستوقف هذا الضريح ذو القبة والعمارة الآجرية زائر المدينة القديمة."),
 "khan-bazaar": ("در گذرهای بازار خان می‌توان حال‌وهوای دادوستد در قلب تاریخی یزد را تجربه کرد.", "The bazaar's passages preserve the atmosphere of trading in historic Yazd.", "Han Çarşısı'nın geçitleri, tarihi Yezd'in alışveriş atmosferini yaşatır.", "تحافظ ممرات سوق خان على أجواء التجارة في قلب يزد التاريخي."),
 "six-windcatchers": ("شش بادگیر بالای این آب‌انبار، از دور نشانه‌ای آشنا در چشم‌انداز شهرند.", "Six windcatchers rising above this cistern form a distinctive Yazd silhouette.", "Sarnıcın üzerindeki altı rüzgâr kulesi Yezd siluetinde hemen seçilir.", "ترسم أبراج الرياح الستة فوق الخزان مشهداً مميزاً في أفق يزد."),
 "clock-square": ("میدان وقت‌الساعت، با بنای ساعت و گذرهای اطرافش، توقفی کوتاه در مسیر گشت‌وگذار شهر است.", "The clock structure and nearby lanes make this square an easy stop during a city walk.", "Saat yapısı ve çevresindeki sokaklarla bu meydan, kent gezisinde hoş bir duraktır.", "يجعل برج الساعة والأزقة المحيطة بالميدان منه محطة لطيفة أثناء التجوّل."),
 "malek-house": ("خانهٔ ملک‌التجار از خانه‌های تاریخی یزد است؛ حیاط و فضاهای داخلی‌اش حال‌وهوای یک عمارت شهری را دارند.", "This historic merchant's house retains the feel of an urban courtyard residence.", "Bu tarihi tüccar evi, avlulu bir şehir konağının atmosferini korur.", "يحافظ بيت التاجر التاريخي على أجواء منزل حضري ذي فناء."),
 "city-walls": ("بخش‌هایی از برج و باروی قدیمی، یادآور مرزهای شهر در روزگار پیشین‌اند.", "Surviving stretches of wall evoke the boundaries of the earlier city.", "Eski surların günümüze kalan bölümleri, kentin geçmişteki sınırlarını hatırlatır.", "تستحضر الأجزاء الباقية من الأسوار حدود المدينة في الماضي."),
 "zarch-qanat": ("قنات زارچ بخشی از داستان سازگاری یزد با کم‌آبی است؛ مسیر زیرزمینی آن را باید در بستر میراث آبی شهر شناخت.", "The Zarch qanat is part of Yazd's long story of adapting to scarce water.", "Zarç kanatı, Yezd'in su kıtlığına uyum sağlama hikâyesinin bir parçasıdır.", "قناة زارچ جزء من حكاية تكيّف يزد الطويلة مع ندرة المياه."),
 "narin-castle": ("نارین‌قلعه بر فراز میبد، با دیوارهای خشتی‌اش یکی از چشم‌اندازهای شاخص این شهر است.", "This adobe citadel rises above Meybod and defines part of its skyline.", "Kerpiç kale Meybod'un üzerinde yükselir ve kentin siluetini belirler.", "ترتفع القلعة الطينية فوق ميبد وتشكل جزءاً من أفقها."),
 "meybod-icehouse": ("یخچال خشتی میبد یادگار شیوه‌های نگهداری یخ و سازگاری با گرمای کویر است.", "Meybod's adobe icehouse recalls ways of storing ice in a hot desert climate.", "Meybod'un kerpiç buzhanesi, sıcak çöl ikliminde buz saklama yöntemlerini hatırlatır.", "يذكّر بيت الجليد الطيني في ميبد بطرق حفظ الجليد في المناخ الصحراوي الحار."),
 "meybod-dovecote": ("کبوترخانهٔ میبد با برج و حجره‌های متعددش نمونه‌ای از معماری کارکردی منطقه است.", "The dovecote's many nesting spaces reveal a practical side of local architecture.", "Güvercinliğin çok sayıdaki yuvası, yerel mimarinin işlevsel yönünü gösterir.", "تكشف أعشاش برج الحمام الكثيرة جانباً عملياً من العمارة المحلية."),
 "chak-chak": ("زیارتگاه چک‌چک در دل کوه، از مکان‌های مقدس زرتشتیان و مقصدی متفاوت در استان یزد است.", "Set against the mountains, Chak Chak is a Zoroastrian pilgrimage site.", "Dağların arasında yer alan Çak Çak, Zerdüştler için bir ziyaret yeridir.", "يقع مزار چك چك بين الجبال، وهو موضع زيارة مقدّس لدى الزرادشتيين."),
 "kharanaq": ("در خرانق، کوچه‌های خشتی و بافت روستایی قدیمی، تجربه‌ای متفاوت از شهر یزد پیش روی شما می‌گذارند.", "Kharanaq's earthen lanes and old village fabric offer another face of the region.", "Haranak'ın kerpiç sokakları ve eski köy dokusu, bölgenin başka bir yüzünü sunar.", "تقدّم أزقة خرانق الطينية ونسيجها القروي القديم وجهاً آخر للمنطقة."),
 "abarkuh-cypress": ("سرو کهن ابرکوه، درختی نام‌آشنا و از دیدنی‌های طبیعی برجستهٔ استان است.", "The ancient cypress is a beloved natural landmark of Abarkuh.", "Kadim servi, Eberkuh'un sevilen doğal simgelerindendir.", "تُعدّ السروة العتيقة معلماً طبيعياً شهيراً في أبركوه."),
 "aghazadeh": ("خانهٔ آقازاده با بادگیر و حیاطش، یکی از نماهای به‌یادماندنی معماری ابرکوه است.", "Its windcatcher and courtyard make Aghazadeh House a memorable Abarkuh landmark.", "Rüzgâr kulesi ve avlusuyla Ağazade Evi, Eberkuh'un unutulmaz yapılarındandır.", "يجعل برج الرياح والفناء بيت آقازاده من معالم أبركوه اللافتة."),
 "pahlavanpur": ("باغ پهلوان‌پور در مهریز، با درختان و آب جاری، فرصتی برای مکث در میان باغ‌های ایرانی است.", "In Mehriz, trees and flowing water invite a pause at Pahlavanpur Garden.", "Mehriz'deki Pehlivanpur Bahçesi, ağaçları ve akan suyuyla dinlenmeye çağırır.", "تدعو الأشجار والمياه الجارية في حديقة بهلوان بور بمهريز إلى التمهّل."),
 "saryazd": ("قلعهٔ خشتی سریزد، با دیوارها و گذرهای درونی‌اش، از بناهای تماشایی پیرامون یزد است.", "Saryazd's adobe walls and inner passages make the fortress worth a detour.", "Seryezd'in kerpiç surları ve iç geçitleri, kaleyi görmeye değer kılar.", "تجعل الأسوار الطينية والممرات الداخلية قلعة سريزد جديرة بالزيارة."),
 "fahraj-mosque": ("مسجد جامع فهرج با آجرکاری ساده و فضای آرامش، توقفی دلنشین در سفر به روستاهای اطراف یزد است.", "Fahraj's brick mosque offers a quiet stop while exploring villages near Yazd.", "Fehrec'in tuğla camisi, Yezd çevresindeki köyleri gezerken sakin bir duraktır.", "يقدّم مسجد فهرج الآجري محطة هادئة في جولة قرى يزد المجاورة."),
}

COPY = {
"fa": {
 "title":"یزد در گذر زمان | جاهای دیدنی یزد با عکس قدیمی و جدید | رازمهر", "description":"جاهای دیدنی شهر و استان یزد را در مجله رازمهر بشناسید؛ سه روایت تصویری مستند از عکس‌های قدیمی و جدید و فهرست ۲۸ مکان تاریخی و فرهنگی.",
 "eyebrow":"روایت تصویری از شهر بادگیرها", "heading":"یزد در گذر زمان", "intro":"اگر برای دوره‌های رازمهر مهمان یزد هستید، این شهر را هم بخشی از سفر خود بدانید. از کوچه‌های خشتی تا باغ‌ها و بناهای تاریخی، دیدنی‌های بسیاری در انتظار شماست.",
 "city":"در شهر یزد", "province":"در دیگر نقاط استان", "stories":"سه روایت تصویری", "directory":"۲۸ جای دیدنی یزد", "directory_note":"از قلب بافت تاریخی تا شهرها و آبادی‌های اطراف؛ برای برنامه‌ریزی سفر، این مکان‌ها را بشناسید.",
 "old":"عکس قدیمی", "new":"عکس جدیدتر", "photo":"عکس", "source":"منبع تصویر و مجوز", "history":"داستان مکان", "home":"بازگشت به رازمهر", "credits":"بیشتر دربارهٔ مکان", "photo_credits":"اعتبار عکس‌ها", "closing":"یزد، بخشی از سفر شما", "close_copy":"اگر برای یادگیری به رازمهر می‌آیید، زمانی را هم به دیدن یزد اختصاص دهید؛ شهری که هر کوچه‌اش چیزی برای کشف‌کردن دارد.",
 "read":"دیدن روایت", "more":"فهرست مکان‌ها", "brand":"مجلهٔ رازمهر", "places_notes":"دیدنی‌های بیشتر",
},
"en": {
 "title":"Yazd Through Time | Historic Places and Archive Photos | Razmehr", "description":"Explore 28 places in Yazd and its province, with three researched visual stories pairing dated archive photographs with later views.",
 "eyebrow":"A visual journey through the city of windcatchers", "heading":"Yazd Through Time", "intro":"If you are visiting for a Razmehr course, make the city part of your journey too. Earthen lanes, gardens and historic buildings are waiting to be explored.",
 "city":"In Yazd city", "province":"Elsewhere in Yazd Province", "stories":"Three visual stories", "directory":"28 places in Yazd", "directory_note":"From the heart of the old city to the towns and villages beyond, find places worth making time for.",
 "old":"Archive photograph", "new":"Later photograph", "photo":"Photo", "source":"Image source and licence", "history":"The story", "home":"Back to Razmehr", "credits":"Read more about the place", "photo_credits":"Photo credits", "closing":"Make room for Yazd", "close_copy":"Coming to Razmehr to learn? Leave some time to discover Yazd as well. Every lane offers another reason to linger.",
 "read":"Explore the story", "more":"Places directory", "brand":"Razmehr Journal", "places_notes":"More places to discover",
},
"tr": {
 "title":"Zaman İçinde Yezd | Tarihi Yerler ve Arşiv Fotoğrafları | Razmehr", "description":"Yezd ve çevresindeki 28 yeri keşfedin. Tarihi fotoğrafları daha yeni görüntülerle buluşturan üç kaynaklı görsel hikâye.",
 "eyebrow":"Rüzgâr kuleleri şehrinde görsel bir yolculuk", "heading":"Zaman İçinde Yezd", "intro":"Razmehr eğitimi için Yezd'e geliyorsanız şehri de yolculuğunuzun bir parçası yapın. Kerpiç sokaklar, bahçeler ve tarihi yapılar keşfedilmeyi bekliyor.",
 "city":"Yezd şehrinde", "province":"Yezd ilinin diğer yerlerinde", "stories":"Üç görsel hikâye", "directory":"Yezd'de görülecek 28 yer", "directory_note":"Tarihi merkezin kalbinden çevredeki kent ve köylere uzanan bu yerler için yolculuğunuzda zaman ayırın.",
 "old":"Arşiv fotoğrafı", "new":"Daha yeni fotoğraf", "photo":"Fotoğraf", "source":"Görsel kaynağı ve lisans", "history":"Mekânın hikâyesi", "home":"Razmehr'e dön", "credits":"Mekânı daha yakından tanıyın", "photo_credits":"Fotoğraf künyeleri", "closing":"Yezd'e de zaman ayırın", "close_copy":"Razmehr'e öğrenmek için geliyorsanız Yezd'i gezmek için de vakit ayırın. Her sokak yeni bir keşif sunar.",
 "read":"Hikâyeyi incele", "more":"Yerler dizini", "brand":"Razmehr Dergisi", "places_notes":"Keşfedilecek diğer yerler",
},
"ar": {
 "title":"يزد عبر الزمن | معالم تاريخية وصور قديمة وحديثة | رازمهر", "description":"تعرّف إلى ٢٨ موقعاً في مدينة يزد ومحافظتها، مع ثلاث حكايات مصوّرة تجمع صوراً مؤرّخة من الأرشيف ومشاهد أحدث.",
 "eyebrow":"رحلة مصوّرة في مدينة أبراج الرياح", "heading":"يزد عبر الزمن", "intro":"إذا كنتم تزورون يزد لحضور إحدى دورات رازمهر، فاجعلوا المدينة جزءاً من رحلتكم أيضاً. أزقتها الطينية وحدائقها ومبانيها التاريخية تستحق الاكتشاف.",
 "city":"داخل مدينة يزد", "province":"في بقية محافظة يزد", "stories":"ثلاث حكايات مصوّرة", "directory":"٢٨ مكاناً في يزد", "directory_note":"من قلب المدينة القديمة إلى البلدات والقرى المحيطة، أماكن تستحق أن تخصّصوا لها وقتاً في رحلتكم.",
 "old":"صورة أرشيفية", "new":"صورة أحدث", "photo":"تصوير", "source":"مصدر الصورة وترخيصها", "history":"حكاية المكان", "home":"العودة إلى رازمهر", "credits":"تعرّفوا أكثر إلى المكان", "photo_credits":"حقوق الصور", "closing":"اتركوا وقتاً ليزد", "close_copy":"إذا جئتم إلى رازمهر للتعلّم، فاتركوا وقتاً للتعرّف إلى يزد أيضاً؛ ففي كل زقاق ما يستحق الاكتشاف.",
 "read":"اقرأ الحكاية", "more":"دليل الأماكن", "brand":"مجلة رازمهر", "places_notes":"أماكن أخرى للزيارة",
}}

STORIES = [
 {"id":"historic-yazd", "old":"yazd-1956", "new":"yazd-current", "years":("1956", "2020"), "credit":("National Cartographic Center of Iran", "Baharak Roshanbakhsh"), "license":("Public domain", "CC0 1.0"),
  "file":("Aerial_photograph_of_Yazd-1956.jpg", "Historical_context_of_Yazd.jpg"), "source":"https://whc.unesco.org/en/list/1544/",
  "copy":{
   "fa":"در عکس هوایی سال ۱۳۳۵، بافت فشردهٔ شهر و مسیر کوچه‌ها دیده می‌شود. تصویر جدیدتر، تجربهٔ قدم‌زدن میان دیوارهای خشتی و ساباط‌ها را نشان می‌دهد. یونسکو یزد را به‌خاطر سازگاری معماری خشتی، بادگیرها و شبکهٔ قنات با اقلیم خشک در فهرست میراث جهانی ثبت کرده است.",
   "en":"The 1956 aerial photograph shows the compact city and its network of lanes. The later view brings us down to the earthen walls and shaded passages. UNESCO recognizes Yazd for its earthen architecture, windcatchers and qanat water system, shaped by a dry climate.",
   "tr":"1956 tarihli hava fotoğrafı, sık dokulu kenti ve sokak ağını gösteriyor. Daha yeni kare, kerpiç duvarların ve gölgeli geçitlerin arasına iniyor. UNESCO, Yezd'in kurak iklime uyum sağlayan kerpiç mimarisini, rüzgâr kulelerini ve kanat su sistemini vurguluyor.",
   "ar":"تُظهر الصورة الجوية لعام ١٩٥٦ نسيج المدينة المتراص وأزقتها. وتنقلنا الصورة الأحدث إلى جدران الطين والممرات المظللة. تُبرز اليونسكو عمارة يزد الطينية وأبراج الرياح وشبكة القنوات التي تكيفت مع المناخ الجاف."}},
 {"id":"amir-chakhmaq", "old":"amir-1970s", "new":"amir-current", "years":("1970", "2016"), "credit":("Iranian press archive", "Tu Manling"), "license":("Public domain in Iran", "CC BY-SA 4.0"),
  "file":("Amir_Chakhmaq_Complex,_Yazd,_1970s.jpg", "Amir_Chakhmaq_Complex_of_Yazd.jpg"), "source":"https://visitiran.ir/attraction/amir-chakhmaq-complex",
  "copy":{
   "fa":"مجموعهٔ امیرچخماق در قلب یزد، بخشی از حافظهٔ شهری و آیین‌های جمعی آن است. نمای چندطبقهٔ تکیه در عکس قدیمی سال ۱۳۴۹ و تصویر سال ۲۰۱۶ دیده می‌شود. میدان و بناهای پیرامونش امروز هم از شناخته‌شده‌ترین نشانه‌های شهرند.",
   "en":"Amir Chakhmaq is part of Yazd's shared urban memory and ceremonial life. Its tiered façade appears in both the 1970 archive photograph and a 2016 view. The square and surrounding structures remain among the city's best-known landmarks.",
   "tr":"Emir Çakmak, Yezd'in ortak kent belleğinin ve tören yaşamının bir parçasıdır. Katlı cephesi 1970 tarihli arşiv fotoğrafında ve 2016 karesinde görülür. Meydan ve çevresindeki yapılar hâlâ şehrin en tanınan simgelerindendir.",
   "ar":"يشكّل مجمع أمير جخماق جزءاً من ذاكرة يزد الحضرية واحتفالاتها الجماعية. تظهر واجهته المتدرجة في صورة أرشيفية من عام ١٩٧٠ وأخرى من عام ٢٠١٦. ولا يزال الميدان ومبانيه من أبرز معالم المدينة."}},
 {"id":"ziaieh", "old":"ziayieh-1970s", "new":"ziayieh-current", "years":("1970s", "2016"), "credit":("Unknown / Wikimedia Commons", "Diego Delso"), "license":("Public domain in Iran", "CC BY-SA 4.0"),
  "file":("Zia%27ieh_Madrasah-Yazd.jpg", "Prisi%C3%B3n_de_Alejandro,_Yazd,_Ir%C3%A1n,_2016-09-21,_DD_18.jpg"), "source":"https://visitiran.ir/fa/attraction/%D9%85%D8%AD%D9%84%D9%87-%D9%81%D9%87%D8%A7%D8%AF%D8%A7%D9%86-%DB%8C%D8%B2%D8%AF",
  "copy":{
   "fa":"در محلهٔ فهادان، مدرسهٔ ضیائیه با نام رایج «زندان اسکندر» هم شناخته می‌شود. این نام رایج را نباید به‌عنوان سندی برای زندانی‌بودن بنا در روزگار اسکندر گرفت. دو تصویر، نمای بنا را در دههٔ ۱۳۵۰ و سال ۲۰۱۶ نشان می‌دهند.",
   "en":"In Fahadan, Ziaieh School is also popularly called ‘Alexander's Prison’. That name should not be taken as proof that it served as a prison in Alexander's time. The photographs show the building in the 1970s and in 2016.",
   "tr":"Fahadan'daki Ziyaiye Medresesi, halk arasında ‘İskender Zindanı’ adıyla da bilinir. Bu yaygın ad, yapının İskender döneminde hapishane olduğunun kanıtı değildir. Fotoğraflar yapıyı 1970'lerde ve 2016'da gösteriyor.",
   "ar":"تُعرف مدرسة ضيائية في حي فهادان بالاسم الشائع «سجن الإسكندر». لا يُعدّ هذا الاسم دليلاً على استخدام المبنى سجناً في زمن الإسكندر. تُظهر الصورتان المبنى في سبعينيات القرن العشرين وفي عام ٢٠١٦."}},

]

INDEX = {"fa":1,"en":2,"tr":3,"ar":4}

def file_source(filename):
    return "https://commons.wikimedia.org/wiki/File:" + filename

def e(value): return escape(str(value), quote=True)

def build(lang):
    t = COPY[lang]; direction = "rtl" if lang in ("fa","ar") else "ltr"
    url = f"https://razmehrbeauty.com/yazd-{lang}.html"
    names = {p[0]:p[INDEX[lang]] for p in PLACES}
    links = "\n".join(f'<link rel="alternate" hreflang="{code}" href="https://razmehrbeauty.com/yazd-{code}.html">' for code in COPY)
    language_labels = {"fa":"فارسی", "en":"English", "tr":"Türkçe", "ar":"العربية"}
    nav = "".join(f'<button class="language-option{ " active" if code == lang else "" }" type="button" role="radio" aria-checked="{str(code == lang).lower()}" data-set-language="{code}"><span>{language_labels[code]}</span><small>{code.upper()}</small></button>' for code in COPY)
    story_html=[]
    for i,s in enumerate(STORIES):
        figures=[]
        for when,year,author,license,file in zip(("old","new"),s["years"],s["credit"],s["license"],s["file"]):
            figures.append(f'<figure><img src="img/yazd/{s[when]}.webp" alt="{e(names[s["id"]])} — {e(year)}" loading="lazy" width="1200" height="800"><figcaption><strong>{e(t[when])} · <bdi>{e(year)}</bdi></strong></figcaption></figure>')
        credits = " · ".join(f'<a href="{e(file_source(file))}" target="_blank" rel="noopener noreferrer">{e(author)} · {e(license)}</a>' for author,license,file in zip(s["credit"],s["license"],s["file"]))
        story_html.append(f'<article class="story" id="{s["id"]}"><div class="story-head"><span class="kicker">{i+1:02d} / 03</span><h3>{e(names[s["id"]])}</h3></div><div class="pair">{"".join(figures)}</div><div class="story-foot"><div><h4>{e(t["history"])}</h4><p>{e(s["copy"][lang])}</p></div><a class="source" href="{e(s["source"])}" target="_blank" rel="noopener noreferrer">{e(t["credits"])} ↗</a></div><details class="photo-credits"><summary>{e(t["photo_credits"])}</summary><p>{credits}</p></details></article>')
    def directory(rows):
        result=[]
        features={s["id"] for s in STORIES}
        for num,p in rows:
            label=e(p[INDEX[lang]])
            inside=f'<span class="num">{num:02d}</span><span>{label}</span>'
            anchor = p[0] if p[0] in features else f'place-{p[0]}'
            result.append(f'<li><a href="#{anchor}">{inside}<span class="arrow" aria-hidden="true">↗</span></a></li>')
        return '<ol class="directory-grid">'+''.join(result)+'</ol>'
    notes = ''.join(f'<article class="place-note" id="place-{p[0]}"><h3>{e(p[INDEX[lang]])}</h3><p>{e(PLACE_NOTES[p[0]][list(COPY).index(lang)])}</p></article>' for p in PLACES if p[0] in PLACE_NOTES)
    structured={"@context":"https://schema.org","@type":"CollectionPage","name":t["heading"],"description":t["description"],"inLanguage":lang,"url":url,"publisher":{"@type":"Organization","name":"Razmehr","url":"https://razmehrbeauty.com/"}}
    return f'''<!doctype html>
<html lang="{lang}" dir="{direction}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(t['title'])}</title><meta name="description" content="{e(t['description'])}">
<meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="{url}">
{links}
<meta property="og:type" content="article"><meta property="og:locale" content="{lang}"><meta property="og:title" content="{e(t['title'])}"><meta property="og:description" content="{e(t['description'])}"><meta property="og:url" content="{url}"><meta property="og:image" content="https://razmehrbeauty.com/img/yazd/amir-current.webp"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#5f6b42"><link rel="icon" href="img/logo.png"><link rel="stylesheet" href="language-switch.css?v=20260922a"><link rel="stylesheet" href="yazd.css?v=20260926b">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Vazirmatn:wght@400;500;600;700&display=swap" rel="stylesheet">
<script type="application/ld+json">{json.dumps(structured,ensure_ascii=False).replace('<','\\u003c')}</script>
</head><body>
<a class="skip" href="#main">{e(t['stories'])}</a>
<header class="site-head"><div class="wrap head-row"><a class="brand" href="index.html"><img src="img/logo.png" width="40" height="40" alt=""><span>RAZMEHR<small>{e(t['brand'])}</small></span></a><nav class="head-actions" aria-label="Languages"><div class="language-menu" data-language-menu><button class="language-trigger" type="button" data-language-trigger aria-haspopup="true" aria-expanded="false" aria-label="Choose language"><svg class="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></svg><span data-language-current>{lang.upper()}</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button><div class="language-popover" role="radiogroup" aria-label="Language">{nav}</div></div><a class="back" href="index.html">{e(t['home'])}</a></nav></div></header>
<main id="main"><section class="hero"><div class="wrap hero-inner"><p class="eyebrow">{e(t['eyebrow'])}</p><h1>{e(t['heading'])}</h1><p class="intro">{e(t['intro'])}</p><div class="hero-links"><a class="pill primary" href="#stories">{e(t['stories'])}</a><a class="pill" href="#places">{e(t['more'])}</a></div></div><img class="hero-img" src="img/yazd/amir-current.webp" alt="{e(names['amir-chakhmaq'])}" width="1200" height="807"></section>
<section class="wrap section" id="stories"><div class="section-head"><p class="eyebrow">RAZMEHR · YAZD</p><h2>{e(t['stories'])}</h2></div>{''.join(story_html)}</section>
<section class="directory-section" id="places"><div class="wrap"><div class="section-head"><p class="eyebrow">28 / YAZD</p><h2>{e(t['directory'])}</h2><p>{e(t['directory_note'])}</p></div><h3>{e(t['city'])}</h3>{directory(enumerate(PLACES[:18],1))}<h3>{e(t['province'])}</h3>{directory(enumerate(PLACES[18:],19))}</div></section>
<section class="wrap section place-section"><div class="section-head"><p class="eyebrow">RAZMEHR · YAZD</p><h2>{e(t['places_notes'])}</h2></div><div class="place-grid">{notes}</div></section>
<section class="wrap closing"><h2>{e(t['closing'])}</h2><p>{e(t['close_copy'])}</p></section>
</main><footer><div class="wrap footer-row"><span>RAZMEHR</span><span>© 2026 · {e(t['brand'])}</span><a href="index.html">{e(t['home'])}</a></div></footer>
<script src="yazd-language.js?v=20260926b" defer></script>
</body></html>'''

if __name__ == "__main__":
    assert len(PLACES) == 28 and len({x[0] for x in PLACES}) == 28
    assert set(PLACE_NOTES) == {x[0] for x in PLACES} - {x["id"] for x in STORIES}
    assert all(len(notes) == 4 for notes in PLACE_NOTES.values())
    for lang in COPY:
        (ROOT / f"yazd-{lang}.html").write_text(build(lang),encoding="utf-8")
