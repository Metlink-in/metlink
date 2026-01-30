'use client';

import { Stats } from '@/components/sections/stats';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-slideInUp space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                About MetLink
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl">
                MetLink is a forward-thinking software company dedicated to delivering cutting-edge solutions that drive business transformation and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 py-12">
              <div className="space-y-4 animate-slideInUp" style={{ animationDelay: '100ms' }}>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-foreground/70 leading-relaxed">
                  To empower businesses with innovative software solutions that solve complex challenges, drive growth, and create lasting value in an increasingly digital world.
                </p>
              </div>

              <div className="space-y-4 animate-slideInUp" style={{ animationDelay: '200ms' }}>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                <p className="text-foreground/70 leading-relaxed">
                  To be the trusted partner of choice for organizations seeking transformative technology solutions, recognized for excellence, innovation, and customer success.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 py-12">
              {[
                {
                  title: 'Innovation First',
                  description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.'
                },
                {
                  title: 'Customer Focused',
                  description: 'Your success is our success. We partner with you to understand and exceed your business goals.'
                },
                {
                  title: 'Quality Excellence',
                  description: 'We maintain the highest standards in code quality, design, and user experience.'
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-colors duration-300 animate-slideInUp"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-12 rounded-2xl border border-border animate-slideInUp" style={{ animationDelay: '600ms' }}>
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose MetLink?</h2>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>10+ years of experience in software development and digital transformation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>150+ talented professionals with expertise across all major technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>500+ successful projects delivered to clients worldwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>98% client satisfaction rate and long-term partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
