'use client';

import { useState } from 'react';

export interface FaqItem { q: string; a: string }

/**
 * Shared FAQ accordion used site-wide so every page has identical look + behavior:
 * hover to preview-open, click to pin open, click the + (now ×) to close.
 */
export function FaqAccordion({ items, accent = '#2B80F0' }: { items: FaqItem[]; accent?: string }) {
  const [pinned, setPinned] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const isOpen = (i: number) => pinned === i || hovered === i;

  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
          style={{
            background: isOpen(i) ? `${accent}12` : 'rgba(255,255,255,0.04)',
            border: `1px solid ${isOpen(i) ? `${accent}40` : 'rgba(255,255,255,0.08)'}`,
          }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setPinned(pinned === i ? null : i)}
        >
          <div className="flex items-center justify-between gap-4 px-6 py-4">
            <span className="flex items-center" style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 500 }}>
              <span className="inline-block rounded-full shrink-0" style={{ width: 8, height: 8, background: accent, marginRight: 12 }} />
              {faq.q}
            </span>
            <span
              onClick={e => { if (isOpen(i)) { e.stopPropagation(); setPinned(null); setHovered(null); } }}
              className="shrink-0 transition-transform duration-300 flex items-center justify-center"
              style={{ transform: isOpen(i) ? 'rotate(45deg)' : 'rotate(0deg)', color: accent }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </div>
          {isOpen(i) && (
            <div className="px-6 pb-5" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              <span style={{ color: accent, fontWeight: 700, marginRight: 8 }}>→</span>{faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
