'use client';
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { siteConfig } from '@/config/site';

export default function IletisimPage() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-6xl mx-auto w-full">
        
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs text-[#1E90FF] font-bold tracking-widest uppercase bg-[#1E90FF]/10 px-3 py-1 rounded border border-[#1E90FF]/30">
            BİREBİR İLETİŞİM
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-3 uppercase tracking-wide">
            BİZE ULAŞIN
          </h1>
          <p className="text-base text-[#94A3B8] mt-2">
            Online koçluk, yüz yüze PT dersleri veya merak ettiğiniz her konuda bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* İLETİŞİM FORMU */}
          <div className="bg-[#111827] border border-white/10 p-8 rounded-2xl">
            <h3 className="font-display text-3xl text-white uppercase mb-6">MESAJ GÖNDERİN</h3>
            
            {!formSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Ad Soyad *</label>
                  <input type="text" required placeholder="Ahmet Yılmaz" className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none" />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">E-posta Adresi *</label>
                  <input type="email" required placeholder="ahmet@example.com" className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none" />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Mesajınız *</label>
                  <textarea rows={4} required placeholder="Sorunuzu yazınız..." className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none" />
                </div>
                <button type="submit" className="w-full bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-xs font-black uppercase tracking-wider py-3.5 rounded-xl shadow-lg">
                  MESAJI GÖNDER &rarr;
                </button>
              </form>
            ) : (
              <div className="bg-[#070B12] p-6 rounded-xl border border-emerald-500/40 text-center">
                <div className="text-4xl mb-2">✅</div>
                <h4 className="font-display text-2xl text-white">MESAJINIZ ALINDI</h4>
                <p className="text-xs text-[#94A3B8] font-mono mt-2">En kısa sürede e-posta adresiniz üzerinden geribildirim sağlanacaktır.</p>
              </div>
            )}
          </div>

          {/* İLETİŞİM BİLGİLERİ */}
          <div className="space-y-6">
            <div className="bg-[#111827] border border-white/10 p-6 rounded-2xl space-y-4 font-mono text-xs">
              <h3 className="font-display text-3xl text-white uppercase mb-4">DOĞRUDAN KANALLAR</h3>
              
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 bg-[#070B12] rounded-xl border border-white/5 hover:border-emerald-500 transition-colors"
              >
                <div>
                  <span className="text-[#94A3B8] block text-[10px]">WHATSAPP HATTI</span>
                  <span className="text-white font-bold text-sm">+{siteConfig.contact.whatsapp}</span>
                </div>
                <span className="text-emerald-400 font-bold">💬 İletişim &rarr;</span>
              </a>

              <a 
                href={`https://instagram.com/${siteConfig.contact.instagram}`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 bg-[#070B12] rounded-xl border border-white/5 hover:border-[#1E90FF] transition-colors"
              >
                <div>
                  <span className="text-[#94A3B8] block text-[10px]">INSTAGRAM</span>
                  <span className="text-white font-bold text-sm">@{siteConfig.contact.instagram}</span>
                </div>
                <span className="text-[#1E90FF] font-bold">📷 DM &rarr;</span>
              </a>

              <a 
                href={`mailto:${siteConfig.contact.email}`} 
                className="flex items-center justify-between p-4 bg-[#070B12] rounded-xl border border-white/5 hover:border-amber-400 transition-colors"
              >
                <div>
                  <span className="text-[#94A3B8] block text-[10px]">E-POSTA</span>
                  <span className="text-white font-bold text-sm">{siteConfig.contact.email}</span>
                </div>
                <span className="text-amber-400 font-bold">✉️ E-posta &rarr;</span>
              </a>
            </div>

            <div className="bg-[#111827] border border-white/10 p-6 rounded-2xl font-mono text-xs text-[#94A3B8]">
              <h4 className="text-white font-bold mb-2">LOCATION &amp; ADRES</h4>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>

        </div>

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
