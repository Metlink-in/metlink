'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronsUpDown, ArrowRight } from 'lucide-react';
import { SectionBackdrop } from '@/components/section-backdrop';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';
import { TileIcon } from '@/components/tile-icon';
import { industries } from '@/lib/industries-data';

interface Item { name: string; image: string }
interface Section { name: string; items: Item[] }
interface Content { title: string; subtitle: string; videos: string[]; sections: Section[] }

const FALLBACK: Content = {
  title: 'Automation Services',
  subtitle: 'Connect your tools, remove manual busywork, and let intelligent workflows and AI agents run your operations around the clock.',
  videos: ['/hero/hero.mp4', '/hero/1.mp4'],
  sections: [],
};

/** Plays a list of videos back-to-back, looping forever. */
function VideoLoop({ videos }: { videos: string[] }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {});
  }, [idx]);

  if (!videos.length) return null;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden"
      style={{ aspectRatio: '16 / 8', background: '#050B14', border: '1px solid rgba(255,255,255,0.08)' }}>
      <video
        ref={ref}
        key={videos[idx]}
        src={videos[idx]}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setIdx(i => (i + 1) % videos.length)}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(5,11,20,0.15) 0%, transparent 35%, rgba(5,11,20,0.45) 100%)' }} />
    </div>
  );
}

export default function AutomationFirstPage() {
  const [c, setC] = useState<Content>(FALLBACK);

  useEffect(() => {
    fetch('/api/public/content/automation-first')
      .then(r => r.json())
      .then(res => { if (res.data) setC({ ...FALLBACK, ...res.data }); })
      .catch(() => {});
  }, []);

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#07111F' }}>

      {/* Title */}
      <section className="relative pt-32 pb-10 overflow-hidden" style={{ background: '#07111F' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-normal uppercase tracking-[0.25em] mb-6"
              style={{ background: 'rgba(43,128,240,0.12)', border: '1px solid rgba(43,128,240,0.3)', color: '#5FA8FF' }}>
              Automation First
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="mb-5 leading-tight" style={{ color: '#FFFFFF' }}>{c.title}</h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>{c.subtitle}</p>
          </FadeIn>
        </div>
      </section>

      {/* Infinite video loop */}
      <section className="relative pb-8 overflow-hidden" style={{ background: '#07111F' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn><VideoLoop videos={c.videos} /></FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6" style={{ background: '#07111F' }}>
        <ChevronsUpDown className="w-7 h-7" style={{ color: 'rgba(95,168,255,0.7)' }} />
      </div>

      {/* Industry sections — each industry + its automation services as tiles */}
      {industries.map((ind, i) => (
        <section key={ind.slug} className="w-full py-14 relative overflow-hidden isolate"
          style={{ background: i % 2 === 0 ? '#0B1628' : '#07111F', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <SectionBackdrop behind />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Industry name bar */}
            <FadeIn>
              <Link href={`/industries/${ind.slug}`}
                className="group flex items-center justify-center gap-3 rounded-2xl px-6 py-4 mb-8 text-center transition-all hover:brightness-110"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-2xl">{ind.icon}</span>
                <h2 className="text-xl sm:text-2xl font-semibold" style={{ color: '#FFFFFF' }}>{ind.name}</h2>
                <ChevronsUpDown className="w-4 h-4 rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: '#5FA8FF' }} />
              </Link>
            </FadeIn>

            {/* Service tiles: icon with name below */}
            <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {ind.topics.map((tp) => (
                <StaggerItem key={tp.slug}>
                  <Link href={`/industries/${ind.slug}/${tp.slug}`}
                    className="group block rounded-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="w-full flex items-center justify-center overflow-hidden relative"
                      style={{ aspectRatio: '16 / 10', background: '#0B1628' }}>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'radial-gradient(circle at 50% 40%, rgba(43,128,240,0.18), transparent 70%)' }} />
                      <TileIcon slug={tp.slug} className="w-9 h-9 text-white/90 relative transition-transform duration-300 group-hover:scale-110" strokeWidth={1.3} />
                    </div>
                    <p className="text-sm font-semibold text-center px-3 py-4 group-hover:text-[#5FA8FF] transition-colors" style={{ color: '#FFFFFF' }}>{tp.name}</p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <SectionBackdrop behind />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(43,128,240,0.12), transparent 65%)' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className=" mb-6" style={{ color: '#FFFFFF' }}>
            Ready to put your business on{' '}
            <span style={{ color: '#2B80F0' }}>autopilot</span>?
          </h2>
          <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Let&apos;s map your workflows and automate what slows you down.
          </p>
          <Link href="https://calendly.com/jitesh-bawaskar-metlinkai/30min"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
            Book a Free Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
