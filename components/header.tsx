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

  const inputStyle = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#FFFFFF',
    borderRadius: 12,
  };
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(43,128,240,0.6)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(43,128,240,0.12)';
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden animate-fadeInScale shadow-2xl flex"
        style={{ background: '#07111F', border: '1px solid rgba(255,255,255,0.1)', maxHeight: '92vh' }}>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #2B80F0 30%, #5FA8FF 50%, #2B80F0 70%, transparent)' }} />

        {/* ── LEFT PANEL ── */}
        <div className="hidden sm:flex flex-col justify-between w-[46%] shrink-0 p-8 relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0B1628 0%, #07111F 60%, #091520 100%)' }}>

          {/* Glow blob */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(43,128,240,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />

          <div className="relative z-10">
            {/* Logo */}
            <div className="mb-7">
              <img src="/WhatsApp_Image_2026-04-30_at_7.30.41_PM-removebg-preview.png" alt="MetLink"
                style={{ width: 160, height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* Badge */}
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] mb-4" style={{ color: '#2B80F0' }}>
              Limited Spots Available
            </p>

            {/* Headline */}
            <h2 className="text-2xl font-black leading-tight mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Schedule Your<br />
              <span style={{ color: '#2B80F0' }}>Success Story</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Join 80+ businesses growing with AI-powered marketing and development.
            </p>

            {/* Bullets */}
            <ul className="space-y-3">
              {[
                { icon: '📈', text: 'Average 70% revenue growth' },
                { icon: '⚡', text: 'First deliverables in 7 days' },
                { icon: '🔒', text: 'NDA signed before we begin' },
                { icon: '🤖', text: 'AI-powered execution' },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-sm"
                    style={{ background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.2)' }}>
                    {icon}
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          <div className="relative z-10 mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="w-4 h-4" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <p className="text-xs italic leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              &ldquo;MetLink delivered in half the time and doubled our ROI.&rdquo;
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="flex-1 flex flex-col overflow-y-auto p-7 sm:p-8 relative"
          style={{ background: '#0B1628' }}>

          {/* Close */}
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-white/10"
            style={{ color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-10 animate-fadeInScale">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.3)' }}>
                <ArrowRight className="w-8 h-8" style={{ color: '#2B80F0' }} />
              </div>
              <h3 className="text-xl font-black mb-2" style={{ color: '#FFFFFF' }}>Request Received!</h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Our strategy team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 pr-8">
                <h3 className="text-xl font-black mb-1" style={{ color: '#FFFFFF' }}>Get My Free Proposal 🚀</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Complete the form and we&apos;ll validate your idea now.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="text" placeholder="Full Name *" required
                  className="w-full px-4 py-3 text-sm focus:outline-none placeholder:text-white/25"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <input type="email" placeholder="Email Address *" required
                  className="w-full px-4 py-3 text-sm focus:outline-none placeholder:text-white/25"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <input type="tel" placeholder="Phone Number"
                  className="w-full px-4 py-3 text-sm focus:outline-none placeholder:text-white/25"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <select className="w-full px-4 py-3 text-sm focus:outline-none appearance-none cursor-pointer"
                  style={{ ...inputStyle, color: 'rgba(255,255,255,0.4)' }}
                  onFocus={onFocus} onBlur={onBlur}>
                  <option value="" style={{ background: '#0B1628' }}>Select a Budget Range</option>
                  <option value="5k" style={{ background: '#0B1628', color: '#fff' }}>$1k – $5k</option>
                  <option value="10k" style={{ background: '#0B1628', color: '#fff' }}>$5k – $10k</option>
                  <option value="25k" style={{ background: '#0B1628', color: '#fff' }}>$10k – $25k</option>
                  <option value="25k+" style={{ background: '#0B1628', color: '#fff' }}>$25k+</option>
                </select>
                <textarea placeholder="Please share any information that will help us provide an accurate estimate. *"
                  rows={3} required
                  className="w-full px-4 py-3 text-sm focus:outline-none resize-none placeholder:text-white/25"
                  style={inputStyle}
                  onFocus={onFocus as React.FocusEventHandler<HTMLTextAreaElement>}
                  onBlur={onBlur as React.FocusEventHandler<HTMLTextAreaElement>} />

                <label className="flex items-center gap-3 cursor-pointer mt-1">
                  <input type="checkbox" className="w-4 h-4 rounded accent-blue-500" />
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Send me a copy of NDA</span>
                </label>

                <button type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase transition-all hover:brightness-110 active:scale-[0.98] mt-1"
                  style={{ background: '#2B80F0', color: '#FFFFFF', boxShadow: '0 4px 20px rgba(43,128,240,0.35)', letterSpacing: '0.1em' }}>
                  Submit
                </button>

                <p className="text-center text-[11px] mt-1" style={{ color: '#2B80F0' }}>
                  ✓ Your idea is 100% protected by our Non Disclosure Agreement.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
