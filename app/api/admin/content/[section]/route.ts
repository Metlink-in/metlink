import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { SiteContent } from '@/lib/models/SiteContent';
import { defaults } from '@/lib/default-data';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  try {
    await connectDB();
    const doc = await SiteContent.findOne({ section }).lean();
    const raw = doc ? (doc as { data: unknown }).data : null;
    const data = (raw !== null && raw !== undefined) ? raw : (defaults[section] ?? null);
    return NextResponse.json({ section, data });
  } catch (err) {
    console.error('[content GET]', err);
    return NextResponse.json({ section, data: defaults[section] ?? null });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  try {
    const body = await req.json();
    await connectDB();
    await SiteContent.findOneAndUpdate(
      { section },
      { section, data: body },
      { upsert: true, new: true }
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[content PUT]', err);
    return NextResponse.json({ error: 'Save failed' }, { status: 500 });
  }
}
