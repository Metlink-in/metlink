import Link from 'next/link';
import { SectionBackdrop } from '@/components/section-backdrop';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import { getAllIndustryTopicSlugs, getTopicBySlug, getIndustryBySlug } from '@/lib/industries-data';
import { TileIcon } from '@/components/tile-icon';

const accent = '#2B80F0';

export async function generateStaticParams() {
  return getAllIndustryTopicSlugs();
}

export default async function IndustryTopicPage({ params }: { params: Promise<{ industry: string; topic: string }> }) {
  const { industry, topic } = await params;
  const tpData = getTopicBySlug(industry, topic);
  const indData = getIndustryBySlug(industry);
  if (!tpData || !indData) notFound();

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#07111F' }}>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#07111F' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${accent}08 0%, transparent 70%)`, filter: 'blur(80px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Link href="/" className="hover:text-[#2B80F0] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/industries" className="hover:text-[#2B80F0] transition-colors">Industries</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/industries/${indData.slug}`} className="hover:text-[#2B80F0] transition-colors">{indData.name}</Link>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: accent }}>{tpData.name}</span>
          </div>
          <div className="max-w-4xl">
            <TileIcon slug={tpData.slug} className="w-11 h-11 mb-6 text-white/90" strokeWidth={1.3} />
            <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>{tpData.tagline}</p>
            <h1 className=" mb-6 leading-tight" style={{ color: '#FFFFFF' }}>{tpData.name}</h1>
            <p className="text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>{tpData.description}</p>
            <Link href="https://calendly.com/jitesh-bawaskar-metlinkai/30min"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
              style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>Capabilities</p>
              <h2 className=" mb-6" style={{ color: '#FFFFFF' }}>What We Will Deliver</h2>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Our {tpData.name.toLowerCase()} solutions are tailored to the {indData.name.toLowerCase()} industry and designed to generate measurable impact.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {tpData.features.map((feat) => (
                <div key={feat} className="flex items-start gap-3 p-5 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="font-medium text-sm" style={{ color: '#FFFFFF' }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(43,128,240,0.12), transparent 65%)' }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className=" mb-6" style={{ color: '#FFFFFF' }}>
            Ready to get started with {tpData.name}?
          </h2>
          <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Book a free strategy session with our experts. No commitments, just clear actionable guidance.
          </p>
          <Link href="https://calendly.com/jitesh-bawaskar-metlinkai/30min"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
            Book Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
