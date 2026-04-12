'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Zap } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

/* ── Inline SVG Logo (mimics the circular ML gold badge) ── */
function MetLinkLogo({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="outerRing" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FACC15" />
          <stop offset="0.45" stopColor="#FACC15" />
          <stop offset="1" stopColor="#7A5010" />
        </linearGradient>
        <linearGradient id="monogram" x1="18" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="0.4" stopColor="#FACC15" />
          <stop offset="1" stopColor="#92600A" />
        </linearGradient>
      </defs>
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" fill="#0A0A0A" stroke="url(#outerRing)" strokeWidth="2.5" />
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
  'digital-marketing': 'text-amber-400 border-amber-500/25 hover:bg-amber-500/5',
  'creative-media': 'text-yellow-400 border-yellow-500/25 hover:bg-yellow-500/5',
  'ai-automation': 'text-amber-300 border-amber-400/25 hover:bg-amber-400/5',
  'software-development': 'text-yellow-500 border-yellow-600/25 hover:bg-yellow-600/5',
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const navLink =
    'px-4 py-2 rounded-lg text-sm font-medium text-[#E5E5E5] hover:text-[#FFFFFF] hover:bg-white/5 transition-all duration-200';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b shadow-lg shadow-black/40'
            : 'bg-transparent'
        }`}
        style={scrolled ? { background: 'rgba(8,8,8,0.92)', borderBottomColor: '#1A1A1A' } : {}}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group">
              <MetLinkLogo size={38} />
              <div className="hidden sm:block">
                <span
                  className="font-black text-lg tracking-wide"
                  style={{
                    background: '#FACC15',
                    color: '#FACC15',
                  }}
                >
                  METLINK
                </span>
                <p className="text-[10px] text-[#A3A3A3] tracking-widest uppercase leading-none">AI Agency</p>
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <div className="hidden md:flex items-center gap-1">
              <Link href="/" className={navLink}>Home</Link>

              {/* Services mega dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  className={`${navLink} flex items-center gap-1`}
                  onClick={() => setServicesOpen((v) => !v)}
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[780px] rounded-2xl shadow-2xl shadow-black/70 p-6 grid grid-cols-4 gap-5 animate-slideInDown"
                    style={{ background: 'rgba(10,10,10,0.97)', border: '1px solid #1A1A1A', backdropFilter: 'blur(24px)' }}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {serviceCategories.map((cat) => (
                      <div key={cat.slug}>
                        <Link
                          href={`/services/${cat.slug}`}
                          className={`block text-xs font-bold uppercase tracking-wider mb-3 px-2 py-1.5 rounded-lg border transition-colors ${catColors[cat.slug] || 'text-amber-400'}`}
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="mr-1.5">{cat.icon}</span>
                          {cat.name}
                        </Link>
                        <ul className="space-y-1">
                          {cat.services.map((svc) => (
                            <li key={svc.slug}>
                              <Link
                                href={`/services/${cat.slug}/${svc.slug}`}
                                className="group/item flex items-center gap-1.5 text-xs text-[#737373] hover:text-[#FFFFFF] py-1 px-2 rounded-lg hover:bg-white/5 transition-all"
                                onClick={() => setServicesOpen(false)}
                              >
                                <ArrowRight className="w-3 h-3 text-[#404040] group-hover/item:text-amber-400 transition-colors flex-shrink-0" />
                                {svc.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {/* Bottom bar */}
                    <div className="col-span-4 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid #1A1A1A' }}>
                      <p className="text-xs text-[#525252]">Not sure what you need?</p>
                      <Link href="/contact" onClick={() => setServicesOpen(false)}
                        className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 transition-colors">
                        Talk to our experts <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/company" className={navLink}>Company</Link>
              <Link href="/portfolio" className={navLink}>Portfolio</Link>
              <Link href="/blog" className={navLink}>Blog</Link>
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => setShowPopup(true)}
                className="flex items-center gap-1.5 text-sm text-[#A3A3A3] hover:text-[#FFFFFF] transition-colors">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Become a Client
              </button>
              <Link href="/contact"
                className="px-5 py-2 rounded-xl text-sm font-semibold transition-all hover:opacity-90 shadow-lg"
                style={{
                  background: '#FACC15',
                  color: '#000000',
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
              style={{ borderTop: '1px solid #1A1A1A' }}>
              <Link href="/" className="block px-4 py-2.5 text-sm text-[#E5E5E5] hover:text-[#FFFFFF] hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>

              <div className="px-4 pt-3 pb-1">
                <p className="text-xs font-bold text-[#525252] uppercase tracking-wider">Services</p>
              </div>
              {serviceCategories.map((cat) => (
                <div key={cat.slug}>
                  <Link href={`/services/${cat.slug}`}
                    className={`block px-6 py-1.5 text-sm font-semibold rounded-lg ${catColors[cat.slug]?.split(' ')[0] || 'text-amber-400'}`}
                    onClick={() => setMobileOpen(false)}>
                    {cat.icon} {cat.name}
                  </Link>
                  {cat.services.map((svc) => (
                    <Link key={svc.slug} href={`/services/${cat.slug}/${svc.slug}`}
                      className="block px-10 py-0.5 text-sm text-[#737373] hover:text-[#FFFFFF] transition-colors"
                      onClick={() => setMobileOpen(false)}>
                      {svc.name}
                    </Link>
                  ))}
                </div>
              ))}

              <Link href="/company" className="block px-4 py-2.5 text-sm text-[#E5E5E5] hover:text-[#FFFFFF] hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>Company</Link>
              <Link href="/portfolio" className="block px-4 py-2.5 text-sm text-[#E5E5E5] hover:text-[#FFFFFF] hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>Portfolio</Link>
              <Link href="/blog" className="block px-4 py-2.5 text-sm text-[#E5E5E5] hover:text-[#FFFFFF] hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>Blog</Link>

              <div className="px-4 pt-3 space-y-2">
                <Link href="/contact"
                  className="block text-center py-3 rounded-xl text-sm font-bold"
                  style={{ background: '#FACC15', color: '#000000' }}
                  onClick={() => setMobileOpen(false)}>
                  Contact Us
                </Link>
                <button onClick={() => { setShowPopup(true); setMobileOpen(false); }}
                  className="w-full text-center py-3 rounded-xl text-sm text-[#A3A3A3] hover:text-[#FFFFFF] hover:bg-white/5 transition-colors"
                  style={{ border: '1px solid #1A1A1A' }}>
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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden animate-fadeInScale shadow-2xl shadow-black/60"
        style={{ background: '#0F0F0F', border: '1px solid #1A1A1A' }}>
        <div className="h-0.5 w-full" style={{ background: '#FACC15' }} />
        <button onClick={onClose} className="absolute top-4 right-4 text-[#737373] hover:text-[#FFFFFF] transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#1A1A1A' }}>
                <Zap className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">You are in!</h3>
              <p className="text-[#A3A3A3] text-sm">Our team will reach out within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <MetLinkLogo size={48} />
                <h2 className="text-2xl font-bold text-[#FFFFFF] mt-3 mb-1">Become a Client</h2>
                <p className="text-[#A3A3A3] text-sm">Start building something great together.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {(['name', 'company', 'email'] as const).map((field) => (
                  <input key={field} type={field === 'email' ? 'email' : 'text'} name={field} value={form[field]}
                    onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                    placeholder={field === 'name' ? 'Full Name' : field === 'company' ? 'Company / Project' : 'Work Email'}
                    required
                    className="w-full px-4 py-3 rounded-xl text-[#FFFFFF] placeholder:text-[#5A5045] text-sm focus:outline-none transition-colors"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1A1A1A' }}
                  />
                ))}
                <button type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background: '#FACC15', color: '#000000' }}>
                  Submit & Get Started
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
