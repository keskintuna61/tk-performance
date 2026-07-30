export const siteConfig = {
  name: "Tunahan Keskin Performance",
  shortName: "TK Performance",
  altName: "TK Performance Lab",
  title: "Tunahan Keskin Performance — Sports Scientist | Performance Coach",
  description: "Hedefine uygun kişisel antrenman sistemi, profesyonel takip ve sürdürülebilir gelişim. Biyomekanik analiz ve %100 bilimsel spor altyapısı.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tunahan-keskin-website.onrender.com",
  author: "Tunahan Keskin",
  role: "Sports Scientist | Performance Coach",
  roleTr: "Spor Bilimci | Performans Antrenörü",
  slogan: "BİLİMSEL ANTRENMAN. ÖLÇÜLEBİLİR GELİŞİM.",
  subtext: "Hedefine uygun kişisel antrenman sistemi, profesyonel takip ve sürdürülebilir gelişim.",
  credentials: [
    "2. Kademe Fitness Antrenörü",
    "Spor Yöneticiliği Yüksek Lisans Öğrencisi",
    "Pedagojik Formasyon Sahibi Beden Eğitimi Öğretmeni",
    "Trabzon Yüz Yüze PT & Türkiye Geneli Online Koçluk"
  ],
  // PREMİUM KOYU VE SİNEMATİK RENK PALETİ
  colors: {
    bgDark: "#070B12",
    bgNavy: "#0B1220",
    cardBg: "#111827",
    cardHover: "#1F2937",
    electricBlue: "#1E90FF",
    amberGlow: "#FFC857",
    textWhite: "#F8FAFC",
    textLightGray: "#D9D9D9",
    textMuted: "#94A3B8",
    borderDark: "rgba(255, 255, 255, 0.08)",
    borderBright: "#1E90FF",
    greenSuccess: "#22C55E"
  },
  // GÜNCEL PREMİUM PİYASA FİYATLARI
  pricing: {
    coaching1Month: 1950,
    coaching3Month: 4850,
    coaching6Month: 8950,
    currency: "TL"
  },
  contact: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905445300481",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || "pt.tunahankeskin",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "pt.tuna61@gmail.com",
    city: "Trabzon",
    address: "Trabzon / Türkiye (Yüz yüze PT & Türkiye Geneli Online Koçluk)"
  },
  demoMode: process.env.NEXT_PUBLIC_DEMO_MODE !== "false",
  paymentProvider: process.env.PAYMENT_PROVIDER || "demo"
};
