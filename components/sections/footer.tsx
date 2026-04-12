'use client';

import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

function MetLinkLogoFooter() {
  return (
    <svg width="42" height="42" viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="fRing" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0C855" /><stop offset="0.45" stopColor="#D4A843" /><stop offset="1" stopColor="#7A5010" />
        </linearGradient>
        <linearGradient id="fMono" x1="18" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" /><stop offset="0.4" stopColor="#D4A843" /><stop offset="1" stopColor="#92600A" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="#0A0A0A" stroke="url(#fRing)" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#fRing)" strokeWidth="0.6" strokeOpacity="0.35" />
      <path d="M18 70 L18 32 L36 54 L50 32 L64 54 L64 32" stroke="url(#fMono)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M64 70 L82 70" stroke="url(#fMono)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      <text x="50" y="90" textAnchor="middle" fill="url(#fRing)" fontSize="9" fontWeight="700" letterSpacing="3" fontFamily="system-ui, sans-serif">METLINK</text>
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ background: '#060606', borderTop: '1px solid rgba(212,168,67,0.12)' }}>
      {/* Referral CTA strip */}
      <div className="py-12" style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.08) 0%, rgba(160,116,32,0.06) 100%)', borderBottom: '1px solid rgba(212,168,67,0.10)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">Referral Program</p>
            <h3 className="text-2xl font-black text-[#F5EDD8]">Refer a Client — Earn 10% Commission</h3>
            <p className="text-[#9A8F7A] text-sm mt-1">Know a business that needs AI, marketing, or software help? We reward every successful referral.</p>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #D4A843, #A37820)', color: '#080808', boxShadow: '0 4px 20px rgba(212,168,67,0.2)' }}>
            Refer Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <MetLinkLogoFooter />
              <div>
                <p className="font-black text-lg tracking-wide" style={{
                  background: 'linear-gradient(135deg, #F0C855, #D4A843, #92600A)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>METLINK</p>
                <p className="text-xs text-[#6A5F4A] tracking-widest uppercase">AI Agency</p>
              </div>
            </div>
            <p className="text-[#7A6F5A] text-sm leading-relaxed mb-6 max-w-xs">
              An AI-first marketing and development agency driving measurable growth for ambitious businesses worldwide.
            </p>
            {/* Newsletter */}
            <div>
              <p className="text-xs font-bold text-[#6A5F4A] uppercase tracking-wider mb-3">Newsletter</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input type="email" placeholder="your@email.com"
                  className="flex-1 px-3 py-2.5 rounded-xl text-[#F5EDD8] placeholder:text-[#4A4030] text-sm focus:outline-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,168,67,0.15)' }}
                />
                <button type="submit" className="p-2.5 rounded-xl transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #D4A843, #A37820)', color: '#080808' }}>
                  <Mail className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Services columns */}
          {serviceCategories.map((cat) => (
            <div key={cat.slug}>
              <Link href={`/services/${cat.slug}`}
                className="text-xs font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors mb-4 block">
                {cat.icon} {cat.name}
              </Link>
              <ul className="space-y-2">
                {cat.services.map((svc) => (
                  <li key={svc.slug}>
                    <Link href={`/services/${cat.slug}/${svc.slug}`}
                      className="text-sm text-[#6A5F4A] hover:text-[#F5EDD8] transition-colors">
                      {svc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(212,168,67,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4A4030]">© {new Date().getFullYear()} MetLink. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Portfolio', 'Company', 'Blog', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}
                className="text-xs text-[#4A4030] hover:text-[#9A8F7A] transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
