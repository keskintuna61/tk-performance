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
  subtitle: 'Bilimsel yaklaşım, kişiye özel planlama ve sürdürülebilir gelişim.',
  coachName: 'Tunahan Keskin',
  coachRole: 'Fitness Antrenörü | Beden Eğitimi ve Spor Öğretmeni',
  bioParagraphs: [
    'Spor bilimi temelli yaklaşımı kişiye özel antrenman planlamasıyla birleştirerek, danışanların hedeflerine güvenli, düzenli ve sürdürülebilir biçimde ulaşmasını amaçlıyorum.',
    'Her programı kişinin mevcut seviyesi, yaşam düzeni, hareket kapasitesi ve hedefleri doğrultusunda planlıyorum. Süreç boyunca yalnızca antrenman programı sunmakla kalmıyor; hareket tekniği, gelişim takibi, program güncellemeleri ve eğitim desteğiyle bütüncül bir sistem oluşturuyorum.',
    'Amacım kısa süreli ve geçici sonuçlar değil, kişinin hayatına uyum sağlayan, ölçülebilir ve sürdürülebilir bir gelişim süreci oluşturmaktır.'
  ],
  expertiseAreas: [
    { title: 'Fitness ve Vücut Dönüşümü', icon: '🏋️‍♂️' },
    { title: 'Atletik Performans', icon: '⚡' },
    { title: 'Fonksiyonel Antrenman', icon: '🔄' },
    { title: 'Hareket Analizi', icon: '📐' },
    { title: 'Postür ve Mobilite', icon: '🧘‍♂️' },
    { title: 'Online Eğitim ve Takip', icon: '📱' }
  ],
  qualifications: [
    { title: '2. Kademe Fitness Antrenörlüğü', badge: 'TVGFBF SERTİFİKALI' },
    { title: '1. Kademe Basketbol Antrenörlüğü', badge: 'TBF LİSANSLI' },
    { title: 'Beden Eğitimi ve Spor Öğretmenliği', badge: 'LİSANS MEZUNU' },
    { title: 'Spor Yöneticiliği Yüksek Lisans', badge: 'YÜKSEK LİSANS' },
    { title: 'Atletik Performans Antrenörlüğü Deneyimi', badge: '8+ YIL SAHA DENEYİMİ' }
  ],
  approachSteps: [
    {
      stepNumber: '01',
      title: 'Analiz',
      desc: 'Her danışanın başlangıç seviyesi, hedefleri ve ihtiyaçları değerlendirilir.',
      icon: '🔍'
    },
    {
      stepNumber: '02',
      title: 'Planlama',
      desc: 'Kişiye özel, uygulanabilir ve sürdürülebilir bir program hazırlanır.',
      icon: '📋'
    },
    {
      stepNumber: '03',
      title: 'Takip',
      desc: 'Gelişim düzenli olarak ölçülür ve program ihtiyaçlara göre güncellenir.',
      icon: '📈'
    }
  ],
  ctaTitle: 'Hedeflerine Bilinçli Bir Sistemle Ulaş.',
  ctaSubtitle: 'Kişiye özel planlanan, düzenli takip edilen ve bilimsel temellere dayanan bir gelişim sürecine başla.'
};
