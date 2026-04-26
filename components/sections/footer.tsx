'use client';

import Link from 'next/link';
import { Mail, Megaphone, Palette, Bot, Code, ArrowRight, Zap } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

const catAccent: Record<string, string> = {
  'digital-marketing':    '#06B6D4',
  'creative-media':       '#A78BFA',
  'ai-automation':        '#34D399',
  'software-development': '#F472B6',
};

function MetLinkLogoFooter() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="fRing2" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" /><stop offset="0.5" stopColor="#8B5CF6" /><stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="#0F172A" stroke="url(#fRing2)" strokeWidth="2" />
      <path d="M18 70 L18 32 L36 54 L50 32 L64 54 L64 32"
        stroke="url(#fRing2)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M64 70 L82 70" stroke="url(#fRing2)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ background: '#030712', borderTop: '1px solid rgba(6,182,212,0.1)' }}>

      {/* Top glow line */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.4), rgba(139,92,246,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <MetLinkLogoFooter />
                <div>
                  <p className="font-black text-xl tracking-wide" style={{ color: '#06B6D4' }}>METLINK</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold" style={{ color: '#334155' }}>AI Agency</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#475569' }}>
                Empowering ambitious businesses with AI-first marketing and high-performance software development.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-6">
                {[
                  { label: 'X', href: '#' },
                  { label: 'Li', href: '#' },
                  { label: 'Gh', href: '#' },
                ].map((s) => (
                  <a key={s.label} href={s.href}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black transition-all duration-200 hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#475569' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.3)';
                      (e.currentTarget as HTMLElement).style.color = '#06B6D4';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                      (e.currentTarget as HTMLElement).style.color = '#475569';
                    }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="max-w-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-3" style={{ color: '#334155' }}>
                Stay Updated
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: '#E2E8F0',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.35)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
                />
                <button
                  type="submit"
                  className="px-3 py-2.5 rounded-xl flex items-center justify-center transition-all hover:brightness-110 active:scale-95 shrink-0"
                  style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712' }}>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Service columns */}
          {serviceCategories.map((cat) => {
            const accent = catAccent[cat.slug] || '#06B6D4';
            return (
              <div key={cat.slug}>
                <Link
                  href={`/services/${cat.slug}`}
                  className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] mb-4 block transition-all hover:translate-x-0.5"
                  style={{ color: accent }}>
                  {cat.slug === 'digital-marketing'    && <Megaphone className="w-3 h-3" />}
                  {cat.slug === 'creative-media'        && <Palette   className="w-3 h-3" />}
                  {cat.slug === 'ai-automation'         && <Bot       className="w-3 h-3" />}
                  {cat.slug === 'software-development'  && <Code      className="w-3 h-3" />}
                  {cat.name}
                </Link>
                <ul className="space-y-2">
                  {cat.services.map((svc) => (
                    <li key={svc.slug}>
                      <Link
                        href={`/services/${cat.slug}/${svc.slug}`}
                        className="text-xs transition-all duration-200 hover:translate-x-1 block"
                        style={{ color: '#334155' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#94A3B8'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#334155'}>
                        {svc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Quick links row */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>

          {/* CTA nudge */}
          <Link href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all hover:brightness-110 active:scale-95"
            style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
            <Zap className="w-3.5 h-3.5" />
            Book a Free AI Strategy Call
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Portfolio', 'Company', 'Blog', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}
                className="text-xs font-semibold tracking-wide transition-all duration-200"
                style={{ color: '#334155' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#06B6D4'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#334155'}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px]" style={{ color: '#1E293B' }}>
            &copy; {new Date().getFullYear()} MetLink. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
            <p className="text-[11px]" style={{ color: '#1E293B' }}>
              All systems operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
