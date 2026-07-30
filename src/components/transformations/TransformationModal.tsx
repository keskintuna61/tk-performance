'use client';

import React, { useEffect } from 'react';
import { TransformationItem } from '@/data/transformations';

interface TransformationModalProps {
  item: TransformationItem;
  onClose: () => void;
}

export const TransformationModal: React.FC<TransformationModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER BAR */}
        <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-400 bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-800 uppercase">
              {item.badge}
            </span>
            <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
              {item.clientCode} DÖNÜŞÜM DETAYLARI
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xl flex items-center justify-center transition-colors border border-slate-700"
            aria-label="Kapat"
          >
            ✕
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1 custom-scrollbar">
          
          {/* VISUAL BEFORE / AFTER COMPARISON SHOWCASE */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <span className="font-mono text-xs text-amber-400 font-extrabold uppercase block">DÖNÜŞÜM PROFİLİ</span>
                <h4 className="font-display text-2xl text-white uppercase">{item.clientCode}</h4>
                <p className="font-mono text-xs text-slate-400">{item.realNameSample || 'Gizli Danışan Profili'}</p>
              </div>
              <span className="font-mono text-sm font-extrabold text-blue-400 bg-blue-950 px-4 py-2 rounded-xl border border-blue-800">
                ⏱️ {item.duration}
              </span>
            </div>

            {/* BEFORE / AFTER GRAPHIC SHOWCASE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-center space-y-3">
                <span className="font-mono text-xs text-slate-400 font-bold uppercase block">ÖNCE (BAŞLANGIÇ)</span>
                <div className="w-full h-48 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 font-mono text-sm border border-slate-700">
                  📷 [ÖNCE FOTOĞRAFI]
                </div>
                <div className="font-mono text-xs text-slate-300">Başlangıç Formu &amp; Yüksek Yağ Oranı</div>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-blue-900/50 text-center space-y-3">
                <span className="font-mono text-xs text-emerald-400 font-bold uppercase block">SONRA ({item.duration})</span>
                <div className="w-full h-48 rounded-lg bg-blue-950/40 flex items-center justify-center text-emerald-400 font-mono text-sm border border-blue-800">
                  📸 [SONRA FOTOĞRAFI]
                </div>
                <div className="font-mono text-xs text-emerald-400 font-bold">✓ Fit, Kaslı &amp; Atletik Duruş</div>
              </div>
            </div>

            {/* METRICS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <span className="font-mono text-xs text-slate-400 block">KAS KÜTLESİ</span>
                <strong className="font-display text-xl text-emerald-400">{item.stats.muscleMass}</strong>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <span className="font-mono text-xs text-slate-400 block">YAĞ ORANI</span>
                <strong className="font-display text-xl text-amber-400">{item.stats.fatPercentage}</strong>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <span className="font-mono text-xs text-slate-400 block">KİLO DÖNÜŞÜMÜ</span>
                <strong className="font-display text-xl text-blue-400">{item.stats.weightRange}</strong>
              </div>
              {item.stats.waistChange && (
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                  <span className="font-mono text-xs text-slate-400 block">BEL ÇEVRESİ</span>
                  <strong className="font-display text-xl text-white">{item.stats.waistChange}</strong>
                </div>
              )}
            </div>
          </div>

          {/* PROCESS SUMMARY */}
          <div className="space-y-3">
            <h4 className="font-display text-xl text-blue-400 uppercase flex items-center gap-2">
              <span>📋</span> SÜREÇ ÖZETİ
            </h4>
            <p className="text-base text-slate-300 font-sans leading-relaxed bg-slate-950 p-5 rounded-2xl border border-slate-800">
              {item.details.summary}
            </p>
          </div>

          {/* APPLIED PROGRAM & FOLLOW-UP SYSTEM */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <h5 className="font-display text-lg text-amber-400 uppercase flex items-center gap-2">
                <span>🛠️</span> YAPILAN PROGRAM
              </h5>
              <p className="text-sm text-slate-300 font-sans leading-normal">
                {item.details.programApplied}
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <h5 className="font-display text-lg text-emerald-400 uppercase flex items-center gap-2">
                <span>📈</span> HAFTALIK TAKİP SİSTEMİ
              </h5>
              <p className="text-sm text-slate-300 font-sans leading-normal">
                {item.details.followUpSystem}
              </p>
            </div>
          </div>

          {/* FINAL EVALUATION */}
          <div className="space-y-3">
            <h4 className="font-display text-xl text-emerald-400 uppercase flex items-center gap-2">
              <span>🏆</span> SONUÇ DEĞERLENDİRMESİ
            </h4>
            <p className="text-base text-slate-300 font-sans leading-relaxed bg-slate-950 p-5 rounded-2xl border border-slate-800">
              {item.details.evaluation}
            </p>
          </div>

          {/* MILESTONES */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2 font-mono text-xs">
            <span className="text-blue-400 font-bold uppercase block">📌 SÜREÇ KİLOMETRE TAŞLARI:</span>
            <div className="space-y-1.5 text-slate-300">
              {item.details.keyMilestones.map((m, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20ben%20de%20benzer%20bir%20d%C3%B6n%C3%BC%C5%9F%C3%BCm%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-mono text-sm font-extrabold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20"
            >
              🚀 BEN DE BAŞLAMAK İSTİYORUM &rarr;
            </a>

            <a
              href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20ön%20görüşme%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-sm font-extrabold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              💬 WhatsApp Bilgi Al
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
