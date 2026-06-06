'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Site-wide magnetic buttons. Mounted once in the public shell; on every route
 * change it (re)attaches a cursor-follow effect to all prominent CTA buttons:
 * the .btn-* classes, any "Book a call" (calendly) link, form submit buttons,
 * and anything opted-in with [data-magnetic]. Small icon buttons are skipped.
 */
export function GlobalMagnetic() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return; // skip touch devices

    const SELECTOR = '.btn-primary, .btn-outline, .btn-primary-glass, a[href*="calendly.com"], button[type="submit"], [data-magnetic]';
    const STRENGTH = 0.3;
    const cleanups: Array<() => void> = [];

    const attach = () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
      els.forEach(el => {
        if (el.dataset.magneticBound === '1') return;     // avoid double-binding
        if (el.offsetWidth < 96) return;                  // skip tiny icon buttons
        el.dataset.magneticBound = '1';
        el.style.transition = 'transform 0.25s cubic-bezier(0.16,1,0.3,1)';
        el.style.willChange = 'transform';

        const move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - (r.left + r.width / 2)) * STRENGTH;
          const y = (e.clientY - (r.top + r.height / 2)) * STRENGTH;
          el.style.transform = `translate(${x}px, ${y}px)`;
        };
        const leave = () => { el.style.transform = 'translate(0px, 0px)'; };

        el.addEventListener('mousemove', move);
        el.addEventListener('mouseleave', leave);
        cleanups.push(() => {
          el.removeEventListener('mousemove', move);
          el.removeEventListener('mouseleave', leave);
          el.style.transform = '';
          delete el.dataset.magneticBound;
        });
      });
    };

    // Wait for the page-transition / mount to settle, then bind.
    const t = setTimeout(attach, 500);

    return () => {
      clearTimeout(t);
      cleanups.forEach(fn => fn());
    };
  }, [pathname]);

  return null;
}
