'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/data/navigation';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="glass-nav sticky top-0 z-50 transition-all duration-300 shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between gap-6">
        
        {/* LOGO & BRANDING AREA WITH OPTIMAL SPACING */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-display text-2xl font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            TK
          </div>
          <div className="flex flex-col justify-center space-y-1">
            <span className="font-display text-2.5xl tracking-normal text-slate-900 leading-none">
              TK PERFORMANCE
            </span>
            <span className="font-mono text-[11px] font-extrabold text-blue-600 tracking-wider uppercase">
              PERFORMANCE &amp; HEALTH
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS (NORMAL LETTER SPACING & GENEROUS GAPS) */}
        <div className="hidden xl:flex items-center gap-8 font-mono text-[15px] font-bold tracking-normal">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-1.5 whitespace-nowrap ${
                  isActive ? 'text-blue-600 font-extrabold' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA BUTTON (SINGLE LINE & AMPLE PADDING) */}
        <div className="hidden sm:flex items-center shrink-0">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-[16px] font-extrabold uppercase tracking-wide px-7 py-3.5 rounded-xl shadow-md shadow-blue-500/20 hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2.5"
          >
            <span>🚀</span>
            <span>Yolculuğunu Başlat</span>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 text-slate-800 hover:text-blue-600 font-bold focus:outline-none text-2xl"
          aria-label="Menüyü Aç/Kapat"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE / TABLET DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 font-mono text-base font-bold">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-slate-800 hover:text-blue-600 border-b border-slate-100 last:border-none"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-200">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-blue-600 text-white py-4 rounded-xl font-extrabold text-base shadow-md"
            >
              🚀 Yolculuğunu Başlat
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
