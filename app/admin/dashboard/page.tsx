'use client';
import Link from 'next/link';

const SECTIONS = [
  { label: 'Hero',         href: '/admin/dashboard/hero',         desc: 'Headline, subheadline, CTA buttons, stats' },
  { label: 'Stats',        href: '/admin/dashboard/stats',        desc: 'Numbers shown in stats bar' },
  { label: 'Services',     href: '/admin/dashboard/services',     desc: 'Service cards and descriptions' },
  { label: 'Clients',      href: '/admin/dashboard/clients',      desc: 'Client logos / names ticker' },
  { label: 'Testimonials', href: '/admin/dashboard/testimonials', desc: 'Client quotes and metrics' },
  { label: 'Why Us',       href: '/admin/dashboard/why-us',       desc: 'Six value proposition cards' },
  { label: 'Process',      href: '/admin/dashboard/process',      desc: 'Three-step process section' },
  { label: 'Company',      href: '/admin/dashboard/company',      desc: 'About text, mission, vision' },
  { label: 'Values',       href: '/admin/dashboard/values',       desc: 'Company values cards' },
  { label: 'Timeline',     href: '/admin/dashboard/timeline',     desc: 'Company history milestones' },
  { label: 'Team',         href: '/admin/dashboard/team',         desc: 'Team members' },
  { label: 'Contact',      href: '/admin/dashboard/contact',      desc: 'Email, phone, location info' },
  { label: 'Social Links', href: '/admin/dashboard/social',       desc: 'Twitter, LinkedIn, GitHub, Instagram' },
  { label: 'Footer',       href: '/admin/dashboard/footer',       desc: 'Footer tagline and copyright' },
  { label: 'Portfolio',    href: '/admin/dashboard/portfolio',    desc: 'Add / edit / delete projects' },
  { label: 'Blog',         href: '/admin/dashboard/blog',         desc: 'Add / edit / delete blog posts' },
];

export default function DashboardHome() {
  return (
    <div>
      <h1 style={{ color: '#fff', fontSize: 26, fontWeight: 700, marginBottom: 6 }}>Dashboard</h1>
      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, marginBottom: 32 }}>Select a section to edit site content.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
        {SECTIONS.map(s => (
          <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
            <div style={{ background: '#0D1B2E', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '20px 22px', cursor: 'pointer', transition: 'border-color 0.18s ease, transform 0.15s ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(43,128,240,0.5)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
            >
              <div style={{ color: '#fff', fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{s.label}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{s.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
