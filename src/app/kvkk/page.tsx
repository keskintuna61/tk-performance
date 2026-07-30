import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function KvkkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />
      <main className="flex-1 py-16 px-6 max-w-4xl mx-auto w-full">
        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs p-4 rounded-xl mb-8">
          ⚠️ <strong>Hukuki Taslak Uyarısı:</strong> Bu metin bir taslaktır. Yayımlamadan önce bir hukuk uzmanı tarafından kontrol edilmelidir.
        </div>
        <h1 className="font-display text-4xl text-white uppercase mb-6">KVKK AYDINLATMA METNİ</h1>
        <div className="bg-[#111827] border border-white/10 p-8 rounded-2xl space-y-4 text-sm text-[#D9D9D9] leading-relaxed">
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca kişisel verileriniz veri sorumlusu sıfatıyla işlenmektedir.</p>
          <h3 className="text-white font-bold font-mono">Veri İşleme Amaçları</h3>
          <p>Spor koçluğu, antrenman programlaması ve iletişim kanallarının yürütülmesi.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
