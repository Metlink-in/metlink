'use client';

import { useEffect, useState } from 'react';

export function SplineBg() {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Infinity Blubs — iridescent morphing 3D blob, dark-theme */}
      {mounted && (
        <iframe
          src="https://my.spline.design/infinityblubs-999d9f9c7a9287ba7af63e1d5ce3b7ae/"
          title="MetLink 3D Orb"
          allow="autoplay"
          onLoad={() => setLoaded(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent',
            opacity: loaded ? 0.85 : 0,
            transition: 'opacity 2s ease',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Vignette — deepens edges so headline text reads clearly */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 75% 75% at 50% 50%, rgba(3,7,18,0.05) 0%, rgba(3,7,18,0.5) 65%, rgba(3,7,18,0.88) 100%)',
        }}
      />

      {/* Bottom section fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: 160,
          zIndex: 4,
          pointerEvents: 'none',
          background: 'linear-gradient(to top, #030712 30%, transparent)',
        }}
      />

      {/* Spline watermark cover */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, right: 0,
          width: 240, height: 58,
          background: '#030712',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
    </>
  );
}
