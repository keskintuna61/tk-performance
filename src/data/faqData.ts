export interface FAQItem {
  question: string;
  answer: string;
}

export const faqDataList: FAQItem[] = [
  {
    question: 'Online koçluk süreci nasıl ilerliyor?',
    answer: 'Başlangıç değerlendirmesinin ardından hedeflerinize ve mevcut seviyenize uygun kişiye özel antrenman ve takip programı hazırlanır. Süreç boyunca antrenman takibi, form videoları geri bildirimi ve düzenli güncellemeler sağlanır.'
  },
  {
    question: 'Programlar kişiye özel mi?',
    answer: 'Evet. Programlar kişinin hedefi, antrenman deneyimi, yaşam düzeni, ekipman imkânı ve hareket kapasitesi dikkate alınarak sıfırdan hazırlanır.'
  },
  {
    question: 'Ağrım veya sakatlığım varsa çalışabilir miyim?',
    answer: 'Ağrı, yaralanma veya sağlık problemi bulunan bireylerin öncelikle hekim ya da fizyoterapist değerlendirmesi alması gerekir. Uygun görülmesi durumunda egzersiz planı sağlık profesyonelinin önerileri dikkate alınarak düzenlenebilir.'
  },
  {
    question: 'Sonuçlar garanti mi?',
    answer: 'Sonuçlar kişinin başlangıç seviyesi, antrenman devamlılığı, uyku, beslenme ve yaşam düzeni gibi birçok etkene bağlıdır. Tıbbi veya kesin bir süre garantisi verilmez.'
  },
  {
    question: 'Yüz yüze dersler nerede yapılıyor?',
    answer: 'Yüz yüze antrenman seanslarımız Trabzon\'da uygun stüdyo ve antrenman alanlarında birebir odaklanmış seanslar halinde gerçekleştirilmektedir.'
  },
  {
    question: 'Beslenme desteği sunuluyor mu?',
    answer: 'Antrenman sürecini destekleyici genel beslenme farkındalığı ve makro rehberliği sunulur. Özel diyet ve hastalık durumlarında yetkili diyetisyen yönlendirmesi yapılır.'
  },
  {
    question: 'Haftalık takip nasıl yapılıyor?',
    answer: 'Her hafta antrenman verileriniz, yüklenme hissiyatınız ve hareket videolarınız incelenerek gerekli teknik düzeltmeler ve program ayarlamaları yapılır.'
  },
  {
    question: 'Yeni başlayanlar da katılabilir mi?',
    answer: 'Kesinlikle evet. Hiç spor geçmişi olmayan danışanlarımız için temel hareket okuryazarlığı ve güvenli ilerleme prensiplerine dayalı özel başlangıç seviyesi uygulanır.'
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
