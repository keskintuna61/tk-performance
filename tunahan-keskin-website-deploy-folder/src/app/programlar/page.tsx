'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { programsData } from '@/data/programs';

export default function ProgramlarPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('Tümü');
  const [selectedLevel, setSelectedLevel] = useState('Tümü');

  const filteredPrograms = programsData.filter(prog => {
    const matchesSearch = prog.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prog.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGoal = selectedGoal === 'Tümü' || prog.goal === selectedGoal;
    const matchesLevel = selectedLevel === 'Tümü' || prog.level === selectedLevel;
    return matchesSearch && matchesGoal && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-7xl mx-auto w-full">
        
        {/* PAGE HEADER */}
        <div className="mb-12">
          <span className="font-mono text-xs text-[#1E90FF] font-bold tracking-widest uppercase bg-[#1E90FF]/10 px-3 py-1 rounded border border-[#1E90FF]/30">
            DİJİTAL PROGRAM KATALOĞU
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-3 uppercase tracking-wide">
            PERFORMANS &amp; ANTRENMAN PROGRAMLARI
          </h1>
          <p className="text-base text-[#94A3B8] mt-2 max-w-2xl">
            Spor Bilimci Tunahan Keskin tarafından periyodize edilmiş, hedefe yönelik 10 farklı dijital antrenman rehberi.
          </p>
        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="bg-[#111827] border border-white/10 p-6 rounded-2xl mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Arama</label>
            <input 
              type="text" 
              placeholder="Program adı ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Hedefe Göre Filtrele</label>
            <select
              value={selectedGoal}
              onChange={(e) => setSelectedGoal(e.target.value)}
              className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
            >
              <option value="Tümü">Tüm Hedefler</option>
              <option value="Kas Kütlesi">Kas Kütlesi</option>
              <option value="Yağ Yakımı">Yağ Yakımı</option>
              <option value="Güç & 1RM">Güç &amp; 1RM</option>
              <option value="Atletik Performans">Atletik Performans</option>
              <option value="Postür & Mobilite">Postür &amp; Mobilite</option>
            </select>
          </div>

          <div>
            <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Seviyeye Göre Filtrele</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
            >
              <option value="Tümü">Tüm Seviyeler</option>
              <option value="Başlangıç">Başlangıç</option>
              <option value="Orta">Orta</option>
              <option value="İleri">İleri</option>
            </select>
          </div>
        </div>

        {/* PROGRAM GRID */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog) => (
              <div key={prog.id} className="bg-[#111827] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#1E90FF]/50 transition-all group">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-[#1E90FF]/10 text-[#1E90FF] font-mono text-[10px] font-bold px-2.5 py-1 rounded border border-[#1E90FF]/30 uppercase">
                      {prog.goal}
                    </span>
                    <span className="font-mono text-xs text-[#94A3B8]">{prog.durationWeeks} Hafta • {prog.daysPerWeek} Gün</span>
                  </div>
                  <h3 className="font-display text-2xl text-white group-hover:text-[#1E90FF] transition-colors mb-2">
                    {prog.name}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mb-6 line-clamp-3">
                    {prog.shortDesc}
                  </p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-mono text-2xl font-bold text-white">{prog.price} TL</span>
                    {prog.oldPrice && <span className="font-mono text-xs text-[#94A3B8] line-through">{prog.oldPrice} TL</span>}
                  </div>
                  <Link 
                    href={`/programlar/${prog.slug}`}
                    className="block text-center bg-[#0B1220] hover:bg-[#1E90FF] text-white font-mono text-xs font-bold py-3 rounded-lg border border-white/10 transition-colors uppercase"
                  >
                    Detayları Gör
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#111827] rounded-2xl border border-white/10">
            <p className="text-lg text-[#94A3B8] font-mono">Aradığınız kriterlere uygun program bulunamadı.</p>
          </div>
        )}

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
