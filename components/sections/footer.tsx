'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const columns = [
  {
    heading: 'Services',
    links: [
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Creative Media',    href: '/services/creative-media' },
      { label: 'AI Automation',     href: '/services/ai-automation' },
      { label: 'Software Dev',      href: '/services/software-development' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Performance Marketing', href: '/services/digital-marketing/performance-marketing' },
      { label: 'SEO & Content',         href: '/services/digital-marketing/seo-content' },
      { label: 'Web Development',       href: '/services/software-development/web-development' },
      { label: 'AI Development',        href: '/services/ai-automation/ai-development' },
      { label: 'Brand Identity',        href: '/services/creative-media/brand-identity' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog',      href: '/blog' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Product',   href: '/product' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',        href: '/company' },
      { label: 'Contact',         href: '/contact' },
      { label: 'Privacy Policy',  href: '/privacy' },
      { label: 'Terms of Service',href: '/terms' },
      { label: 'Cookie Policy',   href: '/cookies' },
    ],
  },
];

export function Footer() {
  const [footerCms, setFooterCms] = useState({ tagline: 'AI-first marketing and high-performance software for ambitious businesses.', copyright: 'MetLink. All rights reserved.' });
  const [social, setSocial] = useState({ twitter: '#', linkedin: '#', github: '#', instagram: '#' });

  useEffect(() => {
    fetch('/api/admin/content/footer').then(r => r.json()).then(res => { if (res.data) setFooterCms(res.data); }).catch(() => {});
    fetch('/api/admin/content/social').then(r => r.json()).then(res => { if (res.data) setSocial(res.data); }).catch(() => {});
  }, []);

  return (
    <footer style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-14">

          {/* Brand col */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center w-fit group hover:opacity-80 transition-opacity">
              <Image
                src="/WhatsApp_Image_2026-04-30_at_7.30.41_PM-removebg-preview.png"
                alt="MetLink"
                width={559}
                height={447}
                style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>

            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.7, fontWeight: 300, maxWidth: 220 }}>
              {footerCms.tagline}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {[
                { href: social.twitter, label: 'X', svg: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/></svg> },
                { href: social.linkedin, label: 'LinkedIn', svg: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { href: social.github,   label: 'GitHub', svg: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
              ].map(({ href, label, svg }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#FFFFFF'; el.style.background = 'rgba(255,255,255,0.12)'; el.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'rgba(255,255,255,0.4)'; el.style.background = 'rgba(255,255,255,0.06)'; el.style.borderColor = 'rgba(255,255,255,0.09)'; }}>
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — span 4 */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map(col => (
              <div key={col.heading}>
                <p className="text-sm font-bold mb-5" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>{col.heading}</p>
                <ul className="space-y-3">
                  {col.links.map(link => (
                    <li key={link.href}>
                      <Link href={link.href}
                        className="text-sm transition-colors duration-150 block"
                        style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

        {/* ── Bottom bar ── */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
            Copyright &copy; {new Date().getFullYear()} {footerCms.copyright}
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms',          href: '/terms' },
              { label: 'Cookies',        href: '/cookies' },
            ].map(({ label, href }) => (
              <Link key={href} href={href}
                className="transition-colors duration-150"
                style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)'}>
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
