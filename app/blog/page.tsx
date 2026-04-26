'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const categories = ['All', 'AI & Automation', 'Digital Marketing', 'Creative Media', 'Software Development'];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="w-full overflow-x-hidden relative" style={{ background: '#030712' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-25 animate-blob"
            style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.2) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.4) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
              Insights &amp; Ideas
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-[#E2E8F0] mb-6 leading-tight">
              The MetLink <span className="gradient-text-cyan">Blog</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              Actionable insights on AI, marketing, software, and creative strategy — from the team that builds it every day.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 sticky top-14 z-40"
        style={{ background: 'rgba(3,7,18,0.9)', borderTop: '1px solid rgba(30,41,59,0.6)', borderBottom: '1px solid rgba(30,41,59,0.6)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-7xl mx-auto px-4 flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat, i) => (
            <button key={cat} className="flex-shrink-0 px-5 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={i === 0
                ? { background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.3)', color: '#06B6D4' }
                : { border: '1px solid rgba(30,41,59,0.8)', color: '#64748B' }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-14" style={{ background: '#030712' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#06B6D4] mb-6">Featured Article</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-5 gap-8 p-8 rounded-3xl transition-all duration-300 overflow-hidden relative hover:-translate-y-1"
              style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.04), transparent 60%)' }} />

              <div className={`lg:col-span-2 h-56 lg:h-auto rounded-2xl bg-gradient-to-br ${featured.gradientFrom} ${featured.gradientTo} relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-[#030712]/30" />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <span className="self-start px-3 py-1 rounded-full text-xs font-semibold bg-[#030712]/40 text-[#E2E8F0]">{featured.category}</span>
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
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">{featured.category}</span>
                  <span className="text-xs text-[#64748B] flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                  <span className="text-xs text-[#64748B]">{featured.date}</span>
                </div>
                <h2 className="text-3xl font-black text-[#E2E8F0] mb-4 leading-tight group-hover:text-[#06B6D4] transition-colors">{featured.title}</h2>
                <p className="text-[#64748B] leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs"
                      style={{ border: '1px solid rgba(30,41,59,0.8)', color: '#64748B' }}>{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#06B6D4] group-hover:gap-3 transition-all">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 pb-24" style={{ background: '#030712' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-bold text-[#64748B] uppercase tracking-[0.25em] mb-8">Latest Articles</p>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 h-full"
                  style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>
                  <div className={`h-40 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[#030712]/30" />
                    <div className="absolute bottom-3 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#030712]/40 text-[#E2E8F0] backdrop-blur-sm">{post.category}</span>
                    </div>
                    <div className="absolute top-4 right-4 text-3xl">{post.authorEmoji}</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-[#06B6D4]">{post.category}</span>
                      <span className="text-xs text-[#64748B] flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#E2E8F0] mb-3 leading-snug group-hover:text-[#06B6D4] transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-[#64748B] line-clamp-3 flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(30,41,59,0.6)' }}>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{post.authorEmoji}</span>
                        <div>
                          <p className="text-xs font-semibold text-[#E2E8F0]">{post.author}</p>
                          <p className="text-xs text-[#475569]">{post.date}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#06B6D4] flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 sm:py-32 relative" style={{ background: '#030712', borderTop: '1px solid rgba(30,41,59,0.6)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.05), rgba(139,92,246,0.03), transparent 70%)' }} />
        <FadeIn className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Never Miss an Insight</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Subscribe to the <span className="gradient-text-cyan">Insights</span>
          </h2>
          <p className="text-[#64748B] mb-10 text-lg font-medium">Get our best articles on AI, marketing, and software — once a month.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-2xl text-sm text-white placeholder:text-white/20 focus:outline-none transition-all"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(30,41,59,0.8)' }}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)')} />
            <button type="submit"
              className="px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
              style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712', boxShadow: '0 0 30px rgba(6,182,212,0.2)' }}>
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-[#475569]/50 mt-8 font-black uppercase tracking-widest">No Spam &bull; Monthly Recap &bull; Unsubscribe Anytime</p>
        </FadeIn>
      </section>
    </div>
  );
}
