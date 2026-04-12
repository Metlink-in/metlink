import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { getAllServiceSlugs, getServiceBySlug, getCategoryBySlug } from '@/lib/services-data';

export async function generateStaticParams() {
  return getAllServiceSlugs();
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ category: string; service: string }> }) {
  const { category, service } = await params;
  const svcData = getServiceBySlug(category, service);
  const catData = getCategoryBySlug(category);

  if (!svcData || !catData) notFound();

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#080808' }}>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.05), transparent 70%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#6A5F4A] mb-8">
            <Link href="/" className="hover:text-[#F5EDD8] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[#F5EDD8] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/services/${catData.slug}`} className="hover:text-[#F5EDD8] transition-colors">{catData.name}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber-400 font-medium">{svcData.name}</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-5xl mb-6 block">{svcData.icon}</span>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">{svcData.tagline}</p>
            <h1 className="text-5xl md:text-6xl font-black text-[#F5EDD8] mb-6 leading-tight">{svcData.name}</h1>
            <p className="text-xl text-[#9A8F7A] leading-relaxed mb-10 max-w-2xl">{svcData.description}</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-xl"
              style={{ background: 'linear-gradient(135deg, #D4A843, #A37820)', color: '#080808', boxShadow: '0 8px 32px rgba(212,168,67,0.25)' }}>
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24" style={{ background: '#060606', borderTop: '1px solid rgba(212,168,67,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Capabilities</p>
              <h2 className="text-4xl font-black text-[#F5EDD8] mb-6">What We Will Deliver</h2>
              <p className="text-[#9A8F7A] mb-8 leading-relaxed">
                Our {svcData.name.toLowerCase()} services are comprehensive, tailored to your specific business goals, and designed to generate measurable ROI.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {svcData.features.map((feat) => (
                <div key={feat} className="flex items-start gap-3 p-5 rounded-2xl"
                  style={{ background: 'rgba(212,168,67,0.03)', border: '1px solid rgba(212,168,67,0.08)' }}>
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-[#F5EDD8] font-medium text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subfeatures if any */}
      {svcData.subFeatures && (
        <section className="py-24" style={{ background: '#080808' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {svcData.subFeatures.map((sub) => (
                <div key={sub.title} className="p-8 rounded-3xl"
                  style={{ background: '#0C0C0C', border: '1px solid rgba(212,168,67,0.10)' }}>
                  <h3 className="text-xl font-bold text-[#F5EDD8] mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center font-black"
                      style={{ background: 'linear-gradient(135deg, #D4A843, #A37820)', color: '#080808' }}>
                      <Zap className="w-4 h-4" />
                    </span>
                    {sub.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sub.items.map((item) => (
                      <span key={item} className="px-4 py-2 rounded-xl text-sm"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,168,67,0.12)', color: '#D4A843' }}>
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
      <section className="py-24 relative overflow-hidden" style={{ background: '#060606', borderTop: '1px solid rgba(212,168,67,0.08)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#F5EDD8] mb-6">Ready to scale your business with {svcData.name}?</h2>
          <p className="text-[#9A8F7A] mb-10 text-lg">Book a free strategy session with our experts today. No commitments, just clear actionable guidance.</p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-xl"
              style={{ background: 'linear-gradient(135deg, #D4A843, #A37820)', color: '#080808', boxShadow: '0 8px 32px rgba(212,168,67,0.25)' }}>
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
