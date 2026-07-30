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
  subtitle: 'Gerçek danışan gelişimleri, gerekli izinler alındıktan sonra burada paylaşılacaktır.',
  placeholders: [
    {
      id: 'focus-01',
      title: 'Performans Gelişimi',
      icon: '⚡',
      description: 'Bireyin başlangıç kapasitesine göre ölçülen kuvvet, dayanıklılık ve patlayıcı güç parametreleri.',
      focusArea: 'Kuvvet & Dayanıklılık'
    },
    {
      id: 'focus-02',
      title: 'Vücut Kompozisyonu',
      icon: '🏋️‍♂️',
      description: 'Kişiye özel antrenman ve beslenme planlamasıyla sürdürülebilir kas kütlesi ve yağ oranı yönetimi.',
      focusArea: 'Vücut Kompozisyonu'
    },
    {
      id: 'focus-03',
      title: 'Hareket Kalitesi',
      icon: '🧘‍♂️',
      description: 'Biyomekanik değerlendirmeler, duruş farkındalığı ve mobilite odaklı hareket protokolleri.',
      focusArea: 'Mobilite & Postür'
    }
  ]
};
