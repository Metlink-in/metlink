'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, TrendingUp, Shield, Zap, BarChart2, Users, ChevronDown, Megaphone, Palette, Bot, Code } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

/* ─── Brand icons ───────────────────────────────────────────── */

function BrandIcon({ name }: { name: string }) {
  switch (name) {
    case 'monday.com':
      return <svg viewBox="0 0 36 12" width="72" height="24" fill="none"><circle cx="6" cy="6" r="6" fill="#F62B54"/><circle cx="18" cy="6" r="6" fill="#FDAB3D"/><circle cx="30" cy="6" r="6" fill="#00CA72"/></svg>;
    case 'Notion':
      return <svg viewBox="0 0 24 24" width="44" height="44"><path fill="white" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>;
    case 'Klaviyo':
      return <svg viewBox="0 0 24 24" width="44" height="44"><path fill="#FFDE00" d="M16.63 19.2c.84.665 1.883 1.05 3.037 1.05H21V3.75h-1.333c-1.154 0-2.197.386-3.037 1.05l-8.04 6.313a1.875 1.875 0 000 2.774zM3 3.75v16.5h1.875V3.75H3z"/></svg>;
    case 'OpenAI':
      return <svg viewBox="0 0 24 24" width="44" height="44" fill="white"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.496v2.999l-2.597 1.5-2.607-1.5z"/></svg>;
    case 'Claude':
      return <svg viewBox="0 0 24 24" width="44" height="44" fill="#D4A27F"><path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128-4.72.128v2.877zm14.583-8.966l-3.943 1.004-.106.127.085.152 3.974.884-.01-2.167zM12 .012C5.373.012 0 5.373 0 12c0 6.626 5.373 12 12 12 6.626 0 12-5.373 12-12 0-6.626-5.373-12-12-12zM9.009 16.97c-.375.23-.93.286-1.36.152l-4.166-2.486c-.43-.26-.591-.767-.358-1.138l2.45-4.047c.23-.382.77-.498 1.198-.27l4.047 2.295 1.037-.695-1.037-3.98c-.117-.463.118-.95.577-1.082l4.684-1.333c.46-.13.934.148 1.06.624l1.33 4.686c.13.46-.148.934-.624 1.06l-3.98 1.036-.696 1.038 2.295 4.047c.228.43.114.97-.27 1.198l-4.048 2.45c-.38.23-.872.158-1.137-.358l-2.486-4.167-.23-1.36.845-1.434-.846-.692z"/></svg>;
    case 'n8n':
      return <svg viewBox="0 0 24 24" width="44" height="44" fill="none"><circle cx="5" cy="12" r="3.5" fill="#EA4B71"/><circle cx="19" cy="12" r="3.5" fill="#EA4B71"/><circle cx="12" cy="5" r="3.5" fill="#FF6B9A"/><circle cx="12" cy="19" r="3.5" fill="#FF6B9A"/><line x1="8.5" y1="12" x2="15.5" y2="12" stroke="#EA4B71" strokeWidth="1.5"/><line x1="12" y1="8.5" x2="12" y2="15.5" stroke="#EA4B71" strokeWidth="1.5"/></svg>;
    case 'Make':
      return <svg viewBox="0 0 24 21" width="48" height="42" fill="none"><rect x="0" y="0" width="24" height="5" rx="2.5" fill="#7B2FF7"/><rect x="0" y="8" width="24" height="5" rx="2.5" fill="#A855F7"/><rect x="0" y="16" width="24" height="5" rx="2.5" fill="#C084FC"/></svg>;
    case 'Zapier':
      return <svg viewBox="0 0 24 24" width="44" height="44" fill="#FF4A00"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 13.5h-3.532l2.496 2.497-1.48 1.48L12 15l-2.5 2.477-1.48-1.48L10.516 13.5H7.016v-3h3.5L8.02 8.003l1.48-1.48L12 9l2.5-2.477 1.48 1.48L13.484 10.5h3.532v3z"/></svg>;
    case 'Slack':
      return <svg viewBox="0 0 24 24" width="44" height="44" fill="none"><path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z"/><path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.527 2.527 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.527 2.527 0 012.522-2.521h6.312z"/><path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.162 0a2.528 2.528 0 012.523 2.522v6.312z"/><path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zm0-1.271a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.162a2.528 2.528 0 01-2.522 2.523h-6.313z"/></svg>;
    case 'Stripe':
      return <svg viewBox="0 0 24 24" width="44" height="44" fill="#635BFF"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/></svg>;
    case 'Supabase':
      return <svg viewBox="0 0 24 24" width="44" height="44" fill="#3ECF8E"><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.015.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.58L11.9 1.036z"/></svg>;
    case 'HubSpot':
      return <svg viewBox="0 0 24 24" width="44" height="44" fill="#FF7A59"><path d="M18.164 7.931V5.084a2.195 2.195 0 10-2.853 0v2.847a6.228 6.228 0 00-2.969 1.3L5.537 4.055a2.44 2.44 0 10-.883 1.341l7.697 5.13a6.28 6.28 0 00-.94 3.263 6.261 6.261 0 001.22 3.722l-2.49 1.754a1.998 1.998 0 10.77 1.595 1.99 1.99 0 00-.18-.825l2.49-1.754a6.258 6.258 0 004.587 1.987c3.452 0 6.25-2.797 6.25-6.249a6.255 6.255 0 00-5.894-6.288zm-1.156 9.521a3.27 3.27 0 110-6.541 3.27 3.27 0 010 6.541z"/></svg>;
    default:
      return <div className="w-5 h-5" />;
  }
}

