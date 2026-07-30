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
    title: 'ONLINE FITNESS KOÇLUĞU',
    badge: 'DİJİTAL KOÇLUK',
    tagline: 'Kişiye Özel Antrenman ve Düzenli Takip',
    shortDesc: 'Hedeflerinize, antrenman geçmişinize ve ekipman durumunuza özel hazırlanan uzaktan antrenman ve takip sistemi.',
    fullDesc: 'Kişinin mevcut seviyesi ve hedefleri doğrultusunda planlanan bilimsel online koçluk programı. Hacim periodizasyonu, RIR/RPE yüklenme takibi ve haftalık form kontrolleri içerir.',
    icon: '💻',
    category: 'Online Koçluk',
    isCoreHomeService: true,
    tags: ['Online Eğitim', 'Kişiye Özel Program', 'Düzenli Takip'],
    features: [
      'Kişiselleştirilmiş Antrenman Planlaması',
      'Haftalık Form Kontrolü & Geri Bildirim',
      'RIR/RPE Yüklenme ve İlerleme Takibi',
      'Düzenli İletişim Destek Hattı'
    ],
    targetAudience: [
      'Uzaktan profesyonel antrenman takibi almak isteyenler',
      'Sürdürülebilir antrenman alışkanlığı kazanmayı hedefleyenler',
      'Kendi seviyesine uygun bilimsel program arayanlar'
    ],
    methodology: [
      'Kademeli Yüklenme (Progressive Overload)',
      'Veriye Dayalı RIR/RPE Yük Takibi',
      'Düzenli Hareket Formu Analizi'
    ]
  },
  {
    id: 'one-on-one-fitness',
    slug: 'one-on-one-fitness',
    title: 'BİRE BİR FİTNESS ANTRENMANLARI',
    badge: 'PERSONAL TRAINING',
    tagline: 'Birebir Odaklı Yüz Yüze Seanslar',
    shortDesc: 'Trabzon\'da stüdyo ortamında birebir eğitmen rehberliğinde gerçekleştirilen antrenman seansları.',
    fullDesc: 'Bireyin hareket kapasitesine uygun olarak planlanan, birebir teknik takibin ve biyomekanik hizalamanın yapıldığı yüz yüze antrenman seansları.',
    icon: '🏋️‍♂️',
    category: 'Yüz Yüze Eğitim',
    isCoreHomeService: true,
    tags: ['Yüz Yüze PT', 'Birebir Takip', 'Teknik Düzeltim'],
    features: [
      'Birebir Eğitmen Eşliğinde Antrenman',
      'Anlık Hareket Tekniği Geri Bildirimi',
      'Kişiye Özel Yük Kalibrasyonu',
      'Stüdyo Ortamında Güvenli Seanslar'
    ],
    targetAudience: [
      'Doğrudan yüz yüze eğitmen takibi isteyenler',
      'Egzersiz tekniklerini doğru öğrenmeyi hedefleyenler',
      'Birebir motivasyon ve disiplin arayanlar'
    ],
    methodology: [
      'Biyomekanik Hizalama ve Form Kontrolü',
      'Kişiye Özel Seans Şiddeti Ayarı',
      'Güvenli İlerleme Prensipleri'
    ]
  },
  {
    id: 'athletic-performance',
    slug: 'athletic-performance',
    title: 'ATLETİK PERFORMANS',
    badge: 'PERFORMANS',
    tagline: 'Hız, Patlayıcı Güç ve Branşa Özel Gelişim',
    shortDesc: 'Hız, kuvvet, çeviklik ve branşa özel performans gelişimi için hazırlanan antrenman programları.',
    fullDesc: 'Sporcular ve branşına özel performansını geliştirmek isteyen bireyler için patlayıcı güç, çeviklik ve atletik altyapıyı destekleyen antrenman planlamaları.',
    icon: '⚡',
    category: 'Atletik Performans',
    isCoreHomeService: true,
    tags: ['Atletik Gelişim', 'Hız & Çeviklik', 'Branşa Özel'],
    features: [
      'Patlayıcı Güç ve Çeviklik Çalışmaları',
      'Kuvvet-Hız Dengesi Analizi',
      'Saha İçi Hareket Kapasitesi Gelişimi',
      'Sürdürülebilir Atletik Altyapı'
    ],
    targetAudience: [
      'Sporcular ve atletik kapasitesini artırmak isteyenler',
      'Hız, sıçrama ve çeviklik hedefleyenler',
      'Branşına özel fiziksel altyapı inşa etmek isteyenler'
    ],
    methodology: [
      'Kuvvet-Hız Eğrisi Prensipleri',
      'Nöromüsküler Adaptasyon',
      'Plyometrik Egzersiz Protokolleri'
    ]
  },
  {
    id: 'posture-mobility',
    slug: 'posture-mobility',
    title: 'POSTÜR, MOBİLİTE & HAREKET EĞİTİMİ',
    badge: 'HAREKET KALİTESİ',
    tagline: 'Postür Farkındalığı ve Mobilite Gelişimi',
    shortDesc: 'Hareket kalitesini, mobiliteyi ve temel postür farkındalığını destekleyen kişiye özel egzersiz çalışmaları.',
    fullDesc: 'Hareket kalitesini, mobiliteyi ve temel postür farkındalığını destekleyen kişiye özel egzersiz çalışmaları. Bu hizmet tıbbi tanı veya tedavi yerine geçmez. Ağrı veya sağlık problemi durumunda hekim veya fizyoterapist yönlendirmesi yapılır.',
    icon: '🧘‍♂️',
    category: 'Hareket Kalitesi',
    isCoreHomeService: true,
    disclaimer: 'Sunulan egzersiz hizmetleri tıbbi tanı veya tedavi yerine geçmez. Ağrı veya sağlık problemi bulunan bireylerin öncelikle hekim veya fizyoterapiste danışması önerilir.',
    tags: ['Mobilite', 'Postür Farkındalığı', 'Hareket Kalitesi'],
    features: [
      'Eklem Mobilitesi ve Esneklik Çalışmaları',
      'Postüral Hizalama Farkındalığı',
      'Günlük Yaşam Hareket Konforunu Destekleme',
      'Kişiye Özel Mobilite Protokolü'
    ],
    targetAudience: [
      'Masa başı çalışanlar ve hareket kısıtlılığı hissedenler',
      'Mobilite ve duruş farkındalığını artırmak isteyenler',
      'Günlük hayatta daha konforlu hareket etmeyi hedefleyenler'
    ],
    methodology: [
      'Eklem Odaklı Mobilite Yöntemleri',
      'Postüral Hareket Farkındalığı',
      'Koruyucu Egzersiz Prensipleri'
    ]
  },
  {
    id: 'performance-testing',
    slug: 'performance-testing',
    title: 'SPORCU PERFORMANS TESTLERİ',
    badge: 'TEST & ANALİZ',
    tagline: 'Fiziksel Kapasite ve Profil Ölçümü',
    shortDesc: 'Mobilite, kuvvet, dayanıklılık ve hareket profili ölçümüne yönelik temel performans değerlendirmeleri.',
    fullDesc: 'Bireyin mevcut fiziksel kapasitesini ve hareket profilini objektif değerlendirmelerle ortaya koyan performans profilleme çalışmaları.',
    icon: '📊',
    category: 'Test & Analiz',
    isCoreHomeService: true,
    tags: ['Performans Testi', 'Kuvvet Ölçümü', 'Hareket Taraması'],
    features: [
      'Hareket Kalitesi Değerlendirmesi',
      'Kuvvet ve Dayanıklılık Profilleme',
      'Kişisel Gelişim Verisi Oluşturma'
    ],
    targetAudience: [
      'Mevcut fiziksel seviyesini ölçtürmek isteyenler',
      'Gelişimini objektif verilerle takip etmeyi hedefleyenler'
    ],
    methodology: [
      'Standart Hareket Taramaları',
      'Performans Ölçüm Yöntemleri'
    ]
  },
  {
    id: 'nutrition-coaching',
    slug: 'nutrition-coaching',
    title: 'BESLENME DANIŞMANLIĞI',
    badge: 'BESLENME',
    tagline: 'Sürdürülebilir Beslenme Alışkanlıkları',
    shortDesc: 'Antrenman sürecini destekleyen kişiye özel beslenme farkındalığı ve günlük enerji dengesi danışmanlığı.',
    fullDesc: 'Antrenman hedeflerinizle uyumlu, sürdürülebilir beslenme farkındalığı kazandırmayı amaçlayan danışmanlık hizmeti. Özel diyet ve sağlık durumlarında yetkili diyetisyen iş birliği ile yürütülür.',
    icon: '🥗',
    category: 'Beslenme Danışmanlığı',
    isCoreHomeService: true,
    disclaimer: 'Beslenme danışmanlığı hizmeti genel bilgilendirme ve farkındalık amaçlıdır. Tıbbi beslenme tedavileri yetkili diyetisyenler tarafından yürütülür.',
    tags: ['Beslenme Farkındalığı', 'Makro Dengesi', 'Düzenli Takip'],
    features: [
      'Günlük Enerji Dengesi Hesaplaması',
      'Antrenman Destekli Beslenme Zamanlaması',
      'Sürdürülebilir Alışkanlık Rehberliği'
    ],
    targetAudience: [
      'Antrenmanlarını doğru beslenme ile desteklemek isteyenler',
      'Dengeli beslenme alışkanlığı edinmeyi hedefleyenler'
    ],
    methodology: [
      'Enerji Dengesi Prensipleri',
      'Bireysel Beslenme Farkındalığı'
    ]
  }
];
