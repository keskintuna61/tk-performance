'use client';

import React, { useState } from 'react';
import { Exercise } from '@/data/exercises';

interface ExerciseFilterSectionProps {
  exercises?: Exercise[];
  defaultOpen?: boolean;
}

export const ExerciseFilterSection: React.FC<ExerciseFilterSectionProps> = ({ defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  const categories = [
    'Tümü',
    'Göğüs',
    'Sırt',
    'Omuz',
    'Bacak',
    'Kol',
    'Core',
    'Mobilite',
    'Atletik Performans'
  ];

  return (
    <div id="egzersizler" className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
      {/* COLLAPSIBLE ACCORDION TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-7 bg-white hover:bg-slate-100/80 border border-blue-200 rounded-2xl text-left transition-all group shadow-sm hover:shadow-md"
      >
        <div>
          <span className="font-mono text-sm text-blue-600 font-extrabold tracking-widest uppercase block mb-1">
            BİYOMEKANİK KÜTÜPHANE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
            BİLİMSEL EGZERSİZ KÜTÜPHANESİ KATEGORİ ALTYAPISI
          </h2>
          <span className="font-mono text-sm text-slate-500 block mt-1">
            {isOpen ? 'Açık • Kütüphane kategorilerini gizlemek için tıklayın' : 'Kapalı • Kategori altyapısını incelemek için tıklayın'}
          </span>
        </div>

        <div className="w-13 h-13 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform px-4 py-3">
          {isOpen ? '▲' : '▼'}
        </div>
      </button>

      {/* COLLAPSIBLE CONTENT AREA */}
      {isOpen && (
        <div className="mt-8 space-y-8 animate-fadeIn">
          {/* CATEGORY FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2.5 font-mono text-sm">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl transition-all font-bold text-[15px] ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* UPCOMING BULK CONTENT PLACEHOLDER CARD */}
          <div className="text-center py-16 px-8 bg-white rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto space-y-4">
            <span className="text-5xl block">📚</span>
            <h3 className="font-display text-3xl text-slate-900 uppercase">
              EGZERSİZ KÜTÜPHANESİ YAKINDA AKTİF EDİLECEKTİR
            </h3>
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              Tüm nizami egzersiz rehberleri, biyomekanik analiz görselleri ve yüksek çözünürlüklü kapaklar toplu içerik yüklemesi ile bu alanda yayınlanacaktır. Kategori ve kod altyapısı eksiksiz hazırlanmıştır.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-mono text-xs font-extrabold px-4 py-2 rounded-full border border-blue-200">
              <span>⚡ TOPLU İÇERİK YÜKLEMESİNE HAZIR ALTYAPI</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