/* ─── Data ──────────────────────────────────────────────────── */

const integrations = [
  'monday.com', 'Notion', 'Klaviyo', 'OpenAI', 'Claude', 'n8n',
  'Make', 'Zapier', 'Slack', 'Stripe', 'Supabase', 'HubSpot',
];

const services = [
  {
    num: '01', color: '#2B80F0', Icon: Megaphone,
    tabLabel: 'Marketing',
    title: 'Digital Marketing',
    subtitle: 'Performance Marketing Systems',
    tagline: 'Data-driven growth at scale.',
    desc: 'Performance marketing, SEO, and brand strategy that turns audiences into loyal customers with measurable ROI.',
    features: ['Performance Marketing', 'SEO & Content', 'Personal Branding', 'Social Media'],
    builds: ['Google & Meta ad campaigns', 'SEO content engines', 'Email & lifecycle flows', 'Analytics dashboards'],
    slug: 'digital-marketing',
    vizTitle: 'Campaign Dashboard',
    vizBars: [
      { label: 'ROAS', value: '4.2×', pct: 84 },
      { label: 'CTR', value: '8.7%', pct: 65 },
      { label: 'Conv Rate', value: '12.4%', pct: 72 },
      { label: 'CAC Drop', value: '38%', pct: 45 },
    ],
    vizMetrics: [
      { val: '$2.4M', label: 'Managed' },
      { val: '320%', label: 'Avg ROAS' },
      { val: '94%', label: 'Retention' },
    ],
  },
  {
    num: '02', color: '#D97706', Icon: Palette,
    tabLabel: 'Creative',
    title: 'Creative Media',
    subtitle: 'Visual Brand Systems',
    tagline: 'Visuals that stop the scroll.',
    desc: 'World-class production—brand identity to high-volume video—built for one goal: conversion.',
    features: ['Brand Identity', 'Video & UGC', 'Motion Design', 'Web & UI/UX'],
    builds: ['Brand identity & guidelines', 'Video & UGC production', 'Motion graphics', 'Web & UI/UX design'],
    slug: 'creative-media',
    vizTitle: 'Content Studio',
    vizBars: [
      { label: 'Brand Score', value: '96/100', pct: 96 },
      { label: 'Engagement', value: '+312%', pct: 78 },
      { label: 'Video Views', value: '2.4M', pct: 67 },
      { label: 'Conversion', value: '8.3%', pct: 62 },
    ],
    vizMetrics: [
      { val: '180+', label: 'Brands' },
      { val: '2.4M', label: 'Views' },
      { val: '98%', label: 'Approval' },
    ],
  },
  {
    num: '03', color: '#16A34A', Icon: Bot,
    tabLabel: 'AI Agents',
    title: 'AI & Automation',
    subtitle: 'Intelligent Automation Systems',
    tagline: 'Intelligent systems. Infinite scale.',
    desc: 'Cutting-edge AI agents and automation that transform operations and unlock compounding growth.',
    features: ['AI Agents', 'Data Science', 'ML Systems', 'Conversational AI'],
    builds: ['Custom AI agents & chatbots', 'Workflow automation pipelines', 'ML model integration', 'Data science & analytics'],
    slug: 'ai-automation',
    vizTitle: 'Automation Monitor',
    vizBars: [
      { label: 'Tasks Automated', value: '98.2%', pct: 98 },
      { label: 'Response Time', value: '<200ms', pct: 85 },
      { label: 'Accuracy', value: '97.8%', pct: 92 },
      { label: 'Cost Saved', value: '68%', pct: 68 },
    ],
    vizMetrics: [
      { val: '500K+', label: 'Daily Tasks' },
      { val: '68%', label: 'Cost Cut' },
      { val: '7 days', label: 'Deploy' },
    ],
  },
  {
    num: '04', color: '#2563EB', Icon: Code,
    tabLabel: 'Dev',
    title: 'Software Development',
    subtitle: 'Full-Stack Product Engineering',
    tagline: 'Code that scales. Systems that last.',
    desc: 'End-to-end product engineering—web, mobile, and cloud architecture built to scale.',
    features: ['Web & Mobile Apps', 'Cloud & APIs', 'AI Integration', 'Automation'],
    builds: ['Web & mobile applications', 'Cloud infrastructure & APIs', 'AI-powered features', 'DevOps & CI/CD pipelines'],
    slug: 'software-development',
    vizTitle: 'System Health',
    vizBars: [
      { label: 'Uptime', value: '99.99%', pct: 99 },
      { label: 'Load Time', value: '0.8s', pct: 88 },
      { label: 'Test Coverage', value: '94%', pct: 94 },
      { label: 'Deploy Freq', value: '12/day', pct: 75 },
    ],
    vizMetrics: [
      { val: '50K+', label: 'Users' },
      { val: '99.99%', label: 'Uptime' },
      { val: '3-6 wks', label: 'MVP' },
    ],
  },
];

