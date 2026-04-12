import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import { getCategoryBySlug, serviceCategories } from '@/lib/services-data';

export async function generateStaticParams() {
  return serviceCategories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = getCategoryBySlug(category);
  if (!data) notFound();

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#080808' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(212,168,67,0.06), transparent 70%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-[#6A5F4A] mb-8">
            <Link href="/" className="hover:text-[#F5EDD8] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[#F5EDD8] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber-400 font-medium">{data.name}</span>
          </div>

          <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-xl"
            style={{ background: 'linear-gradient(135deg, #D4A843, #A37820)', boxShadow: '0 8px 32px rgba(212,168,67,0.25)' }}>
            {data.icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#F5EDD8] mb-6 leading-tight">{data.name}</h1>
          <p className="text-xl text-[#9A8F7A] max-w-3xl mx-auto">{data.description}</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20" style={{ background: '#060606', borderTop: '1px solid rgba(212,168,67,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {data.services.map((svc, i) => (
            <div key={svc.slug} className="group flex flex-col md:flex-row gap-8 lg:gap-12 p-8 lg:p-10 rounded-3xl transition-all hover:bg-black/40"
              style={{ background: '#080808', border: '1px solid rgba(212,168,67,0.08)' }}>

              {/* Left info */}
              <div className="md:w-1/3 flex-shrink-0">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform origin-left">{svc.icon}</span>
                <h2 className="text-2xl font-black text-[#F5EDD8] mb-2">{svc.name}</h2>
                <p className="text-sm text-amber-400 font-medium mb-4">{svc.tagline}</p>
                <p className="text-[#9A8F7A] text-sm leading-relaxed mb-6">{svc.description}</p>
                <Link href={`/services/${data.slug}/${svc.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                  style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.20)', color: '#D4A843' }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="hidden md:block w-px" style={{ background: 'linear-gradient(to bottom, rgba(212,168,67,0.0), rgba(212,168,67,0.1), rgba(212,168,67,0.0))' }} />

              {/* Right features */}
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-4 content-start">
                {svc.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#F5EDD8]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#080808', borderTop: '1px solid rgba(212,168,67,0.08)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-4">Let's Get Started</p>
          <h2 className="text-4xl font-black text-[#F5EDD8] mb-6">Need expert help with {data.name.toLowerCase()}?</h2>
          <p className="text-[#9A8F7A] mb-10 text-lg">Our team of specialists is ready to help you achieve your goals.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-xl"
            style={{ background: 'linear-gradient(135deg, #D4A843, #A37820)', color: '#080808', boxShadow: '0 8px 32px rgba(212,168,67,0.25)' }}>
            Discuss Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
