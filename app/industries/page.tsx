'use client';

import Link from 'next/link';
import { SectionBackdrop } from '@/components/section-backdrop';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { industries } from '@/lib/industries-data';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';
import { TileIcon } from '@/components/tile-icon';

const accent = '#2B80F0';

export default function IndustriesPage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#07111F' }}>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#07111F' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-normal uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', color: accent }}>
              Industries We Serve
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className=" mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
              Solutions For Every{' '}
              <span style={{ color: accent }}>Industry</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-xl max-w-3xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
              We bring AI, automation, and software expertise to the industries that move the world, tailored to each domain&apos;s realities.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map(ind => (
                <a key={ind.slug} href={`#${ind.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
                  style={{ background: `${accent}10`, border: `1px solid ${accent}30`, color: accent }}>
                  <TileIcon slug={ind.slug} className="w-4 h-4" strokeWidth={1.6} /> {ind.name}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Each industry */}
      {industries.map((ind, idx) => (
        <section key={ind.slug} id={ind.slug} className="w-full py-24 relative overflow-hidden isolate"
          style={{ background: idx % 2 === 0 ? '#0B1628' : '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <SectionBackdrop behind />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <TileIcon slug={ind.slug} className="w-9 h-9 mb-3 text-white/90" strokeWidth={1.3} />
                <p className="text-xs font-normal uppercase tracking-[0.25em] mb-2" style={{ color: accent }}>{ind.name}</p>
                <h2 className=" mb-3" style={{ color: '#FFFFFF' }}>{ind.tagline}</h2>
                <p className="max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{ind.description}</p>
              </div>
              <Link href={`/industries/${ind.slug}`}
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:brightness-95"
                style={{ background: `${accent}12`, border: `1px solid ${accent}30`, color: accent }}>
                Explore Industry <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ind.topics.map(tp => (
                <StaggerItem key={tp.slug}>
                  <Link href={`/industries/${ind.slug}/${tp.slug}`}
                    className="group relative overflow-hidden p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="absolute inset-0 pointer-events-none translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                      style={{ background: `linear-gradient(160deg, ${accent}26 0%, ${accent}0D 45%, transparent 72%)` }} />
                    <TileIcon slug={tp.slug} className="relative w-8 h-8 mb-4 text-white/90" strokeWidth={1.3} />
                    <h3 className="text-base font-bold mb-2 group-hover:text-[#2B80F0] transition-colors" style={{ color: '#FFFFFF' }}>{tp.name}</h3>
                    <p className="text-xs leading-relaxed mb-4 line-clamp-2 flex-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{tp.tagline}</p>
                    <div className="flex items-center gap-1 text-xs font-bold transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      Learn more <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(43,128,240,0.15), transparent 65%)' }} />
        <FadeIn className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className=" mb-4" style={{ color: '#FFFFFF' }}>
            Don&apos;t See Your{' '}
            <span style={{ color: accent }}>Industry</span>?
          </h2>
          <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            We adapt our AI and software expertise to any domain. Let&apos;s talk about yours.
          </p>
          <Link href="https://www.metlinkai.com/contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-xs text-white transition-all active:scale-95"
            style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }}>
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
