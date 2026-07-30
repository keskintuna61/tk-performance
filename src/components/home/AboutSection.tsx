import React from 'react';
import Link from 'next/link';
import { aboutData } from '@/data/aboutData';

export const AboutSection: React.FC = () => {
  return (
    <section id="hakkimda" className="max-w-7xl mx-auto px-6 space-y-16">
      
      {/* SECTION HEADER */}
      <div className="space-y-3">
        <span className="font-mono text-sm text-blue-600 font-extrabold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
          {aboutData.titleTag}
        </span>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-slate-900 tracking-tight">
          {aboutData.subtitle}
        </h2>
      </div>

      {/* MAIN CONTENT GRID (TRAINER PHOTO SHOWCASE LEFT, BIO RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: TRAINER PHOTO SHOWCASE AREA */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl p-8 bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6 overflow-hidden">
            
            {/* AMBIENT GLOW & FINE ACCENT LINES */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6 text-center">
              
              {/* PHOTO FRAME PLACEHOLDER */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-6 shadow-inner group">
                <div className="w-24 h-24 rounded-3xl bg-blue-600 text-white font-display text-4xl font-bold flex items-center justify-center shadow-xl shadow-blue-500/20 mb-4 group-hover:scale-105 transition-transform">
                  TK
                </div>
                <div className="font-display text-2xl text-white uppercase tracking-tight">
                  TUNAHAN KESKİN
                </div>
                <span className="font-mono text-xs text-blue-400 font-bold uppercase mt-1">
                  EĞİTMEN FOTOĞRAFI ALANI
                </span>
                <p className="text-xs text-slate-500 font-mono mt-3 max-w-xs">
                  [Yüksek Çözünürlüklü Eğitmen Fotoğrafı Yüklemesine Hazır Çerçeve Altyapısı]
                </p>
              </div>

              {/* QUICK CREDENTIALS BADGE STRIP */}
              <div className="pt-2 border-t border-slate-800/80 font-mono text-xs text-slate-300 space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Beden Eğitimi ve Spor Öğretmeni</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Spor Yöneticiliği Yüksek Lisans</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>2. Kademe Fitness Antrenörü</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: BRAND NARRATIVE & BIO */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-3">
            <span className="font-mono text-xs font-extrabold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 uppercase inline-block">
              SPOR BİLİMCİ &amp; KONDİSYONER
            </span>
            <h3 className="font-display text-4xl sm:text-5xl text-slate-900 uppercase tracking-tight">
              {aboutData.coachName}
            </h3>
            <p className="font-display text-2xl text-blue-600 font-bold">
              {aboutData.coachRole}
            </p>
          </div>

          {/* BIO PARAGRAPHS */}
          <div className="space-y-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            {aboutData.bioParagraphs.map((para, idx) => (
              <p key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                {para}
              </p>
            ))}
          </div>

        </div>
      </div>

      {/* UZMANLIK ALANLARI (6 ICON CARDS) */}
      <div className="space-y-6 pt-4">
        <h3 className="font-display text-3xl text-slate-900 uppercase border-l-4 border-blue-600 pl-4">
          UZMANLIK ALANLARI
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {aboutData.expertiseAreas.map((exp, idx) => (
            <div key={idx} className="premium-card p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-sm hover:border-blue-400 transition-all">
              <span className="text-3xl block">{exp.icon}</span>
              <h4 className="font-display text-lg text-slate-900 uppercase leading-snug">{exp.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* YETERLİLİKLER (HORIZONTAL CARDS / BADGES) */}
      <div className="space-y-6 pt-4">
        <h3 className="font-display text-3xl text-slate-900 uppercase border-l-4 border-amber-500 pl-4">
          AKADEMİK &amp; MESLEKİ YETERLİLİKLER
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aboutData.qualifications.map((qual, idx) => (
            <div key={idx} className="premium-card p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
              <span className="font-display text-xl text-slate-900 uppercase font-bold">{qual.title}</span>
              <span className="font-mono text-[10px] font-extrabold text-blue-600 bg-white px-3 py-1 rounded-full border border-blue-200 whitespace-nowrap shrink-0">
                {qual.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* YAKLAŞIMIM (3 BIG CARDS) */}
      <div className="space-y-6 pt-4">
        <h3 className="font-display text-3xl text-slate-900 uppercase border-l-4 border-emerald-600 pl-4">
          ÇALIŞMA YAKLAŞIMIM (3 ADIMLI SİSTEM)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutData.approachSteps.map((step) => (
            <div key={step.stepNumber} className="premium-card p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm hover:border-emerald-400 transition-all">
              <div className="flex justify-between items-center">
                <span className="font-display text-4xl text-blue-600 font-bold">{step.stepNumber}</span>
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h4 className="font-display text-2.5xl text-slate-900 uppercase">{step.title}</h4>
              <p className="text-base text-slate-600 font-sans leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT SECTION CTA BANNER */}
      <div className="premium-card rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-slate-900 text-white border border-slate-800 shadow-2xl">
        <span className="font-mono text-xs text-blue-400 font-extrabold tracking-widest uppercase bg-blue-950 px-4 py-1.5 rounded-full border border-blue-800 inline-block">
          SİSTEMATİK GELİŞİM
        </span>

        <h3 className="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight">
          {aboutData.ctaTitle}
        </h3>

        <p className="text-base sm:text-lg text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
          {aboutData.ctaSubtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2 font-mono text-base">
          <a
            href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20sizinle%20%C3%A7al%C4%B1%C5%9Fmak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-9 py-4.5 rounded-xl shadow-xl shadow-blue-500/25 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>🤝</span>
            <span>BENİMLE ÇALIŞ</span>
          </a>

          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4.5 rounded-xl transition-all"
          >
            🔍 Hizmetleri İncele
          </a>
        </div>
      </div>

    </section>
  );
};
