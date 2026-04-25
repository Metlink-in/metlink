'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Zap, Megaphone, Palette, Bot, Code, Brain } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

function MetLinkLogo({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="outerRing" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="monogram" x1="18" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="#0F172A" stroke="url(#outerRing)" strokeWidth="2" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#outerRing)" strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M18 70 L18 32 L36 54 L50 32 L64 54 L64 32"
        stroke="url(#monogram)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M64 70 L82 70"
        stroke="url(#monogram)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      <text x="50" y="90" textAnchor="middle" fill="url(#outerRing)" fontSize="9" fontWeight="700"
        letterSpacing="3" fontFamily="system-ui, -apple-system, sans-serif">METLINK</text>
    </svg>
  );
}

const catAccents: Record<string, string> = {
  'digital-marketing':   '#06B6D4',
  'creative-media':      '#A78BFA',
  'ai-automation':       '#34D399',
  'software-development':'#F472B6',
};

export function Header() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [showPopup, setShowPopup]     = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef  = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const openDropdown  = () => { if (window.innerWidth >= 768) { if (timeoutRef.current) clearTimeout(timeoutRef.current); setServicesOpen(true); } };
  const closeDropdown = () => { if (window.innerWidth >= 768) { timeoutRef.current = setTimeout(() => setServicesOpen(false), 200); } };

  const navLink = 'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/5';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || servicesOpen ? 'backdrop-blur-xl border-b shadow-lg shadow-black/60' : 'bg-transparent'}`}
        style={(scrolled || servicesOpen) ? { background: 'rgba(3,7,18,0.92)', borderBottomColor: 'rgba(30,41,59,0.8)' } : {}}
      >
        {servicesOpen && (
          <div className="fixed inset-0 top-14 bg-black/50 backdrop-blur-[2px] z-[-1]" onClick={() => setServicesOpen(false)} />
        )}

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <MetLinkLogo size={32} />
              <div className="hidden sm:block">
                <span className="font-black text-lg tracking-wide" style={{ color: '#06B6D4' }}>METLINK</span>
                <p className="text-[10px] tracking-widest uppercase leading-none" style={{ color: '#475569' }}>AI Agency</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <Link href="/" className={navLink} style={{ color: '#94A3B8' }}>Home</Link>

              <div ref={dropdownRef} className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                <button
                  className={`${navLink} flex items-center gap-1 cursor-default`}
                  style={{ color: '#94A3B8' }}
                  onClick={() => { if (window.innerWidth < 768) setServicesOpen((v) => !v); }}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} style={{ color: '#06B6D4' }} />
                </button>

                {servicesOpen && (
                  <div
                    className="fixed top-[56px] inset-x-0 w-screen shadow-2xl shadow-black/90 animate-slideInDown overflow-hidden pt-1"
                    style={{ background: 'rgba(3,7,18,0.98)', borderBottom: '1px solid rgba(30,41,59,0.8)', backdropFilter: 'blur(32px)' }}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-4 gap-10">
                      {serviceCategories.map((cat) => {
                        const accent = catAccents[cat.slug] || '#06B6D4';
                        return (
                          <div key={cat.slug} className="space-y-5">
                            <Link href={`/services/${cat.slug}`}
                              className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-widest transition-all hover:translate-x-1"
                              style={{ color: accent }}
                              onClick={() => setServicesOpen(false)}>
                              {cat.slug === 'digital-marketing'   && <Megaphone className="w-4 h-4" />}
                              {cat.slug === 'creative-media'       && <Palette   className="w-4 h-4" />}
                              {cat.slug === 'ai-automation'        && <Bot       className="w-4 h-4" />}
                              {cat.slug === 'software-development' && <Code      className="w-4 h-4" />}
                              {cat.name}
                            </Link>
                            <ul className="space-y-3">
                              {cat.services.map((svc) => (
                                <li key={svc.slug}>
                                  <Link href={`/services/${cat.slug}/${svc.slug}`}
                                    className="group/item flex items-center gap-2 text-sm transition-all"
                                    style={{ color: '#64748B' }}
                                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#E2E8F0'}
                                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#64748B'}
                                    onClick={() => setServicesOpen(false)}>
                                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all"
                                      style={{ color: accent }} />
                                    {svc.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}

                      <div className="col-span-4 mt-4 pt-8 flex items-center justify-between" style={{ borderTop: '1px solid rgba(30,41,59,0.8)' }}>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                          <p className="text-sm" style={{ color: '#64748B' }}>Custom AI solutions for unique business challenges</p>
                        </div>
                        <Link href="/contact" onClick={() => setServicesOpen(false)}
                          className="group px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all hover:brightness-110"
                          style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                          Talk to our experts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {['Company', 'Portfolio', 'Blog', 'Our Product'].map((label) => (
                <Link key={label} href={`/${label.toLowerCase().replace(' ', '-')}`} className={navLink} style={{ color: '#94A3B8' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#E2E8F0'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#94A3B8'}>
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => setShowPopup(true)}
                className="flex items-center gap-1.5 text-sm transition-colors"
                style={{ color: '#64748B' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#E2E8F0'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#64748B'}>
                <Brain className="w-3.5 h-3.5" style={{ color: '#06B6D4' }} />
                Become a Client
              </button>
              <Link href="/contact"
                className="px-5 py-2 rounded-xl text-sm font-semibold text-[#030712] transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}>
                Contact Us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/5" aria-label="Toggle menu"
              style={{ color: '#94A3B8' }}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden pb-6 pt-2 space-y-0.5 mt-1 animate-slideInDown"
              style={{ borderTop: '1px solid rgba(30,41,59,0.8)' }}>
              <Link href="/" className="block px-4 py-2.5 text-sm rounded-lg transition-colors hover:bg-white/5"
                style={{ color: '#94A3B8' }} onClick={() => setMobileOpen(false)}>Home</Link>

              <div className="px-4 pt-3 pb-1">
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#475569' }}>Services</p>
              </div>
              {serviceCategories.map((cat) => {
                const accent = catAccents[cat.slug] || '#06B6D4';
                return (
                  <div key={cat.slug}>
                    <Link href={`/services/${cat.slug}`}
                      className="block px-6 py-1.5 text-sm font-semibold rounded-lg"
                      style={{ color: accent }}
                      onClick={() => setMobileOpen(false)}>
                      {cat.name}
                    </Link>
                    {cat.services.map((svc) => (
                      <Link key={svc.slug} href={`/services/${cat.slug}/${svc.slug}`}
                        className="block px-10 py-0.5 text-sm transition-colors hover:text-white"
                        style={{ color: '#64748B' }}
                        onClick={() => setMobileOpen(false)}>
                        {svc.name}
                      </Link>
                    ))}
                  </div>
                );
              })}

              {['Company', 'Portfolio', 'Blog', 'Our Product'].map((label) => (
                <Link key={label} href={`/${label.toLowerCase().replace(' ', '-')}`}
                  className="block px-4 py-2.5 text-sm rounded-lg transition-colors hover:bg-white/5"
                  style={{ color: '#94A3B8' }}
                  onClick={() => setMobileOpen(false)}>
                  {label}
                </Link>
              ))}

              <div className="px-4 pt-3 space-y-2">
                <Link href="/contact"
                  className="block text-center py-3 rounded-xl text-sm font-bold text-[#030712]"
                  style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}
                  onClick={() => setMobileOpen(false)}>
                  Contact Us
                </Link>
                <button onClick={() => { setShowPopup(true); setMobileOpen(false); }}
                  className="w-full text-center py-3 rounded-xl text-sm transition-colors hover:bg-white/5"
                  style={{ color: '#64748B', border: '1px solid rgba(30,41,59,0.8)' }}>
                  Become a Client
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {showPopup && <PopupFormInline onClose={() => setShowPopup(false)} />}
    </>
  );
}

function PopupFormInline({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#030712]/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden animate-fadeInScale shadow-2xl shadow-black/80"
        style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>
        <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' }} />
        <button onClick={onClose} className="absolute top-4 right-4 transition-colors hover:text-white"
          style={{ color: '#64748B' }}>
          <X className="w-5 h-5" />
        </button>
        <div className="p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-10 animate-fadeInScale">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}>
                <Zap className="w-10 h-10 text-[#030712]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Request Received!</h3>
              <p className="text-sm max-w-[240px] mx-auto" style={{ color: '#64748B' }}>
                Our AI strategy team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="inline-block mb-6 relative">
                  <div className="absolute inset-0 rounded-full blur-xl" style={{ background: 'rgba(6,182,212,0.2)' }} />
                  <MetLinkLogo size={64} />
                </div>
                <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-3" style={{ color: '#06B6D4' }}>
                  Limited Spots Available
                </p>
                <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-4 tracking-tight">
                  Become a<br />MetLink Client
                </h2>
                <p className="text-sm font-medium" style={{ color: '#64748B' }}>
                  Join 80+ businesses growing with AI-powered strategy.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  {['Full Name', 'Company / Project Name', 'Work Email Address'].map((ph, i) => (
                    <input key={ph} type={i === 2 ? 'email' : 'text'} placeholder={ph} required
                      className="w-full px-5 py-4 rounded-xl text-white text-sm focus:outline-none transition-all"
                      style={{ background: 'rgba(3,7,18,0.5)', border: '1px solid rgba(30,41,59,0.8)', color: '#E2E8F0' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.5)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)')} />
                  ))}
                  <select className="w-full px-5 py-4 rounded-xl text-sm focus:outline-none transition-all appearance-none cursor-pointer"
                    style={{ background: 'rgba(3,7,18,0.5)', border: '1px solid rgba(30,41,59,0.8)', color: '#64748B' }}>
                    <option value="">Select a Service (optional)</option>
                    <option value="ai">AI & Automation</option>
                    <option value="dev">Software Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="creative">Creative Media</option>
                  </select>
                </div>
                <button type="submit"
                  className="w-full py-4 mt-4 rounded-xl font-black text-sm tracking-widest uppercase transition-all hover:brightness-110 active:scale-[0.98] text-[#030712]"
                  style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}>
                  Submit & Get Started →
                </button>
                <p className="text-center text-[10px] font-medium mt-6" style={{ color: 'rgba(100,116,139,0.4)' }}>
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
