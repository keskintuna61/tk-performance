export interface Program {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  price: number;
  oldPrice?: number;
  level: 'Başlangıç' | 'Orta' | 'İleri' | 'Tüm Seviyeler';
  durationWeeks: number;
  daysPerWeek: number;
  equipment: 'Ekipmansız' | 'Dumbbell & Band' | 'Tam Donanımlı Gym' | 'Kombine';
  goal: 'Kas Kütlesi' | 'Yağ Yakımı' | 'Güç & 1RM' | 'Atletik Performans' | 'Postür & Mobilite';
  featured?: boolean;
  image: string;
  targetAudience: string[];
  features: string[];
  sampleWorkout: {
    day: string;
    exercises: { name: string; sets: string; reps: string; rest: string }[];
  }[];
}

export const programsData: Program[] = [
  {
    id: "prog-1",
    slug: "baslangic-fitness-programi",
    name: "Başlangıç Fitness & Adaptasyon Programı",
    shortDesc: "Spora yeni başlayanlar için anatomik adaptasyon ve doğru hareket tekniği rehberi.",
    description: "Fitness yolculuğuna ilk adımı atanlar için kas-iskelet sistemini sakatlıksız bir şekilde güçlendiren, 4 haftalık temel anatomik adaptasyon programı.",
    price: 490,
    oldPrice: 750,
    level: "Başlangıç",
    durationWeeks: 4,
    daysPerWeek: 3,
    equipment: "Tam Donanımlı Gym",
    goal: "Kas Kütlesi",
    featured: true,
    image: "/images/programs/baslangic.jpg",
    targetAudience: [
      "Spora sıfırdan başlayanlar",
      "Uzun süre aradan sonra geri dönenler",
      "Doğru temel hareket formlarını öğrenmek isteyenler"
    ],
    features: [
      "Full body (bütün vücut) antrenman rutini",
      "RPE ve yüklenme ilkeleri anlatımı",
      "Kardiyo ve ısınma rehberi",
      "Mobilite ve esnetme rutinleri"
    ],
    sampleWorkout: [
      {
        day: "1. Gün: Tüm Vücut Adaptasyon",
        exercises: [
          { name: "Goblet Squat", sets: "3", reps: "10-12", rest: "90 sn" },
          { name: "Chest Press Machine", sets: "3", reps: "12", rest: "60 sn" },
          { name: "Lat Pulldown", sets: "3", reps: "12", rest: "60 sn" },
          { name: "Plank Hold", sets: "3", reps: "45 sn", rest: "45 sn" }
        ]
      }
    ]
  },
  {
    id: "prog-2",
    slug: "kas-kazanimi-hipertrofi",
    name: "8 Haftalık Kas Kazanımı & Hipertrofi",
    shortDesc: "Progressive overload ilkesiyle kas hacmini ve lif yoğunluğunu artıran yükleme sistemi.",
    description: "Mekanik gerim ve kas içi metabolik stresi maksimum seviyeye çıkaran, bilimsel periyodizasyona sahip hipertrofi programı.",
    price: 890,
    oldPrice: 1250,
    level: "Orta",
    durationWeeks: 8,
    daysPerWeek: 4,
    equipment: "Tam Donanımlı Gym",
    goal: "Kas Kütlesi",
    featured: true,
    image: "/images/programs/hipertrofi.jpg",
    targetAudience: [
      "Kas kütlesini artırmak isteyen sporcular",
      "Gelişimi duraklayan (plateau) antrenmanlı bireyler",
      "Hacim kazanmak isteyen orta seviye fitness tutkunları"
    ],
    features: [
      "Upper/Lower veya Push-Pull-Legs bölünmesi",
      "Progressive Overload hesaplama tablosu",
      "Set arası dinlenme süresi yönlendirmeleri",
      "RPE & RIR yoğunluk rehberi"
    ],
    sampleWorkout: [
      {
        day: "Üst Vücut Hipertrofi A",
        exercises: [
          { name: "Incline Dumbbell Press", sets: "4", reps: "8-10", rest: "120 sn" },
          { name: "T-Bar Row", sets: "4", reps: "8-10", rest: "120 sn" },
          { name: "Dumbbell Lateral Raise", sets: "4", reps: "12-15", rest: "60 sn" },
          { name: "Triceps Cable Pushdown", sets: "3", reps: "12", rest: "60 sn" }
        ]
      }
    ]
  },
  {
    id: "prog-3",
    slug: "yag-yakim-metabolik",
    name: "Metabolik Yağ Yakımı & Re-comp",
    shortDesc: "Kas kütlesini korurken vücut yağ oranını minimum seviyeye indiren definasyon rehberi.",
    description: "Yüksek metabolik uyarım ve kontrollü kalori açığı stratejisi ile kas kaybetmeden yağ kütlesinden kilo vermenizi sağlayan program.",
    price: 790,
    oldPrice: 1100,
    level: "Tüm Seviyeler",
    durationWeeks: 6,
    daysPerWeek: 4,
    equipment: "Tam Donanımlı Gym",
    goal: "Yağ Yakımı",
    featured: true,
    image: "/images/programs/yag-yakim.jpg",
    targetAudience: [
      "Vücut yağ oranını düşürmek isteyenler",
      "Definasyon dönemindeki sporcular",
      "Kondisyonunu artırmak isteyen bireyler"
    ],
    features: [
      "Metabolik kondisyon & süperset protokolleri",
      "Kalori açığı ve makro beslenme rehberi",
      "Nabız bölgesi tablosu ve LISS kardiyo takvimi"
    ],
    sampleWorkout: [
      {
        day: "Metabolik Devre 1",
        exercises: [
          { name: "Leg Press", sets: "4", reps: "15", rest: "45 sn" },
          { name: "Dumbbell Shoulder Press", sets: "4", reps: "12", rest: "45 sn" },
          { name: "Seated Cable Row", sets: "4", reps: "12", rest: "45 sn" }
        ]
      }
    ]
  },
  {
    id: "prog-4",
    slug: "kadinlar-icin-alt-vucut",
    name: "Kadınlar İçin Alt Vücut & Glute Odaklı Program",
    shortDesc: "Kalça ve bacak kaslarını şekillendiren, anatomik odaklı 6 haftalık antrenman planı.",
    description: "Gluteus maximus, medius ve hamstring grubunu hedefleyen, bel kalınlaşması yaratmadan sıkı ve şekilli bir alt vücut oluşturan bilimsel program.",
    price: 690,
    oldPrice: 990,
    level: "Tüm Seviyeler",
    durationWeeks: 6,
    daysPerWeek: 3,
    equipment: "Tam Donanımlı Gym",
    goal: "Kas Kütlesi",
    image: "/images/programs/glute.jpg",
    targetAudience: [
      "Kalça ve bacak gelişimine odaklanan kadınlar",
      "Postürünü düzeltip sıkılaşmak isteyenler"
    ],
    features: [
      "Hip Thrust ve Romanian Deadlift merkezli yükleme",
      "Banded aktivasyon serileri",
      "Selülit önleyici dolaşım rutini"
    ],
    sampleWorkout: [
      {
        day: "Alt Vücut & Glute A",
        exercises: [
          { name: "Barbell Hip Thrust", sets: "4", reps: "10-12", rest: "120 sn" },
          { name: "Romanian Deadlift", sets: "4", reps: "10", rest: "90 sn" },
          { name: "Cable Kickback", sets: "3", reps: "15", rest: "60 sn" }
        ]
      }
    ]
  },
  {
    id: "prog-5",
    slug: "futbolcular-icin-atletik-performans",
    name: "Futbolcular İçin Atletik Performans & Patlayıcı Güç",
    shortDesc: "Saha içi sprint, sıçrama, çeviklik ve sakatlık önleme odaklı atletik performans rehberi.",
    description: "Profesyonel ve amatör futbolcular için tasarlanmış; pleometrik çalışmalar, çabukluk drills ve koruyucu kuvvet antrenmanlarını içeren sistem.",
    price: 1190,
    oldPrice: 1600,
    level: "İleri",
    durationWeeks: 8,
    daysPerWeek: 4,
    equipment: "Kombine",
    goal: "Atletik Performans",
    featured: true,
    image: "/images/programs/futbol.jpg",
    targetAudience: [
      "Futbolcular ve salon sporcuları",
      "Sprint ve sıçrama kapasitesini artırmak isteyenler",
      "Çapraz bağ ve adduktor sakatlıklarından korunmak isteyenler"
    ],
    features: [
      "Patlayıcı güç & Pliyo egzersizleri",
      "Saha içi çeviklik (agility) drilleri",
      "Hamstring/ACL koruyucu protokoller"
    ],
    sampleWorkout: [
      {
        day: "Patlayıcı Güç & Alt Vücut",
        exercises: [
          { name: "Trap Bar Deadlift", sets: "4", reps: "5", rest: "150 sn" },
          { name: "Box Jump", sets: "4", reps: "5", rest: "90 sn" },
          { name: "Bulgarian Split Squat", sets: "3", reps: "8", rest: "90 sn" }
        ]
      }
    ]
  },
  {
    id: "prog-6",
    slug: "evde-ekipmansiz-baslangic",
    name: "Evde Ekipmansız Vücut Ağırlığı Programı",
    shortDesc: "Hiçbir ekipman gerekmeden evde formda kalmanızı sağlayan kalisteniks rehberi.",
    description: "Ev konforunda vücut ağırlığınızı kullanarak kuvvet kazandıran, duruşunuzu düzelten ve yağ yakımını destekleyen 4 haftalık program.",
    price: 390,
    oldPrice: 600,
    level: "Başlangıç",
    durationWeeks: 4,
    daysPerWeek: 3,
    equipment: "Ekipmansız",
    goal: "Yağ Yakımı",
    image: "/images/programs/evde.jpg",
    targetAudience: [
      "Spor salonuna gitme imkanı olmayanlar",
      "Evde verimli spor yapmak isteyen çalışanlar",
      "Sık seyahat eden bireyler"
    ],
    features: [
      "%100 Vücut ağırlığı hareketleri",
      "Aşamalı progresyon seçenekleri",
      "Core & mobilite rutinleri"
    ],
    sampleWorkout: [
      {
        day: "Ev Rutini 1",
        exercises: [
          { name: "Push-Up (Şınav)", sets: "4", reps: "10-15", rest: "60 sn" },
          { name: "Bodyweight Squat", sets: "4", reps: "20", rest: "60 sn" },
          { name: "Mountain Climber", sets: "3", reps: "30 sn", rest: "45 sn" }
        ]
      }
    ]
  },
  {
    id: "prog-7",
    slug: "postur-ve-mobilite-programi",
    name: "Postür Düzeltme & Eklem Mobilitesi",
    shortDesc: "Masa başı duruş bozuklukları, kamburluk ve sırt ağrıları için rehabilitatif rehber.",
    description: "Masa başı çalışanlarda sık görülen anterior pelvic tilt, kyphosis (kamburluk) ve boyun ağrılarını gideren duruş düzeltme sistemi.",
    price: 590,
    oldPrice: 850,
    level: "Tüm Seviyeler",
    durationWeeks: 6,
    daysPerWeek: 3,
    equipment: "Dumbbell & Band",
    goal: "Postür & Mobilite",
    image: "/images/programs/postur.jpg",
    targetAudience: [
      "Masa başı çalışanlar ve öğrenciler",
      "Sırt, bel ve omurga ağrısı yaşayanlar",
      "Dik duruş kazanmak isteyen herkes"
    ],
    features: [
      "Omurga dizilim rutinleri",
      "Direnç bandı ile kürek kemiği (scapular) stabilizasyonu",
      "Kalça fleksör esnetme egzersizleri"
    ],
    sampleWorkout: [
      {
        day: "Postür & Duruş Düzeltme",
        exercises: [
          { name: "Band Face Pull", sets: "4", reps: "15", rest: "45 sn" },
          { name: "Bird Dog Hold", sets: "3", reps: "10 her taraf", rest: "45 sn" },
          { name: "Thoracic Extension Mobility", sets: "3", reps: "12", rest: "45 sn" }
        ]
      }
    ]
  },
  {
    id: "prog-8",
    slug: "guc-odakli-push-pull-legs",
    name: "Güç Odaklı Push-Pull-Legs (PPL)",
    shortDesc: "1RM rekorlarını tazeleyen ve fonksiyonel kuvvet katan 6 günlük PPL sistemi.",
    description: "Fitness dünyasının en popüler ve etkili bölünmesi olan Push-Pull-Legs sistemini bilimsel güç periyodizasyonuyla birleştiren program.",
    price: 990,
    oldPrice: 1400,
    level: "İleri",
    durationWeeks: 12,
    daysPerWeek: 6,
    equipment: "Tam Donanımlı Gym",
    goal: "Güç & 1RM",
    featured: true,
    image: "/images/programs/ppl.jpg",
    targetAudience: [
      "İleri seviye sporcular",
      "Maksimum kuvvet ve kas hacmi hedefleyenler"
    ],
    features: [
      "RPE 7-9 aralığında güç blokları",
      "Compound kaldırış odaklı periyodizasyon",
      "Aşırı yıpranmayı önleyen Deload haftaları"
    ],
    sampleWorkout: [
      {
        day: "Push Güç Günü",
        exercises: [
          { name: "Flat Barbell Bench Press", sets: "5", reps: "5", rest: "180 sn" },
          { name: "Overhead Barbell Press", sets: "4", reps: "6", rest: "150 sn" },
          { name: "Incline Dumbbell Fly", sets: "3", reps: "12", rest: "90 sn" }
        ]
      }
    ]
  },
  {
    id: "prog-9",
    slug: "8-haftalik-hipertrofi-advanced",
    name: "İleri Seviye Maksimum Hipertrofi",
    shortDesc: "Drop-set, rest-pause ve yüksek yoğunluk teknikleriyle kas liflerini uyaran rehber.",
    description: "Doğal sınırlarına yaklaşan tecrübeli sporcuların kas büyümesini yeniden tetikleyen özel yoğunluk teknikleri içeren advanced program.",
    price: 1090,
    oldPrice: 1500,
    level: "İleri",
    durationWeeks: 8,
    daysPerWeek: 5,
    equipment: "Tam Donanımlı Gym",
    goal: "Kas Kütlesi",
    image: "/images/programs/advanced-hipertrofi.jpg",
    targetAudience: [
      "En az 2 yıldır düzenli spor yapanlar",
      "İleri seviye kas kütlesi hedefleyenler"
    ],
    features: [
      "Rest-pause & Myo-reps teknikleri",
      "Hacim dalgalanması (Volume Undulation)",
      "Yüksek yoğunluk takvimi"
    ],
    sampleWorkout: [
      {
        day: "Göğüs & Biceps İleri Seviye",
        exercises: [
          { name: "Incline Barbell Bench Press", sets: "4", reps: "6-8", rest: "120 sn" },
          { name: "Cable Chest Fly (Rest-Pause)", sets: "3", reps: "10+4+3", rest: "90 sn" },
          { name: "Barbell Biceps Curl", sets: "4", reps: "8-10", rest: "90 sn" }
        ]
      }
    ]
  },
  {
    id: "prog-10",
    slug: "core-ve-stabilizasyon",
    name: "Core Stabilizasyon & Karın Kasları Rehberi",
    shortDesc: "Güçlü bel, stabilizasyon ve belirgin karın kasları (six pack) için 4 haftalık modül.",
    description: "Sadece mekik çekmek yerine karın kaslarının fonksiyonel ve anti-rotasyonel görevlerini çalıştırarak 3D karın kası ve bel stabilitesi kazandıran rehber.",
    price: 350,
    oldPrice: 500,
    level: "Tüm Seviyeler",
    durationWeeks: 4,
    daysPerWeek: 3,
    equipment: "Ekipmansız",
    goal: "Atletik Performans",
    image: "/images/programs/core.jpg",
    targetAudience: [
      "Güçlü bir bel ve core bölgesine sahip olmak isteyenler",
      "Omurga stabilitesini artırmak isteyen sporcular"
    ],
    features: [
      "Anti-extension ve anti-rotation egzersizleri",
      "Transverse abdominis (iç karın) aktivasyonu",
      "Nefes ve vakum teknikleri"
    ],
    sampleWorkout: [
      {
        day: "Core Stabilizasyon Günü",
        exercises: [
          { name: "Ab Wheel Rollout", sets: "3", reps: "10-12", rest: "60 sn" },
          { name: "Pallof Press", sets: "3", reps: "12 her taraf", rest: "45 sn" },
          { name: "Hanging Leg Raise", sets: "3", reps: "12", rest: "60 sn" }
        ]
      }
    ]
  }
];
