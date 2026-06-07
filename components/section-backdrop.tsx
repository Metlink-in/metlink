import React from 'react';

/**
 * Site-wide section background. Shows a full-bleed background IMAGE (fixed, so
 * it reads as one continuous backdrop across the whole site) dimmed by a dark
 * scrim for text legibility, over a faint grid + soft glows that also act as a
 * graceful fallback if the image file is missing.
 *
 * Drop the image at: public/bg/site-bg.jpg  (change SITE_BG below for another
 * name/extension). Applied to every non-hero section; heroes/videos opt out by
 * simply not rendering this component.
 *
 * Parent <section> should be `relative overflow-hidden` (+ `isolate` when using
 * the `behind` variant so the z-index:-1 layer stays scoped to the section).
 */
const SITE_BG = '/bg/site-bg.jpg';

export function SectionBackdrop({ tint = '#2B80F0', tint2 = '#8B5CF6', behind = false }: { tint?: string; tint2?: string; behind?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden style={behind ? { zIndex: -1 } : undefined}>
      {/* Background image (fixed = continuous across sections) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${SITE_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Dark scrim for legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(5,11,20,0.82) 0%, rgba(5,11,20,0.66) 42%, rgba(5,11,20,0.86) 100%)' }}
      />
      {/* Faint grid (also the fallback texture if the image is absent) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 38%, #000 25%, transparent 82%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 38%, #000 25%, transparent 82%)',
        }}
      />
      {/* Soft glows */}
      <div
        className="absolute -top-24 left-[18%] w-[620px] h-[420px]"
        style={{ background: `radial-gradient(ellipse, ${tint}1A 0%, transparent 70%)`, filter: 'blur(70px)' }}
      />
      <div
        className="absolute bottom-[-10%] right-[14%] w-[520px] h-[380px]"
        style={{ background: `radial-gradient(ellipse, ${tint2}12 0%, transparent 70%)`, filter: 'blur(85px)' }}
      />
    </div>
  );
}
