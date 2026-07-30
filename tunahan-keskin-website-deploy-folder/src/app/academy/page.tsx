import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { academyCategories, academyCalculators } from '@/data/academy';

export const metadata: Metadata = {
  title: 'Akademi — Spor Bilimleri & Atletik Sağlık Akademisi | TK Performance',
  description: 'Spor bilimlerindeki güncel araştırmalar, antrenman rehberleri, beslenme zamanlaması ve kalori/1RM hesaplayıcıları.',
  alternates: {
    canonical: 'https://tunahankeskin.com/academy',
  },
};

export default function AcademyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-7xl mx-auto w-full space-y-16">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500 bg-slate-50 py-2.5 px-4 rounded-xl border border-slate-200 w-fit">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-blue-600 font-bold">Akademi</span>
        </div>

        {/* MASTER REDESIGNED HERO HEADER */}
        <div className="premium-card p-10 sm:p-14 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6 text-center max-w-4xl mx-auto">
          <span className="font-mono text-xs text-blue-400 font-extrabold tracking-widest uppercase bg-blue-950 px-4 py-1.5 rounded-full border border-blue-800 inline-block">
            ULUSLARARASI SPOR BİLİMLERİ &amp; ATLETİK SAĞLIK AKADEMİSİ
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
            TK PERFORMANCE SPOR BİLİMLERİ &amp; AKADEMİ MERKEZİ
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
            Hakemli spor bilimi araştırmaları, klinik fizyoloji, beslenme diyetetiği, biyomekanik rehberler ve interaktif biyometrik hesaplayıcıların yer aldığı kurumsal eğitim ve bilgi merkezi.
          </p>
        </div>

        {/* 12 FUTURE CATEGORIES INFRASTRUCTURE GRID */}
        <div className="space-y-8">
          <h2 className="font-display text-3xl text-slate-900 uppercase border-l-4 border-blue-600 pl-4">
            AKADEMİ KATEGORİ YAPISI (12 UZMANLIK DİSİPLİNİ)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {academyCategories.map((cat) => (
              <div key={cat.id} className="premium-card p-6 rounded-2xl space-y-3 bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all shadow-sm">
                <span className="text-4xl block">{cat.icon}</span>
                <h3 className="font-display text-2xl text-slate-900 uppercase">{cat.name}</h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BIOMETRIC CALCULATORS SECTION */}
        <div className="space-y-8 mb-16">
          <h2 className="font-display text-3xl text-slate-900 uppercase border-l-4 border-amber-500 pl-4">
            BİYOMETRİK HESAPLAYICILAR &amp; ARAÇLAR
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academyCalculators.map((calc) => (
              <div key={calc.id} className="premium-card p-6 rounded-2xl space-y-3 bg-white border border-slate-200 hover:border-amber-400 transition-all cursor-pointer shadow-sm">
                <span className="text-4xl p-3 bg-slate-50 rounded-xl border border-slate-200 inline-block">
                  {calc.icon}
                </span>
                <h3 className="font-display text-2xl text-slate-900 uppercase">
                  {calc.title}
                </h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {calc.desc}
                </p>
                <div className="font-mono text-sm text-amber-700 font-extrabold pt-2">
                  Hesapla &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
