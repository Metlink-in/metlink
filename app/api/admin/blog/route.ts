import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { BlogPostModel } from '@/lib/models/BlogPost';
import { blogPosts as staticPosts } from '@/lib/blog-data';

export async function GET() {
  try {
    await connectDB();
    let posts = await BlogPostModel.find({}).sort({ createdAt: -1 }).lean();

    // First load: seed MongoDB with static blog posts so admin shows existing content
    if (posts.length === 0) {
      const seedData = staticPosts.map(p => ({
        slug:         p.slug,
        title:        p.title,
        excerpt:      p.excerpt,
        content:      p.content,
        author:       p.author,
        authorRole:   p.authorRole,
        date:         p.date,
        readTime:     p.readTime,
        category:     p.category,
        tags:         p.tags,
        gradientFrom: p.gradientFrom,
        gradientTo:   p.gradientTo,
        published:    true,
      }));
      await BlogPostModel.insertMany(seedData, { ordered: false }).catch(() => {});
      posts = await BlogPostModel.find({}).sort({ createdAt: -1 }).lean();
    }

    return NextResponse.json(posts);
  } catch (err) {
    console.error('[blog GET]', err);
    return NextResponse.json([]);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();
    const post = await BlogPostModel.create(body);
    return NextResponse.json(post, { status: 201 });
  } catch (err: unknown) {
    console.error('[blog POST]', err);
    const msg = err instanceof Error ? err.message : 'Create failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
