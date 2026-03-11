'use client';

import SectionLabel from './SectionLabel';
import { useReveal } from '@/hooks/useIntersectionObserver';
import { qadrStats, qadrFeatures } from '@/data/content';

export default function Qadr() {
  const ref = useReveal();

  return (
    <section id="qadr" className="bg-[var(--deep)]" ref={ref}>
      <div className="max-w-[1100px] mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
        <SectionLabel label="Laylat ul-Qadr" />
        <h2 className="text-[clamp(32px,5vw,54px)] font-light text-[var(--cream)] leading-tight mb-4">
          The Night of <em className="text-[var(--gold)] not-italic">Power & Decree</em>
        </h2>

        <div className="reveal text-center py-12 sm:py-16 px-4 sm:px-5">
          <div
            className="font-['Amiri'] text-[clamp(22px,5vw,52px)] sm:text-[clamp(26px,4vw,52px)] text-[var(--qadr)] leading-relaxed mb-4 sm:mb-5"
            style={{ textShadow: '0 0 60px rgba(184,154,255,0.3)' }}
            dir="rtl"
          >
            إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ۝ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ ۝ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ
          </div>
          <p className="text-[15px] text-[var(--muted)] italic leading-relaxed max-w-[700px] mx-auto mb-10">
            &quot;Indeed, We sent it [the Quran] down during the Night of Decree. And what can make you know what is the Night of Decree? The Night of Decree is better than a thousand months. The angels and the Spirit descend therein by permission of their Lord for every matter. Peace it is until the emergence of dawn.&quot;
            <br />
            <strong className="text-[var(--gold)]">— Surah Al-Qadr (97:1–5)</strong>
          </p>
        </div>

        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] mt-12 sm:mt-16">
          {qadrStats.map((stat, i) => (
            <div key={i} className="bg-[var(--panel)] p-6 sm:p-8 lg:p-10 text-center">
              <div className="font-['Cormorant_Garamond',serif] text-[36px] sm:text-[44px] lg:text-[52px] text-[var(--qadr)] leading-none mb-1 sm:mb-2 font-light">
                {stat.num}
              </div>
              <div className="font-['Cinzel'] text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase text-[var(--muted)]">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-[13px] text-[var(--muted)] mt-1 sm:mt-2 italic">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-12">
          {qadrFeatures.map((f, i) => (
            <div
              key={i}
              className="bg-[var(--panel)] border border-[rgba(184,154,255,0.15)] p-5 sm:p-6 lg:p-8"
            >
              <div className="text-[28px] mb-3.5">{f.icon}</div>
              <div className="font-['Cinzel'] text-xs tracking-[2px] uppercase text-[var(--qadr)] mb-2.5">
                {f.title}
              </div>
              <p className="text-[15px] text-[var(--muted)] leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
