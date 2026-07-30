import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { servicesData } from '@/data/services';

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

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-12 px-6 max-w-5xl mx-auto w-full">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500 mb-8 bg-slate-50 py-2.5 px-4 rounded-xl border border-slate-200 w-fit">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-blue-600">Hizmetlerimiz</Link>
          <span>/</span>
          <span className="text-blue-600 font-bold">{serv.title}</span>
        </div>

        {/* HERO SECTION */}
        <div className="premium-card p-8 sm:p-12 rounded-3xl space-y-6 mb-12 border border-slate-200 bg-slate-50 shadow-sm">
          <div className="flex items-center gap-3 font-mono text-xs text-blue-600 font-extrabold uppercase tracking-wider">
            <span className="text-3xl">{serv.icon}</span>
            <span className="bg-blue-100/80 px-3.5 py-1 rounded-full border border-blue-200">
              {serv.badge}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl text-slate-900 uppercase tracking-tight">
            {serv.title}
          </h1>

          <p className="font-mono text-sm sm:text-base text-amber-700 italic">
            "{serv.tagline}"
          </p>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            {serv.fullDesc}
          </p>

          {serv.disclaimer && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-800">
              ⚠️ <strong>Sorumluluk &amp; Profesyonellik Beyanı:</strong> {serv.disclaimer}
            </div>
          )}
        </div>

        {/* 3 COLUMN SPEC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* FEATURES */}
          <div className="premium-card p-6 rounded-2xl space-y-3 bg-white border border-slate-200">
            <h3 className="font-mono text-xs text-blue-600 font-extrabold uppercase tracking-wider">
              ⚡ HİZMET KAPSAMI &amp; İÇERİK
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-mono">
              {serv.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TARGET AUDIENCE */}
          <div className="premium-card p-6 rounded-2xl space-y-3 bg-white border border-slate-200">
            <h3 className="font-mono text-xs text-amber-700 font-extrabold uppercase tracking-wider">
              🎯 KİMLER İÇİN UYGUN?
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-mono">
              {serv.targetAudience.map((target, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">➔</span>
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* METHODOLOGY */}
          <div className="premium-card p-6 rounded-2xl space-y-3 bg-white border border-slate-200">
            <h3 className="font-mono text-xs text-emerald-700 font-extrabold uppercase tracking-wider">
              🔬 BİLİMSEL METODOLOJİ
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-mono">
              {serv.methodology.map((meth, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">●</span>
                  <span>{meth}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA CARD */}
        <div className="premium-card rounded-3xl p-10 text-center space-y-6 bg-slate-900 text-white border border-slate-800 shadow-2xl">
          <h2 className="font-display text-3xl sm:text-4xl text-white uppercase">
            BU HİZMET İÇİN DEĞERLENDİRME VE BAŞVURU
          </h2>
          <p className="text-sm text-slate-300 font-sans max-w-xl mx-auto">
            {serv.title} protokolümüz hakkında detaylı bilgi almak ve durum değerlendirmesi yapmak için koçluk ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-black uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-xl shadow-blue-500/30 transition-all"
            >
              🚀 Yolculuğunu Başlat
            </Link>
            <a
              href={`https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20${encodeURIComponent(serv.title)}%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-xl transition-all"
            >
              💬 WhatsApp Bilgi Al
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
