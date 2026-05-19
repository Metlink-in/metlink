import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { SiteContent } from '@/lib/models/SiteContent';
import { defaults } from '@/lib/default-data';

export const dynamic = 'force-dynamic';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  try {
    await connectDB();
    const doc = await SiteContent.findOne({ section }).lean();
    const data = doc ? (doc as { data: unknown }).data : (defaults[section] ?? null);
    return NextResponse.json({ section, data });
  } catch {
    return NextResponse.json({ section, data: defaults[section] ?? null });
  }
}
