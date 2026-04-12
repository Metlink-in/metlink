'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-white/5">
      {/* Referral / End-page CTA */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 p-10 md:p-16 text-center bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-cyan-600/10">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
                Referral Program
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Know Someone Who Needs Us?
              </h2>
              <p className="text-foreground/60 mb-8 text-lg">
                Refer a business to MetLink and earn rewards. Every great partnership starts with a single introduction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-600/20"
                >
                  Make an Introduction <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-white/10 text-foreground/70 hover:text-foreground hover:border-white/20 transition-all"
                >
                  Learn About Rewards
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-black">ML</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MetLink
              </span>
            </Link>
            <p className="text-foreground/50 text-sm leading-relaxed mb-6 max-w-xs">
              AI Marketing & Development Agency — helping businesses grow through intelligent automation, creative media, and custom software.
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <a href="mailto:hello@metlink.in" className="flex items-center gap-2 text-sm text-foreground/50 hover:text-blue-400 transition-colors">
                <Mail className="w-3.5 h-3.5" /> hello@metlink.in
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 text-sm text-foreground/50 hover:text-blue-400 transition-colors">
                <Phone className="w-3.5 h-3.5" /> +91 (123) 456-7890
              </a>
              <p className="flex items-center gap-2 text-sm text-foreground/50">
                <MapPin className="w-3.5 h-3.5" /> Mumbai, India
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Mail, href: 'mailto:hello@metlink.in', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-foreground/50 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services links */}
          {serviceCategories.map((cat) => (
            <div key={cat.slug}>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${cat.colorClass}`}>
                {cat.name}
              </h4>
              <ul className="space-y-2">
                {cat.services.map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href={`/services/${cat.slug}/${svc.slug}`}
                      className="text-xs text-foreground/50 hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                      {svc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/5 pt-10 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Stay in the loop</h4>
              <p className="text-sm text-foreground/50">Get insights on AI, marketing & software delivered monthly.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 w-full max-w-sm"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/40">
          <p>© {year} MetLink. All rights reserved. Built with precision for growth.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="hover:text-foreground/70 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
