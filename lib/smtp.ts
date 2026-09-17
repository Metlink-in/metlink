import nodemailer from 'nodemailer';
import { connectDB } from './mongodb';
import { SiteContent } from './models/SiteContent';

export interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  to: string;
  fromName: string;
  replyTo: string;
}

export async function getSmtpConfig(): Promise<SmtpConfig> {
  try {
    await connectDB();
    const doc = await SiteContent.findOne({ section: 'smtp' }).lean() as { data?: Record<string, string> } | null;
    const d = doc?.data ?? {};
    return {
      host:    d.host    || process.env.SMTP_HOST   || '',
      port:    Number(d.port || process.env.SMTP_PORT || 587),
      secure:  (d.secure || process.env.SMTP_SECURE) === 'true',
      user:    d.user    || process.env.SMTP_USER   || '',
      pass:    d.pass    || process.env.SMTP_PASS   || '',
      to:      d.to      || process.env.CONTACT_TO  || 'hello@metlinkai.com',
      fromName: d.fromName || process.env.SMTP_FROM_NAME || 'Metlink-AI',
      replyTo: d.replyTo || process.env.SMTP_REPLY_TO || '',
    };
  } catch {
    return {
      host:    process.env.SMTP_HOST   || '',
      port:    Number(process.env.SMTP_PORT || 587),
      secure:  process.env.SMTP_SECURE === 'true',
      user:    process.env.SMTP_USER   || '',
      pass:    process.env.SMTP_PASS   || '',
      to:      process.env.CONTACT_TO  || 'hello@metlinkai.com',
      fromName: process.env.SMTP_FROM_NAME || 'Metlink-AI',
      replyTo: process.env.SMTP_REPLY_TO || '',
    };
  }
}

/** Returns null (rather than throwing) when SMTP isn't configured, so callers can skip sending gracefully. */
export async function getSmtpTransport() {
  const cfg = await getSmtpConfig();
  if (!cfg.host || !cfg.user || !cfg.pass) return null;
  const transport = nodemailer.createTransport({
    host: cfg.host, port: cfg.port, secure: cfg.secure,
    auth: { user: cfg.user, pass: cfg.pass },
  });
  return { transport, cfg };
}
