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
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 480,
        overflow: 'hidden',
      }}
    >
      {/* Soft glow behind robot */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background:
            'radial-gradient(ellipse 70% 65% at 50% 45%, rgba(6,182,212,0.07) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Loading skeleton */}
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          <div style={{ position: 'relative', width: 120, height: 120 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  inset: i * 16,
                  borderRadius: '50%',
                  border: `1px solid rgba(6,182,212,${0.25 - i * 0.07})`,
                  animation: `rspinA ${3 + i * 1.2}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                }}
              />
            ))}
            <div
              style={{
                position: 'absolute',
                inset: 48,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent)',
                animation: 'rpulseA 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      )}

      {/* Spline iframe — shifted up so robot fills the frame, not the bottom */}
      {mounted && (
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconceptforpersonaluse-8qufREQIuBJIm1u6FEapS6rB/"
          title="MetLink AI Robot"
          allow="autoplay"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            /* Extend above and below to allow upward shift without gaps */
            top: '-12%',
            width: '100%',
            height: '124%',
            border: 'none',
            background: 'transparent',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1s ease',
            zIndex: 3,
          }}
          onLoad={() => setLoaded(true)}
        />
      )}

      {/* Bottom fade — blends feet into page bg */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: 'linear-gradient(to top, #030712 30%, transparent)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />

      {/* Cover the "Built with Spline" watermark (bottom-right of iframe) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 220,
          height: 52,
          background: '#030712',
          zIndex: 6,
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes rspinA { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rpulseA { 0%,100% { opacity:0.4; transform:scale(1); } 50% { opacity:0.9; transform:scale(1.1); } }
      `}</style>
    </div>
  );
}