const clients = [
  { name: 'TechFlow',   industry: 'SaaS',           color: '#2B80F0' },
  { name: 'FinEdge',    industry: 'FinTech',         color: '#10B981' },
  { name: 'NexaCart',   industry: 'E-Commerce',      color: '#F59E0B' },
  { name: 'HealthSync', industry: 'Healthcare',      color: '#EF4444' },
  { name: 'PropX',      industry: 'Real Estate',     color: '#8B5CF6' },
  { name: 'DataCore',   industry: 'Analytics',       color: '#06B6D4' },
  { name: 'GrowthLabs', industry: 'Growth Agency',   color: '#EC4899' },
  { name: 'CloudBase',  industry: 'Infrastructure',  color: '#3ECF8E' },
];

const testimonials = [
  {
    quote: "MetLink shipped our AI customer support agent in 6 days. Support load dropped 65% in the first month.",
    name: 'Sarah K.',
    title: 'VP Product · Series B SaaS',
    metric: '65%', metricLabel: 'fewer support tickets',
    stars: 5,
  },
  {
    quote: "Their performance marketing team 4x'd our ROAS in 90 days. I've never seen results move this fast.",
    name: 'Marcus T.',
    title: 'CMO · DTC Brand',
    metric: '4×', metricLabel: 'return on ad spend',
    stars: 5,
  },
  {
    quote: "The software they built scaled from 0 to 50k users without a single architecture change. Remarkable.",
    name: 'Priya S.',
    title: 'CTO · FinTech Startup',
    metric: '50k', metricLabel: 'users without re-arch',
    stars: 5,
  },
];

const stack = [
  { name: 'GPT-4o',      cat: 'OpenAI',        color: '#10B981' },
  { name: 'Claude 3.5',  cat: 'Anthropic',     color: '#C88040' },
  { name: 'Gemini 2.5',  cat: 'Google',        color: '#4285F4' },
  { name: 'LangChain',   cat: 'Orchestration', color: '#2B80F0' },
  { name: 'Pinecone',    cat: 'Vector DB',     color: '#16A34A' },
  { name: 'HuggingFace', cat: 'Open Source',   color: '#F97316' },
  { name: 'AWS / GCP',   cat: 'Cloud Infra',   color: '#F59E0B' },
  { name: 'MLflow',      cat: 'MLOps',         color: '#A855F7' },
  { name: 'LlamaIndex',  cat: 'Retrieval',     color: '#6366F1' },
  { name: 'Kubernetes',  cat: 'Infra',         color: '#326CE5' },
  { name: 'Next.js',     cat: 'Frontend',      color: '#E8E8E8' },
  { name: 'Supabase',    cat: 'Data',          color: '#3ECF8E' },
];

