'use client';

import SectionLabel from './SectionLabel';
import { useReveal } from '@/hooks/useIntersectionObserver';
import { hadiths } from '@/data/content';

export default function Hadiths() {
  const ref = useReveal();

  return (
    <section id="hadiths" className="bg-[var(--ink)]" ref={ref}>
      <div className="max-w-[1100px] mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
        <SectionLabel label="Prophetic Traditions" />
        <h2 className="text-[clamp(32px,5vw,54px)] font-light text-[var(--cream)] leading-tight mb-4">
          Hadiths on <em className="text-[var(--gold)] not-italic">Laylat ul-Qadr</em>
        </h2>
        <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[600px] mb-0">
          The Prophet Muhammad ﷺ spoke extensively about the last ten nights. These are the authentic narrations that guide our worship.
        </p>

        <div className="grid gap-5 sm:gap-7 mt-12 sm:mt-16">
          {hadiths.map((h) => (
            <div
              key={h.id}
              className="reveal bg-[var(--panel)] border border-[var(--border)] border-l-[3px] border-l-[var(--gold)] p-5 sm:p-6 lg:p-9 relative transition-all hover:-translate-x-1 hover:shadow-[-6px_0_30px_rgba(212,175,55,0.08)]"
            >
              <div className="absolute top-4 right-4 sm:top-5 sm:right-6 font-['Cormorant_Garamond',serif] text-[36px] sm:text-[48px] text-[rgba(212,175,55,0.08)] font-light leading-none">
                {String(h.id).padStart(2, '0')}
              </div>
              {h.arabic && (
                <div
                  className="font-['Amiri'] text-[clamp(18px,3vw,28px)] text-[var(--gold-light)] leading-relaxed mb-4 text-right"
                  dir="rtl"
                >
                  {h.arabic}
                </div>
              )}
              <p className="text-[17px] text-[var(--cream)] leading-relaxed mb-3 italic">
                {h.text}
              </p>
              <div className="font-['Cinzel'] text-[11px] tracking-[2px] uppercase text-[var(--gold)]">
                {h.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
