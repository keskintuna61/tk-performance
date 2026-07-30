import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { programsData } from '@/data/programs';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProgramDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const program = programsData.find(p => p.slug === resolvedParams.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-5xl mx-auto w-full">
        
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#94A3B8] mb-8">
          <Link href="/" className="hover:text-white">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/programlar" className="hover:text-white">Programlar</Link>
          <span>/</span>
          <span className="text-[#1E90FF]">{program.name}</span>
        </div>

        {/* HERO SECTION */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[#1E90FF]/10 text-[#1E90FF] font-mono text-xs font-bold px-3 py-1 rounded border border-[#1E90FF]/30 uppercase">
              {program.goal}
            </span>
            <span className="bg-amber-400/10 text-amber-400 font-mono text-xs font-bold px-3 py-1 rounded border border-amber-400/30 uppercase">
              {program.level} SEVİYE
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-wide mb-4">
            {program.name}
          </h1>

          <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
            {program.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
            <div>
              <div className="font-mono text-xs text-[#94A3B8] uppercase">Program Ücreti</div>
              <div className="font-mono text-4xl font-bold text-white">
                {program.price} TL {program.oldPrice && <span className="text-sm text-[#94A3B8] line-through ml-2">{program.oldPrice} TL</span>}
              </div>
            </div>

            <Link
              href="/odeme"
              className="bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-sm font-black uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-blue-500/25"
            >
              🛒 SEPETE EKLE &amp; SATIN AL
            </Link>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* HEDEFLER & HEDEF KİTLE */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
            <h3 className="font-display text-2xl text-white uppercase mb-4">KİMLER İÇİN UYGUN?</h3>
            <ul className="space-y-3 text-sm text-[#94A3B8]">
              {program.targetAudience.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#1E90FF] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAM ÖZELLİKLERİ */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
            <h3 className="font-display text-2xl text-white uppercase mb-4">PROGRAM İÇERİĞİ</h3>
            <ul className="space-y-3 text-sm text-[#94A3B8]">
              {program.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ÖRNEK ANTRENMAN ŞABLONU */}
        {program.sampleWorkout && program.sampleWorkout.length > 0 && (
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 mb-12">
            <h3 className="font-display text-3xl text-white uppercase mb-6">ÖRNEK ANTRENMAN DÜZENİ</h3>
            {program.sampleWorkout.map((w, idx) => (
              <div key={idx}>
                <div className="font-mono text-sm text-[#1E90FF] font-bold mb-4 uppercase">{w.day}</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-[#94A3B8]">
                        <th className="p-3">HAREKET ADI</th>
                        <th className="p-3 text-center">SET</th>
                        <th className="p-3 text-center">TEKRAR</th>
                        <th className="p-3 text-center">DİNLENME</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white">
                      {w.exercises.map((ex, exIdx) => (
                        <tr key={exIdx}>
                          <td className="p-3 font-bold">{ex.name}</td>
                          <td className="p-3 text-center">{ex.sets}</td>
                          <td className="p-3 text-center">{ex.reps}</td>
                          <td className="p-3 text-center text-[#94A3B8]">{ex.rest}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
