'use client';

import React from 'react';
import { transformationNotice } from '@/data/transformations';

export const TransformationsSection: React.FC = () => {
  return (
    <section id="transformations" className="bg-slate-950 text-white border-y border-slate-800 py-20 sm:py-28 relative overflow-hidden">
      
      {/* AMBIENT GLOW EFFECTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-mono text-xs text-blue-400 font-extrabold tracking-widest uppercase bg-blue-950/80 px-4 py-1.5 rounded-full border border-blue-800 inline-block">
            {transformationNotice.titleTag}
          </span>

          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
            {transformationNotice.mainTitle}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
            {transformationNotice.subtitle}
          </p>
        </div>

        {/* 3 CLEAN QUALITATIVE PLACEHOLDER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformationNotice.placeholders.map((card) => (
            <div
              key={card.id}
              className="premium-card p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl text-center"
            >
              <span className="text-5xl block mb-2">{card.icon}</span>
              <span className="font-mono text-xs font-extrabold text-blue-400 bg-blue-950/60 px-3.5 py-1 rounded-full border border-blue-800 inline-block uppercase">
                {card.focusArea}
              </span>
              <h3 className="font-display text-2.5xl text-white uppercase">
                {card.title}
              </h3>
              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA STRIP */}
        <div className="premium-card rounded-3xl p-8 sm:p-12 text-center space-y-4 bg-slate-900/80 border border-slate-800 max-w-3xl mx-auto">
          <h3 className="font-display text-3xl text-white uppercase">Sıradaki Gelişim Hikâyesi Senin Olsun</h3>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-sans">
            Kişiye özel antrenman ve takip sistemiyle hedeflerine güvenli ve sürdürülebilir biçimde adım at.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-sm font-extrabold uppercase px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              🚀 Değişimine Başla
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
