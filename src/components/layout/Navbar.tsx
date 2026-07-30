'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/data/navigation';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="glass-nav sticky top-0 z-50 transition-all duration-300 shadow-sm border-b border-slate-200 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-20 sm:h-22 flex items-center justify-between gap-4">
        
        {/* LOGO & BRANDING AREA (SHRINK-0) */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-display text-2xl font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
            TK
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display text-xl sm:text-2xl tracking-normal text-slate-900 leading-none whitespace-nowrap">
              TK PERFORMANCE
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] font-extrabold text-blue-600 tracking-wider uppercase whitespace-nowrap mt-0.5">
              PERFORMANCE &amp; HEALTH
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS (SWITCHES TO HAMBURGER BELOW 1200PX / 2XL) */}
        <div className="hidden 2xl:flex items-center gap-7 font-mono text-[14px] font-bold tracking-normal">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-1 whitespace-nowrap ${
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

        {/* LAPTOP NAV LINKS (1200px - 1535px COMPACT GAPS) */}
        <div className="hidden xl:flex 2xl:hidden items-center gap-4.5 font-mono text-[13.5px] font-bold tracking-tight">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-1 whitespace-nowrap ${
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

        {/* CTA BUTTON (SINGLE LINE, FIT PADDING, SHRINK-0) */}
        <div className="hidden xl:flex items-center shrink-0">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-[14.5px] font-extrabold uppercase tracking-wide px-5 py-3 rounded-xl shadow-md shadow-blue-500/20 hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span>🚀</span>
            <span>Yolculuğunu Başlat</span>
          </Link>
        </div>

        {/* MOBILE & TABLET / LAPTOP HAMBURGER MENU TOGGLE (SHOWN BELOW 1200PX) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-slate-800 hover:text-blue-600 font-bold focus:outline-none text-2xl shrink-0"
          aria-label="Menüyü Aç/Kapat"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE / LAPTOP DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-3 font-mono text-base font-bold animate-fadeIn">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 hover:text-blue-600 border-b border-slate-100 last:border-none"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-200">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-blue-600 text-white py-3.5 rounded-xl font-extrabold text-base shadow-md"
            >
              🚀 Yolculuğunu Başlat
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
