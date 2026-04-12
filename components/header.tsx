'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Zap } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';
import { PopupForm } from '@/components/popup-form';

const catColors: Record<string, string> = {
  'digital-marketing': 'text-blue-400 border-blue-500/30 hover:bg-blue-500/5',
  'creative-media': 'text-purple-400 border-purple-500/30 hover:bg-purple-500/5',
  'ai-automation': 'text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/5',
  'software-development': 'text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/5',
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
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navLink =
    'px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all duration-200';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:shadow-blue-600/50 transition-shadow">
                <span className="text-white text-sm font-black">ML</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hidden sm:block">
                MetLink
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <Link href="/" className={navLink}>
                Home
              </Link>

              {/* Services mega dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  className={`${navLink} flex items-center gap-1`}
                  onClick={() => setServicesOpen((v) => !v)}
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-6 grid grid-cols-4 gap-5 animate-slideInDown"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {serviceCategories.map((cat) => (
                      <div key={cat.slug}>
                        <Link
                          href={`/services/${cat.slug}`}
                          className={`block text-xs font-bold uppercase tracking-wider mb-3 px-2 py-1.5 rounded-lg border transition-colors ${catColors[cat.slug] || 'text-blue-400'}`}
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
                                className="group/item flex items-center gap-1.5 text-xs text-foreground/55 hover:text-foreground py-1 px-2 rounded-lg hover:bg-white/5 transition-all"
                                onClick={() => setServicesOpen(false)}
                              >
                                <ArrowRight className="w-3 h-3 text-foreground/30 group-hover/item:text-blue-400 transition-colors flex-shrink-0" />
                                {svc.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Bottom CTA */}
                    <div className="col-span-4 pt-4 border-t border-white/5 flex items-center justify-between">
                      <p className="text-xs text-foreground/40">
                        Not sure what you need?
                      </p>
                      <Link
                        href="/contact"
                        onClick={() => setServicesOpen(false)}
                        className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
                      >
                        Talk to our experts <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/company" className={navLink}>
                Company
              </Link>
              <Link href="/portfolio" className={navLink}>
                Portfolio
              </Link>
              <Link href="/blog" className={navLink}>
                Blog
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setShowPopup(true)}
                className="flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                Become a Client
              </button>
              <Link
                href="/contact"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-600/20"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden pb-6 pt-2 space-y-1 border-t border-white/5 mt-1 animate-slideInDown">
              <Link
                href="/"
                className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              <div className="px-4 pt-2 pb-1">
                <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider">
                  Services
                </p>
              </div>
              {serviceCategories.map((cat) => (
                <div key={cat.slug}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className={`block px-6 py-1.5 text-sm font-semibold rounded-lg transition-colors ${catColors[cat.slug]?.split(' ')[0] || 'text-blue-400'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat.icon} {cat.name}
                  </Link>
                  {cat.services.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${cat.slug}/${svc.slug}`}
                      className="block px-10 py-1 text-sm text-foreground/50 hover:text-foreground transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {svc.name}
                    </Link>
                  ))}
                </div>
              ))}

              <Link
                href="/company"
                className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Company
              </Link>
              <Link
                href="/portfolio"
                className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>

              <div className="px-4 pt-3 space-y-2">
                <Link
                  href="/contact"
                  className="block text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
                <button
                  onClick={() => { setShowPopup(true); setMobileOpen(false); }}
                  className="w-full text-center py-3 rounded-xl border border-white/10 text-foreground/70 text-sm hover:bg-white/5 transition-colors"
                >
                  Become a Client
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Popup controlled by header button */}
      {showPopup && <PopupFormControlled onClose={() => setShowPopup(false)} />}
    </>
  );
}

// Inline immediate popup for when the button is clicked manually
function PopupFormControlled({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl overflow-hidden animate-fadeInScale">
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500" />
        <button onClick={onClose} className="absolute top-4 right-4 text-foreground/50 hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">You're in!</h3>
              <p className="text-foreground/60 text-sm">Our team will reach out within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  Become a <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Client</span>
                </h2>
                <p className="text-foreground/60 text-sm">Let's start building something great together.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {(['name', 'company', 'email'] as const).map((field) => (
                  <input
                    key={field}
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={form[field]}
                    onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                    placeholder={field === 'name' ? 'Full Name' : field === 'company' ? 'Company / Project' : 'Work Email'}
                    required
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                ))}
                <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity">
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
