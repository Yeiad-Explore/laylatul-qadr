'use client';

import { useState } from 'react';

const links = [
  { label: 'Introduction', href: '#intro' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Laylat ul-Qadr', href: '#qadr' },
  { label: 'Hadiths', href: '#hadiths' },
  { label: 'History', href: '#history' },
  { label: 'Duas', href: '#duas' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-[100] bg-[rgba(8,8,16,0.9)] backdrop-blur-md border-b border-[var(--border)] px-4 sm:px-6 md:px-10 h-14 sm:h-16 flex items-center justify-between">
      <a href="#home" className="font-['Cinzel'] text-[11px] sm:text-[13px] tracking-[3px] sm:tracking-[4px] text-[var(--gold)] uppercase no-underline truncate max-w-[60vw] sm:max-w-none">
        العشر الأواخر · Last 10 Nights
      </a>
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 -mr-2 text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`absolute top-full left-0 right-0 bg-[rgba(8,8,16,0.98)] backdrop-blur-md border-b border-[var(--border)] md:static md:bg-transparent md:border-0 py-4 md:py-0 ${
          open ? 'flex flex-col' : 'hidden'
        } md:flex flex-row`}
      >
        <div className="flex flex-col md:flex-row md:gap-6 lg:gap-8 px-4 md:px-0 gap-0">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[var(--muted)] text-xs tracking-[3px] uppercase no-underline hover:text-[var(--gold)] transition-colors py-3 md:py-0 border-b border-[var(--border)] last:border-0 md:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
