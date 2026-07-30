'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ExerciseModalProps {
  exercise: {
    id: string;
    nameTr: string;
    nameEn: string;
    category: string;
    equipment: string;
    slug: string;
    coverImage: string;
    targetMuscles?: string[];
    synergistMuscles?: string[];
    movementType?: string;
    difficulty?: string;
    startingPosition?: string;
  };
  onClose: () => void;
}

export const ExerciseModal: React.FC<ExerciseModalProps> = ({ exercise, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col md:flex-row"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        {/* LEFT: HIGH RES IMAGE BOX */}
        <div className="md:w-1/2 bg-slate-950 p-6 flex items-center justify-center relative min-h-[300px]">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={exercise.coverImage || '/images/exercise-covers/chest-press.png'}
              alt={exercise.nameTr}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT: DETAILS PANEL */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                {exercise.category}
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                {exercise.equipment}
              </span>
              <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                {exercise.difficulty || 'Orta'}
              </span>
            </div>

            <div>
              <h2 className="font-display text-3xl text-slate-900 uppercase tracking-tight">
                {exercise.nameTr}
              </h2>
              <p className="font-mono text-xs text-slate-500 italic">
                {exercise.nameEn}
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-blue-600 font-extrabold block text-[10px] uppercase mb-1">
                  🎯 HEDEF KAS GRUBU
                </span>
                <span className="text-slate-800 font-bold">
                  {exercise.targetMuscles?.join(', ') || 'Ana Kas Grubu'}
                </span>
              </div>

              {exercise.synergistMuscles && exercise.synergistMuscles.length > 0 && (
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 font-extrabold block text-[10px] uppercase mb-1">
                    ⚡ YARDIMCI KASLAR
                  </span>
                  <span className="text-slate-700">
                    {exercise.synergistMuscles.join(', ')}
                  </span>
                </div>
              )}

              {exercise.startingPosition && (
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-blue-600 font-extrabold block text-[10px] uppercase mb-1">
                    💡 BAŞLANGIÇ POZİSYONU
                  </span>
                  <p className="text-slate-600 font-sans text-xs leading-relaxed">
                    {exercise.startingPosition}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 font-mono text-xs">
            <Link
              href={`/egzersizler/${exercise.slug}`}
              className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 rounded-xl shadow-md transition-all"
            >
              📖 DETAYLI TEKNİK REHBERİ OKU &rarr;
            </Link>
            <button
              onClick={onClose}
              className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl transition-all"
            >
              KAPAT (ESC)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
