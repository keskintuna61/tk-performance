export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const navigationLinks: NavLink[] = [
  { label: "ANA SAYFA", href: "/" },
  { label: "HİZMETLERİMİZ", href: "/services" },
  { label: "EGZERSİZ KÜTÜPHANESİ", href: "/egzersizler" },
  { label: "AKADEMİ", href: "/academy" },
  { label: "BAŞARI HİKAYELERİ", href: "/success-stories" },
  { label: "HAKKIMIZDA", href: "/about" },
  { label: "İLETİŞİM", href: "/contact" }
];

export const legalLinks: NavLink[] = [
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "Mesafeli Satış Sözleşmesi", href: "/mesafeli-satis-sozlesmesi" },
  { label: "Ön Bilgilendirme Formu", href: "/on-bilgilendirme" },
  { label: "İade Politikası", href: "/iade-politikasi" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
  { label: "Sağlık Sorumluluk Reddi", href: "/saglik-sorumluluk-reddi" }
];
