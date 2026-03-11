'use client';

import SectionLabel from './SectionLabel';
import { useReveal } from '@/hooks/useIntersectionObserver';
import { nights } from '@/data/content';

export default function Roadmap() {
  const ref = useReveal();

  return (
    <section id="roadmap" className="bg-gradient-to-b from-[var(--ink)] via-[var(--deep)] to-[var(--ink)]" ref={ref}>
      <div className="max-w-[1100px] mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
        <SectionLabel label="Night-by-Night Roadmap" />
        <h2 className="text-[clamp(26px,5vw,54px)] sm:text-[clamp(32px,5vw,54px)] font-light text-[var(--cream)] leading-tight mb-3 sm:mb-4">
          Your <em className="text-[var(--gold)] not-italic">10-Night</em> Journey
        </h2>
        <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[600px]">
          Each night has a theme, a spiritual focus, and a set of recommended acts. Odd nights are marked as Laylat ul-Qadr candidates — worship them as if each is THE night.
        </p>

        <div className="relative mt-12 sm:mt-16">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold-dim)] to-transparent md:-translate-x-1/2" />
          {nights.map((night, i) => {
            const isOdd = night.type === 'odd' || night.type === 'special';
            const isSpecial = night.type === 'special';
            const isFarewell = night.type === 'farewell';
            const isLeft = i % 2 === 0;

            return (
              <div
                key={night.night}
                className="grid grid-cols-[44px_1fr] sm:grid-cols-[48px_1fr] md:grid-cols-[1fr_60px_1fr] gap-0 gap-x-3 sm:gap-x-0 mb-10 sm:mb-12 items-start"
              >
                {isLeft ? (
                  <>
                    <div className="flex justify-center col-start-1 row-start-1 md:col-start-2 md:row-start-1">
                      <div
                        className={`w-12 h-12 rounded-full border flex items-center justify-center mx-auto bg-[var(--deep)] font-['Cormorant_Garamond'] text-[13px] text-[var(--gold)] transition-all hover:scale-110 cursor-pointer relative z-[2] ${
                          isOdd ? 'border-[var(--qadr)] shadow-[0_0_20px_rgba(184,154,255,0.2)] text-[var(--qadr)] animate-[qadr-pulse_3s_ease-in-out_infinite]' : ''
                        } ${isSpecial ? 'border-[var(--gold)] shadow-[0_0_30px_rgba(212,175,55,0.4)] text-[var(--gold)]' : ''} ${isFarewell ? 'border-[rgba(160,200,255,0.4)] text-[#a0c8ff]' : 'border-[var(--gold-dim)]'}`}
                      >
                        {night.night}
                      </div>
                    </div>
                    <div className={`night-content col-start-2 md:col-start-1 row-start-1 bg-[var(--panel)] border border-[var(--border)] p-4 sm:p-5 md:pr-12 text-left md:text-right transition-colors hover:border-[var(--gold-dim)] min-w-0 ${isOdd ? 'border-[rgba(184,154,255,0.2)] hover:border-[rgba(184,154,255,0.5)]' : ''} ${isFarewell ? 'border-[rgba(160,200,255,0.2)]' : ''} reveal-left`}>
                      <div className={`font-['Cinzel'] text-[10px] tracking-[3px] uppercase mb-1 ${isOdd ? 'text-[var(--qadr)]' : ''} ${isSpecial ? 'text-[var(--gold-light)]' : ''} ${isFarewell ? 'text-[#a0c8ff]' : 'text-[var(--gold)]'}`}>
                        Night {night.night} · {night.type === 'special' ? '⭐ THE Greatest Candidate' : night.type === 'odd' ? '⭐ Odd — Laylat ul-Qadr Candidate' : night.type === 'farewell' ? 'The Farewell' : 'Even'}
                      </div>
                      <div className={`text-lg text-[var(--cream)] mb-1.5 ${isSpecial ? 'text-xl' : ''}`}>{night.theme}</div>
                      <div className={`text-[13px] text-[var(--muted)] italic mb-2.5 ${isSpecial ? 'text-[var(--gold)]' : ''}`}>{night.focus}</div>
                      <ul className="list-none">
                        {night.acts.map((act, j) => (
                          <li key={j} className="text-[13px] text-[var(--muted)] py-0.5 flex items-start gap-2 md:justify-end">
                            <span className="text-[var(--gold-dim)] text-[7px] mt-1">◆</span>
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden md:block md:col-start-3 md:row-start-1" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:col-start-1 md:row-start-1" />
                    <div className="flex justify-center col-start-1 md:col-start-2 row-start-1">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center mx-auto bg-[var(--deep)] font-['Cormorant_Garamond'] text-[12px] sm:text-[13px] text-[var(--gold)] transition-all hover:scale-110 cursor-pointer relative z-[2] flex-shrink-0 ${
                          isOdd ? 'border-[var(--qadr)] shadow-[0_0_20px_rgba(184,154,255,0.2)] text-[var(--qadr)]' : 'border-[var(--gold-dim)]'
                        }`}
                      >
                        {night.night}
                      </div>
                    </div>
                    <div className={`night-content col-start-2 md:col-start-3 row-start-1 bg-[var(--panel)] border border-[var(--border)] p-4 sm:p-5 md:pl-12 text-left transition-colors hover:border-[var(--gold-dim)] min-w-0 ${isFarewell ? 'border-[rgba(160,200,255,0.2)]' : ''} reveal-right`}>
                      <div className={`font-['Cinzel'] text-[10px] tracking-[3px] uppercase mb-1 ${isFarewell ? 'text-[#a0c8ff]' : 'text-[var(--gold)]'}`}>
                        Night {night.night} · {night.type === 'farewell' ? 'The Farewell' : 'Even'}
                      </div>
                      <div className="text-lg text-[var(--cream)] mb-1.5">{night.theme}</div>
                      <div className="text-[13px] text-[var(--muted)] italic mb-2.5">{night.focus}</div>
                      <ul className="list-none">
                        {night.acts.map((act, j) => (
                          <li key={j} className="text-[13px] text-[var(--muted)] py-0.5 flex items-start gap-2">
                            <span className="text-[var(--gold-dim)] text-[7px] mt-1">◆</span>
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
