'use client';

import { useEffect, useState } from 'react';

type Phase = 'init' | 'logo' | 'rings' | 'expand' | 'close' | 'done';

export function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>('init');

  useEffect(() => {
    if (sessionStorage.getItem('ml-intro')) {
      setPhase('done');
      return;
    }

    const t = [
      setTimeout(() => setPhase('logo'),    130),
      setTimeout(() => setPhase('rings'),   700),
      setTimeout(() => setPhase('expand'), 1350),
      setTimeout(() => setPhase('close'),  2050),
      setTimeout(() => {
        sessionStorage.setItem('ml-intro', '1');
        setPhase('done');
      }, 2850),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  if (phase === 'done') return null;

  const showLogo    = ['logo','rings','expand'].includes(phase);
  const showRings   = ['rings','expand','close'].includes(phase);
  const isExpanded  = ['expand','close'].includes(phase);
  const isClosing   = phase === 'close';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        /* Portal close — circle shrinks to nothing, revealing the site */
        clipPath: isClosing ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)',
        transition: isClosing
          ? 'clip-path 0.72s cubic-bezier(0.7,0,0.84,0)'
          : 'none',
        pointerEvents: isClosing ? 'none' : undefined,
      }}
    >
      {/* Background — matches site theme */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 80% at 50% 48%, #071628 0%, #050B14 50%, #020608 100%)',
      }} />

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        opacity: 0.7,
      }} />

      {/* Deep portal glow */}
      <div style={{
        position: 'absolute',
        width: 480, height: 480,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(43,128,240,0.28) 0%, rgba(43,128,240,0.08) 45%, transparent 70%)',
        filter: 'blur(48px)',
        opacity: showRings ? 1 : 0,
        transform: isExpanded ? 'scale(3.2)' : 'scale(0.6)',
        transition: 'opacity 0.7s ease, transform 1.1s cubic-bezier(0.16,1,0.3,1)',
      }} />

      {/* Portal rings — expand outward */}
      {[120, 200, 290, 390, 500].map((size, i) => (
        <div key={size} style={{
          position: 'absolute',
          width: size, height: size,
          borderRadius: '50%',
          border: `1px solid rgba(43,128,240,${(0.7 - i * 0.12).toFixed(2)})`,
          boxShadow: `0 0 ${12 + i * 10}px rgba(43,128,240,${(0.3 - i * 0.05).toFixed(2)}), inset 0 0 ${8 + i * 4}px rgba(43,128,240,${(0.12 - i * 0.02).toFixed(2)})`,
          opacity: showRings ? 1 : 0,
          transform: isExpanded
            ? `scale(${1 + i * 0.55})`
            : 'scale(0.35)',
          transition: `opacity 0.5s ease ${i * 0.055}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${i * 0.045}s`,
        }} />
      ))}

      {/* Inner bright ring */}
      <div style={{
        position: 'absolute',
        width: 90, height: 90,
        borderRadius: '50%',
        border: '1.5px solid rgba(95,168,255,0.9)',
        boxShadow: '0 0 24px rgba(95,168,255,0.5), inset 0 0 16px rgba(95,168,255,0.2)',
        opacity: showRings ? 1 : 0,
        transform: isExpanded ? 'scale(1.3)' : 'scale(0.4)',
        transition: 'opacity 0.4s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)',
      }} />

      {/* Logo */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: showLogo ? 1 : 0,
        transform: showLogo
          ? (isExpanded ? 'translateY(-6px) scale(1.04)' : 'translateY(0) scale(1)')
          : 'translateY(32px) scale(0.88)',
        transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)',
        filter: showRings ? 'drop-shadow(0 0 28px rgba(43,128,240,0.55))' : 'none',
      }}>
        <img
          src="/logo-mark.png"
          alt="Metlink"
          style={{
            width: 'clamp(100px, 14vw, 140px)',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 20,
            filter: showRings
              ? 'drop-shadow(0 0 28px rgba(43,128,240,0.7)) drop-shadow(0 0 60px rgba(43,128,240,0.3))'
              : 'none',
          }}
        />
      </div>
    </div>
  );
}
