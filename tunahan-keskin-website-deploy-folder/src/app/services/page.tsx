import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { servicesData } from '@/data/services';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz — TK Performance & Health Platform',
  description: 'Fitness & Vücut Dönüşümü, Sporcu Beslenmesi, Atletik Performans, Pilates, Fonksiyonel Antrenman, Medikal Egzersiz.',
  alternates: {
    canonical: 'https://tunahankeskin.com/services',
  },
};

export default function ServicesPage() {
  const coreServices = servicesData.filter((s) => s.isCoreHomeService);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-7xl mx-auto w-full space-y-16">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500 bg-slate-50 py-2.5 px-4 rounded-xl border border-slate-200 w-fit">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-blue-600 font-bold">Hizmetlerimiz</span>
        </div>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs text-blue-600 font-extrabold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            PERFORMANS &amp; SAĞLIK DİREKLERİ
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase text-slate-900 tracking-tight">
            PROFESYONEL HİZMET KATEGORİLERİ
          </h1>
          <p className="text-base text-slate-700 font-sans leading-relaxed">
            TK Performance &amp; Health; yalnızca antrenman programı sunmaz. Sağlık, atletik kapasite, beslenme ve medikal egzersiz alanlarında ihtiyacınıza uygun bilimsel çözümü hem online hem yüz yüze olarak sunar.
          </p>
        </div>

        {/* 6 CORE SERVICES GRID WITH ONLINE TRAINING TAGS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, idx) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="premium-card rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-1 bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl space-y-6"
            >
              <div className="space-y-4">
                {/* ICON & BADGE */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    {service.icon}
                  </span>
                  <span className="font-mono text-xs font-extrabold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 uppercase">
                    0{idx + 1} • {service.badge}
                  </span>
                </div>

                {/* TITLE & TAGLINE */}
                <div>
                  <h3 className="font-display text-2.5xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-500 italic mt-1">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-base text-slate-700 font-sans leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* DISCLAIMER NOTE IF APPLICABLE */}
                {service.disclaimer && (
                  <p className="text-xs font-mono text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200">
                    ℹ️ {service.disclaimer}
                  </p>
                )}

                {/* ONLINE TRAINING TAGS */}
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-md border border-slate-200">
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION LINK */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-sm text-blue-600 font-extrabold group-hover:translate-x-1 transition-transform">
                <span>HİZMET DETAYLARI &amp; PROTOKOL</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="premium-card rounded-3xl p-10 text-center space-y-6 bg-slate-900 text-white border border-slate-800 shadow-2xl">
          <span className="font-mono text-xs text-amber-400 font-extrabold tracking-widest uppercase bg-amber-950 px-4 py-1.5 rounded-full border border-amber-800">
            HANGİ HİZMET SİZE UYGUN?
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-white uppercase">
            SİZE ÖZEL PERFORMANS VE SAĞLIK HARİTASI ÇIKARALIM
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto font-sans leading-relaxed">
            Hangi hizmetin hedefinize en hızlı ve güvenli şekilde ulaştıracağından emin değilseniz, değerlendirme formunu doldurun.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-base font-black uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-blue-500/30 hover:scale-105 transition-all"
          >
            <span>🚀</span>
            <span>YOLCULUĞUNU BAŞLAT</span>
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
