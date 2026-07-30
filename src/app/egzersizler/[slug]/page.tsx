import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { ExerciseCard } from '@/components/features/ExerciseCard';
import { exercisesData, Exercise } from '@/data/exercises';

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. DYNAMIC SEO METADATA GENERATION
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const ex = exercisesData.find((e) => e.slug === resolvedParams.slug);

  if (!ex) {
    return {
      title: 'Egzersiz Bulunamadı — Tunahan Keskin Performance',
      description: 'Aradığınız egzersiz rehberi bulunamadı.',
    };
  }

  const pageTitle = `${ex.nameTr} — Biyomekanik Rehberi & Kas Aktivasyonu | Tunahan Keskin`;
  const pageDesc = `${ex.nameTr} (${ex.nameEn}) egzersizinin nizami formu, hedef kasları (${ex.targetMuscles.join(', ')}), başlama pozisyonu ve nefes tekniği analizleri.`;
  const pageUrl = `https://tunahankeskin.com/egzersizler/${ex.slug}`;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: [
      ex.nameTr,
      ex.nameEn,
      `${ex.category} egzersizleri`,
      `${ex.equipment} hareketleri`,
      'biyomekanik analiz',
      'nizami form rehberi',
      'Tunahan Keskin'
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: pageUrl,
      siteName: 'Tunahan Keskin Performance',
      images: [
        {
          url: ex.coverImage,
          width: 1200,
          height: 900,
          alt: ex.nameTr,
        },
      ],
      locale: 'tr_TR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDesc,
      images: [ex.coverImage],
    },
  };
}

