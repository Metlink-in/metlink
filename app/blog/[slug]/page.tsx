import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, ArrowRight } from 'lucide-react';
import { getPostBySlug, blogPosts } from '@/lib/blog-data';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Try CMS first, then fall back to static data
  let post: ReturnType<typeof getPostBySlug> = undefined;
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${base}/api/public/blog/${slug}`, { cache: 'no-store' });
    if (res.ok) post = await res.json();
  } catch { /* ignore */ }
  if (!post) post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);
  const fallback = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const relatedPosts = related.length >= 2 ? related : fallback;

  const paragraphs = post.content.split('\n\n');

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#07111F' }}>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: '#07111F' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} opacity-[0.06]`} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Link href="/" className="hover:text-[#2B80F0] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#2B80F0] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: '#2B80F0' }}>{post.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold"
              style={{ background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.2)', color: '#2B80F0' }}>
              {post.category}
            </span>
            <span className="text-sm flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{post.date}</span>
          </div>

          <h1 className=" mb-6 leading-tight" style={{ color: '#FFFFFF' }}>{post.title}</h1>
          <p className="text-xl leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>{post.excerpt}</p>

          <div className="inline-flex items-center gap-4 p-5 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg shrink-0"
              style={{ background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.2)', color: '#5FA8FF' }}>
              {post.author.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div>
              <p className="font-bold mb-0.5" style={{ color: '#FFFFFF' }}>{post.author}</p>
              <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>{post.authorRole} · MetLink</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16" style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-3xl  mt-12 mb-5 leading-tight" style={{ color: '#FFFFFF' }}>
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              if (block.startsWith('### ')) {
                return (
                  <h3 key={i} className="text-xl font-bold mt-8 mb-4" style={{ color: '#FFFFFF' }}>
                    {block.replace('### ', '')}
                  </h3>
                );
              }
              if (block.startsWith('- ')) {
                const items = block.split('\n').filter((l) => l.startsWith('- '));
                return (
                  <ul key={i} className="space-y-3 my-6 pl-2">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#2B80F0' }} />
                        <span dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\*\*(.+?)\*\*/g, '<strong style="color:#FFFFFF;font-weight:700">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.trim()) {
                return (
                  <p key={i} className="leading-relaxed my-6 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}
                    dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#FFFFFF;font-weight:700">$1</strong>') }} />
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Tags</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author bio */}
          <div className="mt-12 p-8 rounded-3xl flex gap-6 items-start"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0"
              style={{ background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.2)', color: '#5FA8FF' }}>
              {post.author.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div>
              <p className="font-black text-xl mb-1" style={{ color: '#FFFFFF' }}>{post.author}</p>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#2B80F0' }}>{post.authorRole} at MetLink</p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Expert at MetLink specializing in {post.category.toLowerCase()}. Helping businesses grow through data, technology, and creative strategy.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-24" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className=" mb-10 text-center" style={{ color: '#FFFFFF' }}>Continue Reading</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="group rounded-2xl overflow-hidden flex transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-1.5 flex-shrink-0" style={{ background: '#2B80F0' }} />
                  <div className="p-6 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#2B80F0' }}>{p.category}</span>
                    <h3 className="font-bold mt-2 mb-3 leading-snug group-hover:text-[#2B80F0] transition-colors line-clamp-2" style={{ color: '#FFFFFF' }}>
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.excerpt}</p>
                    <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.readTime} · {p.date}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/blog"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:brightness-95"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)' }}>
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
