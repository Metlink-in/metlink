import Link from 'next/link';
import type { Metadata } from 'next';
import { SectionBackdrop } from '@/components/section-backdrop';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle, Zap, TrendingUp } from 'lucide-react';
import { getAllServiceSlugs, getServiceBySlug, getCategoryBySlug } from '@/lib/services-data';
import { TileIcon } from '@/components/tile-icon';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';
import { FaqAccordion } from '@/components/faq-accordion';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/schema';
import { JsonLd } from '@/components/json-ld';
import { Breadcrumbs } from '@/components/breadcrumbs';

const PROCESS = [
  { step: '01', title: 'Discovery & Strategy', desc: 'We learn your goals, audit what exists, and define clear success metrics before any build begins.' },
  { step: '02', title: 'Design & Build', desc: 'Our specialists design and develop the solution in tight, transparent iterations you can review.' },
  { step: '03', title: 'Test & Launch', desc: 'We rigorously test, refine, and ship — with a first working deliverable typically within about a week.' },
  { step: '04', title: 'Optimize & Scale', desc: 'Post-launch we measure, optimize, and scale so results compound over time.' },
];

const catColors: Record<string, string> = {
  'digital-marketing':    '#2B80F0',
  'creative-media':       '#2B80F0',
  'ai-automation':        '#2B80F0',
  'software-development': '#2B80F0',
};

export async function generateStaticParams() {
  return getAllServiceSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; service: string }> }): Promise<Metadata> {
  const { category, service } = await params;
  const svcData = getServiceBySlug(category, service);
  const catData = getCategoryBySlug(category);
  if (!svcData || !catData) return {};

  return buildMetadata({
    path: `/services/${category}/${service}`,
    title: [svcData.name, `${catData.name} Services`, svcData.tagline],
    description: [svcData.tagline, `Part of MetLink's ${catData.name} services.`, svcData.description],
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ category: string; service: string }> }) {
  const { category, service } = await params;
  const svcData = getServiceBySlug(category, service);
  const catData = getCategoryBySlug(category);

  if (!svcData || !catData) notFound();

  const accent = catColors[catData.slug] || '#2B80F0';

  const faqItems = [
    { q: `How long does a typical ${svcData.name} project take?`, a: 'Timelines depend on scope, but most engagements deliver a first working milestone within about a week of kickoff, with a clear plan agreed upfront.' },
    { q: `How much does ${svcData.name} cost?`, a: 'Every project is scoped to your needs. We work with budgets from ₹50K to ₹50L+ — share your goals and we’ll send a tailored estimate.' },
    { q: 'Do you provide ongoing support after launch?', a: 'Yes. We offer continued optimization, monitoring, and support so your solution keeps improving and scaling over time.' },
    { q: 'How do we get started?', a: 'Book a free strategy call or send us a message — we’ll align on goals and map out the fastest path to results.' },
  ];

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: catData.name, path: `/services/${catData.slug}` },
    { name: svcData.name, path: `/services/${catData.slug}/${svcData.slug}` },
  ];

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#07111F' }}>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={serviceSchema({
        name: svcData.name,
        description: svcData.description,
        path: `/services/${catData.slug}/${svcData.slug}`,
        categoryName: catData.name,
      })} />
      <JsonLd data={faqSchema(faqItems)} />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: '#07111F' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${accent}08 0%, transparent 70%)`, filter: 'blur(80px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={crumbs} accent={accent} />

          <div className="max-w-4xl">
            <TileIcon slug={svcData.slug} className="w-11 h-11 mb-6 text-white/90" strokeWidth={1.3} />
            <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>{svcData.tagline}</p>
            <h1 className=" mb-6 leading-tight" style={{ color: '#FFFFFF' }}>{svcData.name}</h1>
            <p className="text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>{svcData.description}</p>
            <Link href="https://www.metlinkai.com/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
              style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>Capabilities</p>
              <h2 className=" mb-6" style={{ color: '#FFFFFF' }}>What We Will Deliver With {svcData.name}</h2>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Our {svcData.name.toLowerCase()} services are comprehensive, tailored to your specific business goals, and designed to generate measurable ROI.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {svcData.features.map((feat) => (
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

      {/* Revenue Impact */}
      <section className="py-16 sm:py-20 relative overflow-hidden isolate" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl flex flex-col sm:flex-row gap-6 items-start"
            style={{ background: `${accent}0A`, border: `1px solid ${accent}25` }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: `${accent}18`, border: `1px solid ${accent}35` }}>
              <TrendingUp className="w-6 h-6" style={{ color: accent }} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>How This Grows Your Revenue</p>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>{svcData.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subfeatures */}
      {svcData.subFeatures && (
        <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {svcData.subFeatures.map((sub) => (
                <div key={sub.title} className="p-8 rounded-3xl"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: '#FFFFFF' }}>
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

      {/* How we work */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>How We Work</p>
            <h2 style={{ color: '#FFFFFF' }}>A clear path from idea to {svcData.name}</h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((p) => (
              <StaggerItem key={p.step}>
                <div className="h-full p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="text-2xl font-black" style={{ color: `${accent}80` }}>{p.step}</span>
                  <h3 className="text-base font-bold mt-3 mb-2" style={{ color: '#FFFFFF' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>FAQ</p>
            <h2 style={{ color: '#FFFFFF' }}>Common questions about {svcData.name}</h2>
          </FadeIn>
          <FaqAccordion accent={accent} items={faqItems} />
        </div>
      </section>

      {/* Related services */}
      {catData.services.filter(s => s.slug !== svcData.slug).length > 0 && (
        <section className="py-16 sm:py-20 relative overflow-hidden isolate" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <SectionBackdrop behind />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>Explore More</p>
              <h2 style={{ color: '#FFFFFF' }}>Related {catData.name} services</h2>
            </FadeIn>
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {catData.services.filter(s => s.slug !== svcData.slug).slice(0, 6).map((s) => (
                <StaggerItem key={s.slug}>
                  <Link href={`/services/${catData.slug}/${s.slug}`}
                    className="group flex items-start gap-4 h-full p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <TileIcon slug={s.slug} className="w-6 h-6 shrink-0 text-white/80 mt-0.5" strokeWidth={1.3} />
                    <div>
                      <h3 className="text-sm font-bold mb-1 group-hover:text-[#5FA8FF] transition-colors" style={{ color: '#FFFFFF' }}>{s.name}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.tagline}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(43,128,240,0.12), transparent 65%)' }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className=" mb-6" style={{ color: '#FFFFFF' }}>
            Ready to scale your business with {svcData.name}?
          </h2>
          <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Book a free strategy session with our experts today. No commitments, just clear actionable guidance.
          </p>
          <Link href="https://www.metlinkai.com/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
            Book Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
