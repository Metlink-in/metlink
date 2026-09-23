'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

/** Site-wide smooth (inertia) scrolling via Lenis. Renders nothing. */
export function SmoothScroll() {
  useEffect(() => {
    // Respect users who prefer reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Disable on finger-touch screens (phones/tablets) only — NOT laptops with
    // trackpads. `pointer: coarse` is true only on touchscreen-primary devices.
    // Using maxTouchPoints or ontouchstart would incorrectly match Windows
    // precision trackpads and MacBooks (which also report touch support).
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    // Expose so route changes can reset scroll to top.
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}
