import { NextRequest, NextResponse } from 'next/server';
import { getSmtpTransport } from '@/lib/smtp';
import { connectDB } from '@/lib/mongodb';
import { SubscriberModel } from '@/lib/models/Subscriber';
import { SITE_URL } from '@/lib/site-config';

const SOURCE_LABELS: Record<string, string> = {
  contact:    'Contact Page',
  popup:      'Homepage Popup',
  proposal:   'Get Proposal (Header)',
  newsletter: 'Blog Newsletter',
  footer:     'Footer Newsletter',
};

function esc(s: string) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}

function teamHtml(d: Record<string, string>, sourceLabel: string) {
  const row = (label: string, val: string) =>
    val ? `<tr>
      <td style="padding:11px 16px;width:130px;color:#6B7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;white-space:nowrap;vertical-align:top;border-bottom:1px solid #F1F3F5">${label}</td>
      <td style="padding:11px 16px;color:#0B1628;font-size:14px;vertical-align:top;border-bottom:1px solid #F1F3F5">${val}</td>
    </tr>` : '';

  const ts = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#EEF1F5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
<div style="max-width:620px;margin:32px auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 6px 28px rgba(15,23,42,0.10)">

  <div style="background:linear-gradient(135deg,#0C111D 0%,#1A6BD6 60%,#2B80F0 100%);padding:30px 32px">
    <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,0.6)">New Lead · MetLink</p>
    <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800;letter-spacing:-0.01em">${esc(d.name) || 'New Inquiry'}</h1>
    <span style="display:inline-block;margin-top:12px;padding:4px 12px;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.25);border-radius:999px;color:#fff;font-size:11px;font-weight:600">📥 ${esc(sourceLabel)}</span>
  </div>

  <table style="width:100%;border-collapse:collapse">
    ${row('Name',    esc(d.name))}
    ${row('Email',   d.email ? `<a href="mailto:${esc(d.email)}" style="color:#2B80F0;text-decoration:none">${esc(d.email)}</a>` : '')}
    ${row('Phone',   d.phone ? `<a href="tel:${esc(d.phone)}" style="color:#2B80F0;text-decoration:none">${esc(d.phone)}</a>` : '')}
    ${row('Company', esc(d.company))}
    ${row('Service', esc(d.service))}
    ${row('Budget',  esc(d.budget))}
  </table>

  ${d.message ? `<div style="margin:18px 24px 8px;padding:18px;background:#F8FAFC;border-radius:10px;border:1px solid #E8EDF2">
    <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:.06em">Message</p>
    <p style="margin:0;font-size:14px;color:#0B1628;line-height:1.65;white-space:pre-wrap">${esc(d.message)}</p>
  </div>` : ''}

  ${d.email ? `<div style="padding:8px 24px 24px;text-align:center">
    <a href="mailto:${esc(d.email)}" style="display:inline-block;padding:12px 30px;background:#2B80F0;color:#fff;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none">Reply to ${esc((d.name || '').split(' ')[0]) || 'Lead'} →</a>
  </div>` : ''}

  <div style="padding:16px 32px;background:#F8FAFC;border-top:1px solid #E8EDF2">
    <p style="margin:0;font-size:11px;color:#9CA3AF">Submitted via metlinkai.com · ${ts} IST · Reply directly to this email to reach the sender.</p>
  </div>
</div></body></html>`;
}

function confirmHtml(name: string) {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#F3F4F6;font-family:system-ui,sans-serif">
<div style="max-width:560px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#0C111D,#1A2540);padding:32px;text-align:center">
    <p style="margin:0 0 4px;font-size:22px;font-weight:800;color:#fff">MetLink</p>
    <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:.15em;text-transform:uppercase">Grow with AI</p>
  </div>
  <div style="padding:36px 40px">
    <h2 style="margin:0 0 12px;font-size:22px;color:#0B1628;font-weight:700">We received your inquiry, ${name.split(' ')[0]}!</h2>
    <p style="margin:0 0 20px;font-size:14px;color:#4B5563;line-height:1.6">
      Thank you for reaching out. Our team reviews every submission personally and will get back to you within <strong>2 business hours</strong> with a tailored response.
    </p>
    <div style="background:#EFF6FF;border-radius:10px;padding:20px 24px;margin-bottom:28px">
      <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#1D4ED8;text-transform:uppercase;letter-spacing:.06em">While you wait</p>
      <ul style="margin:0;padding-left:18px;font-size:13px;color:#374151;line-height:1.8">
        <li>Read our <a href="https://metlinkai.com/blog" style="color:#2B80F0;text-decoration:none">blog</a> for AI & automation insights</li>
        <li>Learn about our <a href="https://metlinkai.com/services" style="color:#2B80F0;text-decoration:none">AI services</a></li>
      </ul>
    </div>
    <a href="https://metlinkai.com/contact" style="display:inline-block;padding:12px 28px;background:#2B80F0;color:#fff;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none">
      Visit Our Website →
    </a>
  </div>
  <div style="padding:20px 40px;background:#F9FAFB;border-top:1px solid #E5E7EB">
    <p style="margin:0;font-size:12px;color:#6B7280">
      MetLink · Indore, Madhya Pradesh, India · 452001<br>
      <a href="mailto:hello@metlinkai.com" style="color:#2B80F0;text-decoration:none">hello@metlinkai.com</a> · +91 8602333400
    </p>
  </div>
</div></body></html>`;
}

