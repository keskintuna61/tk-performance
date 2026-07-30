'use client';

import React, { useState } from 'react';
import { faqDataList, generateFaqSchemaJson } from '@/data/faqData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchemaJson = generateFaqSchemaJson();

  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 space-y-16">
      
      {/* INJECT SCHEMA.ORG FAQPAGE STRUCTURED DATA FOR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }}
      />

      {/* SECTION HEADER */}
      <div className="space-y-3">
        <span className="font-mono text-sm text-blue-600 font-extrabold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
          SIK SORULAN SORULAR
        </span>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-slate-900 tracking-tight">
          PROGRAMLAR VE ÇALIŞMA SİSTEMİMİZ HAKKINDA MERAK EDİLENLER
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
          Programlar, online eğitim süreci ve çalışma sistemimiz hakkında en çok merak edilen sorular.
        </p>
      </div>

      {/* ACCORDION CONTAINER */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqDataList.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-white border-blue-500 shadow-md'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-6 text-left font-display text-xl sm:text-2xl text-slate-900 uppercase flex justify-between items-center gap-4 group"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                </span>

                <span className="font-mono text-lg text-blue-600 font-bold group-hover:scale-110 transition-transform shrink-0">
                  {isOpen ? '▲' : '▼'}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-base text-slate-700 font-sans leading-relaxed border-t border-slate-100 pt-4 bg-white animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* BOTTOM FAQ CTA AREA */}
      <div className="premium-card rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-slate-900 text-white border border-slate-800 shadow-2xl">
        <span className="font-mono text-xs text-amber-400 font-extrabold tracking-widest uppercase bg-amber-950 px-4 py-1.5 rounded-full border border-amber-800 inline-block">
          DESTEK &amp; DANIŞMA
        </span>

        <h3 className="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight">
          Aradığın Cevabı Bulamadın mı?
        </h3>

        <p className="text-base sm:text-lg text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
          Ekibimiz sana yardımcı olmaktan memnuniyet duyar. Her türlü soru ve detay için hemen bizimle iletişime geçebilirsin.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2 font-mono text-base">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-9 py-4.5 rounded-xl shadow-xl shadow-blue-500/25 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>✉️</span>
            <span>Bize Ulaş</span>
          </a>

          <a
            href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20bir%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4.5 rounded-xl transition-all flex items-center gap-2 shadow-lg"
          >
            <span>💬</span>
            <span>WhatsApp'tan Yaz</span>
          </a>
        </div>
      </div>

    </section>
  );
};