const whyUs = [
  { Icon: Users,    title: 'End-to-End Partner',  desc: 'Strategy, design, dev, and deployment — one accountable team, no handoffs.' },
  { Icon: Zap,      title: 'AI-First Execution',  desc: 'Every project integrates cutting-edge AI to deliver compounding results.' },
  { Icon: BarChart2,title: 'Real-Time Insights',  desc: 'Live KPI dashboards. Zero ambiguity on what your investment is doing.' },
  { Icon: TrendingUp,title:'Ship in 7 Days',      desc: 'No lengthy discovery. First working deliverables in one week, guaranteed.' },
  { Icon: CheckCircle,title:'Measurable ROI',     desc: 'We define success metrics upfront and own every single one of them.' },
  { Icon: Shield,   title: 'Scalable Systems',    desc: 'Built to grow from 10 to 10 million users without re-architecting.' },
];

const steps = [
  { num: '01', title: 'Discover & Define',  desc: 'Deep-dive strategy session. We map your goals and find where AI creates the most leverage.' },
  { num: '02', title: 'Build & Integrate',  desc: 'We ship working systems in days, not months. Modular, tested, integrated into your stack.' },
  { num: '03', title: 'Scale & Optimize',   desc: 'We monitor, retrain, and evolve continuously — performance compounds over time.' },
];

const faqData = [
  {
    q: 'How do I know AI automation will actually produce ROI?',
    a: 'We define success metrics before writing a single line of code. Every project comes with a clear ROI framework — whether that\'s reduced operational costs, faster turnaround, or direct revenue lift. We track and report on these metrics throughout the engagement so you always know what your investment is returning.',
  },
  {
    q: 'What\'s the difference between ChatGPT and a custom multi-agent AI system?',
    a: 'ChatGPT is a general-purpose tool. A custom AI system is built around your specific data, workflows, and business logic — it integrates with your stack, operates within your security perimeter, and optimizes for your exact use case. The difference in output quality and relevance is dramatic.',
  },
  {
    q: 'Can you integrate AI into our existing systems without disrupting operations?',
    a: 'Yes — that\'s core to what we do. We build modular integrations that connect to your existing tools (CRMs, ERPs, databases, APIs) without requiring a full-stack migration. Our deployment approach is incremental and rigorously tested, minimizing downtime to near zero.',
  },
  {
    q: 'How do you ensure AI security and data protection?',
    a: 'We implement data isolation by design — your data never trains public models without explicit consent. We use SOC 2 compliant infrastructure, enforce role-based access, encrypt data in transit and at rest, and conduct regular security reviews. GDPR, HIPAA, and SOC 2 compliance are standard for relevant industries.',
  },
  {
    q: 'What does working with MetLink look like — project vs retainer?',
    a: 'Both models are available. Project engagements have a defined scope, timeline, and deliverable — ideal for building a specific AI agent, dashboard, or product. Retainers give you an embedded team for continuous development and iteration. Most clients start with a project and transition to a retainer as results compound.',
  },
  {
    q: 'How long does it take to build an AI agent or custom application?',
    a: 'First working prototype: 5–7 business days. Production-ready v1: 3–6 weeks depending on integration complexity. We move fast because we\'ve solved these problems before — our reusable agent architecture means we\'re not starting from zero on most builds.',
  },
];

const BG   = '#07111F';
const BG2  = '#0B1628';
const BDR  = '1px solid rgba(255,255,255,0.05)';
const AC   = '#2B80F0';

