export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'Antrenman' | 'Beslenme' | 'Supplement' | 'Postür' | 'Atletik Performans' | 'Spor Bilimi';
  readTime: string;
  date: string;
  author: string;
  image: string;
  content: string;
  sources: string[];
  featured?: boolean;
}

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    slug: "progressive-overload-nedir-nasil-uygulanir",
    title: "Progressive Overload Nedir? Kas Gelişiminin Değişmez 5 İlkesi",
    summary: "Aynı ağırlıklarla aynı tekrarları yapmak kas gelişimini durdurur. Kademeli aşırı yükleme matematiğini bilimsel olarak inceledik.",
    category: "Spor Bilimi",
    readTime: "6 dk okuma",
    date: "18 Temmuz 2026",
    author: "Tunahan Keskin (Spor Bilimci)",
    image: "/images/blog/progressive-overload.jpg",
    featured: true,
    content: `
### Progressive Overload (Kademeli Aşırı Yükleme) Nedir?

Kas dokusunun büyümesi (hipertrofi) için kas liflerinin zamanla sürekli artan bir mekanik gerime maruz kalması gerekir. Eğer her antrenmanda aynı ağırlığı, aynı tekrar sayısıyla ve aynı formda kaldırıyorsanız, vücudunuz adapte olmuş demektir ve yeni kas lifi sentezlenmez.

#### Kas İçi Yüklenmeyi Artırmanın 5 Bilimsel Yolu:

1. **Ağırlığı Artırmak (Intensification):** Hareket formunu bozmadan bardaki veya dumble'daki kilogramı kademeli yükseltmek.
2. **Tekrar Sayısını Artırmak (Volume Increase):** Örneğin 80 kg ile 8 tekrar yapıyorsanız, haftaya 9 veya 10 tekrar denemek.
3. **Set Sayısını ve Hacmi Yönetmek:** Haftalık kas grubu başına düşen çalışma setini 10-20 set aralığında kademeli artırmak.
4. **Hareket Formunu & Temposunu Geliştirmek:** Ağırlığı savurmadan 3 saniyelik eksantrik (iniş) temposu ile kas içi gerimi uzatmak.
5. **Set Arası Dinlenme Sürelerini Optimize Etmek:** Aynı ağırlığı 120 sn yerine 90 sn dinlenerek kaldırabilmek metabolik yoğunluğu artırır.

> *Unutmayın: Kas gelişimi şans veya genetik piyangosu değil, kademeli yükleme matematiğidir.*
    `,
    sources: [
      "Schoenfeld, B. J. (2010). The mechanisms of muscle hypertrophy and their application to resistance training. Journal of Strength and Conditioning Research.",
      "Kraemer, W. J., & Ratamess, N. A. (2004). Fundamentals of resistance training: progression and exercise prescription. Medicine & Science in Sports & Exercise."
    ]
  },
  {
    id: "blog-2",
    slug: "protein-ihtiyaci-ve-zamanlamasi",
    title: "Kas Gelişimi İçin Günlük Kaç Gram Protein Almalısınız?",
    summary: "Kilo başına kaç gram protein alınmalı? Anabolik pencere efsanesi doğru mu? Beslenme biliminin son bulguları.",
    category: "Beslenme",
    readTime: "5 dk okuma",
    date: "12 Temmuz 2026",
    author: "Tunahan Keskin (Spor Bilimci)",
    image: "/images/blog/protein-nutrition.jpg",
    featured: true,
    content: `
### Protein Sentezi ve Kas Onarımı

Spor yapan bireylerde protein alımı sadece kas yapmak için değil, antrenman sonrası micro-trauma yaşayan kas dokularının hızlıca onarılması için kritiktir.

#### Bilimsel Literatür Ne Diyor?

ISSN (International Society of Sports Nutrition) rehberine göre:
- **Direnç Antrenmanı Yapan Sporcular:** Günlük kilo başına **1.6 – 2.2 gram** protein almalıdır.
- **Definasyon (Yağ Yakımı) Dönemindeki Sporcular:** Kalori açığında kas kaybını önlemek için kilo başına **2.0 – 2.4 gram** protein hedeflenmelidir.

#### Anabolik Pencere Gerçekten Var mı?

Antrenmandan hemen sonraki 30 dakika içinde protein içmezseniz antrenman boşa mı gider? Hayır! Modern araştırmalar, antrenman öncesi ve sonrası 3-4 saatlik bir zaman diliminde alınan toplam kaliteli proteinin kas protein sentezini (MPS) eşit derecede uyardığını göstermektedir.
    `,
    sources: [
      "Morton, R. W., et al. (2018). A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. British Journal of Sports Medicine.",
      "Jäger, R., et al. (2017). International Society of Sports Nutrition Position Stand: protein and exercise. Journal of the International Society of Sports Nutrition."
    ]
  },
  {
    id: "blog-3",
    slug: "kreatin-kullanimi-rehberi",
    title: "Kreatin Monohidrat Rehberi: Kullanımı, Faydaları ve Yanılgılar",
    summary: "Saç döker mi? Su tutar mı? Spor biliminin en çok araştırılan ve en güvenilir takviyesi kreatinin detaylı incelemesi.",
    category: "Supplement",
    readTime: "4 dk okuma",
    date: "05 Temmuz 2026",
    author: "Tunahan Keskin",
    image: "/images/blog/creatine-guide.jpg",
    featured: false,
    content: `
### Kreatin Nedir ve Nasıl Çalışır?

Kreatin, vücudumuzda doğal olarak üretilen ve kas hücrelerinde phosphocreatine (PCr) şeklinde depolanan bir amino asit türevidir. Yüksek yoğunluklu patlayıcı hareketlerde (bench press, sprint, squat) ATP enerjisinin hızlıca yeniden sentezlenmesini sağlar.

#### Kreatinin Kanıtlanmış Faydaları:
- Maksimum güç ve 1RM performansında %5-%15 artış.
- Set arası toparlanma süresinde hızlanma.
- Kas hücre içi hidrasyonu (hücre hacimlenmesi) artırarak kas büyümesini tetikleme.

#### Doğru Kullanım Dozu:
Yükleme fazı yapmanıza gerek yoktur. Günlük **3-5 gram Kreatin Monohidrat** kullanmak, 3-4 hafta içinde kas depolarınızı tam doygunluğa ulaştırır.
    `,
    sources: [
      "Kreider, R. B., et al. (2017). International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. JISSN."
    ]
  },
  {
    id: "blog-4",
    slug: "masa-basi-calisanlar-icin-postur-rehberi",
    title: "Masa Başı Çalışanlar İçin 10 Dakikalık Postür ve Bel Sağlığı Rehberi",
    summary: "Kamburluk, boyun düzleşmesi ve bel ağrılarından kurtulmak için uygulayabileceğiniz günlük esneme ve aktivasyon rutinleri.",
    category: "Postür",
    readTime: "7 dk okuma",
    date: "28 Haziran 2026",
    author: "Tunahan Keskin",
    image: "/images/blog/posture-guide.jpg",
    featured: false,
    content: `
### Masa Başı Sendromu ve Kas Dengesizlikleri

Günde 8 saatten fazla bilgisayar başında oturan kişilerde kavisleşen omurga, kısalan kalça fleksörleri ve zayıflayan üst sırt kasları kronik postür bozukluklarına yol açar.

#### Uygulamanız Gereken 3 Temel Rutin:
1. **Thoracic Foam Rolling & Extension:** Göğüs kafesi omurgasını açarak kamburluğu engeller.
2. **Band Face Pull & Scapular Pull-Up:** Zayıflayan arka omuz ve rhomboid kaslarını aktifleştirir.
3. **Couch Stretch (Kalça Fleksör Esnetme):** Uzun süre oturmaktan sıkışan kalça ön kaslarını rahatlatır.
    `,
    sources: [
      "Kendall, F. P., et al. (2005). Muscles: Testing and Function, with Posture and Pain. Lippincott Williams & Wilkins."
    ]
  },
  {
    id: "blog-5",
    slug: "sprint-ve-patlayici-guc-antrenmani",
    title: "Atletik Performansta Pliyo & Patlayıcı Güç Antrenmanları",
    summary: "Futbol ve salon sporcularında dikey sıçrama ve ilk adım ivmelenmesini artıran pliometrik sistemler.",
    category: "Atletik Performans",
    readTime: "6 dk okuma",
    date: "20 Haziran 2026",
    author: "Tunahan Keskin",
    image: "/images/blog/athletic-sprint.jpg",
    featured: false,
    content: `
### Esnetme-Kısalma Döngüsü (Stretch-Shortening Cycle)

Patlayıcı güç, kasın en kısa sürede üretebildiği maksimum kuvvettir. Pliometrik egzersizler, kas ve tendonların elastik enerji depolama kapasitesini geliştirir.
    `,
    sources: [
      "Verkhoshansky, Y., & Siff, M. C. (2009). Supertraining. Ultimate Athletic Concepts."
    ]
  },
  {
    id: "blog-6",
    slug: "beslenme-ve-kalori-acigi-hesabi",
    title: "Sağlıklı Yağ Yakımı İçin İdeal Kalori Açığı Nasıl Hesaplanır?",
    summary: "Aç kalmadan, kas kaybetmeden sürdürülebilir bir şekilde haftada 0.5-1 kg yağ kaybetmenin matematiği.",
    category: "Antrenman",
    readTime: "5 dk okuma",
    date: "14 Haziran 2026",
    author: "Tunahan Keskin",
    image: "/images/blog/calorie-deficit.jpg",
    featured: false,
    content: `
### Kalori Dengesi ve Enerji Harcaması

Yağ kaybetmenin tek temel fiziksel kuralı: Vücudun harcadığı enerjiden daha az kalori almaktır (Negative Energy Balance). Ancak aşırı kalori açığı kas kaybına ve tiroit yavaşlamasına neden olur.

İdeal kalori açığı TDEE değerinizin **%15 - %20 altında** olan kaloridir.
    `,
    sources: [
      "Helms, E. R., et al. (2014). Evidence-based recommendations for natural bodybuilding contest preparation: nutrition and supplementation. Journal of the International Society of Sports Nutrition."
    ]
  }
];
