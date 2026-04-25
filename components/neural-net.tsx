'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

export function NeuralNet({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;
    const nodes: Node[] = [];
    const COUNT = 55;
    const MAX_DIST = 160;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      nodes.length = 0;
      for (let i = 0; i < COUNT; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          z: Math.random(),
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    resize();
    init();

    const ro = new ResizeObserver(() => { resize(); });
    ro.observe(canvas);

    let t = 0;
    const draw = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.35;
            const pct = (Math.sin(t * 0.015 + i * 0.3) + 1) / 2;
            // cyan to purple gradient on connections
            const r = Math.floor(6 + pct * 133);
            const g = Math.floor(182 - pct * 90);
            const bl = Math.floor(212 - pct * (212 - 246));
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${r},${g},${bl},${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n, i) => {
        const pulseFactor = (Math.sin(n.pulse) + 1) / 2;
        const r = n.radius * (1 + pulseFactor * 0.5);

        // Outer glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 6);
        const pct = (Math.sin(t * 0.01 + i) + 1) / 2;
        const cr = Math.floor(6 + pct * 133);
        const cg = Math.floor(182 - pct * 90);
        const cb = Math.floor(212 - pct * (212 - 246));
        grd.addColorStop(0, `rgba(${cr},${cg},${cb},${0.3 + pulseFactor * 0.2})`);
        grd.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${0.7 + pulseFactor * 0.3})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
}

/* ── Floating AI Orb ── */
export function AIOrb({ size = 400 }: { size?: number }) {
  return (
    <div
      className="relative select-none pointer-events-none"
      style={{ width: size, height: size }}
    >
      {/* Outer rotating ring */}
      <div
        className="absolute inset-0 rounded-full animate-rotate-slow"
        style={{
          background: 'transparent',
          border: '1px solid rgba(6,182,212,0.2)',
          boxShadow: '0 0 40px rgba(6,182,212,0.08)',
        }}
      />
      {/* Mid ring counter-rotate */}
      <div
        className="absolute rounded-full"
        style={{
          inset: '12%',
          border: '1px solid rgba(139,92,246,0.25)',
          animation: 'rotateSlow 8s linear infinite reverse',
        }}
      />
      {/* Inner pulsing core */}
      <div
        className="absolute rounded-full animate-pulse-glow"
        style={{
          inset: '28%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)',
          border: '1px solid rgba(6,182,212,0.3)',
        }}
      />
      {/* Center bright dot */}
      <div
        className="absolute rounded-full"
        style={{
          inset: '45%',
          background: 'radial-gradient(circle, #06B6D4 0%, rgba(6,182,212,0.3) 60%, transparent 100%)',
          boxShadow: '0 0 30px rgba(6,182,212,0.6), 0 0 60px rgba(6,182,212,0.2)',
        }}
      />
      {/* Orbital dots */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 6, height: 6,
            background: i % 2 === 0 ? '#06B6D4' : '#8B5CF6',
            boxShadow: `0 0 10px ${i % 2 === 0 ? '#06B6D4' : '#8B5CF6'}`,
            top: `${50 + 42 * Math.sin((deg * Math.PI) / 180)}%`,
            left: `${50 + 42 * Math.cos((deg * Math.PI) / 180)}%`,
            transform: 'translate(-50%, -50%)',
            animation: `pulseGlow ${1.5 + i * 0.3}s ease-in-out infinite`,
          }}
        />
      ))}
      {/* Glow ambient */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 40% 40%, rgba(6,182,212,0.08), rgba(139,92,246,0.06) 50%, transparent 70%)',
        }}
      />
    </div>
  );
}

/* ── Animated circuit lines decoration ── */
export function CircuitLines() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full opacity-20"
      style={{ fill: 'none' }}
    >
      <defs>
        <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
          <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 150 H80 V80 H200 V150 H320 V100 H400" stroke="url(#cg1)" strokeWidth="1" />
      <path d="M0 200 H60 V120 H180 V200 H300 V140 H400" stroke="url(#cg1)" strokeWidth="0.8" opacity="0.6" />
      <circle cx="80" cy="80" r="3" fill="#06B6D4" opacity="0.8" />
      <circle cx="200" cy="150" r="3" fill="#8B5CF6" opacity="0.8" />
      <circle cx="320" cy="100" r="3" fill="#06B6D4" opacity="0.8" />
      <circle cx="60" cy="120" r="2" fill="#8B5CF6" opacity="0.6" />
      <circle cx="180" cy="200" r="2" fill="#06B6D4" opacity="0.6" />
      <circle cx="300" cy="140" r="2" fill="#8B5CF6" opacity="0.6" />
    </svg>
  );
}
