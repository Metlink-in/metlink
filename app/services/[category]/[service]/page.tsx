import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { getAllServiceSlugs, getServiceBySlug, getCategoryBySlug } from '@/lib/services-data';

const catColors: Record<string, string> = {
  'digital-marketing':    '#C84B30',
  'creative-media':       '#D97706',
  'ai-automation':        '#16A34A',
  'software-development': '#2563EB',
};

export async function generateStaticParams() {
  return getAllServiceSlugs();
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ category: string; service: string }> }) {
  const { category, service } = await params;
  const svcData = getServiceBySlug(category, service);
  const catData = getCategoryBySlug(category);

  if (!svcData || !catData) notFound();

  const accent = catColors[catData.slug] || '#C84B30';

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#FAF9F6' }}>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFF9F7 0%, #FAF6F0 50%, #F5EEE4 100%)' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${accent}08 0%, transparent 70%)`, filter: 'blur(80px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs mb-8" style={{ color: '#ADA09A' }}>
            <Link href="/" className="hover:text-[#C84B30] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[#C84B30] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/services/${catData.slug}`} className="hover:text-[#C84B30] transition-colors">{catData.name}</Link>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: accent }}>{svcData.name}</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-5xl mb-6 block">{svcData.icon}</span>
            <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>{svcData.tagline}</p>
            <h1 className="font-black mb-6 leading-tight" style={{ color: '#1C1410' }}>{svcData.name}</h1>
            <p className="text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: '#72645A' }}>{svcData.description}</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
              style={{ background: '#C84B30', boxShadow: '0 4px 20px rgba(200,75,48,0.3)' }}>
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E5DDD5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>Capabilities</p>
              <h2 className="font-black mb-6" style={{ color: '#1C1410' }}>What We Will Deliver</h2>
              <p className="leading-relaxed" style={{ color: '#72645A' }}>
                Our {svcData.name.toLowerCase()} services are comprehensive, tailored to your specific business goals, and designed to generate measurable ROI.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {svcData.features.map((feat) => (
                <div key={feat} className="flex items-start gap-3 p-5 rounded-2xl"
                  style={{ background: '#FAF9F6', border: '1px solid #E5DDD5' }}>
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="font-medium text-sm" style={{ color: '#1C1410' }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subfeatures */}
      {svcData.subFeatures && (
        <section className="py-24" style={{ background: '#FAF9F6', borderTop: '1px solid #E5DDD5' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {svcData.subFeatures.map((sub) => (
                <div key={sub.title} className="p-8 rounded-3xl"
                  style={{ background: '#FFFFFF', border: '1px solid #E5DDD5' }}>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: '#1C1410' }}>
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white"
                      style={{ background: accent }}>
                      <Zap className="w-4 h-4" />
                    </span>
                    {sub.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sub.items.map((item) => (
                      <span key={item} className="px-4 py-2 rounded-xl text-sm"
                        style={{ background: `${accent}08`, border: `1px solid ${accent}20`, color: accent }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#FFFFFF', borderTop: '1px solid #E5DDD5' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(200,75,48,0.04), transparent 65%)' }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-black mb-6" style={{ color: '#1C1410' }}>
            Ready to scale your business with {svcData.name}?
          </h2>
          <p className="mb-10 text-lg" style={{ color: '#72645A' }}>
            Book a free strategy session with our experts today. No commitments, just clear actionable guidance.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#C84B30', boxShadow: '0 4px 20px rgba(200,75,48,0.3)' }}>
            Book Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
