'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    title: 'Services',
    links: ['Web Development', 'Mobile Apps', 'AI Solutions', 'Consulting'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Case Studies', 'Pricing', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card/50 backdrop-blur border-t border-foreground/10">
      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                MetLink
              </span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Transforming ideas into innovative software solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-foreground/5 hover:bg-blue-600/10 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-foreground hover:text-blue-500 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-blue-500 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/10 pt-8">
          {/* Newsletter signup */}
          <div className="mb-8">
            <h4 className="font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <div className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              © {currentYear} MetLink. All rights reserved. Designed with ❤️ for innovation.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-500 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 opacity-0 hover:opacity-100 transition-all pointer-events-none hover:pointer-events-auto"
        style={{
          opacity: 0,
          transition: 'opacity 0.3s ease-out',
        }}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
