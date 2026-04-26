'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 relative"
      style={{ background: '#030712' }}>

      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4), transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)', filter: 'blur(60px)', animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.2), rgba(139,92,246,0.2), transparent 70%)', filter: 'blur(80px)', animationDelay: '1.5s' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-lg w-full px-6 text-center animate-slideInUp">

        {/* Glitchy 404 */}
        <div className="mb-6 relative inline-block">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: '#06B6D4' }}>
            404 — Page Not Found
          </p>
          <h1 className="text-[9rem] md:text-[11rem] font-black leading-none select-none gradient-text-cyan">
            404
          </h1>
          {/* Glow rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-40 h-40 rounded-full border border-[#06B6D4]/10 animate-ripple" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#E2E8F0] mb-4 leading-tight">
          Lost in the Digital Void
        </h2>
        <p className="text-base text-[#64748B] mb-10 max-w-sm mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:brightness-110 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712', boxShadow: '0 0 30px rgba(6,182,212,0.2)' }}>
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:bg-white/5 hover:border-[#06B6D4]/40"
            style={{ border: '1px solid rgba(30,41,59,0.8)', color: '#E2E8F0' }}>
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-3">
          {['Services', 'Portfolio', 'Blog', 'Company'].map((page) => (
            <Link key={page} href={`/${page.toLowerCase()}`}
              className="px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:border-[#06B6D4]/40 hover:text-[#06B6D4]"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(30,41,59,0.8)', color: '#475569' }}>
              {page}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
