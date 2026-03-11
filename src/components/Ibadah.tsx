'use client';

import { useState } from 'react';
import SectionLabel from './SectionLabel';
import { useReveal } from '@/hooks/useIntersectionObserver';
import { ibadahCategories } from '@/data/content';

const tabs = ibadahCategories.map((c) => ({ id: c.id, label: c.label }));

export default function Ibadah() {
  const [active, setActive] = useState('salah');
  const ref = useReveal();
  const category = ibadahCategories.find((c) => c.id === active);

  return (
    <section id="ibadah" className="bg-[var(--deep)]" ref={ref}>
      <div className="max-w-[1100px] mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
        <SectionLabel label="Worship Guide" />
        <h2 className="text-[clamp(32px,5vw,54px)] font-light text-[var(--cream)] leading-tight mb-4">
          What to Do <em className="text-[var(--gold)] not-italic">Each Night</em>
        </h2>
        <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[600px] mb-0">
          A comprehensive guide to the acts of worship recommended for the last 10 nights, organized by category.
        </p>

        <div className="flex gap-0 border-b border-[var(--border)] mt-10 sm:mt-12 overflow-x-auto scrollbar-thin scrollbar-thumb-[var(--gold-dim)] scrollbar-track-transparent -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--gold-dim)]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 sm:px-7 py-3 bg-transparent border-none text-[var(--muted)] font-['Cinzel'] text-[10px] sm:text-[11px] tracking-[2px] uppercase cursor-pointer border-b-2 border-transparent transition-all whitespace-nowrap hover:text-[var(--gold)] hover:border-b-[var(--gold)] touch-manipulation flex-shrink-0 ${
                active === tab.id ? 'text-[var(--gold)] border-b-[var(--gold)]' : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {category && (
          <div className="py-8 sm:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {category.items.map((item) => (
                <div
                  key={item.num}
                  className="bg-[var(--panel)] border border-[var(--border)] p-4 sm:p-5 lg:p-6 flex gap-3 sm:gap-4 items-start"
                >
                  <div className="w-8 h-8 border border-[var(--gold-dim)] flex items-center justify-center font-['Cormorant_Garamond',serif] text-[15px] text-[var(--gold)] flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <div className="text-[15px] text-[var(--cream)] mb-1">{item.name}</div>
                    <div className="text-[13px] text-[var(--muted)] leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
