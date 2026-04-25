'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Zap, Megaphone, Palette, Bot, Code } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

/* ── Inline SVG Logo (mimics the circular ML gold badge) ── */
function MetLinkLogo({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="outerRing" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#64FFDA" />
          <stop offset="0.45" stopColor="#64FFDA" />
          <stop offset="1" stopColor="#112240" />
        </linearGradient>
        <linearGradient id="monogram" x1="18" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#007BFF" />
          <stop offset="0.4" stopColor="#64FFDA" />
          <stop offset="1" stopColor="#007BFF" />
        </linearGradient>
      </defs>
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" fill="#112240" stroke="url(#outerRing)" strokeWidth="2.5" />
      {/* Inner ring accent */}
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#outerRing)" strokeWidth="0.6" strokeOpacity="0.4" />
      {/* M path — angled peaks */}
      <path
        d="M18 70 L18 32 L36 54 L50 32 L64 54 L64 32"
        stroke="url(#monogram)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* L path extending from M bottom-right */}
      <path
        d="M64 70 L82 70"
        stroke="url(#monogram)"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* METLINK text */}
      <text
        x="50"
        y="90"
        textAnchor="middle"
        fill="url(#outerRing)"
        fontSize="9"
        fontWeight="700"
        letterSpacing="3"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        METLINK
      </text>
    </svg>
  );
}

