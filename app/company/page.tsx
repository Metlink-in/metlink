import type { Metadata } from 'next';
import { getSection } from '@/lib/get-section';
import CompanyClient from './company-client';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/json-ld';

export const dynamic = 'force-dynamic';

export function generateMetadata(): Metadata {
  return buildMetadata({
    path: '/company',
    title: 'About MetLink — AI Marketing & Development Agency',
    description:
      'An AI-first marketing and development agency, founded on the belief that every business deserves access to world-class technology, creativity, and strategic thinking.',
  });
}

// getSection() only substitutes lib/default-data.ts's defaults when the DB
// document is missing entirely (data is null/undefined) — an explicitly saved
// empty array (e.g. someone cleared a section from the admin panel) comes
// back as `[]` verbatim, not swapped for a default. So arrays that should
// never render as a blank section on the public page still need their own
// local fallback here, checked by length.

interface Value { title: string; desc: string }
interface TeamMember { name: string; role: string; specialty: string; initials: string; color: string; image?: string }
interface Milestone { year: string; event: string; desc: string }
interface Stat { value: string; label: string }

const fallbackMilestones: Milestone[] = [
  { year: '2022', event: 'MetLink Founded',       desc: 'Started as a 3-person digital marketing consultancy in Indore.' },
  { year: '2023', event: 'AI Division Launch',    desc: 'Expanded into AI development, delivering first custom ML models.' },
  { year: '2024', event: '50 Clients Milestone',  desc: 'Crossed 50 active clients across 10+ industries globally.' },
  { year: '2025', event: 'Software Studio',       desc: 'Launched full-service software development — web, mobile, cloud.' },
  { year: '2026', event: 'Global Expansion',      desc: "Serving clients across multiple countries as India's leading AI-first marketing & development agency." },
];

export default async function CompanyPage() {
  const [companyData, valuesData, teamData, timelineData, statsData] = await Promise.all([
    getSection<Record<string, string>>('company'),
    getSection<Value[]>('values'),
    getSection<TeamMember[]>('team'),
    getSection<Milestone[]>('timeline'),
    getSection<Stat[]>('stats'),
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Company', path: '/company' },
      ])} />
      <CompanyClient
        company={companyData ?? {}}
        valuesList={valuesData ?? []}
        teamList={teamData ?? []}
        milestonesList={timelineData?.length ? timelineData : fallbackMilestones}
        statsList={(statsData ?? []).map(s => [s.value, s.label])}
      />
    </>
  );
}
