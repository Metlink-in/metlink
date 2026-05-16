'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const catColors: Record<string, string> = {
  'digital-marketing':    '#2B80F0',
  'creative-media':       '#D97706',
  'ai-automation':        '#16A34A',
  'software-development': '#2563EB',
};

export default function ServicesPage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#07111F' }}>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: '#07111F' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-normal uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', color: '#2B80F0',  }}>
              What We Offer
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className=" mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
              Our{' '}
              <span style={{ color: '#2B80F0' }}>Services</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-xl max-w-3xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Four comprehensive service pillars covering every dimension of digital growth — marketing, media, AI, and software.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map(cat => {
                const color = catColors[cat.slug] || '#2B80F0';
                return (
                  <a key={cat.slug} href={`#${cat.slug}`}
                    className="px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
                    style={{ background: `${color}10`, border: `1px solid ${color}30`, color }}>
                    {cat.icon} {cat.name}
                  </a>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Each category */}
      {serviceCategories.map((cat, catIdx) => {
        const accent = catColors[cat.slug] || '#2B80F0';
        return (
          <section key={cat.slug} id={cat.slug} className="w-full py-24 relative"
            style={{ background: catIdx % 2 === 0 ? '#0B1628' : '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div>
                  <span className="text-4xl mb-3 block">{cat.icon}</span>
                  <p className="text-xs font-normal uppercase tracking-[0.25em] mb-2" style={{ color: accent }}>{cat.name}</p>
                  <h2 className=" mb-3" style={{ color: '#FFFFFF' }}>{cat.tagline}</h2>
                  <p className="max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{cat.description}</p>
                </div>
                <Link href={`/services/${cat.slug}`}
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:brightness-95"
                  style={{ background: `${accent}12`, border: `1px solid ${accent}30`, color: accent }}>
                  View Category <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>

              <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.services.map(svc => (
                  <StaggerItem key={svc.slug}>
                    <Link href={`/services/${cat.slug}/${svc.slug}`}
                      className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${accent}40`;
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}>
                      <span className="text-3xl mb-4 block">{svc.icon}</span>
                      <h3 className="text-base font-bold mb-2 group-hover:text-[#2B80F0] transition-colors" style={{ color: '#FFFFFF' }}>{svc.name}</h3>
                      <p className="text-xs leading-relaxed mb-4 line-clamp-2 flex-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{svc.tagline}</p>
                      <div className="flex items-center gap-1 text-xs font-bold transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = accent}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}>
                        Learn more <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(43,128,240,0.15), transparent 65%)' }} />
        <FadeIn className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className=" mb-4" style={{ color: '#FFFFFF' }}>
            Not Sure Where to{' '}
            <span style={{ color: '#2B80F0' }}>Start</span>?
          </h2>
          <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Talk to our experts and we&apos;ll build a custom strategy for your unique business needs.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
