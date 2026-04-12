'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

export default function ServicesPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium mb-6">
            What We Offer
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-foreground/50 max-w-3xl mx-auto mb-10">
            Four comprehensive service pillars covering every dimension of digital growth — marketing, media, AI, and software.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className={`px-5 py-2 rounded-xl border text-sm font-medium transition-all hover:scale-105 ${cat.colorClass} border-current/20 hover:bg-current/5`}
              >
                {cat.icon} {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Each service category */}
      {serviceCategories.map((cat, catIdx) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={`w-full py-24 ${catIdx % 2 === 0 ? 'bg-zinc-950/30' : 'bg-background'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <div className={`text-4xl mb-3`}>{cat.icon}</div>
                <p className={`text-xs font-bold uppercase tracking-widest ${cat.colorClass} mb-2`}>
                  {cat.name}
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-3">{cat.tagline}</h2>
                <p className="text-foreground/50 max-w-xl leading-relaxed">{cat.description}</p>
              </div>
              <Link
                href={`/services/${cat.slug}`}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border ${cat.colorClass} border-current/20 hover:bg-current/5 transition-all text-sm font-semibold`}
              >
                View Category <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Services grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cat.services.map((svc, i) => (
                <Link
                  key={svc.slug}
                  href={`/services/${cat.slug}/${svc.slug}`}
                  className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
                  style={{ animation: `slideInUp 0.5s ease-out ${i * 0.1}s both` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <span className="text-3xl mb-4 block">{svc.icon}</span>
                    <h3 className={`text-base font-bold ${cat.colorClass} mb-2 group-hover:opacity-90`}>{svc.name}</h3>
                    <p className="text-foreground/50 text-xs leading-relaxed mb-4 line-clamp-2">{svc.tagline}</p>
                    <div className="flex items-center gap-1 text-xs text-foreground/30 group-hover:text-foreground/60 transition-colors">
                      Learn more <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-foreground mb-4">Not Sure Where to Start?</h2>
          <p className="text-foreground/50 mb-8 text-lg">
            Talk to our experts and we'll build a custom strategy for your unique business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:opacity-90 transition-opacity shadow-xl shadow-blue-600/20"
          >
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
