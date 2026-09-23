import React from 'react';

/**
 * Site-wide section background: the provided photo (public/bg/site-bg.jpg)
 * covered with a strong dark scrim so it blends with the dark theme and keeps
 * text legible, plus soft brand glows. Sits behind section content to add depth.
 *
 * Parent <section> should be `relative overflow-hidden` (and `isolate` when
 * using `behind`, which renders at z-index:-1 so normal-flow content stays on
 * top without extra wrappers).
 */
export function SectionBackdrop({ tint = '#2B80F0', tint2 = '#8B5CF6', behind = false }: { tint?: string; tint2?: string; behind?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden style={behind ? { zIndex: -1 } : undefined}>
      {/* Photo — WebP with a JPG fallback for browsers that don't support image-set() (see globals.css) */}
      <div
        className="absolute inset-0 section-backdrop-photo"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark scrim to blend with theme + legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(5,11,20,0.72) 0%, rgba(5,11,20,0.62) 45%, rgba(5,11,20,0.78) 100%)' }}
      />
      {/* Soft brand glows — kept as GPU-cheap as the look allows: smaller boxes,
          lighter blur radius, and their own compositor layer (translateZ) so
          scrolling doesn't repaint them every frame. This runs on nearly every
          section of every page, so its cost multiplies fast; a heavier blur
          here was a measurable source of scroll jank. */}
      <div
        className="absolute -top-24 left-[18%] w-[420px] h-[280px]"
        style={{ background: `radial-gradient(ellipse, ${tint}1A 0%, transparent 70%)`, filter: 'blur(48px)' }}
      />
      <div
        className="absolute bottom-[-10%] right-[14%] w-[360px] h-[260px]"
        style={{ background: `radial-gradient(ellipse, ${tint2}12 0%, transparent 70%)`, filter: 'blur(56px)' }}
      />
    </div>
  );
}
