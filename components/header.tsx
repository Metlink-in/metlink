'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

const catAccents: Record<string, string> = {
  'digital-marketing':   '#2B80F0',
  'creative-media':      '#A855F7',
  'ai-automation':       '#10B981',
  'software-development':'#06B6D4',
};


export function Header() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const [showPopup, setShowPopup]       = useState(false);
  const timeoutRef  = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);



  const openDropdown  = () => { if (window.innerWidth >= 768) { if (timeoutRef.current) clearTimeout(timeoutRef.current); setServicesOpen(true); } };
  const closeDropdown = () => { if (window.innerWidth >= 768) { timeoutRef.current = setTimeout(() => setServicesOpen(false), 180); } };
  const cancelClose   = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };

  return (
    <>
      {/* Dropdown is rendered OUTSIDE <nav> so that nav's backdrop-filter
          does not create a containing block for position:fixed children. */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav
          className="transition-all duration-500"
          style={{
            background: 'transparent',
            borderBottom: '1px solid transparent',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            boxShadow: 'none',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20" style={{ overflow: 'visible' }}>

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 group">
              <Image
                src="/WhatsApp_Image_2026-04-30_at_7.30.41_PM-removebg-preview.png"
                alt="Metlink"
                width={559}
                height={447}
                priority
                className="transition-all duration-200 group-hover:opacity-80"
                style={{ height: '130px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>

            {/* Desktop nav — pill container */}
            <div className="hidden md:flex items-center"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '9999px',
                padding: '4px',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}>

              <NavLink href="/">Home</NavLink>

              {/* Services trigger */}
              <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                <button
                  className="px-4 py-1.5 rounded-full text-sm font-normal transition-all flex items-center gap-1.5"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#FFFFFF'; el.style.background = 'rgba(255,255,255,0.09)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'rgba(255,255,255,0.75)'; el.style.background = 'transparent'; }}
                  onClick={() => { if (window.innerWidth < 768) setServicesOpen(v => !v); }}>
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {[['Company', '/company'], ['Portfolio', '/portfolio'], ['Blog', '/blog'], ['Product', '/product']].map(([label, href]) => (
                <NavLink key={label} href={href}>
                  {label}
                  {label === 'Product' && (
                    <span className="ml-1.5 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider align-middle"
                      style={{ background: 'rgba(43,128,240,0.2)', color: '#5FA8FF', border: '1px solid rgba(43,128,240,0.3)' }}>Soon</span>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => setShowPopup(true)}
                className="text-sm font-normal transition-colors px-4 py-2 rounded-full"
                style={{ color: 'rgba(255,255,255,0.72)' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#FFFFFF'; el.style.background = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'rgba(255,255,255,0.72)'; el.style.background = 'transparent'; }}>
                Get Proposal
              </button>
              <Link href="/contact"
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all active:scale-95"
                style={{ background: '#FFFFFF', color: '#0A0F1A' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.88)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}>
                Let&apos;s Talk
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2 rounded-xl transition-all hover:bg-white/10" aria-label="Toggle menu"
              style={{ color: 'rgba(255,255,255,0.8)' }}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden pb-4 pt-1 border-t animate-slideInDown"
              style={{ borderColor: 'rgba(255,255,255,0.09)' }}>
              <div className="px-4 py-2 space-y-0.5">
                <MobileNavLink href="/" onClose={() => setMobileOpen(false)}>Home</MobileNavLink>

                <div className="px-3 pt-3 pb-1">
                  <p className="text-[10px] font-black uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.35)' }}>Services</p>
                </div>
                {serviceCategories.map((cat) => {
                  const accent = catAccents[cat.slug] || '#2B80F0';
                  return (
                    <div key={cat.slug}>
                      <Link href={`/services/${cat.slug}`}
                        className="block px-3 py-1.5 text-sm font-bold rounded-xl"
                        style={{ color: accent }}
                        onClick={() => setMobileOpen(false)}>
                        {cat.name}
                      </Link>
                      {cat.services.map((svc) => (
                        <Link key={svc.slug} href={`/services/${cat.slug}/${svc.slug}`}
                          className="block pl-8 py-1 text-sm transition-colors"
                          style={{ color: 'rgba(255,255,255,0.4)' }}
                          onClick={() => setMobileOpen(false)}>
                          {svc.name}
                        </Link>
                      ))}
                    </div>
                  );
                })}

                {[['Company', '/company'], ['Portfolio', '/portfolio'], ['Blog', '/blog'], ['Product', '/product']].map(([label, href]) => (
                  <MobileNavLink key={label} href={href} onClose={() => setMobileOpen(false)}>
                    {label}
                    {label === 'Product' && (
                      <span className="ml-1.5 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider"
                        style={{ background: 'rgba(43,128,240,0.2)', color: '#5FA8FF' }}>Soon</span>
                    )}
                  </MobileNavLink>
                ))}

                <div className="pt-3 space-y-2">
                  <Link href="/contact"
                    className="block text-center py-3 rounded-full text-sm font-medium btn-primary"
                    onClick={() => setMobileOpen(false)}>
                    Contact Us
                  </Link>
                  <button onClick={() => { setShowPopup(true); setMobileOpen(false); }}
                    className="w-full text-center py-3 rounded-xl text-sm font-medium btn-glass"
                    style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Get a Free Proposal
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>{/* /max-w-7xl */}
        </nav>

        {/* Services mega-menu — sibling of <nav>, outside backdrop-filter scope */}
        {servicesOpen && (
          <>
            {/* Click-outside overlay */}
            <div
              className="fixed inset-0"
              style={{ top: 80, zIndex: 48 }}
              onClick={() => setServicesOpen(false)}
            />

            {/* Full-width panel */}
            <div
              className="fixed left-0 right-0 animate-slideInDown"
              style={{
                top: 80,
                zIndex: 49,
                background: '#04090F',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.85)',
              }}
              onMouseEnter={cancelClose}
              onMouseLeave={closeDropdown}
            >
              {/* Single blue accent top line */}
              <div style={{ height: 1, background: 'linear-gradient(to right, transparent 0%, rgba(43,128,240,0.55) 20%, rgba(95,168,255,0.85) 50%, rgba(43,128,240,0.55) 80%, transparent 100%)' }} />

              <div className="max-w-7xl mx-auto px-8 lg:px-12 py-10 lg:py-12">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 lg:gap-x-16 gap-y-10">
                  {serviceCategories.map((cat) => {
                    const accent = catAccents[cat.slug] || '#2B80F0';
                    return (
                      <div key={cat.slug}>

                        {/* Category label */}
                        <Link
                          href={`/services/${cat.slug}`}
                          className="group/cat inline-flex items-center gap-2 mb-6"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span
                            className="text-[13px] font-semibold uppercase tracking-[0.2em] transition-opacity duration-150 group-hover/cat:opacity-80"
                            style={{ color: accent }}
                          >
                            {cat.name}
                          </span>
                        </Link>

                        {/* Service links */}
                        <ul className="space-y-4">
                          {cat.services.map((svc) => (
                            <li key={svc.slug}>
                              <Link
                                href={`/services/${cat.slug}/${svc.slug}`}
                                className="block text-[14.5px] font-light leading-snug transition-colors duration-150"
                                style={{ color: 'rgba(255,255,255,0.52)', fontWeight: 300 }}
                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.52)'}
                                onClick={() => setServicesOpen(false)}
                              >
                                {svc.name}
                              </Link>
                            </li>
                          ))}
                        </ul>

                      </div>
                    );
                  })}
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-5 flex items-center justify-between"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.40)' }}>
                        All systems operational
                      </span>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
                    <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      150+ projects shipped
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setServicesOpen(false)}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-medium transition-all duration-200 hover:brightness-110 active:scale-95"
                    style={{ background: '#2B80F0', color: '#FFFFFF', boxShadow: '0 4px 18px rgba(43,128,240,0.35)' }}
                  >
                    Book a free call
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {showPopup && <ProposalPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}
      className="px-4 py-1.5 rounded-full text-sm font-normal transition-all duration-150"
      style={{ color: 'rgba(255,255,255,0.75)' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClose }: { href: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <Link href={href}
      className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-xl font-semibold transition-all hover:bg-white/7"
      style={{ color: 'rgba(255,255,255,0.7)' }}
      onClick={onClose}>
      {children}
    </Link>
  );
}

function ProposalPopup({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.SyntheticEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(onClose, 2500); };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden animate-fadeInScale shadow-2xl"
        style={{ background: 'rgba(6,13,26,0.98)', border: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #2B80F0, #5FA8FF, transparent)' }} />
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg transition-colors hover:bg-white/10"
          style={{ color: 'rgba(255,255,255,0.5)' }}>
          <X className="w-4 h-4" />
        </button>
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-10 animate-fadeInScale">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 btn-primary-glass">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-2" style={{ color: '#FFFFFF' }}>Request Received!</h3>
              <p className="text-sm max-w-[240px] mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Our strategy team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-2" style={{ color: '#2B80F0' }}>Limited Spots</p>
                <h2 className="text-2xl font-black leading-tight" style={{ color: '#FFFFFF' }}>Get a Free Proposal</h2>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Join 80+ businesses growing with AI-powered strategy.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3">
                {['Full Name', 'Company / Project Name', 'Work Email Address'].map((ph, i) => (
                  <input key={ph} type={i === 2 ? 'email' : 'text'} placeholder={ph} required
                    className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all placeholder:text-white/25"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: '#FFFFFF' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                ))}
                <select className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none appearance-none cursor-pointer transition-all"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}>
                  <option value="" style={{ background: '#0A0900' }}>Select a Service</option>
                  <option value="ai" style={{ background: '#0A0900', color: '#fff' }}>AI &amp; Automation</option>
                  <option value="dev" style={{ background: '#0A0900', color: '#fff' }}>Software Development</option>
                  <option value="marketing" style={{ background: '#0A0900', color: '#fff' }}>Digital Marketing</option>
                  <option value="creative" style={{ background: '#0A0900', color: '#fff' }}>Creative Media</option>
                </select>
                <button type="submit"
                  className="w-full py-3.5 mt-2 rounded-xl font-black text-sm tracking-wide uppercase transition-all text-white btn-primary-glass">
                  Submit &amp; Get Started
                </button>
                <p className="text-center text-[10px] font-medium mt-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  No spam. We respond within 24 hours.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
