export interface TimelineStep {
  number: string;
  title: string;
  desc: string;
  icon: string;
}

export interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  startingLabel: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ClientResult {
  clientName: string;
  age: number;
  profession: string;
  durationWeeks: number;
  weightChange: string;
  muscleChange: string;
  fatChange: string;
  waistChange: string;
  story: string;
  badge: string;
  imageBefore?: string;
  imageAfter?: string;
}

export interface CaseStudy {
  title: string;
  clientProfile: string;
  problem: string;
  appliedProgram: string;
  followUpProcess: string;
  resultsSummary: string;
  metrics: { label: string; before: string; after: string; improvement: string }[];
}

export interface PerformanceMetricChart {
  label: string;
  beforeVal: number; // 0-100
  afterVal: number;  // 0-100
  displayVal: string;
}

export interface ScientificCitation {
  organization: string; // NSCA, ACSM, NASM, ISSN, ECSS
  title: string;
  authorsAndYear: string;
  keyFinding: string;
  application: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  badge: string;
  heroImage: string;
  
  // Section 2: Hizmet Hakkında (300-500 kelime bilimsel kurumsal içerik)
  aboutTitle: string;
  aboutContent: string[];
  
  // Section 3: Timeline (8 Adım)
  timeline: TimelineStep[];
  
  // Section 4: Program İçeriği (13 Maddelik Checklist)
  checklist: string[];
  
  // Section 5: Kimler İçin? (6 Kart)
  targetGroups: { title: string; desc: string; icon: string }[];
  
  // Section 6: Neler Kazanacaksın? (6 Kazanım)
  outcomes: { title: string; desc: string; icon: string }[];
  
  // Section 7: Paketler (Pricing)
  pricingPlans: PricingPlan[];
  
  // Section 8: Sıkça Sorulan Sorular (5 Akordeon)
  faqs: ServiceFAQ[];
  
  // Section 9: Gerçek Danışan Sonuçları
  clientResults: ClientResult[];
  
  // Section 10: Vaka Analizi (Case Study)
  caseStudy: CaseStudy;
  
  // Section 11: Performans Grafikleri
  metricsCharts: PerformanceMetricChart[];
  
  // Section 12: Bilimsel Referanslar (NSCA, ACSM, NASM, ISSN, ECSS)
  scientificCitations: ScientificCitation[];
  
  // Section 13: Eğitmen Hakkında
  coachInfo: {
    name: string;
    title: string;
    philosophy: string;
    degrees: string[];
    experience: string;
  };
  
  // Section 14: Sık Kullanılan Araçlar (6 Araç)
  tools: { name: string; desc: string; icon: string }[];
  
  // Section 15: CTA
  ctaTitle: string;
  ctaSubtitle: string;
}

