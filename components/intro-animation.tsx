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
        background: '#030712',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: exiting ? 0 : 1,
        transform: exiting ? 'scale(1.06)' : 'scale(1)',
        transition: exiting ? 'opacity 0.75s cubic-bezier(0.4,0,1,1), transform 0.75s cubic-bezier(0.4,0,1,1)' : 'none',
        pointerEvents: exiting ? 'none' : undefined,
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: 'absolute', inset: 0, opacity: 0.18, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(6,182,212,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.05) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient radial glow */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(6,182,212,0.07) 0%, transparent 70%)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Logo icon */}
        <div
          style={{
            width: 60, height: 60,
            borderRadius: 18,
            background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 28,
            boxShadow: '0 0 50px rgba(6,182,212,0.4), 0 0 120px rgba(139,92,246,0.15)',
            opacity: phase !== 'init' ? 1 : 0,
            transform: phase !== 'init' ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.75)',
            transition: 'opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* M lettermark */}
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M4 24V6L10.5 6L15 14L19.5 6H26V24H22V13L15 24L8 13V24H4Z" fill="#030712" />
          </svg>
        </div>

        {/* MetLink wordmark */}
        <div style={{ display: 'flex', alignItems: 'baseline', overflow: 'hidden', lineHeight: 1 }}>
          {/* Met */}
          <span
            style={{
              fontFamily: 'var(--font-manrope, system-ui, sans-serif)',
              fontSize: 'clamp(3.2rem, 10vw, 6.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#E2E8F0',
              lineHeight: 1,
              opacity: ['name','sub','bar','exit'].includes(phase) ? 1 : 0,
              transform: ['name','sub','bar','exit'].includes(phase) ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            Met
          </span>

          {/* Link — gradient */}
          <span
            style={{
              fontFamily: 'var(--font-manrope, system-ui, sans-serif)',
              fontSize: 'clamp(3.2rem, 10vw, 6.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              opacity: ['name','sub','bar','exit'].includes(phase) ? 1 : 0,
              transform: ['name','sub','bar','exit'].includes(phase) ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.06s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.06s',
            }}
          >
            Link
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            marginTop: 14,
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.42em',
            color: '#334155',
            opacity: ['sub','bar','exit'].includes(phase) ? 1 : 0,
            transform: ['sub','bar','exit'].includes(phase) ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.45s ease, transform 0.45s ease',
          }}
        >
          AI Marketing &amp; Development Agency
        </p>

        {/* Progress bar */}
        <div
          style={{
            marginTop: 52,
            width: 140,
            height: 1,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 1,
            overflow: 'hidden',
            opacity: ['bar','exit'].includes(phase) ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(to right, #06B6D4, #8B5CF6)',
              borderRadius: 1,
              width: ['bar','exit'].includes(phase) ? '100%' : '0%',
              transition: 'width 1.4s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
