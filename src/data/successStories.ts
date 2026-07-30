export interface SuccessStory {
  id: string;
  title: string;
  focus: string;
  description: string;
  icon: string;
}

export const successStoriesNotice = {
  title: 'DANIŞAN GELİŞİMLERİ',
  subtitle: 'Gerçek danışan gelişimleri, gerekli izinler alındıktan sonra burada paylaşılacaktır.'
};

export const qualitativeTrustMetrics = [
  { label: "KİŞİYE ÖZEL PROGRAMLAMA", desc: "Mevcut seviyeye ve hedeflere özel tasarım", icon: "📋" },
  { label: "BİLİMSEL TEMELLİ YAKLAŞIM", desc: "Kanıta dayalı antrenman ve yüklenme prensipleri", icon: "🔬" },
  { label: "DÜZENLİ GELİŞİM TAKİBİ", desc: "RIR/RPE takibi ve teknik form değerlendirmeleri", icon: "📈" },
  { label: "BELGELİ ANTRENÖRLÜK DENEYİMİ", desc: "Spor bilimci ve antrenör rehberliği", icon: "🤝" }
];
