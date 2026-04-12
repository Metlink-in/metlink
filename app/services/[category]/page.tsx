import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import { getCategoryBySlug, serviceCategories } from '@/lib/services-data';

export async function generateStaticParams() {
  return serviceCategories.map((cat) => ({ category: cat.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo}`} />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-foreground/40 mb-8">
            <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-foreground/70 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className={cat.colorClass}>{cat.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-6xl mb-6 block animate-float">{cat.icon}</span>
              <p className={`text-xs font-bold uppercase tracking-widest ${cat.colorClass} mb-3`}>{cat.name}</p>
              <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                {cat.tagline}
              </h1>
              <p className="text-xl text-foreground/50 leading-relaxed mb-8">{cat.description}</p>
              <div className="flex flex-wrap gap-3">
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
                  See Case Studies
                </Link>
              </div>
            </div>

            {/* Services list */}
            <div className="grid grid-cols-2 gap-3">
              {cat.services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${cat.slug}/${svc.slug}`}
                  className="group p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.05] transition-all"
                >
                  <span className="text-2xl mb-2 block">{svc.icon}</span>
                  <p className={`text-sm font-bold ${cat.colorClass} mb-1 group-hover:opacity-80`}>{svc.name}</p>
                  <p className="text-xs text-foreground/40 line-clamp-1">{svc.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Individual services detail */}
      {cat.services.map((svc, i) => (
        <section
          key={svc.slug}
          className={`py-20 ${i % 2 === 0 ? 'bg-zinc-950/30' : 'bg-background'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div style={{ animation: `slideInLeft 0.6s ease-out both` }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{svc.icon}</span>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider ${cat.colorClass}`}>{cat.name}</p>
                    <h2 className="text-3xl font-black text-foreground">{svc.name}</h2>
                  </div>
                </div>
                <p className={`text-lg font-semibold ${cat.colorClass} mb-4`}>{svc.tagline}</p>
                <p className="text-foreground/60 leading-relaxed mb-8">{svc.description}</p>

                {svc.subFeatures?.map((sf) => (
                  <div key={sf.title} className="mb-6">
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-3">{sf.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {sf.items.map((item) => (
                        <span key={item} className={`px-3 py-1 rounded-full text-xs font-medium border ${cat.colorClass} border-current/20 bg-current/5`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                <Link
                  href={`/services/${cat.slug}/${svc.slug}`}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r ${cat.gradientFrom} ${cat.gradientTo} text-white hover:opacity-90 transition-opacity`}
                >
                  Full Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Features */}
              <div className="space-y-3" style={{ animation: `slideInRight 0.6s ease-out both` }}>
                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-4">What's Included</p>
                {svc.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all group"
                  >
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${cat.colorClass} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-foreground mb-4">
            Ready to Elevate Your {cat.name.split(' ')[0]} Strategy?
          </h2>
          <p className="text-foreground/50 mb-8 text-lg">
            Let's discuss how our {cat.name.toLowerCase()} services can drive measurable results for your business.
          </p>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold bg-gradient-to-r ${cat.gradientFrom} ${cat.gradientTo} text-white hover:opacity-90 transition-opacity shadow-xl`}
          >
            Start a Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
