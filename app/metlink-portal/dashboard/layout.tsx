'use client';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const NAV = [
  { label: 'Overview',     href: '/metlink-portal/dashboard' },
  { label: 'Hero',         href: '/metlink-portal/dashboard/hero' },
  { label: 'Stats',        href: '/metlink-portal/dashboard/stats' },
  { label: 'Services',     href: '/metlink-portal/dashboard/services' },
  { label: 'Automation First', href: '/metlink-portal/dashboard/automation' },
  { label: 'Service Images',   href: '/metlink-portal/dashboard/service-images' },
  { label: 'Clients',      href: '/metlink-portal/dashboard/clients' },
  { label: 'Testimonials', href: '/metlink-portal/dashboard/testimonials' },
  { label: 'Why Us',       href: '/metlink-portal/dashboard/why-us' },
  { label: 'Process',      href: '/metlink-portal/dashboard/process' },
  { label: 'Company',      href: '/metlink-portal/dashboard/company' },
  { label: 'Values',       href: '/metlink-portal/dashboard/values' },
  { label: 'Timeline',     href: '/metlink-portal/dashboard/timeline' },
  { label: 'Team',         href: '/metlink-portal/dashboard/team' },
  { label: 'Contact',      href: '/metlink-portal/dashboard/contact' },
  { label: 'Social Links', href: '/metlink-portal/dashboard/social' },
  { label: 'Footer',       href: '/metlink-portal/dashboard/footer' },
  { label: 'Portfolio',    href: '/metlink-portal/dashboard/portfolio' },
  { label: 'Blog',         href: '/metlink-portal/dashboard/blog' },
  { label: 'SMTP / Email', href: '/metlink-portal/dashboard/smtp' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/metlink-portal');
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#07111F' }}>
      {/* Sidebar */}
      <aside style={{ width: 220, background: '#0D1B2E', borderRight: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, left: 0, height: '100vh', zIndex: 50 }}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <img src="/logo-mark.png" alt="MetLink" style={{ width: 36, borderRadius: 8, marginBottom: 8 }} />
          <div style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>MetLink Admin</div>
        </div>
        <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 0' }}>
          {NAV.map(item => {
            const active = pathname === item.href || (item.href !== '/metlink-portal/dashboard' && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href} style={{
                display: 'block', padding: '9px 20px', fontSize: 13, fontWeight: active ? 600 : 400,
                color: active ? '#2B80F0' : 'rgba(255,255,255,0.6)',
                background: active ? 'rgba(43,128,240,0.12)' : 'transparent',
                borderRight: active ? '3px solid #2B80F0' : '3px solid transparent',
                textDecoration: 'none', transition: 'all 0.15s ease',
              }}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <button onClick={logout} style={{ width: '100%', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', color: '#EF4444', borderRadius: 8, padding: '8px 0', fontSize: 13, cursor: 'pointer' }}>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={{ marginLeft: 220, flex: 1, padding: '32px 36px', minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  );
}
