import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { HeroSection } from '@/components/home/HeroSection';
import { ExerciseFilterSection } from '@/components/features/ExerciseFilterSection';
import { servicesData } from '@/data/services';
import { exercisesData } from '@/data/exercises';
import { successStoriesData, platformStats } from '@/data/successStories';
import { academyCategories, academyCalculators } from '@/data/academy';

export const metadata: Metadata = {
  title: 'TK Performance & Health — Spor Bilimleri, Performans & Sağlık Platformu',
  description: 'Spor Bilimci Tunahan Keskin rehberliğinde Performans, Sağlık, Hareket, Beslenme, Pilates, Medikal Egzersiz ve Atletik Gelişim Platformu.',
  alternates: {
    canonical: 'https://tunahankeskin.com',
  },
};

export default function HomePage() {
  // FILTER ONLY THE 6 CORE SERVICES FOR HOMEPAGE DISPLAY
  const coreHomeServices = servicesData.filter((s) => s.isCoreHomeService);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 space-y-24 pb-24">
        
        {/* 1. HERO SECTION (MODULAR UI SHOWCASE, NO PERSON PHOTO) */}
        <HeroSection />

        {/* 2. STAT COUNTERS STRIP */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {platformStats.map((stat, idx) => (
              <div key={idx} className="premium-card p-7 rounded-2xl text-center space-y-2 bg-slate-50 border border-slate-200">
                <span className="text-4xl block">{stat.icon}</span>
                <div className="font-display text-4.5xl text-blue-600 tracking-tight">{stat.value}</div>
                <div className="font-mono text-sm text-slate-700 font-extrabold uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="max-w-7xl mx-auto px-6"><div className="section-divider" /></div>

        {/* 3. 6 CORE SERVICES SECTION WITH ONLINE TRAINING EMBEDDED TAGS */}
        <section id="services" className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="font-mono text-sm text-blue-600 font-extrabold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
                UZMANLIK ALANLARIMIZ &amp; HİZMETLER
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-slate-900 tracking-tight">
                6 UZMANLIK ALANI &amp; DİJİTAL DESTEK
              </h2>
            </div>
            <Link href="/services" className="font-mono text-base text-blue-600 font-extrabold hover:underline">
              Tüm Hizmet Detaylarını Gör &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreHomeServices.map((serv, idx) => (
              <Link
                key={serv.id}
                href={`/services/${serv.slug}`}
                className="premium-card rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-1 bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-4xl p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      {serv.icon}
                    </span>
                    <span className="font-mono text-xs text-blue-600 font-extrabold bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                      0{idx + 1} • {serv.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2.5xl text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
                      {serv.title}
                    </h3>
                    <p className="text-base text-slate-700 font-sans leading-relaxed mt-2.5">
                      {serv.shortDesc}
                    </p>
                  </div>

                  {/* DISCLAIMER LABEL IF APPLICABLE */}
                  {serv.disclaimer && (
                    <div className="text-xs font-mono text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200">
                      ℹ️ {serv.disclaimer}
                    </div>
                  )}

                  {/* ONLINE & HYBRID TRAINING TAGS */}
                  <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                    {serv.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-md border border-slate-200">
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 font-mono text-sm text-blue-600 font-extrabold flex justify-between items-center group-hover:translate-x-1 transition-transform">
                  <span>HİZMET DETAYLARI &amp; PROTOKOL</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="max-w-7xl mx-auto px-6"><div className="section-divider" /></div>

        {/* 4. EXERCISE LIBRARY ACCORDION (NO CARDS VISIBLE, BULK READY) */}
        <section className="max-w-7xl mx-auto px-6">
          <ExerciseFilterSection exercises={exercisesData} defaultOpen={false} />
        </section>

        {/* SECTION DIVIDER */}
        <div className="max-w-7xl mx-auto px-6"><div className="section-divider" /></div>

        {/* 5. REDESIGNED SPOR BİLİMLERİ & AKADEMİ SHOWCASE */}
        <section id="academy" className="max-w-7xl mx-auto px-6 space-y-12">
          
          {/* MASTER REDESIGNED HEADER */}
          <div className="premium-card p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-4 text-center max-w-4xl mx-auto">
            <span className="font-mono text-xs text-blue-400 font-extrabold tracking-widest uppercase bg-blue-950 px-4 py-1.5 rounded-full border border-blue-800 inline-block">
              ULUSLARARASI SPOR BİLİMLERİ &amp; ATLETİK SAĞLIK AKADEMİSİ
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              TK PERFORMANCE SPOR BİLİMLERİ &amp; AKADEMİ MERKEZİ
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
              Hakemli spor bilimi araştırmaları, klinik fizyoloji, beslenme diyetetiği, biyomekanik rehberler ve interaktif biyometrik hesaplayıcıların yer aldığı kurumsal eğitim ve bilgi merkezi.
            </p>
          </div>

          {/* 12 FUTURE CATEGORIES INFRASTRUCTURE GRID */}
          <div className="space-y-6">
            <h3 className="font-display text-3xl text-slate-900 uppercase border-l-4 border-blue-600 pl-4">
              AKADEMİ KATEGORİ YAPISI (12 UZMANLIK DİSİPLİNİ)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {academyCategories.map((cat) => (
                <div key={cat.id} className="premium-card p-6 rounded-2xl space-y-2 bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all">
                  <span className="text-3xl block">{cat.icon}</span>
                  <h4 className="font-display text-2xl text-slate-900 uppercase">{cat.name}</h4>
                  <p className="text-sm text-slate-600 font-sans">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* BIOMETRIC CALCULATORS SECTION */}
          <div className="space-y-6 pt-6">
            <h3 className="font-display text-3xl text-slate-900 uppercase border-l-4 border-amber-500 pl-4">
              BİYOMETRİK HESAPLAYICILAR &amp; ARAÇLAR
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {academyCalculators.map((calc) => (
                <Link key={calc.id} href="/academy" className="premium-card p-6 rounded-2xl space-y-3 bg-white border border-slate-200 hover:border-amber-400 transition-all shadow-sm">
                  <span className="text-4xl block">{calc.icon}</span>
                  <h4 className="font-display text-2xl text-slate-900 uppercase">{calc.title}</h4>
                  <p className="text-sm text-slate-700 font-sans leading-normal">{calc.desc}</p>
                  <div className="font-mono text-sm text-amber-700 font-extrabold pt-2">Hesapla &rarr;</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="max-w-7xl mx-auto px-6"><div className="section-divider" /></div>

        {/* 6. SUCCESS STORIES SECTION */}
        <section id="success-stories" className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="font-mono text-sm text-emerald-800 font-extrabold tracking-widest uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
                KANITLANMIŞ DANIŞAN SONUÇLARI
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-slate-900 tracking-tight">
                GERÇEK DÖNÜŞÜM HİKAYELERİ
              </h2>
            </div>
            <Link href="/success-stories" className="font-mono text-base text-emerald-800 font-extrabold hover:underline">
              Tüm Başarı Hikayelerini Gör &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStoriesData.map((story) => (
              <div key={story.id} className="premium-card p-7 rounded-2xl space-y-4 bg-white border border-slate-200 shadow-sm">
                <span className="font-mono text-xs text-amber-800 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200 font-extrabold uppercase">
                  {story.badge}
                </span>

                <h3 className="font-display text-2.5xl text-slate-900 uppercase">
                  {story.clientName}
                </h3>

                <p className="text-base text-slate-700 font-sans italic bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed">
                  "{story.quote}"
                </p>

                <div className="font-mono text-sm text-emerald-700 font-extrabold">
                  {story.statChange}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. GLOBAL CTA BANNER */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="premium-card rounded-3xl p-14 text-center space-y-6 bg-slate-900 text-white border border-slate-800 shadow-2xl">
            <span className="font-mono text-sm text-blue-400 font-extrabold tracking-widest uppercase bg-blue-950 px-4 py-1.5 rounded-full border border-blue-800">
              TK PERFORMANCE &amp; HEALTH PLATFORM
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              BİLİMSEL GELİŞİM YOLCULUĞUNA BUGÜN BAŞLAYIN
            </h2>
            <p className="text-lg text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
              Sadece rastgele program satın almayın; Spor Bilimci Tunahan Keskin rehberliğinde kendi potansiyelinizi keşfedin.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-base font-black uppercase tracking-wider px-10 py-5 rounded-xl shadow-xl shadow-blue-500/30 hover:scale-105 transition-all"
            >
              <span>🚀</span>
              <span>YOLCULUĞUNU BAŞLAT</span>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
