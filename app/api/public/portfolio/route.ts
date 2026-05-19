import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { ProjectModel } from '@/lib/models/Project';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectDB();
    const projects = await ProjectModel.find({ published: true }).sort({ createdAt: -1 }).lean();
    return NextResponse.json(projects);
  } catch {
    return NextResponse.json([]);
  }
}
