import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { ExerciseFilterSection } from '@/components/features/ExerciseFilterSection';
import { exercisesData } from '@/data/exercises';

export const metadata = {
  title: 'Egzersiz Kütüphanesi — Tunahan Keskin Performance & Health',
  description: 'Biyomekanik analizli, nizami hareket uygulamaları ve bilimsel antrenman kütüphanesi.',
};

export default function ExercisesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-7xl mx-auto w-full">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500 mb-8 bg-slate-50 py-2.5 px-4 rounded-xl border border-slate-200 w-fit">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-blue-600 font-bold">Egzersiz Kütüphanesi</span>
        </div>

        {/* HEADER */}
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs text-blue-600 font-extrabold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            SPOR BİLİMI &amp; BİYOMEKANİK KÜTÜPHANESİ
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase text-slate-900 tracking-tight">
            NİZAMİ <span className="text-blue-600">EGZERSİZ</span> REHBERİ
          </h1>
          <p className="text-base text-slate-600 font-sans leading-relaxed">
            Popüler ve bilimsel olarak en verimli 20+ hareketin biyomekanik analizleri, özel kapak görselleri, kas aktivasyon oranları ve rehber videoları.
          </p>
        </div>

        {/* FILTERABLE EXERCISES GRID */}
        <ExerciseFilterSection exercises={exercisesData} defaultOpen={true} />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
