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

COPY = {
"fa": {
 "title":"یزد در گذر زمان | جاهای دیدنی یزد با عکس قدیمی و جدید | رازمهر", "description":"جاهای دیدنی شهر و استان یزد را در مجله رازمهر بشناسید؛ سه روایت تصویری مستند از عکس‌های قدیمی و جدید و فهرست ۲۸ مکان تاریخی و فرهنگی.",
 "eyebrow":"روایت تصویری از شهر بادگیرها", "heading":"یزد در گذر زمان", "intro":"کوچه‌های خشتی، باغ‌ها و بناهایی که داستان شهر را روایت می‌کنند. عکس‌های هر روایت از دو زمان متفاوت‌اند؛ زاویهٔ آن‌ها لزوماً یکسان نیست.",
 "city":"در شهر یزد", "province":"در دیگر نقاط استان", "stories":"سه روایت تصویری", "directory":"۲۸ جای دیدنی برای کشف", "directory_note":"این فهرست، نقشهٔ مطالب آیندهٔ مجله است. روایت‌های تصویری فقط جایی منتشر می‌شوند که عکس قدیمی و حق استفاده از آن بررسی شده باشد.",
 "old":"عکس قدیمی", "new":"عکس جدیدتر", "photo":"عکس", "source":"منبع تصویر و مجوز", "history":"داستان مکان", "home":"بازگشت به رازمهر", "credits":"منابع تاریخی و تصویری", "closing":"یزد را با دقت بیشتری ببینیم", "close_copy":"تاریخ و مجوز عکس‌ها را کنار هر تصویر نوشته‌ایم. عکس‌های دو دوره از یک نقطهٔ عکاسی نشده‌اند و برای مقایسهٔ دقیقِ تغییرات کالبدی شهر مناسب نیستند.",
 "read":"دیدن روایت", "more":"فهرست مکان‌ها", "brand":"مجلهٔ رازمهر",
},
"en": {
 "title":"Yazd Through Time | Historic Places and Archive Photos | Razmehr", "description":"Explore 28 places in Yazd and its province, with three researched visual stories pairing dated archive photographs with later views.",
 "eyebrow":"A visual journey through the city of windcatchers", "heading":"Yazd Through Time", "intro":"Earthen lanes, gardens and buildings tell the city's story. Each pair shows different years; the camera positions are not necessarily identical.",
 "city":"In Yazd city", "province":"Elsewhere in Yazd Province", "stories":"Three visual stories", "directory":"28 places to explore", "directory_note":"This directory is the editorial roadmap. We publish a visual story only after checking the date and reuse rights of its archive photograph.",
 "old":"Archive photograph", "new":"Later photograph", "photo":"Photo", "source":"Image source and licence", "history":"The story", "home":"Back to Razmehr", "credits":"Historical and image sources", "closing":"Look closer at Yazd", "close_copy":"Dates and image licences accompany each photograph. These views were not necessarily made from the same camera position, so they are not precise architectural comparisons.",
 "read":"Explore the story", "more":"Places directory", "brand":"Razmehr Journal",
},
"tr": {
 "title":"Zaman İçinde Yezd | Tarihi Yerler ve Arşiv Fotoğrafları | Razmehr", "description":"Yezd ve çevresindeki 28 yeri keşfedin. Tarihi fotoğrafları daha yeni görüntülerle buluşturan üç kaynaklı görsel hikâye.",
 "eyebrow":"Rüzgâr kuleleri şehrinde görsel bir yolculuk", "heading":"Zaman İçinde Yezd", "intro":"Kerpiç sokaklar, bahçeler ve yapılar şehrin hikâyesini anlatıyor. Fotoğraf çiftleri farklı yıllara ait; çekim açıları aynı olmayabilir.",
 "city":"Yezd şehrinde", "province":"Yezd ilinin diğer yerlerinde", "stories":"Üç görsel hikâye", "directory":"Keşfedilecek 28 yer", "directory_note":"Bu liste derginin yayın planıdır. Eski fotoğrafın tarihi ve kullanım hakkı incelenmeden görsel hikâye yayımlamıyoruz.",
 "old":"Arşiv fotoğrafı", "new":"Daha yeni fotoğraf", "photo":"Fotoğraf", "source":"Görsel kaynağı ve lisans", "history":"Mekânın hikâyesi", "home":"Razmehr'e dön", "credits":"Tarih ve görsel kaynakları", "closing":"Yezd'e daha yakından bakalım", "close_copy":"Her fotoğrafın tarihi ve lisansı belirtilmiştir. Kareler her zaman aynı açıdan çekilmediği için yapıların değişimini birebir göstermez.",
 "read":"Hikâyeyi incele", "more":"Yerler dizini", "brand":"Razmehr Dergisi",
},
"ar": {
 "title":"يزد عبر الزمن | معالم تاريخية وصور قديمة وحديثة | رازمهر", "description":"تعرّف إلى ٢٨ موقعاً في مدينة يزد ومحافظتها، مع ثلاث حكايات مصوّرة تجمع صوراً مؤرّخة من الأرشيف ومشاهد أحدث.",
 "eyebrow":"رحلة مصوّرة في مدينة أبراج الرياح", "heading":"يزد عبر الزمن", "intro":"تروي الأزقة الطينية والحدائق والمباني حكاية المدينة. تعود كل صورتين إلى زمنين مختلفين، وقد تختلف زاوية التصوير.",
 "city":"داخل مدينة يزد", "province":"في بقية محافظة يزد", "stories":"ثلاث حكايات مصوّرة", "directory":"٢٨ مكاناً للاستكشاف", "directory_note":"هذه القائمة خطة المجلة للمحتوى المقبل. لا ننشر حكاية مصوّرة قبل التحقق من تاريخ الصورة القديمة وحقوق استخدامها.",
 "old":"صورة أرشيفية", "new":"صورة أحدث", "photo":"تصوير", "source":"مصدر الصورة وترخيصها", "history":"حكاية المكان", "home":"العودة إلى رازمهر", "credits":"المصادر التاريخية ومصادر الصور", "closing":"لننظر إلى يزد عن قرب", "close_copy":"أُدرج تاريخ كل صورة وترخيصها. لم تُلتقط الصور بالضرورة من الزاوية نفسها، لذلك لا تصلح لمقارنة معمارية دقيقة.",
 "read":"اقرأ الحكاية", "more":"دليل الأماكن", "brand":"مجلة رازمهر",
}}

