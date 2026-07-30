export interface AcademyCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface AcademyArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  author: string;
  publishDate: string;
  slug: string;
}

export interface HealthCalculator {
  id: string;
  title: string;
  desc: string;
  icon: string;
  type: string;
}

export const academyCategories: AcademyCategory[] = [
  { id: 'egzersiz-bilimleri', name: 'Egzersiz Bilimleri', description: 'Hipertrofi, kinesiyoloji ve insan fizyolojisine dair bilimsel makaleler.', icon: '🔬' },
  { id: 'antrenman-rehberleri', name: 'Antrenman Rehberleri', description: 'Nizami hareket formları, RIR/RPE yük takibi ve periodizasyon kılavuzları.', icon: '📖' },
  { id: 'beslenme', name: 'Beslenme', description: 'Metabolizma, makro zamanlaması ve beslenme diyetetiği prensipleri.', icon: '🥗' },
  { id: 'supplement-rehberi', name: 'Supplement Rehberi', description: 'Kanıta dayalı besin takviyesi kullanımı ve ergojenik destekler.', icon: '💊' },
  { id: 'sporcu-sagligi', name: 'Sporcu Sağlığı', description: 'Koruyucu sağlık, toparlanma (recovery) ve rejenerasyon protokolleri.', icon: '🏥' },
  { id: 'pilates', name: 'Pilates', description: 'Omurga hizalaması, core stabilitesi ve pilates prensipleri.', icon: '🧘‍♀️' },
  { id: 'atletik-performans', name: 'Atletik Performans', description: 'Patlayıcı güç, dikey sıçrama, VBT ve branşa özel kondisyonerlik.', icon: '⚡' },
  { id: 'medikal-egzersiz', name: 'Medikal Egzersiz', description: 'Postür analizi, duruş bozuklukları ve dekompresyon egzersizleri.', icon: '🩹' },
  { id: 'hareket-analizi', name: 'Hareket Analizi', description: 'Biyomekanik açı analizleri, eklem mobilitesi ve kinesiyoloji.', icon: '📐' },
  { id: 'video-egitimleri', name: 'Video Eğitimleri', description: 'Teknik dersler, hareket form incelemeleri ve eğitim seminerleri.', icon: '🎥' },
  { id: 'hesaplayicilar', name: 'Hesaplayıcılar', description: 'BMR, TDEE, 1RM, Maksimal Nabız ve Yağ Oranı hesaplama araçları.', icon: '🧮' },
  { id: 'sik-sorulan-sorular', name: 'Sık Sorulan Sorular', description: 'Performans, beslenme ve online koçluk hakkında merak edilenler.', icon: '❓' }
];

export const academyArticles: AcademyArticle[] = [];

export const academyCalculators: HealthCalculator[] = [
  {
    id: 'bmr-tdee',
    title: 'BMR & TDEE Kalori Hesaplayıcı',
    desc: 'Günlük bazal metabolizma hızınızı ve toplam enerji harcamanızı hassas olarak hesaplayın.',
    icon: '🔥',
    type: 'bmr'
  },
  {
    id: '1rm-calculator',
    title: '1RM Maksimal Kuvvet Testi',
    desc: 'Tek tekrarda kaldırabileceğiniz maksimum ağırlığı ve antrenman yüzdelerinizi belirleyin.',
    icon: '🏋️‍♂️',
    type: '1rm'
  },
  {
    id: 'target-heart-rate',
    title: 'Hedef Nabız Bölgesi (Max HR)',
    desc: 'Kardiyo ve laktat toleransı için bireysel nabız bölgelerinizi (Zone 1-5) hesaplayın.',
    icon: '❤️',
    type: 'hr'
  },
  {
    id: 'body-fat-percentage',
    title: 'Vücut Yağ Oranı Hesaplayıcı',
    desc: 'Antropometrik ölçümlerinizle tahmini vücut yağ yüzdesi ve yağsız kas kütlenizi görün.',
    icon: '📊',
    type: 'fat'
  }
];
