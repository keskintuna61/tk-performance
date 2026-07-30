export interface FAQItem {
  question: string;
  answer: string;
}

export const faqDataList: FAQItem[] = [
  {
    question: 'Online eğitim nasıl işliyor?',
    answer: 'Öncelikle postür ve hareket kapasiteniz analiz edilir. Size özel hazırlanan antrenman ve takip paneliniz kurulur; hareket kütüphanesi, RIR/RPE yüklenme takibi ve haftalık form kontrolleri ile uzaktan birebir koordinasyon yürütülür.'
  },
  {
    question: 'Yüz yüze dersler nerede yapılıyor?',
    answer: 'Yüz yüze Personal Training seanslarımız Trabzon\'daki özel donanımlı stüdyomuzda birebir 60 dakikalık odaklanmış antrenman blokları halinde gerçekleştirilir.'
  },
  {
    question: 'Programlar tamamen kişiye özel mi?',
    answer: 'Evet. Her antrenman ve takip programı bireyin anatomik yapısı, yaşam düzeni, mevcut hareket kapasitesi, salon/ev ekipman durumu ve hedefleri doğrultusunda sıfırdan tasarlanır.'
  },
  {
    question: 'Beslenme desteği sunuyor musunuz?',
    answer: 'Evet. Beslenme ve diyetetik hizmetlerimiz yetkin diyetisyen ve beslenme uzmanları iş birliğiyle sporcu diyetetiği, TDEE kalibrasyonu ve metabolik beslenme çerçevesinde sunulmaktadır.'
  },
  {
    question: 'Haftalık takip nasıl yapılıyor?',
    answer: 'Her hafta RIR/RPE şiddet skorlarınız, kilo ve vücut ölçüm grafikleriniz ile WhatsApp üzerinden gönderdiğiniz hareket form videolarınız detaylıca incelenerek anında geribildirim verilir.'
  },
  {
    question: 'Program ne kadar sürüyor?',
    answer: 'Biyolojik adaptasyon ve kalıcı kas hipertrofisi blokları minimum 12 haftalık periyotlar halinde planlanır. İdeal ve sürdürülebilir gelişim süreci 16-24 haftadır.'
  },
  {
    question: 'Yeni başlayanlar da katılabilir mi?',
    answer: 'Kesinlikle evet. Yeni başlayan danışanlarımız için temel hareket okuryazarlığı, omurga sağlığı ve koruyucu biyomekanik hizalamalardan başlayan özel seviyelendirilmiş protokoller uygulanır.'
  },
  {
    question: 'Spor geçmişim yok, yine de başlayabilir miyim?',
    answer: 'Evet. Spor biliminin temeli her bireyi kendi seviyesinden başlatmaktır. Hiç spor geçmişi olmayan danışanlarımızla sakatlık riski sıfırlanarak adım adım gelişim inşa edilir.'
  },
  {
    question: 'Programlar güncelleniyor mu?',
    answer: 'Evet. Gelişim ivmenize, kas toparlanma hızınıza ve antrenman adapte sürenize göre antrenman hacmi, şiddeti ve egzersiz varyasyonları haftalık kontrollerde sürekli güncellenir.'
  },
  {
    question: 'Ödeme seçenekleri nelerdir?',
    answer: 'Bankatransferi / Havale / EFT ve kredi kartı ile güvenli ödeme imkanı sunulmaktadır. Seçtiğiniz online veya yüz yüze eğitim paketine göre aylık veya seanslık planlamalar mevcuttur.'
  }
];

export const generateFaqSchemaJson = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqDataList.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
};
