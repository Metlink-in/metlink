'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

const categories = ['All', 'AI & Automation', 'Digital Marketing', 'Creative Media', 'Software Development'];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#0A192F' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, #233554, transparent 70%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: '#233554', border: '1px solid #233554', color: '#64FFDA' }}>
            Insights & Ideas
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#ccd6f6] mb-6 leading-tight">
            The MetLink{' '}
            <span style={{ color: '#64FFDA' }}>Blog</span>
          </h1>
          <p className="text-xl text-[#8892B0] max-w-3xl mx-auto">
            Actionable insights on AI, marketing, software, and creative strategy — from the team that builds it every day.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 sticky top-16 z-40" style={{ background: 'rgba(6,6,6,0.95)', borderTop: '1px solid #233554', borderBottom: '1px solid #233554', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-4 flex gap-3 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button key={cat} className="flex-shrink-0 px-5 py-2 rounded-xl text-sm font-medium transition-all"
              style={cat === 'All'
                ? { background: '#233554', border: '1px solid #233554', color: '#64FFDA' }
                : { border: '1px solid rgba(255,255,255,0.06)', color: '#8892B0' }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-14" style={{ background: '#0A192F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#64FFDA] mb-6">Featured Article</p>
          <Link href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-5 gap-8 p-8 rounded-3xl transition-all duration-300 overflow-hidden relative hover:-translate-y-1"
            style={{ background: '#112240', border: '1px solid #233554' }}>

            <div className={`lg:col-span-2 h-56 lg:h-auto rounded-2xl bg-gradient-to-br ${featured.gradientFrom} ${featured.gradientTo} relative overflow-hidden flex-shrink-0`}>
              <div className="absolute inset-0 bg-[#0A192F]/30" />
              <div className="relative h-full flex flex-col justify-between p-6">
                <span className="self-start px-3 py-1 rounded-full text-xs font-semibold bg-[#0A192F]/40 text-[#ccd6f6]">{featured.category}</span>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{featured.authorEmoji}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{featured.author}</p>
                    <p className="text-white/60 text-xs">{featured.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64FFDA]">{featured.category}</span>
                <span className="text-xs text-[#8892B0] flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                <span className="text-xs text-[#8892B0]">{featured.date}</span>
              </div>
              <h2 className="text-3xl font-black text-[#ccd6f6] mb-4 leading-tight group-hover:text-[#64FFDA] transition-colors">{featured.title}</h2>
              <p className="text-[#8892B0] leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs"
                    style={{ border: '1px solid #233554', color: '#8892B0' }}>{tag}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#64FFDA] group-hover:gap-3 transition-all">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 pb-24" style={{ background: '#0A192F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-[#8892B0] uppercase tracking-[0.2em] mb-8">Latest Articles</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#112240', border: '1px solid #233554' }}>
                <div className={`h-40 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#0A192F]/30" />
                  <div className="absolute bottom-3 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0A192F]/40 text-[#ccd6f6] backdrop-blur-sm">{post.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 text-3xl">{post.authorEmoji}</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[#64FFDA]">{post.category}</span>
                    <span className="text-xs text-[#8892B0] flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#ccd6f6] mb-3 leading-snug group-hover:text-[#64FFDA] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-[#8892B0] line-clamp-3 flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #233554' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{post.authorEmoji}</span>
                      <div>
                        <p className="text-xs font-semibold text-[#ccd6f6]">{post.author}</p>
                        <p className="text-xs text-[#233554]">{post.date}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#64FFDA] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24" style={{ background: '#0A192F', borderTop: '1px solid #233554' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#64FFDA] mb-3">Never Miss an Insight</p>
          <h2 className="text-4xl font-black text-[#ccd6f6] mb-4">Subscribe to the Newsletter</h2>
          <p className="text-[#8892B0] mb-8">Get our best articles on AI, marketing, and software — once a month, no spam.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl text-sm text-[#ccd6f6] placeholder:text-[#233554] focus:outline-none"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #233554' }} />
            <button type="submit" className="px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity flex-shrink-0"
              style={{ background: '#64FFDA', color: '#0A192F' }}>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
