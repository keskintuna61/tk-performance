export interface PricingTier {
  id: string;
  name: string;
  duration: string;
  price: number;
  oldPrice?: number;
  monthlyEquivalent: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export const pricingTiersData: PricingTier[] = [
  {
    id: "pkg-1m",
    name: "1 Aylık Başlangıç",
    duration: "1 Ay",
    price: 1950,
    oldPrice: 2800,
    monthlyEquivalent: 1950,
    features: [
      "Kişiye özel antrenman programı (4 hafta)",
      "Form videosu kontrolü & hareket analizi",
      "Sınırsız mesajlaşma (24-48 sa. yanıt)",
      "Aylık 1 program güncellemesi",
      "Spora başlama & adaptasyon rehberi"
    ],
    ctaText: "Başlangıç Paketine Başvur"
  },
  {
    id: "pkg-3m",
    name: "3 Aylık Dönüşüm",
    duration: "3 Ay",
    price: 4850,
    oldPrice: 7200,
    monthlyEquivalent: 1616,
    popular: true,
    features: [
      "1 Aylık paketteki her şey",
      "Esnek Beslenme & Makro rehberi",
      "Haftalık tartı, ölçüm ve form takibi",
      "Sınırsız mesajlaşma (12-24 sa. yanıt)",
      "Her 4 haftada 1 program güncellemesi",
      "%20 İndirim avantajı"
    ],
    ctaText: "Dönüşüm Paketine Başvur"
  },
  {
    id: "pkg-6m",
    name: "6 Aylık Performans",
    duration: "6 Ay",
    price: 8950,
    oldPrice: 12900,
    monthlyEquivalent: 1491,
    features: [
      "3 Aylık paketteki her şey",
      "Kişiye özel esnek beslenme planı",
      "Haftalık detaylı video form analizi",
      "Öncelikli WhatsApp iletişimi (aynı gün)",
      "Takviye / Supplement protokolü",
      "%35 Maksimum tasarruf"
    ],
    ctaText: "Performans Paketine Başvur"
  }
];
