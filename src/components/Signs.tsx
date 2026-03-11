'use client';

import SectionLabel from './SectionLabel';
import { useReveal } from '@/hooks/useIntersectionObserver';
import { signs } from '@/data/content';

export default function Signs() {
  const ref = useReveal();

  return (
    <section id="signs" className="bg-[var(--ink)]" ref={ref}>
      <div className="max-w-[1100px] mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
        <SectionLabel label="Signs of the Night" />
        <h2 className="text-[clamp(32px,5vw,54px)] font-light text-[var(--cream)] leading-tight mb-4">
          How to <em className="text-[var(--gold)] not-italic">Recognize</em> Laylat ul-Qadr
        </h2>
        <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[600px] mb-0">
          The Prophet ﷺ and his companions described signs that may indicate when Laylat ul-Qadr has passed or arrived. Use these as motivation, not certainty.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-12 sm:mt-16">
          {signs.map((sign, i) => (
            <div
              key={i}
              className="reveal bg-[var(--panel)] border border-[rgba(184,154,255,0.15)] p-5 sm:p-6 lg:p-8 text-center relative overflow-hidden transition-all hover:border-[rgba(184,154,255,0.4)] hover:-translate-y-1 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,154,255,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative text-[32px] sm:text-[40px] mb-3 sm:mb-4">{sign.icon}</div>
              <div className="relative font-['Cinzel'] text-xs tracking-[2px] text-[var(--qadr)] uppercase mb-2.5">
                {sign.title}
              </div>
              <p className="relative text-[14px] text-[var(--muted)] leading-relaxed">{sign.text}</p>
              <div className="relative text-[11px] text-[rgba(184,154,255,0.4)] mt-2.5 italic">
                {sign.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
