import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/json-ld';
import { Breadcrumbs } from '@/components/breadcrumbs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Cookie Policy', path: '/cookies' },
];

export const metadata: Metadata = buildMetadata({
  path: '/cookies',
  title: 'Cookie Policy — How MetLink Uses Cookies & Tracking',
  description:
    'When you visit our website, MetLink uses cookies and similar tracking technologies to analyse how you use our site, the device you use, and your browsing behaviour.',
});

export default function CookiesPage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#060D1A' }}>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* Hero */}
      <section className="pt-40 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={crumbs} />
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] mb-6"
            style={{ background: 'rgba(43,128,240,0.1)', border: '1px solid rgba(43,128,240,0.2)', color: '#5FA8FF' }}>
            Legal
          </span>
          <h1 className="mb-4" style={{ color: '#FFFFFF', fontWeight: 300 }}>Cookie Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem' }}>How Metlink uses cookies and tracking technologies &nbsp;·&nbsp; Last Updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-legal">

            <p>When you visit our website, Metlink uses cookies and similar tracking technologies to collect and analyse information about how you use our site, the device you use, and your browsing behaviour. By continuing to browse or clicking &ldquo;Accept Cookies&rdquo;, you consent to the placement of cookies on your device as described below.</p>

            <H2>1. Who We Are</H2>
            <p>Metlink (MSME Registered) is an AI automation, software development, and creative design agency based in Indore, Madhya Pradesh, India — 452001. Our website is accessible at metlinkai.com.</p>

            <H2>2. What Are Cookies</H2>
            <p>Cookies are small text files placed on your device (computer, mobile phone, or tablet) by websites you visit. They help websites remember your preferences, analyse site usage, and provide enhanced functionality.</p>
            <p>In addition to cookies, we may use web beacons, pixel tags, and local storage technologies that serve similar purposes. This policy covers all such technologies collectively referred to as &lsquo;cookies.&rsquo;</p>

            <H2>3. Types of Cookies We Use</H2>
            <H3>a. Essential Cookies</H3>
            <p>These cookies are strictly necessary for the website to function. They enable core features such as page navigation and access to secure areas. Without these cookies, parts of the website cannot work. These cookies do not collect personal information for marketing purposes.</p>
            <H3>b. Performance &amp; Analytics Cookies</H3>
            <p>These cookies collect information about how visitors use our website — such as which pages are visited most often, how long visitors stay, and any error messages. This data is aggregated and anonymous, used only to improve website performance.</p>
            <H3>c. Functional Cookies</H3>
            <p>These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, personalised features.</p>
            <H3>d. Marketing &amp; Tracking Cookies</H3>
            <p>We may use these cookies to deliver content and advertisements that are relevant to your interests. Marketing and tracking cookies (including Google Analytics, Meta Pixel, LinkedIn Insight Tag, or similar tools) are only activated after you provide explicit consent. You may withdraw this consent at any time.</p>

            <H2>4. Data We Collect via Cookies</H2>
            <ul>
              <li>Device identifiers and browser type</li>
              <li>IP address (anonymised or pseudonymised where possible)</li>
              <li>Browsing behaviour and pages visited on metlinkai.com</li>
              <li>Referral source (how you arrived at our site)</li>
              <li>Session duration and interaction patterns</li>
            </ul>
            <p>This data is used solely for internal analytics, service improvement, and user experience optimisation.</p>

            <H2>5. Third-Party Cookies</H2>
            <p>We may allow authorised third-party analytics and advertising services to place cookies through our site. We do not control third-party cookies; their use is governed by the respective third party&apos;s privacy and cookie policies. A current list of third-party cookie providers is available on request at <a href="mailto:privacy@metlink.in">privacy@metlink.in</a>.</p>

            <H2>6. Legal Basis for Cookie Use</H2>
            <ul>
              <li><strong>Consent:</strong> for all non-essential cookies (analytics, marketing, tracking). Browsing the site without interacting with the consent banner does not constitute consent to non-essential cookies.</li>
              <li><strong>Legitimate Interest:</strong> for essential cookies necessary for website functionality and security.</li>
            </ul>

            <H2>7. Cookie Consent &amp; Your Choices</H2>
            <p>We operate an explicit opt-in consent model for non-essential cookies. When you first visit metlinkai.com, a cookie consent banner will be displayed. You may choose to Accept All, Reject Non-Essential, or Customise your preferences.</p>
            <p>Additional management options:</p>
            <ul>
              <li><strong>Browser Settings:</strong> Most browsers allow you to view, manage, block, or delete cookies through Settings &gt; Privacy &amp; Security &gt; Cookies.</li>
              <li><strong>Opt-Out Tools:</strong> You may opt out of specific third-party analytics using tools such as the Google Analytics Opt-out Browser Add-on.</li>
            </ul>
            <p>Please note that disabling or blocking certain cookies may impair website functionality.</p>

            <H2>8. Our Policy on Data Usage</H2>
            <p>We will not sell your personal data to third parties. We respect applicable Indian data protection laws that govern the collection and processing of digital identifiers as personal information.</p>

            <H2>9. Cookies and Children</H2>
            <p>Our website is not directed to individuals under 18 years of age. We do not knowingly use cookies to collect personal data from minors. If you believe a minor has interacted with our site, please contact us at <a href="mailto:privacy@metlink.in">privacy@metlink.in</a>.</p>

            <H2>10. Updates to This Cookie Policy</H2>
            <p>We may update this Cookie Policy from time to time. The &lsquo;Last Updated&rsquo; date at the top of this document will reflect the most recent revision. We encourage you to review this policy periodically.</p>

            <H2>11. Contact Us</H2>
            <Table rows={[
              ['Company', 'Metlink (MSME Registered)'],
              ['Email', 'privacy@metlink.in'],
              ['Legal', 'legal@metlink.in'],
              ['Website', 'metlinkai.com'],
              ['Location', 'Indore, Madhya Pradesh, India — 452001'],
              ['Mobile', '+91 8602333400'],
            ]} />

            <p className="mt-8">
              Also see our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Service</Link>.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-base font-semibold mt-10 mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold mt-5 mb-2" style={{ color: 'rgba(255,255,255,0.75)' }}>{children}</h3>;
}
function Table({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-6 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3.5 text-sm" style={{ color: j === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.5)', fontWeight: j === 0 ? 500 : 300, verticalAlign: 'top' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