function subscribeConfirmHtml(email: string) {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#F3F4F6;font-family:system-ui,sans-serif">
<div style="max-width:560px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#0C111D,#1A2540);padding:32px;text-align:center">
    <p style="margin:0 0 4px;font-size:22px;font-weight:800;color:#fff">MetLink</p>
    <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:.15em;text-transform:uppercase">Grow with AI</p>
  </div>
  <div style="padding:36px 40px">
    <h2 style="margin:0 0 12px;font-size:22px;color:#0B1628;font-weight:700">You&#39;re subscribed! 🎉</h2>
    <p style="margin:0 0 20px;font-size:14px;color:#4B5563;line-height:1.6">
      Thanks for subscribing with <strong>${esc(email)}</strong>. We&#39;ll send you our best articles on AI, marketing, and software, roughly once a month, straight to this inbox.
    </p>
    <a href="https://metlinkai.com/blog" style="display:inline-block;padding:12px 28px;background:#2B80F0;color:#fff;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none">
      Read the Blog →
    </a>
  </div>
  <div style="padding:20px 40px;background:#F9FAFB;border-top:1px solid #E5E7EB">
    <p style="margin:0;font-size:12px;color:#6B7280">
      MetLink · Indore, Madhya Pradesh, India · 452001<br>
      <a href="mailto:hello@metlinkai.com" style="color:#2B80F0;text-decoration:none">hello@metlinkai.com</a> · +91 8602333400
      · <a href="${SITE_URL}/api/unsubscribe?email=${encodeURIComponent(email)}" style="color:#9CA3AF;text-decoration:underline">Unsubscribe</a>
    </p>
  </div>
</div></body></html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company = '', phone = '', service = '', budget = '', message = '', source = 'contact' } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const smtp = await getSmtpTransport();
    if (!smtp) {
      console.warn('[contact] SMTP not configured');
      return NextResponse.json({ error: 'Email service not configured. Please contact us at hello@metlinkai.com' }, { status: 503 });
    }
    const { transport, cfg } = smtp;
    const isNewsletter = source === 'newsletter' || source === 'footer';
    const sourceLabel = SOURCE_LABELS[source] || 'Website Form';
    const subject     = `🔔 New Lead — ${name} (${sourceLabel})${service ? ` · ${service}` : ''}`;

    if (isNewsletter) {
      try {
        await connectDB();
        await SubscriberModel.updateOne(
          { email: email.trim().toLowerCase() },
          { unsubscribed: false },
          { upsert: true }
        );
      } catch (err) {
        console.error('[contact] failed to save subscriber:', err);
      }
    }

    // 1) Owner notification — CRITICAL. If this fails, the whole request fails so the
    //    visitor is told to retry and the lead is never silently lost.
    await transport.sendMail({
      from:    `"${cfg.fromName}" <${cfg.user}>`,
      to:      cfg.to,
      replyTo: `"${name}" <${email}>`,
      subject,
      html: teamHtml({ name, email, company, phone, service, budget, message }, sourceLabel),
    });

    // 2) Confirmation to the person who filled the form — BEST EFFORT. A bad/typo'd
    //    submitter address must never discard the owner notification above.
    try {
      await transport.sendMail({
        from:    `"${cfg.fromName}" <${cfg.user}>`,
        to:      `"${name}" <${email}>`,
        replyTo: cfg.replyTo || cfg.to,
        subject: isNewsletter ? "You're subscribed to the MetLink blog!" : 'We received your inquiry — MetLink',
        html:    isNewsletter ? subscribeConfirmHtml(email) : confirmHtml(name),
      });
    } catch (confErr) {
      console.warn('[contact] confirmation email to submitter failed:', confErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] sendMail error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
