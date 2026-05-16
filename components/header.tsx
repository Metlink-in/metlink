'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Megaphone, Palette, Bot, Code } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

const catAccents: Record<string, string> = {
  'digital-marketing':   '#2B80F0',
  'creative-media':      '#D97706',
  'ai-automation':       '#16A34A',
  'software-development':'#2563EB',
};

export function Header() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [showPopup, setShowPopup]       = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef  = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setServicesOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const openDropdown  = () => { if (window.innerWidth >= 768) { if (timeoutRef.current) clearTimeout(timeoutRef.current); setServicesOpen(true); } };
  const closeDropdown = () => { if (window.innerWidth >= 768) { timeoutRef.current = setTimeout(() => setServicesOpen(false), 180); } };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <nav
          className="transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(6,13,26,0.96)' : 'rgba(6,13,26,0.82)',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            boxShadow: scrolled ? '0 1px 40px rgba(0,0,0,0.6)' : 'none',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <div className="overflow-hidden rounded-xl"
                style={{ background: 'rgba(255,255,255,0.96)', padding: '5px 10px', height: 40, display: 'flex', alignItems: 'center' }}>
                <Image
                  src="/logo-mark.png"
                  alt="MetLink"
                  width={96}
                  height={30}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop nav — center pill */}
            <div className="hidden md:flex items-center gap-0.5 px-1.5 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <NavLink href="/">Home</NavLink>

              {/* Services dropdown */}
              <div ref={dropdownRef} className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                <button
                  className="px-3.5 py-2 rounded-xl text-sm font-normal transition-all flex items-center gap-1.5"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}
                  onClick={() => { if (window.innerWidth < 768) setServicesOpen(v => !v); }}>
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    style={{ color: '#2B80F0' }} />
                </button>

                {servicesOpen && (
                  <>
                    <div className="fixed inset-0 top-16 z-[-1]" onClick={() => setServicesOpen(false)} />
                    <div
                      className="fixed top-[70px] inset-x-3 sm:inset-x-4 lg:inset-x-6 animate-slideInDown overflow-hidden rounded-2xl"
                      style={{
                        background: 'rgba(8,8,8,0.98)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
                        backdropFilter: 'blur(28px)',
                        WebkitBackdropFilter: 'blur(28px)',
                        maxWidth: 1200,
                        margin: '0 auto',
                      }}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 grid grid-cols-4 gap-8">
                        {serviceCategories.map((cat) => {
                          const accent = catAccents[cat.slug] || '#2B80F0';
                          return (
                            <div key={cat.slug} className="space-y-4">
                              <Link href={`/services/${cat.slug}`}
                                className="flex items-center gap-2 text-xs font-normal uppercase tracking-widest transition-all hover:translate-x-0.5"
                                style={{ color: accent }}
                                onClick={() => setServicesOpen(false)}>
                                {cat.slug === 'digital-marketing'   && <Megaphone className="w-3.5 h-3.5" />}
                                {cat.slug === 'creative-media'       && <Palette   className="w-3.5 h-3.5" />}
                                {cat.slug === 'ai-automation'        && <Bot       className="w-3.5 h-3.5" />}
                                {cat.slug === 'software-development' && <Code      className="w-3.5 h-3.5" />}
                                {cat.name}
                              </Link>
                              <ul className="space-y-2.5">
                                {cat.services.map((svc) => (
                                  <li key={svc.slug}>
                                    <Link href={`/services/${cat.slug}/${svc.slug}`}
                                      className="group/item flex items-center gap-1.5 text-sm transition-all"
                                      style={{ color: 'rgba(255,255,255,0.5)' }}
                                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}
                                      onClick={() => setServicesOpen(false)}>
                                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all flex-shrink-0"
                                        style={{ color: accent }} />
                                      {svc.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                        <div className="col-span-4 mt-2 pt-5 flex items-center justify-between"
                          style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>Custom AI solutions for unique business challenges</p>
                          </div>
                          <Link href="/contact" onClick={() => setServicesOpen(false)}
                            className="group px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all btn-primary-glass text-white">
                            Talk to our experts <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {[['Company', '/company'], ['Portfolio', '/portfolio'], ['Blog', '/blog'], ['Product', '/product']].map(([label, href]) => (
                <NavLink key={label} href={href}>
                  {label}
                  {label === 'Product' && (
                    <span className="ml-1.5 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider align-middle"
                      style={{ background: 'rgba(43,128,240,0.2)', color: '#4B9CF4', border: '1px solid rgba(43,128,240,0.3)' }}>Soon</span>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => setShowPopup(true)}
                className="text-sm font-normal transition-colors"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}>
                Get Proposal
              </button>
              <Link href="/contact"
                className="px-5 py-2.5 rounded-full text-sm font-medium btn-primary transition-all active:scale-95"
                style={{}}>
                Contact Us
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
                        style={{ background: 'rgba(43,128,240,0.2)', color: '#4B9CF4' }}>Soon</span>
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
      </header>

      {showPopup && <ProposalPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}
      className="px-3.5 py-2 rounded-xl text-sm font-normal transition-all"
      style={{ color: 'rgba(255,255,255,0.5)' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
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
        style={{ background: 'rgba(10,20,42,0.98)', border: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #2B80F0, #4B9CF4, transparent)' }} />
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
                  <option value="" style={{ background: '#0d1829' }}>Select a Service</option>
                  <option value="ai" style={{ background: '#0d1829', color: '#fff' }}>AI &amp; Automation</option>
                  <option value="dev" style={{ background: '#0d1829', color: '#fff' }}>Software Development</option>
                  <option value="marketing" style={{ background: '#0d1829', color: '#fff' }}>Digital Marketing</option>
                  <option value="creative" style={{ background: '#0d1829', color: '#fff' }}>Creative Media</option>
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
