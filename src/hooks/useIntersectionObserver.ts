'use client';

import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const els = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els.forEach((e) => obs.observe(e));
    return () => els.forEach((e) => obs.unobserve(e));
  }, []);

  return ref;
}
