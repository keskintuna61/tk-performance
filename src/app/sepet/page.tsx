'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function SepetPage() {
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  // Demo cart item
  const cartItems = [
    {
      id: "prog-2",
      name: "8 Haftalık Kas Kazanımı & Hipertrofi",
      price: 890,
      quantity: 1
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = Math.max(0, subtotal - discount);

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'TUNAHAN10') {
      setDiscount(subtotal * 0.1);
      alert('10% İndirim kuponu uygulandı! 🎉');
    } else {
      alert('Geçersiz kupon kodu. (Örnek: TUNAHAN10)');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-4xl mx-auto w-full">
        <h1 className="font-display text-5xl text-white uppercase tracking-wide mb-8">
          ALIVERİŞ SEPETİNİZ
        </h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-[#111827] border border-white/10 p-6 rounded-2xl flex justify-between items-center">
                  <div>
                    <h3 className="font-display text-2xl text-white mb-1">{item.name}</h3>
                    <div className="font-mono text-xs text-[#94A3B8]">Dijital Program • Anında İndirme</div>
                  </div>
                  <div className="font-mono text-xl font-bold text-[#1E90FF]">
                    {item.price} TL
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#111827] border border-white/10 p-6 rounded-2xl h-fit space-y-6">
              <h3 className="font-display text-2xl text-white uppercase border-b border-white/10 pb-3">SİPARİŞ ÖZETİ</h3>
              
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between text-[#94A3B8]">
                  <span>Ara Toplam</span>
                  <span>{subtotal} TL</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>İndirim</span>
                    <span>-{discount} TL</span>
                  </div>
                )}
                <div className="flex justify-between text-white text-base font-bold pt-2 border-t border-white/10">
                  <span>Genel Toplam</span>
                  <span className="text-[#1E90FF]">{total} TL</span>
                </div>
              </div>

              {/* COUPON */}
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">İndirim Kodu</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="TUNAHAN10"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="w-full bg-[#070B12] border border-white/10 rounded-lg p-2.5 text-xs text-white uppercase focus:border-[#1E90FF] outline-none"
                  />
                  <button 
                    onClick={applyCoupon}
                    className="bg-[#0B1220] hover:bg-[#1E90FF] text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg border border-white/10 transition-colors"
                  >
                    Uygula
                  </button>
                </div>
              </div>

              <Link
                href="/odeme"
                className="block text-center bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-xs font-black uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-colors"
              >
                💳 ÖDEMEYE GEÇ &rarr;
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-[#111827] border border-white/10 p-12 rounded-2xl text-center">
            <p className="text-[#94A3B8] font-mono mb-4">Sepetinizde henüz ürün bulunmuyor.</p>
            <Link href="/programlar" className="inline-block bg-[#1E90FF] text-white font-mono text-xs font-bold px-6 py-3 rounded-lg">
              Programları İncele &rarr;
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
