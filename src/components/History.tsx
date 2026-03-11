'use client';

import Image from 'next/image';
import SectionLabel from './SectionLabel';
import { useReveal } from '@/hooks/useIntersectionObserver';
import { historyItems } from '@/data/content';

export default function History() {
  const ref = useReveal();

  return (
    <section id="history" className="bg-[var(--deep)]" ref={ref}>
      <div className="max-w-[1100px] mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
        <SectionLabel label="Sacred History" />
        <h2 className="text-[clamp(32px,5vw,54px)] font-light text-[var(--cream)] leading-tight mb-4">
          The History of <em className="text-[var(--gold)] not-italic">Laylat ul-Qadr</em>
        </h2>
        <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[600px] mb-0">
          From the first revelation to the practice of the companions, the story of this blessed night spans centuries.
        </p>

        <div className="reveal mt-12 sm:mt-16">
          {historyItems.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[60px_1px_1fr] sm:grid-cols-[80px_1px_1fr] md:grid-cols-[120px_1px_1fr] gap-0 gap-x-3 sm:gap-x-4 md:gap-x-8 relative mb-12 last:mb-0"
            >
              <div className="text-right py-4 pb-8 sm:py-5 sm:pb-10 font-['Cinzel'] text-[9px] sm:text-[11px] tracking-[1px] sm:tracking-[2px] text-[var(--gold)] uppercase whitespace-pre-line leading-tight">
                {item.date}
              </div>
              <div className="relative">
                <div
                  className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--gold)] absolute top-5 sm:top-6 left-0 -translate-x-1/2"
                  style={{ boxShadow: '0 0 12px rgba(212,175,55,0.4)' }}
                />
                {i < historyItems.length - 1 && (
                  <div className="absolute left-0 top-5 sm:top-6 bottom-0 w-px bg-[var(--border)]" style={{ left: '4px' }} />
                )}
              </div>
              <div className="py-3 pb-8 sm:py-4 sm:pb-10">
                <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-start">
                  <div className="flex-1 min-w-0">
                    <div className="text-lg sm:text-xl text-[var(--cream)] mb-1.5 sm:mb-2 font-normal">{item.title}</div>
                    <p className="text-[14px] sm:text-[15px] text-[var(--muted)] leading-relaxed">{item.text}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:flex-shrink-0">
                    <div className="relative w-full max-w-[320px] aspect-[4/3] rounded overflow-hidden border border-[var(--border)] group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 320px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,16,0.4)] to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
