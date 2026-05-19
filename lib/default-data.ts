// Default site content — used as fallback when MongoDB has no data yet

export const defaults: Record<string, unknown> = {
  hero: {
    badge: 'AI-First Digital Agency',
    headline1: 'We build',
    headline2: 'AI systems',
    headline3: 'that scale',
    subheadline: 'Strategy, design, and engineering — one team shipping production AI for ambitious brands. From idea to live product in days.',
    cta1Text: 'Start building with AI',
    cta1Href: '/contact',
    cta2Text: 'View our work',
    cta2Href: '/portfolio',
    stat1Value: '150+', stat1Label: 'Projects',
    stat2Value: '80+',  stat2Label: 'Clients',
    stat3Value: '$10M+', stat3Label: 'Revenue',
    stat4Value: '94%',  stat4Label: 'Retention',
  },

  stats: [
    { value: '5+',   label: 'Years' },
    { value: '80+',  label: 'Clients' },
    { value: '150+', label: 'Projects' },
    { value: '40+',  label: 'Team' },
  ],

  clients: [
    { name: 'TechFlow',   industry: 'SaaS',           color: '#2B80F0' },
    { name: 'FinEdge',    industry: 'FinTech',         color: '#10B981' },
    { name: 'NexaCart',   industry: 'E-Commerce',      color: '#F59E0B' },
    { name: 'HealthSync', industry: 'Healthcare',      color: '#EF4444' },
    { name: 'PropX',      industry: 'Real Estate',     color: '#8B5CF6' },
    { name: 'DataCore',   industry: 'Analytics',       color: '#06B6D4' },
    { name: 'GrowthLabs', industry: 'Growth Agency',   color: '#EC4899' },
    { name: 'CloudBase',  industry: 'Infrastructure',  color: '#3ECF8E' },
  ],

  testimonials: [
    { quote: "MetLink shipped our AI customer support agent in 6 days. Support load dropped 65% in the first month.", name: 'Sarah K.', title: 'VP Product · Series B SaaS', metric: '65%', metricLabel: 'fewer support tickets', stars: 5 },
    { quote: "Their performance marketing team 4x'd our ROAS in 90 days. I've never seen results move this fast.", name: 'Marcus T.', title: 'CMO · DTC Brand', metric: '4×', metricLabel: 'return on ad spend', stars: 5 },
    { quote: "The software they built scaled from 0 to 50k users without a single architecture change. Remarkable.", name: 'Priya S.', title: 'CTO · FinTech Startup', metric: '50k', metricLabel: 'users without re-arch', stars: 5 },
  ],

  whyus: [
    { title: 'End-to-End Partner',    desc: 'Strategy, design, dev, and deployment — one accountable team, no handoffs.' },
    { title: 'AI-First Execution',    desc: 'Every project integrates cutting-edge AI to deliver compounding results.' },
    { title: 'Real-Time Insights',    desc: 'Live KPI dashboards. Zero ambiguity on what your investment is doing.' },
    { title: 'Ship in 7 Days',        desc: 'No lengthy discovery. First working deliverables in one week, guaranteed.' },
    { title: 'Measurable ROI',        desc: 'We define success metrics upfront and own every single one of them.' },
    { title: 'Scalable Systems',      desc: 'Built to grow from 10 to 10 million users without re-architecting.' },
  ],

  process: [
    { num: '01', title: 'Discover & Define',  desc: "Deep-dive strategy session. We map your goals and find where AI creates the most leverage." },
    { num: '02', title: 'Build & Integrate',  desc: "We ship working systems in days, not months. Modular, tested, integrated into your stack." },
    { num: '03', title: 'Scale & Optimize',   desc: "We monitor, retrain, and evolve continuously — performance compounds over time." },
  ],

  company: {
    aboutTitle: 'About MetLink',
    para1: 'MetLink was founded with a single conviction: that the gap between ambitious businesses and world-class digital execution doesn\'t have to exist.',
    para2: 'We\'re a full-service AI marketing and development agency — combining the strategic horsepower of a top-tier marketing firm with the technical depth of a software studio. We don\'t do cookie-cutter. Every engagement is custom-built around your goals.',
    para3: 'From brand identity to machine learning systems, from performance ads to enterprise software — we handle the full stack of what it takes to grow a modern digital business.',
    mission:  'To empower businesses with AI-powered marketing and technology that creates lasting competitive advantages.',
    vision:   'To become the most trusted AI marketing and development partner for ambitious businesses worldwide.',
    approach: 'Data-first strategy, creative excellence, and ruthless focus on metrics that actually move the needle.',
    promise:  'Transparent pricing, honest communication, and zero-compromise quality on every single project.',
  },

  values: [
    { title: 'Mission-Driven',       desc: 'Every decision we make is anchored to one goal — measurable results for our clients.' },
    { title: 'Radical Transparency', desc: 'No hidden fees, no smoke and mirrors. You always know exactly where your investment is going.' },
    { title: 'Client-Obsessed',      desc: "Your success is the only metric we care about. We treat every client's business like our own." },
    { title: 'Global Perspective',   desc: 'We bring international best practices and diverse insights to every project we take on.' },
    { title: 'Excellence Always',    desc: "We don't ship mediocre. Every deliverable meets the highest standard of quality." },
    { title: 'Speed & Reliability',  desc: 'Fast execution without cutting corners. We deliver on time, every time.' },
  ],

  timeline: [
    { year: '2020', event: 'MetLink Founded',       desc: 'Started as a 3-person digital marketing consultancy in Mumbai.' },
    { year: '2021', event: 'AI Division Launch',    desc: 'Expanded into AI development, delivering first custom ML models.' },
    { year: '2022', event: '50 Clients Milestone',  desc: 'Crossed 50 active clients across 10+ industries globally.' },
    { year: '2023', event: 'Software Studio',        desc: 'Launched full-service software development — web, mobile, cloud.' },
    { year: '2024', event: 'Global Expansion',       desc: 'Serving clients in 15+ countries with a 40+ person remote team.' },
    { year: '2025', event: 'AI-First Agency',        desc: "Positioned as India's leading AI marketing & development agency." },
  ],

  team: [
    { name: 'Jitesh Bawaskar', role: 'Founder', specialty: 'AI Strategy & Business Development', initials: 'JB', color: '#2B80F0' },
  ],

  contact: {
    email: 'hello@metlink.in',
    phone: '+91 123 456 7890',
    location: 'Mumbai, India',
    responseTime: '< 2 Hours',
    emailNote: 'Reply within 2 hours',
    phoneNote: '9AM – 6PM IST',
    locationNote: 'By appointment',
  },

  social: {
    twitter:  '#',
    linkedin: '#',
    github:   '#',
    instagram: '#',
  },

  footer: {
    tagline: 'AI-first marketing and high-performance software for ambitious businesses that want to lead.',
    copyright: 'MetLink. All rights reserved.',
  },
};
