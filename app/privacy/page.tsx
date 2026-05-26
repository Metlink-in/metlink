import Link from 'next/link';

export const metadata = { title: 'Privacy Policy | MetLink' };

export default function PrivacyPage() {
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
          <h1 className="mb-4" style={{ color: '#FFFFFF', fontWeight: 300 }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem' }}>Effective for all visitors and clients of Metlink &nbsp;·&nbsp; Last Updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-legal">

            <p>Metlink is an AI automation, software development, and creative design agency. We respect your privacy and are committed to protecting your personal and business information in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000.</p>
            <p>This Privacy Policy explains how we collect, use, store, share, and protect data through our website, services, and AI-driven systems. By visiting metlinkai.com or engaging our services, you acknowledge and agree to the terms of this Privacy Policy.</p>

            <H2>1. Legal Entity &amp; Introduction</H2>
            <p>Metlink (MSME Registered) is an AI automation, software development, and creative design agency headquartered in Indore, Madhya Pradesh, India — 452001, operating through the domain metlinkai.com.</p>
            <p>We respect your privacy and are committed to protecting your personal and business information in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act), the Information Technology Act, 2000 (IT Act), and applicable Indian data protection rules.</p>

            <H2>2. Information We Collect</H2>
            <p>We collect only the information necessary to deliver our services effectively and securely.</p>
            <H3>a. Information You Provide</H3>
            <ul>
              <li>Contact details: name, company name, email address, phone number</li>
              <li>Account and project data: workflow parameters, business process descriptions, configuration files</li>
              <li>Payment details: processed securely via authorised third-party payment gateways (e.g., Razorpay, Stripe)</li>
              <li>Communications: inquiries, support requests, feedback, and onboarding forms</li>
              <li>Integration credentials: API keys or access tokens when connecting third-party platforms to our systems</li>
            </ul>
            <H3>b. Information Collected Automatically</H3>
            <ul>
              <li>Technical data: browser type, IP address, device identifiers, operating system, cookies</li>
              <li>Usage data: pages visited, time on site, and interaction and navigation logs</li>
              <li>Automation logs: workflow run status, performance metrics, and timestamps used for diagnostics and service improvement</li>
            </ul>
            <H3>c. Information from Third-Party Integrations</H3>
            <p>When you connect third-party services (e.g., Google Workspace, Notion, Klaviyo, OpenAI, Make, Pinecone) to our automation systems, we may access limited data strictly necessary to perform the authorised automations. We do not collect passwords or unrelated personal content from those systems.</p>

            <H2>3. How We Use Your Information</H2>
            <ul>
              <li>Build, deploy, and manage AI-powered automations and workflows on your behalf</li>
              <li>Provide technical support and client success services</li>
              <li>Analyse system performance and improve reliability</li>
              <li>Ensure security, detect fraud, and prevent misuse</li>
              <li>Communicate updates, service changes, and relevant offerings</li>
              <li>Comply with legal obligations under Indian law and enforce client agreements</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to any third parties under any circumstances.</p>

            <H2>4. AI, Automation &amp; Decision-Making Transparency</H2>
            <p>Metlink builds and operates AI systems using frontier models (GPT-4o, Claude, Gemini), LangChain, Pinecone, and related MLOps tooling. Clients expressly acknowledge the following:</p>
            <ul>
              <li>AI systems operate only on data you provide or explicitly authorise.</li>
              <li>Outputs generated through LLM-based systems are probabilistic and may contain hallucinations, factual errors, or unexpected results. Metlink does not warrant the accuracy or fitness of any AI-generated output for any specific purpose.</li>
              <li>Third-party LLM providers (OpenAI, Anthropic, Google DeepMind) may modify or deprecate their models at any time. Metlink shall not be liable for service degradation resulting from such upstream changes.</li>
              <li>Token consumption, API costs, and rate limits imposed by AI providers are the responsibility of the Client where such costs are pass-through in nature, as specified in the applicable SOW.</li>
              <li>All outputs with meaningful business impact are reviewed or monitored by qualified human personnel.</li>
              <li>Automated decision-making is never used for legal, financial, or employment decisions without human oversight.</li>
              <li>You may request a human review of any automated output that affects your business operations.</li>
            </ul>

            <H2>5. Data Retention</H2>
            <p>We retain your data only as long as necessary for the purposes described in this policy or as required by applicable Indian law:</p>
            <Table rows={[
              ['Project Data', 'Retained while active and for 90 days after completion or termination, unless a longer period is requested in writing.'],
              ['Account Info', 'Retained until you request deletion or deactivate your account.'],
              ['API Keys / Credentials', 'Encrypted and deleted immediately upon revocation or project completion.'],
              ['Communication Logs', 'Retained for up to 1 year for support and dispute resolution purposes.'],
            ]} headers={['Data Type', 'Retention Period']} />
            <p>After applicable retention periods, data is securely deleted or irreversibly anonymised.</p>

            <H2>6. Data Security</H2>
            <ul>
              <li>Encryption of all data in transit (TLS 1.2+) and at rest</li>
              <li>Least-privilege access controls for all team members and systems</li>
              <li>Secure storage of API keys and credentials using strong encryption</li>
              <li>Periodic internal security reviews and access audits</li>
              <li>Internal data provenance, integrity, and deletion policies</li>
            </ul>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', fontSize: '0.85rem' }}>Note: Metlink is a growing agency; security practices are implemented commensurate with operational scale. Enterprise clients requiring certified standards (SOC 2, ISO 27001) should contact legal@metlink.in before engagement.</p>

            <H2>7. Your Rights Under the DPDP Act, 2023</H2>
            <ul>
              <li><strong>Right to Access:</strong> Obtain confirmation of whether your personal data is being processed and access a summary of such data.</li>
              <li><strong>Right to Correction &amp; Erasure:</strong> Request correction, completion, or erasure of your personal data.</li>
              <li><strong>Right to Grievance Redressal:</strong> Lodge a complaint with our designated grievance officer.</li>
              <li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights in the event of your death or incapacity.</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time (subject to legal obligations).</li>
            </ul>
            <p>To exercise any of these rights, contact us at: <a href="mailto:privacy@metlink.in">privacy@metlink.in</a></p>

            <H2>8. Third-Party Services &amp; Data Transfers</H2>
            <p>Our services rely on third-party integrations including cloud providers (AWS, GCP, Azure), AI platforms (OpenAI, Anthropic), automation tools (Make, LangChain), and database services (Supabase, Pinecone). Each provider maintains its own privacy and security standards.</p>
            <p>Where data is transferred outside India, we ensure equivalent safeguards through contractual, technical, or organisational measures consistent with the DPDP Act, 2023. A list of key subprocessors is available on request at <a href="mailto:legal@metlink.in">legal@metlink.in</a>.</p>

            <H2>9. Data Processing Agreement (DPA)</H2>
            <p>Where Metlink processes personal data on behalf of a Client as a data processor, the parties may enter into a separate Data Processing Agreement. Clients requiring a formal DPA should request one at <a href="mailto:legal@metlink.in">legal@metlink.in</a>.</p>

            <H2>10. Intellectual Property in AI Outputs</H2>
            <ul>
              <li>Custom deliverables created specifically for a Client under a signed SOW are assigned to the Client upon full payment.</li>
              <li>Generic AI-generated code, prompt templates, reusable agent frameworks, and automation logic forming part of Metlink&apos;s standard tooling remain the intellectual property of Metlink.</li>
              <li>Outputs generated by third-party AI models are subject to the respective provider&apos;s terms of service. Metlink makes no warranty as to the intellectual property status of such outputs.</li>
              <li>Clients are responsible for ensuring that their use of AI-generated outputs complies with applicable copyright law.</li>
            </ul>

            <H2>11. Data Minimisation &amp; Purpose Limitation</H2>
            <p>We collect only the information necessary to perform our services. We do not use collected data to train proprietary AI models for commercial resale, sell datasets, or perform analytics unrelated to your project.</p>

            <H2>12. Children&apos;s Privacy</H2>
            <p>Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe a minor has provided us with personal information, contact us immediately at <a href="mailto:privacy@metlink.in">privacy@metlink.in</a> for deletion.</p>

            <H2>13. Cookies</H2>
            <p>Our website uses cookies and similar technologies. Please refer to our <Link href="/cookies">Cookie Policy</Link> for full details on the types of cookies we use, their purpose, and how to manage your preferences.</p>

            <H2>14. International Clients</H2>
            <ul>
              <li>Metlink&apos;s services are provided from India and governed exclusively by Indian law.</li>
              <li>Clients in GDPR-regulated jurisdictions (EU/EEA/UK) may request a DPA as described in Section 9 above.</li>
              <li>Metlink does not engage in activities prohibited under US export control laws (ITAR, EAR) or applicable international sanctions regimes.</li>
              <li>Payment disputes involving international clients are subject to arbitration as specified in the Terms of Service.</li>
            </ul>

            <H2>15. Grievance Officer</H2>
            <Table rows={[
              ['Name', 'Grievance Officer, Metlink'],
              ['Email', 'privacy@metlink.in'],
              ['Address', 'Metlink, Indore, Madhya Pradesh, India — 452001'],
              ['Response Time', 'Within 30 days of receipt of complaint'],
            ]} headers={['', '']} hideHeader />

            <H2>16. Contact Us</H2>
            <Table rows={[
              ['Company', 'Metlink (MSME Registered)'],
              ['Website', 'metlinkai.com'],
              ['Privacy Enquiries', 'privacy@metlink.in'],
              ['Legal / DPA', 'legal@metlink.in'],
              ['General', 'hello@metlink.in'],
              ['Mobile', '+91 8602333400'],
              ['Location', 'Indore, Madhya Pradesh, India — 452001'],
            ]} headers={['', '']} hideHeader />

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
function Table({ rows, headers, hideHeader }: { rows: string[][]; headers: string[]; hideHeader?: boolean }) {
  return (
    <div className="overflow-x-auto my-6 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        {!hideHeader && (
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
