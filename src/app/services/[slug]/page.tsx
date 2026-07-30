import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { servicesData } from '@/data/services';
import { serviceDetailsMap } from '@/data/serviceDetails';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const serv = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!serv) {
    return {
      title: 'Hizmet Bulunamadı — TK Performance & Health',
      description: 'Aradığınız performans hizmeti bulunamadı.',
    };
  }

  const pageTitle = `${serv.title} — ${serv.category} | TK Performance & Health`;
  const pageDesc = `${serv.title}: ${serv.shortDesc}`;
  const pageUrl = `https://tunahankeskin.com/services/${serv.slug}`;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: pageUrl,
      siteName: 'TK Performance & Health',
      locale: 'tr_TR',
      type: 'article',
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const serv = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!serv) {
    notFound();
  }

  const detail = serviceDetailsMap[serv.slug] || serviceDetailsMap['fitness-body-transformation'];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-12 px-6 max-w-7xl mx-auto w-full space-y-16">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500 bg-slate-50 py-2.5 px-4 rounded-xl border border-slate-200 w-fit">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-blue-600">Hizmetlerimiz</Link>
          <span>/</span>
          <span className="text-blue-600 font-bold">{detail.title}</span>
        </div>

        {/* SECTION 1: HERO */}
        <section className="relative rounded-3xl p-8 sm:p-14 bg-slate-900 text-white border border-slate-800 shadow-2xl overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="font-mono text-xs text-blue-400 font-extrabold uppercase bg-blue-950 px-4 py-1.5 rounded-full border border-blue-800 inline-block">
                {detail.badge}
              </span>
              <h1 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight leading-none">
                {detail.title}
              </h1>
              <p className="font-display text-2.5xl text-amber-400">{detail.subtitle}</p>
              <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
                {detail.shortDesc}
              </p>
            </div>
            <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700 p-6 rounded-2xl text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-display text-3xl font-bold flex items-center justify-center mx-auto shadow-lg">TK</div>
              <h3 className="font-display text-2xl text-white uppercase">TK PERFORMANCE LAB</h3>
              <p className="text-xs font-mono text-blue-400 font-extrabold uppercase">Spor Bilimi v3.0</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: HİZMET HAKKINDA */}
        <section className="space-y-6">
          <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">BİLİMSEL METODOLOJİ</span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase">{detail.aboutTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detail.aboutContent.map((paragraph, idx) => (
              <div key={idx} className="premium-card p-6 rounded-2xl bg-slate-50 border border-slate-200 text-base text-slate-700 font-sans leading-relaxed space-y-2">
                <span className="font-mono text-xs text-blue-600 font-extrabold block uppercase">BÖLÜM 0{idx + 1}</span>
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: TIMELINE */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase">PROGRAM NASIL İLERLİYOR? (8 ADIMLI SİSTEM)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.timeline.map((step) => (
              <div key={step.number} className="premium-card p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-display text-3xl text-blue-600 font-bold">{step.number}</span>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-display text-xl text-slate-900 uppercase">{step.title}</h3>
                <p className="text-sm text-slate-600 font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: CHECKLIST */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 uppercase">PROGRAM İÇERİĞİ &amp; KAPSAMLI MODÜLLER</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            {detail.checklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 font-mono text-sm font-bold text-slate-800 shadow-sm">
                <span className="text-emerald-600 text-lg">✓</span>
                <span>{item.replace('✓ ', '')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: PRICING */}
        <section className="space-y-8">
          <h2 className="font-display text-3xl sm:text-5xl text-slate-900 uppercase text-center">EĞİTİM &amp; PAKET SEÇENEKLERİ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detail.pricingPlans.map((plan, idx) => (
              <div key={idx} className={`premium-card rounded-3xl p-8 flex flex-col justify-between space-y-6 ${plan.isPopular ? 'bg-slate-900 text-white border-blue-500 shadow-2xl' : 'bg-white text-slate-900 border-slate-200'}`}>
                <div>
                  <span className="font-mono text-xs text-blue-500 font-extrabold uppercase block">{plan.startingLabel}</span>
                  <h3 className="font-display text-2.5xl uppercase mt-1">{plan.title}</h3>
                  <div className="font-display text-4.5xl font-bold text-blue-600 my-4">{plan.price}</div>
                  <ul className="space-y-2 font-mono text-xs">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="https://wa.me/905445300481" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white text-center py-4 rounded-xl font-mono text-sm font-extrabold uppercase">Başvur / Bilgi Al &rarr;</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
