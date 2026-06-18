'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronsUpDown, ArrowRight } from 'lucide-react';
import { SectionBackdrop } from '@/components/section-backdrop';
import { FadeIn } from '@/components/fade-in';
import { genCoverSvg } from '@/components/tile-icon';
import { automationIndustries as industries } from '@/lib/automation-data';

interface Item { name: string; image: string }
interface Section { name: string; items: Item[] }
interface Content { title: string; subtitle: string; videos: string[]; sections: Section[] }

const FALLBACK: Content = {
  title: 'Automation Services',
  subtitle: 'Connect your tools, remove manual busywork, and let intelligent workflows and AI agents run your operations around the clock.',
  videos: ['/automation/automation-sample.mp4'],
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
    <div className="relative w-full rounded-3xl overflow-hidden flex items-center justify-center"
      style={{ background: '#050B14', border: '1px solid rgba(255,255,255,0.08)' }}>
      <video
        ref={ref}
        key={videos[idx]}
        src={videos[idx]}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setIdx(i => (i + 1) % videos.length)}
        className="w-auto max-w-full object-contain"
        style={{ maxHeight: '78vh' }}
      />
    </div>
  );
}

export default function AutomationFirstPage() {
  const [c, setC] = useState<Content>(FALLBACK);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const [imageMap, setImageMap] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch('/api/public/content/automation-first')
      .then(r => r.json())
      .then(res => { if (res.data) setC({ ...FALLBACK, ...res.data }); })
      .catch(() => {});
    fetch('/api/public/content/automation-service-images')
      .then(r => r.json())
      .then(res => { if (res.data && typeof res.data === 'object') setImageMap(res.data); })
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


      {/* Industry sections — each industry + its automation services as tiles */}
      {industries.map((ind, i) => {
        const isOpen = !!expanded[ind.slug];
        const shown = isOpen ? ind.topics : ind.topics.slice(0, 5);
        return (
        <section key={ind.slug} className="w-full py-14 relative overflow-hidden isolate"
          style={{ background: i % 2 === 0 ? '#0B1628' : '#07111F', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <SectionBackdrop behind />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Industry name bar */}
            <FadeIn>
              <Link href={`/automation/${ind.slug}`}
                className="group flex items-center justify-center gap-3 rounded-2xl px-6 py-4 mb-8 text-center transition-all hover:brightness-110"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-2xl">{ind.icon}</span>
                <h2 className="text-xl sm:text-2xl font-semibold" style={{ color: '#FFFFFF' }}>{ind.name}</h2>
                <ChevronsUpDown className="w-4 h-4 rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: '#5FA8FF' }} />
              </Link>
            </FadeIn>

            {/* Service tiles: image (or icon) with name below */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {shown.map((tp) => (
                <Link key={tp.slug} href={`/automation/${ind.slug}/${tp.slug}`}
                  className="group block rounded-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-full flex items-center justify-center overflow-hidden relative"
                    style={{ aspectRatio: '16 / 10', backgroundImage: genCoverSvg(tp.slug), backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'radial-gradient(circle at 50% 40%, rgba(95,168,255,0.28), transparent 70%)' }} />
                    {(imageMap[`${ind.slug}/${tp.slug}`] || tp.image) && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={imageMap[`${ind.slug}/${tp.slug}`] || tp.image} alt={tp.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    )}
                  </div>
                  <p className="text-[13px] font-semibold text-center px-2.5 py-3.5 leading-snug group-hover:text-[#5FA8FF] transition-colors" style={{ color: '#FFFFFF' }}>{tp.name}</p>
                </Link>
              ))}
            </div>

            {/* Show all / less */}
            {ind.topics.length > 5 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setExpanded(p => ({ ...p, [ind.slug]: !isOpen }))}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:brightness-110 active:scale-95"
                  style={{ background: 'rgba(43,128,240,0.14)', border: '1px solid rgba(43,128,240,0.35)', color: '#5FA8FF' }}>
                  {isOpen ? 'Show less' : `Show all ${ind.topics.length} services`}
                  <ChevronsUpDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>
        );
      })}

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
