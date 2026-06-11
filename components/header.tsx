'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';
import { industries } from '@/lib/industries-data';
import { TileIcon } from '@/components/tile-icon';

// Normalized shape both mega-menus share.
interface MenuItem { name: string; slug: string; icon: string; tagline: string }
interface MenuGroup { name: string; slug: string; icon: string; items: MenuItem[] }

const servicesMenu: { basePath: string; groups: MenuGroup[] } = {
  basePath: '/services',
  groups: serviceCategories.map(c => ({
    name: c.name, slug: c.slug, icon: c.icon,
    items: c.services.map(s => ({ name: s.name, slug: s.slug, icon: s.icon, tagline: s.tagline })),
  })),
};

const industriesMenu: { basePath: string; groups: MenuGroup[] } = {
  basePath: '/industries',
  groups: industries.map(i => ({
    name: i.name, slug: i.slug, icon: i.icon,
    items: i.topics.map(t => ({ name: t.name, slug: t.slug, icon: t.icon, tagline: t.tagline })),
  })),
};

type MenuKey = 'services' | 'industries' | null;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [activeGroup, setActiveGroup] = useState<Record<string, string>>({
    services: servicesMenu.groups[0]?.slug ?? '',
    industries: industriesMenu.groups[0]?.slug ?? '',
  });
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  const open = (key: Exclude<MenuKey, null>) => { if (window.innerWidth >= 768) { if (timeoutRef.current) clearTimeout(timeoutRef.current); setActiveMenu(key); } };
  const close = () => { if (window.innerWidth >= 768) { timeoutRef.current = setTimeout(() => setActiveMenu(null), 180); } };
  const cancelClose = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };

  const menu = activeMenu === 'services' ? servicesMenu : activeMenu === 'industries' ? industriesMenu : null;
  const currentGroupSlug = activeMenu ? activeGroup[activeMenu] : '';
  const currentGroup = menu?.groups.find(g => g.slug === currentGroupSlug) ?? menu?.groups[0];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <nav
          className="transition-all duration-500"
          style={{
            background: mobileOpen ? '#04090F' : 'transparent',
            borderBottom: mobileOpen ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
            backdropFilter: mobileOpen ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: mobileOpen ? 'blur(20px)' : 'none',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[116px]" style={{ overflow: 'visible' }}>

              {/* Logo */}
              <Link href="/" className="flex items-center shrink-0 group">
                <Image
                  src="/WhatsApp_Image_2026-04-30_at_7.30.41_PM-removebg-preview.png"
                  alt="MetLink" width={559} height={447} priority
                  className="transition-opacity duration-200 group-hover:opacity-80"
                  style={{ height: '110px', width: 'auto', objectFit: 'contain' }}
                />
              </Link>

              {/* Desktop nav pill */}
              <div className="hidden md:flex items-center"
                style={{
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '9999px', padding: '4px',
                  backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                }}>
                <NavLink href="/">Home</NavLink>

                {/* Services trigger */}
                <div className="relative" onMouseEnter={() => open('services')} onMouseLeave={close}>
                  <button
                    className="px-4 py-1.5 rounded-full text-sm font-normal transition-all flex items-center gap-1.5"
                    style={{ color: activeMenu === 'services' ? '#FFFFFF' : 'rgba(255,255,255,0.75)', background: activeMenu === 'services' ? 'rgba(255,255,255,0.09)' : 'transparent' }}>
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Industries trigger */}
                <div className="relative" onMouseEnter={() => open('industries')} onMouseLeave={close}>
                  <button
                    className="px-4 py-1.5 rounded-full text-sm font-normal transition-all flex items-center gap-1.5"
                    style={{ color: activeMenu === 'industries' ? '#FFFFFF' : 'rgba(255,255,255,0.75)', background: activeMenu === 'industries' ? 'rgba(255,255,255,0.09)' : 'transparent' }}>
                    Industries
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} />
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
                <Link href="https://calendly.com/jitesh-bawaskar-metlinkai/30min"
                  className="px-5 py-2 rounded-xl text-xs font-semibold transition-all active:scale-95"
                  style={{ background: 'rgba(255,255,255,0.10)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.18)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.16)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.10)'; }}>
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
          </div>
        </nav>

        {/* Mobile menu — sibling of <nav> so nav's backdrop-filter doesn't trap the fixed panel */}
        {mobileOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 z-[55]"
              style={{ top: 116, background: 'rgba(4,9,15,0.97)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
              onClick={() => setMobileOpen(false)} />
            <div data-lenis-prevent className="fixed left-0 right-0 z-[56] overflow-y-auto animate-slideInDown"
              style={{ top: 116, bottom: 0, background: '#04090F', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="px-5 py-4 space-y-0.5 pb-10">
                <MobileNavLink href="/" onClose={() => setMobileOpen(false)}>Home</MobileNavLink>

                <MobileMegaSection title="Services" basePath="/services" groups={servicesMenu.groups}
                  openGroup={mobileGroup} setOpenGroup={setMobileGroup} onClose={() => setMobileOpen(false)} />
                <MobileMegaSection title="Industries" basePath="/industries" groups={industriesMenu.groups}
                  openGroup={mobileGroup} setOpenGroup={setMobileGroup} onClose={() => setMobileOpen(false)} />

                <div className="pt-2">
                  {[['Company', '/company'], ['Portfolio', '/portfolio'], ['Blog', '/blog'], ['Product', '/product']].map(([label, href]) => (
                    <MobileNavLink key={label} href={href} onClose={() => setMobileOpen(false)}>
                      {label}
                      {label === 'Product' && (
                        <span className="ml-1.5 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider"
                          style={{ background: 'rgba(43,128,240,0.2)', color: '#5FA8FF' }}>Soon</span>
                      )}
                    </MobileNavLink>
                  ))}
                </div>

                <div className="pt-4 space-y-2.5 border-t mt-3" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  <Link href="https://calendly.com/jitesh-bawaskar-metlinkai/30min"
                    className="block text-center py-3.5 rounded-full text-sm font-semibold text-white"
                    style={{ background: '#2B80F0', boxShadow: '0 4px 16px rgba(43,128,240,0.3)' }}
                    onClick={() => setMobileOpen(false)}>
                    Contact Us
                  </Link>
                  <button onClick={() => { setShowPopup(true); setMobileOpen(false); }}
                    className="w-full text-center py-3.5 rounded-full text-sm font-semibold"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
                    Get a Free Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop two-pane mega-menu */}
        {menu && currentGroup && (
          <>
            <div className="fixed inset-0" style={{ top: 116, zIndex: 48 }} onClick={() => setActiveMenu(null)} />
            <div
              className="fixed left-0 right-0 animate-slideInDown"
              style={{ top: 116, zIndex: 49, background: '#04090F', borderBottom: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 40px 100px rgba(0,0,0,0.85)' }}
              onMouseEnter={cancelClose}
              onMouseLeave={close}
            >
              <div style={{ height: 1, background: 'linear-gradient(to right, transparent 0%, rgba(43,128,240,0.55) 20%, rgba(95,168,255,0.85) 50%, rgba(43,128,240,0.55) 80%, transparent 100%)' }} />

              <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-8 lg:pt-12 lg:pb-10">
                <div className="flex gap-8 lg:gap-12">

                  {/* Left rail */}
                  <div className="w-[240px] lg:w-[280px] flex-shrink-0 border-r pr-4" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                    <ul className="space-y-0.5">
                      {menu.groups.map(g => {
                        const active = g.slug === currentGroupSlug;
                        const featured = g.slug === 'automation-first';
                        return (
                          <li key={g.slug}
                            onMouseEnter={() => setActiveGroup(prev => ({ ...prev, [activeMenu as string]: g.slug }))}>
                            <Link
                              href={`${menu.basePath}/${g.slug}`}
                              onClick={() => setActiveMenu(null)}
                              className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all"
                              style={{
                                color: active ? '#5FA8FF' : 'rgba(255,255,255,0.7)',
                                background: active ? 'rgba(43,128,240,0.10)' : 'transparent',
                                ...(featured ? { borderLeft: '2px solid rgba(43,128,240,0.8)' } : {}),
                              }}>
                              <span className="flex items-center gap-2.5">
                                <TileIcon slug={g.slug} className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.6} />
                                {g.name}
                                {featured && (
                                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider"
                                    style={{ background: 'rgba(43,128,240,0.18)', color: '#5FA8FF', border: '1px solid rgba(43,128,240,0.3)' }}>
                                    New
                                  </span>
                                )}
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ opacity: active ? 1 : 0.4 }} />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right grid */}
                  <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-h-[58vh] overflow-y-auto px-1 pt-1.5 pb-2" data-lenis-prevent>
                      {currentGroup.items.map(item => (
                        <Link
                          key={item.slug}
                          href={`${menu.basePath}/${currentGroup.slug}/${item.slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="group/tile rounded-xl p-4 flex flex-col transition-all duration-200 hover:-translate-y-0.5"
                          style={{ background: '#0B1628', border: '1px solid rgba(255,255,255,0.07)' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,128,240,0.45)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}>
                          <TileIcon slug={item.slug} className="w-7 h-7 mb-3 text-white/90" strokeWidth={1.3} />
                          <span className="text-[13.5px] font-semibold leading-snug transition-colors group-hover/tile:text-[#5FA8FF]" style={{ color: '#FFFFFF' }}>
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
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

function MobileMegaSection({ title, basePath, groups, openGroup, setOpenGroup, onClose }: {
  title: string; basePath: string; groups: MenuGroup[];
  openGroup: string | null; setOpenGroup: (s: string | null) => void; onClose: () => void;
}) {
  return (
    <div>
      <div className="px-3 pt-4 pb-1">
        <p className="text-[10px] font-black uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>{title}</p>
      </div>
      {groups.map(g => {
        const key = `${title}-${g.slug}`;
        const open = openGroup === key;
        return (
          <div key={g.slug}>
            <button
              onClick={() => setOpenGroup(open ? null : key)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold rounded-xl"
              style={{ color: '#5FA8FF' }}>
              <span className="flex items-center gap-2"><TileIcon slug={g.slug} className="w-4 h-4" strokeWidth={1.6} />{g.name}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
              <div className="pb-1">
                <Link href={`${basePath}/${g.slug}`} onClick={onClose}
                  className="block pl-9 py-1.5 text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  View all {g.name} →
                </Link>
                {g.items.map(item => (
                  <Link key={item.slug} href={`${basePath}/${g.slug}/${item.slug}`} onClick={onClose}
                    className="block pl-9 py-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ProposalPopup({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const message = String(fd.get('message') || '').trim();
    if (!name) { setError('Please enter your name.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address.'); return; }
    if (!message) { setError('Please share a few details about your project.'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'), email: fd.get('email'), phone: fd.get('phone'),
          budget: fd.get('budget'), message: fd.get('message'), source: 'proposal',
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed.');
      setSubmitted(true);
      setTimeout(onClose, 2800);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', borderRadius: 12 };
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

        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #2B80F0 30%, #5FA8FF 50%, #2B80F0 70%, transparent)' }} />

        <div className="hidden sm:flex flex-col justify-between w-[46%] shrink-0 p-8 relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0B1628 0%, #07111F 60%, #091520 100%)' }}>
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(43,128,240,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="relative z-10">
            <div className="mb-7">
              <img src="/WhatsApp_Image_2026-04-30_at_7.30.41_PM-removebg-preview.png" alt="MetLink"
                style={{ width: 160, height: 'auto', objectFit: 'contain' }} />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] mb-4" style={{ color: '#2B80F0' }}>
              Limited Spots Available
            </p>
            <h2 className="text-2xl font-black leading-tight mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Schedule Your<br />
              <span style={{ color: '#2B80F0' }}>Success Story</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Join 80+ businesses growing with AI-powered marketing and development.
            </p>
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

        <div className="flex-1 flex flex-col overflow-y-auto p-7 sm:p-8 relative" style={{ background: '#0B1628' }}>
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
                <h3 className="text-xl font-black mb-1" style={{ color: '#FFFFFF' }}>Get My Free Proposal</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Complete the form and we&apos;ll validate your idea now.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="text" name="name" placeholder="Full Name *" required
                  className="w-full px-4 py-3 text-sm focus:outline-none placeholder:text-white/25"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <input type="email" name="email" placeholder="Email Address *" required
                  className="w-full px-4 py-3 text-sm focus:outline-none placeholder:text-white/25"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <input type="tel" name="phone" placeholder="Phone Number"
                  className="w-full px-4 py-3 text-sm focus:outline-none placeholder:text-white/25"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <select name="budget" className="w-full px-4 py-3 text-sm focus:outline-none appearance-none cursor-pointer"
                  style={{ ...inputStyle, color: 'rgba(255,255,255,0.4)' }}
                  onFocus={onFocus} onBlur={onBlur}>
                  <option value="" style={{ background: '#0B1628' }}>Select a Budget Range</option>
                  <option value="$1k – $5k" style={{ background: '#0B1628', color: '#fff' }}>$1k – $5k</option>
                  <option value="$5k – $10k" style={{ background: '#0B1628', color: '#fff' }}>$5k – $10k</option>
                  <option value="$10k – $25k" style={{ background: '#0B1628', color: '#fff' }}>$10k – $25k</option>
                  <option value="$25k+" style={{ background: '#0B1628', color: '#fff' }}>$25k+</option>
                </select>
                <textarea name="message" placeholder="Please share any information that will help us provide an accurate estimate. *"
                  rows={3} required
                  className="w-full px-4 py-3 text-sm focus:outline-none resize-none placeholder:text-white/25"
                  style={inputStyle}
                  onFocus={onFocus as React.FocusEventHandler<HTMLTextAreaElement>}
                  onBlur={onBlur as React.FocusEventHandler<HTMLTextAreaElement>} />

                <label className="flex items-center gap-3 cursor-pointer mt-1">
                  <input type="checkbox" className="w-4 h-4 rounded accent-blue-500" />
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Send me a copy of NDA</span>
                </label>

                {error && (
                  <p className="text-xs px-3 py-2.5 rounded-xl" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#FCA5A5' }}>
                    {error}
                  </p>
                )}

                <button type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60 mt-1 flex items-center justify-center gap-2"
                  style={{ background: '#2B80F0', color: '#FFFFFF', boxShadow: '0 4px 20px rgba(43,128,240,0.35)', letterSpacing: '0.1em' }}>
                  {loading
                    ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting…</>
                    : 'Submit'}
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
