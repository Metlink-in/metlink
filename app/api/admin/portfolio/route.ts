import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { ProjectModel } from '@/lib/models/Project';

export async function GET() {
  try {
    await connectDB();
    const projects = await ProjectModel.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json(projects);
  } catch (err) {
    console.error('[portfolio GET]', err);
    return NextResponse.json([]);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();
    const project = await ProjectModel.create(body);
    return NextResponse.json(project, { status: 201 });
  } catch (err: unknown) {
    console.error('[portfolio POST]', err);
    const msg = err instanceof Error ? err.message : 'Create failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
