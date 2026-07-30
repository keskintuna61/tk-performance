export interface FAQItem {
  id: string;
  category: 'Online Koçluk' | 'Programlar' | 'Ödeme & İade' | 'Genel';
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "Online Koçluk",
    question: "Online koçluk süreci tam olarak nasıl işliyor?",
    answer: "Öncelikle koçluk başvuru formunu doldurarak fiziksel geçmişinizi, hedeflerinizi ve yaşam tarzınızı bize iletiyorsunuz. İnceleme sonrası 24 saat içinde programınız hazırlanıyor. Haftalık tartı/ölçüm takipleri ve video hareket analizleri ile süreciniz sürekli güncelleniyor."
  },
  {
    id: "faq-2",
    category: "Online Koçluk",
    question: "Daha önce hiç spor yapmadım, uyum sağlayabilir miyim?",
    answer: "Kesinlikle evet! Program tamamen sizin mevcut seviyeniz, fiziksel geçmişiniz ve yaşam tarzınıza göre sıfırdan hazırlanır. Hareketlerin uygulanışını detaylı video ve rehberlerle gösteriyoruz."
  },
  {
    id: "faq-3",
    category: "Programlar",
    question: "Hazır antrenman programları satın alındıktan sonra nasıl teslim ediliyor?",
    answer: "Ödemeniz tamamlandıktan hemen sonra PDF formatındaki detaylı antrenman rehberiniz, egzersiz videoları ve takip çizelgeleri anında e-posta adresinize ve panelinize iletilir."
  },
  {
    id: "faq-4",
    category: "Programlar",
    question: "Salona gitmeden evde spor yapabilir miyim?",
    answer: "Evet! Evdeki ekipmanlarınıza (veya ekipmansız vücut ağırlığınıza) uygun yüksek verimli antrenman programları hazırlıyoruz."
  },
  {
    id: "faq-5",
    category: "Ödeme & İade",
    question: "Ödeme seçenekleri ve taksit imkanı var mı?",
    answer: "Sitemizde 256-bit SSL korumalı iyzico ve PayTR altyapısı mevcuttur. Tüm kredi ve banka kartlarıyla 3D Secure güvencesinde tek çekim veya 3/6/12 taksitle ödeme yapabilirsiniz."
  },
  {
    id: "faq-6",
    category: "Ödeme & İade",
    question: "İptal ve iade politikanız nedir?",
    answer: "Dijital ürünlerde indirme gerçekleşmeden önce, online koçluk paketlerinde ise hizmet başlamadan önceki 14 gün içerisinde koşulsuz iade talebinde bulunabilirsiniz."
  },
  {
    id: "faq-7",
    category: "Genel",
    question: "Sağlık ve sakatlık durumunda koçluk veriyor musunuz?",
    answer: "Hafif postür bozuklukları ve bel/sırt aktivasyonlarında rehberlik sunuyoruz. Ancak tıbbi tedavi gerektiren akut sakatlıklarda öncelikle uzman bir doktora veya fizyoterapiste danışmanızı öneririz."
  }
];
