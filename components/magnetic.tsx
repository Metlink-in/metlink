'use client';
import { useRef, ReactNode } from 'react';

/**
 * Wraps content so it subtly pulls toward the cursor on hover (magnetic effect).
 * Renders an inline-block span; pass through className for layout.
 */
export function Magnetic({ children, strength = 0.35, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0px, 0px)';
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`inline-block ${className}`}
      style={{ transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)', willChange: 'transform' }}
    >
      {children}
    </span>
  );
}
