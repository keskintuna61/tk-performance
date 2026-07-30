import React from 'react';
import Link from 'next/link';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { pricingTiersData } from '@/data/pricing';
import { siteConfig } from '@/config/site';

export default function OnlineKoclukPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-b border-white/10">
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-[#1E90FF] font-bold tracking-widest uppercase bg-[#1E90FF]/10 px-3 py-1 rounded border border-[#1E90FF]/30 mb-4 inline-block">
              ONLINE KOÇLUK SİSTEMİ
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wide mb-6">
              BİREBİR AKADEMİK <span className="text-[#1E90FF]">BİLİMSEL KOÇLUK</span>
            </h1>
            <p className="text-lg text-[#94A3B8] leading-relaxed mb-8">
              Rastgele hazır şablonlar değil; senin biyomekaniğine, geçmişine ve yaşam tempona göre hazırlanan %100 kişisel antrenman ve esnek beslenme takibi.
            </p>
            <Link
              href="/basvuru"
              className="inline-block bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-sm font-black uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-blue-500/25"
            >
              🔥 KOÇLUK BAŞVURUSUNA BAŞLA
            </Link>
          </div>
        </section>

        {/* PAKETLER */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-amber-400 font-bold tracking-widest uppercase bg-amber-400/10 px-3 py-1 rounded border border-amber-400/30">HEDEFE UYGUN SEÇENEKLER</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-3 uppercase tracking-wide">KOÇLUK PAKETLERİ VE ÖRNEK FİYATLANDIRMA</h2>
            <p className="text-xs font-mono text-[#94A3B8] mt-2">*Aşağıdaki fiyatlar örnek yönetilebilir verilerdir.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiersData.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`bg-[#111827] border rounded-2xl p-8 flex flex-col justify-between relative ${
                  pkg.popular ? 'border-[#1E90FF] shadow-2xl shadow-blue-500/20' : 'border-white/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1E90FF] text-white font-mono text-[10px] font-black uppercase px-4 py-1 rounded-full shadow-lg">
                    ⭐ EN ÇOK TERCİH EDİLEN
                  </div>
                )}
                <div>
                  <h3 className="font-display text-3xl text-white mb-2">{pkg.name}</h3>
                  <div className="font-mono text-4xl font-black text-[#1E90FF] mb-1">
                    {pkg.price} {siteConfig.pricing.currency}
                  </div>
                  {pkg.oldPrice && (
                    <div className="font-mono text-xs text-[#94A3B8] line-through mb-6">
                      {pkg.oldPrice} {siteConfig.pricing.currency}
                    </div>
                  )}

                  <ul className="space-y-3 text-sm text-[#D9D9D9] mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#1E90FF] font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/basvuru"
                  className="block text-center bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-xs font-black uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-colors"
                >
                  {pkg.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* KARŞILAŞTIRMA TABLOSU */}
        <section className="py-20 px-6 bg-[#0B1220] border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl text-white text-center uppercase tracking-wide mb-12">
              PAKET KARŞILAŞTIRMA TABLOSU
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#111827] text-white">
                    <th className="p-4">ÖZELLİK</th>
                    <th className="p-4 text-center">1 AYLIK</th>
                    <th className="p-4 text-center text-[#1E90FF]">3 AYLIK</th>
                    <th className="p-4 text-center text-amber-400">6 AYLIK</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[#94A3B8]">
                  <tr>
                    <td className="p-4 text-white">Kişiye Özel Antrenman Planı</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-white">Beslenme &amp; Makro Rehberi</td>
                    <td className="p-4 text-center text-red-500">✕</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                    <td className="p-4 text-center text-emerald-400">✓ (Detaylı Plan)</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-white">Video Form Analizi</td>
                    <td className="p-4 text-center text-emerald-400">Temel</td>
                    <td className="p-4 text-center text-emerald-400">Haftalık</td>
                    <td className="p-4 text-center text-emerald-400">Öncelikli Görüntülü</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-white">WhatsApp Yanıt Süresi</td>
                    <td className="p-4 text-center">24-48 Saat</td>
                    <td className="p-4 text-center text-[#1E90FF]">12-24 Saat</td>
                    <td className="p-4 text-center text-amber-400">Aynı Gün</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SAĞLIK SORUMLULUK REDDİ */}
        <section className="py-12 px-6 max-w-4xl mx-auto text-center font-mono text-xs text-[#94A3B8]">
          <p className="border border-white/10 p-4 rounded-lg bg-[#111827]">
            ⚠️ <strong>Tıbbi Sorumluluk Reddi:</strong> Online koçluk hizmeti tıbbi teşhis, tedavi veya klinik diyetisyenlik hizmeti içermez. Kronik rahatsızlığı olanların programa başlamadan önce hekimine danışması önerilir.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
