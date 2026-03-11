'use client';

import SectionLabel from './SectionLabel';
import { useReveal } from '@/hooks/useIntersectionObserver';
import { introCards } from '@/data/content';

export default function Intro() {
  const ref = useReveal();

  return (
    <section id="intro" ref={ref}>
      <div className="max-w-[1100px] mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
        <SectionLabel label="Introduction" />
        <h2 className="text-[clamp(28px,5vw,54px)] font-light text-[var(--cream)] leading-tight mb-4">
          The Most <em className="text-[var(--gold)] not-italic">Sacred Nights</em>
          <br className="hidden sm:block" />
          {' '}of the Islamic Year
        </h2>
        <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[600px] mb-0">
          The last ten nights of Ramadan are unlike any other time. Within them hides a night worth more than a lifetime of worship. This is your guide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {introCards.map((card, i) => (
            <div
              key={i}
              className="reveal bg-[var(--panel)] border border-[var(--border)] p-5 sm:p-6 lg:p-8 relative overflow-hidden transition-all hover:border-[var(--gold-dim)] hover:-translate-y-1 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[32px] mb-4">{card.icon}</div>
              <div className="font-['Cinzel'] text-[13px] tracking-[2px] text-[var(--gold)] uppercase mb-2.5">
                {card.title}
              </div>
              <p className="text-[15px] text-[var(--muted)] leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
