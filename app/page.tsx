import { getSection } from '@/lib/get-section';
import HomeClient, { HeroCMS } from './home-client';

// Static fallbacks (same as in home-client)
const defaultHero: HeroCMS = { badge:'AI-First Digital Agency', headline1:'We build', headline2:'AI systems', headline3:'that scale', subheadline:'Strategy, design, and engineering — one team shipping production AI for ambitious brands. From idea to live product in days.', cta1Text:'Start building with AI', cta1Href:'/contact', cta2Text:'View our work', cta2Href:'/portfolio', stat1Value:'150+', stat1Label:'Projects', stat2Value:'80+', stat2Label:'Clients', stat3Value:'$10M+', stat3Label:'Revenue', stat4Value:'94%', stat4Label:'Retention' };

const defaultClients = [
  { name: 'TechFlow',   industry: 'SaaS',           color: '#2B80F0' },
  { name: 'FinEdge',    industry: 'FinTech',         color: '#10B981' },
  { name: 'NexaCart',   industry: 'E-Commerce',      color: '#F59E0B' },
  { name: 'HealthSync', industry: 'Healthcare',      color: '#EF4444' },
  { name: 'PropX',      industry: 'Real Estate',     color: '#8B5CF6' },
  { name: 'DataCore',   industry: 'Analytics',       color: '#06B6D4' },
  { name: 'GrowthLabs', industry: 'Growth Agency',   color: '#EC4899' },
  { name: 'CloudBase',  industry: 'Infrastructure',  color: '#3ECF8E' },
];

const defaultTestimonials = [
  { quote: "MetLink shipped our AI customer support agent in 6 days. Support load dropped 65% in the first month.", name: 'Sarah K.', title: 'VP Product · Series B SaaS', metric: '65%', metricLabel: 'fewer support tickets', stars: 5 },
  { quote: "Their performance marketing team 4x'd our ROAS in 90 days. I've never seen results move this fast.", name: 'Marcus T.', title: 'CMO · DTC Brand', metric: '4×', metricLabel: 'return on ad spend', stars: 5 },
  { quote: "The software they built scaled from 0 to 50k users without a single architecture change. Remarkable.", name: 'Priya S.', title: 'CTO · FinTech Startup', metric: '50k', metricLabel: 'users without re-arch', stars: 5 },
];

const defaultWhyUs = [
  { title: 'End-to-End Partner',  desc: 'Strategy, design, dev, and deployment — one accountable team, no handoffs.' },
  { title: 'AI-First Execution',  desc: 'Every project integrates cutting-edge AI to deliver compounding results.' },
  { title: 'Real-Time Insights',  desc: 'Live KPI dashboards. Zero ambiguity on what your investment is doing.' },
  { title: 'Ship in 7 Days',      desc: 'No lengthy discovery. First working deliverables in one week, guaranteed.' },
  { title: 'Measurable ROI',      desc: 'We define success metrics upfront and own every single one of them.' },
  { title: 'Scalable Systems',    desc: 'Built to grow from 10 to 10 million users without re-architecting.' },
];

const defaultSteps = [
  { num: '01', title: 'Discover & Define',  desc: 'Deep-dive strategy session. We map your goals and find where AI creates the most leverage.' },
  { num: '02', title: 'Build & Integrate',  desc: 'We ship working systems in days, not months. Modular, tested, integrated into your stack.' },
  { num: '03', title: 'Scale & Optimize',   desc: 'We monitor, retrain, and evolve continuously — performance compounds over time.' },
];

export const dynamic = 'force-dynamic';

export default async function Page() {
  const [hero, clientsData, testimonialsData, whyusData, processData] = await Promise.all([
    getSection<HeroCMS>('hero'),
    getSection<typeof defaultClients>('clients'),
    getSection<typeof defaultTestimonials>('testimonials'),
    getSection<typeof defaultWhyUs>('whyus'),
    getSection<typeof defaultSteps>('process'),
  ]);

  // Merge CMS text into whyUs while preserving Icon references from static data
  const whyUsMerged = (Array.isArray(whyusData) && whyusData.length ? whyusData : defaultWhyUs)
    .map((w, i) => ({ ...defaultWhyUs[i % defaultWhyUs.length], ...w })) as typeof defaultWhyUs;

  return (
    <HomeClient
      cmsHero={hero ?? defaultHero}
      cmsClients={Array.isArray(clientsData) && clientsData.length ? clientsData : defaultClients}
      cmsTestimonials={Array.isArray(testimonialsData) && testimonialsData.length ? testimonialsData : defaultTestimonials}
      cmsWhyUs={whyUsMerged}
      cmsSteps={Array.isArray(processData) && processData.length ? processData : defaultSteps}
    />
  );
}
