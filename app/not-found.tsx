'use client';

import Link from 'next/link';
import { Home, MessageCircle, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 relative"
      style={{ background: '#07111F' }}>

      {/* Radish glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.22) 0%, transparent 65%)', filter: 'blur(80px)', transform: 'translate3d(-50%,-50%,0)' }} />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center animate-slideInUp">

        {/* 404 */}
        <div className="mb-8 relative inline-flex items-center justify-center">
          <div className="absolute w-48 h-48 rounded-full border animate-ripple" style={{ borderColor: 'rgba(43,128,240,0.12)' }} />
          <h1 className="relative text-[9rem] md:text-[11rem] leading-none select-none gradient-text-cyan">
            404
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl mb-4 leading-tight" style={{ color: '#FFFFFF' }}>
          Lost in the Digital Void
        </h2>
        <p className="text-base mb-10 max-w-sm mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="https://www.metlinkai.com/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-white/5 active:scale-95"
            style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', background: 'rgba(255,255,255,0.06)' }}>
            <MessageCircle className="w-4 h-4" />
            Contact Us
            <ArrowRight className="w-3.5 h-3.5 opacity-60" />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {['Services', 'Portfolio', 'Blog', 'Company'].map(page => (
            <Link key={page} href={`/${page.toLowerCase()}`}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,128,240,0.5)';
                (e.currentTarget as HTMLElement).style.color = '#2B80F0';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
              }}>
              {page}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
