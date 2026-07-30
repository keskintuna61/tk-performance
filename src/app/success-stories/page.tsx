import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { successStoriesData, platformStats } from '@/data/successStories';

export const metadata: Metadata = {
  title: 'Başarı Hikayeleri — Danışan Vücut Dönüşümleri | TK Performance',
  description: 'Spor Bilimci Tunahan Keskin rehberliğinde elde edilen gerçek vücut dönüşümleri, postür iyileşmeleri ve atletik performans hikayeleri.',
  alternates: {
    canonical: 'https://tunahankeskin.com/success-stories',
  },
};

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-7xl mx-auto w-full">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500 mb-8 bg-slate-50 py-2.5 px-4 rounded-xl border border-slate-200 w-fit">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-blue-600 font-bold">Başarı Hikayeleri</span>
        </div>

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-blue-600 font-extrabold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            KANITLANMIŞ BİLİMSEL SONUÇLAR
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase text-slate-900 tracking-tight">
            DANIŞAN BAŞARI HİKAYELERİ
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Geçici çözümler değil; sürdürülebilir yaşam tarzı ve yüksek atletik kapasite. İşte spor biliminin gerçek hayatla buluştuğu başarı hikayeleri.
          </p>
        </div>

        {/* PLATFORM METRIC COUNTERS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {platformStats.map((stat, idx) => (
            <div key={idx} className="premium-card p-6 rounded-2xl text-center space-y-2 bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-3xl block">{stat.icon}</span>
              <div className="font-display text-4xl text-blue-600 tracking-tight">{stat.value}</div>
              <div className="font-mono text-xs text-slate-600 font-bold uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* TRANSFORMATIONS LIST */}
        <div className="space-y-12 mb-20">
          {successStoriesData.map((story) => (
            <div key={story.id} className="premium-card p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 shadow-md">
              
              {/* LEFT CLIENT SPECS */}
              <div className="lg:col-span-7 space-y-4">
                <span className="font-mono text-[10px] text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 font-extrabold uppercase">
                  {story.badge}
                </span>

                <h3 className="font-display text-3xl text-slate-900 uppercase">
                  {story.clientName} <span className="text-sm font-mono text-slate-500">({story.age} Yaş, {story.profession})</span>
                </h3>

                <div className="flex flex-wrap gap-3 font-mono text-xs">
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-200 font-bold">
                    {story.serviceUsed}
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg border border-emerald-200 font-bold">
                    {story.statChange}
                  </span>
                </div>

                <p className="text-sm text-slate-700 font-sans leading-relaxed italic bg-slate-50 p-4 rounded-2xl border-l-4 border-blue-600">
                  "{story.quote}"
                </p>

                <div className="font-mono text-xs text-slate-500">
                  Süreç: <strong className="text-slate-900">{story.duration}</strong>
                </div>
              </div>

              {/* RIGHT BEFORE/AFTER PREVIEW */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] bg-slate-900 rounded-2xl overflow-hidden border border-slate-200">
                  <Image src={story.beforeImg} alt="Önceki Durum" fill className="object-cover brightness-90" />
                  <span className="absolute bottom-2 left-2 font-mono text-[10px] bg-red-600 px-2 py-0.5 rounded text-white font-bold">ÖNCE</span>
                </div>
                <div className="relative aspect-[3/4] bg-slate-900 rounded-2xl overflow-hidden border border-blue-400">
                  <Image src={story.afterImg} alt="Sonraki Durum" fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 font-mono text-[10px] bg-emerald-600 px-2 py-0.5 rounded text-white font-bold">SONRA</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA BANNER */}
        <div className="premium-card rounded-3xl p-10 text-center space-y-6 bg-slate-900 text-white border border-slate-800 shadow-2xl">
          <h2 className="font-display text-3xl sm:text-5xl text-white uppercase">
            KENDİ BAŞARI HİKAYENİZİ YAZMAYA HAZIR MISINIZ?
          </h2>
          <p className="text-sm text-slate-300 font-sans max-w-xl mx-auto">
            Disiplinli bir sistem, doğru antrenman ve birebir rehberlikle potansiyelinize ulaşın.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-black uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-blue-500/30 transition-all"
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
