import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExerciseModal } from './ExerciseModal';

interface ExerciseCardProps {
  id: string;
  nameTr: string;
  nameEn: string;
  category: string;
  equipment: string;
  slug: string;
  coverImage?: string;
  youtubeUrl?: string;
  targetMuscles?: string[];
  synergistMuscles?: string[];
  movementType?: string;
  difficulty?: string;
  startingPosition?: string;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  id,
  nameTr,
  nameEn,
  category,
  equipment,
  slug,
  coverImage,
  youtubeUrl,
  targetMuscles = [],
  synergistMuscles = [],
  movementType = 'Bileşik',
  difficulty = 'Orta',
  startingPosition = ''
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="premium-card rounded-2xl p-6 flex flex-col justify-between group cursor-pointer bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl space-y-4"
      >
        <div className="space-y-4">
          {/* HEADER BADGES (15px) */}
          <div className="flex items-center justify-between font-mono text-sm">
            <span className="bg-blue-50 text-blue-700 font-extrabold px-3.5 py-1 rounded-full border border-blue-200">
              {category}
            </span>
            <span className="text-slate-600 font-semibold">
              {equipment}
            </span>
          </div>

          {/* TITLES (26px) */}
          <div>
            <h3 className="font-display text-2.5xl text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
              {nameTr}
            </h3>
            <p className="font-mono text-sm text-slate-500 italic mt-0.5">
              {nameEn}
            </p>
          </div>

          {/* COVER IMAGE WITH ZOOM BADGE */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 group-hover:border-blue-300 transition-all">
            <Image
              src={coverImage || '/images/exercise-covers/chest-press.png'}
              alt={nameTr}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />

            {/* ZOOM BADGE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-13 h-13 rounded-xl bg-blue-600/90 text-white flex items-center justify-center text-2xl shadow-lg border border-white/30 opacity-90 group-hover:scale-110 transition-all p-3">
              🔍
            </div>
          </div>

          {/* TARGET MUSCLE BADGES (14-16px) */}
          {targetMuscles.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {targetMuscles.map((muscle, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-md border border-slate-200">
                  🎯 {muscle}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER ACTIONS (16-17px) */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-sm mt-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            className="text-blue-600 font-black hover:underline flex items-center gap-1.5"
          >
            <span>🔍 Görseli İncele</span>
          </button>
          
          <Link
            href={`/egzersizler/${slug}`}
            onClick={(e) => e.stopPropagation()}
            className="text-slate-700 hover:text-blue-600 font-bold transition-colors"
          >
            Rehber &rarr;
          </Link>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {isModalOpen && (
        <ExerciseModal
          exercise={{
            id,
            nameTr,
            nameEn,
            category,
            equipment,
            slug,
            coverImage: coverImage || '',
            targetMuscles,
            synergistMuscles,
            movementType,
            difficulty,
            startingPosition
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
