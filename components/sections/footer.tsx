'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, ArrowRight, Megaphone, Palette, Bot, Code } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

const catAccent: Record<string, string> = {
  'digital-marketing':    '#2B80F0',
  'creative-media':       '#2B80F0',
  'ai-automation':        '#2B80F0',
  'software-development': '#2B80F0',
};

const catIcon: Record<string, React.ReactNode> = {
  'digital-marketing':    <Megaphone className="w-3 h-3" />,
  'creative-media':       <Palette   className="w-3 h-3" />,
  'ai-automation':        <Bot       className="w-3 h-3" />,
  'software-development': <Code      className="w-3 h-3" />,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#000000' }}>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[280px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.09) 0%, transparent 70%)', filter: 'blur(70px)' }} />

      {/* Top gradient line */}
      <div className="relative" style={{ height: 1, background: 'linear-gradient(to right, transparent 0%, rgba(43,128,240,0.6) 25%, rgba(95,168,255,0.9) 50%, rgba(43,128,240,0.6) 75%, transparent 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 lg:gap-8 mb-14">

          {/* Brand col — spans 2 */}
          <div className="lg:col-span-2 flex flex-col gap-7">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105"
                style={{ background: 'rgba(43,128,240,0.18)', border: '1px solid rgba(43,128,240,0.35)', boxShadow: '0 4px 16px rgba(43,128,240,0.15)' }}>
                <Image src="/icon-light-32x32.png" alt="MetLink" width={22} height={22} className="object-contain" />
              </div>
              <span className="text-base font-medium transition-colors duration-200 group-hover:text-white"
                style={{ color: 'rgba(255,255,255,0.82)', letterSpacing: '-0.02em' }}>MetLink</span>
            </Link>

            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.32)', fontWeight: 300, maxWidth: 260 }}>
              AI-first marketing and high-performance software for ambitious businesses that want to lead.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {[
                {
                  href: '#', label: 'X',
                  svg: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/></svg>,
                },
                {
                  href: '#', label: 'LinkedIn',
                  svg: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                },
                {
                  href: '#', label: 'GitHub',
                  svg: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
                },
              ].map(({ href, label, svg }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(43,128,240,0.5)'; el.style.color = '#5FA8FF'; el.style.background = 'rgba(43,128,240,0.12)'; el.style.boxShadow = '0 0 14px rgba(43,128,240,0.2)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.color = 'rgba(255,255,255,0.35)'; el.style.background = 'rgba(255,255,255,0.06)'; el.style.boxShadow = 'none'; }}>
                  {svg}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] mb-3" style={{ color: 'rgba(255,255,255,0.22)' }}>Newsletter</p>
              <form onSubmit={e => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none transition-all placeholder:text-white/15 min-w-0"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                <button type="submit"
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all hover:brightness-110 active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #2B80F0, #1A6BD6)', color: '#FFFFFF', boxShadow: '0 4px 14px rgba(43,128,240,0.3)' }}>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Service columns — spans 5 */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {serviceCategories.map(cat => {
              const accent = catAccent[cat.slug] || '#2B80F0';
              return (
                <div key={cat.slug}>
                  <Link href={`/services/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 mb-5 group"
                    style={{ color: accent }}>
                    <span className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
                      {catIcon[cat.slug]}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] font-normal transition-all group-hover:translate-x-0.5">{cat.name}</span>
                  </Link>
                  <ul className="space-y-2.5">
                    {cat.services.map(svc => (
                      <li key={svc.slug}>
                        <Link
                          href={`/services/${cat.slug}/${svc.slug}`}
                          className="text-[13px] transition-all duration-200 hover:translate-x-0.5 block"
                          style={{ color: 'rgba(255,255,255,0.38)', fontWeight: 300 }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.82)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.38)'}>
                          {svc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

        {/* ── Bottom row ── */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Left: copyright + links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.22)' }}>
              &copy; {new Date().getFullYear()} MetLink. All rights reserved.
            </p>
            {['Privacy', 'Terms', 'Cookies'].map(item => (
              <Link key={item} href={`/${item.toLowerCase()}`}
                className="text-[11px] transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.22)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.22)'}>
                {item}
              </Link>
            ))}
          </div>

          {/* Right: status + CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.22)' }}>All systems operational</span>
            </div>
            <Link href="/contact"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-medium transition-all"
              style={{ background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.3)', color: '#5FA8FF' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(43,128,240,0.25)'; el.style.borderColor = 'rgba(43,128,240,0.55)'; el.style.boxShadow = '0 0 18px rgba(43,128,240,0.2)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(43,128,240,0.15)'; el.style.borderColor = 'rgba(43,128,240,0.3)'; el.style.boxShadow = 'none'; }}>
              <Mail className="w-3 h-3" />
              Book a Free Call
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
