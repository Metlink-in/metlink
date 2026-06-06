'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Counts a numeric value up from 0 when it scrolls into view.
 * Preserves any prefix (e.g. "$") and suffix (e.g. "+", "%", "M+") from the
 * source string, so "$5M+", "450+", "80%" all animate their number part.
 */
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('0');
  const done = useRef(false);

  // Parse "$5M+" -> prefix "$", number 5, suffix "M+"
  const match = String(value).match(/^(\D*)([\d.,]+)(.*)$/);
  const prefix = match?.[1] ?? '';
  const numStr = match?.[2] ?? '';
  const suffix = match?.[3] ?? '';
  const target = parseFloat(numStr.replace(/,/g, '')) || 0;
  const decimals = numStr.includes('.') ? (numStr.split('.')[1]?.length ?? 0) : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) { setDisplay(value); return; }

    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        const current = target * eased;
        setDisplay(current.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }));
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(target.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }));
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!match) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}
