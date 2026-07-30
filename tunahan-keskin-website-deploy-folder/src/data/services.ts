export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  category: string;
  tags: string[];
  disclaimer?: string;
  features: string[];
  targetAudience: string[];
  methodology: string[];
  isCoreHomeService?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'fitness-body-transformation',
    slug: 'fitness-body-transformation',
    title: 'FITNESS & VÜCUT DÖNÜŞÜMÜ',
    badge: 'DÖNÜŞÜM',
    tagline: 'Kas Geliştirme, Yağ Yakımı ve Vücut Şekillendirme',
    shortDesc: 'Kas geliştirme, yağ yakımı ve vücut şekillendirmeye yönelik kişiye özel yüz yüze veya online antrenman programları.',
    fullDesc: 'Kişinin anatomik yapısı, metabolik hızı ve yaşam tarzı analiz edilerek hazırlanan bilimsel fitness ve vücut dönüşümü programı. Hipertrofi periodizasyonu, RIR/RPE yük takibi ve vücut kompozisyonu optimizasyonu içerir.',
    icon: '🏋️‍♂️',
    category: 'Vücut Dönüşümü',
    isCoreHomeService: true,
    tags: ['Online Eğitim', 'Yüz Yüze Eğitim', 'Kişiye Özel Program', 'Düzenli Takip'],
    features: [
      'Kişiselleştirilmiş Hipertrofi & Yağ Yakımı Protokolü',
      'Yüz Yüze veya Online Takip Seçeneği',
      'Haftalık Vücut Ölçümü & Video Form Analizi',
      '7/24 Kesintisiz Koçluk İletişimi'
    ],
    targetAudience: [
      'Kas kütlesini artırmak isteyenler',
      'Vücut yağ oranını sağlıklı şekilde düşürmek isteyenler',
      'Estetik ve atletik bir fizik hedefleyenler'
    ],
    methodology: [
      'Progressive Overload (Kademeli Yüklenme)',
      'Mekanik Gerilim ve Kas Hasarı Dengesi',
      'Veriye Dayalı RIR/RPE Takibi'
    ]
  },
  {
    id: 'nutrition-dietetics',
    slug: 'nutrition-dietetics',
    title: 'BESLENME & DİYETİSYEN',
    badge: 'DİYETETİK',
    tagline: 'Kişiye Özel Beslenme ve Sporcu Diyetetiği',
    shortDesc: 'Kişiye özel beslenme planları, sporcu beslenmesi ve online beslenme danışmanlığı.',
    fullDesc: 'Metabolik ihtiyaçlarınıza, makro-mikro besin dengenize ve antrenman şiddetinize göre planlanan beslenme protokolü. Sporcu performansını artırırken sürdürülebilir beslenme alışkanlıkları kazandırır.',
    icon: '🥗',
    category: 'Beslenme',
    isCoreHomeService: true,
    disclaimer: 'Beslenme hizmetleri yetkin diyetisyen ve beslenme uzmanları iş birliğiyle sunulmaktadır.',
    tags: ['Online Eğitim', 'Yüz Yüze Eğitim', 'Kişiye Özel Program', 'Düzenli Takip'],
    features: [
      'Metabolik Hız ve TDEE Kalibrasyonu',
      'Antrenman Öncesi & Sonrası Beslenme Zamanlaması',
      'Sporcu Suplement & Takviye Rehberliği',
      'Haftalık Beslenme Güncellemesi'
    ],
    targetAudience: [
      'Performansını beslenme ile desteklemek isteyen sporcular',
      'Kilo vermek veya kilo almak isteyen bireyler',
      'Sağlıklı beslenmeyi yaşam tarzı haline getirmek isteyenler'
    ],
    methodology: [
      'Makro & Mikro Besin Dengesi',
      'Glisemik İndeks ve İnsülin Hassasiyeti Analizi',
      'Biyo-bireysellik Prensibi'
    ]
  },
  {
    id: 'athletic-performance',
    slug: 'athletic-performance',
    title: 'ATLETİK PERFORMANS',
    badge: 'ATLETİK',
    tagline: 'Hız, Patlayıcı Güç ve Branşa Özel Gelişim',
    shortDesc: 'Hız, kuvvet, çeviklik ve branşa özel performans gelişimi için yüz yüze veya online eğitim programları.',
    fullDesc: 'Futbol, basketbol, tenis, dövüş sporları ve bireysel branş sporcuları için Velocity-Based Training (VBT), patlayıcı güç, dikey sıçrama ve laktat toleransı geliştiren atletik performans programı.',
    icon: '⚡',
    category: 'Atletik Performans',
    isCoreHomeService: true,
    tags: ['Online Eğitim', 'Yüz Yüze Eğitim', 'Kişiye Özel Program', 'Düzenli Takip'],
    features: [
      'VBT (Velocity-Based Training) Yük Takibi',
      'Dikey Sıçrama & Çeviklik Gelişimi',
      'Sakatlık Önleyici Nöromüsküler Çalışmalar',
      'Branşa Özel Kondisyon & Kuvvet Profilleme'
    ],
    targetAudience: [
      'Profosyonel ve amatör sporcular',
      'Saha içi patlayıcı gücünü ve hızını artırmak isteyenler',
      'Sakatlık sonrası sahaya güvenle dönmek isteyenler (Return to Sport)'
    ],
    methodology: [
      'Kuvvet-Hız Eğrisi (Force-Velocity Curve)',
      'Plyometrik ve Eksantrik Aşırı Yükleme',
      'Nöromüsküler Adaptasyon'
    ]
  },
  {
    id: 'pilates',
    slug: 'pilates',
    title: 'MAT & REFORMER PİLATES',
    badge: 'PİLATES',
    tagline: 'Core Kuvveti, Omurga Sağlığı ve Denge',
    shortDesc: 'Core kuvveti, esneklik, denge ve postür gelişimine yönelik yüz yüze veya online pilates eğitimleri.',
    fullDesc: 'Mat Pilates ve Reformer Pilates prensipleriyle derin core kaslarının aktivasyonu, omurga mobilizasyonu ve postüral hiza kazanımı sağlayan bütüncül hareket eğitimi.',
    icon: '🧘‍♀️',
    category: 'Pilates',
    isCoreHomeService: true,
    tags: ['Online Eğitim', 'Yüz Yüze Eğitim', 'Kişiye Özel Program', 'Düzenli Takip'],
    features: [
      'Mat ve Reformer Pilates Odaklı Müfredat',
      'Derin Core Stabilitesi & Pelvik Taban Çalışmaları',
      'Omurga Hizalama & Esneklik Gelişimi',
      'Nefes ve Hareket Senkronizasyonu'
    ],
    targetAudience: [
      'Core bölgesini güçlendirmek isteyenler',
      'Duruşunu düzeltmek ve omurga sağlığını korumak isteyenler',
      'Esneklik ve vücut farkındalığını artırmak isteyenler'
    ],
    methodology: [
      'Pilates Temel Prensipleri (Nefes, Kontrol, Merkezlenme)',
      'Kinesiyolojik Hareket Analizi',
      'Postüral Koruma'
    ]
  },
  {
    id: 'functional-training',
    slug: 'functional-training',
    title: 'FONKSİYONEL ANTRENMAN',
    badge: 'FONKSİYONEL',
    tagline: 'Mobilite, Hareket Kalitesi ve Günlük Performans',
    shortDesc: 'Mobilite, stabilite, hareket kalitesi ve günlük yaşam performansını geliştiren online veya yüz yüze antrenman programları.',
    fullDesc: 'İnsan vücudunun doğal 3 boyutlu hareket düzlemlerine (sagittal, frontal, transversal) uygun olarak tasarlanan; eklem mobilitesi, stabilite ve günlük yaşam kalitesini artıran fonksiyonel antrenman sistemi.',
    icon: '🔄',
    category: 'Fonksiyonel Antrenman',
    isCoreHomeService: true,
    tags: ['Online Eğitim', 'Yüz Yüze Eğitim', 'Kişiye Özel Program', 'Düzenli Takip'],
    features: [
      '3 Boyutlu Hareket Kalitesi (Movement Quality)',
      'Eklem Mobilitesi & Dinamik Denge',
      'Fonksiyonel Core & Bağ Bağ doku Güçlendirme',
      'Günlük Yaşam Kinesiyolojisi'
    ],
    targetAudience: [
      'Günlük hayatta daha dinç ve ağrısız hareket etmek isteyenler',
      'Eklem açıklığını ve hareket kalitesini artırmak isteyenler',
      'Çok yönlü kondisyon kazanmak isteyenler'
    ],
    methodology: [
      'Multi-planar Movement Patterns',
      'Joint-by-Joint Approach (Joint Mobilite/Stabilite)',
      'Fascial Net Aktivasyonu'
    ]
  },
  {
    id: 'medical-exercise',
    slug: 'medical-exercise',
    title: 'MEDİKAL EGZERSİZ',
    badge: 'MEDİKAL',
    tagline: 'Postür Analizi ve Koruyucu Egzersiz',
    shortDesc: 'Postür analizi, koruyucu egzersizler ve hareket kalitesini geliştirmeye yönelik yüz yüze veya uzaktan takip edilen programlar.',
    fullDesc: 'Masa başı çalışma, yanlış duruş veya kassal dengesizliklerden kaynaklanan postüral problemleri (kifoz, lordoz, skolyoz eğilimi, düzleşme) koruyucu ve düzeltici egzersiz yöntemleriyle gideren medikal yaklaşım.',
    icon: '🏥',
    category: 'Medikal Egzersiz',
    isCoreHomeService: true,
    tags: ['Online Eğitim', 'Yüz Yüze Eğitim', 'Kişiye Özel Program', 'Düzenli Takip'],
    features: [
      'Detaylı Postür & Kinesiyoloji Analizi',
      'Omurga Dekompresyonu & Düzeltici Egzersizler',
      'Kassal Dengesizlik (Muscle Imbalance) Giderimi',
      'Ağrısız Hareket Odaklı Programlama'
    ],
    targetAudience: [
      'Masa başı çalışanlar ve duruş bozukluğu olanlar',
      'Kronik bel, boyun veya omuz gerginliği yaşayanlar',
      'Koruyucu sağlık için biyomekanik egzersiz yapmak isteyenler'
    ],
    methodology: [
      'NASM Corrective Exercise Continuum (CES)',
      'Postüral Kinesiyoloji',
      'Koruyucu Sağlık Protokolü'
    ]
  },
  {
    id: 'performance-testing',
    slug: 'performance-testing',
    title: 'PERFORMANS TESTLERİ',
    badge: 'ANALİZ',
    tagline: 'FMS, Biyomekanik ve Profilleme',
    shortDesc: 'Postür analizi, FMS taraması, mobilite, kuvvet, dayanıklılık ve atletik performans profilleme testleri.',
    fullDesc: 'FMS (Functional Movement Screen), 1RM, dikey sıçrama ve biyomekanik postür analizleriyle fiziksel kapasitenizi somut verilerle ölçen profilleme sistemi.',
    icon: '📊',
    category: 'Test & Analiz',
    isCoreHomeService: false,
    tags: ['Kişiye Özel Program', 'Düzenli Takip'],
    features: ['FMS Hareket Taraması', '1RM & Kuvvet Ölçümü', 'Postür Analizi'],
    targetAudience: ['Performansını verilerle görmek isteyenler'],
    methodology: ['Functional Movement Screening', 'Force Velocity Profiling']
  },
  {
    id: 'police-military-preparation',
    slug: 'police-military-preparation',
    title: 'POLİS & ASKERİ PARKUR',
    badge: 'PARKUR',
    tagline: 'Fiziki Yeterlilik ve Laktat Toleransı',
    shortDesc: 'PMYO, POMEM, Bekçilik, MSÜ fiziki yeterlilik parkur hazırlığı ve yüksek şiddetli laktat tolerans çalışmaları.',
    fullDesc: 'PMYO, POMEM, Bekçilik ve Askeri fiziki yeterlilik parkurlarında maksimum derece elde etmeye yönelik parkur tekniği ve laktat tolerans antrenmanları.',
    icon: '🎖️',
    category: 'Parkur Hazırlığı',
    isCoreHomeService: false,
    tags: ['Yüz Yüze Eğitim', 'Kişiye Özel Program'],
    features: ['Parkur Tekniği', 'Laktat Toleransı', 'Süre Optimizasyonu'],
    targetAudience: ['Sınav parkurlarına hazırlanan adaylar'],
    methodology: ['High Intensity Interval Training', 'Parkour Biomechanics']
  },
  {
    id: 'online-coaching',
    slug: 'online-coaching',
    title: 'ONLİNE KOÇLUK SİSTEMİ',
    badge: 'DİJİTAL',
    tagline: 'Uzaktan PT ve Kesintisiz Takip',
    shortDesc: 'Uzaktan Personal Training, 7/24 whatsapp iletişimi, haftalık video form analizi ve grafiksel gelişim takibi.',
    fullDesc: 'Dünyanın neresinde olursanız olun, Spor Bilimci Tunahan Keskin ile 7/24 iletişimde kalarak hedeflerinize ulaşmanızı sağlayan dijital performans koçluğu.',
    icon: '📱',
    category: 'Dijital Koçluk',
    isCoreHomeService: false,
    tags: ['Online Eğitim', 'Düzenli Takip'],
    features: ['Video Form Analizi', '7/24 İletişim', 'Haftalık Güncelleme'],
    targetAudience: ['Uzaktan profesyonel koçluk almak isteyenler'],
    methodology: ['Digital Form Assessment', 'Remote Load Management']
  }
];
