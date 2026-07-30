export interface Testimonial {
  id: string;
  name: string;
  location: string;
  programUsed: string;
  rating: number;
  comment: string;
  resultBadge: string;
  isExampleContent?: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testi-1",
    name: "Mert Karadağ",
    location: "İstanbul",
    programUsed: "Gelişim Paketi (3 Aylık)",
    rating: 5,
    comment: "Tunahan hocayla fitness eğitimine başladıktan sonra antrenman yapmayı daha bilinçli öğrenmeye başladım. Hareket tekniklerim düzeldi, güçlendim ve hedeflediğim kas kütlesine ulaştım.",
    resultBadge: "+7kg Kas Kütlesi",
    isExampleContent: true
  },
  {
    id: "testi-2",
    name: "Burak Yılmaz",
    location: "Ankara",
    programUsed: "Metabolik Yağ Yakımı (6 Aylık)",
    rating: 5,
    comment: "Daha önce sürekli sporu yarıda bırakıyordum. Tunahan hocanın hazırladığı kişiye özel antrenman ve esnek beslenme rehberi sayesinde 3 ayda 12 kilo yağ kaybettim.",
    resultBadge: "-12kg Yağ Kaybı",
    isExampleContent: true
  },
  {
    id: "testi-3",
    name: "Ahmet Selim",
    location: "Trabzon (Yüz Yüze PT)",
    programUsed: "Birebir PT & Performans",
    rating: 5,
    comment: "Trabzon'da birebir antrenman yapıyoruz. Sadece salonda değil, günlük beslenme ve form videoları takibiyle her an iletişimde olmamız motivasyonumu zirvede tutuyor.",
    resultBadge: "Postür & Güç Artışı",
    isExampleContent: true
  },
  {
    id: "testi-4",
    name: "Zeynep Şahin",
    location: "İzmir",
    programUsed: "Postür & Mobilite Programı",
    rating: 5,
    comment: "Masa başı yazılımcı olarak kronik sırt ve bel ağrılarım vardı. 6 haftalık mobilite ve omurga aktivasyon rutininden sonra tüm ağrılarım bitti ve dik duruş kazandım.",
    resultBadge: "Ağrısız Dik Duruş",
    isExampleContent: true
  },
  {
    id: "testi-5",
    name: "Emre Aksoy",
    location: "Bursa",
    programUsed: "Güç Odaklı PPL Programı",
    rating: 5,
    comment: "Bench press ve squat rekorlarım duraklamıştı. 8 haftalık bilimsel periyodizasyon sayesinde 1RM kaldırışımda +25kg artış sağladım. Teşekkürler Tunahan Hocam!",
    resultBadge: "+25kg 1RM Artışı",
    isExampleContent: true
  },
  {
    id: "testi-6",
    name: "Kaan Arslan",
    location: "Antalya",
    programUsed: "Futbolcu Atletik Performans",
    rating: 5,
    comment: "Saha içi sprint patlayıcılığım ve ikili mücadele direncim hissedilir derecede arttı. Pliometrik yükleme sistemleri profesyonel seviyede hazırlanmış.",
    resultBadge: "Atletik Performans",
    isExampleContent: true
  }
];
