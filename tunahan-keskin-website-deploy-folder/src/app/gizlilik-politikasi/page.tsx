import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />
      <main className="flex-1 py-16 px-6 max-w-4xl mx-auto w-full">
        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs p-4 rounded-xl mb-8">
          ⚠️ <strong>Hukuki Taslak Uyarısı:</strong> Bu metin bir taslaktır. Yayımlamadan önce bir hukuk uzmanı tarafından kontrol edilmelidir.
        </div>
        <h1 className="font-display text-4xl text-white uppercase mb-6">GİZLİLİK POLİTİKASI</h1>
        <div className="bg-[#111827] border border-white/10 p-8 rounded-2xl space-y-4 text-sm text-[#D9D9D9] leading-relaxed">
          <p>Tunahan Keskin Performance olarak kişisel verilerinizin güvenliğine büyük önem veriyoruz. Bu politika, sitemiz üzerinden toplanan verilerin nasıl kullanıldığını açıklamaktadır.</p>
          <h3 className="text-white font-bold font-mono">1. Toplanan Veriler</h3>
          <p>Koçluk başvuru formları ve iletişim formları üzerinden ad, e-posta, telefon ve fiziksel hedef bilgileri toplanabilir.</p>
          <h3 className="text-white font-bold font-mono">2. Verilerin Kullanımı</h3>
          <p>Toplanan bilgiler yalnızca kişiye özel antrenman ve beslenme programlarının hazırlanması amacıyla işlenir.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
