import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { BlogPostModel } from '@/lib/models/BlogPost';
import { SubscriberModel } from '@/lib/models/Subscriber';
import { getSmtpTransport } from '@/lib/smtp';
import { SITE_URL } from '@/lib/site-config';

function esc(s: string) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}

interface NewPost { title: string; slug: string; excerpt?: string; category?: string; author?: string }

function subscriberEmailHtml(post: NewPost, url: string, unsubscribeUrl: string) {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#F3F4F6;font-family:system-ui,sans-serif">
<div style="max-width:560px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#0C111D,#1A2540);padding:32px;text-align:center">
    <p style="margin:0 0 4px;font-size:22px;font-weight:800;color:#fff">MetLink</p>
    <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:.15em;text-transform:uppercase">New on the Blog</p>
  </div>
  <div style="padding:36px 40px">
    ${post.category ? `<p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#2B80F0;text-transform:uppercase;letter-spacing:.04em">${esc(post.category)}</p>` : ''}
    <h2 style="margin:0 0 12px;font-size:22px;color:#0B1628;font-weight:700;line-height:1.3">${esc(post.title)}</h2>
    ${post.excerpt ? `<p style="margin:0 0 24px;font-size:14px;color:#4B5563;line-height:1.6">${esc(post.excerpt)}</p>` : ''}
    <a href="${url}" style="display:inline-block;padding:12px 28px;background:#2B80F0;color:#fff;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none">Read the Full Article →</a>
  </div>
  <div style="padding:20px 40px;background:#F9FAFB;border-top:1px solid #E5E7EB">
    <p style="margin:0;font-size:12px;color:#6B7280">
      MetLink · Indore, Madhya Pradesh, India · 452001
      · <a href="${unsubscribeUrl}" style="color:#9CA3AF;text-decoration:underline">Unsubscribe</a>
    </p>
  </div>
</div></body></html>`;
}

function ownerNotificationHtml(post: NewPost, url: string, sentCount: number) {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#F3F4F6;font-family:system-ui,sans-serif">
<div style="max-width:560px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#0C111D,#1A2540);padding:32px;text-align:center">
    <p style="margin:0 0 4px;font-size:22px;font-weight:800;color:#fff">MetLink</p>
    <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:.15em;text-transform:uppercase">New Post Published</p>
  </div>
  <div style="padding:36px 40px">
    <h2 style="margin:0 0 12px;font-size:20px;color:#0B1628;font-weight:700">${esc(post.title)}</h2>
    ${post.excerpt ? `<p style="margin:0 0 20px;font-size:14px;color:#4B5563;line-height:1.6">${esc(post.excerpt)}</p>` : ''}
    <p style="margin:0 0 20px;font-size:13px;color:#2B80F0;font-weight:600">Sent to ${sentCount} subscriber${sentCount === 1 ? '' : 's'}.</p>
    <a href="${url}" style="display:inline-block;padding:12px 28px;background:#2B80F0;color:#fff;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none">View Live Post →</a>
  </div>
  <div style="padding:16px 32px;background:#F8FAFC;border-top:1px solid #E8EDF2">
    <p style="margin:0;font-size:11px;color:#9CA3AF">Published via the MetLink admin panel · ${url}</p>
  </div>
</div></body></html>`;
}

async function notifyNewPost(post: NewPost) {
  const smtp = await getSmtpTransport();
  if (!smtp) return; // SMTP not configured — publishing must still succeed either way.
  const { transport, cfg } = smtp;
  const url = `${SITE_URL}/blog/${post.slug}`;

  let subscribers: { email: string }[] = [];
  try {
    await connectDB();
    subscribers = await SubscriberModel.find({ unsubscribed: false }).select('email').lean();
  } catch (err) {
    console.warn('[blog] failed to load subscribers:', err);
  }

  // Broadcast to subscribers — each gets their own email so the unsubscribe
  // link can carry their own address (a single BCC blast can't do that).
  if (subscribers.length) {
    await Promise.allSettled(subscribers.map(s => {
      const unsubscribeUrl = `${SITE_URL}/api/unsubscribe?email=${encodeURIComponent(s.email)}`;
      return transport.sendMail({
        from: `"${cfg.fromName}" <${cfg.user}>`,
        to: s.email,
        subject: `📝 New on the MetLink blog: ${post.title}`,
        html: subscriberEmailHtml(post, url, unsubscribeUrl),
      });
    }));
  }

  // Owner notification — best effort, must never block publishing.
  try {
    await transport.sendMail({
      from: `"${cfg.fromName}" <${cfg.user}>`,
      to: cfg.to,
      subject: `📝 New blog post published — ${post.title}`,
      html: ownerNotificationHtml(post, url, subscribers.length),
    });
  } catch (err) {
    console.warn('[blog] owner notification email failed:', err);
  }
}

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
    if (post.published !== false) {
      try {
        await notifyNewPost({ title: post.title, slug: post.slug, excerpt: post.excerpt, category: post.category, author: post.author });
      } catch (err) {
        // Never let an email failure fail the actual blog post creation.
        console.warn('[blog] new-post notification failed:', err);
      }
    }
    return NextResponse.json(post, { status: 201 });
  } catch (err: unknown) {
    console.error('[blog POST]', err);
    const msg = err instanceof Error ? err.message : 'Create failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
