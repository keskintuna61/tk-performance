export interface TransformationPlaceholder {
  id: string;
  title: string;
  icon: string;
  description: string;
  focusArea: string;
}

export const transformationNotice = {
  titleTag: 'DANIŞAN GELİŞİMLERİ',
  mainTitle: 'DANIŞAN GELİŞİMLERİ',
  subtitle: 'Gerçek danışan sonuçları ve gelişim hikâyeleri, açık izinleri alınarak yakında bu bölümde paylaşılacaktır.',
  placeholders: [
    {
      id: 'focus-01',
      title: 'Performans Gelişimi',
      icon: '⚡',
      description: 'Bireyin başlangıç kapasitesine göre ölçülen kuvvet, dayanıklılık ve patlayıcı güç parametreleri.',
      focusArea: 'Kuvvet & Dayanıklılık Takibi'
    },
    {
      id: 'focus-02',
      title: 'Vücut Kompozisyonu',
      icon: '🏋️‍♂️',
      description: 'Kişiye özel antrenman ve beslenme planlamasıyla sürdürülebilir kas kütlesi ve yağ oranı yönetimi.',
      focusArea: 'Hipertrofi & Sağlıklı Değişim'
    },
    {
      id: 'focus-03',
      title: 'Hareket Kalitesi',
      icon: '🧘‍♂️',
      description: 'Biyomekanik değerlendirmeler, duruş farkındalığı ve mobilite odaklı hareket protokolleri.',
      focusArea: 'Mobilite & Postür Farkındalığı'
    }
  ]
};
