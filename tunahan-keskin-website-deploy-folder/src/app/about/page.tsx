import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';

export const metadata: Metadata = {
  title: 'Hakkımızda — Spor Bilimci Tunahan Keskin & Vizyon | TK Performance',
  description: 'Beden Eğitimi Öğretmeni, Yüksek Lisans Öğrencisi ve 2. Kademe Fitness Antrenörü Tunahan Keskin’in akademik özgeçmişi, bilimsel metodolojisi ve platform vizyonu.',
  alternates: {
    canonical: 'https://tunahankeskin.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-5xl mx-auto w-full">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500 mb-8 bg-slate-50 py-2.5 px-4 rounded-xl border border-slate-200 w-fit">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-blue-600 font-bold">Hakkımızda</span>
        </div>

        {/* HERO SECTION */}
        <div className="premium-card p-8 sm:p-12 rounded-3xl space-y-6 mb-16 bg-slate-50 border border-slate-200 shadow-sm">
          <span className="font-mono text-xs text-blue-600 font-extrabold tracking-widest uppercase bg-blue-100/80 px-4 py-1.5 rounded-full border border-blue-200">
            SPOR BİLİMCİ &amp; PERFORMANS ANTRENÖRÜ
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-slate-900 uppercase tracking-tight">
            TUNAHAN KESKİN
          </h1>
          <p className="font-mono text-sm text-amber-700 font-bold italic">
            Beden Eğitimi ve Spor Öğretmeni | Spor Yöneticiliği Yüksek Lisans | 2. Kademe Fitness Antrenörü
          </p>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            TK Performance &amp; Health, rastgele antrenman programları veya kulaktan dolma fitness fikirleri yerine; %100 bilimsel araştırmalar, biyomekanik prensipler ve insan anatomisi fizyolojisi üzerine inşa edilmiş uluslararası bir performans platformudur.
          </p>
        </div>

        {/* CREDENTIALS & ACADEMIC BACKGROUND */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="premium-card p-6 rounded-2xl space-y-4 bg-white border border-slate-200">
            <h3 className="font-mono text-xs text-blue-600 font-extrabold uppercase tracking-wider">
              🎓 EĞİTİM &amp; AKADEMİK GEÇMİŞ
            </h3>
            <ul className="space-y-3 text-xs text-slate-600 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">●</span>
                <span><strong>Lisans:</strong> Beden Eğitimi ve Spor Öğretmenliği Unvanı</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">●</span>
                <span><strong>Yüksek Lisans:</strong> Spor Yöneticiliği Anabilim Dalı (Devam Ediyor)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">●</span>
                <span><strong>Uzmanlık:</strong> Biyomekanik, Hipertrofi Periodizasyonu, Atletik Performans</span>
              </li>
            </ul>
          </div>

          <div className="premium-card p-6 rounded-2xl space-y-4 bg-white border border-slate-200">
            <h3 className="font-mono text-xs text-amber-700 font-extrabold uppercase tracking-wider">
              📜 SERTİFİKALAR &amp; YETKİNLİKLER
            </h3>
            <ul className="space-y-3 text-xs text-slate-600 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>2. Kademe Fitness Antrenörü:</strong> Resmi Federasyon Onaylı</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>Atletik Performans &amp; Kondisyonerlik:</strong> VBT ve Yük Yönetimi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>Postür &amp; Medikal Egzersiz:</strong> Kinesiyolojik Değerlendirme</span>
              </li>
            </ul>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="premium-card p-6 rounded-2xl space-y-3 bg-white border border-slate-200">
            <h3 className="font-display text-2xl text-slate-900 uppercase">VİZYONUMUZ</h3>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Türkiye ve dünya genelinde, bireylerin ve sporcuların kulaktan dolma bilgilere maruz kalmadan; tamamen veriye dayalı, ölçülebilir ve koruyucu sağlık prensipleriyle performans geliştirebilecekleri en güvenilir dijital performans markası olmak.
            </p>
          </div>

          <div className="premium-card p-6 rounded-2xl space-y-3 bg-white border border-slate-200">
            <h3 className="font-display text-2xl text-slate-900 uppercase">MİSYONUMUZ</h3>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Her bireyin biyomekanik ve metabolik ihtiyacının benzersiz olduğunu kabul ederek; kişiselleştirilmiş antrenman, beslenme, postür ve performans protokolleriyle sürdürülebilir yaşam kalitesi kazandırmak.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="premium-card rounded-3xl p-10 text-center space-y-6 bg-slate-900 text-white border border-slate-800 shadow-2xl">
          <h2 className="font-display text-3xl sm:text-4xl text-white uppercase">
            BİLİMSEL YOLCULUĞUNUZA BUGÜN BAŞLAYIN
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-black uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-blue-500/30 transition-all"
          >
            <span>🚀</span>
            <span>YOLCULUĞUNU BAŞLAT</span>
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
