'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Zap, Megaphone, Palette, Bot, Code, Brain } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

function MetLinkLogo({ size = 40 }: { size?: number }) {
  const h = Math.round(size * (190 / 220));
  return (
    <svg width={size} height={h} viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left navy M-half */}
      <path d="M 12,12 L 12,178 L 68,178 L 68,100 L 106,12 Z" fill="#192540"/>
      {/* Right blue arch M-half */}
      <path d="M 113,178 L 113,64 C 111,-6 210,-6 208,64 L 208,178 L 162,178 L 162,64 C 162,38 130,38 130,64 L 130,178 Z" fill="#2B80F0"/>
      {/* Connector line — white */}
      <line x1="113" y1="61" x2="82" y2="100" stroke="white" strokeWidth="7" strokeLinecap="round"/>
      {/* Upper connector ring */}
      <circle cx="113" cy="61" r="15" fill="white"/>
      <circle cx="113" cy="61" r="9"  fill="#192540"/>
      {/* Lower connector dot */}
      <circle cx="82"  cy="100" r="9" fill="#192540"/>
    </svg>
  );
}

const catAccents: Record<string, string> = {
  'digital-marketing':   '#C84B30',
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
      <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-4 lg:px-6 pt-3">
        {/* Pill nav container */}
        <nav
          className="max-w-7xl mx-auto rounded-2xl transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.88)',
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: scrolled
              ? '0 4px 32px rgba(0,0,0,0.10), 0 1px 0 rgba(0,0,0,0.04)'
              : '0 2px 16px rgba(0,0,0,0.06)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex items-center justify-between h-13 px-4 sm:px-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <MetLinkLogo size={40} />
              <div className="hidden sm:block">
                <span className="font-black text-base tracking-tight leading-none">
                  <span style={{ color: '#192540' }}>Met</span><span style={{ color: '#2B80F0' }}>link</span>
                </span>
                <p className="text-[9px] tracking-widest uppercase leading-none mt-0.5" style={{ color: '#ADA09A' }}>AI Agency</p>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-0.5">
              <Link href="/"
                className="px-3.5 py-2 rounded-xl text-sm font-medium transition-all hover:bg-black/5"
                style={{ color: '#72645A' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#1C1410'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#72645A'}>
                Home
              </Link>

              {/* Services dropdown */}
              <div ref={dropdownRef} className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                <button
                  className="px-3.5 py-2 rounded-xl text-sm font-medium transition-all hover:bg-black/5 flex items-center gap-1"
                  style={{ color: '#72645A' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#1C1410'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#72645A'}
                  onClick={() => { if (window.innerWidth < 768) setServicesOpen(v => !v); }}>
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    style={{ color: '#C84B30' }} />
                </button>

                {servicesOpen && (
                  <>
                    <div className="fixed inset-0 top-16 z-[-1]" onClick={() => setServicesOpen(false)} />
                    <div
                      className="fixed top-[68px] inset-x-3 sm:inset-x-4 lg:inset-x-6 shadow-2xl animate-slideInDown overflow-hidden rounded-2xl"
                      style={{
                        background: 'rgba(255,255,255,0.98)',
                        border: '1px solid rgba(0,0,0,0.07)',
                        boxShadow: '0 24px 60px rgba(0,0,0,0.12)',
                        backdropFilter: 'blur(24px)',
                        maxWidth: '1200px',
                        margin: '0 auto',
                      }}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 grid grid-cols-4 gap-8">
                        {serviceCategories.map((cat) => {
                          const accent = catAccents[cat.slug] || '#C84B30';
                          return (
                            <div key={cat.slug} className="space-y-4">
                              <Link href={`/services/${cat.slug}`}
                                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all hover:translate-x-0.5"
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
                                      style={{ color: '#72645A' }}
                                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#1C1410'}
                                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#72645A'}
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

                        <div className="col-span-4 mt-2 pt-6 flex items-center justify-between"
                          style={{ borderTop: '1px solid #E5DDD5' }}>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-sm" style={{ color: '#ADA09A' }}>Custom AI solutions for unique business challenges</p>
                          </div>
                          <Link href="/contact" onClick={() => setServicesOpen(false)}
                            className="group px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all hover:brightness-95"
                            style={{ background: '#FEF1EE', color: '#C84B30', border: '1px solid rgba(200,75,48,0.2)' }}>
                            Talk to our experts <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {[['Company', '/company'], ['Portfolio', '/portfolio'], ['Blog', '/blog']].map(([label, href]) => (
                <Link key={label} href={href}
                  className="px-3.5 py-2 rounded-xl text-sm font-medium transition-all hover:bg-black/5"
                  style={{ color: '#72645A' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#1C1410'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#72645A'}>
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => setShowPopup(true)}
                className="text-sm font-medium transition-colors flex items-center gap-1.5"
                style={{ color: '#ADA09A' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#1C1410'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#ADA09A'}>
                <Brain className="w-3.5 h-3.5" style={{ color: '#C84B30' }} />
                Get Proposal
              </button>
              <Link href="/contact"
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:brightness-95 active:scale-95"
                style={{ background: '#C84B30' }}>
                Contact Us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2 rounded-xl transition-colors hover:bg-black/5" aria-label="Toggle menu"
              style={{ color: '#72645A' }}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden pb-4 pt-1 border-t animate-slideInDown"
              style={{ borderColor: '#E5DDD5' }}>
              <div className="px-4 py-2 space-y-0.5">
                <Link href="/" className="block px-3 py-2.5 text-sm rounded-xl hover:bg-black/5 font-medium"
                  style={{ color: '#72645A' }} onClick={() => setMobileOpen(false)}>Home</Link>

                <div className="px-3 pt-3 pb-1">
                  <p className="text-[10px] font-black uppercase tracking-wider" style={{ color: '#ADA09A' }}>Services</p>
                </div>
                {serviceCategories.map((cat) => {
                  const accent = catAccents[cat.slug] || '#C84B30';
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
                          style={{ color: '#ADA09A' }}
                          onClick={() => setMobileOpen(false)}>
                          {svc.name}
                        </Link>
                      ))}
                    </div>
                  );
                })}

                {[['Company', '/company'], ['Portfolio', '/portfolio'], ['Blog', '/blog']].map(([label, href]) => (
                  <Link key={label} href={href}
                    className="block px-3 py-2.5 text-sm rounded-xl hover:bg-black/5 font-medium"
                    style={{ color: '#72645A' }}
                    onClick={() => setMobileOpen(false)}>
                    {label}
                  </Link>
                ))}

                <div className="pt-3 space-y-2">
                  <Link href="/contact"
                    className="block text-center py-3 rounded-xl text-sm font-bold text-white"
                    style={{ background: '#C84B30' }}
                    onClick={() => setMobileOpen(false)}>
                    Contact Us
                  </Link>
                  <button onClick={() => { setShowPopup(true); setMobileOpen(false); }}
                    className="w-full text-center py-3 rounded-xl text-sm font-medium transition-colors hover:bg-black/5"
                    style={{ color: '#72645A', border: '1px solid #E5DDD5' }}>
                    Get a Free Proposal
                  </button>
                </div>
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden animate-fadeInScale shadow-2xl"
        style={{ background: '#FFFFFF', border: '1px solid #E5DDD5' }}>
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #C84B30, #E8612A)' }} />
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg transition-colors hover:bg-black/5"
          style={{ color: '#ADA09A' }}>
          <X className="w-4 h-4" />
        </button>
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-10 animate-fadeInScale">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: 'linear-gradient(135deg, #C84B30, #E8612A)', boxShadow: '0 0 40px rgba(200,75,48,0.2)' }}>
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-2" style={{ color: '#1C1410' }}>Request Received!</h3>
              <p className="text-sm max-w-[240px] mx-auto" style={{ color: '#72645A' }}>
                Our AI strategy team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-2" style={{ color: '#C84B30' }}>
                  Limited Spots Available
                </p>
                <h2 className="text-2xl font-black leading-tight" style={{ color: '#1C1410' }}>
                  Get a Free Proposal
                </h2>
                <p className="text-sm mt-1" style={{ color: '#72645A' }}>
                  Join 80+ businesses growing with AI-powered strategy.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {['Full Name', 'Company / Project Name', 'Work Email Address'].map((ph, i) => (
                  <input key={ph} type={i === 2 ? 'email' : 'text'} placeholder={ph} required
                    className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all"
                    style={{ background: '#FAF9F6', border: '1px solid #E5DDD5', color: '#1C1410' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,75,48,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E5DDD5')} />
                ))}
                <select className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none appearance-none cursor-pointer transition-all"
                  style={{ background: '#FAF9F6', border: '1px solid #E5DDD5', color: '#ADA09A' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,75,48,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#E5DDD5')}>
                  <option value="">Select a Service (optional)</option>
                  <option value="ai">AI &amp; Automation</option>
                  <option value="dev">Software Development</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="creative">Creative Media</option>
                </select>
                <button type="submit"
                  className="w-full py-3.5 mt-2 rounded-xl font-black text-sm tracking-wide uppercase transition-all hover:brightness-95 active:scale-[0.98] text-white"
                  style={{ background: '#C84B30' }}>
                  Submit &amp; Get Started →
                </button>
                <p className="text-center text-[10px] font-medium mt-4" style={{ color: '#ADA09A' }}>
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
