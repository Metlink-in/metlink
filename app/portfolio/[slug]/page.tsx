import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight, CheckCircle, Code2, Play } from 'lucide-react';
import { getProjectBySlug, projects } from '@/lib/portfolio-data';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 2);
  const fallbackProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);
  const displayedRelated = relatedProjects.length > 0 ? relatedProjects : fallbackProjects;

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#FAF9F6' }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFF9F7 0%, #FAF6F0 50%, #F5EEE4 100%)' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(200,75,48,0.12), transparent)' }} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs mb-8 overflow-x-auto whitespace-nowrap pb-2" style={{ color: '#ADA09A' }}>
            <Link href="/" className="hover:text-[#C84B30] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/portfolio" className="hover:text-[#C84B30] transition-colors">Portfolio</Link>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: '#C84B30' }}>{project.title}</span>
          </div>

          <h1 className="font-black mb-6 leading-tight" style={{ color: '#192540' }}>{project.title}</h1>
          <p className="text-xl mb-10 max-w-3xl leading-relaxed" style={{ color: '#72645A' }}>{project.description}</p>

          <div className="grid sm:grid-cols-3 gap-4 pt-8" style={{ borderTop: '1px solid #E5DDD5' }}>
            <div>
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: '#ADA09A' }}>Client</p>
              <p className="font-bold" style={{ color: '#192540' }}>{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: '#ADA09A' }}>Category</p>
              <p className="font-bold" style={{ color: '#192540' }}>{project.category}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: '#ADA09A' }}>Date Completed</p>
              <p className="font-bold" style={{ color: '#C84B30' }}>{project.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20" style={{ background: '#FFFFFF', borderTop: '1px solid #E5DDD5' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">

            {/* Challenge & Solution */}
            <div className="md:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-black mb-6" style={{ color: '#192540' }}>The Challenge</h2>
                <div className="p-8 rounded-3xl" style={{ background: '#FAF9F6', border: '1px solid #E5DDD5' }}>
                  <p className="leading-relaxed text-lg" style={{ color: '#72645A' }}>{project.problem}</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6" style={{ color: '#192540' }}>Our Solution</h2>
                <div className="p-8 rounded-3xl" style={{ background: '#FEF1EE', border: '1px solid rgba(200,75,48,0.15)' }}>
                  <p className="leading-relaxed text-lg" style={{ color: '#192540' }}>{project.solution}</p>
                </div>
              </div>
            </div>

            {/* Results & Tech */}
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-bold mb-5 flex items-center gap-2" style={{ color: '#192540' }}>
                  <span style={{ color: '#C84B30' }}><Play className="w-4 h-4 fill-current shrink-0" /></span> Key Results
                </h3>
                <div className="space-y-3">
                  {project.results.map((res) => (
                    <div key={res} className="p-4 rounded-xl flex items-start gap-3"
                      style={{ background: '#FAF9F6', border: '1px solid #E5DDD5' }}>
                      <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#C84B30' }} />
                      <p className="text-sm font-semibold" style={{ color: '#192540' }}>{res}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-5 flex items-center gap-2" style={{ color: '#192540' }}>
                  <span style={{ color: '#C84B30' }}><Code2 className="w-4 h-4 shrink-0" /></span> Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                      style={{ background: '#FAF9F6', border: '1px solid #E5DDD5', color: '#72645A' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {displayedRelated.length > 0 && (
        <section className="py-24" style={{ background: '#FAF9F6', borderTop: '1px solid #E5DDD5' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black mb-10 text-center" style={{ color: '#192540' }}>More Projects</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {displayedRelated.map((p) => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`}
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ background: '#FFFFFF', border: '1px solid #E5DDD5' }}>
                  <div className={`h-32 bg-gradient-to-br ${p.gradientFrom} ${p.gradientTo} relative`}>
                    <div className="absolute inset-0 bg-black/15" />
                    <div className="absolute bottom-3 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/25 text-white backdrop-blur-sm">{p.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold mb-2 group-hover:text-[#C84B30] transition-colors" style={{ color: '#192540' }}>{p.title}</h3>
                    <p className="text-sm line-clamp-2" style={{ color: '#72645A' }}>{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E5DDD5' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(200,75,48,0.04), transparent 65%)' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-black mb-4" style={{ color: '#192540' }}>Let&apos;s build your success story</h2>
          <p className="mb-8 text-lg" style={{ color: '#72645A' }}>We deliver measurable impact through AI, code, and creative strategy.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#C84B30', boxShadow: '0 4px 20px rgba(200,75,48,0.3)' }}>
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