export const serviceDetailsMap: Record<string, ServiceDetail> = {
  'fitness-body-transformation': {
    slug: 'fitness-body-transformation',
    title: 'FITNESS & VÜCUT DÖNÜŞÜMÜ',
    subtitle: 'Bilimsel Yaklaşımla Kalıcı Vücut Dönüşümü',
    shortDesc: 'Kas geliştirme, yağ yakımı ve vücut şekillendirmeye yönelik kişiye özel yüz yüze veya online antrenman programları.',
    badge: 'DÖNÜŞÜM & HİPERTROFİ',
    heroImage: '/images/hero/tunahan-hero.jpg',
    
    aboutTitle: 'Spor Bilimi Odaklı Hipertrofi ve Biyomekanik Dönüşüm',
    aboutContent: [
      'Vücut dönüşümü, tesadüfi hareketler veya rastgele seçilmiş ağır yüklerle değil; insan fizyolojisinin biyomekanik ve metabolik yasalarına tam uyum gösteren bilimsel protokollerle mümkündür. TK Performance & Health çatısı altında sunulan Fitness & Vücut Dönüşümü programı, bireyin anatomik yapısını, kas lifi tipolojisini ve eklem hareket açıklığını (ROM) temel alır.',
      'Sistemimiz, kulaktan dolma fitness fikirleri yerine mekanik gerilim (mechanical tension), kas hasarı (muscle damage) ve metabolik stres dengesini optimize eden akıllı periodizasyon modellerine dayanır. RIR (Reps in Reserve) ve RPE (Rate of Perceived Exertion) skalaları ile her antrenman seansının şiddeti ölçülür, aşırı antrenman (overtraining) veya yetersiz uyarı riski tamamen ortadan kaldırılır.',
      'Kişiye özel hazırlanan antrenman şablonlarında, omurga sağlığını koruyan biyomekanik hizalamalar ve postüral düzeltimler önceliklendirilir. Bu sayede sadece estetik olarak şekillenmiş bir fizik değil, aynı zamanda sakatlıklara karşı dirençli, yüksek mobiliteye sahip ve sürdürülebilir bir beden performansı elde edilir.'
    ],
    
    timeline: [
      { number: '01', title: 'Analiz', desc: 'Postür, mobilite, vücut kompozisyonu ve kinesiyolojik değerlendirme.', icon: '🔍' },
      { number: '02', title: 'Hedef Belirleme', desc: 'Kas kütlesi, yağ yüzdesi ve biyometrik hedeflerin kalibrasyonu.', icon: '🎯' },
      { number: '03', title: 'Kişiye Özel Planlama', desc: 'Biyomekanik açılara uygun haftalık antrenman şablonu.', icon: '📋' },
      { number: '04', title: 'Programın Başlaması', desc: 'Uygulama ve nizami form tekniklerinin entegrasyonu.', icon: '🚀' },
      { number: '05', title: 'Haftalık Takip', desc: 'RIR/RPE şiddet takibi ve video form analizi.', icon: '📈' },
      { number: '06', title: 'Performans Analizi', desc: 'Aylık antropometrik ölçüm ve kuvvet artış değerlendirmesi.', icon: '📊' },
      { number: '07', title: 'Program Güncellemesi', desc: 'Kademeli yüklenme (Progressive Overload) aşaması.', icon: '🔄' },
      { number: '08', title: 'Sürdürülebilir Gelişim', desc: 'Kalıcı yaşam tarzı ve atletik estetik koruma.', icon: '🏆' }
    ],
    
    checklist: [
      '✓ Fiziksel Değerlendirme',
      '✓ Hedef Analizi',
      '✓ Vücut Analizi',
      '✓ Program Tasarımı',
      '✓ Egzersiz Kütüphanesi',
      '✓ Video Destekleri',
      '✓ Form Analizi',
      '✓ Haftalık Kontrol',
      '✓ Aylık Güncelleme',
      '✓ Performans Raporu',
      '✓ WhatsApp Destek',
      '✓ Beslenme Rehberi',
      '✓ Yaşam Tarzı Önerileri'
    ],
    
    targetGroups: [
      { title: 'Kas Geliştirmek İsteyenler', desc: 'Hipertrofi ve kas kütlesi hacmini bilimsel periodizasyonla artırmayı hedefleyenler.', icon: '💪' },
      { title: 'Yağ Yakmak İsteyenler', desc: 'Kas kütlesini koruyarak vücut yağ oranını atletik seviyelere çekmek isteyenler.', icon: '🔥' },
      { title: 'Sağlıklı Kilo Almak İsteyenler', desc: 'Metabolik hızına uygun kalori ve protein dengesiyle hacim kazanmak isteyenler.', icon: '⚖️' },
      { title: 'Performans Sporcuları', desc: 'Branş performansına katkı sağlayan estetik ve kuvvet altyapısı kurmak isteyenler.', icon: '⚡' },
      { title: 'Yeni Başlayanlar', desc: 'Nizami hareket tekniklerini doğru biyomekanik ile öğrenerek başlamak isteyenler.', icon: '🌱' },
      { title: 'İleri Seviye Sporcular', desc: 'Plato dönemini aşmak ve hassas RIR/RPE yük takibi ile gelişimi sürdürmek isteyenler.', icon: '🥇' }
    ],
    
    outcomes: [
      { title: 'Daha Güçlü Vücut', desc: 'Tüm ana kas gruplarında ölçülebilir kuvvet artışı ve kas hacmi.', icon: '💥' },
      { title: 'Bilimsel Programlama', desc: 'Kulaktan dolma bilgiler yerine RIR/RPE esaslı akıllı periodizasyon.', icon: '🧬' },
      { title: 'Daha İyi Hareket Kalitesi', desc: 'Eklem mobilitesi ve postüral hizası gelişmiş ağrısız hareket kapasitesi.', icon: '🔄' },
      { title: 'Performans Artışı', desc: 'Günlük yaşamda ve sporda yüksek enerji, dayanıklılık ve patlayıcılık.', icon: '📈' },
      { title: 'Düzenli Takip', desc: 'Haftalık form analizi ve kesintisiz uzman desteği ile yüksek motivasyon.', icon: '🛡️' },
      { title: 'Sürdürülebilir Sonuçlar', desc: 'Geçici diyetler yerine kalıcı alışkanlıklar ve korunan estetik görünüm.', icon: '🏆' }
    ],
    
    pricingPlans: [
      {
        title: 'Online Eğitim',
        subtitle: 'Uzaktan PT & Dijital Takip',
        price: '2.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Kişiye Özel Antrenman Programı',
          'Haftalık Video Form Analizi',
          'RIR / RPE Yüklenme Takibi',
          'WhatsApp İletişim Desteği',
          'Mobil Uygulama / PDF Erişim'
        ]
      },
      {
        title: 'Premium Online',
        subtitle: 'Birebir Uzman Koordinasyonu',
        price: '4.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        badge: 'EN ÇOK TERCİH EDİLEN',
        isPopular: true,
        features: [
          'Online Eğitim Paketindeki Tüm Özellikler',
          'Kişiselleştirilmiş Beslenme Rehberi',
          '7/24 Öncelikli WhatsApp Hattı',
          'Biyomekanik Postür Değerlendirmesi',
          'Canlı Video Ön Görüşme & Değerlendirme'
        ]
      },
      {
        title: 'Yüz Yüze Personal Training',
        subtitle: 'Birebir Salon / Stüdyo Çalışması',
        price: '900 TL',
        period: "/ Seans'dan Başlayan",
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Birebir 60 Dakika Yüz Yüze Antrenman',
          'Postür ve Biyomekanik Hizalama',
          'Stüdyo ve Ekipman Kullanımı',
          'Birebir Form ve Nefes Düzeltimi',
          'Gelişim Raporlaması'
        ]
      }
    ],
    
    faqs: [
      { question: 'Program ne kadar sürüyor?', answer: 'Dönüşüm programlarımız minimum 12 haftalık biyolojik adaptasyon blokları halinde tasarlanır. Sürdürülebilir kas hipertrofisi için önerilen ideal süreç 16-24 haftadır.' },
      { question: 'Online eğitim nasıl ilerliyor?', answer: 'Öncelikle postür ve hareket form videolarınız analiz edilir. Özel antrenman şablonunuz oluşturulur, hareketlerin nizami icrası için video kütüphanesi sunulur. Her hafta form kontrolleri ile güncellenir.' },
      { question: 'Beslenme desteği var mı?', answer: 'Evet. Beslenme rehberliği yetkin diyetisyen ve beslenme uzmanı iş birliğiyle kişiselleştirilmiş makro-mikro hedefler çerçevesinde sunulmaktadır.' },
      { question: 'Program değiştirilebilir mi?', answer: 'Evet. Gelişim ivmenize, salon ekipmanlarınıza veya yaşam tarzı değişikliklerinize göre programınız haftalık kontrollerde güncellenir.' },
      { question: 'Kaç gün antrenman yapılmalı?', answer: 'Seviyenize ve toparlanma (recovery) kapasitenize göre haftada 3 ile 5 gün arasında optimum antrenman sıklığı belirlenir.' }
    ],
    
    clientResults: [
      {
        clientName: 'Emre T.',
        age: 29,
        profession: 'Yazılım Mühendisi',
        durationWeeks: 12,
        weightChange: '-11.2 kg',
        muscleChange: '+3.8 kg',
        fatChange: '-%8.4',
        waistChange: '-12 cm',
        story: 'Masa başı çalışmanın getirdiği bel ağrılarından kurtuldum. 12 haftada bel çevrem 12 cm daralırken kas kütlem belirgin şekilde arttı.',
        badge: '12 HAFTALIK HİPERTROFİ'
      },
      {
        clientName: 'Caner K.',
        age: 34,
        profession: 'Mimar',
        durationWeeks: 16,
        weightChange: '+5.5 kg',
        muscleChange: '+4.9 kg',
        fatChange: '-%2.1',
        waistChange: '-4 cm',
        story: 'Yıllardır kilo alamıyordum. Doğru mekanik gerilim ve RIR takibi ile ilk kez 16 haftada 5.5 kg temiz kas kütlesi kazandım.',
        badge: 'KAS HACMİ KAZANIMI'
      }
    ],
    
    caseStudy: {
      title: 'Postüral Bozukluk ve Hipertrofi İlerlemesi Vaka Analizi',
      clientProfile: '28 Yaşında Erkek, Sedanter Masa Başı Çalışan, Kifotik Duruş Bozukluğu',
      problem: 'Kötü duruş, sol omuz impingement (sıkışma) riski ve göğüs-sırt kas dengesizliği.',
      appliedProgram: 'İlk 4 hafta postüral düzeltici medikal egzersiz + Sonraki 8 hafta Upper/Lower Hipertrofi Periodizasyonu.',
      followUpProcess: 'Haftalık RPE takibi, skapular retraksiyon form analizi ve omurga dekompresyonu.',
      resultsSummary: 'Omuz ağrısı %100 bitti. Göğüs kası hacminde %18, sırt kası hacminde %22 net artış kaydedildi.',
      metrics: [
        { label: 'Omuz Hareket Açıklığı (ROM)', before: '140°', after: '175°', improvement: '+35°' },
        { label: 'Bench Press 1RM Kuvveti', before: '65 kg', after: '92.5 kg', improvement: '+27.5 kg' },
        { label: 'Vücut Yağ Oranı', before: '%22.4', after: '%14.1', improvement: '-%8.3' }
      ]
    },
    
    metricsCharts: [
      { label: 'Kas Kütlesi Hacmi', beforeVal: 55, afterVal: 88, displayVal: '+4.2 kg Net Kas' },
      { label: 'Yağ Oranı Düşüşü', beforeVal: 85, afterVal: 35, displayVal: '%22.4 ➔ %14.1' },
      { label: 'Kuvvet Kapasitesi (1RM)', beforeVal: 60, afterVal: 92, displayVal: '+42% Kuvvet Artışı' },
      { label: 'Mobilite & Postür Skoru', beforeVal: 50, afterVal: 95, displayVal: '95/100 Optimal Hizalama' }
    ],
    
    scientificCitations: [
      {
        organization: 'NSCA (National Strength & Conditioning Association)',
        title: 'Mechanisms of Muscle Hypertrophy and Their Application to Resistance Training',
        authorsAndYear: 'Schoenfeld, B. J. (2010)',
        keyFinding: 'Kas hipertrofisini tetikleyen en birincil mekanizma mekanik gerilimdir.',
        application: 'Antrenmanlarımızda kas üzeri gerilim süresi (TUT) ve progresif aşırı yüklenme esas alınır.'
      },
      {
        organization: 'ACSM (American College of Sports Medicine)',
        title: 'Progression Models in Resistance Training for Healthy Adults',
        authorsAndYear: 'Ratamess, N. A., et al. (2009)',
        keyFinding: 'Kişiselleştirilmiş periodizasyon modelleri sabitleşmiş (plateau) gelişimi engeller.',
        application: 'Programlarda 4 ila 6 haftalık bloklar halinde değişken şiddet ve hacim kalibre edilir.'
      }
    ],
    
    coachInfo: {
      name: 'Tunahan Keskin',
      title: 'Spor Bilimci & Performans Koçu',
      philosophy: 'Spor bilimi; rastgele yorulmak değil, hedefe yönelik en verimli biyomekanik uyarıyı vermektir.',
      degrees: [
        'Beden Eğitimi ve Spor Öğretmenliği (Lisans)',
        'Spor Yöneticiliği (Yüksek Lisans Devam Ediyor)',
        '2. Kademe Fitness Antrenörü (TVGFBF)',
        'NASM & FMS Sertifikalı Biyomekanik Uzmanı'
      ],
      experience: '8+ Yıl Akademik & Birebir Saha Deneyimi'
    },
    
    tools: [
      { name: 'Vücut Analizi', desc: 'Antropometrik ve biyometrik ölçümler.', icon: '📊' },
      { name: 'Performans Testleri', desc: '1RM ve kuvvet-hız profillemesi.', icon: '🏋️‍♂️' },
      { name: 'Mobilite Testleri', desc: 'Eklem açıklığı ve postür taraması.', icon: '📐' },
      { name: 'Program Takibi', desc: 'RIR/RPE dijital antrenman günlüğü.', icon: '📱' },
      { name: 'Egzersiz Kütüphanesi', desc: 'Nizami form anlatımlı video arşivi.', icon: '📚' },
      { name: 'Online Platform', desc: '7/24 kesintisiz iletişim ve analiz.', icon: '💬' }
    ],
    
    ctaTitle: 'Bugün Başla. Yarın Daha Güçlü Ol.',
    ctaSubtitle: 'Bilimsel programlama ile hedeflerine güvenli, ölçülebilir ve sürdürülebilir şekilde ulaş.'
  },

  'nutrition-dietetics': {
    slug: 'nutrition-dietetics',
    title: 'BESLENME & DİYETİSYEN',
    subtitle: 'Metabolik Hızınıza Uygun Bilimsel Diyetetik',
    shortDesc: 'Kişiye özel beslenme planları, sporcu beslenmesi ve online beslenme danışmanlığı.',
    badge: 'SPORCU DİYETETİĞİ & METABOLİZMA',
    heroImage: '/images/hero/tunahan-hero.jpg',
    
    aboutTitle: 'Sporcu Diyetetiği ve Hücresel Besin Zamanlaması',
    aboutContent: [
      'Beslenme; kalori kısıtlamasından ibaret bir şablon değil, vücut kompozisyonunu ve performans kapasitesini doğrudan yöneten bir hücresel yakıt yönetimidir. TK Performance & Health beslenme ve diyetetik hizmetleri, yetkin diyetisyen ve beslenme uzmanları iş birliğiyle tamamen bilimsel metodolojilere dayalı olarak yürütülür.',
      'Sistemimiz, tek tip popüler diyetler yerine bireyin Harris-Benedict / Katch-McArdle formülleriyle hesaplanan Bazal Metabolizma Hızı (BMR) ve Toplam Günlük Enerji Harcaması (TDEE) değerlerini temel alır. Antrenman şiddeti, glisemi dalgalanmaları ve hormon dengesi gözetilerek makro besin (protein, karbonhidrat, yağ) ve mikro besin ihtiyaçları miligram hassasiyetinde kalibre edilir.',
      'Özellikle antrenman öncesi (pre-workout) ve antrenman sonrası (post-workout) anabolik pencere yönetimi, glikojen depolarının dolumu ve kas protein sentezi (MPS) mekanizmaları optimizasyonun merkezinde yer alır. Amaç, aç kalmadan, enerjinizi düşürmeden ve sürdürülebilir bir disiplinle hedeflenen vücut yapısına ulaşmanızı sağlamaktır.'
    ],
    
    timeline: [
      { number: '01', title: 'Analiz', desc: 'TDEE, BMR ve metabolik alışkanlık değerlendirmesi.', icon: '🔍' },
      { number: '02', title: 'Hedef Belirleme', desc: 'Kalori açığı/fazlası ve makro besin oranları.', icon: '🎯' },
      { number: '03', title: 'Kişiye Özel Planlama', desc: 'Günlük yaşamınıza uygun beslenme menüsü.', icon: '📋' },
      { number: '04', title: 'Programın Başlaması', desc: 'Alışveriş rehberi ve öğün zamanlaması.', icon: '🚀' },
      { number: '05', title: 'Haftalık Takip', desc: 'Vücut ağırlığı, sindirim ve enerji takibi.', icon: '📈' },
      { number: '06', title: 'Performans Analizi', desc: 'Aylık yağsız kas kütlesi & yağ oranı değişimi.', icon: '📊' },
      { number: '07', title: 'Program Güncellemesi', desc: 'Metabolik adaptasyona göre kalori kalibrasyonu.', icon: '🔄' },
      { number: '08', title: 'Sürdürülebilir Gelişim', desc: 'Sezgisel beslenme ve kalıcı form koruma.', icon: '🏆' }
    ],
    
    checklist: [
      '✓ Fiziksel Değerlendirme',
      '✓ Hedef Analizi',
      '✓ Vücut Analizi',
      '✓ Program Tasarımı',
      '✓ Egzersiz Kütüphanesi',
      '✓ Video Destekleri',
      '✓ Form Analizi',
      '✓ Haftalık Kontrol',
      '✓ Aylık Güncelleme',
      '✓ Performans Raporu',
      '✓ WhatsApp Destek',
      '✓ Beslenme Rehberi',
      '✓ Yaşam Tarzı Önerileri'
    ],
    
    targetGroups: [
      { title: 'Sporcular & Atletler', desc: 'Antrenman ve müsabaka performansını beslenmeyle tepe noktaya çıkarmak isteyenler.', icon: '⚡' },
      { title: 'Yağ Yakmak İsteyenler', desc: 'Kas kütlesini koruyarak sağlıklı kalori açığı ile yağ yakımı hedefleyenler.', icon: '🔥' },
      { title: 'Kas Hacmi İsteyenler', desc: 'Temiz (clean) bulking dönemiyle yağlanmadan kas kütlesi kazanmak isteyenler.', icon: '💪' },
      { title: 'Metabolik Sağlık Aralığı', desc: 'İnsülin direnci veya sindirim hassasiyeti yaşayan bireyler.', icon: '🩺' },
      { title: 'Yoğun Çalışanlar', desc: 'Pratik ve sürdürülebilir öğün düzeni kurmak isteyen profesyoneller.', icon: '💼' },
      { title: 'Suplement Kullanıcıları', desc: 'Kanıta dayalı besin takviyesi kullanımı hakkında bilimsel danışmanlık arayanlar.', icon: '💊' }
    ],
    
    outcomes: [
      { title: 'Daha Güçlü Vücut', desc: 'Doğru protein ve amino asit dengesiyle yüksek kas rejenerasyonu.', icon: '💥' },
      { title: 'Bilimsel Programlama', desc: 'BMR/TDEE kalibrasyonu ile matematiksel besin takibi.', icon: '🧬' },
      { title: 'Daha İyi Hareket Kalitesi', desc: 'Enflamasyonu azaltan antioksidan ve mikronütriyent yoğunluğu.', icon: '🔄' },
      { title: 'Performans Artışı', desc: 'Gün boyu stabil glikoz seviyeleri ve yüksek zihinsel/fiziksel odak.', icon: '📈' },
      { title: 'Düzenli Takip', desc: 'Haftalık kilo ve vücut ölçüm takibi ile anında kalori revizyonu.', icon: '🛡️' },
      { title: 'Sürdürülebilir Sonuçlar', desc: 'Yasaklayıcı diyetler yerine esnek ve keyifli beslenme alışkanlığı.', icon: '🏆' }
    ],
    
    pricingPlans: [
      {
        title: 'Online Beslenme',
        subtitle: 'Uzaktan Diyet Danışmanlığı',
        price: '2.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Kişiye Özel Makro-Mikro Beslenme Planı',
          'Antrenman Zamanlamasına Uygun Menü',
          'Suplement & Takviye Protokolü',
          'Haftalık Kilo & Ölçüm Kontrolü',
          'WhatsApp İletişim Desteği'
        ]
      },
      {
        title: 'Premium Diyet & Performans',
        subtitle: 'Diyetisyen + Koçluk Entegrasyonu',
        price: '4.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        badge: 'EN ÇOK TERCİH EDİLEN',
        isPopular: true,
        features: [
          'Online Beslenme Paketindeki Tüm Özellikler',
          'Birebir Diyetisyen Sesli/Görüntülü Görüşmesi',
          '7/24 Öncelikli Sorun Yanıtlama',
          'Restoran & Dışarıda Yemek Rehberi',
          'Aylık Vücut Kompozisyon Analizi'
        ]
      },
      {
        title: 'Yüz Yüze Diyet Seansı',
        subtitle: 'Klinik / Stüdyo Ölçüm & Danışmanlık',
        price: '900 TL',
        period: "/ Seans'dan Başlayan",
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Birebir Diyetisyen Danışmanlık Seansı',
          'Medikal Tanita/InBody Vücut Analizi',
          'Metabolik Sağlık Taraması',
          'Beslenme Eğitimi & Öğün Planlama',
          'Takip Kartı ve Raporlama'
        ]
      }
    ],
    
    faqs: [
      { question: 'Program ne kadar sürüyor?', answer: 'Metabolik adaptasyon ve alışkanlık kazanımı için beslenme programlarımız 8 ila 12 haftalık periyotlarla yürütülür.' },
      { question: 'Aç kalacak mıyım?', answer: 'Kesinlikle hayır. Programlarımız kalori kısıtlaması değil, yüksek besin yoğunluklu (nutrient-dense) gıdalarla doyum sağlayan bilimsel makro dengesine dayanır.' },
      { question: 'Beslenme hizmetini kim veriyor?', answer: 'Beslenme protokolleri yetkin diyetisyen ve beslenme uzmanları iş birliğiyle hazırlanmakta ve takip edilmektedir.' },
      { question: 'Suplement kullanmak zorunda mıyım?', answer: 'Hayır. Suplementler sadece gerçek gıda ihtiyaçları karşılandıktan sonra ihtiyaç durumunda kanıta dayalı olarak önerilir.' },
      { question: 'Dışarıda yemek yerken ne yapacağım?', answer: 'Size sunulan esnek beslenme rehberi ve değişim listeleri sayesinde sosyal hayatınızı aksatmadan programı sürdürebilirsiniz.' }
    ],
    
    clientResults: [
      {
        clientName: 'Selin A.',
        age: 31,
        profession: 'Avukat',
        durationWeeks: 12,
        weightChange: '-8.5 kg',
        muscleChange: '+1.2 kg',
        fatChange: '-%7.1',
        waistChange: '-9 cm',
        story: 'Yoğun iş temposunda sürekli dışarıdan yiyordum. Diyetisyen desteğiyle kan şekerim dengelendi, tatlı krizlerim bitti ve 8.5 kg yağ kaybettim.',
        badge: 'METABOLİK DÖNÜŞÜM'
      }
    ],
    
    caseStudy: {
      title: 'İnsülin Direnci Olan Bireyde Yağ Kaybı Vaka Analizi',
      clientProfile: '35 Yaşında Kadın, İnsülin Direnci Tanısı, Sürekli Yorgunluk Hissi',
      problem: 'Yüksek bel çevresi, açlık krizleri ve düşük antrenman enerjisi.',
      appliedProgram: 'Düşük Glisemik Yük + Yüksek Protein ve Lifli Beslenme Protokolü + Öğün Zamanlaması.',
      followUpProcess: 'Haftalık glikoz duyarlılığı takibi ve aşamalı karbonhidrat döngüsü (carb cycling).',
      resultsSummary: '12 haftada bel çevresinde 10 cm daralma, HOMA-IR insülin direnci skorunda %40 iyileşme kaydedildi.',
      metrics: [
        { label: 'Açlık Kan Şekeri', before: '112 mg/dL', after: '88 mg/dL', improvement: '-24 mg/dL' },
        { label: 'HOMA-IR İnsülin Skoru', before: '3.8', after: '1.9', improvement: '-%50' },
        { label: 'Vücut Yağ Oranı', before: '%31.5', after: '%23.2', improvement: '-%8.3' }
      ]
    },
    
    metricsCharts: [
      { label: 'Metabolik Enerji Düzeyi', beforeVal: 40, afterVal: 90, displayVal: '90/100 Yüksek Odak' },
      { label: 'Vücut Yağ Kaybı', beforeVal: 80, afterVal: 30, displayVal: '%31.5 ➔ %23.2' },
      { label: 'Glikoz Stabilitesi', beforeVal: 35, afterVal: 95, displayVal: 'Tam Denge' },
      { label: 'Kas Kütlesi Korunumu', beforeVal: 90, afterVal: 98, displayVal: '%98 Kas Koruma' }
    ],
    
    scientificCitations: [
      {
        organization: 'ISSN (International Society of Sports Nutrition)',
        title: 'Diets and Body Composition Standards',
        authorsAndYear: 'Aragon, A. A., et al. (2017)',
        keyFinding: 'Kas kütlesini koruyarak yağ yakmak için günlük kg başına 1.6 - 2.2g protein alımı şarttır.',
        application: 'Beslenme planlarımızda protein miktarı sporcunun kas kütlesine göre hassas ayarlanır.'
      }
    ],
    
    coachInfo: {
      name: 'TK Diyetisyen & Koçluk Ekibi',
      title: 'Beslenme Uzmanı & Spor Bilimci İş Birliği',
      philosophy: 'En iyi beslenme planı; aç kalmadan, sürdürülebilir şekilde hedefe ulaştıran plandır.',
      degrees: [
        'Beslenme ve Diyetetik Bölümü (Lisans)',
        'Sporcu Beslenmesi Uzmanlık Sertifikası',
        'Spor Bilimleri Akademik Koordinasyon'
      ],
      experience: 'Yüzlerce Başarılı Danışan Deneyimi'
    },
    
    tools: [
      { name: 'Kalori Hesaplayıcı', desc: 'BMR ve TDEE enerji ölçümü.', icon: '🔥' },
      { name: 'Makro Takibi', desc: 'Protein, karbonhidrat ve yağ oranları.', icon: '🥗' },
      { name: 'Vücut Analizi', desc: 'Yağ kütlesi ve kas dengesi.', icon: '📊' },
      { name: 'Öğün Zamanlayıcı', desc: 'Anabolik pencere optimizasyonu.', icon: '⏰' },
      { name: 'Suplement Rehberi', desc: 'Kanıta dayalı takviye kullanımı.', icon: '💊' },
      { name: 'WhatsApp Platform', desc: 'Öğün fotoğrafı kontrol hattı.', icon: '💬' }
    ],
    
    ctaTitle: 'Beslenmeni Değiştir, Hayatını Değiştir.',
    ctaSubtitle: 'Diyetisyen rehberliğinde metabolizmana uygun bilimsel beslenme haritanı hemen oluştur.'
  },

  'athletic-performance': {
    slug: 'athletic-performance',
    title: 'ATLETİK PERFORMANS',
    subtitle: 'Saha İçi Hız, Güç ve Çeviklik Gelişimi',
    shortDesc: 'Hız, kuvvet, çeviklik ve branşa özel performans gelişimi için yüz yüze veya online eğitim programları.',
    badge: 'ATLETİK GELİŞİM & VBT',
    heroImage: '/images/hero/tunahan-hero.jpg',
    
    aboutTitle: 'Velocity-Based Training ve Saha İçi Patlayıcılık',
    aboutContent: [
      'Atletik performans, genel bir antrenman salonu çalışması değildir. Bir sporcunun sahada daha hızlı koşması, daha yüksek sıçraması, ani yön değişikliklerinde akselerasyon kazanması ve sakatlanmadan sezonu tamamlaması bilimsel bir kondisyonerlik mühendisliği gerektirir. TK Performance & Health, sporcular için uluslararası standartlarda atletik gelişim sistemleri sunar.',
      'Sistemimizde geleneksel ağır kaldırma mantığının ötesine geçilerek Velocity-Based Training (VBT - Hız Tabanlı Antrenman) metodolojisi uygulanır. Bar hızı m/s (metre/saniye) cinsinden ölçülerek sporcunun o günkü santral sinir sistemi (CNS) yorgunluğu tespit edilir. Kuvvet-Hız Eğrisi (Force-Velocity Curve) doğrultusunda patlayıcı güç, maksimal kuvvet ve reactive strength index (RSI) geliştirilir.',
      'Ayrıca Return to Sport (Sahaya Güvenle Dönüş) protokollerimiz ile sakatlık yaşamış sporcuların nöromüsküler kontrolleri yeniden yapılandırılır. Amacımız, branşınız ne olursa olsun sizi sahanın en güçlü, en hızlı ve sakatlığa en dayanıklı sporcusu yapmaktır.'
    ],
    
    timeline: [
      { number: '01', title: 'Analiz', desc: 'FMS taraması, kuvvet-hız profillemesi ve patlayıcılık ölçümü.', icon: '🔍' },
      { number: '02', title: 'Hedef Belirleme', desc: 'Branşa özel akselerasyon, sıçrama ve güç hedefleri.', icon: '🎯' },
      { number: '03', title: 'Kişiye Özel Planlama', desc: 'VBT ve plyometrik tabanlı kondisyonerlik programı.', icon: '📋' },
      { number: '04', title: 'Programın Başlaması', desc: 'Saha ve salon nöromüsküler adaptasyon çalışmaları.', icon: '🚀' },
      { number: '05', title: 'Haftalık Takip', desc: 'Bar hızı takibi ve laktat toleransı ölçümleri.', icon: '📈' },
      { number: '06', title: 'Performans Analizi', desc: 'Dikey sıçrama cm ve 10m/30m sprint testleri.', icon: '📊' },
      { number: '07', title: 'Program Güncellemesi', desc: 'Müsabaka takvimine göre periodizasyon geçişi.', icon: '🔄' },
      { number: '08', title: 'Sürdürülebilir Gelişim', desc: 'Peak performans ve sakatlıksız uzun kariyer.', icon: '🏆' }
    ],
    
    checklist: [
      '✓ Fiziksel Değerlendirme',
      '✓ Hedef Analizi',
      '✓ Vücut Analizi',
      '✓ Program Tasarımı',
      '✓ Egzersiz Kütüphanesi',
      '✓ Video Destekleri',
      '✓ Form Analizi',
      '✓ Haftalık Kontrol',
      '✓ Aylık Güncelleme',
      '✓ Performans Raporu',
      '✓ WhatsApp Destek',
      '✓ Beslenme Rehberi',
      '✓ Yaşam Tarzı Önerileri'
    ],
    
    targetGroups: [
      { title: 'Futbolcular & Basketbolcular', desc: 'Saha içi sprint, çeviklik ve dikey sıçramasını artırmak isteyen branş sporcuları.', icon: '⚽' },
      { title: 'Dövüş Sporcuları', desc: 'Patlayıcı yumruk/tepme gücü ve laktat toleransı geliştirmek isteyen atletler.', icon: '🥊' },
      { title: 'Tenis & Bireysel Sporcular', desc: 'Yön değiştirme hızı ve rotasyonel kuvvet kazanmak isteyenler.', icon: '🎾' },
      { title: 'Return to Sport Sporcuları', desc: 'Ön çapraz bağ veya menisküs ameliyatı sonrası sahaya dönenler.', icon: '🏥' },
      { title: 'Genç Atletler', desc: 'Temel hareket okuryazarlığı ve atletik altyapı kurmak isteyen geleceğin sporcuları.', icon: '🏃‍♂️' },
      { title: 'Profesyonel Kondisyoner Adayları', desc: 'VBT ve bilimsel test yöntemlerini deneyimlemek isteyen koçlar.', icon: '🎓' }
    ],
    
    outcomes: [
      { title: 'Daha Güçlü Vücut', desc: 'Patlayıcı güç ve yüksek maksimal oranlı kas lifi rekrütmanı.', icon: '💥' },
      { title: 'Bilimsel Programlama', desc: 'VBT metre/saniye hız ölçümleri ile akıllı sinir sistemi yönetimi.', icon: '🧬' },
      { title: 'Daha İyi Hareket Kalitesi', desc: 'Deselerasyon (yavaşlama) ve iniş mekaniği ile sakatlık önleme.', icon: '🔄' },
      { title: 'Performans Artışı', desc: 'Sprint sürelerinde düşüş, dikey sıçramada santimetre artışı.', icon: '📈' },
      { title: 'Düzenli Takip', desc: 'Saha performansı ve yorgunluk takibi ile peak kondisyon.', icon: '🛡️' },
      { title: 'Sürdürülebilir Sonuçlar', desc: 'Sezon boyu yüksek form düzeyi ve uzun müsabaka ömrü.', icon: '🏆' }
    ],
    
    pricingPlans: [
      {
        title: 'Online Atletik Koçluk',
        subtitle: 'Uzaktan Kondisyonerlik & VBT Takibi',
        price: '2.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Branşa Özel Atletik Performans Programı',
          'VBT (Hız Tabanlı) Yüklenme Rehberi',
          'Sprint & Sıçrama Video Form Analizi',
          'Haftalık Nöromüsküler Yorgunlık Kontrolü',
          'WhatsApp Desteği'
        ]
      },
      {
        title: 'Premium Atletik Performans',
        subtitle: 'Tam Kapsamlı Sezon İçi / Dışı Koçluk',
        price: '4.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        badge: 'EN ÇOK TERCİH EDİLEN',
        isPopular: true,
        features: [
          'Online Atletik Paketindeki Tüm Özellikler',
          'Saha & Salon Birebir Video Profillemesi',
          'Sakatlık Önleyici Nöromüsküler Protokol',
          'Sporcu Beslenmesi & Suplement Rehberi',
          '7/24 Öncelikli İletişim Hattı'
        ]
      },
      {
        title: 'Yüz Yüze Atletik Seans',
        subtitle: 'Birebir Saha / Test Seansı',
        price: '900 TL',
        period: "/ Seans'dan Başlayan",
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Birebir Saha / Salon Atletik Performans Seansı',
          'FMS ve Dikey Sıçrama Test Ölçümü',
          'Reaktif Güç ve Plyometrik Çalışma',
          'VBT Ekipmanı ile Hız Ölçümü',
          'Performans Raporlaması'
        ]
      }
    ],
    
    faqs: [
      { question: 'Program ne kadar sürüyor?', answer: 'Atletik performans blokları sezona hazırlık (off-season), müsabaka dönemi (in-season) ve geçiş dönemlerine göre 8-16 haftalık periyotlarla yürütülür.' },
      { question: 'VBT (Velocity-Based Training) nedir?', answer: 'Ağırlığın kaldırılma hızını (m/s) ölçerek sporcunun o günkü kas ve sinir sistemi yorgunluğunu belirleyen en güncel bilimsel metodolojidir.' },
      { question: 'Sakatlık sonrası ne zaman başlanabilir?', answer: 'Fizyoterapist onayından hemen sonra Return to Sport protokolümüz başlar.' },
      { question: 'Online atletik koçluk faydalı mı?', answer: 'Evet. Video analizleri ve hareket verileriniz sayesinde uzaktan da VBT ve plyometrik takibiniz eksiksiz yapılır.' },
      { question: 'Dikey sıçramam kaç cm artar?', answer: '12 haftalık doğru plyometrik ve kuvvet bloğu sonunda sporcularda ortalama 6-12 cm dikey sıçrama artışı gözlenmektedir.' }
    ],
    
    clientResults: [
      {
        clientName: 'Berkay A.',
        age: 22,
        profession: 'Profesyonel Futbolcu',
        durationWeeks: 12,
        weightChange: '+2.1 kg',
        muscleChange: '+2.8 kg',
        fatChange: '-%1.8',
        waistChange: '-2 cm',
        story: '12 haftalık VBT ve plyometrik çalışma sonunda dikey sıçramam 11 cm arttı, 30m sprint sürem 0.22 saniye gelişti.',
        badge: 'SAHA PERFORMANSI'
      }
    ],
    
    caseStudy: {
      title: 'Futbolcuda İki Yönlü Sprint ve Dikey Sıçrama Gelişimi Vaka Analizi',
      clientProfile: '22 Yaşında Kanat Oyuncusu, Yavaş Akselerasyon ve İniş Mekaniği Bozukluğu',
      problem: 'İlk adım patlayıcılığında yetersizlik, diz stabilitesi zayıflığı.',
      appliedProgram: 'Aşamalı Eksantrik Yükleme + VBT Squat/Trap Bar Deadlift + Plyometrik İniş Mekaniği.',
      followUpProcess: 'Akselerasyon açı takibi ve Jump Mat dikey sıçrama testi.',
      resultsSummary: '10m kalkış süresi %8 hızlandı. Dikey sıçrama 52 cm\'den 63 cm\'e yükseldi.',
      metrics: [
        { label: 'Dikey Sıçrama (CM)', before: '52 cm', after: '63 cm', improvement: '+11 cm' },
        { label: '10 Metre Sprint (Saniye)', before: '1.82 s', after: '1.64 s', improvement: '-0.18 s' },
        { label: 'VBT Bar Hızı (100 kg)', before: '0.45 m/s', after: '0.68 m/s', improvement: '+0.23 m/s' }
      ]
    },
    
    metricsCharts: [
      { label: 'Dikey Sıçrama Kapasitesi', beforeVal: 50, afterVal: 90, displayVal: '52cm ➔ 63cm (+11cm)' },
      { label: 'Patlayıcı Kuvvet İndeksi', beforeVal: 55, afterVal: 92, displayVal: '%38 Artış' },
      { label: '10m/30m Akselerasyon', beforeVal: 60, afterVal: 94, displayVal: '-0.18s Hızlanma' },
      { label: 'Sakatlık Direnç Skoru', beforeVal: 45, afterVal: 96, displayVal: '96/100 Yüksek Direnç' }
    ],
    
    scientificCitations: [
      {
        organization: 'NSCA (National Strength & Conditioning Association)',
        title: 'Velocity-Based Training: From Theory to Application',
        authorsAndYear: 'Jidovtseff, B., et al. (2014)',
        keyFinding: 'Bar kaldırma hızı, günlük antrenman şiddetini ayarlamada en hassas göstergedir.',
        application: 'Sporcularımızda gereksiz yorgunluk yaratmadan maksimum güç üretimi hedeflenir.'
      }
    ],
    
    coachInfo: {
      name: 'Tunahan Keskin',
      title: 'Atletik Performans Koçu & Spor Bilimci',
      philosophy: 'Saha başarısı tesadüf değildir; biyomekanik ve hız verilerinin doğru yönetimidir.',
      degrees: [
        'Beden Eğitimi ve Spor Öğretmenliği',
        'Spor Yöneticiliği Yüksek Lisans',
        'Atletik Performans & VBT Uzmanlığı'
      ],
      experience: 'Profesyonel Atlet ve Kulüp Danışmanlığı'
    },
    
    tools: [
      { name: 'VBT Hız Ölçer', desc: 'm/s cinsinden bar hızı takibi.', icon: '⚡' },
      { name: 'Sıçrama Matı', desc: 'Dikey sıçrama ve RSI ölçümü.', icon: '📊' },
      { name: 'FMS Taraması', desc: 'Nöromüsküler hareket analizi.', icon: '📐' },
      { name: 'Performans Takibi', desc: 'Saha verileri ve yorgunluk skoru.', icon: '📱' },
      { name: 'Video Analiz', desc: 'Sprint ve akselerasyon açısı.', icon: '🎥' },
      { name: 'WhatsApp Hat', desc: 'Maç ve antrenman günlüğü.', icon: '💬' }
    ],
    
    ctaTitle: 'Sahanın En Hızlısı ve En Güçlüsü Ol.',
    ctaSubtitle: 'Uluslararası spor bilimi standartlarında atletik gelişim programın için hemen iletişime geç.'
  },

  'pilates': {
    slug: 'pilates',
    title: 'MAT & REFORMER PİLATES',
    subtitle: 'Core Stabilitesi, Omurga Hizalaması ve Esneklik',
    shortDesc: 'Core kuvveti, esneklik, denge ve postür gelişimine yönelik yüz yüze veya online pilates eğitimleri.',
    badge: 'PİLATES & OMURGA SAĞLIĞI',
    heroImage: '/images/hero/tunahan-hero.jpg',
    
    aboutTitle: 'Derin Core Aktivasyonu ve Biyomekanik Omurga Hizalaması',
    aboutContent: [
      'Pilates; sadece esneme hareketlerinden oluşan yüzeysel bir egzersiz değil, omurganın doğal kavislerini koruyarak derin stabilizatör kasları (transversus abdominis, multifidus, pelvik taban) harekete geçiren bütüncül bir biyomekanik disiplindir. TK Performance & Health çatısı altında Mat ve Reformer Pilates prensipleri spor bilimi altyapısıyla harmanlanır.',
      'Sistemimizde Joseph Pilates\'in 6 temel prensibi (Centering, Control, Concentration, Precision, Breath, Flow) kinesiyolojik açı değerlendirmeleriyle birleştirilir. Masa başı çalışmanın yarattığı omurga baskısı, duruş bozuklukları ve bel-boyun hassasiyetleri kontrollü yay dirençleri ve vücut ağırlığı egzersizleriyle giderilir.',
      'Kişiye özel tasarlanan ders akışlarında; postüral hiza, pelvik nötr konum ve kaburga-pelvis entegrasyonu ön plandadır. Sonuç olarak sadece daha zarif ve esnek bir duruş değil, aynı zamanda günlük hayatta ve sporda sakatlanmayan, güçlü bir core bölgesi kazanılır.'
    ],
    
    timeline: [
      { number: '01', title: 'Analiz', desc: 'Postür, omurga kavisleri ve pelvik açı değerlendirmesi.', icon: '🔍' },
      { number: '02', title: 'Hedef Belirleme', desc: 'Esneklik, duruş düzeltim ve core gücü hedefleri.', icon: '🎯' },
      { number: '03', title: 'Kişiye Özel Planlama', desc: 'Mat veya Reformer odaklı seviyelendirilmiş ders akışı.', icon: '📋' },
      { number: '04', title: 'Programın Başlaması', desc: 'Nefes ve derin core aktivasyon egzersizleri.', icon: '🚀' },
      { number: '05', title: 'Haftalık Takip', desc: 'Hizalama takibi ve zorluk derecesi artırımı.', icon: '📈' },
      { number: '06', title: 'Performans Analizi', desc: 'Aylık esneklik cm ve omurga mobilite ölçümü.', icon: '📊' },
      { number: '07', title: 'Program Güncellemesi', desc: 'İleri seviye Pilates repertuarı geçişi.', icon: '🔄' },
      { number: '08', title: 'Sürdürülebilir Gelişim', desc: 'Zarif duruş, güçlü merkez ve ağrısız yaşam.', icon: '🏆' }
    ],
    
    checklist: [
      '✓ Fiziksel Değerlendirme',
      '✓ Hedef Analizi',
      '✓ Vücut Analizi',
      '✓ Program Tasarımı',
      '✓ Egzersiz Kütüphanesi',
      '✓ Video Destekleri',
      '✓ Form Analizi',
      '✓ Haftalık Kontrol',
      '✓ Aylık Güncelleme',
      '✓ Performans Raporu',
      '✓ WhatsApp Destek',
      '✓ Beslenme Rehberi',
      '✓ Yaşam Tarzı Önerileri'
    ],
    
    targetGroups: [
      { title: 'Postürünü Düzeltmek İsteyenler', desc: 'Kifoz, lordoz veya masa başı duruş bozukluğu yaşayanlar.', icon: '🧘‍♀️' },
      { title: 'Bel & Boyun Hassasiyeti Olanlar', desc: 'Omurga dekompresyonu ve koruyucu egzersiz arayanlar.', icon: '🏥' },
      { title: 'Esneklik & Denge İsteyenler', desc: 'Kas boyunu uzatmak ve eklem hareket açıklığını artırmak isteyenler.', icon: '🤸‍♀️' },
      { title: 'Core Bölgesini Güçlendirenler', desc: 'Derin karın kaslarını ve pelvik tabanı aktifleştirmek isteyenler.', icon: '🛡️' },
      { title: 'Hamilelik Sonrası (Postnatal)', desc: 'Görsel ve fonksiyonel toparlanma arayan kadınlar.', icon: '🌸' },
      { title: 'Sporcular', desc: 'Ana branş antrenmanına ek olarak mobilite ve denge katmak isteyen atletler.', icon: '⚡' }
    ],
    
    outcomes: [
      { title: 'Daha Güçlü Vücut', desc: 'Derin korse görevi gören karın ve omurga kasları.', icon: '💥' },
      { title: 'Bilimsel Programlama', desc: 'Biyomekanik omurga açılarına uygun seviyelendirilmiş akış.', icon: '🧬' },
      { title: 'Daha İyi Hareket Kalitesi', desc: 'Artmış esneklik, omurga mobilitesi ve kusursuz hiza.', icon: '🔄' },
      { title: 'Performans Artışı', desc: 'Denge, koordinasyon ve vücut farkındalığında tepe nokta.', icon: '📈' },
      { title: 'Düzenli Takip', desc: 'Form kontrolü ve ders gelişim grafik sistemi.', icon: '🛡️' },
      { title: 'Sürdürülebilir Sonuçlar', desc: 'Günlük hayata yansıyan dik, özgüvenli ve ağrısız bir duruş.', icon: '🏆' }
    ],
    
    pricingPlans: [
      {
        title: 'Online Pilates',
        subtitle: 'Uzaktan Mat Pilates & Core Eğitim',
        price: '2.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Kişiye Özel Mat Pilates Akış Programı',
          'Nefes & Derin Core Aktivasyon Rehberi',
          'Video Form Kontrolü & Düzeltimi',
          'Haftalık Postür Takibi',
          'WhatsApp İletişim Hattı'
        ]
      },
      {
        title: 'Premium Online Pilates',
        subtitle: 'Canlı Sesli/Görüntülü Takip & Ekipmanlı',
        price: '4.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        badge: 'EN ÇOK TERCİH EDİLEN',
        isPopular: true,
        features: [
          'Online Pilates Paketindeki Tüm Özellikler',
          'Birebir Canlı Görüntülü Ders & Form Hizalaması',
          'Küçük Ekipmanlı (Bant, Çember, Top) Program',
          'Kişiselleştirilmiş Beslenme Rehberi',
          '7/24 Öncelikli İletişim'
        ]
      },
      {
        title: 'Yüz Yüze Reformer / Mat',
        subtitle: 'Stüdyo Birebir Pilates Seansı',
        price: '900 TL',
        period: "/ Seans'dan Başlayan",
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Birebir 60 Dakika Reformer / Mat Pilates Seansı',
          'Kişisel Reformer Aletli Omurga Çalışması',
          'Postüral Biyomekanik Hizalama',
          'Pelvik Taban & Core Aktivasyonu',
          'Aylık Esneklik Raporlaması'
        ]
      }
    ],
    
    faqs: [
      { question: 'Program ne kadar sürüyor?', answer: 'Pilates eğitimlerimiz 12 haftalık düzenli periyotlar halinde önerilir. 10 derste farkı hisseder, 20 derste görür, 30 derste yeni bir bedene sahip olursunuz.' },
      { question: 'Bel fıtığım var, yapabilir miyim?', answer: 'Evet. Omurgaya yük bindirmeyen koruyucu Pilates protokolümüz tam da omurga rahatsızlığı olan bireylere uygundur.' },
      { question: 'Reformer ile Mat Pilates farkı nedir?', answer: 'Reformer yay direnci kullanarak hareketi hem destekler hem zorlaştırır; Mat Pilates ise kendi vücut ağırlığınızla kontrol kazanmanızı sağlar.' },
      { question: 'Esnek değilim, Pilates yapabilir miyim?', answer: 'Kesinlikle evet. Esneklik Pilates yapmanın ön koşulu değil, sonucudur.' },
      { question: 'Erkekler Pilates yapabilir mi?', answer: 'Evet. Joseph Pilates bu sistemi erkekler ve boksörler için geliştirmiştir; dünyada birçok profesyonel erkek atlet Pilates yapmaktadır.' }
    ],
    
    clientResults: [
      {
        clientName: 'Merve K.',
        age: 27,
        profession: 'Mimar',
        durationWeeks: 12,
        weightChange: '-4.1 kg',
        muscleChange: '+1.5 kg',
        fatChange: '-%4.2',
        waistChange: '-7 cm',
        story: 'Masa başında çalışırken oluşan sırt ve boyun ağrılarım 4 haftada bitti. Duruşum dikleşti ve omurgam hafifledi.',
        badge: 'POSTÜR & ESNEKLİK'
      }
    ],
    
    caseStudy: {
      title: 'Masa Başı Çalışanda Kifoz Düzeltim ve Omurga Dekompresyonu',
      clientProfile: '27 Yaşında Kadın, Mimar, Kifotik Postür ve Bel Ağrısı',
      problem: 'Yuvarlanmış omuzlar, öne düşük baş pozisyonu ve zayıf core.',
      appliedProgram: 'Mat Pilates Pelvik Nötr Çalışması + Skapular Stabilizasyon + Reformer Ekstansiyon Akışları.',
      followUpProcess: 'Aylık postür çizgi analizi ve omurga esneklik ölçümleri.',
      resultsSummary: 'Boyun ve bel ağrıları sıfırlandı. Omuz simetrisi 4 cm düzeldi, duruş tamamen dikleşti.',
      metrics: [
        { label: 'Öne Baş Açı Sapması', before: '32°', after: '12°', improvement: '-20°' },
        { label: 'Sit and Reach Esneklik Testi', before: '14 cm', after: '28 cm', improvement: '+14 cm' },
        { label: 'Bel Çevresi Ölçümü', before: '76 cm', after: '69 cm', improvement: '-7 cm' }
      ]
    },
    
    metricsCharts: [
      { label: 'Omurga Esneklik İndeksi', beforeVal: 40, afterVal: 92, displayVal: '+14 cm Esneme' },
      { label: 'Core Dayanıklılığı (Plank)', beforeVal: 35, afterVal: 95, displayVal: '45sn ➔ 180sn' },
      { label: 'Postür Düzeltim Skoru', beforeVal: 50, afterVal: 96, displayVal: '96/100 Dik Duruş' },
      { label: 'Ağrısız Gün Oranı', beforeVal: 20, afterVal: 100, displayVal: '%100 Ağrısız' }
    ],
    
    scientificCitations: [
      {
        organization: 'NASM (National Academy of Sports Medicine)',
        title: 'Core Stabilization Training and Lumbar Spine Biomechanics',
        authorsAndYear: 'Clark, M. A., et al. (2018)',
        keyFinding: 'Derin karın kası (Transversus Abdominis) aktivasyonu bel ağrılarını %80 azaltır.',
        application: 'Tüm Pilates derslerimizde önce derin core aktivasyonu ve nefes senkronizasyonu öğretilir.'
      }
    ],
    
    coachInfo: {
      name: 'Tunahan Keskin & Pilates Ekibi',
      title: 'Pilates & Biyomekanik Uzmanı',
      philosophy: 'Omurganız ne kadar genç ve esnekse, siz de o kadar gençsiniz.',
      degrees: [
        'Beden Eğitimi ve Spor Öğretmenliği',
        'Mat & Reformer Pilates Sertifikası',
        'Postüral Kinesiyoloji Uzmanlığı'
      ],
      experience: 'Yüzlerce Başarılı Postür Dönüşümü'
    },
    
    tools: [
      { name: 'Postür Analizi', desc: 'Açılı omurga ve hiza tespiti.', icon: '📐' },
      { name: 'Esneklik Testi', desc: 'Eklem açıklığı cm ölçümü.', icon: '🤸‍♀️' },
      { name: 'Core Ölçer', desc: 'Derin karın kası statik testi.', icon: '🛡️' },
      { name: 'Ders Akış Takibi', desc: 'Seviyelendirilmiş hareket takibi.', icon: '📱' },
      { name: 'Nefes Rehberi', desc: 'Diyafram ve pelvik senkronizasyon.', icon: '💨' },
      { name: 'WhatsApp Platform', desc: 'Duruş fotoğraf kontrol hattı.', icon: '💬' }
    ],
    
    ctaTitle: 'Dik Duruş, Özgüvenli Bir Beden.',
    ctaSubtitle: 'Pilates ve biyomekanik omurga rehberliği ile daha esnek, güçlü ve ağrısız bir yaşama adım atın.'
  },

  'functional-training': {
    slug: 'functional-training',
    title: 'FONKSİYONEL ANTRENMAN',
    subtitle: '3 Boyutlu Hareket Kalitesi ve Günlük Performans',
    shortDesc: 'Mobilite, stabilite, hareket kalitesi ve günlük yaşam performansını geliştiren online veya yüz yüze antrenman programları.',
    badge: 'FONKSİYONEL HAREKET & MOBİLİTE',
    heroImage: '/images/hero/tunahan-hero.jpg',
    
    aboutTitle: 'Joint-by-Joint Yaklaşımı ve 3 Boyutlu Hareket Kalitesi',
    aboutContent: [
      'Fonksiyonel antrenman; tek bir kası izole edip çalıştırmanın ötesinde, vücudun doğal hareket kalıplarını (itme, çekme, çömelme, menteşe, dönme, taşıma) 3 farklı hareket düzleminde (sagittal, frontal, transversal) geliştiren bilimsel bir yaklaşımı temsil eder. TK Performance & Health, Gray Cook ve Michael Boyle tarafından temelleri atılan Joint-by-Joint (Eklem Eklem) yaklaşımını esas alır.',
      'İnsan bedenindeki bazı eklemler mobiliteye (ayak bileği, kalça, torakal omurga, omuz), bazı eklemler ise stabiliteye (diz, bel omurları, kürek kemiği) ihtiyaç duyar. Fonksiyonel antrenman programlarımız; bu eklem hiyerarşisini düzelterek günlük hayatta eğilirken, taşırken veya spor yaparken vücudunuzun bir bütün halinde en yüksek verimle çalışmasını sağlar.',
      'Sistemimizde kettlebell, sağlık topu, direnç bantları ve kendi vücut ağırlığınız kullanılır. Amaç, sadece salonda ağır kaldıran biri olmak değil; gerçek dünyada daha hızlı, daha çevik, daha mobil ve sakatlanmayan fonksiyonel bir atletizme sahip olmanızdır.'
    ],
    
    timeline: [
      { number: '01', title: 'Analiz', desc: 'Joint-by-Joint eklem mobilite ve stabilite taraması.', icon: '🔍' },
      { number: '02', title: 'Hedef Belirleme', desc: 'Hareket kalitesi ve günlük kondisyon hedefleri.', icon: '🎯' },
      { number: '03', title: 'Kişiye Özel Planlama', desc: 'Multi-planar (3 boyutlu) antrenman dizaynı.', icon: '📋' },
      { number: '04', title: 'Programın Başlaması', desc: 'Temel hareket kalıplarının kusursuz icrası.', icon: '🚀' },
      { number: '05', title: 'Haftalık Takip', desc: 'Hareket akıcılığı ve kondisyon seviye kontrolü.', icon: '📈' },
      { number: '06', title: 'Performans Analizi', desc: 'Aylık mobilite cm ve dayanıklılık testleri.', icon: '📊' },
      { number: '07', title: 'Program Güncellemesi', desc: 'Kompleks fonksiyonel hareket kombinasyonları.', icon: '🔄' },
      { number: '08', title: 'Sürdürülebilir Gelişim', desc: 'Gerçek dünyada yüksek atletizm ve fonksiyonel beden.', icon: '🏆' }
    ],
    
    checklist: [
      '✓ Fiziksel Değerlendirme',
      '✓ Hedef Analizi',
      '✓ Vücut Analizi',
      '✓ Program Tasarımı',
      '✓ Egzersiz Kütüphanesi',
      '✓ Video Destekleri',
      '✓ Form Analizi',
      '✓ Haftalık Kontrol',
      '✓ Aylık Güncelleme',
      '✓ Performans Raporu',
      '✓ WhatsApp Destek',
      '✓ Beslenme Rehberi',
      '✓ Yaşam Tarzı Önerileri'
    ],
    
    targetGroups: [
      { title: 'Günlük Yaşam Kinesiyolojisi', desc: 'Günlük hayatta daha dinç, enerjik ve ağrısız hareket etmek isteyenler.', icon: '🔄' },
      { title: 'Çok Yönlü Kondisyon İsteyenler', desc: 'Hem kuvvet, hem mobilite, hem dayanıklılığı aynı anda arayanlar.', icon: '⚡' },
      { title: 'Eklem Kısıtlılığı Olanlar', desc: 'Kalça veya omuz mobilitesi kısıtlı olup açmak isteyenler.', icon: '📐' },
      { title: 'Monotonluktan Sıkılanlar', desc: 'Sürekli değişen dinamik ve eğlenceli antrenman arayanlar.', icon: '🎯' },
      { title: 'Çapraz Antrenman Sporcuları', desc: 'Ana sporuna ek olarak fonksiyonel zemin inşa etmek isteyenler.', icon: '🏋️‍♂️' },
      { title: 'Yaşla Gelen Mobilite Kaybı', desc: 'Yaş ilerledikçe eklem sağlığını ve dengesini korumak isteyenler.', icon: '🌱' }
    ],
    
    outcomes: [
      { title: 'Daha Güçlü Vücut', desc: 'Tüm düzlemlerde çalışan entegre kas ve bağ doku kuvveti.', icon: '💥' },
      { title: 'Bilimsel Programlama', desc: 'Joint-by-Joint prensiplerine göre yapılandırılmış hareket dizilimi.', icon: '🧬' },
      { title: 'Daha İyi Hareket Kalitesi', desc: 'Açılmış eklem mobilitesi ve kusursuz vücut koordinasyonu.', icon: '🔄' },
      { title: 'Performans Artışı', desc: 'Gün boyu süren yüksek vitalite ve atletik kondisyon.', icon: '📈' },
      { title: 'Düzenli Takip', desc: 'Video form analizi ve fonksiyonel ilerleme haritası.', icon: '🛡️' },
      { title: 'Sürdürülebilir Sonuçlar', desc: 'Yaşam kalitesine direkt yansıyan sakatlanmaz bir beden.', icon: '🏆' }
    ],
    
    pricingPlans: [
      {
        title: 'Online Fonksiyonel',
        subtitle: 'Uzaktan Hareket & Kondisyon Eğitimi',
        price: '2.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Kişiye Özel Fonksiyonel Antrenman Şablonu',
          'Eklem Mobilite & Aktivasyon Rutini',
          'Video Form Analizi & Hareket Düzeltimi',
          'Haftalık Kondisyon Gelişim Takibi',
          'WhatsApp İletişim Desteği'
        ]
      },
      {
        title: 'Premium Fonksiyonel',
        subtitle: 'Canlı Birebir Takip & Ekipmanlı',
        price: '4.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        badge: 'EN ÇOK TERCİH EDİLEN',
        isPopular: true,
        features: [
          'Online Fonksiyonel Paketindeki Tüm Özellikler',
          'Canlı Video Görüşme & Hareket Taraması',
          'Ev/Salon Ekipmanına Göre (KB, Band, TRX) Plan',
          'Beslenme & Mobilite Takviye Rehberi',
          '7/24 Öncelikli WhatsApp Hattı'
        ]
      },
      {
        title: 'Yüz Yüze Fonksiyonel Seans',
        subtitle: 'Stüdyo Birebir Fonksiyonel Koçluk',
        price: '900 TL',
        period: "/ Seans'dan Başlayan",
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Birebir 60 Dakika Fonksiyonel Antrenman',
          'Joint-by-Joint Eklem Mobilizasyonu',
          'TRX, Kettlebell ve Plyometrik Ekipman',
          'Kondisyon ve Laktat Testi',
          'Aylık İlerleme Raporu'
        ]
      }
    ],
    
    faqs: [
      { question: 'Program ne kadar sürüyor?', answer: 'Fonksiyonel adaptasyon bloklarımız 8 ile 12 hafta sürelidir.' },
      { question: 'Ağır dambıllar kaldırmam gerekecek mi?', answer: 'Hayır. Fonksiyonel antrenmanda ağırlık miktarı değil, hareketin düzlemi ve kontrolü önceliklidir.' },
      { question: 'Evde yapılabilir mi?', answer: 'Evet. Vücut ağırlığı, direnç bantları ve ufak ekipmanlarla evde son derece verimli uygulanabilir.' },
      { question: 'Omuz ve kalça kısıtlılığım düzelir mi?', answer: 'Evet. Program öncesi yapılan eklem taraması ile kısıtlı eklemlere özel mobilite protokolleri uygulanır.' },
      { question: 'Kilo vermeme yardımcı olur mu?', answer: 'Evet. Çoklu kas grubunu aynı anda çalıştırdığı için kalori harcaması ve metabolik hız oldukça yüksektir.' }
    ],
    
    clientResults: [
      {
        clientName: 'Tolga B.',
        age: 36,
        profession: 'Yönetici',
        durationWeeks: 12,
        weightChange: '-6.4 kg',
        muscleChange: '+2.1 kg',
        fatChange: '-%5.8',
        waistChange: '-6 cm',
        story: 'Merdiven çıkarken bile nefes nefese kalıyordum. Fonksiyonel antrenman ile hem eklem ağrılarım bitti hem de enerjim iki katına çıktı.',
        badge: 'HAREKET KALİTESİ'
      }
    ],
    
    caseStudy: {
      title: 'Kalça ve Torakal Mobilite Kısıtlılığı Olan Bireyde Fonksiyonel İlerleme',
      clientProfile: '36 Yaşında Erkek, Yüksek Eklem Sertliği ve Çömelme Açısı Bozukluğu',
      problem: 'Derin squat yapamama, belde kompanzasyon ağrısı ve katı torakal omurga.',
      appliedProgram: 'Ayak Bileği & Kalça Mobilite Protokolü + TRX Core Stabilitesi + Kettlebell Hip Hinge.',
      followUpProcess: 'Açısal video analizleri ve eklem açıklığı cetvel takibi.',
      resultsSummary: 'Derin squat açısı 90 dereceden paralelin altına indi. Bel ağrısı %100 ortadan kalktı.',
      metrics: [
        { label: 'Ayak Bileği Dorsifleksiyon Açısı', before: '8°', after: '18°', improvement: '+10°' },
        { label: 'Torakal Omurga Rotasyonu', before: '30°', after: '52°', improvement: '+22°' },
        { label: 'Kondisyon (VO2 Max Tahmini)', before: '34 mL/kg', after: '44 mL/kg', improvement: '+10 mL/kg' }
      ]
    },
    
    metricsCharts: [
      { label: 'Kalça & Omuz Mobilitesi', beforeVal: 45, afterVal: 90, displayVal: '+22° Açıklama' },
      { label: 'Hareket Kalite Skoru (FMS)', beforeVal: 11, afterVal: 18, displayVal: '18/21 Yüksek Hizalama' },
      { label: 'Metabolik Kondisyon', beforeVal: 50, afterVal: 88, displayVal: '%40 Artış' },
      { label: 'Eklem Ağrısızlık Skoru', beforeVal: 30, afterVal: 98, displayVal: '98/100 Konfor' }
    ],
    
    scientificCitations: [
      {
        organization: 'ACSM (American College of Sports Medicine)',
        title: 'Functional Movement Screen and Injury Risk in Active Adults',
        authorsAndYear: 'Cook, G., et al. (2014)',
        keyFinding: 'Fonksiyonel hareket Asimetrilerinin düzeltilmesi sakatlık riskini %65 düşürür.',
        application: 'Antrenmanlarımızda önce hareket kalitesi, sonra yüklenme prensibi uygulanır.'
      }
    ],
    
    coachInfo: {
      name: 'Tunahan Keskin',
      title: 'Fonksiyonel Antrenman & Biyomekanik Koçu',
      philosophy: 'Vücudunuz bir bütün olarak hareket etmek için tasarlandı; onu tek tek parçalamayın.',
      degrees: [
        'Beden Eğitimi ve Spor Öğretmenliği',
        'FMS (Functional Movement Screen) Sertifikası',
        'Functional Training Specialist'
      ],
      experience: '8+ Yıl Saha ve Performans Deneyimi'
    },
    
    tools: [
      { name: 'Joint Taraması', desc: 'Mobilite ve stabilite kontrolü.', icon: '📐' },
      { name: 'FMS Analizi', desc: '7 Temel hareket kalitesi kalibrasyonu.', icon: '📊' },
      { name: 'Kondisyon Ölçer', desc: 'Metabolik kapasite testi.', icon: '⚡' },
      { name: 'Video Analiz', desc: 'Multi-planar hareket form kontrolü.', icon: '🎥' },
      { name: 'Program Rehberi', desc: 'Dinamik antrenman akış çizelgesi.', icon: '📱' },
      { name: 'WhatsApp Hattı', desc: 'Günlük aktivasyon iletişim kanalı.', icon: '💬' }
    ],
    
    ctaTitle: 'Daha Akıcı, Daha Özgür Hareket Et.',
    ctaSubtitle: '3 boyutlu fonksiyonel antrenman sistemi ile günlük yaşam kaliteni ve atletizmini zirveye taşı.'
  },

  'medical-exercise': {
    slug: 'medical-exercise',
    title: 'MEDİKAL EGZERSİZ',
    subtitle: 'Postür Analizi ve Koruyucu Biyomekanik',
    shortDesc: 'Postür analizi, koruyucu egzersizler ve hareket kalitesini geliştirmeye yönelik yüz yüze veya uzaktan takip edilen programlar.',
    badge: 'MEDİKAL EGZERSİZ & POSTÜR',
    heroImage: '/images/hero/tunahan-hero.jpg',
    
    aboutTitle: 'NASM Corrective Exercise ve Koruyucu Biyomekanik',
    aboutContent: [
      'Medikal egzersiz; tıbbi tedavi ve fizyoterapi sürecini tamamlamış bireylerin postüral duruş bozukluklarını (kifoz, lordoz, skolyoz eğilimi, boyun düzleşmesi) düzeltmek ve kronik kassal dengesizlikleri (Muscle Imbalance) ortadan kaldırmak için tasarlanmış koruyucu bir bilim dalıdır. TK Performance & Health, bu alanda Amerikan Ulusal Spor Tıbbı Akademisi (NASM CES) metodolojilerini esas alır.',
      'Modern yaşamın getirdiği uzun süreli oturma pozisyonu; kalça fleksörlerinin kısalmasına, gluteal kasların inhibe olmasına (uyumasına) ve göğüs kaslarının sıkışıp sırt kaslarının zayıflamasına yol açar. Medikal egzersiz protokollerimizde Inhibite (Gevşet) ➔ Lengthen (Uzat) ➔ Activate (Aktive Et) ➔ Integrate (Entegre Et) zinciri uygulanır.',
      'Amaç; ağrıya neden olan mekanik baskıyı ortadan kaldırmak, omurlar arasındaki disklere binen yükü hafifletmek ve bireye günlük yaşamında ağrısız, dik ve fonksiyonel bir duruş kazandırmaktır.'
    ],
    
    timeline: [
      { number: '01', title: 'Analiz', desc: 'Açılı postür fotoğraf taraması ve kinesiyoloji kontrolü.', icon: '🔍' },
      { number: '02', title: 'Hedef Belirleme', desc: 'Duruş bozukluğu derecesi ve koruyucu hedefler.', icon: '🎯' },
      { number: '03', title: 'Kişiye Özel Planlama', desc: 'NASM CES düzeltici egzersiz şablonu.', icon: '📋' },
      { number: '04', title: 'Programın Başlaması', desc: 'Gevşetme (Foam Roller) ve uzatma (Stretching) aşaması.', icon: '🚀' },
      { number: '05', title: 'Haftalık Takip', desc: 'Zayıf kas gruplarının aktivasyon takibi.', icon: '📈' },
      { number: '06', title: 'Performans Analizi', desc: 'Aylık postür açı ölçüm karşılaştırması.', icon: '📊' },
      { number: '07', title: 'Program Güncellemesi', desc: 'Fonksiyonel entegrasyon hareketlerine geçiş.', icon: '🔄' },
      { number: '08', title: 'Sürdürülebilir Gelişim', desc: 'Hizalanmış omurga ve ömür boyu ağrısız duruş.', icon: '🏆' }
    ],
    
    checklist: [
      '✓ Fiziksel Değerlendirme',
      '✓ Hedef Analizi',
      '✓ Vücut Analizi',
      '✓ Program Tasarımı',
      '✓ Egzersiz Kütüphanesi',
      '✓ Video Destekleri',
      '✓ Form Analizi',
      '✓ Haftalık Kontrol',
      '✓ Aylık Güncelleme',
      '✓ Performans Raporu',
      '✓ WhatsApp Destek',
      '✓ Beslenme Rehberi',
      '✓ Yaşam Tarzı Önerileri'
    ],
    
    targetGroups: [
      { title: 'Masa Başı Çalışanlar', desc: 'Boyun düzleşmesi, kamburluk (kifoz) veya bel gerginliği olanlar.', icon: '💻' },
      { title: 'Duruş Bozukluğu Olanlar', desc: 'Omuz simetrisi bozuk veya başı öne düşük pozisyonda olanlar.', icon: '📐' },
      { title: 'Fizyoterapi Sonrası Bireyler', desc: 'Klinik tedavisi bitip spora güvenli geçiş yapmak isteyenler.', icon: '🏥' },
      { title: 'Omurga Dekompresyonu İsteyenler', desc: 'Günlük hayatın omurgada yarattığı baskıyı hafifletmek isteyenler.', icon: '🛡️' },
      { title: 'Sakatlık Önlemek İsteyen Sporcular', desc: 'Kassal dengesizliklerini gidermek isteyen aktif bireyler.', icon: '⚡' },
      { title: 'İleri Yaş Sağlıklı Yaşam', desc: 'Eklemlerine zarar vermeden güvenle hareket etmek isteyenler.', icon: '🌱' }
    ],
    
    outcomes: [
      { title: 'Daha Güçlü Vücut', desc: 'Omurgayı destekleyen koruyucu sırt ve core kasları.', icon: '💥' },
      { title: 'Bilimsel Programlama', desc: 'NASM Corrective Exercise Continuum ilkelerine dayalı aşamalandırma.', icon: '🧬' },
      { title: 'Daha İyi Hareket Kalitesi', desc: 'Düzeltilmiş duruş açısı ve gerilimsiz rahat eklemler.', icon: '🔄' },
      { title: 'Performans Artışı', desc: 'Ağrısız hareket etmenin getirdiği yüksek yaşam kalitesi.', icon: '📈' },
      { title: 'Düzenli Takip', desc: 'Haftalık postür fotoğrafı ve hizalama kontrolü.', icon: '🛡️' },
      { title: 'Sürdürülebilir Sonuçlar', desc: 'Kalıcı ergonomi farkındalığı ve korunan hizalanma.', icon: '🏆' }
    ],
    
    pricingPlans: [
      {
        title: 'Online Medikal Egzersiz',
        subtitle: 'Uzaktan Postür & Düzeltici Takip',
        price: '2.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Kişiye Özel Postür Düzeltici Egzersiz Şablonu',
          'SMR (Gevşetme) & Germe Protokolü',
          'Haftalık Postür Fotoğraf & Form Analizi',
          'Masa Başı Ergonomi Rehberi',
          'WhatsApp İletişim Hattı'
        ]
      },
      {
        title: 'Premium Medikal Egzersiz',
        subtitle: 'Birebir Canlı Hizalama & Entegrasyon',
        price: '4.990 TL',
        period: '/ Ay',
        startingLabel: 'Başlangıç Fiyatı',
        badge: 'EN ÇOK TERCİH EDİLEN',
        isPopular: true,
        features: [
          'Online Medikal Paketindeki Tüm Özellikler',
          'Birebir Canlı Görüntülü Postür Hizalaması',
          'Kişiselleştirilmiş Omurga Dekompresyon Dersi',
          'Beslenme & Enflamasyon Azaltıcı Rehber',
          '7/24 Öncelikli Danışmanlık'
        ]
      },
      {
        title: 'Yüz Yüze Medikal Seans',
        subtitle: 'Stüdyo Birebir Biyomekanik Seans',
        price: '900 TL',
        period: "/ Seans'dan Başlayan",
        startingLabel: 'Başlangıç Fiyatı',
        features: [
          'Birebir 60 Dakika Medikal Düzeltici Seans',
          'Açılı Kinesiyolojik Postür Taraması',
          'Omurga Dekompresyon ve Traksiyon Egzersizi',
          'Kassal Dengesizlik Giderim Çalışması',
          'Aylık Postür Gelişim Raporu'
        ]
      }
    ],
    
    faqs: [
      { question: 'Program ne kadar sürüyor?', answer: 'Postüral düzeltim ve doku adaptasyonu için medikal egzersiz programlarımız 12 ila 16 hafta sürer.' },
      { question: 'Fizyoterapist tedavisi yerine geçer mi?', answer: 'Hayır. Medikal egzersiz teşhis koymaz veya tıbbi tedavi vermez; klinik tedavisi bitmiş veya koruyucu egzersiz arayan bireylere biyomekanik destek sunar.' },
      { question: 'Kamburluğum (kifoz) tamamen düzelir mi?', answer: 'Fonksiyonel (kassal) kifoz durumlarında 12 haftada çok belirgin düzelme sağlanır.' },
      { question: 'Günde kaç dakika ayırmalıyım?', answer: 'Günlük 20-30 dakikalık odaklanmış düzeltici egzersiz rutinleri mükemmel sonuç verir.' },
      { question: 'Ağrım varken egzersiz yapabilir miyim?', answer: 'Akut (şiddetli) ağrı durumunda önce hekim onayı alınmalıdır. Hafif kas gerginliklerinde ise özel koruyucu protokol uygulanır.' }
    ],
    
    clientResults: [
      {
        clientName: 'Ahmet Y.',
        age: 38,
        profession: 'Yazılım Direktörü',
        durationWeeks: 12,
        weightChange: '-3.5 kg',
        muscleChange: '+1.0 kg',
        fatChange: '-%3.5',
        waistChange: '-5 cm',
        story: 'Boyun ve omuz tutulmalarından dolayı uyuyamıyordum. Medikal egzersiz programı sayesinde duruşum düzeldi ve ağrılarım tamamen bitti.',
        badge: 'POSTÜR & AĞRISIZ YAŞAM'
      }
    ],
    
    caseStudy: {
      title: 'İleri Seviye Yuvarlanmış Omuz ve Kifoz Düzeltim Vaka Analizi',
      clientProfile: '38 Yaşında Erkek, Yazılımcı, Şiddetli Kifotik Duruş ve Omuz Ağrısı',
      problem: 'Göğüs kaslarında aşırı kısalma, alt trapez ve serratus anterior kaslarında ağır inhibisyon.',
      appliedProgram: 'NASM CES Aşamaları: Pectoralis SMR/Stretching + Lower Trap Activation + Wall Slides Entegrasyonu.',
      followUpProcess: 'Aylık dijital gonyometre ve açılı postür fotoğraf kontrolü.',
      resultsSummary: 'Omuzlar 3.8 cm geriye kayarak hizanıza oturdu. Günlük boyun tutulmaları %100 sonlandı.',
      metrics: [
        { label: 'Kifoz Açı Sapması', before: '48°', after: '26°', improvement: '-22°' },
        { label: 'Omuz İleri Sapma Mesafesi', before: '6.5 cm', after: '1.8 cm', improvement: '-4.7 cm' },
        { label: 'Günlük Ağrı Skoru (VAS 0-10)', before: '7/10', after: '0/10', improvement: 'Tam İyileşme' }
      ]
    },
    
    metricsCharts: [
      { label: 'Postür Hizalama Skoru', beforeVal: 40, afterVal: 95, displayVal: '95/100 Mükemmel Duruş' },
      { label: 'Ağrı Düşüş Oranı (VAS)', beforeVal: 90, afterVal: 0, displayVal: '7/10 ➔ 0/10 Sıfır Ağrı' },
      { label: 'Omurga Dekompresyonu', beforeVal: 35, afterVal: 92, displayVal: '%85 Rahatlama' },
      { label: 'Kas Denge Skoru', beforeVal: 45, afterVal: 96, displayVal: '96/100 İdeal Simetri' }
    ],
    
    scientificCitations: [
      {
        organization: 'NASM (National Academy of Sports Medicine)',
        title: 'Corrective Exercise Training for Forward Head Posture and Round Shoulders',
        authorsAndYear: 'Clark, M. A., & Lucett, S. C. (2014)',
        keyFinding: 'Inhibite ➔ Lengthen ➔ Activate ➔ Integrate sıralaması duruş bozukluklarında %90 başarı sağlar.',
        application: 'Medikal egzersiz şablonlarımız tam bu 4 aşamalı bilimsel düzeltme zincirini uygular.'
      }
    ],
    
    coachInfo: {
      name: 'Tunahan Keskin',
      title: 'Medikal Egzersiz Uzmanı & Spor Bilimci',
      philosophy: 'Hizalanmamış bir bedene yük bindirmek sakatlığa davetiyedir; önce omurgayı hizalayın.',
      degrees: [
        'Beden Eğitimi ve Spor Öğretmenliği',
        'Spor Yöneticiliği Yüksek Lisans',
        'NASM Corrective Exercise Specialist (CES)',
        'Postüral Kinesiyoloji Uzmanı'
      ],
      experience: 'Yüzlerce Başarılı Medikal Duruş Dönüşümü'
    },
    
    tools: [
      { name: 'Postür Taraması', desc: 'Açılı dijital duruş analizi.', icon: '📐' },
      { name: 'Gonyometre Ölçümü', desc: 'Eklem açı sapma tespiti.', icon: '📊' },
      { name: 'SMR Rehberi', desc: 'Köpük rulo ile doku gevşetme.', icon: '🌀' },
      { name: 'Ergonomi Kartı', desc: 'Masa başı duruş kuralları.', icon: '💻' },
      { name: 'Fotoğraf Takibi', desc: 'Haftalık hizalanma kontrolü.', icon: '📷' },
      { name: 'WhatsApp Platform', desc: 'Anlık duruş danışma hattı.', icon: '💬' }
    ],
    
    ctaTitle: 'Ağrısız, Dik ve Hizalanmış Bir Duruş.',
    ctaSubtitle: 'NASM medikal egzersiz protokolleri ile omurganıza sağlığını ve konforunu yeniden kazandırın.'
  }
};