/* ─── Component ─────────────────────────────────────────────── */

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState('01');

  return (
    <div className="w-full overflow-x-hidden" style={{ background: BG }}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: '#050B14', minHeight: '100vh' }}>

        {/* ── Background ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Fine dot grid */}
          <div className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.9 }} />
          {/* Horizontal line accents */}
          <div className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(transparent calc(100% - 1px), rgba(255,255,255,0.03) 1px)', backgroundSize: '100% 96px' }} />
          {/* Center mega glow */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px]"
            style={{ background: 'radial-gradient(ellipse at center, rgba(43,128,240,0.22) 0%, rgba(43,128,240,0.08) 40%, transparent 68%)', filter: 'blur(60px)' }} />
          {/* Top-left orb */}
          <div className="absolute -top-40 -left-20 w-[560px] h-[560px]"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 65%)', filter: 'blur(70px)' }} />
          {/* Bottom-right orb */}
          <div className="absolute bottom-0 right-0 w-[480px] h-[480px]"
            style={{ background: 'radial-gradient(circle, rgba(43,128,240,0.1) 0%, transparent 65%)', filter: 'blur(80px)' }} />
          {/* Vignette edges */}
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,11,20,0.7) 100%)' }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-48"
            style={{ background: 'linear-gradient(to top, #050B14 0%, transparent 100%)' }} />
        </div>

        {/* ── Floating card — left (deploy metric) ── */}
        <div className="absolute bottom-[24%] left-[4%] hidden xl:block animate-float" style={{ zIndex: 20, animationDelay: '0.6s', width: 180 }}>
          <div className="p-5 rounded-2xl"
            style={{ background: 'rgba(5,11,20,0.75)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)', backdropFilter: 'blur(28px)' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.22em]" style={{ color: 'rgba(255,255,255,0.3)' }}>Live</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#4ADE80' }}>Active</span>
            </div>
            <p style={{ color: '#FFFFFF', fontSize: '2.4rem', fontWeight: 200, letterSpacing: '-0.05em', lineHeight: 1 }}>7</p>
            <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>days to ship</p>
            {/* Mini bar chart */}
            <div className="flex items-end gap-1 mt-4 h-8">
              {[40,65,45,80,55,90,75].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? '#2B80F0' : 'rgba(43,128,240,0.25)' }} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Floating card — right top (testimonial) ── */}
        <div className="absolute top-[20%] right-[4%] w-[256px] hidden xl:block animate-float" style={{ zIndex: 20, animationDelay: '0.2s' }}>
          <div className="p-5 rounded-2xl"
            style={{ background: 'rgba(5,11,20,0.75)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)', backdropFilter: 'blur(28px)' }}>
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex gap-0.5">
                {[0,1,2,3,4].map(i => <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#FBBF24' }} />)}
              </div>
              <span className="text-[9px] uppercase tracking-[0.16em] px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.15)', color: 'rgba(251,191,36,0.7)' }}>5.0</span>
            </div>
            <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
              &ldquo;Shipped our AI agent in 6 days. Support tickets down 65%.&rdquo;
            </p>
            <div className="flex items-center gap-2.5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.75rem' }}>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-medium shrink-0"
                style={{ background: 'linear-gradient(135deg, #2B80F0, #1A6BD6)', color: '#fff' }}>S</div>
              <div>
                <p className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>Sarah K.</p>
                <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.28)' }}>VP Product · Series B</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Floating card — right bottom (ROAS metric) ── */}
        <div className="absolute bottom-[26%] right-[4%] w-[200px] hidden xl:block animate-float" style={{ zIndex: 20, animationDelay: '1s' }}>
          <div className="p-4 rounded-2xl"
            style={{ background: 'rgba(5,11,20,0.75)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)', backdropFilter: 'blur(28px)' }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.25)' }}>
                <TrendingUp className="w-3.5 h-3.5" style={{ color: '#4ADE80' }} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.3)' }}>ROAS</span>
            </div>
            <p style={{ color: '#4ADE80', fontSize: '1.9rem', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1 }}>4.2×</p>
            <p className="text-[11px] mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>avg. return on ad spend</p>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-14 text-center flex flex-col items-center">

          <FadeIn>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10 text-[11px] btn-outline"
              style={{ letterSpacing: '0.07em' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              AI Marketing &amp; Development Agency
              <span className="w-px h-3" style={{ background: 'rgba(255,255,255,0.15)' }} />
              <span style={{ color: '#4B9CF4' }}>150+ projects shipped</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.07}>
            <h1 className="mb-7"
              style={{ fontWeight: 200, lineHeight: 0.88, letterSpacing: '-0.055em', fontSize: 'clamp(3.6rem,10vw,9rem)' }}>
              <span style={{ color: 'rgba(255,255,255,0.9)', display: 'block' }}>We build</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #60A5FA 0%, #2B80F0 40%, #1D4ED8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>AI systems</span>
              <span style={{ color: 'rgba(255,255,255,0.85)', display: 'block' }}>that scale.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.13}>
            <p className="mb-10 max-w-[520px] mx-auto" style={{ color: 'rgba(255,255,255,0.38)', fontSize: '1.05rem', lineHeight: 1.9, fontWeight: 300 }}>
              Strategy, design, and engineering — one team shipping production AI for ambitious brands.
              From idea to live product in days.
            </p>
          </FadeIn>

          <FadeIn delay={0.19}>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Link href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-medium btn-primary">
                Start building with AI
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm btn-outline">
                View our work
              </Link>
            </div>
            {/* Social proof line */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {['#2B80F0','#16A34A','#D97706','#8B5CF6'].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-medium"
                    style={{ background: `${c}22`, borderColor: '#050B14', color: c, zIndex: 4 - i }}>
                    {['S','M','P','R'][i]}
                  </div>
                ))}
              </div>
              <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Trusted by <span style={{ color: 'rgba(255,255,255,0.55)' }}>80+ teams</span> across 12 countries
              </p>
            </div>
          </FadeIn>
        </div>

        {/* ── Stats strip ── */}
        <div className="relative z-10 pb-20 px-4">
          <div className="max-w-2xl mx-auto flex items-center justify-center"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            {[['150+','Projects Delivered'],['80+','Clients Worldwide'],['$10M+','Revenue Generated'],['94%','Retention Rate']].map(([val,lbl], i) => (
              <div key={lbl} className="flex-1 flex flex-col items-center py-7"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1 }}>{val}</p>
                <p className="text-[9px] uppercase tracking-[0.25em] mt-2" style={{ color: 'rgba(255,255,255,0.22)' }}>{lbl}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ══ INTEGRATIONS ════════════════════════════════════════ */}
      <section className="py-12 overflow-hidden" style={{ background: '#0B1628', borderTop: BDR, borderBottom: BDR }}>
        <FadeIn className="text-center mb-10 px-4">
          <p className="label-overline">Trusted Integrations &amp; Partners</p>
        </FadeIn>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-32 sm:w-48 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0B1628, transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-32 sm:w-48 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0B1628, transparent)' }} />
          <div style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', width: 'max-content', animation: 'scroll 55s linear infinite', alignItems: 'center', padding: '12px 0' }}>
              {[...integrations, ...integrations].map((name, i) => (
                <div key={i} className="inline-flex items-center gap-5 shrink-0 px-14">
                  <BrandIcon name={name} />
                  <span className="text-xl whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ════════════════════════════════════════════ */}
      <section id="services" className="py-20 sm:py-28" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <div>
              <p className="label-overline mb-4">Services</p>
              <h2 style={{ color: 'rgba(255,255,255,0.92)' }}>
                What we <span style={{ color: AC }}>build</span> for you.
              </h2>
            </div>
            <Link href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-normal btn-outline px-5 py-2.5 rounded-full">
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <div className="flex flex-col lg:flex-row gap-6">

            {/* Left: tab list */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-[196px] shrink-0 pb-1 lg:pb-0">
              {services.map(s => {
                const isActive = activeService === s.num;
                const SvcIcon = s.Icon;
                return (
                  <button key={s.num} onClick={() => setActiveService(s.num)}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 whitespace-nowrap lg:whitespace-normal w-full shrink-0"
                    style={{
                      background: isActive ? `${s.color}12` : 'rgba(255,255,255,0.025)',
                      border: `1px solid ${isActive ? `${s.color}35` : 'rgba(255,255,255,0.06)'}`,
                      borderLeft: `3px solid ${isActive ? s.color : 'transparent'}`,
                    }}>
                    <SvcIcon className="w-4 h-4 shrink-0" style={{ color: isActive ? s.color : 'rgba(255,255,255,0.3)' }} />
                    <span className="text-sm" style={{ color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.42)', fontWeight: isActive ? 500 : 400 }}>
                      {s.tabLabel}
                    </span>
                  </button>
                );
              })}
              <Link href="/contact"
                className="mt-2 px-4 py-3 rounded-xl text-sm text-center btn-outline hidden lg:block"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                Get Started
              </Link>
            </div>

            {/* Right: viz + content panels */}
            {services.filter(s => s.num === activeService).map(s => {
              const SvcIcon = s.Icon;
              return (
                <div key={s.num} className="flex flex-col md:flex-row gap-5 flex-1 min-w-0">

                  {/* Center: visualization card */}
                  <div className="md:w-[268px] shrink-0 p-6 rounded-2xl flex flex-col"
                    style={{ background: '#0C1117', border: '1px solid rgba(255,255,255,0.07)' }}>

                    {/* Card header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `${s.color}20`, border: `1px solid ${s.color}35` }}>
                          <SvcIcon className="w-4 h-4" style={{ color: s.color }} />
                        </div>
                        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 400 }}>{s.vizTitle}</span>
                      </div>
                      <span className="flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#4ADE80' }}>
                        <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                        Live
                      </span>
                    </div>

                    {/* Progress bars */}
                    <div className="space-y-4 mb-6 flex-1">
                      {s.vizBars.map(bar => (
                        <div key={bar.label}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.38)' }}>{bar.label}</span>
                            <span className="text-[11px] font-medium" style={{ color: s.color }}>{bar.value}</span>
                          </div>
                          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                            <div className="h-full rounded-full"
                              style={{ width: `${bar.pct}%`, background: `linear-gradient(to right, ${s.color}88, ${s.color})` }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      {s.vizMetrics.map(m => (
                        <div key={m.label} className="text-center">
                          <p className="font-medium leading-none mb-1.5" style={{ color: s.color, fontSize: '1rem', letterSpacing: '-0.03em' }}>{m.val}</p>
                          <p className="text-[9px] leading-tight" style={{ color: 'rgba(255,255,255,0.28)' }}>{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: description + features */}
                  <div className="flex-1 min-w-0 p-6 rounded-2xl flex flex-col"
                    style={{ background: '#0C1117', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <p className="text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: s.color }}>{s.num}</p>
                    <h3 className="mb-1" style={{ color: 'rgba(255,255,255,0.92)', fontWeight: 300, letterSpacing: '-0.025em' }}>{s.title}</h3>
                    <p className="text-sm mb-4" style={{ color: s.color, fontWeight: 400 }}>{s.subtitle}</p>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.42)', fontWeight: 300 }}>{s.desc}</p>

                    {/* Feature chips 2×2 */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {s.features.map(f => (
                        <div key={f} className="flex items-center gap-2 px-3 py-2.5 rounded-lg"
                          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.58)' }}>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* What we build */}
                    <div className="mb-8">
                      <p className="text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'rgba(255,255,255,0.28)' }}>What we build:</p>
                      <ul className="space-y-2">
                        {s.builds.map(b => (
                          <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.48)', fontWeight: 300 }}>
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: `${s.color}90` }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/services/${s.slug}`}
                      className="mt-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm self-start transition-all duration-200 hover:-translate-y-0.5"
                      style={{ background: `${s.color}15`, border: `1px solid ${s.color}35`, color: s.color, fontWeight: 400 }}>
                      Explore {s.tabLabel}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ OUR CLIENTS ════════════════════════════════════════ */}
      <section className="py-20 sm:py-24" style={{ background: BG2, borderTop: BDR, borderBottom: BDR }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="label-overline mb-5">Our Clients</p>
            <h2 style={{ color: 'rgba(255,255,255,0.92)' }}>
              Trusted by <span style={{ color: AC }}>ambitious teams</span>
            </h2>
            <p className="mt-5 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.38)', fontSize: '1rem', fontWeight: 300 }}>
              From early-stage startups to scaling enterprises — we partner with businesses that want to lead.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clients.map(c => (
              <StaggerItem key={c.name}>
                <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}30`; (e.currentTarget as HTMLElement).style.background = `${c.color}08`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg"
                    style={{ background: `${c.color}18`, border: `1px solid ${c.color}25`, color: c.color }}>
                    {c.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-normal" style={{ color: 'rgba(255,255,255,0.75)' }}>{c.name}</p>
                    <p className="text-[11px] mt-0.5 font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>{c.industry}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══ CLIENT SUCCESS STORIES ══════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="label-overline mb-5">Success Stories</p>
            <h2 style={{ color: 'rgba(255,255,255,0.92)' }}>
              What our clients <span style={{ color: AC }}>say</span>
            </h2>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col p-8 rounded-2xl h-full"
                  style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: '#FBBF24' }} />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {/* Metric */}
                  <div className="flex items-center gap-4 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="px-3 py-1.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <p className="leading-tight" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 300, fontSize: '1.25rem', letterSpacing: '-0.03em' }}>{t.metric}</p>
                      <p className="text-[10px] font-normal" style={{ color: 'rgba(255,255,255,0.3)' }}>{t.metricLabel}</p>
                    </div>
                    <div>
                      <p className="text-sm font-normal" style={{ color: 'rgba(255,255,255,0.7)' }}>{t.name}</p>
                      <p className="text-[11px] font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>{t.title}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══ PROCESS ════════════════════════════════════════════ */}
      <section id="process" className="py-20 sm:py-28" style={{ background: BG2, borderTop: BDR, borderBottom: BDR }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <p className="label-overline mb-5">How We Work</p>
            <h2 style={{ color: 'rgba(255,255,255,0.92)' }}>
              From idea to <span style={{ color: AC }}>live product</span>.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-normal" style={{ color: 'rgba(255,255,255,0.25)' }}>{step.num}</span>
                    <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                  </div>
                  <h3 className="mb-3" style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.15rem', fontWeight: 300, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)', fontWeight: 300 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECH STACK ═════════════════════════════════════════ */}
      <section id="stack" className="py-20 sm:py-28" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 max-w-xl">
            <p className="label-overline mb-5">Tech Stack</p>
            <h2 className="mb-5" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Powered by the <span style={{ color: AC }}>best</span> models.
            </h2>
            <p className="mb-6" style={{ color: 'rgba(255,255,255,0.38)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8 }}>
              Frontier LLMs, vector databases, and production MLOps tooling — AI systems that work at scale.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-normal transition-opacity hover:opacity-70"
              style={{ color: 'rgba(255,255,255,0.55)' }}>
              Explore AI services <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {stack.map(t => (
              <StaggerItem key={t.name}>
                <div className="flex flex-col gap-1 p-4 rounded-xl transition-all hover:-translate-y-0.5 hover:border-white/15"
                  style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-[13px] font-normal" style={{ color: 'rgba(255,255,255,0.72)' }}>{t.name}</p>
                  <p className="text-[11px] font-light" style={{ color: t.color }}>{t.cat}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══ WHY METLINK ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ background: BG2, borderTop: BDR }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <p className="label-overline mb-5">Why MetLink</p>
            <h2 style={{ color: 'rgba(255,255,255,0.92)' }}>
              What sets us <span style={{ color: AC }}>apart</span>.
            </h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item, i) => {
              const Icon = item.Icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 h-full"
                    style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,128,240,0.25)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: 'rgba(43,128,240,0.12)', border: '1px solid rgba(43,128,240,0.2)' }}>
                      <Icon className="w-4.5 h-4.5" style={{ color: AC }} />
                    </div>
                    <p className="text-[10px] font-normal mb-2" style={{ color: 'rgba(255,255,255,0.2)' }}>0{i + 1}</p>
                    <h3 className="mb-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 300, letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)', fontWeight: 300 }}>{item.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ background: BG2, borderTop: BDR }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="label-overline mb-5">Got Questions?</p>
            <h2 style={{ color: 'rgba(255,255,255,0.92)' }}>
              Frequently asked <span style={{ color: AC }}>questions</span>
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {faqData.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <FadeIn key={i} delay={i * 0.04}>
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.025)', border: isOpen ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.05)' }}>
                    <button
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : i)}>
                      <span className="text-sm font-normal" style={{ color: isOpen ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.55)' }}>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ color: 'rgba(255,255,255,0.25)' }} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5">
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn className="flex flex-wrap gap-3 justify-center mt-14">
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm btn-outline">
              Explore Our Work
            </Link>
            <Link href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm btn-primary">
              Get Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 sm:py-32" style={{ background: BG }}>
        <FadeIn className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="label-overline mb-6">Let&apos;s build together</p>
          <h2 className="mb-6" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Ready to scale with <span style={{ color: AC }}>AI?</span>
          </h2>
          <p className="mb-10" style={{ color: 'rgba(255,255,255,0.42)', fontWeight: 300 }}>
            Book a free 30-min strategy call. No commitments — just clarity on what AI can do for your business.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:hello@metlink.ai"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm btn-primary">
              Book your strategy call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link href="/services"
              className="inline-flex items-center px-8 py-4 rounded-full text-sm btn-outline">
              See services
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
