export const siteConfig = {
  name: "Tunahan Keskin Performance",
  shortName: "TK Performance",
  altName: "TK Performance Lab",
  title: "Tunahan Keskin Performance — Sports Scientist | Performance Coach",
  description: "Tunahan Keskin ile bilimsel temelli online fitness koçluğu, bire bir antrenman, atletik performans ve hareket kalitesi odaklı kişiye özel egzersiz programları.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tunahan-keskin-website.onrender.com",
  author: "Tunahan Keskin",
  role: "Spor Yöneticisi | Beden Eğitimi ve Spor Öğretmeni | 2. Kademe Fitness Antrenörü",
  roleTr: "Spor Yöneticisi | Beden Eğitimi ve Spor Öğretmeni | 2. Kademe Fitness Antrenörü",
  slogan: "BİLİMSEL PERFORMANS. ÖLÇÜLEBİLİR GELİŞİM.",
  subtext: "Hedefine uygun kişisel antrenman sistemi, profesyonel takip ve sürdürülebilir gelişim.",
  credentials: [
    "Spor Yöneticiliği Lisans Mezunu",
    "Pedagojik Formasyon Eğitimi",
    "Spor Yöneticiliği Yüksek Lisans Programı (Devam Ediyor)",
    "2. Kademe Fitness Antrenörü"
  ],
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
  pricing: {
    coaching1Month: 2990,
    coaching3Month: 4990,
    currency: "TL"
  },
  contact: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905445300481",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || "tunahan.keskin.pt",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "pt.tuna61@gmail.com",
    city: "Trabzon",
    address: "Trabzon / Türkiye (Yüz yüze PT & Türkiye Geneli Online Koçluk)"
  },
  demoMode: process.env.NEXT_PUBLIC_DEMO_MODE !== "false",
  paymentProvider: process.env.PAYMENT_PROVIDER || "demo"
};
