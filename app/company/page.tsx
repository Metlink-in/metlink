import { getSection } from '@/lib/get-section';
import { Target, Eye, Heart, Globe, Award, Clock } from 'lucide-react';
import CompanyClient from './company-client';

export const dynamic = 'force-dynamic';

const defaultValues = [
  { icon: Target, title: 'Mission-Driven',      desc: 'Every decision we make is anchored to one goal — measurable results for our clients.' },
  { icon: Eye,    title: 'Radical Transparency', desc: 'No hidden fees, no smoke and mirrors. You always know exactly where your investment is going.' },
  { icon: Heart,  title: 'Client-Obsessed',      desc: "Your success is the only metric we care about. We treat every client's business like our own." },
  { icon: Globe,  title: 'Global Perspective',   desc: 'We bring international best practices and diverse insights to every project we take on.' },
  { icon: Award,  title: 'Excellence Always',    desc: "We don't ship mediocre. Every deliverable meets the highest standard of quality." },
  { icon: Clock,  title: 'Speed & Reliability',  desc: 'Fast execution without cutting corners. We deliver on time, every time.' },
];

const defaultTeam = [
  { name: 'Jitesh Bawaskar', role: 'Founder', specialty: 'AI Strategy & Business Development', initials: 'JB', color: '#2B80F0' },
];

const defaultMilestones = [
  { year: '2020', event: 'MetLink Founded',      desc: 'Started as a 3-person digital marketing consultancy in Mumbai.' },
  { year: '2021', event: 'AI Division Launch',   desc: 'Expanded into AI development, delivering first custom ML models.' },
  { year: '2022', event: '50 Clients Milestone', desc: 'Crossed 50 active clients across 10+ industries globally.' },
  { year: '2023', event: 'Software Studio',       desc: 'Launched full-service software development — web, mobile, cloud.' },
  { year: '2024', event: 'Global Expansion',      desc: 'Serving clients in 15+ countries with a 40+ person remote team.' },
  { year: '2025', event: 'AI-First Agency',       desc: "Positioned as India's leading AI marketing & development agency." },
];

const defaultStats = [['5+','Years'],['80+','Clients'],['150+','Projects'],['40+','Team']];

export default async function CompanyPage() {
  const [companyData, valuesData, teamData, timelineData, statsData] = await Promise.all([
    getSection<Record<string,string>>('company'),
    getSection<{ title: string; desc: string }[]>('values'),
    getSection<typeof defaultTeam>('team'),
    getSection<typeof defaultMilestones>('timeline'),
    getSection<{ value: string; label: string }[]>('stats'),
  ]);

  const valuesMerged = (Array.isArray(valuesData) && valuesData.length ? valuesData : defaultValues)
    .map((v, i) => ({ ...defaultValues[i % defaultValues.length], ...v }));

  const statsMerged = Array.isArray(statsData) && statsData.length
    ? statsData.map((s: { value: string; label: string }) => [s.value, s.label])
    : defaultStats;

  return (
    <CompanyClient
      company={companyData ?? {}}
      valuesList={valuesMerged}
      teamList={Array.isArray(teamData) && teamData.length ? teamData : defaultTeam}
      milestonesList={Array.isArray(timelineData) && timelineData.length ? timelineData : defaultMilestones}
      statsList={statsMerged}
    />
  );
}