STORIES = [
 {"id":"historic-yazd", "old":"yazd-1956", "new":"yazd-current", "years":("1956", "2020"), "credit":("National Cartographic Center of Iran", "Baharak Roshanbakhsh"), "license":("Public domain", "CC0 1.0"),
  "file":("Aerial_photograph_of_Yazd-1956.jpg", "Historical_context_of_Yazd.jpg"), "source":"https://whc.unesco.org/en/list/1544/",
  "copy":{
   "fa":"در عکس هوایی سال ۱۳۳۵، بافت فشردهٔ شهر و مسیر کوچه‌ها دیده می‌شود. تصویر جدیدتر، تجربهٔ قدم‌زدن میان دیوارهای خشتی و ساباط‌ها را نشان می‌دهد. یونسکو یزد را به‌خاطر سازگاری معماری خشتی، بادگیرها و شبکهٔ قنات با اقلیم خشک در فهرست میراث جهانی ثبت کرده است. این دو تصویر از زاویه‌های متفاوت‌اند و مقایسهٔ نقطه‌به‌نقطه نیستند.",
   "en":"The 1956 aerial photograph shows the compact city and its network of lanes. The later view brings us down to the earthen walls and shaded passages. UNESCO recognizes Yazd for its earthen architecture, windcatchers and qanat water system, shaped by a dry climate. These two photographs have different vantage points.",
   "tr":"1956 tarihli hava fotoğrafı, sık dokulu kenti ve sokak ağını gösteriyor. Daha yeni kare, kerpiç duvarların ve gölgeli geçitlerin arasına iniyor. UNESCO, Yezd'in kurak iklime uyum sağlayan kerpiç mimarisini, rüzgâr kulelerini ve kanat su sistemini vurguluyor. Fotoğraflar farklı açılardan çekilmiştir.",
   "ar":"تُظهر الصورة الجوية لعام ١٩٥٦ نسيج المدينة المتراص وأزقتها. وتنقلنا الصورة الأحدث إلى جدران الطين والممرات المظللة. تُبرز اليونسكو عمارة يزد الطينية وأبراج الرياح وشبكة القنوات التي تكيفت مع المناخ الجاف. التُقطت الصورتان من زاويتين مختلفتين."}},
 {"id":"amir-chakhmaq", "old":"amir-1970s", "new":"amir-current", "years":("1970", "2016"), "credit":("Iranian press archive", "Tu Manling"), "license":("Public domain in Iran", "CC BY-SA 4.0"),
  "file":("Amir_Chakhmaq_Complex,_Yazd,_1970s.jpg", "Amir_Chakhmaq_Complex_of_Yazd.jpg"), "source":"https://visitiran.ir/attraction/amir-chakhmaq-complex",
  "copy":{
   "fa":"مجموعهٔ امیرچخماق در قلب یزد، بخشی از حافظهٔ شهری و آیین‌های جمعی آن است. نمای چندطبقهٔ تکیه در عکس قدیمی سال ۱۳۴۹ و تصویر سال ۲۰۱۶ دیده می‌شود، اما قاب‌ها هم‌زاویه نیستند. میدان و بناهای پیرامونش امروز هم از شناخته‌شده‌ترین نشانه‌های شهرند.",
   "en":"Amir Chakhmaq is part of Yazd's shared urban memory and ceremonial life. Its tiered façade appears in both the 1970 archive photograph and a 2016 view, though the framing differs. The square and surrounding structures remain among the city's best-known landmarks.",
   "tr":"Emir Çakmak, Yezd'in ortak kent belleğinin ve tören yaşamının bir parçasıdır. Katlı cephesi 1970 tarihli arşiv fotoğrafında ve 2016 karesinde görülür; çekim açıları farklıdır. Meydan ve çevresindeki yapılar hâlâ şehrin en tanınan simgelerindendir.",
   "ar":"يشكّل مجمع أمير جخماق جزءاً من ذاكرة يزد الحضرية واحتفالاتها الجماعية. تظهر واجهته المتدرجة في صورة أرشيفية من عام ١٩٧٠ وأخرى من عام ٢٠١٦، مع اختلاف زاوية التصوير. ولا يزال الميدان ومبانيه من أبرز معالم المدينة."}},
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
    nav = " ".join(f'<a href="yazd-{code}.html" hreflang="{code}" lang="{code}"' + (' aria-current="page"' if code == lang else '') + f'>{code.upper()}</a>' for code in COPY)
    story_html=[]
    for i,s in enumerate(STORIES):
        figures=[]
        for when,year,author,license,file in zip(("old","new"),s["years"],s["credit"],s["license"],s["file"]):
            figures.append(f'<figure><img src="img/yazd/{s[when]}.webp" alt="{e(names[s["id"]])} — {e(year)}" loading="lazy" width="1200" height="800"><figcaption><strong>{e(t[when])} · <bdi>{e(year)}</bdi></strong><br>{e(t["photo"])}: {e(author)} · <a href="{e(file_source(file))}" target="_blank" rel="noopener noreferrer">{e(license)}</a></figcaption></figure>')
        story_html.append(f'<article class="story" id="{s["id"]}"><div class="story-head"><span class="kicker">{i+1:02d} / 03</span><h3>{e(names[s["id"]])}</h3></div><div class="pair">{"".join(figures)}</div><div class="story-foot"><div><h4>{e(t["history"])}</h4><p>{e(s["copy"][lang])}</p></div><a class="source" href="{e(s["source"])}" target="_blank" rel="noopener noreferrer">{e(t["credits"])} ↗</a></div></article>')
    def directory(rows):
        result=[]
        features={s["id"] for s in STORIES}
        for num,p in rows:
            label=e(p[INDEX[lang]])
            inside=f'<span class="num">{num:02d}</span><span>{label}</span>'
            result.append(f'<li>{f"<a href=\"#{p[0]}\">{inside}<span class=\"arrow\" aria-hidden=\"true\">↗</span></a>" if p[0] in features else f"<span class=\"directory-item\">{inside}</span>"}</li>')
        return '<ol class="directory-grid">'+''.join(result)+'</ol>'
    structured={"@context":"https://schema.org","@type":"CollectionPage","name":t["heading"],"description":t["description"],"inLanguage":lang,"url":url,"publisher":{"@type":"Organization","name":"Razmehr","url":"https://razmehrbeauty.com/"}}
    return f'''<!doctype html>
<html lang="{lang}" dir="{direction}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(t['title'])}</title><meta name="description" content="{e(t['description'])}">
<meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="{url}">
{links}
<meta property="og:type" content="article"><meta property="og:locale" content="{lang}"><meta property="og:title" content="{e(t['title'])}"><meta property="og:description" content="{e(t['description'])}"><meta property="og:url" content="{url}"><meta property="og:image" content="https://razmehrbeauty.com/img/yazd/amir-current.webp"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#5f6b42"><link rel="icon" href="img/logo.png"><link rel="stylesheet" href="yazd.css?v=20260926a">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Vazirmatn:wght@400;500;600;700&display=swap" rel="stylesheet">
<script type="application/ld+json">{json.dumps(structured,ensure_ascii=False).replace('<','\\u003c')}</script>
</head><body>
<a class="skip" href="#main">{e(t['stories'])}</a>
<header class="site-head"><div class="wrap head-row"><a class="brand" href="index.html"><img src="img/logo.png" width="40" height="40" alt=""><span>RAZMEHR<small>{e(t['brand'])}</small></span></a><nav class="head-actions" aria-label="Languages"><div class="locale">{nav}</div><a class="back" href="index.html">{e(t['home'])}</a></nav></div></header>
<main id="main"><section class="hero"><div class="wrap hero-inner"><p class="eyebrow">{e(t['eyebrow'])}</p><h1>{e(t['heading'])}</h1><p class="intro">{e(t['intro'])}</p><div class="hero-links"><a class="pill primary" href="#stories">{e(t['stories'])}</a><a class="pill" href="#places">{e(t['more'])}</a></div></div><img class="hero-img" src="img/yazd/amir-current.webp" alt="{e(names['amir-chakhmaq'])}" width="1200" height="807"></section>
<section class="wrap section" id="stories"><div class="section-head"><p class="eyebrow">RAZMEHR · YAZD</p><h2>{e(t['stories'])}</h2></div>{''.join(story_html)}</section>
<section class="directory-section" id="places"><div class="wrap"><div class="section-head"><p class="eyebrow">28 / YAZD</p><h2>{e(t['directory'])}</h2><p>{e(t['directory_note'])}</p></div><h3>{e(t['city'])}</h3>{directory(enumerate(PLACES[:18],1))}<h3>{e(t['province'])}</h3>{directory(enumerate(PLACES[18:],19))}</div></section>
<section class="wrap closing"><h2>{e(t['closing'])}</h2><p>{e(t['close_copy'])}</p><p class="references"><a href="https://whc.unesco.org/en/list/1544/" target="_blank" rel="noopener noreferrer">UNESCO · Historic City of Yazd</a> · <a href="https://visitiran.ir/fa/%DB%8C%D8%B2%D8%AF%DA%AF%D8%B1%D8%AF%DB%8C" target="_blank" rel="noopener noreferrer">Visit Iran · Yazd</a> · <a href="https://commons.wikimedia.org/wiki/Category:Yazd" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a></p></section>
</main><footer><div class="wrap footer-row"><span>RAZMEHR</span><span>© 2026 · {e(t['brand'])}</span><a href="index.html">{e(t['home'])}</a></div></footer>
<script>try{{localStorage.setItem('razmehr-language','{lang}')}}catch(_error){{}}</script>
</body></html>'''

if __name__ == "__main__":
    assert len(PLACES) == 28 and len({x[0] for x in PLACES}) == 28
    for lang in COPY:
        (ROOT / f"yazd-{lang}.html").write_text(build(lang),encoding="utf-8")
