import Link from 'next/link';
import { SectionBackdrop } from '@/components/section-backdrop';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import { getIndustryBySlug, industries } from '@/lib/industries-data';

const accent = '#2B80F0';

export async function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const data = getIndustryBySlug(industry);
  if (!data) notFound();

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#07111F' }}>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#07111F' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${accent}12 0%, transparent 70%)`, filter: 'blur(80px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Link href="/" className="hover:text-[#2B80F0] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/industries" className="hover:text-[#2B80F0] transition-colors">Industries</Link>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: accent }}>{data.name}</span>
          </div>
          <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg"
            style={{ background: `${accent}12`, border: `1px solid ${accent}30` }}>
            {data.icon}
          </div>
          <h1 className=" mb-6 leading-tight" style={{ color: '#FFFFFF' }}>{data.name}</h1>
          <p className="text-base sm:text-xl max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>{data.description}</p>
        </div>
      </section>

      {/* Topics list */}
      <section className="py-20 relative overflow-hidden isolate" style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {data.topics.map((tp) => (
            <div key={tp.slug}
              className="group flex flex-col md:flex-row gap-8 lg:gap-12 p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:shadow-lg"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="md:w-1/3 flex-shrink-0">
                <span className="text-4xl mb-4 block">{tp.icon}</span>
                <h2 className="text-2xl mb-2" style={{ color: '#FFFFFF' }}>{tp.name}</h2>
                <p className="text-sm font-medium mb-4" style={{ color: accent }}>{tp.tagline}</p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>{tp.description}</p>
                <Link href={`/industries/${data.slug}/${tp.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:brightness-95"
                  style={{ background: `${accent}12`, border: `1px solid ${accent}30`, color: accent }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="hidden md:block w-px" style={{ background: 'rgba(255,255,255,0.12)' }} />
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-4 content-start">
                {tp.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accent }} />
                    <span className="text-sm" style={{ color: '#FFFFFF' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(43,128,240,0.12), transparent 65%)' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: accent }}>Let&apos;s Get Started</p>
          <h2 className=" mb-6" style={{ color: '#FFFFFF' }}>
            Ready to transform {data.name.toLowerCase()} with AI?
          </h2>
          <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>Our specialists are ready to build solutions tailored to your domain.</p>
          <Link href="https://calendly.com/jitesh-bawaskar-metlinkai/30min"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
            Discuss Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
