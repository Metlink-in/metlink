'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 relative"
      style={{ background: '#07111F' }}>

      {/* Radish glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.22) 0%, transparent 65%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10 max-w-lg w-full px-6 text-center animate-slideInUp">

        {/* 404 */}
        <div className="mb-6 relative inline-block">
          <p className="text-[10px] font-normal uppercase tracking-[0.4em] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            404 — Page Not Found
          </p>
          <h1 className="text-[9rem] md:text-[11rem]  leading-none select-none gradient-text-cyan">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-40 h-40 rounded-full border animate-ripple" style={{ borderColor: 'rgba(43,128,240,0.12)' }} />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl  mb-4 leading-tight" style={{ color: '#FFFFFF' }}>
          Lost in the Digital Void
        </h2>
        <p className="text-base mb-10 max-w-sm mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:brightness-110 active:scale-95"
            style={{ background: '#2B80F0', boxShadow: '0 4px 24px rgba(43,128,240,0.45)' }}>
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all"
            style={{ border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.06)' }}>
            <ArrowLeft className="w-4 h-4" />
            Contact Us
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
