import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { SubscriberModel } from '@/lib/models/Subscriber';

function page(message: string) {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#07111F;font-family:system-ui,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center">
<div style="max-width:420px;padding:40px;text-align:center">
  <p style="margin:0 0 8px;font-size:22px;font-weight:800;color:#fff">MetLink</p>
  <p style="margin:0 0 24px;color:rgba(255,255,255,0.5);font-size:14px">${message}</p>
  <a href="https://metlinkai.com" style="color:#2B80F0;text-decoration:none;font-size:14px;font-weight:600">Back to MetLink →</a>
</div></body></html>`;
}

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')?.trim().toLowerCase();
  if (!email) {
    return new NextResponse(page('Missing email address.'), { status: 400, headers: { 'Content-Type': 'text/html' } });
  }
  try {
    await connectDB();
    await SubscriberModel.updateOne({ email }, { unsubscribed: true }, { upsert: false });
  } catch (err) {
    console.error('[unsubscribe]', err);
  }
  return new NextResponse(page(`You've been unsubscribed. You won't receive any more emails at ${email}.`), {
    headers: { 'Content-Type': 'text/html' },
  });
}
