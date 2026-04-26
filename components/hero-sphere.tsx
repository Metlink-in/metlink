'use client';

import { useEffect, useRef } from 'react';

/* ─── Types ─── */
interface Particle {
  ox: number; oy: number; oz: number; // original unit-sphere position
  x:  number; y:  number;  z:  number; // rotated position
}

const N       = 220;    // particle count
const RADIUS  = 0.82;   // fraction of canvas half-size
const FOV     = 2.6;    // perspective strength
const MAX_CONN_DIST = 0.52; // connection distance threshold (unit sphere)
const MAX_CONNS     = 4;    // max connections per particle

/* ─── Fibonacci sphere — evenly distributes N points on a unit sphere ─── */
function buildSphere(): Particle[] {
  const PHI = (1 + Math.sqrt(5)) / 2;
  return Array.from({ length: N }, (_, i) => {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / N);
    const phi   = 2 * Math.PI * i / PHI;
    const x = Math.sin(theta) * Math.cos(phi);
    const y = Math.sin(theta) * Math.sin(phi);
    const z = Math.cos(theta);
    return { ox: x, oy: y, oz: z, x, y, z };
  });
}

/* ─── Rotate a point around X and Y axes ─── */
function rotate(p: Particle, rx: number, ry: number) {
  // Y-axis rotation
  let x =  p.ox * Math.cos(ry) + p.oz * Math.sin(ry);
  const z = -p.ox * Math.sin(ry) + p.oz * Math.cos(ry);
  // X-axis rotation
  const y =  p.oy * Math.cos(rx) - z * Math.sin(rx);
  const z2 = p.oy * Math.sin(rx) + z * Math.cos(rx);
  p.x = x; p.y = y; p.z = z2;
}

export function HeroSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse     = useRef({ x: 0.5, y: 0.5 }); // normalised [0-1]

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let W = 0, H = 0, R = 0;
    const particles = buildSphere();

    /* Current & target rotation angles */
    let rotX = 0.25, rotY = 0;
    let tRotX = 0.25, tRotY = 0;
    let autoRotY = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      W = canvas!.width  = rect.width  * devicePixelRatio;
      H = canvas!.height = rect.height * devicePixelRatio;
      R = Math.min(W, H) * RADIUS * 0.5;
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    /* Track mouse relative to the canvas */
    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top)  / rect.height;
    }
    window.addEventListener('mousemove', onMouseMove);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      /* Smooth follow of mouse → target rotation */
      tRotX = (mouse.current.y - 0.5) *  0.8;
      tRotY = (mouse.current.x - 0.5) * -1.0 + autoRotY;
      rotX += (tRotX - rotX) * 0.04;
      rotY += (tRotY - rotY) * 0.04;
      autoRotY += 0.004; // gentle auto-spin

      const cx = W / 2, cy = H / 2;

      /* Apply rotation to all particles */
      particles.forEach(p => rotate(p, rotX, rotY));

      /* Sort front-to-back for correct draw order */
      const sorted = [...particles].sort((a, b) => b.z - a.z);

      /* ── Sphere glow halo ── */
      const halo = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.35);
      halo.addColorStop(0,   'rgba(6,182,212,0.07)');
      halo.addColorStop(0.5, 'rgba(139,92,246,0.05)');
      halo.addColorStop(1,   'rgba(3,7,18,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2);
      ctx.fillStyle = halo;
      ctx.fill();

      /* ── Connection lines ── */
      for (let i = 0; i < sorted.length; i++) {
        const a = sorted[i];
        let conns = 0;
        for (let j = i + 1; j < sorted.length && conns < MAX_CONNS; j++) {
          const b = sorted[j];
          const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist > MAX_CONN_DIST) continue;

          const alphaA = (a.z + 1) / 2;
          const alphaB = (b.z + 1) / 2;
          const lineAlpha = ((alphaA + alphaB) / 2) * (1 - dist / MAX_CONN_DIST) * 0.55;

          const scaleA = FOV / (FOV + a.z);
          const scaleB = FOV / (FOV + b.z);
          const pax = cx + a.x * R * scaleA, pay = cy + a.y * R * scaleA;
          const pbx = cx + b.x * R * scaleB, pby = cy + b.y * R * scaleB;

          /* Cyan → Purple gradient along each line */
          const grad = ctx.createLinearGradient(pax, pay, pbx, pby);
          grad.addColorStop(0, `rgba(6,182,212,${lineAlpha})`);
          grad.addColorStop(1, `rgba(139,92,246,${lineAlpha})`);

          ctx.beginPath();
          ctx.moveTo(pax, pay);
          ctx.lineTo(pbx, pby);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.8 * devicePixelRatio;
          ctx.stroke();
          conns++;
        }
      }

      /* ── Particles ── */
      for (const p of sorted) {
        const depth  = (p.z + 1) / 2;           // 0 = back, 1 = front
        const scale  = FOV / (FOV + p.z);
        const px     = cx + p.x * R * scale;
        const py     = cy + p.y * R * scale;
        const size   = (1.8 + depth * 2.2) * devicePixelRatio;
        const alpha  = 0.25 + depth * 0.75;

        /* Color: cyan for top hemisphere, purple for bottom */
        const tCyan   = `rgba(6,182,212,${alpha})`;
        const tPurple = `rgba(139,92,246,${alpha})`;
        const color   = p.oy > 0 ? tCyan : tPurple;

        /* Glow for front particles */
        if (depth > 0.65) {
          const glow = ctx.createRadialGradient(px, py, 0, px, py, size * 3);
          glow.addColorStop(0, p.oy > 0
            ? `rgba(6,182,212,${alpha * 0.4})`
            : `rgba(139,92,246,${alpha * 0.4})`);
          glow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.beginPath();
          ctx.arc(px, py, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        /* Core dot */
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}
