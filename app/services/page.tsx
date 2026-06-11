'use client';

import Link from 'next/link';
import { SectionBackdrop } from '@/components/section-backdrop';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';
import { TileIcon, genCoverSvg } from '@/components/tile-icon';

const catColors: Record<string, string> = {
  'digital-marketing':    '#2B80F0',
  'creative-media':       '#2B80F0',
  'ai-automation':        '#2B80F0',
  'software-development': '#2B80F0',
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
              Comprehensive service pillars spanning digital marketing, generative AI, machine learning, data engineering, software development, IoT, and automation-first solutions.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map(cat => {
                const color = catColors[cat.slug] || '#2B80F0';
                return (
                  <a key={cat.slug} href={`#${cat.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
                    style={{ background: `${color}10`, border: `1px solid ${color}30`, color }}>
                    <TileIcon slug={cat.slug} className="w-4 h-4" strokeWidth={1.6} /> {cat.name}
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
          <section key={cat.slug} id={cat.slug} className="w-full py-24 relative overflow-hidden isolate"
            style={{ background: catIdx % 2 === 0 ? '#0B1628' : '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div>
                  <TileIcon slug={cat.slug} className="w-9 h-9 mb-3 text-white/90" strokeWidth={1.3} />
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
                      className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${accent}40`;
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}>
                      {/* Generated cover image */}
                      <div className="relative w-full flex items-center justify-center overflow-hidden"
                        style={{ aspectRatio: '16 / 10', backgroundImage: genCoverSvg(svc.slug), backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: 'radial-gradient(circle at 50% 40%, rgba(95,168,255,0.28), transparent 70%)' }} />
                        <TileIcon slug={svc.slug} className="relative w-9 h-9 text-white/90 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.3} />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-base font-bold mb-2 group-hover:text-[#2B80F0] transition-colors" style={{ color: '#FFFFFF' }}>{svc.name}</h3>
                        <p className="text-xs leading-relaxed mb-4 line-clamp-2 flex-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{svc.tagline}</p>
                        <div className="flex items-center gap-1 text-xs font-bold" style={{ color: accent }}>
                          Learn more <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </div>
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
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
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
          <Link href="https://calendly.com/jitesh-bawaskar-metlinkai/30min"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-xs text-white transition-all active:scale-95"
            style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }}>
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
