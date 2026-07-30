import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { siteConfig } from '@/config/site';

export default function HakkimdaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-5xl mx-auto w-full">
        
        {/* HERO */}
        <div className="mb-12">
          <span className="font-mono text-xs text-[#1E90FF] font-bold tracking-widest uppercase bg-[#1E90FF]/10 px-3 py-1 rounded border border-[#1E90FF]/30">
            UZMANLIK &amp; KİMSENİN BİLMERİ
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-3 uppercase tracking-wide">
            TUNAHAN KESKİN HİKÂYESİ
          </h1>
          <p className="text-[#1E90FF] font-mono text-sm mt-2 font-bold uppercase">
            {siteConfig.roleTr}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* AKADEMİK & ANTREMAN GEÇMİŞİ */}
          <div className="md:col-span-2 space-y-6 text-[#D9D9D9] text-base leading-relaxed bg-[#111827] border border-white/10 p-8 rounded-2xl">
            <p className="text-xl text-white font-medium italic border-l-4 border-[#1E90FF] pl-4">
              &ldquo;Program hazırlamak kolaydır. Zor olan, o programı senin biyomekaniğine, geçmişine ve hedeflerine göre bilimsel esaslarla kurgulamaktır.&rdquo;
            </p>

            <p>
              Beden Eğitimi ve Spor Öğretmeni unvanına sahip olan Tunahan Keskin, Spor Yöneticiliği alanında yüksek lisans eğitimine devam etmekte ve 2. Kademe Fitness Antrenörü olarak çalışmalarını sürdürmektedir.
            </p>

            <p>
              Akademik spor bilimleri altyapısını, sahadaki yılların antrenman tecrübesiyle birleştirerek; kas geliştirme (hipertrofi), metabolik yağ yakımı, 1RM güç artırımı, atletik performans ve postür düzeltme alanlarında yüzlerce danışanına rehberlik etmektedir.
            </p>

            <p>
              Trabzon&apos;da yüz yüze birebir (PT) derslerin yanı sıra, Türkiye ve dünya genelinde online koçluk sistemiyle danışanlarının fiziksel potansiyellerini en üst seviyeye taşımaktadır.
            </p>
          </div>

          {/* DİPLOMA & SERTİFİKALAR */}
          <div className="bg-[#111827] border border-white/10 p-6 rounded-2xl h-fit space-y-4">
            <h3 className="font-display text-2xl text-white uppercase border-b border-white/10 pb-3">
              AKADEMİK UNVANLAR
            </h3>

            <ul className="space-y-3 font-mono text-xs text-[#94A3B8]">
              {siteConfig.credentials.map((cred, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#1E90FF]">🎓</span>
                  <span className="text-white font-bold">{cred}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10">
              <Link 
                href="/basvuru"
                className="block text-center bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-xs font-black uppercase tracking-wider py-3 rounded-lg shadow-lg"
              >
                🔥 KOÇLUĞA BAŞVUR
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
