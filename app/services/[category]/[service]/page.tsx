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
    <div className="w-full overflow-x-hidden" style={{ background: '#0A192F' }}>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, #233554, transparent 70%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#8892B0] mb-8">
            <Link href="/" className="hover:text-[#ccd6f6] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[#ccd6f6] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/services/${catData.slug}`} className="hover:text-[#ccd6f6] transition-colors">{catData.name}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#64FFDA] font-medium">{svcData.name}</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-5xl mb-6 block">{svcData.icon}</span>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#64FFDA] mb-3">{svcData.tagline}</p>
            <h1 className="text-5xl md:text-6xl font-black text-[#ccd6f6] mb-6 leading-tight">{svcData.name}</h1>
            <p className="text-xl text-[#8892B0] leading-relaxed mb-10 max-w-2xl">{svcData.description}</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-xl"
              style={{ background: '#64FFDA', color: '#0A192F', boxShadow: "none" }}>
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24" style={{ background: '#0A192F', borderTop: '1px solid #233554' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#64FFDA] mb-3">Capabilities</p>
              <h2 className="text-4xl font-black text-[#ccd6f6] mb-6">What We Will Deliver</h2>
              <p className="text-[#8892B0] mb-8 leading-relaxed">
                Our {svcData.name.toLowerCase()} services are comprehensive, tailored to your specific business goals, and designed to generate measurable ROI.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {svcData.features.map((feat) => (
                <div key={feat} className="flex items-start gap-3 p-5 rounded-2xl"
                  style={{ background: '#233554', border: '1px solid #233554' }}>
                  <CheckCircle className="w-5 h-5 text-[#64FFDA] shrink-0 mt-0.5" />
                  <span className="text-[#ccd6f6] font-medium text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subfeatures if any */}
      {svcData.subFeatures && (
        <section className="py-24" style={{ background: '#0A192F' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {svcData.subFeatures.map((sub) => (
                <div key={sub.title} className="p-8 rounded-3xl"
                  style={{ background: '#112240', border: '1px solid #233554' }}>
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center font-black"
                      style={{ background: '#64FFDA', color: '#0A192F' }}>
                      <Zap className="w-4 h-4" />
                    </span>
                    {sub.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sub.items.map((item) => (
                      <span key={item} className="px-4 py-2 rounded-xl text-sm"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #233554', color: '#64FFDA' }}>
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
      <section className="py-24 relative overflow-hidden" style={{ background: '#0A192F', borderTop: '1px solid #233554' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#ccd6f6] mb-6">Ready to scale your business with {svcData.name}?</h2>
          <p className="text-[#8892B0] mb-10 text-lg">Book a free strategy session with our experts today. No commitments, just clear actionable guidance.</p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-xl"
              style={{ background: '#64FFDA', color: '#0A192F', boxShadow: "none" }}>
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
