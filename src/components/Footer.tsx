export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] py-12 sm:py-16 px-4 sm:px-6 md:px-10 text-center pb-[calc(2rem+env(safe-area-inset-bottom))]">
      <div className="relative z-10">
        <div className="font-['Amiri'] text-[24px] sm:text-[28px] text-[var(--gold)] mb-2 sm:mb-3" dir="rtl">
          رَمَضَانُ مُبَارَكٌ
        </div>
        <p className="text-[13px] sm:text-[14px] text-[var(--muted)] mb-6 sm:mb-8 px-2">
          May Allah accept your fasting, your prayers, and your duas.
          <br />
          May He grant you Laylat ul-Qadr and write you among the forgiven.
        </p>
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
          <a href="#home" className="text-[var(--muted)] font-['Cinzel'] text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase no-underline hover:text-[var(--gold)] transition-colors">
            ↑ Top
          </a>
            <a href="#roadmap" className="text-[var(--muted)] font-['Cinzel'] text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase no-underline hover:text-[var(--gold)] transition-colors">
            Roadmap
          </a>
            <a href="#qadr" className="text-[var(--muted)] font-['Cinzel'] text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase no-underline hover:text-[var(--gold)] transition-colors">
            Laylat ul-Qadr
          </a>
            <a href="#hadiths" className="text-[var(--muted)] font-['Cinzel'] text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase no-underline hover:text-[var(--gold)] transition-colors">
            Hadiths
          </a>
            <a href="#history" className="text-[var(--muted)] font-['Cinzel'] text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase no-underline hover:text-[var(--gold)] transition-colors">
            History
          </a>
            <a href="#duas" className="text-[var(--muted)] font-['Cinzel'] text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase no-underline hover:text-[var(--gold)] transition-colors">
            Duas
          </a>
        </div>
        <div className="mt-8 sm:mt-10 text-[11px] sm:text-xs text-[var(--muted)] border-t border-[var(--border)] pt-4 sm:pt-6">
          &quot;And those who strive for Us — We will surely guide them to Our ways.&quot; — Quran 29:69
        </div>
      </div>
    </footer>
  );
}
