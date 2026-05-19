import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { ProjectModel } from '@/lib/models/Project';
import { projects as staticProjects } from '@/lib/portfolio-data';

export async function GET() {
  try {
    await connectDB();
    let projects = await ProjectModel.find({}).sort({ createdAt: -1 }).lean();

    // First load: seed MongoDB with static projects so admin shows existing content
    if (projects.length === 0) {
      const seedData = staticProjects.map(p => ({
        slug:         p.slug,
        title:        p.title,
        category:     p.category,
        client:       p.client,
        date:         p.date,
        tech:         p.tech,
        tagline:      p.tagline,
        description:  p.description,
        problem:      p.problem,
        solution:     p.solution,
        results:      p.results,
        gradientFrom: p.gradientFrom,
        gradientTo:   p.gradientTo,
        published:    true,
      }));
      await ProjectModel.insertMany(seedData, { ordered: false }).catch(() => {});
      projects = await ProjectModel.find({}).sort({ createdAt: -1 }).lean();
    }

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
