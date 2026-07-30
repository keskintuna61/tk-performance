'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { blogPostsData } from '@/data/blogPosts';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredPosts = blogPostsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['Tümü', 'Antrenman', 'Beslenme', 'Supplement', 'Postür', 'Atletik Performans', 'Spor Bilimi'];

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <span className="font-mono text-xs text-[#1E90FF] font-bold tracking-widest uppercase bg-[#1E90FF]/10 px-3 py-1 rounded border border-[#1E90FF]/30">
            SPOR BİLİMİ BLOGU
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-3 uppercase tracking-wide">
            MAKALELER &amp; BİLİMSEL İÇERİKLER
          </h1>
          <p className="text-base text-[#94A3B8] mt-2 max-w-2xl">
            Kanıta dayalı spor fizyolojisi, hipertrofi matematiği, beslenme stratejileri ve performans rehberleri.
          </p>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="bg-[#111827] border border-white/10 p-6 rounded-2xl mb-12 space-y-4">
          <div>
            <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Makale Ara</label>
            <input 
              type="text"
              placeholder="Örn. Progressive overload, protein, kreatin..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs font-bold px-4 py-2 rounded-lg border transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                    ? 'bg-[#1E90FF] text-white border-[#1E90FF]' 
                    : 'bg-[#070B12] text-[#94A3B8] border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* BLOG GRID */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-[#111827] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-[#1E90FF]/50 transition-all group">
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-[#94A3B8] mb-3">
                    <span className="text-[#1E90FF] font-bold">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl text-white group-hover:text-[#1E90FF] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mb-6 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 flex justify-between items-center">
                  <span className="font-mono text-[11px] text-[#94A3B8]">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="font-mono text-xs text-[#1E90FF] font-bold uppercase hover:underline">
                    Oku &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#111827] rounded-2xl border border-white/10">
            <p className="text-lg text-[#94A3B8] font-mono">Aradığınız kriterlere uygun makale bulunamadı.</p>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
