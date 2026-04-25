'use client';

import Link from 'next/link';
import { Mail, Megaphone, Palette, Bot, Code } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MetLinkLogoFooter />
                <div>
                  <p className="font-black text-xl tracking-tight text-[#64FFDA]">METLINK</p>
                  <p className="text-[10px] text-[#8892B0]/60 tracking-[0.2em] uppercase font-bold">AI Agency</p>
                </div>
              </div>
              <p className="text-[#8892B0] text-sm leading-relaxed max-w-xs">
                Empowering ambitious businesses with AI-first marketing and high-performance software development.
              </p>
            </div>

            {/* Newsletter */}
            <div className="max-w-sm">
              <p className="text-xs font-bold text-[#ccd6f6] uppercase tracking-widest mb-4">Stay Updated</p>
              <form onSubmit={(e) => e.preventDefault()} className="relative group">
                <input type="email" placeholder="Enter your email"
                  className="w-full pl-4 pr-14 py-3.5 rounded-xl bg-[#112240] border border-[#233554] text-[#ccd6f6] placeholder:text-[#8892B0]/40 text-sm focus:outline-none focus:border-[#64FFDA]/50 transition-all shadow-inner"
                />
                <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#007BFF] text-white hover:bg-[#007BFF]/90 transition-colors shadow-lg">
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
                <span className="mr-2 inline-block align-middle">
                  {cat.slug === 'digital-marketing' && <Megaphone className="w-3.5 h-3.5" />}
                  {cat.slug === 'creative-media' && <Palette className="w-3.5 h-3.5" />}
                  {cat.slug === 'ai-automation' && <Bot className="w-3.5 h-3.5" />}
                  {cat.slug === 'software-development' && <Code className="w-3.5 h-3.5" />}
                </span>
                {cat.name}
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
      <div className="border-t border-[#233554]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#8892B0]/40 font-medium">
            &copy; {new Date().getFullYear()} MetLink. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Portfolio', 'Company', 'Blog', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}
                className="text-xs font-semibold text-[#8892B0]/60 hover:text-[#64FFDA] transition-colors tracking-wide">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
