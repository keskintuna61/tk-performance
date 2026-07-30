'use client';

import React, { useState } from 'react';
import { transformationsData, transformationStats, TransformationItem } from '@/data/transformations';
import { TransformationModal } from './TransformationModal';

export const TransformationsSection: React.FC = () => {
  const [selectedTransformation, setSelectedTransformation] = useState<TransformationItem | null>(null);

  return (
    <section id="transformations" className="bg-slate-950 text-white border-y border-slate-800 py-20 sm:py-28 relative overflow-hidden">
      
      {/* AMBIENT GLOW EFFECTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-mono text-xs text-emerald-400 font-extrabold tracking-widest uppercase bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-800 inline-block">
            DANIŞAN DÖNÜŞÜMLERİ
          </span>

          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
            GERÇEK SONUÇLAR
          </h2>

          <p className="font-display text-xl sm:text-2xl text-blue-400">
            Danışanlarımızın bilimsel antrenman ve düzenli takip sistemiyle elde ettiği gerçek gelişimler.
          </p>

          <p className="text-base text-slate-400 font-sans leading-relaxed max-w-2xl mx-auto">
            Her dönüşüm; kişiye özel programlama, sürdürülebilir antrenman planı ve düzenli takip sürecinin sonucudur. Aşağıdaki veriler örnek amaçlıdır ve daha sonra gerçek danışan bilgileriyle güncellenecektir.
          </p>
        </div>

        {/* 6 TRANSFORMATION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformationsData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTransformation(item)}
              className="premium-card p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 transition-all duration-300 shadow-2xl flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
            >
              <div className="space-y-5">
                
                {/* CARD HEADER */}
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-4">
                  <span className="font-mono text-xs font-extrabold text-amber-400 bg-amber-950/60 px-3.5 py-1 rounded-full border border-amber-800">
                    {item.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-400 font-bold">
                    ⏱️ {item.duration}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2.5xl text-white group-hover:text-blue-400 transition-colors uppercase">
                    {item.clientCode}
                  </h3>
                  <p className="font-mono text-xs text-slate-400 mt-1">
                    {item.target}
                  </p>
                </div>

                {/* BEFORE / AFTER VISUAL PLACEHOLDER */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 p-4 border border-slate-800 flex items-center justify-between text-center font-mono text-xs">
                  <div className="w-1/2 pr-2 border-r border-slate-800 space-y-1">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">ÖNCE</span>
                    <div className="h-24 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600">
                      📷 ÖNCE
                    </div>
                  </div>

                  <div className="w-1/2 pl-2 space-y-1">
                    <span className="text-emerald-400 block text-[10px] uppercase font-bold">SONRA ({item.duration})</span>
                    <div className="h-24 rounded-lg bg-blue-950/40 border border-blue-800 flex items-center justify-center text-emerald-400 font-bold">
                      📸 SONRA
                    </div>
                  </div>
                </div>

                {/* STATS MATRIX */}
                <div className="grid grid-cols-3 gap-2 font-mono text-xs text-center">
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80">
                    <span className="text-slate-500 block text-[10px]">KAS KÜTLESİ</span>
                    <strong className="text-emerald-400 text-sm">{item.stats.muscleMass}</strong>
                  </div>

                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80">
                    <span className="text-slate-500 block text-[10px]">YAĞ ORANI</span>
                    <strong className="text-amber-400 text-sm">{item.stats.fatPercentage}</strong>
                  </div>

                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80">
                    <span className="text-slate-500 block text-[10px]">KİLO</span>
                    <strong className="text-blue-400 text-sm">{item.stats.weightRange}</strong>
                  </div>
                </div>

              </div>

              {/* CARD FOOTER */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 font-mono text-xs text-blue-400 font-extrabold flex justify-between items-center group-hover:translate-x-1 transition-transform">
                <span>DETAYLI DÖNÜŞÜM İNCELE</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* ANIMATED STATS COUNTER STRIP */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {transformationStats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-3xl block">{stat.icon}</span>
                <div className="font-display text-4.5xl sm:text-5xl text-blue-400 font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="font-mono text-xs sm:text-sm text-slate-300 font-extrabold uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA AREA */}
        <div className="premium-card rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-slate-900 border border-slate-800 shadow-2xl">
          <span className="font-mono text-xs text-emerald-400 font-extrabold tracking-widest uppercase bg-emerald-950 px-4 py-1.5 rounded-full border border-emerald-800 inline-block">
            GELECEĞİN DÖNÜŞÜMÜ
          </span>

          <h3 className="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Sıradaki Başarı Hikâyesi Senin Olsun.
          </h3>

          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
            Bilimsel antrenman planlaması ve düzenli takip sistemiyle hedeflerine güvenli ve sürdürülebilir şekilde ulaş.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2 font-mono text-sm sm:text-base">
            <a
              href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20ücretsiz%20ön%20görüşme%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-blue-500/25 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>🚀</span>
              <span>ÜCRETSİZ ÖN GÖRÜŞME OLUŞTUR</span>
            </a>

            <a
              href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-4 rounded-xl transition-all flex items-center gap-2 shadow-lg"
            >
              <span>💬</span>
              <span>WhatsApp'tan Bilgi Al</span>
            </a>
          </div>
        </div>

      </div>

      {/* MODAL TRIGGER */}
      {selectedTransformation && (
        <TransformationModal
          item={selectedTransformation}
          onClose={() => setSelectedTransformation(null)}
        />
      )}
    </section>
  );
};
