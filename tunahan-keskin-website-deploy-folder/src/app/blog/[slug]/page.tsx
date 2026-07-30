import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { blogPostsData } from '@/data/blogPosts';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPostsData.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-4xl mx-auto w-full">
        
        <div className="flex items-center gap-2 font-mono text-xs text-[#94A3B8] mb-8">
          <Link href="/" className="hover:text-white">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span>/</span>
          <span className="text-[#1E90FF]">{post.title}</span>
        </div>

        <article className="bg-[#111827] border border-white/10 p-8 md:p-12 rounded-2xl mb-12">
          <div className="flex justify-between items-center text-xs font-mono text-[#94A3B8] mb-4">
            <span className="bg-[#1E90FF]/10 text-[#1E90FF] font-bold px-3 py-1 rounded border border-[#1E90FF]/30">{post.category}</span>
            <span>{post.date} • {post.readTime}</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl text-white uppercase mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="font-mono text-xs text-[#1E90FF] mb-8 border-b border-white/10 pb-4">
            Yazar: {post.author}
          </div>

          <div className="prose prose-invert max-w-none text-[#D9D9D9] text-base leading-relaxed space-y-6">
            <p className="text-lg text-white font-medium italic border-l-4 border-[#1E90FF] pl-4">
              {post.summary}
            </p>

            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
          </div>

          {/* SOURCES */}
          {post.sources && post.sources.length > 0 && (
            <div className="mt-12 pt-6 border-t border-white/10">
              <h4 className="font-mono text-xs font-bold text-[#1E90FF] uppercase tracking-wider mb-3">
                📚 BİLİMSEL KAYNAKLAR VE REFERANSLAR
              </h4>
              <ul className="space-y-2 text-xs font-mono text-[#94A3B8]">
                {post.sources.map((src, idx) => (
                  <li key={idx}>[{idx + 1}] {src}</li>
                ))}
              </ul>
            </div>
          )}
        </article>

        {/* DISCLAIMER */}
        <div className="bg-[#111827] border border-white/10 p-4 rounded-xl text-center font-mono text-xs text-[#94A3B8]">
          ℹ️ Bu makale bilgilendirme amaçlıdır. Tıbbi tavsiye niteliği taşımaz.
        </div>

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
