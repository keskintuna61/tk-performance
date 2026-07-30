import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { HeroSection } from '@/components/home/HeroSection';
import { servicesData } from '@/data/services';
import { ServiceSectionClient } from '@/components/services/ServiceSectionClient';
import { TransformationsSection } from '@/components/transformations/TransformationsSection';
import { AboutSection } from '@/components/home/AboutSection';
import { FaqSection } from '@/components/home/FaqSection';
import { ContactSection } from '@/components/home/ContactSection';
import { aboutData } from '@/data/aboutData';

export const metadata: Metadata = {
  title: 'Tunahan Keskin — Spor Yöneticisi & Fitness Antrenörü | Performans Koçluğu',
  description: 'Tunahan Keskin ile bilimsel temelli online fitness koçluğu, bire bir antrenman, atletik performans ve hareket kalitesi odaklı kişiye özel egzersiz programları.',
  alternates: {
    canonical: 'https://tunahankeskin.com',
  },
};

// QUALITATIVE TRUST BADGES (REPLACING UNVERIFIED STAT NUMBERS)
const trustBadges = [
  { icon: '📋', title: 'Kişiye Özel Programlama', desc: 'Mevcut seviyeye ve hedeflere özel tasarım' },
  { icon: '🔬', title: 'Bilimsel Temelli Yaklaşım', desc: 'Kanıta dayalı antrenman ve yüklenme prensipleri' },
  { icon: '📈', title: 'Düzenli Gelişim Takibi', desc: 'RIR/RPE takibi ve teknik form değerlendirmeleri' },
  { icon: '🤝', title: 'Online ve Yüz Yüze Destek', desc: 'Birebir iletişim ve sürekli yönlendirme' }
];

export default function HomePage() {
  const coreHomeServices = servicesData.filter((s) => s.isCoreHomeService);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 space-y-20 sm:space-y-28 pb-20">
        
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. GÜVEN VE UZMANLIK ŞERİDİ (QUALITATIVE TRUST BADGES) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="premium-card p-6 rounded-2xl text-center space-y-2 bg-slate-50 border border-slate-200">
                <span className="text-3xl block">{badge.icon}</span>
                <h3 className="font-display text-xl text-slate-900 uppercase">{badge.title}</h3>
                <p className="text-xs text-slate-600 font-sans">{badge.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="max-w-7xl mx-auto px-6"><div className="section-divider" /></div>

        {/* 3. HİZMETLER SECTION */}
        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-3 text-center sm:text-left">
            <span className="font-mono text-xs sm:text-sm text-blue-600 font-extrabold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-block">
              UZMANLIK ALANLARIMIZ &amp; HİZMETLER
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase text-slate-900 tracking-tight">
              KİŞİYE ÖZEL EĞİTİM VE KOÇLUK ÇÖZÜMLERİ
            </h2>
          </div>

          <ServiceSectionClient services={coreHomeServices} />
        </section>

        {/* SECTION DIVIDER */}
        <div className="max-w-7xl mx-auto px-6"><div className="section-divider" /></div>

        {/* 4. NASIL ÇALIŞIYORUM? (3 ADIMLI SİSTEM) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs sm:text-sm text-emerald-800 font-extrabold tracking-widest uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 inline-block">
              SİSTEMATİK YAKLAŞIM
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase text-slate-900 tracking-tight">
              NASIL ÇALIŞIYORUM? (3 ADIMLI SİSTEM)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {aboutData.approachSteps.map((step) => (
              <div key={step.stepNumber} className="premium-card p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-display text-4xl text-blue-600 font-bold">{step.stepNumber}</span>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-display text-2xl text-slate-900 uppercase">{step.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. DANIŞAN GELİŞİMLERİ (PLACEHOLDER WITH DISCLAIMER) */}
        <TransformationsSection />

        {/* 6. HAKKIMDA (ABOUT SECTION) */}
        <AboutSection />

        {/* SECTION DIVIDER */}
        <div className="max-w-7xl mx-auto px-6"><div className="section-divider" /></div>

        {/* 7. DİJİTAL PLATFORMLAR KISA TANITIM (KOMPAKT 3 KART) */}
        <section id="academy" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-3 text-center">
            <span className="font-mono text-xs sm:text-sm text-amber-800 font-extrabold tracking-widest uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 inline-block">
              DİJİTAL REHBERLER &amp; ARAÇLAR
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase text-slate-900 tracking-tight">
              BİLİMSEL İÇERİKLER VE PERFORMANS ARAÇLARI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* KART 1: TK ACADEMY */}
            <div className="premium-card p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm text-center flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-4xl block">🎓</span>
                <h3 className="font-display text-2xl text-slate-900 uppercase">TK ACADEMY</h3>
                <p className="text-sm text-slate-600 font-sans">
                  Bilimsel temelli antrenman rehberlerini ve eğitim içeriklerini keşfet.
                </p>
              </div>
              <div className="pt-2">
                <Link href="/academy" className="inline-block w-full py-3 bg-slate-900 hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase rounded-xl transition-all">
                  Eğitimleri Keşfet &rarr;
                </Link>
              </div>
            </div>

            {/* KART 2: EGZERSİZ KÜTÜPHANESİ */}
            <div className="premium-card p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm text-center flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-4xl block">🏋️‍♂️</span>
                <h3 className="font-display text-2xl text-slate-900 uppercase">EGZERSİZ KÜTÜPHANESİ</h3>
                <p className="text-sm text-slate-600 font-sans">
                  Hareketlerin biyomekanik açıdan doğru uygulama tekniklerini incele.
                </p>
              </div>
              <div className="pt-2">
                <Link href="/exercises" className="inline-block w-full py-3 bg-slate-900 hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase rounded-xl transition-all">
                  Kütüphaneyi Gör &rarr;
                </Link>
              </div>
            </div>

            {/* KART 3: PERFORMANS ARAÇLARI */}
            <div className="premium-card p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm text-center flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-4xl block">🧮</span>
                <h3 className="font-display text-2xl text-slate-900 uppercase">PERFORMANS ARAÇLARI</h3>
                <p className="text-sm text-slate-600 font-sans">
                  Antrenman ve performans kalibrasyonu için biyometrik hesaplayıcıları kullan.
                </p>
              </div>
              <div className="pt-2">
                <Link href="/academy" className="inline-block w-full py-3 bg-slate-900 hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase rounded-xl transition-all">
                  Araçları İncele &rarr;
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="max-w-7xl mx-auto px-6"><div className="section-divider" /></div>

        {/* 8. SIK SORULAN SORULAR (FAQ) */}
        <FaqSection />

        {/* 9. İLETİŞİM & BAŞVURU (SINGLE #contact SECTION) */}
        <ContactSection />

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
