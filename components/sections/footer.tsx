'use client';

import Link from 'next/link';
import { Mail, ArrowRight, Megaphone, Palette, Bot, Code } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

const catAccent: Record<string, string> = {
  'digital-marketing':    '#C84B30',
  'creative-media':       '#D97706',
  'ai-automation':        '#16A34A',
  'software-development': '#2563EB',
};

function MetLinkLogoFooter() {
  return (
    <svg width="46" height="40" viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 12,12 L 12,178 L 68,178 L 68,100 L 106,12 Z" fill="#192540"/>
      <path d="M 113,178 L 113,64 C 111,-6 210,-6 208,64 L 208,178 L 162,178 L 162,64 C 162,38 130,38 130,64 L 130,178 Z" fill="#2B80F0"/>
      <line x1="113" y1="61" x2="82" y2="100" stroke="white" strokeWidth="7" strokeLinecap="round"/>
      <circle cx="113" cy="61" r="15" fill="white"/>
      <circle cx="113" cy="61" r="9"  fill="#192540"/>
      <circle cx="82"  cy="100" r="9" fill="#192540"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ background: '#FAF9F6', borderTop: '1px solid #E5DDD5' }}>

      {/* Top accent line */}
      <div style={{ height: 3, background: 'linear-gradient(to right, transparent, #C84B30 30%, #E8612A 60%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-8">
            <div>
              {/* Logo + wordmark */}
              <div className="flex items-center gap-3 mb-5">
                <MetLinkLogoFooter />
                <div>
                  <p className="text-xl font-bold leading-none" style={{ fontFamily: 'var(--font-jakarta)', letterSpacing: '0.01em' }}>
                    <span style={{ color: '#192540' }}>Met</span><span style={{ color: '#2B80F0' }}>link</span>
                  </p>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mt-1" style={{ color: '#ADA09A' }}>AI Agency</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#72645A' }}>
                Empowering ambitious businesses with AI-first marketing and high-performance software development.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-2.5 mt-6">
                {[
                  { label: 'X', href: '#' },
                  { label: 'in', href: '#' },
                  { label: 'gh', href: '#' },
                ].map(s => (
                  <a key={s.label} href={s.href}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black transition-all hover:scale-110"
                    style={{ background: '#FFFFFF', border: '1px solid #E5DDD5', color: '#ADA09A' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,75,48,0.3)';
                      (e.currentTarget as HTMLElement).style.color = '#C84B30';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#E5DDD5';
                      (e.currentTarget as HTMLElement).style.color = '#ADA09A';
                    }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="max-w-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-3" style={{ color: '#ADA09A' }}>
                Stay Updated
              </p>
              <form onSubmit={e => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-all"
                  style={{ background: '#FFFFFF', border: '1px solid #E5DDD5', color: '#192540' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,75,48,0.4)')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#E5DDD5')}
                />
                <button type="submit"
                  className="px-3 py-2.5 rounded-xl flex items-center justify-center transition-all hover:brightness-95 active:scale-95 shrink-0 text-white"
                  style={{ background: '#C84B30' }}>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Service columns */}
          {serviceCategories.map(cat => {
            const accent = catAccent[cat.slug] || '#C84B30';
            return (
              <div key={cat.slug}>
                <Link
                  href={`/services/${cat.slug}`}
                  className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] mb-4 block transition-all hover:translate-x-0.5"
                  style={{ color: accent }}>
                  {cat.slug === 'digital-marketing'   && <Megaphone className="w-3 h-3" />}
                  {cat.slug === 'creative-media'       && <Palette   className="w-3 h-3" />}
                  {cat.slug === 'ai-automation'        && <Bot       className="w-3 h-3" />}
                  {cat.slug === 'software-development' && <Code      className="w-3 h-3" />}
                  {cat.name}
                </Link>
                <ul className="space-y-2.5">
                  {cat.services.map(svc => (
                    <li key={svc.slug}>
                      <Link
                        href={`/services/${cat.slug}/${svc.slug}`}
                        className="text-xs transition-all duration-200 hover:translate-x-0.5 block"
                        style={{ color: '#ADA09A' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#192540'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#ADA09A'}>
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
          style={{ borderTop: '1px solid #E5DDD5' }}>

          <Link href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all hover:brightness-95 active:scale-95 text-white"
            style={{ background: '#C84B30', boxShadow: '0 4px 16px rgba(200,75,48,0.25)' }}>
            <Mail className="w-3.5 h-3.5" />
            Book a Free Strategy Call
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Portfolio', 'Company', 'Blog', 'Contact'].map(item => (
              <Link key={item} href={`/${item.toLowerCase()}`}
                className="text-xs font-semibold tracking-wide transition-all duration-200"
                style={{ color: '#ADA09A' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#C84B30'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#ADA09A'}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #F0EBE3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px]" style={{ color: '#ADA09A' }}>
            &copy; {new Date().getFullYear()} MetLink. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[11px]" style={{ color: '#ADA09A' }}>
              All systems operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
