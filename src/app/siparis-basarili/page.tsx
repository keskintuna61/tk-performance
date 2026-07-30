import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';

export default function SiparisBasariliPage() {
  const orderNumber = "TK-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-2xl mx-auto w-full text-center">
        <div className="bg-[#111827] border border-emerald-500/40 rounded-2xl p-12 shadow-2xl">
          <div className="text-6xl mb-4">✅</div>
          
          <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/30">
            ÖDEME BAŞARILI
          </span>

          <h1 className="font-display text-4xl md:text-5xl text-white mt-4 uppercase">
            SİPARİŞİNİZ ALINDI!
          </h1>

          <div className="my-6 bg-[#070B12] p-4 rounded-xl border border-white/10 font-mono text-xs text-[#94A3B8] inline-block">
            SİPARİŞ NUMARASI: <strong className="text-white">{orderNumber}</strong>
          </div>

          <p className="text-sm text-[#94A3B8] mb-8 leading-relaxed">
            Satın aldığınız dijital program PDF rehberi ve egzersiz bağlantıları belirtmiş olduğunuz e-posta adresinize iletilmiştir. Herhangi bir sorunuz olursa WhatsApp destek hattımızdan bize ulaşabilirsiniz.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg"
            >
              Ana Sayfaya Dön
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Merhaba%20Tunahan%20Hocam,%20${orderNumber}%20numaralı%20siparişim%20hakkında%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg"
            >
              💬 WhatsApp Destek Al
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
