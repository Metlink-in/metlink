'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const catColors: Record<string, string> = {
  'digital-marketing':    '#C84B30',
  'creative-media':       '#D97706',
  'ai-automation':        '#16A34A',
  'software-development': '#2563EB',
};

export default function ServicesPage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#FAF9F6' }}>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFF9F7 0%, #FAF6F0 50%, #F5EEE4 100%)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(200,75,48,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-8"
              style={{ background: '#FFFFFF', border: '1px solid #E5DDD5', color: '#C84B30', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
              What We Offer
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-black mb-6 leading-tight" style={{ color: '#192540' }}>
              Our{' '}
              <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#C84B30' }}>Services</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl max-w-3xl mx-auto mb-10" style={{ color: '#72645A' }}>
              Four comprehensive service pillars covering every dimension of digital growth — marketing, media, AI, and software.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map(cat => {
                const color = catColors[cat.slug] || '#C84B30';
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
        const accent = catColors[cat.slug] || '#C84B30';
        return (
          <section key={cat.slug} id={cat.slug} className="w-full py-24 relative"
            style={{ background: catIdx % 2 === 0 ? '#FFFFFF' : '#FAF9F6', borderTop: '1px solid #E5DDD5' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div>
                  <span className="text-4xl mb-3 block">{cat.icon}</span>
                  <p className="text-xs font-black uppercase tracking-[0.25em] mb-2" style={{ color: accent }}>{cat.name}</p>
                  <h2 className="font-black mb-3" style={{ color: '#192540' }}>{cat.tagline}</h2>
                  <p className="max-w-xl leading-relaxed" style={{ color: '#72645A' }}>{cat.description}</p>
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
                      style={{ background: catIdx % 2 === 0 ? '#FAF9F6' : '#FFFFFF', border: '1px solid #E5DDD5' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${accent}40`;
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = '#E5DDD5';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}>
                      <span className="text-3xl mb-4 block">{svc.icon}</span>
                      <h3 className="text-base font-bold mb-2 group-hover:text-[#C84B30] transition-colors" style={{ color: '#192540' }}>{svc.name}</h3>
                      <p className="text-xs leading-relaxed mb-4 line-clamp-2 flex-1" style={{ color: '#72645A' }}>{svc.tagline}</p>
                      <div className="flex items-center gap-1 text-xs font-bold transition-colors" style={{ color: '#ADA09A' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = accent}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#ADA09A'}>
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
      <section className="py-24 relative overflow-hidden" style={{ background: '#FAF9F6', borderTop: '1px solid #E5DDD5' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(200,75,48,0.05), transparent 65%)' }} />
        <FadeIn className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-black mb-4" style={{ color: '#192540' }}>
            Not Sure Where to{' '}
            <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#C84B30' }}>Start</em>?
          </h2>
          <p className="mb-10 text-lg" style={{ color: '#72645A' }}>
            Talk to our experts and we&apos;ll build a custom strategy for your unique business needs.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#C84B30', boxShadow: '0 4px 20px rgba(200,75,48,0.3)' }}>
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
