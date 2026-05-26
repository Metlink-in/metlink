import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { connectDB } from '@/lib/mongodb';
import { SiteContent } from '@/lib/models/SiteContent';

async function getSmtpConfig() {
  try {
    await connectDB();
    const doc = await SiteContent.findOne({ section: 'smtp' }).lean() as { data?: Record<string, string> } | null;
    const d = doc?.data ?? {};
    return {
      host:   d.host   || process.env.SMTP_HOST   || '',
      port:   Number(d.port   || process.env.SMTP_PORT   || 587),
      secure: (d.secure || process.env.SMTP_SECURE) === 'true',
      user:   d.user   || process.env.SMTP_USER   || '',
      pass:   d.pass   || process.env.SMTP_PASS   || '',
      to:     d.to     || process.env.CONTACT_TO  || 'hello@metlink.in',
    };
  } catch {
    return {
      host:   process.env.SMTP_HOST   || '',
      port:   Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      user:   process.env.SMTP_USER   || '',
      pass:   process.env.SMTP_PASS   || '',
      to:     process.env.CONTACT_TO  || 'hello@metlink.in',
    };
  }
}

const FROM_NAME = 'MetLink Website';

function teamHtml(d: Record<string, string>) {
  const row = (label: string, val: string) =>
    val ? `<tr><td style="padding:8px 16px;width:140px;color:#6B7280;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:8px 16px;color:#111827;font-size:13px">${val}</td></tr>` : '';

  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#F3F4F6;font-family:system-ui,sans-serif">
<div style="max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#1A6BD6,#2B80F0);padding:28px 32px">
    <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700">New Inquiry — MetLink</h1>
    <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px">Submitted via website contact form</p>
  </div>
  <table style="width:100%;border-collapse:collapse;margin-top:8px">
    ${row('Name',      d.name)}
    ${row('Email',     d.email)}
    ${row('Company',   d.company)}
    ${row('Phone',     d.phone)}
    ${row('Service',   d.service)}
    ${row('Budget',    d.budget)}
  </table>
  ${d.message ? `<div style="margin:8px 24px 24px;padding:16px;background:#F9FAFB;border-radius:8px;border:1px solid #E5E7EB">
    <p style="margin:0 0 8px;font-size:12px;color:#6B7280;text-transform:uppercase;letter-spacing:.05em">Message</p>
    <p style="margin:0;font-size:14px;color:#111827;white-space:pre-wrap">${d.message}</p>
  </div>` : ''}
  <div style="padding:16px 32px;background:#F9FAFB;border-top:1px solid #E5E7EB">
    <p style="margin:0;font-size:11px;color:#9CA3AF">Sent from metlinkai.com · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
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
        <li>Browse our <a href="https://metlinkai.com/portfolio" style="color:#2B80F0;text-decoration:none">portfolio</a> to see recent work</li>
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
      <a href="mailto:hello@metlink.in" style="color:#2B80F0;text-decoration:none">hello@metlink.in</a> · +91 8602333400
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

    const cfg = await getSmtpConfig();
    if (!cfg.host || !cfg.user || !cfg.pass) {
      console.warn('[contact] SMTP not configured');
      return NextResponse.json({ error: 'Email service not configured. Please contact us at hello@metlink.in' }, { status: 503 });
    }

    const transport = nodemailer.createTransport({
      host: cfg.host, port: cfg.port, secure: cfg.secure,
      auth: { user: cfg.user, pass: cfg.pass },
    });
    const subjectTag = source === 'popup' ? '[Quick Proposal]' : '[Project Inquiry]';
    const subject    = `${subjectTag} ${name} — ${service || 'General Enquiry'}`;

    await Promise.all([
      transport.sendMail({
        from:    `"${FROM_NAME}" <${cfg.user}>`,
        to:      cfg.to,
        replyTo: `"${name}" <${email}>`,
        subject,
        html: teamHtml({ name, email, company, phone, service, budget, message }),
      }),
      transport.sendMail({
        from:    `"MetLink" <${cfg.user}>`,
        to:      `"${name}" <${email}>`,
        subject: `We received your inquiry — MetLink`,
        html:    confirmHtml(name),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] sendMail error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
