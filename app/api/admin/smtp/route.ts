import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { SiteContent } from '@/lib/models/SiteContent';
import { getSession } from '@/lib/auth';
import nodemailer from 'nodemailer';

const SECTION = 'smtp';

export async function GET() {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await connectDB();
  const doc = await SiteContent.findOne({ section: SECTION }).lean() as { data?: Record<string, string> } | null;
  const d = doc?.data ?? {};
  return NextResponse.json({
    host:    d.host    || process.env.SMTP_HOST    || '',
    port:    d.port    || process.env.SMTP_PORT    || '587',
    secure:  d.secure  || process.env.SMTP_SECURE  || 'false',
    user:    d.user    || process.env.SMTP_USER    || '',
    hasPass: !!(d.pass || process.env.SMTP_PASS),
    to:      d.to      || process.env.CONTACT_TO   || 'hello@metlink.in',
  });
}

export async function PUT(req: NextRequest) {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json();
  await connectDB();

  const existing = await SiteContent.findOne({ section: SECTION }).lean() as { data?: Record<string, string> } | null;
  const prev = existing?.data ?? {};

  const newData: Record<string, string> = {
    host:   body.host?.trim()   || prev.host   || '',
    port:   body.port?.trim()   || prev.port   || '587',
    secure: body.secure         ?? prev.secure ?? 'false',
    user:   body.user?.trim()   || prev.user   || '',
    to:     body.to?.trim()     || prev.to     || 'hello@metlink.in',
    pass:   body.pass?.trim()   ? body.pass.trim() : (prev.pass ?? ''),
  };

  await SiteContent.findOneAndUpdate({ section: SECTION }, { section: SECTION, data: newData }, { upsert: true, new: true });
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { testEmail } = await req.json();
  if (!testEmail) return NextResponse.json({ error: 'Provide a test email address.' }, { status: 400 });

  await connectDB();
  const doc = await SiteContent.findOne({ section: SECTION }).lean() as { data?: Record<string, string> } | null;
  const d = doc?.data ?? {};

  const host = d.host || process.env.SMTP_HOST;
  const user = d.user || process.env.SMTP_USER;
  const pass = d.pass || process.env.SMTP_PASS;
  if (!host || !user || !pass) return NextResponse.json({ error: 'SMTP not fully configured yet.' }, { status: 503 });

  try {
    const transport = nodemailer.createTransport({
      host,
      port:   Number(d.port || process.env.SMTP_PORT || 587),
      secure: (d.secure || process.env.SMTP_SECURE) === 'true',
      auth:   { user, pass },
    });
    await transport.sendMail({
      from:    `"MetLink" <${user}>`,
      to:      testEmail,
      subject: 'MetLink SMTP Test ✓',
      text:    'SMTP is configured correctly. This is a test email from MetLink.',
    });
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Send failed' }, { status: 500 });
  }
}
