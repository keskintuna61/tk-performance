'use client';

import React from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  customImage?: string; // Optional custom photo prop if user wants to supply one later
}

export const HeroSection: React.FC<HeroSectionProps> = ({ customImage }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden border-b border-slate-200">
      
      {/* SUBTLE BACKGROUND GRID PATTERN */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: TYPOGRAPHY & CALL TO ACTION */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="inline-flex items-center gap-2.5 bg-blue-50 text-blue-700 font-mono text-sm font-extrabold px-5 py-2.5 rounded-full border border-blue-200 shadow-sm uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span>ULUSLARARASI SAĞLIK &amp; PERFORMANS PLATFORMU</span>
          </div>

          {/* H1 (56–64px) */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[64px] text-slate-900 uppercase tracking-tight leading-[1.05]">
            BİLİMSEL PERFORMANS. <br />
            <span className="text-blue-600">ÖLÇÜLEBİLİR SAĞLIK.</span>
          </h1>

          {/* NORMAL CONTENT (18px) */}
          <p className="text-lg sm:text-xl text-slate-700 font-sans leading-relaxed max-w-2xl">
            TK Performance &amp; Health; performans, beslenme, pilates, medikal egzersiz ve atletik gelişimi spor bilimi çatısı altında toplayan bütüncül ve kişiselleştirilmiş sağlık markasıdır.
          </p>

          {/* KEY BENEFITS LIST (16-18px) */}
          <div className="space-y-4 font-mono text-base text-slate-700 border-l-4 border-blue-600 pl-5 py-2">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 font-bold text-lg">➔</span>
              <span>İhtiyacınıza uygun %100 kişiselleştirilmiş antrenman ve beslenme protokolü.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 font-bold text-lg">➔</span>
              <span>Biyomekanik postür analizleri ve koruyucu medikal egzersiz yaklaşımı.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 font-bold text-lg">➔</span>
              <span>Spor Bilimci Tunahan Keskin rehberliğinde kesintisiz 7/24 dijital takip.</span>
            </div>
          </div>

          {/* CTA BUTTONS (17-18px) */}
          <div className="flex flex-wrap gap-4 pt-3 font-mono text-base">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold uppercase tracking-wider px-9 py-4.5 rounded-xl shadow-lg shadow-blue-500/25 hover:scale-105 transition-all flex items-center gap-3 text-[17px]"
            >
              <span>🚀</span>
              <span>YOLCULUĞUNU BAŞLAT</span>
            </Link>

            <Link
              href="/services"
              className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold uppercase tracking-wider px-8 py-4.5 rounded-xl border border-slate-300 shadow-sm transition-all text-[17px]"
            >
              Hizmet Alanlarımız &rarr;
            </Link>
          </div>

        </div>

        {/* RIGHT COLUMN: MODERN ABSTRACT UI PERFORMANCE & ANALYTICS SHOWCASE */}
        <div className="lg:col-span-5">
          {customImage ? (
            /* IF CUSTOM PHOTO SUPPLIED LATER */
            <div className="relative rounded-3xl p-3 bg-white border border-slate-200 shadow-2xl">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                <img src={customImage} alt="Tunahan Keskin Performance" className="w-full h-full object-cover" />
              </div>
            </div>
          ) : (
            /* MODERN PREMIUM UI ANALYTICS COMPOSITION (NO PERSON PHOTO) */
            <div className="relative rounded-3xl p-8 bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6">
              
              {/* BRAND CARD HEADER */}
              <div className="flex justify-between items-center pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center font-display text-2xl font-bold text-white shadow-md">
                    TK
                  </div>
                  <div>
                    <div className="font-display text-xl tracking-wide uppercase text-white">PERFORMANCE LAB</div>
                    <div className="font-mono text-[10px] text-blue-400 font-extrabold uppercase tracking-wider">Spor Bilimi Analytics v3.0</div>
                  </div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>SİSTEM AKTİF</span>
                </span>
              </div>

              {/* CORE METRIC TILES */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-1">
                  <span className="font-mono text-[11px] text-slate-400 uppercase font-bold block">BİYOMEKANİK POSTÜR</span>
                  <div className="font-display text-3xl text-blue-400">96.8 <span className="text-xs font-mono text-slate-400">/ 100</span></div>
                  <span className="font-mono text-[10px] text-emerald-400 font-bold block">✓ Optimal Omurga Dizilimi</span>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-1">
                  <span className="font-mono text-[11px] text-slate-400 uppercase font-bold block">ATLETİK BAŞARI</span>
                  <div className="font-display text-3xl text-amber-400">%98.4</div>
                  <span className="font-mono text-[10px] text-slate-400 font-bold block">500+ Ölçümlü Danışan</span>
                </div>
              </div>

              {/* GRAPH / WAVEFORM VISUALIZATION */}
              <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700 space-y-3">
                <div className="flex justify-between items-center font-mono text-xs text-slate-300 font-bold">
                  <span>VBT KUVVET-HIZ PROFİLİ</span>
                  <span className="text-blue-400">1.48 m/s Peak</span>
                </div>
                
                {/* SVG WAVE GRAPH */}
                <div className="h-16 w-full flex items-end gap-1.5 pt-2">
                  {[40, 55, 35, 70, 85, 60, 95, 80, 100, 75, 90, 85, 95].map((val, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all hover:brightness-125"
                      style={{ height: `${val}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* BOTTOM VERIFICATION BAR */}
              <div className="bg-blue-950/60 p-4 rounded-2xl border border-blue-800/50 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-blue-400 text-base">🛡️</span>
                  <span><strong>%100 Veriye Dayalı</strong> Bilimsel Takip</span>
                </div>
                <span className="text-blue-400 font-bold">Trabzon &amp; Online</span>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
