'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';

export default function HesaplayicilarPage() {
  const [activeTab, setActiveTab] = useState<'tdee' | '1rm' | 'bmi'>('tdee');

  // TDEE State
  const [height, setHeight] = useState('178');
  const [weight, setWeight] = useState('75');
  const [age, setAge] = useState('24');
  const [goal, setGoal] = useState('kas');
  const [tdeeResult, setTdeeResult] = useState<any>(null);

  // 1RM State
  const [liftWeight, setLiftWeight] = useState('80');
  const [liftReps, setLiftReps] = useState('5');
  const [rmResult, setRmResult] = useState<any>(null);

  // BMI State
  const [bmiHeight, setBmiHeight] = useState('178');
  const [bmiWeight, setBmiWeight] = useState('75');
  const [bmiResult, setBmiResult] = useState<any>(null);

  const calcTdee = () => {
    const h = parseFloat(height) || 178;
    const w = parseFloat(weight) || 75;
    const a = parseFloat(age) || 24;

    // Mifflin-St Jeor
    const bmr = 10 * w + 6.25 * h - 5 * a + 5;
    let tdee = Math.round(bmr * 1.55);
    let protein = Math.round(w * 2.0);
    let fat = Math.round(w * 0.9);

    if (goal === 'kas') tdee += 350;
    else if (goal === 'yag') { tdee -= 450; protein = Math.round(w * 2.2); }

    const remainingCal = tdee - (protein * 4 + fat * 9);
    const carb = Math.max(100, Math.round(remainingCal / 4));

    setTdeeResult({ tdee, protein, carb, fat });
  };

  const calc1RM = () => {
    const w = parseFloat(liftWeight) || 80;
    const r = parseFloat(liftReps) || 5;
    const max = Math.round(w * (1 + r / 30));
    setRmResult({ max, rm90: Math.round(max * 0.9), rm80: Math.round(max * 0.8) });
  };

  const calcBMI = () => {
    const h = parseFloat(bmiHeight) || 178;
    const w = parseFloat(bmiWeight) || 75;
    const bmi = (w / ((h / 100) * (h / 100))).toFixed(1);
    setBmiResult({ bmi });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <span className="font-mono text-xs text-[#1E90FF] font-bold tracking-widest uppercase bg-[#1E90FF]/10 px-3 py-1 rounded border border-[#1E90FF]/30">
            ÜCRETSİZ HESAPLAYICILAR
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-3 uppercase tracking-wide">
            BİLİMSEL SPOR HESAPLAYICILARI
          </h1>
          <p className="text-base text-[#94A3B8] mt-2 max-w-2xl">
            Mifflin-St Jeor ve Epley formülleri ile kalori, 1RM kaldırış gücü ve BMI hesaplamanızı yapın.
          </p>
        </div>

        {/* TABS */}
        <div className="flex gap-3 mb-8 overflow-x-auto border-b border-white/10 pb-4 font-mono text-xs font-bold">
          <button
            onClick={() => setActiveTab('tdee')}
            className={`px-6 py-3 rounded-lg transition-all ${activeTab === 'tdee' ? 'bg-[#1E90FF] text-white' : 'bg-[#111827] text-[#94A3B8]'}`}
          >
            🧮 Kalori &amp; Makro (TDEE)
          </button>
          <button
            onClick={() => setActiveTab('1rm')}
            className={`px-6 py-3 rounded-lg transition-all ${activeTab === '1rm' ? 'bg-[#1E90FF] text-white' : 'bg-[#111827] text-[#94A3B8]'}`}
          >
            🏋️‍♂️ 1RM Max Kaldırış
          </button>
          <button
            onClick={() => setActiveTab('bmi')}
            className={`px-6 py-3 rounded-lg transition-all ${activeTab === 'bmi' ? 'bg-[#1E90FF] text-white' : 'bg-[#111827] text-[#94A3B8]'}`}
          >
            🎯 BMI Endeksi
          </button>
        </div>

        {/* TAB 1: TDEE */}
        {activeTab === 'tdee' && (
          <div className="bg-[#111827] border border-white/10 p-8 rounded-2xl space-y-6">
            <h3 className="font-display text-3xl text-white uppercase">GÜNLÜK KALORİ &amp; MAKRO HESAPLAMA (Mifflin-St Jeor)</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Boy (cm)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white" />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Kilo (kg)</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white" />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Yaş</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white" />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Hedef</label>
                <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white">
                  <option value="kas">Kas Kazanımı</option>
                  <option value="yag">Yağ Yakımı</option>
                  <option value="koruma">Form Koruma</option>
                </select>
              </div>
            </div>

            <button onClick={calcTdee} className="w-full bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-xs font-black uppercase tracking-wider py-3.5 rounded-xl shadow-lg">
              🔥 HESAPLA
            </button>

            {tdeeResult && (
              <div className="bg-[#070B12] p-6 rounded-xl border border-[#1E90FF]/30 grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-mono">
                <div><span className="text-[#94A3B8] block text-xs">HEDEF KALORİ</span> <span className="text-2xl font-bold text-[#1E90FF]">{tdeeResult.tdee} kcal</span></div>
                <div><span className="text-[#94A3B8] block text-xs">PROTEİN</span> <span className="text-2xl font-bold text-emerald-400">{tdeeResult.protein} g</span></div>
                <div><span className="text-[#94A3B8] block text-xs">KARBONHİDRAT</span> <span className="text-2xl font-bold text-amber-400">{tdeeResult.carb} g</span></div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: 1RM */}
        {activeTab === '1rm' && (
          <div className="bg-[#111827] border border-white/10 p-8 rounded-2xl space-y-6">
            <h3 className="font-display text-3xl text-white uppercase">1RM MAKSİMUM KALDIRIŞ TAHMİNİ (Epley Formülü)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Ağırlık (kg)</label>
                <input type="number" value={liftWeight} onChange={(e) => setLiftWeight(e.target.value)} className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white" />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Tekrar Sayısı</label>
                <input type="number" value={liftReps} onChange={(e) => setLiftReps(e.target.value)} className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white" />
              </div>
            </div>

            <button onClick={calc1RM} className="w-full bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-xs font-black uppercase tracking-wider py-3.5 rounded-xl shadow-lg">
              🏋️‍♂️ 1RM HESAPLA
            </button>

            {rmResult && (
              <div className="bg-[#070B12] p-6 rounded-xl border border-[#1E90FF]/30 grid grid-cols-3 gap-4 text-center font-mono">
                <div><span className="text-[#94A3B8] block text-xs">1RM MAX</span> <span className="text-2xl font-bold text-[#1E90FF]">{rmResult.max} kg</span></div>
                <div><span className="text-[#94A3B8] block text-xs">%90 SET</span> <span className="text-2xl font-bold text-white">{rmResult.rm90} kg</span></div>
                <div><span className="text-[#94A3B8] block text-xs">%80 SET</span> <span className="text-2xl font-bold text-white">{rmResult.rm80} kg</span></div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: BMI */}
        {activeTab === 'bmi' && (
          <div className="bg-[#111827] border border-white/10 p-8 rounded-2xl space-y-6">
            <h3 className="font-display text-3xl text-white uppercase">VÜCUT KİTLE ENDEKSİ (BMI)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Boy (cm)</label>
                <input type="number" value={bmiHeight} onChange={(e) => setBmiHeight(e.target.value)} className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white" />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Kilo (kg)</label>
                <input type="number" value={bmiWeight} onChange={(e) => setBmiWeight(e.target.value)} className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white" />
              </div>
            </div>

            <button onClick={calcBMI} className="w-full bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-xs font-black uppercase tracking-wider py-3.5 rounded-xl shadow-lg">
              🎯 BMI HESAPLA
            </button>

            {bmiResult && (
              <div className="bg-[#070B12] p-6 rounded-xl border border-[#1E90FF]/30 text-center font-mono">
                <span className="text-[#94A3B8] block text-xs">BMI SKORUNUZ</span>
                <span className="text-4xl font-bold text-amber-400">{bmiResult.bmi}</span>
              </div>
            )}
          </div>
        )}

        {/* DISCLAIMER */}
        <div className="mt-8 bg-[#111827] border border-white/10 p-4 rounded-xl text-center font-mono text-xs text-[#94A3B8]">
          ⚠️ Bu hesaplamalar bilgilendirme ve tahmini spor rehberliği amaçlıdır. Klinik tanı niteliği taşımaz.
        </div>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
