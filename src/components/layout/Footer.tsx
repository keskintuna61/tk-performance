import React from 'react';
import Link from 'next/link';
import { navigationLinks, legalLinks } from '@/data/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        
        {/* BRAND COLUMN */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-display text-2xl font-bold">
              TK
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2.5xl tracking-tight text-white leading-none">
                TK PERFORMANCE
              </span>
              <span className="font-mono text-[10px] font-extrabold text-blue-400 tracking-widest uppercase mt-0.5">
                PERFORMANCE &amp; HEALTH
              </span>
            </div>
          </div>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-sm">
            Spor Bilimci Tunahan Keskin rehberliğinde; performans, beslenme, pilates, medikal egzersiz ve atletik kapasiteyi %100 bilimsel yöntemlerle geliştiren premium sağlık platformu.
          </p>

          <div className="font-mono text-sm text-slate-300 space-y-1.5 pt-2">
            <div>📍 <strong>Merkez:</strong> Trabzon, Türkiye</div>
            <div>✉️ <strong>E-Posta:</strong> pt.tuna61@gmail.com</div>
            <div>📱 <strong>Instagram:</strong> @tunahankeskin_pt</div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-3 font-mono text-sm">
          <h4 className="font-display text-xl text-white uppercase tracking-wider">PLATFORM</h4>
          <ul className="space-y-2.5 text-slate-300">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blue-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div className="space-y-3 font-mono text-sm">
          <h4 className="font-display text-xl text-white uppercase tracking-wider">HİZMET ALANLARI</h4>
          <ul className="space-y-2.5 text-slate-300">
            <li><Link href="/services/fitness-body-transformation" className="hover:text-blue-400">Fitness Dönüşümü</Link></li>
            <li><Link href="/services/nutrition-dietetics" className="hover:text-blue-400">Sporcu Beslenmesi</Link></li>
            <li><Link href="/services/athletic-performance" className="hover:text-blue-400">Atletik Performans</Link></li>
            <li><Link href="/services/pilates" className="hover:text-blue-400">Pilates (Mat &amp; Reformer)</Link></li>
            <li><Link href="/services/medical-exercise" className="hover:text-blue-400">Medikal Egzersiz</Link></li>
            <li><Link href="/services/online-coaching" className="hover:text-blue-400">Online Koçluk</Link></li>
          </ul>
        </div>

        {/* LEGAL LINKS */}
        <div className="space-y-3 font-mono text-sm">
          <h4 className="font-display text-xl text-white uppercase tracking-wider">YASAL &amp; ŞARTLAR</h4>
          <ul className="space-y-2.5 text-slate-300">
            {legalLinks.slice(0, 5).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blue-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between font-mono text-sm text-slate-400 gap-4">
        <div>
          © 2026 Tunahan Keskin Performance &amp; Health. Tüm Hakları Saklıdır.
        </div>
        <div className="flex gap-4">
          <Link href="/gizlilik-politikasi" className="hover:text-white">Gizlilik</Link>
          <span>•</span>
          <Link href="/kvkk" className="hover:text-white">KVKK</Link>
          <span>•</span>
          <Link href="/saglik-sorumluluk-reddi" className="hover:text-white">Sağlık Beyanı</Link>
        </div>
      </div>
    </footer>
  );
};
