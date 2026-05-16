'use client';

import { useEffect, useState } from 'react';

type Phase = 'init' | 'logo' | 'name' | 'sub' | 'bar' | 'exit' | 'done';

export function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>('init');

  useEffect(() => {
    if (sessionStorage.getItem('ml-intro')) {
      setPhase('done');
      return;
    }

    const t: ReturnType<typeof setTimeout>[] = [
      setTimeout(() => setPhase('logo'),  120),
      setTimeout(() => setPhase('name'),  480),
      setTimeout(() => setPhase('sub'),   980),
      setTimeout(() => setPhase('bar'),  1180),
      setTimeout(() => setPhase('exit'), 2600),
      setTimeout(() => {
        sessionStorage.setItem('ml-intro', '1');
        setPhase('done');
      }, 3350),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  if (phase === 'done') return null;

  const exiting = phase === 'exit';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'linear-gradient(160deg, #FFF9F7 0%, #FAF6F0 50%, #F5EEE4 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: exiting ? 0 : 1,
        transform: exiting ? 'scale(1.04)' : 'scale(1)',
        transition: exiting
          ? 'opacity 0.75s cubic-bezier(0.4,0,1,1), transform 0.75s cubic-bezier(0.4,0,1,1)'
          : 'none',
        pointerEvents: exiting ? 'none' : undefined,
      }}
    >
      {/* Subtle warm glow bg */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(43,128,240,0.06) 0%, transparent 70%)',
      }} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.06,
        pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(43,128,240,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(43,128,240,0.3) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Logo icon */}
        <div style={{
          width: 60,
          height: 60,
          borderRadius: 18,
          background: 'linear-gradient(135deg, #0C0C0C, #2B80F0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 28,
          boxShadow: '0 8px 40px rgba(43,128,240,0.25), 0 0 0 1px rgba(43,128,240,0.15)',
          opacity: phase !== 'init' ? 1 : 0,
          transform: phase !== 'init' ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.75)',
          transition: 'opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <svg width="46" height="40" viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 12,12 L 12,178 L 68,178 L 68,100 L 106,12 Z" fill="rgba(255,255,255,0.95)"/>
            <path d="M 113,178 L 113,64 C 111,-6 210,-6 208,64 L 208,178 L 162,178 L 162,64 C 162,38 130,38 130,64 L 130,178 Z" fill="rgba(255,255,255,0.70)"/>
            <line x1="113" y1="61" x2="82" y2="100" stroke="rgba(255,255,255,0.9)" strokeWidth="7" strokeLinecap="round"/>
            <circle cx="113" cy="61" r="15" fill="rgba(255,255,255,0.25)"/>
            <circle cx="113" cy="61" r="9"  fill="white"/>
            <circle cx="82"  cy="100" r="9" fill="rgba(255,255,255,0.9)"/>
          </svg>
        </div>

        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'baseline', overflow: 'hidden', lineHeight: 1 }}>
          <span style={{
            fontFamily: 'var(--font-jakarta, system-ui, sans-serif)',
            fontSize: 'clamp(3.2rem, 10vw, 6.5rem)',
            fontWeight: 700,
            letterSpacing: '0.01em',
            color: '#0B1628',
            lineHeight: 1,
            opacity: ['name','sub','bar','exit'].includes(phase) ? 1 : 0,
            transform: ['name','sub','bar','exit'].includes(phase) ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}>Met</span>

          <span style={{
            fontFamily: 'var(--font-jakarta, system-ui, sans-serif)',
            fontSize: 'clamp(3.2rem, 10vw, 6.5rem)',
            fontWeight: 700,
            letterSpacing: '0.01em',
            color: '#2B80F0',
            lineHeight: 1,
            opacity: ['name','sub','bar','exit'].includes(phase) ? 1 : 0,
            transform: ['name','sub','bar','exit'].includes(phase) ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.06s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.06s',
          }}>link</span>
        </div>

        {/* Tagline */}
        <p style={{
          marginTop: 14,
          fontSize: 11,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.42em',
          color: '#ADA09A',
          opacity: ['sub','bar','exit'].includes(phase) ? 1 : 0,
          transform: ['sub','bar','exit'].includes(phase) ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.45s ease, transform 0.45s ease',
        }}>
          AI Marketing &amp; Development Agency
        </p>

        {/* Progress bar */}
        <div style={{
          marginTop: 52,
          width: 140,
          height: 2,
          background: '#E5DDD5',
          borderRadius: 2,
          overflow: 'hidden',
          opacity: ['bar','exit'].includes(phase) ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(to right, #2B80F0, #5FA8FF)',
            borderRadius: 2,
            width: ['bar','exit'].includes(phase) ? '100%' : '0%',
            transition: 'width 1.4s cubic-bezier(0.4,0,0.2,1)',
          }} />
        </div>
      </div>
    </div>
  );
}