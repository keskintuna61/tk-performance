import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';

export const metadata: Metadata = {
  title: 'İletişim & Randevu — TK Performance & Health',
  description: 'Tunahan Keskin Performance & Health ile iletişime geçin. Trabzon PT stüdyosu, online koçluk başvurusu ve direkt WhatsApp kanalı.',
  alternates: {
    canonical: 'https://tunahankeskin.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-6xl mx-auto w-full">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500 mb-8 bg-slate-50 py-2.5 px-4 rounded-xl border border-slate-200 w-fit">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-blue-600 font-bold">İletişim</span>
        </div>

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-blue-600 font-extrabold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            YOLCULUĞUNU BAŞLAT
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase text-slate-900 tracking-tight">
            İLETİŞİM &amp; RANDEVU
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            İhtiyacınıza en uygun koçluk, beslenme, performans testi veya PT hizmeti için formu doldurun ya da doğrudan WhatsApp üzerinden iletişime geçin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* LEFT FORM */}
          <div className="lg:col-span-7 premium-card p-8 rounded-3xl space-y-6 bg-white border border-slate-200 shadow-sm">
            <h3 className="font-display text-2xl text-slate-900 uppercase border-l-4 border-blue-600 pl-3">
              BAŞVURU &amp; RANDEVU FORMU
            </h3>

            <form className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-600 mb-1 font-bold">AD SOYAD *</label>
                <input
                  type="text"
                  placeholder="Adınız ve Soyadınız"
                  required
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-600 mb-1 font-bold">TELEFON (WHATSAPP) *</label>
                  <input
                    type="tel"
                    placeholder="05XX XXX XX XX"
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1 font-bold">E-POSTA</label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-bold">İLGİLENDİĞİNİZ HİZMET *</label>
                <select className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
                  <option>Fitness &amp; Vücut Dönüşümü</option>
                  <option>Sporcu Beslenmesi &amp; Diyet</option>
                  <option>Atletik Performans &amp; Kondisyon</option>
                  <option>Pilates (Mat &amp; Reformer)</option>
                  <option>Fonksiyonel Antrenman</option>
                  <option>Medikal Egzersiz &amp; Postür Düzeltimi</option>
                  <option>Performans Testleri &amp; Analiz</option>
                  <option>Polis &amp; Askeri Parkur Hazırlığı</option>
                  <option>Online Koçluk Sistemi</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-bold">HEDEFİNİZ &amp; MESAJINIZ</label>
                <textarea
                  rows={4}
                  placeholder="Hedefleriniz, mevcut spor geçmişiniz ve sormak istedikleriniz..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-black uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all"
              >
                🚀 BAŞVURUYU GÖNDER &rarr;
              </button>
            </form>
          </div>

          {/* RIGHT CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            {/* DIRECT WHATSAPP */}
            <div className="premium-card p-6 rounded-3xl space-y-3 border border-emerald-300 bg-emerald-50">
              <span className="font-mono text-[10px] text-emerald-800 font-extrabold uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                HIZLI BİLGİ HATTI
              </span>
              <h3 className="font-display text-2xl text-slate-900 uppercase">ANINDA WHATSAPP İLETİŞİM</h3>
              <p className="text-xs text-slate-600 font-sans">
                Randevu ve hızlı sorularınız için direkt Tunahan Keskin WhatsApp hattına ulaşın.
              </p>
              <a
                href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20TK%20Performance%20üzerinden%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md w-full justify-center transition-all"
              >
                <span>💬</span>
                <span>WhatsApp İle Bağlan</span>
              </a>
            </div>

            {/* LOCATION & HOURS */}
            <div className="premium-card p-6 rounded-3xl space-y-4 bg-white border border-slate-200 shadow-sm">
              <h3 className="font-mono text-xs text-blue-600 font-extrabold uppercase tracking-wider">
                📍 MERKEZ &amp; LOKASYON
              </h3>
              <div className="space-y-2 text-xs text-slate-600 font-mono">
                <div><strong>Stüdyo:</strong> Trabzon, Türkiye</div>
                <div><strong>E-Posta:</strong> pt.tuna61@gmail.com</div>
                <div><strong>Instagram:</strong> @tunahankeskin_pt</div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1">
                <span className="font-mono text-[10px] text-amber-700 font-bold uppercase">⏰ ÇALIŞMA SAATLERİ</span>
                <div className="text-xs text-slate-600 font-mono">Pazartesi — Cumartesi: 08:00 - 21:30</div>
                <div className="text-xs text-slate-600 font-mono">Pazar: Randevu Usulü</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
