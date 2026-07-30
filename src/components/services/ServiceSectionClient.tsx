'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/data/services';
import { serviceDetailsMap, ServiceDetail } from '@/data/serviceDetails';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServiceSectionClientProps {
  services: ServiceItem[];
}

export const ServiceSectionClient: React.FC<ServiceSectionClientProps> = ({ services }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const handleOpenModal = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    const detail = serviceDetailsMap[slug] || serviceDetailsMap['fitness-body-transformation'];
    setSelectedService(detail);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((serv, idx) => (
          <div
            key={serv.id}
            onClick={(e) => handleOpenModal(serv.slug, e)}
            className="premium-card rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-1 bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl space-y-6 cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-4xl p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  {serv.icon}
                </span>
                <span className="font-mono text-xs text-blue-600 font-extrabold bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                  0{idx + 1} • {serv.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2.5xl text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
                  {serv.title}
                </h3>
                <p className="text-base text-slate-700 font-sans leading-relaxed mt-2.5">
                  {serv.shortDesc}
                </p>
              </div>

              {/* DISCLAIMER LABEL IF APPLICABLE */}
              {serv.disclaimer && (
                <div className="text-xs font-mono text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200">
                  ℹ️ {serv.disclaimer}
                </div>
              )}

              {/* ONLINE & HYBRID TRAINING TAGS */}
              <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                {serv.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-md border border-slate-200">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 font-mono text-sm text-blue-600 font-extrabold flex justify-between items-center group-hover:translate-x-1 transition-transform">
              <span>HİZMET İNCELE</span>
              <span>&rarr;</span>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN LANDING MODAL */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
};