export default async function ExerciseDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const ex = exercisesData.find((e) => e.slug === resolvedParams.slug);

  if (!ex) {
    notFound();
  }

  // AUTOMATIC RELATED EXERCISES (SAME CATEGORY OR SPECIFIED SLUGS)
  const relatedList = exercisesData
    .filter((e) => e.slug !== ex.slug && (e.category === ex.category || (ex.relatedExercises && ex.relatedExercises.includes(e.slug))))
    .slice(0, 3);

  // SCHEMA.ORG STRUCTURED DATA
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': ex.nameTr,
    'alternativeHeadline': ex.nameEn,
    'description': ex.description,
    'image': `https://tunahankeskin.com${ex.coverImage}`,
    'author': {
      '@type': 'Person',
      'name': 'Tunahan Keskin',
      'jobTitle': 'Sports Scientist & Performance Coach'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Tunahan Keskin Performance'
    },
    'about': {
      '@type': 'Thing',
      'name': ex.category
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC] selection:bg-[#1E90FF] selection:text-white">
      {/* SCHEMA.ORG INJECTION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-12 px-6 max-w-7xl mx-auto w-full">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#94A3B8] mb-8 bg-[#0B1220] py-2.5 px-4 rounded-xl border border-white/5 w-fit">
          <Link href="/" className="hover:text-[#1E90FF] transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/egzersizler" className="hover:text-[#1E90FF] transition-colors">Egzersizler</Link>
          <span>/</span>
          <span className="text-[#1E90FF] font-bold">{ex.nameTr}</span>
        </div>

        {/* 1. ÜST BÖLÜM (2 SÜTUN: SOL BİLGİLER & SAĞ YÜKSEK ÇÖZÜNÜRLÜKLÜ GÖRSEL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* SOL SÜTUN: BAŞLIKLAR, BADGELER VE KAS İŞARETÇİLERİ */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* BADGES */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="bg-[#1E90FF]/15 text-[#1E90FF] font-bold px-3.5 py-1.5 rounded-full border border-[#1E90FF]/30 uppercase text-[11px]">
                {ex.category}
              </span>
              <span className="bg-white/5 text-[#94A3B8] font-semibold px-3.5 py-1.5 rounded-full border border-white/10 uppercase text-[11px]">
                {ex.equipment}
              </span>
              <span className="bg-emerald-500/15 text-emerald-400 font-bold px-3.5 py-1.5 rounded-full border border-emerald-500/30 uppercase text-[11px]">
                {ex.difficulty}
              </span>
              <span className="bg-[#FFC857]/15 text-[#FFC857] font-bold px-3.5 py-1.5 rounded-full border border-[#FFC857]/30 uppercase text-[11px]">
                {ex.movementType}
              </span>
            </div>

            {/* HEADLINE & ENGLISH TITLE */}
            <div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[1.05]">
                {ex.nameTr}
              </h1>
              <div className="font-mono text-sm text-[#94A3B8] italic mt-2 flex items-center gap-2">
                <span>EN: {ex.nameEn}</span>
                <span>•</span>
                <span className="text-[#1E90FF] font-semibold">{ex.movementPattern}</span>
              </div>
            </div>

            {/* KAS BİLGİLERİ (MODERN BADGE SİSTEMİ) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
              
              {/* ANA KAS (PRIMARY MUSCLES - ELECTRIC BLUE) */}
              <div className="premium-card p-4 rounded-2xl border border-[#1E90FF]/30 bg-[#1E90FF]/5">
                <span className="text-[#1E90FF] font-bold block text-[10px] uppercase tracking-wider mb-2">
                  🎯 HEDEF (ANA) KAS GRUBU
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ex.targetMuscles.map((muscle, idx) => (
                    <span key={idx} className="bg-[#1E90FF]/20 text-white font-bold px-3 py-1 rounded-lg border border-[#1E90FF]/40 text-xs">
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

              {/* YARDIMCI KASLAR (SECONDARY MUSCLES - AMBER/SLATE) */}
              <div className="premium-card p-4 rounded-2xl border border-[#FFC857]/20 bg-[#FFC857]/5">
                <span className="text-[#FFC857] font-bold block text-[10px] uppercase tracking-wider mb-2">
                  ⚡ YARDIMCI (SİNERJİST) KASLAR
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ex.synergistMuscles.map((muscle, idx) => (
                    <span key={idx} className="bg-white/5 text-[#94A3B8] font-medium px-3 py-1 rounded-lg border border-white/10 text-xs">
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* BİYOMEKANİK ÖZET & AÇIKLAMA */}
            <div className="p-5 rounded-2xl bg-[#0B1220] border-l-4 border-[#1E90FF] border-y border-r border-white/5 space-y-2">
              <span className="font-mono text-xs text-[#1E90FF] font-bold uppercase tracking-wider block">
                🔬 BİYOMEKANİK DEĞERLENDİRME
              </span>
              <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed font-sans">
                {ex.description}
              </p>
            </div>

            {/* ANATOMİK KAS GÖRSELİ GELECEK ALTYAPI ALANI */}
            <div className="font-mono text-[11px] text-[#94A3B8] bg-[#070B12] p-3 rounded-xl border border-white/5 flex items-center justify-between">
              <span>TK SCIENCE ANATOMY MAPPING READY</span>
              <span className="text-emerald-400 font-bold">● VECTORS ENGAGED</span>
            </div>

          </div>

          {/* SAĞ SÜTUN: BÜYÜK YÜKSEK ÇÖZÜNÜRLÜKLÜ EGZERSİZ GÖRSELİ */}
          <div className="lg:col-span-5 relative">
            <div className="premium-card rounded-3xl p-3 border border-white/10 bg-[#0B1220] shadow-2xl group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#070B12] border border-white/10">
                <Image
                  src={ex.coverImage}
                  alt={ex.nameTr}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                
                {/* OVERLAY BADGES */}
                <div className="absolute top-4 left-4 font-mono text-[10px] bg-[#070B12]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white font-bold">
                  HIGH RES INFOGRAPHIC
                </div>
                <div className="absolute bottom-4 left-4 right-4 font-mono text-xs bg-[#070B12]/85 backdrop-blur-md p-3 rounded-xl border border-white/10 flex justify-between items-center text-white">
                  <span>{ex.equipment}</span>
                  <span className="text-[#1E90FF] font-bold">TK PERFORMANCE</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION DIVIDER */}
        <div className="section-divider mb-16" />

        {/* 2. TEKNİK BİLGİ KARTLARI (BİLGİ BLOKLARI) */}
        <div className="mb-20 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="font-mono text-xs text-[#1E90FF] font-bold tracking-widest uppercase bg-[#1E90FF]/10 px-3 py-1 rounded-full border border-[#1E90FF]/30">
              SPOR BİLİMİ PARAMETRELERİ
            </span>
            <h2 className="font-display text-3xl md:text-5xl uppercase text-white tracking-tight">
              TEKNİK UYGULAMA REHBERİ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. BAŞLANGIÇ POZİSYONU */}
            <div className="premium-card p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#1E90FF] font-bold uppercase tracking-wider">
                <span>01.</span>
                <span>🏁 BAŞLANGIÇ POZİSYONU</span>
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed font-sans">
                {ex.startingPosition}
              </p>
            </div>

            {/* 2. NEFES TEKNİĞİ */}
            <div className="premium-card p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
                <span>02.</span>
                <span>🫁 NEFES TEKNİĞİ</span>
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed font-sans">
                {ex.breathing}
              </p>
            </div>

            {/* 3. HAREKETİN UYGULANIŞI */}
            <div className="premium-card p-6 rounded-3xl space-y-3 md:col-span-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#1E90FF] font-bold uppercase tracking-wider">
                <span>03.</span>
                <span>📋 UYGULAMA ADIMLARI</span>
              </div>
              <ol className="space-y-3 text-sm text-[#F8FAFC] list-decimal list-inside font-sans pt-1">
                {ex.executionSteps.map((step, idx) => (
                  <li key={idx} className="leading-relaxed bg-[#111827] p-3 rounded-xl border border-white/5">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* 4. DOĞRU FORM İPUÇLARI */}
            <div className="premium-card p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#FFC857] font-bold uppercase tracking-wider">
                <span>04.</span>
                <span>💡 DOĞRU FORM İPUÇLARI</span>
              </div>
              <ul className="space-y-2 text-xs text-[#94A3B8] font-mono">
                {ex.proTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#FFC857]">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. SIK YAPILAN HATALAR */}
            <div className="premium-card p-6 rounded-3xl space-y-3 border-red-500/20 bg-red-950/10">
              <div className="flex items-center gap-2 font-mono text-xs text-red-400 font-bold uppercase tracking-wider">
                <span>05.</span>
                <span>⚠️ SIK YAPILAN HATALAR</span>
              </div>
              <ul className="space-y-2 text-xs text-[#94A3B8] font-mono">
                {ex.commonMistakes.map((err, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{err}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. GÜVENLİK ÖNERİLERİ */}
            <div className="premium-card p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                <span>06.</span>
                <span>🛡️ GÜVENLİK ÖNERİLERİ</span>
              </div>
              <ul className="space-y-2 text-xs text-[#94A3B8] font-mono">
                {ex.safetyWarnings.map((warn, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400">!</span>
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7. HAREKET AÇIKLIĞI (ROM) */}
            <div className="premium-card p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#1E90FF] font-bold uppercase tracking-wider">
                <span>07.</span>
                <span>📏 HAREKET AÇIKLIĞI (ROM)</span>
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed font-sans">
                {ex.rangeOfMotion}
              </p>
            </div>

          </div>
        </div>

        {/* SECTION DIVIDER */}
        <div className="section-divider mb-16" />

        {/* 3. BENZER EGZERSİZLER (OTOMATİK LİSTELEME) */}
        {relatedList.length > 0 && (
          <div className="space-y-8 mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <span className="font-mono text-xs text-[#1E90FF] font-bold tracking-widest uppercase bg-[#1E90FF]/10 px-3 py-1 rounded-full border border-[#1E90FF]/30">
                  AYNI KAS GRUBU
                </span>
                <h2 className="font-display text-3xl md:text-5xl uppercase text-white tracking-tight mt-2">
                  BENZER EGZERSİZLER
                </h2>
              </div>
              <Link href="/egzersizler" className="font-mono text-xs text-[#1E90FF] hover:underline font-bold mt-4 md:mt-0">
                Tüm Egzersiz Kütüphanesini Gör &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedList.map((rel) => (
                <ExerciseCard
                  key={rel.id}
                  id={rel.id}
                  nameTr={rel.nameTr}
                  nameEn={rel.nameEn}
                  category={rel.category}
                  equipment={rel.equipment}
                  slug={rel.slug}
                  coverImage={rel.coverImage}
                  targetMuscles={rel.targetMuscles}
                  synergistMuscles={rel.synergistMuscles}
                  movementType={rel.movementType}
                  difficulty={rel.difficulty}
                  startingPosition={rel.startingPosition}
                />
              ))}
            </div>
          </div>
        )}

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
