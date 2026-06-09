import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

const ALLOWED = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp', 'image/gif'];
const MAX_BYTES = 2 * 1024 * 1024; // 2MB

// Returns the uploaded image as a base64 data URI so it can be stored directly
// in the CMS content (MongoDB) and rendered anywhere. This avoids writing to the
// filesystem, which fails on serverless/production hosts (read-only FS).
export async function POST(req: NextRequest) {
  if (!(await getSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });

    const type = file.type || '';
    if (!ALLOWED.includes(type)) {
      return NextResponse.json({ error: 'File type not allowed. Use PNG, JPG, SVG, WEBP or GIF.' }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: 'Image too large. Max size is 2MB.' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const dataUrl = `data:${type};base64,${buffer.toString('base64')}`;

    return NextResponse.json({ url: dataUrl });
  } catch (err) {
    console.error('[upload]', err);
    return NextResponse.json({ error: 'Upload failed. Please try again.' }, { status: 500 });
  }
}
