'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

export default function ServicesPage() {
  return (
    <div className="w-full overflow-x-hidden relative" style={{ background: '#030712' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-30 animate-blob"
            style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.2) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.4) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
              What We Offer
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-[#E2E8F0] mb-6 leading-tight">
              Our <span className="gradient-text-cyan">Services</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto mb-10">
              Four comprehensive service pillars covering every dimension of digital growth — marketing, media, AI, and software.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map((cat) => (
                <a key={cat.slug} href={`#${cat.slug}`}
                  className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
                  style={{ background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                  {cat.icon} {cat.name}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Each category */}
      {serviceCategories.map((cat, catIdx) => (
        <section key={cat.slug} id={cat.slug} className="w-full py-24 relative"
          style={{ background: '#030712', borderTop: '1px solid rgba(30,41,59,0.6)' }}>
          {/* Subtle accent glow per section */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: catIdx % 2 === 0
              ? 'radial-gradient(ellipse at 0% 50%, rgba(6,182,212,0.03), transparent 60%)'
              : 'radial-gradient(ellipse at 100% 50%, rgba(139,92,246,0.03), transparent 60%)' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-4xl mb-3 block">{cat.icon}</span>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#06B6D4] mb-2">{cat.name}</p>
                <h2 className="text-4xl md:text-5xl font-black text-[#E2E8F0] mb-3">{cat.tagline}</h2>
                <p className="text-[#64748B] max-w-xl leading-relaxed">{cat.description}</p>
              </div>
              <Link href={`/services/${cat.slug}`}
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:brightness-110 active:scale-95"
                style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)', color: '#06B6D4' }}>
                View Category <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.services.map((svc) => (
                <StaggerItem key={svc.slug}>
                  <Link href={`/services/${cat.slug}/${svc.slug}`}
                    className="group relative p-6 rounded-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:border-[#06B6D4]/30 flex flex-col h-full"
                    style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.06), transparent 70%)' }} />
                    <span className="text-3xl mb-4 block">{svc.icon}</span>
                    <h3 className="text-base font-bold text-[#E2E8F0] mb-2 group-hover:text-[#06B6D4] transition-colors">{svc.name}</h3>
                    <p className="text-[#64748B] text-xs leading-relaxed mb-4 line-clamp-2 flex-1">{svc.tagline}</p>
                    <div className="flex items-center gap-1 text-xs font-bold text-[#475569] group-hover:text-[#06B6D4] transition-colors">
                      Learn more <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#030712', borderTop: '1px solid rgba(30,41,59,0.6)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.06), rgba(139,92,246,0.04), transparent 70%)' }} />
        <FadeIn className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#E2E8F0] mb-4">
            Not Sure Where to <span className="gradient-text-cyan">Start</span>?
          </h2>
          <p className="text-[#64748B] mb-10 text-lg">Talk to our experts and we&apos;ll build a custom strategy for your unique business needs.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold hover:brightness-110 transition-all active:scale-95"
            style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712', boxShadow: '0 0 40px rgba(6,182,212,0.2)' }}>
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
