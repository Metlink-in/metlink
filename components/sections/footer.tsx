'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, ArrowRight, Megaphone, Palette, Bot, Code } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

const catAccent: Record<string, string> = {
  'digital-marketing':    '#2B80F0',
  'creative-media':       '#D97706',
  'ai-automation':        '#16A34A',
  'software-development': '#2563EB',
};

const BG    = '#070707';
const BDR   = 'rgba(255,255,255,0.06)';

export function Footer() {
  return (
    <footer style={{ background: BG, borderTop: `1px solid ${BDR}` }}>

      {/* Top accent line */}
      <div style={{ height: 2, background: 'linear-gradient(to right, transparent, #2B80F0 30%, #4B9CF4 60%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="overflow-hidden rounded-xl" style={{ background: 'rgba(255,255,255,0.95)', padding: '5px 10px', height: 38, display: 'flex', alignItems: 'center' }}>
                  <Image src="/logo-mark.png" alt="MetLink" width={80} height={24} className="object-contain" />
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(200,215,255,0.5)' }}>
                Empowering ambitious businesses with AI-first marketing and high-performance software development.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-2.5 mt-6">
                {[{ label: 'X', href: '#' },{ label: 'in', href: '#' },{ label: 'gh', href: '#' }].map(s => (
                  <a key={s.label} href={s.href}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black transition-all hover:scale-110 hover:-translate-y-0.5"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(200,215,255,0.4)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,128,240,0.4)'; (e.currentTarget as HTMLElement).style.color = '#4B9CF4'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(200,215,255,0.4)'; }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="max-w-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(200,215,255,0.3)' }}>Stay Updated</p>
              <form onSubmit={e => e.preventDefault()} className="flex gap-2">
                <input
                  type="email" placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-all placeholder:text-white/20"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                <button type="submit"
                  className="px-3 py-2.5 rounded-xl flex items-center justify-center shrink-0 text-white btn-primary-glass transition-all active:scale-95">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Service columns */}
          {serviceCategories.map(cat => {
            const accent = catAccent[cat.slug] || '#2B80F0';
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
                        style={{ color: 'rgba(200,215,255,0.38)' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(200,215,255,0.38)'}>
                        {svc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderTop: `1px solid ${BDR}` }}>

          <Link href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white btn-primary-glass transition-all">
            <Mail className="w-3.5 h-3.5" />
            Book a Free Strategy Call
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Portfolio', 'Company', 'Blog', 'Contact'].map(item => (
              <Link key={item} href={`/${item.toLowerCase()}`}
                className="text-xs font-semibold tracking-wide transition-all duration-200"
                style={{ color: 'rgba(200,215,255,0.38)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#4B9CF4'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(200,215,255,0.38)'}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: `1px solid rgba(255,255,255,0.05)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px]" style={{ color: 'rgba(200,215,255,0.3)' }}>
            &copy; {new Date().getFullYear()} MetLink. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[11px]" style={{ color: 'rgba(200,215,255,0.3)' }}>All systems operational</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
