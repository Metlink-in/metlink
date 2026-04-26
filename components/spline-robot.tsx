'use client';

import { useEffect, useState } from 'react';

export function SplineRobot() {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Soft glow */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 65% 60% at 50% 40%, rgba(6,182,212,0.07) 0%, rgba(139,92,246,0.04) 45%, transparent 70%)',
        }}
      />

      {/* Loading rings */}
      {!loaded && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: 100, height: 100 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                position: 'absolute', inset: i * 14, borderRadius: '50%',
                border: `1px solid rgba(6,182,212,${0.22 - i * 0.06})`,
                animation: `rspinA ${2.8 + i * 1.1}s linear infinite ${i % 2 ? 'reverse' : ''}`,
              }} />
            ))}
          </div>
        </div>
      )}

      {/* Spline iframe — pushed up by 22% so robot fills upper frame */}
      {mounted && (
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconceptforpersonaluse-8qufREQIuBJIm1u6FEapS6rB/"
          title="MetLink AI Robot"
          allow="autoplay"
          onLoad={() => setLoaded(true)}
          style={{
            position: 'absolute',
            left: 0, right: 0,
            top: '-22%',
            width: '100%',
            height: '144%',
            border: 'none',
            background: 'transparent',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1s ease',
            zIndex: 3,
          }}
        />
      )}

      {/* Bottom gradient — hides feet, blends to page */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 130,
        background: 'linear-gradient(to top, #030712 35%, transparent)',
        pointerEvents: 'none', zIndex: 5,
      }} />

      {/* Watermark cover */}
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: 230, height: 56,
        background: '#030712',
        pointerEvents: 'none', zIndex: 6,
      }} />

      <style>{`
        @keyframes rspinA { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </div>
  );
}
