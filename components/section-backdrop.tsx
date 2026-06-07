import React from 'react';

/**
 * Subtle, theme-matching section background: a faint grid that fades toward the
 * edges plus two soft color glows. Sits behind section content to add depth so
 * dark sections don't read as flat/empty. Purely decorative.
 *
 * Parent <section> must be `relative overflow-hidden`. Drop this as the first
 * child, then keep the real content above it (e.g. in a `relative z-10` wrapper
 * or simply later in the DOM).
 */
export function SectionBackdrop({ tint = '#2B80F0', tint2 = '#8B5CF6', behind = false }: { tint?: string; tint2?: string; behind?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden style={behind ? { zIndex: -1 } : undefined}>
      {/* Fading grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 38%, #000 25%, transparent 82%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 38%, #000 25%, transparent 82%)',
        }}
      />
      {/* Soft glows */}
      <div
        className="absolute -top-24 left-[18%] w-[620px] h-[420px]"
        style={{ background: `radial-gradient(ellipse, ${tint}1F 0%, transparent 70%)`, filter: 'blur(70px)' }}
      />
      <div
        className="absolute bottom-[-10%] right-[14%] w-[520px] h-[380px]"
        style={{ background: `radial-gradient(ellipse, ${tint2}14 0%, transparent 70%)`, filter: 'blur(85px)' }}
      />
    </div>
  );
}
