'use client';

import SectionLabel from './SectionLabel';
import { useReveal } from '@/hooks/useIntersectionObserver';
import { duas } from '@/data/content';

export default function Duas() {
  const ref = useReveal();

  return (
    <section id="duas" className="bg-[var(--ink)]" ref={ref}>
      <div className="max-w-[1100px] mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
        <SectionLabel label="Sacred Supplications" />
        <h2 className="text-[clamp(32px,5vw,54px)] font-light text-[var(--cream)] leading-tight mb-4">
          Essential <em className="text-[var(--gold)] not-italic">Duas</em> for the Last 10 Nights
        </h2>
        <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[600px] mb-0">
          These are the most important supplications to make during the blessed nights. Memorize them. Repeat them with presence of heart.
        </p>

        <div className="grid gap-5 sm:gap-6 mt-12 sm:mt-16">
          {duas.map((dua, i) => (
            <div
              key={i}
              className="reveal bg-[var(--panel)] border border-[var(--border)] p-5 sm:p-6 lg:p-9 text-center transition-all hover:border-[var(--gold-dim)]"
            >
              <div
                className="font-['Amiri'] text-[clamp(20px,4vw,36px)] text-[var(--gold-light)] leading-relaxed mb-3 sm:mb-4"
                dir="rtl"
              >
                {dua.arabic}
              </div>
              <div className="text-[15px] text-[var(--qadr)] italic mb-3">{dua.translit}</div>
              <p className="text-[15px] text-[var(--muted)] leading-relaxed">{dua.meaning}</p>
              <div className="inline-block mt-4 bg-[rgba(212,175,55,0.1)] border border-[var(--gold-dim)] text-[var(--gold)] font-['Cinzel'] text-[10px] tracking-[2px] uppercase py-1.5 px-3.5">
                {dua.occasion}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
