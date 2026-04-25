'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

function MetLinkLogoFooter() {
  return (
    <svg width="42" height="42" viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="fRing" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#64FFDA" /><stop offset="0.45" stopColor="#64FFDA" /><stop offset="1" stopColor="#112240" />
        </linearGradient>
        <linearGradient id="fMono" x1="18" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#007BFF" /><stop offset="0.4" stopColor="#64FFDA" /><stop offset="1" stopColor="#007BFF" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="#112240" stroke="url(#fRing)" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#fRing)" strokeWidth="0.6" strokeOpacity="0.35" />
      <path d="M18 70 L18 32 L36 54 L50 32 L64 54 L64 32" stroke="url(#fMono)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M64 70 L82 70" stroke="url(#fMono)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      <text x="50" y="90" textAnchor="middle" fill="url(#fRing)" fontSize="9" fontWeight="700" letterSpacing="3" fontFamily="system-ui, sans-serif">METLINK</text>
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ background: '#0A192F', borderTop: '1px solid #233554' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <MetLinkLogoFooter />
              <div>
                <p className="font-black text-lg tracking-wide" style={{
                  color: '#64FFDA',
                }}>METLINK</p>
                <p className="text-xs text-[#8892B0] tracking-widest uppercase">AI Agency</p>
              </div>
            </div>
            <p className="text-[#8892B0] text-sm leading-relaxed mb-5 sm:mb-6 max-w-xs">
              An AI-first marketing and development agency driving measurable growth for ambitious businesses worldwide.
            </p>
            {/* Newsletter */}
            <div>
              <p className="text-xs font-bold text-[#8892B0] uppercase tracking-wider mb-3">Newsletter</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input type="email" placeholder="your@email.com"
                  className="flex-1 min-w-0 px-3 py-2.5 rounded-xl text-[#ccd6f6] placeholder:text-[#233554] text-sm focus:outline-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #233554' }}
                />
                <button type="submit" className="p-2.5 rounded-xl transition-opacity hover:opacity-90 flex-shrink-0"
                  style={{ background: '#007BFF', color: '#FFFFFF' }}>
                  <Mail className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Services columns */}
          {serviceCategories.map((cat) => (
            <div key={cat.slug}>
              <Link href={`/services/${cat.slug}`}
                className="text-xs font-bold uppercase tracking-widest text-[#64FFDA] hover:text-[#64FFDA] transition-colors mb-3 sm:mb-4 block">
                {cat.icon} {cat.name}
              </Link>
              <ul className="space-y-1.5 sm:space-y-2">
                {cat.services.map((svc) => (
                  <li key={svc.slug}>
                    <Link href={`/services/${cat.slug}/${svc.slug}`}
                      className="text-xs sm:text-sm text-[#8892B0] hover:text-[#ccd6f6] transition-colors">
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
      <div style={{ borderTop: '1px solid #233554' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-xs text-[#233554]">&copy; {new Date().getFullYear()} MetLink. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {['Portfolio', 'Company', 'Blog', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}
                className="text-xs text-[#233554] hover:text-[#8892B0] transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
