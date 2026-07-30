export interface SuccessStory {
  id: string;
  clientName: string;
  age: number;
  profession: string;
  serviceUsed: string;
  duration: string;
  statChange: string;
  quote: string;
  beforeImg: string;
  afterImg: string;
  badge: string;
}

export const successStoriesData: SuccessStory[] = [
  {
    id: "story-1",
    clientName: "Emre T.",
    age: 29,
    profession: "Yazılım Mühendisi",
    serviceUsed: "Online Coaching & Body Transformation",
    duration: "12 Haftalık Dönüşüm",
    statChange: "-11 kg Yağ / +4 kg Kas",
    quote: "Masa başı çalışmaktan bel ağrılarım vardı ve yağ oranım %24'e çıkmıştı. Tunahan Hoca ile 12 haftada hem bel ağrılarım bitti hem de vücudum tamamen değişti.",
    beforeImg: "/images/exercise-covers/chest-press.png",
    afterImg: "/images/exercise-covers/incline-press.png",
    badge: "12 WEEKS TRANSFORMATION"
  },
  {
    id: "story-2",
    clientName: "Selin K.",
    age: 26,
    profession: "Mimar",
    serviceUsed: "Pilates & Nutrition",
    duration: "16 Haftalık Süreç",
    statChange: "Kifoz Düzeltimi / -8 cm Bel Darlığı",
    quote: "Postürümdeki duruş bozukluğu 4. haftada düzelmeye başladı. Beslenme takibi ile kendimi hiç aç hissetmeden formumu koruyorum.",
    beforeImg: "/images/exercise-covers/lat-pulldown.png",
    afterImg: "/images/exercise-covers/seated-row.png",
    badge: "POSTURE & BODYSHAPING"
  },
  {
    id: "story-3",
    clientName: "Berkay A.",
    age: 22,
    profession: "Futbolcu (Amatör Lig)",
    serviceUsed: "Athletic Performance & Testing",
    duration: "8 Hafta Sezon Öncesi",
    statChange: "+12 cm Dikey Sıçrama / 40m Hız +%8",
    quote: "Sezon öncesi kuvvet-hız profil testim çıkarıldı. Sahadaki ikili mücadelelerde ve patlayıcı gücümde inanılmaz bir fark hissettim.",
    beforeImg: "/images/exercise-covers/leg-press.png",
    afterImg: "/images/exercise-covers/romanian-deadlift.png",
    badge: "ATHLETIC PERFORMANCE"
  }
];

export const platformStats = [
  { label: "MUTLU DANIŞAN", value: "500+", icon: "👥" },
  { label: "BİLİMSEL EGZERSİZ", value: "20+", icon: "📚" },
  { label: "BAŞARI ORANI", value: "%98.4", icon: "🏆" },
  { label: "YILLIK DENEYİM", value: "8+ YIL", icon: "🎓" }
];
