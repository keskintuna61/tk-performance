export interface TransformationItem {
  id: string;
  clientCode: string; // e.g. "Danışan #01"
  realNameSample?: string;
  duration: string;   // e.g. "12 Hafta"
  target: string;     // e.g. "Kas Hipertrofisi & Yağ Yakımı"
  badge: string;      // e.g. "12 HAFTALIK DÖNÜŞÜM"
  imageBefore: string;
  imageAfter: string;
  stats: {
    muscleMass: string;  // e.g. "+4.8 kg"
    fatPercentage: string; // e.g. "-%7"
    weightRange: string; // e.g. "82 → 79 kg"
    waistChange?: string; // e.g. "-10 cm"
  };
  details: {
    summary: string;
    programApplied: string;
    followUpSystem: string;
    evaluation: string;
    keyMilestones: string[];
  };
}

export const transformationsData: TransformationItem[] = [
  {
    id: 'transformation-01',
    clientCode: 'Danışan #01',
    realNameSample: 'Masa Başı Çalışan / 32 Yaş',
    duration: '12 Hafta',
    target: 'Kas Hipertrofisi & Bel İncelmesi',
    badge: '12 HAFTALIK HİPERTROFİ',
    imageBefore: '/images/hero/tunahan-hero.jpg',
    imageAfter: '/images/hero/tunahan-hero.jpg',
    stats: {
      muscleMass: '+4.8 kg',
      fatPercentage: '-%7.2',
      weightRange: '82 → 79 kg',
      waistChange: '-10 cm'
    },
    details: {
      summary: 'Masa başı çalışma düzeninden dolayı bel çevresi genişlemesi ve duruş bozukluğu yaşayan danışanımızla 12 haftalık anabolik uyarı ve postüral düzeltim süreci yürütüldü.',
      programApplied: 'Upper / Lower Split periodizasyonu, RIR 1-2 şiddet takibi ve skapular retraksiyon düzeltici egzersizleri.',
      followUpSystem: 'Haftalık 7/24 WhatsApp antrenman formu video kontrolü ve 14 günde bir antropometrik ölçüm kalibrasyonu.',
      evaluation: 'Sırt ve omuz genişliği belirgin şekilde artarken bel çevresinde 10 cm net daralma sağlandı. Tüm bel ağrıları sonlandı.',
      keyMilestones: [
        'İlk 4 Hafta: Postür düzeltimi & omurga dekompresyonu',
        '8. Hafta: Kas içi glikojen hacminde %15 artış',
        '12. Hafta: 4.8 kg net kas kütlesi kazanımı'
      ]
    }
  },
  {
    id: 'transformation-02',
    clientCode: 'Danışan #02',
    realNameSample: 'Yazılım Mühendisi / 28 Yaş',
    duration: '16 Hafta',
    target: 'Metabolik Yağ Yakımı & Karın Kası (Abs)',
    badge: '16 HAFTALIK METABOLİK DÖNÜŞÜM',
    imageBefore: '/images/hero/tunahan-hero.jpg',
    imageAfter: '/images/hero/tunahan-hero.jpg',
    stats: {
      muscleMass: '+2.4 kg',
      fatPercentage: '-%9.5',
      weightRange: '88 → 78.5 kg',
      waistChange: '-13 cm'
    },
    details: {
      summary: 'Yüksek vücut yağ oranına sahip danışanımızda kas kütlesini %98 oranında koruyarak metabolik yağ yakımı hedeflendi.',
      programApplied: 'Kademeli kalori açığı + Yüksek proteinli beslenme rehberi + İki yönlü hipertrofi ve HIIT kondisyon blokları.',
      followUpSystem: 'Günlük glikoz duyarlılığı ve yorgunluk takibi + Haftalık pozlama form kontrolü.',
      evaluation: 'Karın kası görünürlüğü (6-pack) elde edildi, vücut yağ oranı %21.4 seviyesinden %11.9 seviyesine düşürüldü.',
      keyMilestones: [
        'İlk 3 Hafta: İnsülin hassasiyetinin stabilize edilmesi',
        '9. Hafta: Bel çevresinde -8 cm ve yağ kaybı ivmesi',
        '16. Hafta: Atletik yarışma kondisyonuna yakın estetik duruş'
      ]
    }
  },
  {
    id: 'transformation-03',
    clientCode: 'Danışan #03',
    realNameSample: 'Profesyonel Atlet / 24 Yaş',
    duration: '8 Hafta',
    target: 'Atletik Güç, Patlayıcılık & Sıçrama',
    badge: '8 HAFTALIK VBT ATLETİZM',
    imageBefore: '/images/hero/tunahan-hero.jpg',
    imageAfter: '/images/hero/tunahan-hero.jpg',
    stats: {
      muscleMass: '+3.1 kg',
      fatPercentage: '-%2.8',
      weightRange: '74 → 76.5 kg',
      waistChange: '-3 cm'
    },
    details: {
      summary: 'Saha içi sprint kalkış hızı ve dikey sıçramasını geliştirmek isteyen branş sporcusu ile sezona hazırlık (off-season) bloğu uygulandı.',
      programApplied: 'Velocity-Based Training (VBT) bar hızı takibi + Plyometrik iniş mekanikleri + Kontrast kuvvet çalışmaları.',
      followUpSystem: 'm/s cinsinden günlük bar hızı kaydı + Jump Mat dikey sıçrama testleri.',
      evaluation: 'Dikey sıçramada +9 cm net artış, 10m sprint süresinde 0.16 saniye gelişim kaydedildi.',
      keyMilestones: [
        'İlk 2 Hafta: Eksantrik kuvvet ve doku sertliği inşası',
        '5. Hafta: Reaktif güç indeksinde (RSI) %22 artış',
        '8. Hafta: Maksimal patlayıcı güç pik noktası'
      ]
    }
  },
  {
    id: 'transformation-04',
    clientCode: 'Danışan #04',
    realNameSample: 'Mimar / 34 Yaş',
    duration: '12 Hafta',
    target: 'Postür Hizalama & Ağrısız Omurga',
    badge: '12 HAFTALIK MEDİKAL POSTÜR',
    imageBefore: '/images/hero/tunahan-hero.jpg',
    imageAfter: '/images/hero/tunahan-hero.jpg',
    stats: {
      muscleMass: '+1.9 kg',
      fatPercentage: '-%4.1',
      weightRange: '68 → 66 kg',
      waistChange: '-6 cm'
    },
    details: {
      summary: 'İleri derece boyun düzleşmesi ve kifotik duruş nedeniyle kronik sırt ağrıları çeken danışanımıza NASM medikal egzersiz protokolü uygulandı.',
      programApplied: 'Inhibite ➔ Lengthen ➔ Activate ➔ Integrate sıralaması + Reformer & Mat Pilates dekompresyonu.',
      followUpSystem: 'Gonyometre açı ölçüm takibi ve haftalık duruş fotoğrafı analizi.',
      evaluation: 'Omuzlar 4 cm geriye kayarak hizanıza oturdu, boyun ve bel ağrıları %100 sonlandı.',
      keyMilestones: [
        'İlk 4 Hafta: Göğüs kası esnekliği ve ağrısız uyku',
        '8. Hafta: Skapular stabilizatör kaslarda tam aktivasyon',
        '12. Hafta: Kusursuz dik duruş ve yüksek enerji'
      ]
    }
  },
  {
    id: 'transformation-05',
    clientCode: 'Danışan #05',
    realNameSample: 'Girişimci / 40 Yaş',
    duration: '20 Hafta',
    target: 'Temiz Hacim (Clean Bulking) & Kuvvet',
    badge: '20 HAFTALIK TEMİZ HACİM',
    imageBefore: '/images/hero/tunahan-hero.jpg',
    imageAfter: '/images/hero/tunahan-hero.jpg',
    stats: {
      muscleMass: '+6.2 kg',
      fatPercentage: '-%1.5',
      weightRange: '70 → 75.8 kg',
      waistChange: '-1 cm'
    },
    details: {
      summary: 'Kilo almakta ve kas kütlesi koymakta zorlanan danışanımızda yağlanmadan temiz kas kütlesi kazanımı sağlandı.',
      programApplied: 'Progressive Overload periodizasyonu + Günlük kalori fazlası ve anabolik besin zamanlaması.',
      followUpSystem: 'Haftalık RPE yüklenme takibi + Makro besin fotoğraf onay hattı.',
      evaluation: '20 haftada 6.2 kg net kas kütlesi eklenirken bel çevresi korunarak estetik bir v-taper fizik elde edildi.',
      keyMilestones: [
        '4. Hafta: Squat ve Deadlift kuvvetinde %25 artış',
        '12. Hafta: Omuz ve göğüs çevresinde +6 cm hacim',
        '20. Hafta: Yağlanmadan hedeflenen ideal atletik kütle'
      ]
    }
  },
  {
    id: 'transformation-06',
    clientCode: 'Danışan #06',
    realNameSample: 'Yönetici / 37 Yaş',
    duration: '12 Hafta',
    target: 'Fonksiyonel Kondisyon & Vitalite',
    badge: '12 HAFTALIK FONKSİYONEL DÖNÜŞÜM',
    imageBefore: '/images/hero/tunahan-hero.jpg',
    imageAfter: '/images/hero/tunahan-hero.jpg',
    stats: {
      muscleMass: '+3.5 kg',
      fatPercentage: '-%6.0',
      weightRange: '85 → 81 kg',
      waistChange: '-8 cm'
    },
    details: {
      summary: 'Yoğun iş temposunda enerjisi düşen ve eklem sertliği yaşayan danışanımızda 3 boyutlu fonksiyonel antrenman uygulandı.',
      programApplied: 'Joint-by-Joint mobilite protokolleri + Kettlebell & TRX çoklu eklem egzersizleri.',
      followUpSystem: 'Haftalık vitalite skoru ve mobilite açı takibi.',
      evaluation: 'Günlük hayat kalitesi tepe noktaya çıktı, vücut kompozisyonu tamamen atletikleşti.',
      keyMilestones: [
        'İlk 3 Hafta: Kalça ve torakal omurga mobilitesinin açılması',
        '7. Hafta: Gün içi yorgunluk hissinin ortadan kalkması',
        '12. Hafta: Yüksek kondisyon ve fonksiyonel beden'
      ]
    }
  }
];

export const transformationStats = [
  { value: '500+', label: 'Tamamlanan Program', icon: '🏆' },
  { value: '95%', label: 'Danışan Memnuniyeti', icon: '⭐' },
  { value: '1000+', label: 'Takip Edilen Antrenman', icon: '📈' },
  { value: '5★', label: 'Ortalama Değerlendirme', icon: '🥇' }
];
