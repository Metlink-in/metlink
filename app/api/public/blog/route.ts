import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { BlogPostModel } from '@/lib/models/BlogPost';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectDB();
    const posts = await BlogPostModel.find({ published: true }).sort({ createdAt: -1 }).lean();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([]);
  }
}
