export interface ResultCardData {
  id: string;
  clientInitials: string;
  duration: string;
  category: string;
  beforeStats: string;
  afterStats: string;
  summary: string;
  isExampleContent?: boolean;
}

export const resultsData: ResultCardData[] = [
  {
    id: "res-1",
    clientInitials: "M.K.",
    duration: "12 Hafta",
    category: "Kas Kütlesi & Hipertrofi",
    beforeStats: "72 kg / %18 Yağ",
    afterStats: "78 kg / %12 Yağ",
    summary: "Disiplinli makro beslenme ve 4 günlük Push-Pull-Legs yüklemesi ile temiz kas kütlesi kazanımı.",
    isExampleContent: true
  },
  {
    id: "res-2",
    clientInitials: "B.Y.",
    duration: "16 Hafta",
    category: "Vücut Rekompozisyonu",
    beforeStats: "94 kg / %26 Yağ",
    afterStats: "81 kg / %15 Yağ",
    summary: "Kontrollü kalori açığı ve yüksek protein alımı ile kas kaybı yaşamadan 13 kg yağ kaybı.",
    isExampleContent: true
  },
  {
    id: "res-3",
    clientInitials: "E.A.",
    duration: "8 Hafta",
    category: "Güç & Performans",
    beforeStats: "Bench: 85kg / Squat: 110kg",
    afterStats: "Bench: 110kg / Squat: 140kg",
    summary: "Progressive Overload ve RPE takipli periyodizasyon ile maksimum 1RM artışı.",
    isExampleContent: true
  }
];
