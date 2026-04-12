'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

export default function ServicesPage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#000000' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, #1A1A1A, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px,transparent 1px),linear-gradient(90deg,#1A1A1A 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: '#1A1A1A', border: '1px solid #1A1A1A', color: '#FACC15' }}>
            What We Offer
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#FFFFFF] mb-6 leading-tight">
            Our{' '}
            <span style={{ background: '#FACC15', color: '#FACC15' }}>
              Services
            </span>
          </h1>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto mb-10">
            Four comprehensive service pillars covering every dimension of digital growth — marketing, media, AI, and software.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((cat) => (
              <a key={cat.slug} href={`#${cat.slug}`}
                className="px-5 py-2 rounded-xl text-sm font-medium transition-all hover:scale-105"
                style={{ background: '#1A1A1A', border: '1px solid #1A1A1A', color: '#FACC15' }}>
                {cat.icon} {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Each category */}
      {serviceCategories.map((cat, catIdx) => (
        <section key={cat.slug} id={cat.slug} className="w-full py-24"
          style={{ background: catIdx % 2 === 0 ? '#000000' : '#000000', borderTop: '1px solid #1A1A1A' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-4xl mb-3 block">{cat.icon}</span>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">{cat.name}</p>
                <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-3">{cat.tagline}</h2>
                <p className="text-[#737373] max-w-xl leading-relaxed">{cat.description}</p>
              </div>
              <Link href={`/services/${cat.slug}`}
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: '#1A1A1A', border: '1px solid #1A1A1A', color: '#FACC15' }}>
                View Category <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.services.map((svc) => (
                <Link key={svc.slug} href={`/services/${cat.slug}/${svc.slug}`}
                  className="group relative p-6 rounded-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                  style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                  <span className="text-3xl mb-4 block">{svc.icon}</span>
                  <h3 className="text-base font-bold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">{svc.name}</h3>
                  <p className="text-[#737373] text-xs leading-relaxed mb-4 line-clamp-2">{svc.tagline}</p>
                  <div className="flex items-center gap-1 text-xs text-[#404040] group-hover:text-amber-400 transition-colors">
                    Learn more <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#000000' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, #1A1A1A, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-black text-[#FFFFFF] mb-4">Not Sure Where to Start?</h2>
          <p className="text-[#A3A3A3] mb-8 text-lg">Talk to our experts and we'll build a custom strategy for your unique business needs.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-xl"
            style={{ background: '#FACC15', color: '#000000', boxShadow: "none" }}>
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
