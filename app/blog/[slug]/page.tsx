import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, ArrowRight } from 'lucide-react';
import { getPostBySlug, blogPosts } from '@/lib/blog-data';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);
  const fallback = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const relatedPosts = related.length >= 2 ? related : fallback;

  const paragraphs = post.content.split('\n\n');

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#0A192F' }}>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} opacity-10`} />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(#233554 1px,transparent 1px),linear-gradient(90deg,#233554 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#8892B0] mb-8">
            <Link href="/" className="hover:text-[#ccd6f6] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#ccd6f6] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#64FFDA] font-medium">{post.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold"
              style={{ background: '#233554', border: '1px solid #233554', color: '#64FFDA' }}>
              {post.category}
            </span>
            <span className="text-[#8892B0] text-sm flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="text-[#8892B0] text-sm">{post.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ccd6f6] mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-[#8892B0] leading-relaxed mb-10">{post.excerpt}</p>

          <div className="inline-flex items-center gap-4 p-5 rounded-2xl" style={{ background: '#112240', border: '1px solid #233554' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg shrink-0"
              style={{ background: '#64FFDA' }}>
              {post.authorEmoji}
            </div>
            <div>
              <p className="font-bold text-[#ccd6f6] mb-0.5">{post.author}</p>
              <p className="text-xs text-[#8892B0] uppercase tracking-wider">{post.authorRole} · MetLink</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16" style={{ background: '#0A192F', borderTop: '1px solid #233554' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {paragraphs.map((block, i) => {
              if (block.startsWith('## ')) {
                return <h2 key={i} className="text-3xl font-black text-[#ccd6f6] mt-12 mb-5 leading-tight">{block.replace('## ', '')}</h2>;
              }
              if (block.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-bold text-[#ccd6f6] mt-8 mb-4">{block.replace('### ', '')}</h3>;
              }
              if (block.startsWith('- ')) {
                const items = block.split('\n').filter((l) => l.startsWith('- '));
                return (
                  <ul key={i} className="space-y-3 my-6 pl-2">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#8892B0] leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#64FFDA' }} />
                        <span dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#ccd6f6] font-bold">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.trim()) {
                return (
                  <p key={i} className="text-[#8892B0] leading-relaxed my-6 text-lg"
                    dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#ccd6f6] font-bold">$1</strong>') }} />
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-16 pt-8" style={{ borderTop: '1px solid #233554' }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8892B0] mb-4">Tags</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: '#233554', border: '1px solid #233554', color: '#64FFDA' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author bio */}
          <div className="mt-12 p-8 rounded-3xl flex gap-6 items-start" style={{ background: '#112240', border: '1px solid #233554' }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl flex-shrink-0"
              style={{ background: '#64FFDA' }}>
              {post.authorEmoji}
            </div>
            <div>
              <p className="font-black text-[#ccd6f6] text-xl mb-1">{post.author}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#64FFDA] mb-3">{post.authorRole} at MetLink</p>
              <p className="text-sm text-[#8892B0] leading-relaxed">
                Expert at MetLink specializing in {post.category.toLowerCase()}. Helping businesses grow through data, technology, and creative strategy.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="py-24" style={{ background: '#0A192F', borderTop: '1px solid #233554' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-[#ccd6f6] mb-10 text-center">Continue Reading</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="group rounded-2xl overflow-hidden flex transition-all duration-300 hover:-translate-y-1"
                  style={{ background: '#112240', border: '1px solid #233554' }}>
                  <div className="w-2 flex-shrink-0" style={{ background: '#64FFDA' }} />
                  <div className="p-6 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#64FFDA]">{p.category}</span>
                    <h3 className="font-bold text-[#ccd6f6] mt-2 mb-3 leading-snug group-hover:text-[#64FFDA] transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#8892B0] leading-relaxed mb-4 line-clamp-2">{p.excerpt}</p>
                    <span className="text-xs font-semibold text-[#8892B0]">{p.readTime} · {p.date}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/blog"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:bg-white/5"
                style={{ border: '1px solid #233554', color: '#ccd6f6' }}>
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
