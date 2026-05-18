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
        background: 'linear-gradient(160deg, #050B14 0%, #07111F 50%, #0B1628 100%)',
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

        {/* Logo */}
        <img
          src="/WhatsApp_Image_2026-04-30_at_7.30.41_PM-removebg-preview.png"
          alt="Metlink"
          style={{
            width: 'clamp(260px, 50vw, 380px)',
            height: 'auto',
            objectFit: 'contain',
            marginBottom: 32,
            opacity: ['name','sub','bar','exit'].includes(phase) ? 1 : 0,
            transform: ['name','sub','bar','exit'].includes(phase) ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.88)',
            transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)',
          }}
        />

        {/* Tagline */}
        <p style={{
          marginTop: 14,
          fontSize: 11,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.42em',
          color: 'rgba(255,255,255,0.4)',
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
          background: 'rgba(255,255,255,0.08)',
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