import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { BlogPostModel } from '@/lib/models/BlogPost';

export async function GET() {
  try {
    await connectDB();
    const posts = await BlogPostModel.find({}).sort({ createdAt: -1 }).lean();
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
