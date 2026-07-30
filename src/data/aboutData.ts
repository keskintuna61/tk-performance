export interface ExpertiseCard {
  title: string;
  icon: string;
}

export interface QualificationItem {
  title: string;
  badge: string;
}

export interface ApproachStep {
  stepNumber: string;
  title: string;
  desc: string;
  icon: string;
}

export interface AboutData {
  titleTag: string;
  subtitle: string;
  coachName: string;
  coachRole: string;
  bioParagraphs: string[];
  expertiseAreas: ExpertiseCard[];
  qualifications: QualificationItem[];
  approachSteps: ApproachStep[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export const aboutData: AboutData = {
  titleTag: 'HAKKIMDA',
  subtitle: 'Bilimsel temelli yaklaşım, kişiye özel planlama ve sürdürülebilir gelişim.',
  coachName: 'Tunahan Keskin',
  coachRole: 'Spor Yöneticisi | Beden Eğitimi ve Spor Öğretmeni | 2. Kademe Fitness Antrenörü',
  bioParagraphs: [
    'Bilimsel temelli antrenman yaklaşımıyla bireylerin fiziksel performansını, hareket kalitesini ve sürdürülebilir gelişimini destekleyen kişiye özel programlar hazırlıyorum.',
    'Fitness, atletik performans ve temel motor beceriler alanlarında farklı yaş ve performans gruplarıyla çalışıyorum. Her programı kişinin mevcut seviyesi, yaşam düzeni, hareket kapasitesi ve hedefleri doğrultusunda planlıyorum.',
    'Süreç boyunca yalnızca antrenman programı sunmakla kalmıyor; hareket tekniği, gelişim takibi, program güncellemeleri ve eğitim desteğiyle bütüncül bir sistem oluşturuyorum.'
  ],
  expertiseAreas: [
    { title: 'Online Fitness Koçluğu', icon: '💻' },
    { title: 'Bire Bir Fitness Antrenmanları', icon: '🏋️‍♂️' },
    { title: 'Atletik Performans', icon: '⚡' },
    { title: 'Mobilite & Hareket Kalitesi', icon: '🧘‍♂️' },
    { title: 'Sporcu Performans Testleri', icon: '📊' },
    { title: 'Beslenme Danışmanlığı', icon: '🥗' }
  ],
  qualifications: [
    { title: 'Spor Yöneticiliği Lisans Mezunu', badge: 'LİSANS DİPLOMASI' },
    { title: 'Pedagojik Formasyon Eğitimi', badge: 'FORMASYON BELGESİ' },
    { title: 'Spor Yöneticiliği Yüksek Lisans Programı (Devam Ediyor)', badge: 'DEVAM EDİYOR' },
    { title: '2. Kademe Fitness Antrenörlük Belgesi', badge: 'TVGFBF SERTİFİKALI' },
    { title: '1. Kademe Basketbol Antrenörlük Belgesi', badge: 'TBF LİSANSLI' },
    { title: '1. Kademe Floor Curling Antrenörlük Belgesi', badge: 'FEDERASYON LİSANSLI' },
    { title: 'Atletik performans ve fitness antrenörlüğü deneyimi', badge: 'DENEYİM' }
  ],
  approachSteps: [
    {
      stepNumber: '01',
      title: 'Analiz & Değerlendirme',
      desc: 'Başlangıç seviyesi, hareket kapasitesi, geçmiş antrenman deneyimi ve hedefler değerlendirilir.',
      icon: '🔍'
    },
    {
      stepNumber: '02',
      title: 'Kişiye Özel Planlama',
      desc: 'Bireyin yaşam düzenine ve hedeflerine uygun, sürdürülebilir antrenman programı tasarlanır.',
      icon: '📋'
    },
    {
      stepNumber: '03',
      title: 'Düzenli Takip & Güncelleme',
      desc: 'Gelişim düzenli olarak ölçülür, form geri bildirimleri verilir ve program ihtiyaçlara göre güncellenir.',
      icon: '📈'
    }
  ],
  ctaTitle: 'Hedeflerine Bilinçli Bir Sistemle Ulaş.',
  ctaSubtitle: 'Kişiye özel planlanan, düzenli takip edilen ve bilimsel temellere dayanan bir gelişim sürecine başla.'
};
