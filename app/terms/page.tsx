import Link from 'next/link';

export const metadata = { title: 'Terms of Service | MetLink' };

export default function TermsPage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#060D1A' }}>

      {/* Hero */}
      <section className="pt-40 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] mb-6"
            style={{ background: 'rgba(43,128,240,0.1)', border: '1px solid rgba(43,128,240,0.2)', color: '#5FA8FF' }}>
            Legal
          </span>
          <h1 className="mb-4" style={{ color: '#FFFFFF', fontWeight: 300 }}>Terms of Service</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem' }}>Effective Date: May 2026 &nbsp;·&nbsp; Last Updated: May 2026 &nbsp;·&nbsp; metlinkai.com</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-legal">

            <H2>1. Acceptance of Terms</H2>
            <p>Welcome to Metlink. By accessing or using metlinkai.com (the &ldquo;Website&rdquo;), interacting with any AI systems deployed by Metlink, or engaging with our services in any manner, you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; &ldquo;your&rdquo;) agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).</p>
            <p>If you do not agree to these Terms, you may not access or use the Website or engage our services. You must be at least 18 years of age to use this Website or engage our services.</p>
            <p>These Terms constitute a legally binding agreement between you and Metlink (an MSME-registered proprietary firm under Indian law) under the Indian Contract Act, 1872.</p>

            <H2>2. Legal Entity</H2>
            <p>Services are provided by Metlink (an MSME-registered proprietary firm under Indian law), headquartered in Indore, Madhya Pradesh, India — 452001.</p>
            <Table rows={[
              ['Company', 'Metlink (MSME-registered, Proprietary Firm)'],
              ['General Enquiries', 'hello@metlink.in'],
              ['Legal / Contracts', 'legal@metlink.in'],
              ['Privacy', 'privacy@metlink.in'],
              ['Support', 'support@metlink.in'],
              ['Website', 'metlinkai.com'],
              ['Address', 'Indore, Madhya Pradesh, India — 452001'],
            ]} hideHeader />

            <H2>3. Description of Services</H2>
            <p>Metlink is an AI automation, software development, and creative design agency providing services including but not limited to:</p>
            <ul>
              <li>AI Automation Consulting: designing and deploying intelligent workflow automation systems</li>
              <li>AI &amp; Multi-Agent Development: custom AI agent design, LLM integration, NLP, and conversational AI</li>
              <li>Software Development: web and mobile application development, cloud and API development, business automation</li>
              <li>Creative Media &amp; Design: brand identity, graphic design, motion graphics, UI/UX design, and video production</li>
              <li>Digital Marketing: SEO, performance marketing, social media management, and personal branding</li>
              <li>Data Science &amp; Machine Learning: ML solutions, data analytics, model training and deployment</li>
              <li>Fractional CTO &amp; Strategic Advisory: product development consulting, technology roadmaps, and startup advisory</li>
            </ul>

            <H2>4. No Professional Advice</H2>
            <p>Information provided on this Website or through any AI systems deployed by Metlink is for informational purposes only. Metlink does not provide legal advice, financial advice, accounting or audit services, or medical guidance. Any decisions made based on information provided through the Website or AI systems are solely at your own risk.</p>

            <H2>5. Eligibility &amp; Engagement</H2>
            <p>To engage Metlink&apos;s services, you agree to provide truthful, current, and complete information about yourself or your organisation, maintain and promptly update such information, and take responsibility for all activities that occur under your engagement with Metlink.</p>
            <p>Metlink reserves the right to refuse service to anyone for any lawful reason.</p>

            <H2>6. Intellectual Property</H2>
            <H3>6a. Metlink&apos;s IP</H3>
            <p>All content on metlinkai.com — including text, graphics, logos, designs, software, agent architectures, and AI systems — is the exclusive intellectual property of Metlink or its licensors. Nothing in these Terms grants you any right to use Metlink&apos;s trademarks, logos, or proprietary technology without prior written consent.</p>
            <H3>6b. Client Deliverables</H3>
            <p>Upon full payment of all applicable fees, Metlink assigns to the Client all intellectual property rights in the custom deliverables created specifically for the Client under a signed SOW, unless otherwise agreed in writing. The following remain the exclusive property of Metlink: pre-existing tools, frameworks, and templates; generic AI prompt frameworks and automation logic; reusable code modules; and proprietary methodologies.</p>
            <H3>6c. AI-Generated Outputs</H3>
            <p>Outputs generated by third-party AI systems are subject to the respective provider&apos;s terms of service regarding intellectual property. Metlink makes no representation or warranty as to the copyright status or originality of AI-generated content. Clients are solely responsible for ensuring their use of AI-generated outputs complies with applicable intellectual property law.</p>
            <H3>6d. Client Data</H3>
            <p>The Client retains ownership of all data, content, and materials provided to Metlink for the purpose of service delivery. The Client grants Metlink a limited, non-exclusive licence to use such materials solely to perform the agreed services.</p>
            <H3>6e. Portfolio &amp; Marketing Rights</H3>
            <p>Unless expressly prohibited in writing, Metlink reserves the right to reference the Client&apos;s name and describe the nature of services in Metlink&apos;s marketing materials. Metlink shall not display screenshots, specific outputs, or identifiable Client data publicly without prior written consent. Clients may opt out by written notice to <a href="mailto:hello@metlink.in">hello@metlink.in</a>.</p>

            <H2>7. Confidentiality</H2>
            <p>Both parties agree to keep confidential any non-public information disclosed in connection with the engagement, including business processes, technical specifications, pricing, API keys, credentials, and client data. This obligation survives termination of any service engagement for two (2) years.</p>

            <H2>8. Payment Terms</H2>
            <ul>
              <li>Project engagements require a non-refundable deposit of 50% of the total project fee before work commences.</li>
              <li>Remaining balance is due upon project completion or as per the milestone schedule in the SOW.</li>
              <li>Retainer agreements are invoiced monthly in advance and are non-refundable once work has commenced.</li>
              <li>All fees are quoted in INR or USD as agreed. Applicable GST will be charged as per Indian tax laws.</li>
              <li>Late payments attract interest at 2% per month on the outstanding amount.</li>
              <li>Metlink reserves the right to suspend services upon non-payment after a 7-day written notice.</li>
            </ul>

            <H2>9. Refund &amp; Cancellation Policy</H2>
            <H3>9a. Cancellation Before Commencement</H3>
            <p>If a Client cancels in writing before Metlink has commenced any billable work, the deposit will be refunded less any reasonable out-of-pocket expenses already incurred.</p>
            <H3>9b. Cancellation After Commencement</H3>
            <p>Deposits and advance payments for projects where work has commenced are non-refundable. The Client will be invoiced for work completed up to the cancellation date at a prorated rate.</p>
            <H3>9c. Milestone-Based Projects</H3>
            <p>Payments made for completed and delivered milestones are non-refundable regardless of subsequent cancellation.</p>
            <H3>9d. Retainer Cancellations</H3>
            <p>Retainer agreements may be cancelled with 30 days&apos; written notice. Monthly retainer fees already invoiced and for which work has commenced are non-refundable.</p>
            <H3>9e. Revision Policy</H3>
            <p>Unless otherwise specified in the SOW, each project phase includes a reasonable number of revisions as agreed at project kickoff. Additional revision rounds beyond the agreed scope will be billed at Metlink&apos;s standard hourly rate.</p>
            <H3>9f. Scope Changes</H3>
            <p>Any changes to the agreed scope of work must be submitted in writing and executed under a separate change order or amended SOW. Metlink is not obligated to commence scope change work until a written change order is signed.</p>
            <p>All cancellation and refund requests must be submitted to: <a href="mailto:hello@metlink.in">hello@metlink.in</a></p>

            <H2>10. Support &amp; Service Levels</H2>
            <Table rows={[
              ['Free Support Period', '30 days from final project delivery or go-live date'],
              ['Support Hours', 'Monday to Friday, 10:00 AM – 6:00 PM IST'],
              ['Response Time', 'Within 2 business days (non-critical); 1 business day (critical issues on live systems)'],
              ['Bug Fixing Scope', 'Bugs attributable to Metlink\'s implementation are fixed at no charge. Issues from Client-side changes are billable.'],
              ['Hosting', 'Not responsible for hosting infrastructure unless explicitly agreed in the SOW.'],
            ]} headers={['Service Element', 'Detail']} />

            <H2>11. Warranties &amp; Disclaimers</H2>
            <p>Metlink warrants that all services will be performed with reasonable skill and care in accordance with industry standards. Metlink does not warrant that services will be uninterrupted or error-free, that AI-generated outputs will be completely accurate, or that third-party integrations will perform as expected.</p>
            <p className="uppercase text-xs font-semibold mt-4" style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW, ALL SERVICES ARE PROVIDED ON AN &apos;AS IS&apos; AND &apos;AS AVAILABLE&apos; BASIS WITHOUT WARRANTIES OF ANY KIND BEYOND THOSE EXPRESSLY STATED HEREIN.</p>

            <H2>12. AI Outputs &amp; Human Oversight</H2>
            <p>Clients expressly acknowledge and agree that:</p>
            <ul>
              <li>Outputs generated through LLM-based systems are probabilistic in nature and may contain hallucinations, factual errors, or biased responses.</li>
              <li>AI-generated content should not be used in business-critical, legal, medical, financial, or compliance-related decisions without independent human review.</li>
              <li>Metlink is not responsible for decisions made by the Client based solely on AI-generated outputs without appropriate human review.</li>
              <li>Third-party AI model providers may change, restrict, or discontinue their models at any time. Metlink shall not be liable for resulting service interruptions.</li>
              <li>Token consumption, API rate limits, and associated costs imposed by AI providers are the responsibility of the Client where specified as pass-through in the SOW.</li>
            </ul>

            <H2>13. Beta &amp; Experimental Systems</H2>
            <p>Certain tools, agents, or systems may be labelled as beta, experimental, MVP, or proof-of-concept. Such systems may contain bugs or incomplete features, may experience downtime, and are provided &apos;as-is&apos; without performance guarantees.</p>

            <H2>14. Acceptable Use</H2>
            <p>By using our Website or services, you agree not to use our services for any unlawful purpose, reverse-engineer or copy Metlink&apos;s proprietary AI systems, introduce malware into our systems, generate defamatory or infringing content, or violate applicable data protection laws including the DPDP Act, 2023, GDPR, or CCPA.</p>

            <H2>15. Third-Party Services</H2>
            <p>Metlink may integrate third-party providers including AI model providers, cloud infrastructure, CRM platforms, automation tools, and payment processors. Metlink is not responsible for outages, performance failures, or policy changes of third-party providers.</p>

            <H2>16. Limitation of Liability</H2>
            <p>To the maximum extent permitted under the Indian Contract Act, 1872, Metlink&apos;s aggregate liability shall not exceed the total fees paid by the Client in the three (3) months immediately preceding the event giving rise to the claim. Metlink shall not be liable for any indirect, incidental, consequential, punitive, or special damages.</p>

            <H2>17. Indemnification</H2>
            <p>You agree to defend, indemnify, and hold harmless Metlink and its proprietors, employees, contractors, and affiliates from any claims, damages, losses, liabilities, and expenses arising from your misuse of services, violation of applicable law, violation of these Terms, or use of automation systems in a non-compliant manner.</p>

            <H2>18. Termination</H2>
            <p>Either party may terminate a service engagement upon 30 days&apos; written notice. Metlink may immediately terminate access and services if the Client breaches these Terms, engages in unlawful conduct, or fails to make payment after a 7-day overdue notice. Upon termination, all outstanding fees become immediately payable.</p>

            <H2>19. Governing Law &amp; Dispute Resolution</H2>
            <ul>
              <li><strong>Negotiation:</strong> Both parties shall first attempt to resolve disputes amicably within 30 days of written notice.</li>
              <li><strong>Arbitration:</strong> If unresolved, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, with the seat in Indore, Madhya Pradesh. Language: English.</li>
              <li><strong>Jurisdiction:</strong> Subject to the arbitration clause, the courts at Indore, Madhya Pradesh shall have exclusive jurisdiction.</li>
              <li><strong>Class Actions:</strong> You waive any right to participate in class action litigation against Metlink.</li>
            </ul>

            <H2>20. Privacy &amp; Data Protection</H2>
            <p>Your use of our Website and services is governed by our <Link href="/privacy">Privacy Policy</Link> and <Link href="/cookies">Cookie Policy</Link>. Metlink processes personal data in accordance with the Digital Personal Data Protection Act, 2023. For privacy-related enquiries, contact <a href="mailto:privacy@metlink.in">privacy@metlink.in</a>.</p>

            <H2>21. Force Majeure</H2>
            <p>Metlink shall not be liable for delays or failure to perform its obligations where caused by circumstances beyond its reasonable control, including acts of God, government restrictions, power outages, internet disruptions, pandemics, cyberattacks on third-party infrastructure, or third-party platform failures.</p>

            <H2>22. Amendments</H2>
            <p>Metlink reserves the right to modify these Terms at any time. Updated Terms will be posted on metlinkai.com with a revised effective date. Continued use of our services after the effective date of any amendment constitutes acceptance of the revised Terms.</p>

            <H2>23. Severability</H2>
            <p>If any provision of these Terms is found to be unenforceable or invalid, such provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in full force and effect.</p>

            <H2>24. Contact Us</H2>
            <Table rows={[
              ['Company', 'Metlink (MSME-Registered Proprietary Firm)'],
              ['General Enquiries', 'hello@metlink.in'],
              ['Legal / Contracts', 'legal@metlink.in'],
              ['Privacy', 'privacy@metlink.in'],
              ['Support', 'support@metlink.in'],
              ['Website', 'metlinkai.com'],
              ['Address', 'Indore, Madhya Pradesh, India — 452001'],
            ]} hideHeader />

            <p className="mt-10 pt-8 text-xs" style={{ color: 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              &copy; 2026 Metlink. All rights reserved.
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
function Table({ rows, headers, hideHeader }: { rows: string[][]; headers?: string[]; hideHeader?: boolean }) {
  return (
    <div className="overflow-x-auto my-6 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        {!hideHeader && headers && (
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
              {headers.map((h, i) => <th key={i} className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>{h}</th>)}
            </tr>
          </thead>
        )}
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
