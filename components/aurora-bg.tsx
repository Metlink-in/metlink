'use client';

import { useEffect, useRef } from 'react';

interface Orb {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  color: string;
  phase: number;
  speed: number;
}

export function AuroraBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let W = 0, H = 0;

    /* ── Orb definitions — brand cyan + violet + a deep blue accent ── */
    const ORBS: Orb[] = [
      { x: 0.25, y: 0.35, vx:  0.00012, vy:  0.00008, r: 0.52, color: '#06B6D4', phase: 0,      speed: 0.00035 },
      { x: 0.72, y: 0.55, vx: -0.00010, vy:  0.00012, r: 0.48, color: '#8B5CF6', phase: 2.1,    speed: 0.00028 },
      { x: 0.50, y: 0.80, vx:  0.00008, vy: -0.00014, r: 0.42, color: '#3B82F6', phase: 4.5,    speed: 0.00040 },
      { x: 0.15, y: 0.70, vx:  0.00014, vy: -0.00007, r: 0.36, color: '#A78BFA', phase: 1.3,    speed: 0.00032 },
      { x: 0.85, y: 0.25, vx: -0.00009, vy:  0.00015, r: 0.38, color: '#06B6D4', phase: 3.7,    speed: 0.00025 },
    ];

    function resize() {
      W = canvas!.width  = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let t = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      /* Base fill */
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, W, H);

      /* Draw each soft glow orb */
      ctx.globalCompositeOperation = 'screen';

      for (const orb of ORBS) {
        /* Slow floating motion */
        orb.x += orb.vx;
        orb.y += orb.vy;
        /* Gentle bounce at edges */
        if (orb.x < 0.05 || orb.x > 0.95) orb.vx *= -1;
        if (orb.y < 0.05 || orb.y > 0.95) orb.vy *= -1;

        /* Breathing pulse */
        const pulse = 1 + 0.12 * Math.sin(t * orb.speed * 1000 + orb.phase);
        const radius = orb.r * Math.min(W, H) * pulse;

        const cx = orb.x * W;
        const cy = orb.y * H;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0,   hexAlpha(orb.color, 0.28));
        grad.addColorStop(0.4, hexAlpha(orb.color, 0.14));
        grad.addColorStop(1,   hexAlpha(orb.color, 0));

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      /* Fine star-particle layer */
      ctx.globalCompositeOperation = 'screen';
      if (t === 0) buildStars();
      drawStars(ctx, t);

      ctx.globalCompositeOperation = 'source-over';

      t += 0.016;
      raf = requestAnimationFrame(draw);
    }

    /* ── Stars (generated once, stored in closure) ── */
    type Star = { x: number; y: number; r: number; alpha: number; phase: number; speed: number };
    let stars: Star[] = [];

    function buildStars() {
      stars = Array.from({ length: 120 }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.008 + 0.004,
      }));
    }

    function drawStars(ctx: CanvasRenderingContext2D, t: number) {
      for (const s of stars) {
        const a = s.alpha * (0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fill();
      }
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle grid texture */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(6,182,212,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Edge vignette — keeps content legible */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 85% 85% at 50% 50%, rgba(3,7,18,0) 0%, rgba(3,7,18,0.35) 60%, rgba(3,7,18,0.80) 100%)',
        }}
      />

      {/* Bottom section fade */}
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 180, zIndex: 4, pointerEvents: 'none',
          background: 'linear-gradient(to top, #030712 25%, transparent)',
        }}
      />
    </>
  );
}

/* ── Utility: hex color → rgba string with alpha ── */
function hexAlpha(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
