'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function OdemePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("Lütfen Mesafeli Satış Sözleşmesi ve KVKK Onayını kabul ediniz.");
      return;
    }
    router.push('/siparis-basarili');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-4xl mx-auto w-full">
        <h1 className="font-display text-5xl text-white uppercase tracking-wide mb-8">
          GÜVENLİ ÖDEME (DEMO MODU)
        </h1>

        <div className="bg-[#111827] border border-blue-500/30 text-blue-300 text-xs font-mono p-4 rounded-xl mb-8">
          ℹ️ <strong>Demo Ödeme Modu:</strong> Gerçek kart bilginizi girmeyiniz. Aşağıdaki &quot;Siparişi Tamamla&quot; butonuna basarak sipariş onay akışını test edebilirsiniz.
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* MÜŞTERİ VE FATURA BİLGİLERİ */}
          <div className="md:col-span-2 bg-[#111827] border border-white/10 p-6 rounded-2xl space-y-4">
            <h3 className="font-display text-2xl text-white uppercase mb-4">FATURA &amp; İLETİŞİM BİLGİLERİ</h3>
            
            <div>
              <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Ad Soyad *</label>
              <input 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ahmet Yılmaz"
                className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">E-posta *</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ahmet@example.com"
                  className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Telefon *</label>
                <input 
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0555 123 45 67"
                  className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Fatura Adresi</label>
              <textarea 
                rows={2}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Adres bilgisi..."
                className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
              />
            </div>

            {/* DEMO KART ALANI PLACEHOLDER */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="font-mono text-xs text-[#1E90FF] font-bold uppercase mb-3">💳 KART BİLGİLERİ (DEMO SIMULATION)</h4>
              <div className="bg-[#070B12] p-4 rounded-xl border border-white/10 space-y-3 font-mono text-xs">
                <input type="text" disabled value="4543 **** **** 1234" className="w-full bg-[#111827] border border-white/10 p-2.5 rounded text-white" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" disabled value="12 / 28" className="w-full bg-[#111827] border border-white/10 p-2.5 rounded text-white" />
                  <input type="text" disabled value="***" className="w-full bg-[#111827] border border-white/10 p-2.5 rounded text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* SİPARİŞ ÖZETİ VE ONAY */}
          <div className="bg-[#111827] border border-white/10 p-6 rounded-2xl h-fit space-y-6">
            <h3 className="font-display text-2xl text-white uppercase border-b border-white/10 pb-3">ÖDEME ÖZETİ</h3>
            
            <div className="font-mono text-xs space-y-2">
              <div className="flex justify-between text-[#94A3B8]">
                <span>Ürün</span>
                <span>Kas Kazanımı</span>
              </div>
              <div className="flex justify-between text-white text-base font-bold pt-2 border-t border-white/10">
                <span>Toplam</span>
                <span className="text-[#1E90FF]">890 TL</span>
              </div>
            </div>

            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.agreement}
                  onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                  className="mt-1"
                />
                <span className="text-[11px] text-[#94A3B8]">
                  Mesafeli Satış Sözleşmesi, Ön Bilgilendirme Formu ve KVKK Aydınlatma Metnini kabul ediyorum.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-xs font-black uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-colors"
            >
              🔒 SİPARİŞİ TAMAMLA &rarr;
            </button>
          </div>

        </form>
      </main>

      <Footer />
    </div>
  );
}
