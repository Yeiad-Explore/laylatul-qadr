'use client';

import { useScrollPosition } from '@/hooks/useScrollParallax';

export default function Hero() {
  const scrollY = useScrollPosition();

  return (
    <section className="min-h-screen min-h-[100dvh] flex flex-col items-center justify-center relative z-10 text-center px-4 sm:px-6 py-24 sm:py-20 pt-[calc(3.5rem+env(safe-area-inset-top))] overflow-hidden" id="home">
      <div
        className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_60px,rgba(212,175,55,0.03)_60px,rgba(212,175,55,0.03)_61px),repeating-linear-gradient(90deg,transparent,transparent_60px,rgba(212,175,55,0.03)_60px,rgba(212,175,55,0.03)_61px)] pointer-events-none will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.06}px, 0)` }}
      />
      <div
        className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none blur-[60px] sm:blur-[80px] bg-[rgba(184,154,255,0.06)] -top-12 sm:-top-24 -right-12 sm:-right-24 animate-pulse will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.04}px, 0)` }}
      />
      <div
        className="absolute w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] rounded-full pointer-events-none blur-[60px] sm:blur-[80px] bg-[rgba(212,175,55,0.05)] bottom-12 sm:bottom-24 -left-6 sm:-left-12 animate-pulse will-change-transform"
        style={{ animationDelay: '5s', transform: `translate3d(0, ${-scrollY * 0.03}px, 0)` }}
      />

      <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] mx-auto mb-4 sm:mb-6 animate-[rotate-slow_60s_linear_infinite]">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <circle cx="100" cy="100" r="95" stroke="rgba(212,175,55,0.2)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="75" stroke="rgba(212,175,55,0.15)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="55" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
          <path d="M100 20 L108 80 L160 60 L120 100 L160 140 L108 120 L100 180 L92 120 L40 140 L80 100 L40 60 L92 80 Z" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" fill="none" />
          <path d="M100 40 L114 86 L160 72 L126 100 L160 128 L114 114 L100 160 L86 114 L40 128 L74 100 L40 72 L86 86 Z" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" fill="none" />
          <circle cx="100" cy="100" r="18" stroke="rgba(212,175,55,0.5)" strokeWidth="0.8" fill="none" />
          <circle cx="107" cy="95" r="13" fill="rgba(8,8,16,0.9)" stroke="rgba(212,175,55,0.3)" strokeWidth="0.5" />
          {[[100,20],[160,60],[180,100],[160,140],[100,180],[40,140],[20,100],[40,60]].map(([cx,cy],i)=>(
            <circle key={i} cx={cx} cy={cy} r="2" fill="rgba(212,175,55,0.6)" />
          ))}
        </svg>
      </div>

      <div className="font-['Amiri'] text-[clamp(42px,8vw,90px)] text-[var(--gold-light)] leading-tight mb-2 animate-[fadeUp_1.2s_ease_forwards] opacity-0" style={{ textShadow: '0 0 60px rgba(212,175,55,0.3)' }}>
        العشر الأواخر
      </div>
      <div className="font-['Cinzel'] text-[clamp(12px,2.5vw,20px)] sm:tracking-[6px] md:tracking-[8px] tracking-[4px] uppercase text-[var(--muted)] mb-4 sm:mb-5 animate-[fadeUp_1.2s_ease_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
        The Last Ten Nights of Ramadan
      </div>
      <p className="text-[clamp(14px,2.5vw,22px)] text-[var(--text)] max-w-[560px] leading-relaxed italic mb-8 sm:mb-12 px-1 animate-[fadeUp_1.2s_ease_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
        &quot;Seek Laylat ul-Qadr in the odd nights of the last ten days of Ramadan.&quot;
        <br className="hidden sm:block" />
        <span className="block sm:inline mt-1 sm:mt-0 text-[12px] sm:text-[13px] text-[var(--muted)]">— Sahih al-Bukhari · Sahih Muslim</span>
      </p>
      <a href="#intro" className="inline-flex items-center gap-2 bg-transparent border border-[var(--gold-dim)] text-[var(--gold)] py-3 px-6 sm:py-3.5 sm:px-9 font-['Cinzel'] text-[11px] sm:text-xs tracking-[3px] sm:tracking-[4px] uppercase no-underline cursor-pointer transition-all hover:bg-[var(--gold-dim)] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] animate-[fadeUp_1.2s_ease_forwards] opacity-0 touch-manipulation" style={{ animationDelay: '0.6s' }}>
        Begin the Journey ↓
      </a>
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)] text-[10px] tracking-[3px] uppercase animate-[fadeUp_1.2s_ease_forwards] opacity-0 pb-[env(safe-area-inset-bottom)]" style={{ animationDelay: '1s' }}>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--gold-dim)] to-transparent animate-pulse" />
        Scroll
      </div>
    </section>
  );
}