const catColors: Record<string, string> = {
  'digital-marketing': 'text-[#64FFDA] border-[#64FFDA]/25 hover:bg-[#64FFDA]/5',
  'creative-media': 'text-[#64FFDA] border-yellow-500/25 hover:bg-yellow-500/5',
  'ai-automation': 'text-[#64FFDA] border-amber-400/25 hover:bg-amber-400/5',
  'software-development': 'text-[#64FFDA] border-yellow-600/25 hover:bg-yellow-600/5',
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setServicesOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setServicesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setServicesOpen(false);
      }, 200);
    }
  };

  const navLink =
    'px-4 py-2 rounded-lg text-sm font-medium text-[#ccd6f6] hover:text-[#ccd6f6] hover:bg-white/5 transition-all duration-200';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || servicesOpen
            ? 'backdrop-blur-xl border-b shadow-lg shadow-black/40'
            : 'bg-transparent'
        }`}
        style={(scrolled || servicesOpen) ? { background: 'rgba(8,8,8,0.92)', borderBottomColor: '#233554' } : {}}
      >
        {/* Backdrop for mega menu */}
        {servicesOpen && (
          <div 
            className="fixed inset-0 top-14 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 z-[-1]"
            onClick={() => setServicesOpen(false)}
          />
        )}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group">
              <MetLinkLogo size={32} />
              <div className="hidden sm:block">
                <span
                  className="font-black text-lg tracking-wide"
                  style={{
                    color: '#64FFDA',
                  }}
                >
                  METLINK
                </span>
                <p className="text-[10px] text-[#8892B0] tracking-widest uppercase leading-none">AI Agency</p>
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <div className="hidden md:flex items-center gap-1">
              <Link href="/" className={navLink}>Home</Link>

              {/* Services mega dropdown */}
              <div 
                ref={dropdownRef} 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`${navLink} flex items-center gap-1 cursor-default`}
                  onClick={() => {
                    if (window.innerWidth < 768) setServicesOpen((v) => !v);
                  }}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div
                    className="fixed top-[56px] inset-x-0 w-screen shadow-2xl shadow-black/80 animate-slideInDown overflow-hidden pt-1"
                    style={{ 
                      background: 'rgba(8,8,8,0.98)', 
                      borderBottom: '1px solid #233554', 
                      backdropFilter: 'blur(32px)' 
                    }}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-4 gap-10">
                      {serviceCategories.map((cat) => (
                        <div key={cat.slug} className="space-y-6">
                          <Link
                            href={`/services/${cat.slug}`}
                            className={`flex items-center gap-2.5 text-sm font-bold uppercase tracking-widest transition-all hover:translate-x-1 ${catColors[cat.slug]?.split(' ')[0] || 'text-[#64FFDA]'}`}
                            onClick={() => setServicesOpen(false)}
                          >
                            {cat.slug === 'digital-marketing' && <Megaphone className="w-4 h-4" />}
                            {cat.slug === 'creative-media' && <Palette className="w-4 h-4" />}
                            {cat.slug === 'ai-automation' && <Bot className="w-4 h-4" />}
                            {cat.slug === 'software-development' && <Code className="w-4 h-4" />}
                            {cat.name}
                          </Link>
                          <ul className="space-y-3">
                            {cat.services.map((svc) => (
                              <li key={svc.slug}>
                                <Link
                                  href={`/services/${cat.slug}/${svc.slug}`}
                                  className="group/item flex items-center gap-2 text-sm text-[#8892B0] hover:text-[#ccd6f6] transition-all"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <ArrowRight className="w-3.5 h-3.5 text-[#233554] group-hover/item:text-[#007BFF] group-hover/item:translate-x-0.5 transition-all flex-shrink-0" />
                                  {svc.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {/* Bottom bar */}
                      <div className="col-span-4 mt-4 pt-8 flex items-center justify-between border-t border-[#233554]">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#64FFDA] animate-pulse" />
                          <p className="text-sm text-[#8892B0]">Custom solutions for unique business challenges</p>
                        </div>
                        <Link href="/contact" onClick={() => setServicesOpen(false)}
                          className="group px-6 py-2.5 rounded-xl bg-[#64FFDA]/5 border border-[#64FFDA]/20 text-sm text-[#64FFDA] hover:bg-[#64FFDA]/10 font-bold flex items-center gap-2 transition-all">
                          Talk to our experts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/company" className={navLink}>Company</Link>
              <Link href="/portfolio" className={navLink}>Portfolio</Link>
              <Link href="/blog" className={navLink}>Blog</Link>
              <Link href="/our-product" className={navLink}>Our Product</Link>
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => setShowPopup(true)}
                className="flex items-center gap-1.5 text-sm text-[#8892B0] hover:text-[#ccd6f6] transition-colors">
                <Zap className="w-3.5 h-3.5 text-[#64FFDA]" />
                Become a Client
              </button>
              <Link href="/contact"
                className="px-5 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,123,255,0.3)]"
                style={{
                  background: '#007BFF',
                  color: '#FFFFFF',
                  boxShadow: "none",
                }}>
                Contact Us
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="Toggle menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* ── Mobile menu ── */}
          {mobileOpen && (
            <div className="md:hidden pb-6 pt-2 space-y-0.5 mt-1 animate-slideInDown"
              style={{ borderTop: '1px solid #233554' }}>
              <Link href="/" className="block px-4 py-2.5 text-sm text-[#ccd6f6] hover:text-[#ccd6f6] hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>

              <div className="px-4 pt-3 pb-1">
                <p className="text-xs font-bold text-[#8892B0] uppercase tracking-wider">Services</p>
              </div>
              {serviceCategories.map((cat) => (
                <div key={cat.slug}>
                  <Link href={`/services/${cat.slug}`}
                    className={`block px-6 py-1.5 text-sm font-semibold rounded-lg ${catColors[cat.slug]?.split(' ')[0] || 'text-[#64FFDA]'}`}
                    onClick={() => setMobileOpen(false)}>
                    <span className="mr-2 inline-block align-middle">
                      {cat.slug === 'digital-marketing' && <Megaphone className="w-4 h-4" />}
                      {cat.slug === 'creative-media' && <Palette className="w-4 h-4" />}
                      {cat.slug === 'ai-automation' && <Bot className="w-4 h-4" />}
                      {cat.slug === 'software-development' && <Code className="w-4 h-4" />}
                    </span>
                    {cat.name}
                  </Link>
                  {cat.services.map((svc) => (
                    <Link key={svc.slug} href={`/services/${cat.slug}/${svc.slug}`}
                      className="block px-10 py-0.5 text-sm text-[#8892B0] hover:text-[#ccd6f6] transition-colors"
                      onClick={() => setMobileOpen(false)}>
                      {svc.name}
                    </Link>
                  ))}
                </div>
              ))}

              <Link href="/company" className="block px-4 py-2.5 text-sm text-[#ccd6f6] hover:text-[#ccd6f6] hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>Company</Link>
              <Link href="/portfolio" className="block px-4 py-2.5 text-sm text-[#ccd6f6] hover:text-[#ccd6f6] hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>Portfolio</Link>
              <Link href="/blog" className="block px-4 py-2.5 text-sm text-[#ccd6f6] hover:text-[#ccd6f6] hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/our-product" className="block px-4 py-2.5 text-sm text-[#ccd6f6] hover:text-[#ccd6f6] hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>Our Product</Link>

              <div className="px-4 pt-3 space-y-2">
                <Link href="/contact"
                  className="block text-center py-3 rounded-xl text-sm font-bold"
                  style={{ background: '#64FFDA', color: '#0A192F' }}
                  onClick={() => setMobileOpen(false)}>
                  Contact Us
                </Link>
                <button onClick={() => { setShowPopup(true); setMobileOpen(false); }}
                  className="w-full text-center py-3 rounded-xl text-sm text-[#8892B0] hover:text-[#ccd6f6] hover:bg-white/5 transition-colors"
                  style={{ border: '1px solid #233554' }}>
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
  const [form, setForm] = useState({ name: '', company: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#0A192F]/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden animate-fadeInScale shadow-2xl shadow-black/60"
        style={{ background: '#112240', border: '1px solid #233554' }}>
        <div className="h-0.5 w-full" style={{ background: '#64FFDA' }} />
        <button onClick={onClose} className="absolute top-4 right-4 text-[#8892B0] hover:text-[#ccd6f6] transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-10 animate-fadeInScale">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl" 
                style={{ background: 'linear-gradient(135deg, #64FFDA 0%, #007BFF 100%)' }}>
                <Zap className="w-10 h-10 text-[#0A192F]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Request Received!</h3>
              <p className="text-[#8892B0] text-sm max-w-[240px] mx-auto">Our strategy team will reach out to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="inline-block mb-6 relative">
                  <div className="absolute inset-0 bg-[#64FFDA]/20 blur-xl rounded-full" />
                  <MetLinkLogo size={64} />
                </div>
                
                <p className="text-[10px] font-black text-[#64FFDA] tracking-[0.3em] uppercase mb-3">
                  Limited Spots Available
                </p>
                
                <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-4 tracking-tight">
                  Become a <br/>MetLink Client
                </h2>
                
                <p className="text-[#8892B0] text-sm font-medium">
                  Join 80+ businesses growing with AI-powered strategy.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <input type="text" placeholder="Full Name" required
                    className="w-full px-5 py-4 rounded-xl bg-[#0d1b2a]/50 border border-[#233554] text-white placeholder:text-[#8892B0]/30 text-sm focus:outline-none focus:border-[#64FFDA]/50 transition-all"
                  />
                  <input type="text" placeholder="Company / Project Name" required
                    className="w-full px-5 py-4 rounded-xl bg-[#0d1b2a]/50 border border-[#233554] text-white placeholder:text-[#8892B0]/30 text-sm focus:outline-none focus:border-[#64FFDA]/50 transition-all"
                  />
                  <input type="email" placeholder="Work Email Address" required
                    className="w-full px-5 py-4 rounded-xl bg-[#0d1b2a]/50 border border-[#233554] text-white placeholder:text-[#8892B0]/30 text-sm focus:outline-none focus:border-[#64FFDA]/50 transition-all"
                  />
                  <select 
                    className="w-full px-5 py-4 rounded-xl bg-[#0d1b2a]/50 border border-[#233554] text-[#8892B0]/60 text-sm focus:outline-none focus:border-[#64FFDA]/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a Service (optional)</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="ai">AI & Automation</option>
                    <option value="dev">Software Development</option>
                  </select>
                </div>

                <button type="submit"
                  className="w-full py-4 mt-4 rounded-xl font-black text-sm tracking-widest uppercase transition-all hover:brightness-110 active:scale-[0.98] shadow-xl shadow-teal-900/20"
                  style={{ background: '#64FFDA', color: '#0A192F' }}>
                  Submit & Get Started →
                </button>
                
                <p className="text-center text-[10px] text-[#8892B0]/40 font-medium mt-6">
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
