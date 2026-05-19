'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts as staticPosts } from '@/lib/blog-data';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const categories = ['All', 'AI & Automation', 'Digital Marketing', 'Creative Media', 'Software Development'];

export default function BlogPage() {
  const [posts, setPosts] = useState(staticPosts);

  useEffect(() => {
    fetch('/api/public/blog').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length) setPosts(data);
    }).catch(() => {});
  }, []);

  const featured = posts[0];
  const rest      = posts.slice(1);

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#07111F' }}>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: '#07111F' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-normal uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', color: '#2B80F0',  }}>
              Insights &amp; Ideas
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className=" mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
              The MetLink{' '}
              <span style={{ color: '#2B80F0' }}>Blog</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-xl max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Actionable insights on AI, marketing, software, and creative strategy — from the team that builds it every day.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 sticky top-16 z-40"
        style={{ background: 'rgba(6,13,26,0.95)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-4 flex gap-2.5 overflow-x-auto pb-1">
          {categories.map((cat, i) => (
            <button key={cat}
              className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105"
              style={i === 0
                ? { background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.3)', color: '#2B80F0' }
                : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-14" style={{ background: '#0B1628' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-normal uppercase tracking-[0.25em] mb-6" style={{ color: '#2B80F0' }}>Featured Article</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-5 gap-8 p-8 rounded-3xl transition-all duration-300 overflow-hidden relative hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,128,240,0.25)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.35)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}>
              <div className={`lg:col-span-2 h-56 lg:h-auto rounded-2xl bg-gradient-to-br ${featured.gradientFrom} ${featured.gradientTo} relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-black/15" />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <span className="self-start px-3 py-1 rounded-full text-xs font-semibold bg-black/25 text-white backdrop-blur-sm">{featured.category}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm"
                      style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>
                      {featured.author.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{featured.author}</p>
                      <p className="text-white/70 text-xs">{featured.authorRole}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#2B80F0' }}>{featured.category}</span>
                  <span className="text-xs flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.4)' }}><Clock className="w-3 h-3" />{featured.readTime}</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{featured.date}</span>
                </div>
                <h2 className="text-2xl  mb-4 leading-tight group-hover:text-[#2B80F0] transition-colors" style={{ color: '#FFFFFF' }}>{featured.title}</h2>
                <p className="leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>{featured.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs"
                      style={{ border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)', background: '#0B1628' }}>{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: '#2B80F0' }}>
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 pb-24" style={{ background: '#07111F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-normal uppercase tracking-[0.25em] mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>Latest Articles</p>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map(post => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 h-full"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(0,0,0,0.4)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)'}>
                  <div className={`h-40 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/15" />
                    <div className="absolute bottom-3 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/25 text-white backdrop-blur-sm">{post.category}</span>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>
                      {post.author.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold" style={{ color: '#2B80F0' }}>{post.category}</span>
                      <span className="text-xs flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.4)' }}><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-[#2B80F0] transition-colors line-clamp-2" style={{ color: '#FFFFFF' }}>{post.title}</h3>
                    <p className="text-sm line-clamp-3 flex-1 mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black shrink-0"
                          style={{ background: 'rgba(43,128,240,0.2)', color: '#5FA8FF' }}>
                          {post.author.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-xs font-semibold" style={{ color: '#FFFFFF' }}>{post.author}</p>
                          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{post.date}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#2B80F0' }}>
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
      <section className="py-16 sm:py-24 relative" style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(43,128,240,0.12), transparent 65%)' }} />
        <FadeIn className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <p className="text-[10px] font-normal uppercase tracking-[0.3em] mb-4" style={{ color: '#2B80F0' }}>Never Miss an Insight</p>
          <h2 className=" mb-6" style={{ color: '#FFFFFF' }}>
            Subscribe to the{' '}
            <span style={{ color: '#2B80F0' }}>Insights</span>
          </h2>
          <p className="mb-10 text-lg font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>Get our best articles on AI, marketing, and software — once a month.</p>
          <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-3.5 max-w-xl mx-auto">
            <input type="email" placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-full text-sm focus:outline-none transition-all"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', color: '#FFFFFF' }}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
            <button type="submit"
              className="px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:brightness-95 active:scale-95 transition-all text-white"
              style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.25)' }}>
              Subscribe
            </button>
          </form>
          <p className="text-[10px] mt-6 font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
            No Spam &bull; Monthly Recap &bull; Unsubscribe Anytime
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
