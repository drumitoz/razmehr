(() => {
  'use strict';

  // Editorial translations are keyed by the stable article ID. The Persian
  // article files remain the single source for images, categories and URLs.
  window.RAZMEHR_NEWS_LOCALES = {
    en: {
      ui: { fresh: 'Latest stories', freshAria: 'Latest beauty news', live: 'New', insight: 'Razmehr’s view', sources: 'Sources:', source: 'Source:', hot: 'Trending', issue: 'This week’s issue' },
      manifest: { latestLabel: 'Editor’s picks · 26 September 2026', ticker: ['Hailey Bieber’s taupe manicure brings depth to fall neutrals', 'Taylor Swift swaps her signature wing for a soft smoky eye', 'Cloud blush and Renaissance textures take the stage at Vogue World Milano'], issue: { label: 'This week’s issue', date: '26 September 2026', updated: 'Updated 26 September' } },
      stories: {
        'hailey-bieber-taupe-fall-nails': {
          tag: 'Nail trend', title: 'Hailey Bieber’s taupe manicure: a fall neutral between brown, gray and nude', shortTitle: 'Hailey Bieber’s taupe nails: a new fall neutral',
          summary: 'Creamy taupe on Bieber’s almond nails sits between pale nude and dark brown, adding depth to fall’s neutral palette while keeping the look clean and understated.', date: '23 September 2026', readTime: '4 min read',
          alt: 'Close-up of five almond-shaped nails in creamy taupe gel polish, between light brown, gray and nude', credit: 'Image: Chaun Legend Professional Nails',
          deck: 'For the start of fall, Hailey Bieber chose creamy taupe over her usual nude or a deep brown. Vogue and Coveteur describe the manicure as a shift toward richer neutrals that remain easy to wear.',
          paragraphs: [
            'The nails have Bieber’s familiar soft almond shape and medium length: neither sharply pointed nor so short that the color disappears. A smooth, glossy finish makes the subtle difference from classic beige visible. Here, the balance of the color is the design; it needs no pattern, chrome or extra decoration.',
            'Kim Truong, the nail artist behind the look, describes taupe as a blend of brown, gray and nude. She sees it as an option for clients who are not ready to move straight to burgundy, wine or very dark brown. It bridges light summer manicures and fall’s deeper shades.',
            'Vogue identifies the shade as “Taupe That Talk” from Chaun Legend’s professional line. The useful detail is its character: a fully opaque, creamy taupe without glitter or pearlescence. Under different lighting, that simple finish can look warmer and browner or cooler and grayer.',
            'At the salon, skin undertone matters more than the trend itself. A warmer complexion can suit a browner or beiger taupe; a cooler one may be better balanced by gray or mocha. If the polish blends too closely with the skin, a slightly deeper shade or a clearer almond outline can restore definition.',
            'This is part of the neutral nail trend, but it moves beyond barely visible nudes. Taupe is quiet enough to work with many outfits and makeup looks, yet its mix of undertones gives it more character than plain beige. It is a practical seasonal change for clients who prefer minimal nail art.'
          ],
          insight: 'Razmehr’s view: The point is to find a neutral that suits the individual, not to copy one shade number. Check the client’s undertone and usual lighting before choosing a warm or cool taupe. A neat shape and glossy finish are enough; extra detail can distract from the color.',
          sources: ['Vogue — Bieber’s taupe manicure and Kim Truong’s comments', 'Coveteur — independent report on the color and fall palette', 'Chaun Legend — official shade page and image credit']
        },
        'taylor-swift-patient-zero-soft-smoky-eye': {
          tag: 'Celebrity makeup', title: 'Taylor Swift trades her signature wing for a soft smoky eye in “Patient Zero”', shortTitle: 'Taylor Swift’s soft smoky eye changes her signature makeup',
          summary: 'The official image for Swift’s new single replaces her sharp wing and familiar red lip with diffused black shadow, nearly matte skin and a muted pink lip: a measured change that still looks like her.', date: '23 September 2026', readTime: '4 min read',
          alt: 'Close-up of Taylor Swift with diffused black eye shadow, matte skin and a muted pink lip in the official Patient Zero image', credit: 'Image: Taylor Swift / Instagram',
          deck: 'In the official image introducing “Patient Zero,” Taylor Swift revises one of her most recognizable beauty signatures. As Harper’s Bazaar observes, her winged liner and red lip give way to a softer smoky eye, matte pink lips and a low-shine complexion.',
          paragraphs: [
            'The main difference begins with the shape of the eye. Instead of a precise black wing that lifts the outer corner, dark pigment is blended across the lid and below the eye, with a short tail angled slightly downward. The edges stay soft, giving the eye depth without the graphic formality of a sharp line.',
            'Her lashes also appear lighter than in many of her stage looks, without exaggerated volume. That restraint lets the black shadow, rather than liner, define the eye. The result recalls minimal 1990s makeup, although the controlled darkness keeps it from looking too plain.',
            'Skin and lips complete the shift. There is no prominent highlighter or strong blush in the image, and the complexion appears almost matte. The muted pink lip is only a little stronger than a natural lip color. Together, they form a quiet backdrop for the smoky eye.',
            'This look does not signal the end of Swift’s cat eye or red lip; both remain part of her visual identity. What makes the image interesting is how a face with such a consistent signature can suggest a new artistic chapter through small changes. The official post does not name the makeup artist, and the products used have not been verified.',
            'For a salon version, place black pencil or shadow close to the lash line and blend it with a small brush before it sets. A short, slightly downward tail distinguishes it from classic winged liner. Keep the skin, blush and lip restrained when the eyes are the focus.'
          ],
          insight: 'Razmehr’s view: A fresh look does not require abandoning a personal signature. Changing the direction of a line, the softness of its edges and the balance of colors can keep the face recognizable while making the result feel new. It is a gentle way for clients to explore a change.',
          sources: ['Harper’s Bazaar — analysis of the Patient Zero makeup', 'Taylor Swift’s official Instagram — single announcement and image']
        },
        'vogue-world-milano-renaissance-beauty': {
          tag: 'Beauty trend', title: 'Cloud blush and Renaissance textures define Vogue World Milano’s beauty look', shortTitle: 'Renaissance beauty in Milan: cloud blush and sculpted texture',
          summary: 'Vogue World Milano translated Renaissance painting into modern beauty: blush diffused toward the temples, pearly light around the eyes and hair that moves between natural texture and sculptural structure.', date: '22 September 2026', readTime: '4 min read',
          alt: 'Close-up of Gigi Hadid at Vogue World Milano with diffused pink blush, pearly eye highlight and textured hair', credit: 'Image: Getty Images / Vogue',
          deck: 'Vogue World: Milano took place on the evening of 22 September at the Galleria Vittorio Emanuele II. Vogue reports that makeup artist Pat McGrath and hairstylist Cyndia Harvey interpreted Italian Renaissance beauty through soft color, pearly light and contemporary texture rather than a literal historical reconstruction.',
          paragraphs: [
            'The clearest expression was blush that did not stop at the apples of the cheeks. Red-toned pink faded toward the temples and brow bone, creating a halo around Gigi Hadid’s face. Its edges remained soft: the pigment was strong, but the result did not look striped or heavy.',
            'White shadow on the upper lid and pearly highlight at the inner corner and lower lash line brightened the eyes. Natural-looking skin and neutral lips kept attention on the color moving between the eyes and cheeks. Shine was placed in selected areas rather than spread evenly over the face.',
            'For hair, Harvey and her team moved between natural texture, soft curls, full bobs and intricate braids. References to Botticelli and Leonardo da Vinci appeared in the shapes, while gelled sections and graphic lines made them contemporary. One striking detail was a long horseshoe-shaped braid starting at the nape and continuing into black ribbons.',
            'Two ideas met in the show: embracing frizz, curls and natural movement while building carefully controlled decorative sections. Makeup echoed that tension, with quiet skin and lips alongside expressive blush and eye highlights. The result offers a way to combine softness and structure instead of one fixed formula.',
            'A salon look need not repeat every runway detail. Diffused blush to the temple can accompany a simple updo; a sculptural braid can sit beside quieter makeup. Blended color edges, a texture suited to the hair’s volume and light placed only where needed make the idea wearable.'
          ],
          insight: 'Razmehr’s view: Historical references feel fresh when reduced to a few recognizable elements. One blurred blush placement or a precisely textured section of hair can carry the idea. Let one element lead so the face and hairstyle are not lost in detail.',
          sources: ['Vogue — report on the Renaissance beauty looks', 'GQ — event schedule, venue and beauty team', 'YesMilano — official Vogue World 2026 event listing']
        },
        'burberry-summer-2027-floral-trench': {
          tag: 'Global fashion', title: 'Burberry refreshes its check with embroidery: summer 2027 trench coats in London', shortTitle: 'Burberry’s embroidered trenches give classic check a new mood',
          summary: 'On the final day of London Fashion Week, Burberry mixed its familiar check with mimosa and lavender flowers, brighter colors and softer trenches, making its heritage feel more personal and less formal.', date: '21 September 2026', readTime: '4 min read',
          alt: 'Burberry model on a London runway in an orange leather trench with blue and green embroidery', credit: 'Image: Katie Collins / Reuters, via The Guardian',
          deck: 'Burberry presented its summer 2027 collection at Chelsea College of Arts on 21 September, closing London Fashion Week with a new reading of the British trench and check. Reuters and The Guardian report that Daniel Lee worked with textile designer Celia Birtwell to bring embroidery, hand-painted patterns and bright color into the brand’s classic codes.',
          paragraphs: [
            'The collection placed the order of Burberry check beside freer flower and branch shapes. Raised mimosa and lavender embroidery appeared on coats and skirt suits, then carried through to matching shoes. From a distance the details create color and movement; up close they reveal the work in the fabric.',
            'One standout look covered an orange leather trench with blue and green embroidery. Its belt, broad collar and familiar structure remained, while the color and embellishment turned a formal outerwear shape into a statement piece. Yellow, pink and light green also interrupted the gray and beige elsewhere in the collection.',
            'Birtwell’s contribution went beyond floral decoration. The Guardian reports that she painted a looser, hand-drawn version of the check and revived colorful face motifs from her archive. These choices make the geometric pattern feel less rigid and more human, echoing Lee’s show notes on wearability and intentional imperfection.',
            'The menswear used a similar contrast: jeans and trouser chains met flowered shirts with a 1970s reference. The message was therefore broader than a return of florals. Burberry brought color, decoration and informal pairings into its outerwear heritage while keeping the trench and check visible.',
            'A daily outfit can take a quieter cue from the runway: wear one embroidered piece with neutrals, or repeat two colors from its motif in accessories and makeup. The central idea is to refresh something familiar with a deliberate detail, rather than replace every classic element.'
          ],
          insight: 'Razmehr’s view: Refreshing a look need not mean changing everything. A textured surface or considered color pairing can make a classic shape interesting again. Let embroidery or a busy print lead, and keep makeup and accessories within a limited version of its palette.',
          sources: ['Reuters — Burberry’s summer 2027 show in London', 'The Guardian — Burberry and Celia Birtwell at London Fashion Week']
        }
      }
    },
    tr: {
      ui: { fresh: 'Son haberler', freshAria: 'En yeni güzellik haberleri', live: 'Yeni', insight: 'Razmehr’in yorumu', sources: 'Kaynaklar:', source: 'Kaynak:', hot: 'Gündemde', issue: 'Bu haftanın sayısı' },
      manifest: { latestLabel: 'Editörün seçtikleri · 26 Eylül 2026', ticker: ['Hailey Bieber’ın taupe manikürü sonbaharın nötr renklerine derinlik katıyor', 'Taylor Swift imza eyeliner’ını yumuşak dumanlı göz makyajıyla değiştiriyor', 'Bulut gibi allık ve Rönesans dokuları Vogue World Milano’da'], issue: { label: 'Bu haftanın sayısı', date: '26 Eylül 2026', updated: 'Güncelleme: 26 Eylül' } },
      stories: {
        'hailey-bieber-taupe-fall-nails': {
          tag: 'Tırnak trendi', title: 'Hailey Bieber’ın taupe manikürü: kahve, gri ve nude arasında bir sonbahar tonu', shortTitle: 'Hailey Bieber’ın taupe tırnakları: sonbaharın yeni nötrü',
          summary: 'Bieber’ın badem tırnaklarındaki kremsi taupe, açık nude ile koyu kahve arasında duruyor; sade görünümünü korurken sonbaharın nötr paletine derinlik katıyor.', date: '23 Eylül 2026', readTime: '4 dk okuma',
          alt: 'Açık kahve, gri ve nude arası kremsi taupe jel ojeli beş badem tırnağın yakın çekimi', credit: 'Görsel: Chaun Legend Professional Nails',
          deck: 'Hailey Bieber sonbahara her zamanki nude tonu ya da koyu kahve yerine kremsi taupe ile başladı. Vogue ve Coveteur, bu manikürü daha derin ama gündelik kullanıma uygun nötrlere yönelişin bir örneği olarak yorumluyor.',
          paragraphs: [
            'Tırnaklar Bieber’ın sıkça seçtiği orta uzunlukta, yumuşak badem formunda: ne sivri ne de rengin kaybolacağı kadar kısa. Pürüzsüz ve parlak yüzey, taupe ile klasik bej arasındaki ince farkı gösteriyor. Bu manikürde tasarımın kendisi renk dengesi; desen, krom ya da süslemeye ihtiyaç yok.',
            'Bu görünümü hazırlayan tırnak sanatçısı Kim Truong, taupe tonunu kahve, gri ve nude karışımı olarak tanımlıyor. Ona göre bu renk ailesi, bordoya, şaraba ya da çok koyu kahveye henüz geçmek istemeyen müşterilere uygun. Açık yaz manikürleri ile sonbaharın koyu tonları arasında köprü kuruyor.',
            'Vogue’a göre kullanılan renk, Chaun Legend’ın profesyonel serisindeki “Taupe That Talk”. Burada önemli olan marka değil, rengin niteliği: simsiz ve sedefsiz, tam kapatıcılığa sahip kremsi bir taupe. Sade bitişi sayesinde farklı ışıklarda bazen daha sıcak ve kahvemsi, bazen daha soğuk ve grimsi görünüyor.',
            'Salonda seçim yaparken trendden çok ten alt tonuna bakılmalı. Sıcak alt tonlarda kahve veya bej ağırlıklı, soğuk alt tonlarda ise griye ya da mokaya yaklaşan taupe daha dengeli olabilir. Renk tenle fazla birleşiyorsa bir ton koyusu veya daha belirgin badem formu tırnağın sınırını ortaya çıkarır.',
            'Bu görünüm nötr renk dalgasını sürdürüyor, ancak neredeyse görünmeyen nude tonlarından ayrılıyor. Taupe birçok kıyafet ve makyajla uyumlu olacak kadar sakin; alt tonlarının birleşimiyle düz bejden daha karakterli. Yoğun nail art istemeyenler için uygulanabilir bir mevsim değişikliği.'
          ],
          insight: 'Razmehr’in yorumu: Önemli olan aynı oje numarasını kopyalamak değil, kişiye uygun nötrü bulmak. Sıcak veya soğuk taupe seçmeden önce müşterinin ten alt tonuna ve bulunduğu ortamın ışığına bakın. Düzenli bir form ve parlak yüzey yeterli; fazlası rengin inceliğini gölgeleyebilir.',
          sources: ['Vogue — Bieber’ın taupe manikürü ve Kim Truong’un açıklamaları', 'Coveteur — renk ve sonbahar paleti üzerine bağımsız haber', 'Chaun Legend — resmi renk sayfası ve görsel kaynağı']
        },
        'taylor-swift-patient-zero-soft-smoky-eye': {
          tag: 'Ünlü makyajı', title: 'Taylor Swift, “Patient Zero”da imza eyeliner’ı yerine yumuşak dumanlı göz seçti', shortTitle: 'Taylor Swift’in yumuşak dumanlı gözü imza makyajını değiştiriyor',
          summary: 'Yeni teklinin resmi görselinde keskin kuyruk ve kırmızı rujun yerini dağıtılmış siyah far, neredeyse mat bir ten ve doğal pembe dudak alıyor; değişim ölçülü, yüz hâlâ tanıdık.', date: '23 Eylül 2026', readTime: '4 dk okuma',
          alt: 'Patient Zero resmi görselinde dağıtılmış siyah far, mat ten ve doğal pembe dudakla Taylor Swift yakın çekimi', credit: 'Görsel: Taylor Swift / Instagram',
          deck: 'Taylor Swift, “Patient Zero” teklisini duyuran resmi görselde en tanınan güzellik imzalarından birini değiştiriyor. Harper’s Bazaar’ın belirttiği gibi kuyruklu eyeliner ve kırmızı ruj bu karede yok; odak yumuşak dumanlı göz, mat pembe dudak ve az ışıltılı tene kayıyor.',
          paragraphs: [
            'Asıl fark gözün şeklinde başlıyor. Dış köşeyi yukarı kaldıran net siyah çizgi yerine koyu renk, göz kapağına ve alt kirpik dibine dağıtılmış; kısa kuyruk hafifçe aşağı yöneliyor. Kenarlar bilinçli olarak yumuşak bırakılmış. Böylece göz derinliğini korurken keskin çizginin grafik ve resmî etkisi azalıyor.',
            'Kirpikler de Swift’in birçok sahne makyajına göre daha hafif görünüyor; abartılı bir hacim yok. Bu sadelik göz şeklini eyeliner yerine siyah farın tanımlamasını sağlıyor. Sonuç, kontrollü koyuluk sayesinde fazla silikleşmeden 1990’ların minimal makyajını hatırlatıyor.',
            'Ten ve dudak da değişimin parçası. Görselde belirgin aydınlatıcı veya yoğun allık yok; cilt neredeyse mat görünüyor. Doğal pembe dudak, dudak renginden yalnızca biraz daha güçlü. İkisi birlikte dumanlı gözü öne çıkaran sakin bir zemin kuruyor.',
            'Bu görünüm, Swift’in kedi gözü veya kırmızı ruja veda ettiği anlamına gelmiyor; ikisi de görsel kimliğinin parçası. Haber değeri, çok yerleşik bir makyaj imzasının küçük ayarlarla yeni bir dönemi hissettirmesinde. Resmi paylaşım makyaj sanatçısının adını vermiyor; kullanılan ürünler hakkında da doğrulanmış bilgi yok.',
            'Salonda siyah kalem veya farı kirpik dibine uygulayıp sabitlenmeden küçük bir fırçayla dağıtabilirsiniz. Kısa ve hafif aşağı yönelen kuyruk, klasik eyeliner’dan temel farkı yaratır. Göz ön plandaysa teni, allığı ve dudağı sakin tutmak görünümü ağırlaştırmaz.'
          ],
          insight: 'Razmehr’in yorumu: Yenilik, kişisel imzadan bütünüyle vazgeçmeyi gerektirmez. Çizginin yönü, kenarların yumuşaklığı ve renk dengesi değiştiğinde yüz tanıdık kalırken sonuç tazelenir. Bu yaklaşım, müşterinin alıştığı tarzdan kopmadan yeni bir görünüm denemesine yardımcı olur.',
          sources: ['Harper’s Bazaar — Patient Zero görselinin makyaj analizi', 'Taylor Swift’in resmi Instagram hesabı — tekli duyurusu ve görsel']
        },
        'vogue-world-milano-renaissance-beauty': {
          tag: 'Güzellik trendi', title: 'Bulut gibi allık ve Rönesans dokuları: Vogue World Milano’nun güzellik dili', shortTitle: 'Milano’da Rönesans güzelliği: yayılan allık ve yapılandırılmış saç',
          summary: 'Vogue World Milano, Rönesans resimlerini çağdaş makyaj ve saça uyarladı: şakaklara yayılan allık, göz çevresinde sedefli ışık ve doğal doku ile heykelsi form arasında gezinen saçlar.', date: '22 Eylül 2026', readTime: '4 dk okuma',
          alt: 'Vogue World Milano’da yayılan pembe allık, sedefli göz aydınlığı ve dokulu saçla Gigi Hadid yakın çekimi', credit: 'Görsel: Getty Images / Vogue',
          deck: 'Vogue World: Milano, 22 Eylül akşamı Galleria Vittorio Emanuele II’de düzenlendi. Vogue’a göre makyaj sanatçısı Pat McGrath ve saç tasarımcısı Cyndia Harvey, İtalyan Rönesansı’nı birebir canlandırmak yerine yumuşak renk, sedefli ışık ve çağdaş dokularla yorumladı.',
          paragraphs: [
            'En belirgin işaret, yalnızca yanakların ortasında kalmayan allıktı. Kırmızıya yakın pembe, şakaklara ve kaş kemiğine doğru yayılarak Gigi Hadid’in yüzünde hale etkisi yarattı. Rengin sınırları tamamen yumuşaktı; pigment güçlü olsa da çizgili veya ağır görünmüyordu.',
            'Üst göz kapağındaki beyaz far, göz pınarındaki ve alt kirpik hattındaki sedefli aydınlık bakışı öne çıkardı. Doğal ten ve nötr dudaklar, gözle yanak arasındaki renk akışına alan açtı. Parlaklık tüm yüze yayılmak yerine belirli noktalarda toplandı.',
            'Saçta Harvey ve ekibi doğal doku, yumuşak bukle, hacimli bob ve özenli örgüler arasında geçiş yaptı. Botticelli ve Leonardo da Vinci’den gelen esin karmaşık formlarda hissedilirken jöleli bölümler ve grafik çizgiler görünümü çağdaş tuttu. Ense kökünden başlayıp siyah kurdelelerle uzayan at nalı biçimli örgü dikkat çeken ayrıntılardan biriydi.',
            'Gösteri iki eğilimi bir araya getirdi: elektriklenmeyi, bukleyi ve doğal hareketi kabul ederken bazı bölümleri bütünüyle kontrollü ve süslü biçimde kurmak. Makyajda da sakin ten ve dudaklara karşı güçlü allık ve göz aydınlığı vardı. Tek bir reçete yerine yumuşaklıkla yapıyı birleştiren bir çerçeve ortaya çıktı.',
            'Salon uygulamasında podyumdaki her ayrıntıyı tekrarlamak gerekmez. Şakaklara dağılan allık sade bir topuzla; yapılı bir örgü ise hafif makyajla eşleşebilir. Yumuşak renk geçişi, saç hacmine uygun doku ve ışığı yalnız gerekli noktalarda kullanmak fikri giyilebilir kılar.'
          ],
          insight: 'Razmehr’in yorumu: Tarihsel esin, seçilen birkaç belirgin öğeyle güncel görünür. Şakaklara yayılan bir allık veya özenle dokulandırılmış tek bir saç bölümü bu hissi verebilir. Yüzün ve saç formunun ayrıntılar arasında kaybolmaması için bir öğeyi öne çıkarın.',
          sources: ['Vogue — Rönesans esinli güzellik görünümleri', 'GQ — program, mekân ve güzellik ekibi', 'YesMilano — Vogue World 2026 resmi etkinlik kaydı']
        },
        'burberry-summer-2027-floral-trench': {
          tag: 'Dünya modası', title: 'Burberry işlemeyle ekoseyi yeniliyor: Londra’da 2027 yazı trençkotları', shortTitle: 'Burberry’nin işlemeli trençkotları klasik ekoseye yeni bir hava kattı',
          summary: 'Londra Moda Haftası’nın son gününde Burberry, tanıdık ekosesini mimoza ve lavanta çiçekleri, canlı renkler ve daha yumuşak trençkotlarla buluşturdu; mirasını korurken daha kişisel bir görünüm sundu.', date: '21 Eylül 2026', readTime: '4 dk okuma',
          alt: 'Londra podyumunda mavi ve yeşil işlemeli turuncu deri trençkot giyen Burberry modeli', credit: 'Görsel: Katie Collins / Reuters, The Guardian aracılığıyla',
          deck: 'Burberry, 2027 yaz koleksiyonunu 21 Eylül’de Chelsea College of Arts’ta sunarak Londra Moda Haftası’nı İngiliz trençkotu ve ekosesine yeni bir yorumla kapattı. Reuters ve The Guardian’a göre Daniel Lee, kumaş tasarımcısı Celia Birtwell ile birlikte işleme, elle çizilmiş desen ve canlı rengi markanın klasik kodlarına taşıdı.',
          paragraphs: [
            'Koleksiyonun odağında Burberry ekosesinin düzeniyle çiçek ve dalların serbest biçimlerini bir araya getirmek vardı. Kabarık mimoza ve lavanta işlemeleri palto ve etekli takımlarda görüldü, uyumlu ayakkabılara da taşındı. Uzaktan renk ve hareket yaratan yüzey, yakından kumaş işçiliğini gösteriyordu.',
            'En dikkat çeken görünümlerden birinde turuncu deri trençkot mavi ve yeşil işlemelerle kaplıydı. Kemer, geniş yaka ve tanıdık yapı korunurken renk ve süsleme resmî dış giyimi iddialı bir parçaya dönüştürdü. Koleksiyonun diğer bölümlerinde sarı, pembe ve açık yeşil, gri ve bej arasına girerek paleti nötrlerle sınırlamadı.',
            'Birtwell’in katkısı birkaç çiçek motifi eklemekten ibaret değildi. The Guardian’a göre ekosenin daha serbest, elle çizilmiş bir sürümünü hazırladı; arşivindeki renkli yüz desenleri de sezona girdi. Bu yaklaşım geometrik deseni daha az katı, daha insani gösteriyor ve Lee’nin giyilebilirlik ile bilinçli kusur vurgusuyla örtüşüyor.',
            'Erkek koleksiyonunda da aynı karşıtlık vardı: jean ve pantolon zincirleri, 1970’lere gönderme yapan çiçekli gömleklerle birleşti. Dolayısıyla gösterinin mesajı yalnızca çiçeklerin dönüşü değildi. Burberry, trençkot ve ekoseyi görünür tutarak dış giyim mirasına renk, süsleme ve gündelik eşleşmeler ekledi.',
            'Günlük stilde podyumun daha sade bir yorumu yeterli: tek bir işlemeli parçayı nötrlerle giyin veya ana motiften iki rengi çanta, ayakkabı ve makyajda tekrarlayın. Temel fikir klasik parçaları bütünüyle bırakmak değil, tanıdık bir parçaya düşünülmüş yeni bir ayrıntı eklemek.'
          ],
          insight: 'Razmehr’in yorumu: Bir stili yenilemek her şeyi değiştirmek demek değil. Belirgin bir doku veya ölçülü renk eşleşmesi klasik formu yeniden ilgi çekici kılabilir. İşleme ya da yoğun desen odakta olsun; makyaj ve aksesuarları aynı paletin sınırlı tonlarında tutun.',
          sources: ['Reuters — Burberry’nin Londra’daki 2027 yaz gösterisi', 'The Guardian — Londra Moda Haftası’nda Burberry ve Celia Birtwell']
        }
      }
    },
    ar: {
      ui: { fresh: 'أحدث الأخبار', freshAria: 'أحدث أخبار الجمال', live: 'جديد', insight: 'رؤية رازمهر', sources: 'مصادر التقرير:', source: 'مصدر التقرير:', hot: 'خبر رائج', issue: 'عدد هذا الأسبوع' },
      manifest: { latestLabel: 'اختيارات التحرير · ٢٦ سبتمبر ٢٠٢٦', ticker: ['مانيكير هيلي بيبر بلون التوب يضيف عمقًا للألوان الحيادية الخريفية', 'تايلور سويفت تستبدل الآيلاينر المميز بعين دخانية ناعمة', 'أحمر خدود ضبابي وتسريحات مستوحاة من عصر النهضة في فوغ وورلد ميلانو'], issue: { label: 'عدد هذا الأسبوع', date: '٢٦ سبتمبر ٢٠٢٦', updated: 'تحديث: ٢٦ سبتمبر' } },
      stories: {
        'hailey-bieber-taupe-fall-nails': {
          tag: 'صيحة الأظافر', title: 'مانيكير هيلي بيبر بلون التوب: حيادي خريفي بين البني والرمادي والنيود', shortTitle: 'أظافر هيلي بيبر بلون التوب: حيادي جديد للخريف',
          summary: 'يقع التوب الكريمي على أظافر بيبر اللوزية بين النيود الفاتح والبني الداكن؛ ويمنح ألوان الخريف الحيادية عمقًا مع الحفاظ على مظهر أنيق وبسيط.', date: '٢٣ سبتمبر ٢٠٢٦', readTime: 'قراءة ٤ دقائق',
          alt: 'لقطة قريبة لخمسة أظافر لوزية مطلية بجل توب كريمي بين البني الفاتح والرمادي والنيود', credit: 'الصورة: Chaun Legend Professional Nails',
          deck: 'اختارت هيلي بيبر للخريف توبًا كريميًا بدل النيود المعتاد أو البني الداكن. ويرى تقريرا Vogue وCoveteur في هذا المانيكير انتقالًا نحو درجات حيادية أعمق تظل سهلة التنسيق والارتداء.',
          paragraphs: [
            'الأظافر متوسطة الطول بشكل لوزي ناعم اعتادت بيبر اختياره؛ ليست حادة الطرف ولا قصيرة إلى درجة اختفاء اللون. ويبرز السطح المتجانس اللامع الفرق الدقيق بين التوب والبيج التقليدي. هنا يشكّل توازن اللون التصميم كله، من دون حاجة إلى رسوم أو كروم أو زينة إضافية.',
            'تصف خبيرة الأظافر كيم ترونغ، التي نفذت الإطلالة، التوب بأنه مزيج من البني والرمادي والنيود. وترى أنه مناسب لمن لا ترغب بعد في الانتقال مباشرة إلى العنابي أو درجات النبيذي والبني الداكن جدًا. إنه جسر بين ألوان الصيف الفاتحة ودرجات الخريف الأعمق.',
            'وفقًا لـVogue، استُخدم لون “Taupe That Talk” من مجموعة Chaun Legend الاحترافية. الأهم من الاسم التجاري هو طبيعة اللون: توب كريمي كامل التغطية، بلا بريق أو لمعة لؤلؤية. وتجعله هذه النهاية البسيطة يبدو أدفأ وأقرب إلى البني في إضاءة، وأبرد وأقرب إلى الرمادي في أخرى.',
            'عند اختياره في الصالون، تكون الدرجة التحتية للبشرة أهم من اتباع الصيحة حرفيًا. قد يلائم البشرة الدافئة توب يميل إلى البني أو البيج، بينما يوازن البشرة الباردة لون أكثر رمادية أو ميلًا إلى الموكا. وإذا اقترب الطلاء كثيرًا من لون البشرة، تساعد درجة أغمق قليلًا أو حدود لوزية أوضح على إبراز الظفر.',
            'تواصل هذه الإطلالة موجة الألوان الحيادية، لكنها تبتعد عن النيود شبه الخفي. فالتوب هادئ بما يكفي ليتماشى مع الملابس والمكياج المختلف، وأكثر تميزًا من البيج البسيط بفضل تنوع درجاته. وهو تغيير موسمي عملي لمن تفضل الأظافر البسيطة.'
          ],
          insight: 'رؤية رازمهر: قيمة هذه الصيحة في إيجاد لون حيادي يلائم الشخص، لا في نسخ رقم طلاء بعينه. افحصوا الدرجة التحتية للبشرة والإضاءة المعتادة قبل الاختيار بين التوب الدافئ والبارد. يكفي شكل مرتب ولمعة ناعمة؛ فقد تحجب الزينة الإضافية جمال اللون.',
          sources: ['Vogue — مانيكير هيلي بيبر وتصريحات كيم ترونغ', 'Coveteur — تقرير مستقل عن اللون وموقعه في ألوان الخريف', 'Chaun Legend — صفحة اللون الرسمية ومصدر الصورة']
        },
        'taylor-swift-patient-zero-soft-smoky-eye': {
          tag: 'مكياج المشاهير', title: 'تايلور سويفت تستبدل خط عينها المميز بمكياج دخاني ناعم في «Patient Zero»', shortTitle: 'عين تايلور سويفت الدخانية الناعمة تغيّر مكياجها المعتاد',
          summary: 'في الصورة الرسمية للأغنية الجديدة، حل ظل أسود مموّه وبشرة شبه مطفأة وشفاه وردية هادئة محل الآيلاينر الحاد والشفاه الحمراء؛ تغيير محسوب يبقي ملامحها مألوفة.', date: '٢٣ سبتمبر ٢٠٢٦', readTime: 'قراءة ٤ دقائق',
          alt: 'لقطة قريبة لتايلور سويفت بظل عين أسود مموّه وبشرة مطفأة وشفاه وردية هادئة في صورة Patient Zero الرسمية', credit: 'الصورة: Taylor Swift / Instagram',
          deck: 'تغيّر تايلور سويفت في الصورة الرسمية لأغنية «Patient Zero» إحدى أبرز سمات مكياجها. فبحسب Harper’s Bazaar، يغيب خط العين المجنح وأحمر الشفاه الأحمر، ويتحول التركيز إلى عين دخانية ناعمة وشفاه وردية مطفأة وبشرة قليلة اللمعان.',
          paragraphs: [
            'يبدأ الاختلاف من شكل العين. فبدل الخط الأسود المحدد الذي يرفع الزاوية الخارجية، يمتد اللون الداكن مموّهًا على الجفن وتحت العين، مع ذيل قصير يميل قليلًا إلى الأسفل. بقيت الحواف ناعمة عمدًا؛ فاحتفظت العين بالعمق من دون الطابع الهندسي للخط الحاد.',
            'تبدو الرموش أيضًا أخف مما اعتدناه في كثير من إطلالاتها المسرحية، بلا كثافة مبالغ فيها. يتيح ذلك للظل الأسود، لا للآيلاينر، أن يحدد شكل العين. وتذكّر النتيجة بمكياج التسعينيات البسيط، مع قدر مدروس من اللون الداكن يمنع الإطلالة من أن تصبح باهتة.',
            'يشمل التغيير البشرة والشفاه. لا يظهر في الصورة هايلايتر بارز أو أحمر خدود قوي، وتبدو البشرة شبه مطفأة. أما الوردي الهادئ على الشفاه فأغمق قليلًا فقط من لونها الطبيعي. تشكل هذه العناصر خلفية هادئة للعين الدخانية.',
            'لا تعني هذه الصورة تخلي سويفت عن خط العين المجنح أو الشفاه الحمراء؛ فما زالا جزءًا من هويتها البصرية. تكمن أهمية الإطلالة في قدرة تعديلات صغيرة على الإشارة إلى فصل فني جديد. لم يعلن المنشور الرسمي اسم خبير المكياج، ولا تتوفر معلومات مؤكدة عن المنتجات المستخدمة.',
            'لتنفيذها في الصالون، يوضع قلم أو ظل أسود قريبًا من خط الرموش ثم تُمزج حافته بفرشاة صغيرة قبل ثباته. الذيل القصير المائل قليلًا إلى الأسفل هو الفارق الأساسي عن الآيلاينر التقليدي. وعندما تكون العين محور الإطلالة، يُفضّل إبقاء البشرة والخدود والشفاه هادئة.'
          ],
          insight: 'رؤية رازمهر: التجديد لا يتطلب التخلي تمامًا عن الأسلوب الشخصي. يمكن تغيير اتجاه الخط ونعومة حدوده وتوازن الألوان مع بقاء الوجه مألوفًا. إنها طريقة لطيفة لتجربة مظهر جديد من دون الابتعاد كثيرًا عن ذوق العميلة.',
          sources: ['Harper’s Bazaar — تحليل مكياج صورة Patient Zero', 'حساب تايلور سويفت الرسمي على Instagram — الصورة وإعلان الأغنية']
        },
        'vogue-world-milano-renaissance-beauty': {
          tag: 'صيحة جمالية', title: 'أحمر خدود ضبابي وتسريحات من عصر النهضة: جمال فوغ وورلد ميلانو', shortTitle: 'جمال عصر النهضة في ميلانو: خدود ضبابية وشعر منحوت',
          summary: 'ترجم فوغ وورلد ميلانو لوحات عصر النهضة إلى مكياج وشعر معاصرين: أحمر خدود يمتد نحو الصدغ، ولمعان لؤلؤي حول العين، وتسريحات تجمع بين الملمس الطبيعي والبناء النحتي.', date: '٢٢ سبتمبر ٢٠٢٦', readTime: 'قراءة ٤ دقائق',
          alt: 'لقطة قريبة لجيجي حديد في فوغ وورلد ميلانو مع أحمر خدود وردي مموّه وإضاءة لؤلؤية حول العين وشعر ذي ملمس واضح', credit: 'الصورة: Getty Images / Vogue',
          deck: 'أُقيم Vogue World: Milano مساء ٢٢ سبتمبر في غاليريا فيتوريو إيمانويل الثاني. ووفق تقرير Vogue، فسّرت خبيرة المكياج بات مكغراث ومصففة الشعر سينديا هارفي جمال عصر النهضة الإيطالية بألوان ناعمة وضوء لؤلؤي وملامس معاصرة، من دون إعادة إنتاج تاريخية حرفية.',
          paragraphs: [
            'كانت أوضح علامة أحمر خدود لا يقتصر على منتصف الوجنتين. فقد امتد الوردي المائل إلى الأحمر نحو الصدغ وعظم الحاجب، وصنع هالة حول وجه جيجي حديد. ظلت حدود اللون ناعمة تمامًا؛ كان الصباغ واضحًا لكن النتيجة لم تبدُ مخططة أو ثقيلة.',
            'أضاء الظل الأبيض الجفن العلوي، بينما أضافت اللمعة اللؤلؤية عند زاوية العين الداخلية وخط الرموش السفلي إشراقًا إلى النظرة. تركت البشرة الطبيعية والشفاه الحيادية مساحة لحركة اللون بين العين والخد. وتجمّع الضوء في مواضع مختارة بدل توزيعه على الوجه كله.',
            'في الشعر، انتقلت هارفي وفريقها بين الملمس الطبيعي والخصلات المجعدة الناعمة وقصات البوب الممتلئة والضفائر الدقيقة. ظهرت إشارات إلى بوتيتشيلي وليوناردو دا فينشي في الأشكال المعقدة، بينما أبقت الخصلات المثبتة بالجل والخطوط الهندسية النتيجة معاصرة. وكان من التفاصيل البارزة ضفيرة طويلة على هيئة حدوة حصان تبدأ من مؤخرة الرقبة وتمتد بشرائط سوداء.',
            'جمع العرض بين اتجاهين: قبول تجعد الشعر وحركته الطبيعية، وبناء أجزاء مزخرفة شديدة التحكم. وفي المكياج أيضًا بقيت البشرة والشفاه هادئتين أمام قوة أحمر الخدود وإضاءة العين. والنتيجة إطار يجمع النعومة بالبناء بدل وصفة ثابتة واحدة.',
            'لا يلزم تكرار كل تفاصيل منصة العرض في الصالون. يمكن تنسيق أحمر خدود مموّه نحو الصدغ مع تسريحة مرفوعة بسيطة، أو ضفيرة منظمة مع مكياج أهدأ. امتزاج حدود اللون، واختيار ملمس يناسب كثافة الشعر، ووضع اللمعان حيث يلزم فقط، تجعل الفكرة قابلة للارتداء.'
          ],
          insight: 'رؤية رازمهر: يبدو الإلهام التاريخي جديدًا حين نختار منه عناصر واضحة بدل إعادة بناء حقبة كاملة. قد يكفي أحمر خدود مموّه أو جزء واحد من الشعر بتفاصيل مدروسة. دعوا عنصرًا واحدًا يتصدر حتى لا تضيع ملامح الوجه والشعر بين التفاصيل.',
          sources: ['Vogue — تقرير جمال عصر النهضة في العرض', 'GQ — البرنامج والمكان وفريق الجمال', 'YesMilano — الإعلان الرسمي عن Vogue World 2026']
        },
        'burberry-summer-2027-floral-trench': {
          tag: 'الموضة العالمية', title: 'بربري تجدّد نقشتها المربعة بالتطريز: معاطف صيف ٢٠٢٧ في لندن', shortTitle: 'معاطف بربري المطرزة تمنح النقشة الكلاسيكية روحًا جديدة',
          summary: 'في ختام أسبوع الموضة بلندن، جمعت بربري نقشتها المعروفة بزهور الميموزا والخزامى وألوان أكثر إشراقًا ومعاطف أكثر نعومة؛ فحافظت على تراثها وأضفت عليه طابعًا شخصيًا.', date: '٢١ سبتمبر ٢٠٢٦', readTime: 'قراءة ٤ دقائق',
          alt: 'عارضة بربري على منصة لندن بمعطف ترنش جلدي برتقالي وتطريز أزرق وأخضر', credit: 'الصورة: Katie Collins / Reuters، نقلًا عن The Guardian',
          deck: 'قدّمت بربري مجموعة صيف ٢٠٢٧ في كلية تشيلسي للفنون يوم ٢١ سبتمبر، واختتمت أسبوع الموضة بلندن برؤية جديدة لمعطف الترنش والنقشة البريطانية المربعة. ووفق Reuters وThe Guardian، تعاون دانيال لي مع مصممة الأقمشة سيليا بيرتويل لإدخال التطريز والرسوم اليدوية والألوان الزاهية إلى رموز الدار الكلاسيكية.',
          paragraphs: [
            'وضعت المجموعة انتظام نقشة بربري بجانب أشكال الزهور والأغصان الحرة. ظهرت تطريزات الميموزا والخزامى البارزة على المعاطف والأطقم ذات التنانير، ثم امتدت إلى الأحذية المنسقة. تصنع هذه التفاصيل لونًا وحركة من بعيد، وتكشف مهارة العمل على القماش عن قرب.',
            'في إحدى أبرز الإطلالات غطى التطريز الأزرق والأخضر معطف ترنش جلديًا برتقاليًا. بقي الحزام والياقة العريضة والبناء المألوف، لكن اللون والزخرفة حوّلا قطعة خارجية رسمية إلى إطلالة لافتة. وتخللت درجات الأصفر والوردي والأخضر الفاتح الرمادي والبيج في أجزاء أخرى من المجموعة.',
            'لم يقتصر تعاون بيرتويل على إضافة أزهار. تذكر The Guardian أنها رسمت نسخة أكثر حرية من النقشة المربعة، وأعادت أشكال وجوه ملونة من أرشيفها إلى تصميمات الموسم. جعل ذلك النمط الهندسي أقل صرامة وأكثر إنسانية، بما ينسجم مع حديث لي عن سهولة الارتداء و«النقص المقصود».',
            'استخدمت ملابس الرجال التباين نفسه: الجينز وسلاسل السراويل إلى جانب قمصان مزهرة تستحضر سبعينيات القرن الماضي. لذلك لم يكن موضوع العرض مجرد عودة الزهور؛ بل إدخال اللون والزخرفة والتنسيقات غير الرسمية إلى تراث بربري في الملابس الخارجية مع إبقاء الترنش والنقشة في الصورة.',
            'يمكن تبسيط الفكرة للحياة اليومية: قطعة مطرزة واحدة بجانب ملابس حيادية، أو تكرار لونين من نقشها في الحقيبة والحذاء والمكياج. الفكرة الأساسية هي تجديد عنصر مألوف بتفصيل مدروس، لا التخلي عن الأسس الكلاسيكية كلها.'
          ],
          insight: 'رؤية رازمهر: تجديد الإطلالة لا يعني تغيير كل شيء. قد يجعل ملمس بارز أو جمع محسوب للألوان شكلًا كلاسيكيًا جذابًا مرة أخرى. اجعلوا التطريز أو النقشة الغنية محور المظهر، واختاروا للمكياج والإكسسوارات ألوانًا محدودة من لوحتها.',
          sources: ['Reuters — عرض بربري لصيف ٢٠٢٧ في لندن', 'The Guardian — تعاون بربري وسيليا بيرتويل في أسبوع الموضة بلندن']
        }
      }
    }
  };
})();
