'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 relative"
      style={{ background: 'linear-gradient(160deg, #FFF9F7 0%, #FAF6F0 50%, #F5EEE4 100%)' }}>

      {/* Warm glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-40 animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(200,75,48,0.15), transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-30 animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10), transparent 70%)', filter: 'blur(80px)', animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-lg w-full px-6 text-center animate-slideInUp">

        {/* 404 */}
        <div className="mb-6 relative inline-block">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: '#C84B30' }}>
            404 — Page Not Found
          </p>
          <h1 className="text-[9rem] md:text-[11rem] font-black leading-none select-none gradient-text-cyan">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-40 h-40 rounded-full border animate-ripple" style={{ borderColor: 'rgba(200,75,48,0.12)' }} />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight" style={{ color: '#1C1410' }}>
          Lost in the Digital Void
        </h2>
        <p className="text-base mb-10 max-w-sm mx-auto leading-relaxed" style={{ color: '#72645A' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#C84B30', boxShadow: '0 4px 20px rgba(200,75,48,0.3)' }}>
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-black/5"
            style={{ border: '1px solid #E5DDD5', color: '#72645A', background: 'rgba(255,255,255,0.8)' }}>
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {['Services', 'Portfolio', 'Blog', 'Company'].map(page => (
            <Link key={page} href={`/${page.toLowerCase()}`}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all"
              style={{ background: '#FFFFFF', border: '1px solid #E5DDD5', color: '#ADA09A' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,75,48,0.3)';
                (e.currentTarget as HTMLElement).style.color = '#C84B30';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#E5DDD5';
                (e.currentTarget as HTMLElement).style.color = '#ADA09A';
              }}>
              {page}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
