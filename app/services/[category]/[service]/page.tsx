import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, CheckCircle, Zap } from 'lucide-react';
import { getCategoryBySlug, getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data';

export async function generateStaticParams() {
  return getAllServiceSlugs().map(({ category, service }) => ({
    category,
    service,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category, service } = await params;
  const cat = getCategoryBySlug(category);
  const svc = getServiceBySlug(category, service);
  if (!cat || !svc) notFound();

  const otherServices = cat.services.filter((s) => s.slug !== service);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero banner */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo}`}
          />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-foreground/40 mb-10 flex-wrap">
            <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-foreground/70 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/services/${cat.slug}`} className={`hover:opacity-80 transition-opacity ${cat.colorClass}`}>{cat.name}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground/60">{svc.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo} flex items-center justify-center text-2xl shadow-xl`}>
                  {svc.icon}
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${cat.colorClass}`}>{cat.name}</p>
                  <p className="text-foreground/40 text-xs">{cat.tagline}</p>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-foreground mb-4 leading-tight">{svc.name}</h1>
              <p className={`text-xl font-semibold ${cat.colorClass} mb-6`}>{svc.tagline}</p>
              <p className="text-lg text-foreground/55 leading-relaxed mb-8">{svc.description}</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r ${cat.gradientFrom} ${cat.gradientTo} text-white hover:opacity-90 transition-opacity shadow-xl`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Stats side panel */}
            <div className="animate-slideInRight">
              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] space-y-6">
                <h3 className="text-lg font-bold text-foreground">Why This Service Matters</h3>
                {[
                  { label: 'Average ROI', value: '4-8x' },
                  { label: 'Time to First Results', value: '30 Days' },
                  { label: 'Client Retention Rate', value: '94%' },
                  { label: 'Projects Delivered', value: '50+' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <span className="text-sm text-foreground/50">{item.label}</span>
                    <span className={`text-xl font-black ${cat.colorClass}`}>{item.value}</span>
                  </div>
                ))}
                <div className={`p-4 rounded-xl bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo} bg-opacity-10`}
                  style={{ background: cat.bgGlow }}>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    <Zap className="w-4 h-4 inline mr-1 text-yellow-400" />
                    Free Strategy Session
                  </p>
                  <p className="text-xs text-foreground/60">Book a 30-min call with our experts — no commitment required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="py-20 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className={`text-xs font-bold uppercase tracking-widest ${cat.colorClass} mb-2`}>What's Included</p>
            <h2 className="text-4xl font-black text-foreground">Key Features & Deliverables</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {svc.features.map((feat, i) => (
              <div
                key={feat}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all group"
                style={{ animation: `slideInUp 0.5s ease-out ${i * 0.07}s both` }}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">{feat}</span>
              </div>
            ))}
          </div>

          {/* Sub-features if any */}
          {svc.subFeatures && svc.subFeatures.length > 0 && (
            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {svc.subFeatures.map((sf) => (
                <div key={sf.title} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-4">{sf.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {sf.items.map((item) => (
                      <span key={item} className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${cat.colorClass} border-current/20 bg-current/5`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className={`text-xs font-bold uppercase tracking-widest ${cat.colorClass} mb-2`}>Our Process</p>
            <h2 className="text-4xl font-black text-foreground">How We Deliver Results</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', label: 'Discovery', desc: 'Deep-dive into your goals, audience, and competitive landscape.' },
              { step: '02', label: 'Strategy', desc: 'Build a custom strategy tailored to your specific business objectives.' },
              { step: '03', label: 'Execution', desc: 'Rapid, precision execution with constant communication and updates.' },
              { step: '04', label: 'Optimization', desc: 'Continuous monitoring, testing, and optimization for better results.' },
            ].map((step, i) => (
              <div key={step.step} className="text-center" style={{ animation: `slideInUp 0.5s ease-out ${i * 0.1}s both` }}>
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo} flex items-center justify-center text-xl font-black text-white mx-auto mb-4 shadow-xl`}>
                  {step.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.label}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services in category */}
      {otherServices.length > 0 && (
        <section className="py-20 bg-zinc-950/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className={`text-xs font-bold uppercase tracking-widest ${cat.colorClass} mb-2`}>Also in {cat.name}</p>
              <h2 className="text-3xl font-black text-foreground">Related Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${cat.slug}/${other.slug}`}
                  className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all"
                >
                  <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{other.icon}</span>
                  <h3 className={`font-bold ${cat.colorClass} mb-1`}>{other.name}</h3>
                  <p className="text-sm text-foreground/50 mb-3">{other.tagline}</p>
                  <span className={`inline-flex items-center gap-1 text-xs ${cat.colorClass} hover:opacity-80`}>
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="p-12 rounded-3xl border border-white/10 bg-white/[0.02] relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo} opacity-5`} />
            <div className="relative z-10">
              <span className="text-5xl mb-4 block">{svc.icon}</span>
              <h2 className="text-4xl font-black text-foreground mb-4">
                Ready to Get Started with {svc.name}?
              </h2>
              <p className="text-foreground/50 mb-8 text-lg">
                Let's build a tailored strategy for your business. Book a free 30-min consultation today.
              </p>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold bg-gradient-to-r ${cat.gradientFrom} ${cat.gradientTo} text-white hover:opacity-90 transition-opacity shadow-xl`}
              >
                Book Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
