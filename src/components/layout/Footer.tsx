'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-8 relative overflow-hidden" aria-label="Sayfa Alt Bilgisi">
      
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* TOP SECTION: 5 COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* COLUMN 1: BRAND & SOCIALS */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-display text-2xl font-bold flex items-center justify-center shadow-lg shadow-blue-500/20">
                TK
              </div>
              <div className="font-display text-xl text-white uppercase tracking-tight">
                TK PERFORMANCE
              </div>
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Bilimsel temellere dayanan antrenman sistemleri, performans gelişimi ve online eğitim çözümleri sunuyoruz.
            </p>

            {/* SOCIAL MEDIA HOVER BADGES */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-500 flex items-center justify-center transition-all shadow-sm"
              >
                📸
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-red-600 hover:border-red-500 flex items-center justify-center transition-all shadow-sm"
              >
                ▶️
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600 flex items-center justify-center transition-all shadow-sm"
              >
                🎵
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center transition-all shadow-sm"
              >
                💼
              </a>
              <a
                href="https://wa.me/905445300481"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 flex items-center justify-center transition-all shadow-sm"
              >
                💬
              </a>
            </div>
          </div>

          {/* COLUMN 2: HIZLI MENÜ */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-white uppercase border-l-2 border-blue-500 pl-2">
              HIZLI MENÜ
            </h4>
            <ul className="space-y-2 font-sans text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><a href="#hakkimda" className="hover:text-white transition-colors">Hakkımda</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Hizmetler</a></li>
              <li><a href="#transformations" className="hover:text-white transition-colors">Danışan Dönüşümleri</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">SSS</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* COLUMN 3: HİZMETLER */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-white uppercase border-l-2 border-emerald-500 pl-2">
              HİZMETLER
            </h4>
            <ul className="space-y-2 font-sans text-sm text-slate-400">
              <li><Link href="/services/fitness-body-transformation" className="hover:text-white transition-colors">Fitness &amp; Vücut Dönüşümü</Link></li>
              <li><Link href="/services/athletic-performance" className="hover:text-white transition-colors">Atletik Performans</Link></li>
              <li><Link href="/services/functional-training" className="hover:text-white transition-colors">Fonksiyonel Antrenman</Link></li>
              <li><Link href="/services/pilates" className="hover:text-white transition-colors">Pilates</Link></li>
              <li><Link href="/services/medical-exercise" className="hover:text-white transition-colors">Medikal Egzersiz</Link></li>
              <li><Link href="/services/nutrition" className="hover:text-white transition-colors">Beslenme Danışmanlığı</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: DİJİTAL PLATFORMLAR (YAKINDA BADGES) */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-white uppercase border-l-2 border-amber-500 pl-2">
              DİJİTAL PLATFORMLAR
            </h4>
            <ul className="space-y-2 font-sans text-sm text-slate-400">
              <li className="flex items-center justify-between">
                <span>Akademi</span>
                <span className="font-mono text-[10px] bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-800">Yakında</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Egzersiz Kütüphanesi</span>
                <span className="font-mono text-[10px] bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-800">Yakında</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Hesaplayıcılar</span>
                <span className="font-mono text-[10px] bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-800">Yakında</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Bilimsel Blog</span>
                <span className="font-mono text-[10px] bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-800">Yakında</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Online Eğitim Platformu</span>
                <span className="font-mono text-[10px] bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-800">Yakında</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: İLETİŞİM */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-white uppercase border-l-2 border-blue-500 pl-2">
              İLETİŞİM
            </h4>
            <div className="space-y-2 font-sans text-xs text-slate-400">
              <div>📞 <a href="tel:+905445300481" className="hover:text-white transition-colors">+90 544 530 04 81</a></div>
              <div>✉️ <a href="mailto:pt.tuna61@gmail.com" className="hover:text-white transition-colors">pt.tuna61@gmail.com</a></div>
              <div>📍 Trabzon / Türkiye</div>
              <div>⏰ Pzt - Cmt: 08:00 - 21:30</div>

              <div className="pt-2">
                <a
                  href="https://wa.me/905445300481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>💬</span>
                  <span>WhatsApp İletişim</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL BAR & BACK TO TOP */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          
          <div>
            © 2026 TK Performance. Tüm hakları saklıdır.
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="hover:text-slate-300 transition-colors">KVKK</button>
            <button className="hover:text-slate-300 transition-colors">Gizlilik Politikası</button>
            <button className="hover:text-slate-300 transition-colors">Çerez Politikası</button>
            <button className="hover:text-slate-300 transition-colors">Kullanım Koşulları</button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Sayfa Yukarı Çık"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white border border-slate-800 transition-all flex items-center gap-1 text-xs font-extrabold uppercase hover:scale-105"
          >
            <span>YUKARI ÇIK</span>
            <span>⬆️</span>
          </button>

        </div>

      </div>
    </footer>
  );
};
