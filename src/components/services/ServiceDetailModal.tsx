'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ServiceDetail } from '@/data/serviceDetails';

interface ServiceDetailModalProps {
  service: ServiceDetail;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Lock body scroll on mount, restore on unmount
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-0 sm:p-4 lg:p-6 overflow-y-auto animate-fadeIn">
      
      {/* MODAL CONTAINER */}
      <div 
        className="relative w-full max-w-7xl bg-white text-slate-900 rounded-none sm:rounded-3xl shadow-2xl overflow-hidden my-auto border border-slate-200 min-h-screen sm:min-h-0 sm:max-h-[92vh] flex flex-col transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* TOP STICKY BAR WITH CLOSE BUTTON */}
        <div className="sticky top-0 z-50 glass-nav px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white/95 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 uppercase">
              {service.badge}
            </span>
            <span className="font-display text-xl sm:text-2xl text-slate-900 uppercase tracking-tight hidden sm:inline-block">
              {service.title}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-extrabold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>💬</span>
              <span className="hidden sm:inline">WhatsApp Bilgi Al</span>
            </a>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xl flex items-center justify-center transition-colors border border-slate-300"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>
        </div>

        {/* MODAL SCROLLABLE CONTENT BODY */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-16 flex-1 custom-scrollbar">
          
          {/* SECTION 1: PREMIUM HERO */}
          <section className="relative rounded-3xl p-8 sm:p-12 bg-slate-900 text-white border border-slate-800 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-slate-900 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <span className="font-mono text-xs text-blue-400 font-extrabold uppercase bg-blue-950 px-4 py-1.5 rounded-full border border-blue-800 inline-block">
                  {service.badge}
                </span>

                <h1 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight leading-none">
                  {service.title}
                </h1>

                <p className="font-display text-2xl text-amber-400">
                  {service.subtitle}
                </p>

                <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
                  {service.shortDesc}
                </p>

                <div className="flex flex-wrap gap-4 pt-2 font-mono text-sm">
                  <a
                    href="#pricing-section"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2"
                  >
                    <span>🚀</span>
                    <span>PAKETLERİ İNCELE</span>
                  </a>

                  <a
                    href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20ön%20görüşme%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-7 py-3.5 rounded-xl transition-all"
                  >
                    💬 Ücretsiz Ön Görüşme
                  </a>
                </div>
              </div>

              {/* ATHLETE / PERFORMANCE SHOWCASE CARD */}
              <div className="lg:col-span-4">
                <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl space-y-4 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-display text-3xl font-bold flex items-center justify-center mx-auto shadow-lg">
                    TK
                  </div>
                  <h4 className="font-display text-2xl text-white uppercase">TK PERFORMANCE LAB</h4>
                  <p className="text-xs font-mono text-blue-400 font-extrabold uppercase">Spor Bilimi &amp; Biyomekanik v3.0</p>
                  <div className="pt-3 border-t border-slate-700 font-mono text-xs text-slate-300 space-y-1">
                    <div>✓ %100 Kişiselleştirilmiş Protokol</div>
                    <div>✓ RIR / RPE Yüklenme Takibi</div>
                    <div>✓ Kesintisiz 7/24 Koçluk Hattı</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: HİZMET HAKKINDA (300-500 WORDS SCIENTIFIC NARRATIVE) */}
          <section className="space-y-6">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
              BİLİMSEL YAKLAŞIM &amp; METODOLOJİ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              {service.aboutTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.aboutContent.map((paragraph, idx) => (
                <div key={idx} className="premium-card p-6 rounded-2xl bg-slate-50 border border-slate-200 text-base text-slate-700 font-sans leading-relaxed space-y-2">
                  <span className="font-mono text-xs text-blue-600 font-extrabold uppercase block">
                    BÖLÜM 0{idx + 1}
                  </span>
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: PROGRAM NASIL İLERLİYOR? (8 STEPS TIMELINE) */}
          <section className="space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
                SÜREÇ YOL HARİTASI
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
                PROGRAM NASIL İLERLİYOR? (8 ADIMLI SİSTEM)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.timeline.map((step) => (
                <div key={step.number} className="premium-card p-6 rounded-2xl bg-white border border-slate-200 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl text-blue-600 font-bold">{step.number}</span>
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <h3 className="font-display text-xl text-slate-900 uppercase">{step.title}</h3>
                  <p className="text-sm text-slate-600 font-sans leading-normal">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: PROGRAM İÇERİĞİ (13 CHECKLIST ITEMS) */}
          <section className="space-y-6">
            <span className="font-mono text-xs text-emerald-800 font-extrabold uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              PAKET KAPSAMI
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              PROGRAM İÇERİĞİ &amp; KAPSAMLI MODÜLLER
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              {service.checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 font-mono text-sm font-bold text-slate-800 shadow-sm">
                  <span className="text-emerald-600 text-lg">✓</span>
                  <span>{item.replace('✓ ', '')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: KİMLER İÇİN? (6 TARGET AUDIENCE CARDS) */}
          <section className="space-y-6">
            <span className="font-mono text-xs text-amber-800 font-extrabold uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              HEDEF KİTLE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              BU PROGRAM KİMLER İÇİN UYGUN?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.targetGroups.map((group, idx) => (
                <div key={idx} className="premium-card p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                  <span className="text-4xl block">{group.icon}</span>
                  <h3 className="font-display text-xl text-slate-900 uppercase">{group.title}</h3>
                  <p className="text-sm text-slate-600 font-sans">{group.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6: NELER KAZANACAKSIN? (6 OUTCOMES) */}
          <section className="space-y-6">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
              SOMUT KAZANIMLAR
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              NELER KAZANACAKSIN?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.outcomes.map((outcome, idx) => (
                <div key={idx} className="premium-card p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="text-4xl block">{outcome.icon}</span>
                  <h3 className="font-display text-xl text-slate-900 uppercase">{outcome.title}</h3>
                  <p className="text-sm text-slate-600 font-sans">{outcome.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 7: PAKETLER (PRICING CARDS WITH STARTING PRICE TAGS) */}
          <section id="pricing-section" className="space-y-8 pt-4">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
                ŞEFFAF FİYATLANDIRMA
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-slate-900 uppercase tracking-tight">
                EĞİTİM &amp; PAKET SEÇENEKLERİ
              </h2>
              <p className="text-base text-slate-600 font-sans">
                Tüm paket fiyatları başlangıç seviyesi olup yönetilebilir dinamik altyapıya sahiptir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`premium-card rounded-3xl p-8 flex flex-col justify-between space-y-6 relative ${
                    plan.isPopular
                      ? 'bg-slate-900 text-white border-blue-500 shadow-2xl scale-102'
                      : 'bg-white text-slate-900 border-slate-200'
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-mono text-[11px] font-extrabold uppercase bg-blue-600 text-white px-4 py-1 rounded-full shadow-md">
                      {plan.badge}
                    </span>
                  )}

                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-xs font-extrabold uppercase text-blue-500 block">
                        {plan.startingLabel}
                      </span>
                      <h3 className={`font-display text-2.5xl uppercase mt-1 ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                        {plan.title}
                      </h3>
                      <p className={`font-mono text-xs ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        {plan.subtitle}
                      </p>
                    </div>

                    <div className="py-4 border-y border-slate-200/20">
                      <div className="font-display text-4.5xl font-bold text-blue-600">
                        {plan.price}
                      </div>
                      <span className={`font-mono text-xs ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        {plan.period}
                      </span>
                    </div>

                    <ul className="space-y-3 font-mono text-xs">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5">
                          <span className="text-emerald-500 font-bold text-sm">✓</span>
                          <span className={plan.isPopular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20paket%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-4 rounded-xl font-mono text-sm font-extrabold uppercase tracking-wider transition-all block ${
                      plan.isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    }`}
                  >
                    Başvur / Bilgi Al &rarr;
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 8: SIKÇA SORULAN SORULAR (5 ACCORDION) */}
          <section className="space-y-6">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
              SSS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              SIKÇA SORULAN SORULAR
            </h2>

            <div className="space-y-4 max-w-4xl mx-auto">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left font-display text-2xl text-slate-900 uppercase flex justify-between items-center group"
                    >
                      <span>{faq.question}</span>
                      <span className="font-mono text-xl text-blue-600 group-hover:scale-110 transition-transform">
                        {isOpen ? '▲' : '▼'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-base text-slate-700 font-sans leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION 9: GERÇEK DANIŞAN SONUÇLARI */}
          <section className="space-y-6">
            <span className="font-mono text-xs text-emerald-800 font-extrabold uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              KANITLANMIŞ VERİLER
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              GERÇEK DANIŞAN SONUÇLARI &amp; DÖNÜŞÜMLER
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.clientResults.map((result, idx) => (
                <div key={idx} className="premium-card p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-mono text-xs text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 font-extrabold uppercase">
                        {result.badge}
                      </span>
                      <h3 className="font-display text-3xl text-slate-900 uppercase mt-2">
                        {result.clientName} <span className="text-base text-slate-500 font-normal">({result.age}, {result.profession})</span>
                      </h3>
                    </div>
                    <span className="font-mono text-sm text-blue-600 font-extrabold">
                      {result.durationWeeks} Hafta
                    </span>
                  </div>

                  {/* METRIC BADGES */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-slate-500 block">KİLO</span>
                      <strong className="text-blue-600 text-sm">{result.weightChange}</strong>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-slate-500 block">KAS</span>
                      <strong className="text-emerald-600 text-sm">{result.muscleChange}</strong>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-slate-500 block">YAĞ</span>
                      <strong className="text-amber-600 text-sm">{result.fatChange}</strong>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-slate-500 block">BEL</span>
                      <strong className="text-slate-900 text-sm">{result.waistChange}</strong>
                    </div>
                  </div>

                  <p className="text-base text-slate-700 font-sans italic bg-slate-50 p-5 rounded-2xl border border-slate-200 leading-relaxed">
                    "{result.story}"
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 10: VAKA ANALİZİ (CASE STUDY) */}
          <section className="space-y-6">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
              KLİNİK KİNESİYOLOJİ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              BİLİMSEL VAKA ANALİZİ (CASE STUDY)
            </h2>

            <div className="premium-card p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-2xl">
              <div className="border-b border-slate-800 pb-4">
                <span className="font-mono text-xs text-blue-400 font-extrabold uppercase block">VAKA PROFİLİ</span>
                <h3 className="font-display text-3xl text-white uppercase mt-1">{service.caseStudy.title}</h3>
                <p className="font-mono text-sm text-slate-400 mt-1">{service.caseStudy.clientProfile}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
                  <strong className="text-amber-400 font-mono block">⚠️ MECUT PROBLEM &amp; BULGULAR</strong>
                  <p className="text-slate-300">{service.caseStudy.problem}</p>
                </div>

                <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
                  <strong className="text-blue-400 font-mono block">🛠️ UYGULANAN SPOR BİLİMİ PROTOKOLÜ</strong>
                  <p className="text-slate-300">{service.caseStudy.appliedProgram}</p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700 space-y-4">
                <strong className="text-emerald-400 font-mono block">📊 ÖLÇÜLEBİLİR SONUÇ TABLOSU</strong>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.caseStudy.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center space-y-1">
                      <span className="font-mono text-xs text-slate-400 block">{m.label}</span>
                      <div className="font-display text-2xl text-white">
                        {m.before} ➔ <span className="text-emerald-400">{m.after}</span>
                      </div>
                      <span className="font-mono text-xs text-emerald-400 font-bold block">{m.improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 11: PERFORMANS GRAFİKLERİ */}
          <section className="space-y-6">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
              VERİ GÖRSELLEŞTİRME
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              PERFORMANS &amp; GELİŞİM GRAFİKLERİ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-200">
              {service.metricsCharts.map((chart, cIdx) => (
                <div key={cIdx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                  <div className="flex justify-between items-center font-mono text-sm">
                    <strong className="text-slate-900">{chart.label}</strong>
                    <span className="text-blue-600 font-extrabold">{chart.displayVal}</span>
                  </div>

                  <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${chart.afterVal}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 12: BİLİMSEL REFERANSLAR (NSCA, ACSM, NASM, ISSN, ECSS) */}
          <section className="space-y-6">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
              LİTERATÜR &amp; AKADEMİK KANIT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              BİLİMSEL TEMELLER &amp; ULUSLARARASI LİTERATÜR
            </h2>

            <p className="text-base text-slate-700 font-sans">
              Programlarımız güncel spor bilimi araştırmaları ve uluslararası nitelikli kuruluşların rehberleri doğrultusunda planlanmaktadır.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.scientificCitations.map((cite, citeIdx) => (
                <div key={citeIdx} className="premium-card p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
                  <span className="font-mono text-xs font-extrabold uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-md border border-blue-200 inline-block">
                    🏛️ {cite.organization}
                  </span>
                  <h4 className="font-display text-xl text-slate-900 uppercase">{cite.title}</h4>
                  <span className="font-mono text-xs text-slate-500 block italic">{cite.authorsAndYear}</span>
                  <p className="text-sm text-slate-700 font-sans bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <strong>Bulgu:</strong> {cite.keyFinding}
                  </p>
                  <p className="text-xs font-mono text-blue-700">
                    <strong>Uygulamamız:</strong> {cite.application}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 13: EĞİTMEN HAKKINDA */}
          <section className="space-y-6">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
              AKADEMİK REHBERLİK
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              EĞİTMEN &amp; UZMAN HAKKINDA
            </h2>

            <div className="premium-card p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 text-center space-y-4">
                <div className="w-24 h-24 rounded-3xl bg-blue-600 text-white font-display text-5xl font-bold flex items-center justify-center mx-auto shadow-xl">
                  TK
                </div>
                <div>
                  <h3 className="font-display text-3xl text-slate-900 uppercase">{service.coachInfo.name}</h3>
                  <span className="font-mono text-xs text-blue-600 font-extrabold uppercase">{service.coachInfo.title}</span>
                </div>
                <span className="inline-block bg-white px-4 py-2 rounded-full border border-slate-200 font-mono text-xs font-bold text-slate-700">
                  {service.coachInfo.experience}
                </span>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <blockquote className="font-sans text-lg text-slate-800 italic bg-white p-6 rounded-2xl border border-slate-200 shadow-sm leading-relaxed">
                  "{service.coachInfo.philosophy}"
                </blockquote>

                <div className="space-y-2 font-mono text-sm text-slate-700">
                  <strong className="text-slate-900 uppercase text-xs block">🎓 AKADEMİK UNVANLAR &amp; SERTİFİKALAR:</strong>
                  {service.coachInfo.degrees.map((deg, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>{deg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 14: SIK KULLANILAN ARAÇLAR (6 ARAÇ) */}
          <section className="space-y-6">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
              ENSTEGRET ARAÇLAR
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              SIK KULLANILAN PLATFORM ARAÇLARI
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {service.tools.map((tool, tIdx) => (
                <div key={tIdx} className="premium-card p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-sm">
                  <span className="text-3xl block">{tool.icon}</span>
                  <h4 className="font-display text-lg text-slate-900 uppercase">{tool.name}</h4>
                  <p className="text-xs text-slate-500 font-sans">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 15: CTA BANNER */}
          <section className="premium-card rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-slate-900 text-white border border-slate-800 shadow-2xl">
            <span className="font-mono text-xs text-blue-400 font-extrabold tracking-widest uppercase bg-blue-950 px-4 py-1.5 rounded-full border border-blue-800 inline-block">
              YOLCULUĞUNU BAŞLAT
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              {service.ctaTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
              {service.ctaSubtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2 font-mono text-base">
              <a
                href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20ücretsiz%20ön%20görüşme%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-9 py-4.5 rounded-xl shadow-xl shadow-blue-500/30 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>🚀</span>
                <span>ÜCRETSİZ ÖN GÖRÜŞME OLUŞTUR</span>
              </a>

              <a
                href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-4.5 rounded-xl transition-all flex items-center gap-2 shadow-lg"
              >
                <span>💬</span>
                <span>WhatsApp'tan Bilgi Al</span>
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
