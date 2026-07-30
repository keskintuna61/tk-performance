import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function SaglikSorumlulukReddiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />
      <main className="flex-1 py-16 px-6 max-w-4xl mx-auto w-full">
        <div className="bg-[#111827] border border-amber-400/40 p-8 rounded-2xl space-y-4">
          <div className="text-4xl">⚠️</div>
          <h1 className="font-display text-4xl text-white uppercase">SAĞLIK SORUMLULUK REDDİ (MEDICAL DISCLAIMER)</h1>
          <div className="text-sm text-[#D9D9D9] leading-relaxed space-y-3 font-sans">
            <p>
              Tunahan Keskin Performance bünyesinde sunulan tüm egzersiz programları, antrenman rehberleri, beslenme tavsiyeleri ve hesaplayıcı araçlar yalnızca genel eğitim ve bilgilendirme amaçlıdır.
            </p>
            <p>
              Sunulan içerikler hiçbir şekilde tıbbi teşhis, tedavi veya uzman hekim / klinik diyetisyen tavsiyesi yerine geçmez.
            </p>
            <p>
              Herhangi bir egzersiz veya beslenme programına başlamadan önce kronik bir rahatsızlığınız veya tıbbi geçmişiniz varsa öncelikle hekiminize danışmanız gerekmektedir.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
