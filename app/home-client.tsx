'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Megaphone, Palette, Bot, Code, ChevronLeft, ChevronRight, Target, Users, DollarSign, Repeat, CalendarDays, Video, FileText, Rocket } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';
import { CountUp } from '@/components/count-up';
import { Parallax } from '@/components/parallax';
import { SectionBackdrop } from '@/components/section-backdrop';

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


/* ─── Typewriter heading ─────────────────────────────────────── */

type Seg = { text: string; accent?: boolean; style?: React.CSSProperties };

function TypewriterH2({ segments, className, style, speed = 55 }: {
  segments: Seg[];
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
}) {
  const ref  = useRef<HTMLHeadingElement>(null);
  const [count, setCount]   = useState(0);
  const [active, setActive] = useState(false);
  const full = segments.reduce((a, s) => a + s.text, '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setCount(0); setActive(true); }
      else                  { setActive(false); setCount(0); }
    }, { threshold: 0.35 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active || count >= full.length) return;
    const t = setTimeout(() => setCount(c => c + 1), speed);
    return () => clearTimeout(t);
  }, [active, count, full.length, speed]);

  let rem = count;
  const nodes = segments.map((seg, i) => {
    if (rem <= 0) return null;
    const shown = seg.text.slice(0, rem);
    rem = Math.max(0, rem - seg.text.length);
    if (!shown) return null;
    const s = seg.accent ? { color: '#2B80F0', ...seg.style } : seg.style;
    const parts = shown.split('\n');
    return (
      <span key={i} style={s}>
        {parts.map((p, j) => j === 0 ? p : [<br key={j} />, p])}
      </span>
    );
  });

  return (
    <h2 ref={ref} className={className} style={style}>
      {nodes}
      {active && count < full.length && (
        <span style={{ color: '#2B80F0', animation: 'blink 0.8s step-end infinite', marginLeft: 1 }}>|</span>
      )}
    </h2>
  );
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
    num: '02', color: '#2B80F0', Icon: Palette,
    tabLabel: 'Creative',
    title: 'Creative Media',
    subtitle: 'Visual Brand Systems',
    tagline: 'Visuals that stop the scroll.',
    desc: 'World-class production brand identity to high-volume video built for one goal: conversion.',
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
    num: '03', color: '#2B80F0', Icon: Bot,
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
    num: '04', color: '#2B80F0', Icon: Code,
    tabLabel: 'Dev',
    title: 'Software Development',
    subtitle: 'Full-Stack Product Engineering',
    tagline: 'Code that scales. Systems that last.',
    desc: 'End-to-end product engineering web, mobile, and cloud architecture built to scale.',
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



function ClientCard({ c }: { c: { name: string; industry: string; color: string; logo?: string } }) {
  return (
    <div
      className="flex flex-col items-center justify-center shrink-0 gap-3"
    >
      {c.logo && (
        <img
          src={c.logo}
          alt={c.name}
          style={{
            height: 72,
            width: 'auto',
            maxWidth: 200,
            objectFit: 'contain',
            opacity: 0.92,
            filter: 'brightness(1.15) contrast(1.05)',
            transition: 'opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.opacity = '1';
            el.style.transform = 'scale(1.1)';
            el.style.filter = 'brightness(1.3) contrast(1.1) drop-shadow(0 0 12px rgba(255,255,255,0.25))';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.opacity = '0.92';
            el.style.transform = 'scale(1)';
            el.style.filter = 'brightness(1.15) contrast(1.05)';
          }}
        />
      )}
      {c.name && (
        <p
          className={c.logo ? 'text-sm font-bold tracking-wide whitespace-nowrap' : 'font-black text-lg tracking-wide whitespace-nowrap'}
          style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.25s ease' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
        >
          {c.name}
        </p>
      )}
    </div>
  );
}



const techStack = [
  {
    category: 'Programming Languages',
    tools: [
      { name: 'JavaScript', logo: '/tools/javascript.svg' },
      { name: 'TypeScript', logo: '/tools/typescript.svg' },
      { name: 'Python',     logo: '/tools/python.svg' },
      { name: 'Go',         logo: '/tools/go.svg' },
      { name: 'Rust',       logo: '/tools/rust.svg' },
      { name: 'Java',       logo: '/tools/java.svg' },
      { name: 'C++',        logo: '/tools/cplusplus.svg' },
      { name: 'Scala',      logo: '/tools/scala.svg' },
    ],
  },
  {
    category: 'Frontend',
    tools: [
      { name: 'React',        logo: '/tools/react.svg' },
      { name: 'Next.js',      logo: '/tools/nextjs.svg', invert: true },
      { name: 'Vue.js',       logo: '/tools/vuejs.svg' },
      { name: 'Angular',      logo: '/tools/angular.svg' },
      { name: 'Tailwind CSS', logo: '/tools/tailwindcss.svg' },
      { name: 'Figma',        logo: '/tools/figma.svg' },
      { name: 'Framer',       logo: '/tools/framer.svg' },
      { name: 'GraphQL',      logo: '/tools/graphql.svg' },
    ],
  },
  {
    category: 'Backend & APIs',
    tools: [
      { name: 'Node.js',    logo: '/tools/nodejs.svg' },
      { name: 'FastAPI',    logo: '/tools/fastapi.svg' },
      { name: 'Django',     logo: '/tools/django.svg' },
      { name: 'Express',    logo: '/tools/express.svg', invert: true },
      { name: 'GraphQL',    logo: '/tools/graphql.svg' },
      { name: 'Supabase',   logo: '/tools/supabase.svg' },
      { name: 'Redis',      logo: '/tools/redis.svg' },
      { name: 'PostgreSQL', logo: '/tools/postgresql.svg' },
    ],
  },
  {
    category: 'Databases',
    tools: [
      { name: 'PostgreSQL', logo: '/tools/postgresql.svg' },
      { name: 'MySQL',      logo: '/tools/mysql.svg' },
      { name: 'MongoDB',    logo: '/tools/mongodb.svg' },
      { name: 'Redis',      logo: '/tools/redis.svg' },
      { name: 'Supabase',   logo: '/tools/supabase.svg' },
      { name: 'Snowflake',  logo: '/tools/snowflake.svg' },
    ],
  },
  {
    category: 'GenAI Models',
    tools: [
      { name: 'OpenAI',       logo: '/tools/openai.svg', invert: true },
      { name: 'Anthropic',    logo: '/tools/anthropic.svg', invert: true },
      { name: 'Gemini',       logo: '/tools/googlegemini.svg' },
      { name: 'Hugging Face', logo: '/tools/huggingface.svg' },
      { name: 'LangChain',    logo: '/tools/langchain.svg' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    tools: [
      { name: 'AWS',            logo: '/tools/aws.svg' },
      { name: 'Google Cloud',   logo: '/tools/gcp.svg' },
      { name: 'Azure',          logo: '/tools/azure.svg' },
      { name: 'Docker',         logo: '/tools/docker.svg' },
      { name: 'Kubernetes',     logo: '/tools/kubernetes.svg' },
      { name: 'Terraform',      logo: '/tools/terraform.svg' },
      { name: 'GitHub Actions', logo: '/tools/github-actions.svg' },
      { name: 'Vercel',         logo: '/tools/vercel.svg' },
    ],
  },
  {
    category: 'Digital Marketing',
    tools: [
      { name: 'Google Ads', logo: '/tools/google-ads.svg' },
      { name: 'Meta Ads',   logo: '/tools/meta-ads.svg' },
      { name: 'GA4',        logo: '/tools/ga4.svg' },
      { name: 'HubSpot',    logo: '/tools/hubspot.svg' },
      { name: 'SEMrush',    logo: '/tools/semrush.svg' },
    ],
  },
  {
    category: 'Automation',
    tools: [
      { name: 'n8n',    logo: '/tools/n8n.svg' },
      { name: 'Make',   logo: '/tools/make.svg' },
      { name: 'Zapier', logo: '/tools/zapier.svg' },
      { name: 'Slack',  logo: '/tools/slack.svg' },
      { name: 'Notion', logo: '/tools/notion.svg' },
      { name: 'Stripe', logo: '/tools/stripe.svg' },
    ],
  },
];




const BG   = '#07111F';
const BG2  = '#091421';
const BDR  = '1px solid rgba(255,255,255,0.022)';
const AC   = '#2B80F0';

/* ─── CMS types ─────────────────────────────────────────────── */
export interface HeroCMS { badge:string; headline1:string; headline2:string; headline3:string; subheadline:string; cta1Text:string; cta1Href:string; cta2Text:string; cta2Href:string; stat1Value:string; stat1Label:string; stat2Value:string; stat2Label:string; stat3Value:string; stat3Label:string; stat4Value:string; stat4Label:string; }

interface Props {
  cmsHero: HeroCMS;
  cmsClients: { name: string; industry: string; color: string; logo?: string }[];
  cmsTestimonials: { quote: string; name: string; title: string; metric: string; metricLabel: string; stars?: number }[];
  cmsWhyUs: { title: string; desc: string }[];
  cmsSteps: { num: string; title: string; desc: string }[];
}

/* ─── FAQ Section ───────────────────────────────────────────── */

const faqs = [
  { q: 'How do I know AI automation will actually produce ROI for my business?', a: 'We start every engagement by mapping your existing workflows and identifying high-impact automation opportunities. Before writing a single line of code we define measurable KPIs: cost savings, time reduction, conversion lift, and tie our delivery milestones to those numbers.' },
  { q: 'Can you integrate AI into my existing systems without disrupting my current tech stack?', a: 'Yes. We design integrations as thin adapters around your existing infrastructure, no rip-and-replace required. We support REST, GraphQL, webhooks, and direct database connections, so your current tools keep working while AI enhances them.' },
  { q: 'How do you ensure AI security and data protection?', a: 'All models run inside your cloud environment or a dedicated VPC. Your data never flows through third-party training pipelines. We follow SOC 2-aligned practices: encryption at rest and in transit, role-based access, audit logging, and regular penetration testing.' },
  { q: 'What does working with you look like: project-based or ongoing support?', a: 'Both. For discrete builds we run fixed-scope sprints with weekly demos. For ongoing work we operate as an embedded team with a dedicated Slack channel, sprint planning, and a shared roadmap. Most clients start with a project and move to a retainer once they see results.' },
  { q: 'How long does it take to build an AI agent or custom application?', a: 'A focused AI agent is typically live in 2 to 4 weeks. A full-stack application with AI features runs 6 to 12 weeks depending on integrations. We share a working prototype within the first 7 days of every engagement so you see real progress immediately.' },
];

function FAQSection() {
  const [pinned, setPinned]   = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const isOpen = (i: number) => pinned === i || hovered === i;
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" style={{ background: '#07111F' }}>
      <SectionBackdrop />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <TypewriterH2
            style={{ color: 'rgba(255,255,255,0.92)' }}
            segments={[{ text: 'Frequently ' }, { text: 'Asked Questions', accent: true }]}
          />
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
            Get answers to common questions about our services
          </p>
        </FadeIn>

        <div className="flex flex-col gap-3 mb-14">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div
                className="rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  background: isOpen(i) ? 'rgba(43,128,240,0.07)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isOpen(i) ? 'rgba(43,128,240,0.25)' : 'rgba(255,255,255,0.08)'}`,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setPinned(pinned === i ? null : i)}
              >
                <div className="flex items-center justify-between gap-4 px-6 py-4">
                  <span className="flex items-center" style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 500 }}>
                    <span className="inline-block rounded-full shrink-0" style={{ width: 8, height: 8, background: '#2B80F0', marginRight: 12 }} />
                    {faq.q}
                  </span>
                  <span
                    onClick={e => { if (isOpen(i)) { e.stopPropagation(); setPinned(null); setHovered(null); } }}
                    className="shrink-0 transition-transform duration-300 flex items-center justify-center"
                    style={{ transform: isOpen(i) ? 'rotate(45deg)' : 'rotate(0deg)', color: '#2B80F0' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </div>
                {isOpen(i) && (
                  <div className="px-6 pb-5" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <span style={{ color: '#2B80F0', fontWeight: 700, marginRight: 8 }}>→</span>{faq.a}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="flex flex-wrap gap-3 justify-center">
          <Link href="https://calendly.com/jitesh-bawaskar-metlinkai/30min"
            className="group inline-flex items-center gap-2.5 font-medium btn-primary">
            Start building with AI
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link href="/portfolio"
            className="inline-flex items-center gap-2 btn-outline">
            View our work
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}

/* ─── Hero background videos + copy ─────────────────────────── */

const heroVideos = ['/hero/hero.mp4', '/hero/1.mp4'];

const heroCopy = {
  h1:  'AI Systems That',
  h2:  'Generate Growth',
  sub: 'From lead generation to operations automation, we build intelligent systems that increase revenue and reduce costs.',
};

/* ─── Get Started steps ─────────────────────────────────────── */

const getStartedSteps = [
  { Icon: CalendarDays, title: '1. Contact Us',        desc: 'Fill out the contact form protected by NDA, book a calendar and schedule a Zoom Meeting with our experts.' },
  { Icon: Video,        title: '2. Get a Consultation', desc: 'Get on a call with our team to know the feasibility of your project idea.' },
  { Icon: FileText,     title: '3. Get a Cost Estimate', desc: 'Based on the project requirements, we share a project proposal with budget and timeline estimates.' },
  { Icon: Rocket,       title: '4. Project Kickoff',    desc: 'Once the project is signed, we bring together a team from a range of disciplines to kick start your project.' },
];

function HeroVideoBg({ active }: { active: number }) {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === active) {
        try { vid.currentTime = 0; } catch { /* ignore */ }
        vid.play().catch(() => { /* autoplay can be blocked; ignore */ });
      } else {
        vid.pause();
      }
    });
  }, [active]);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 30%, #0E2A4A 0%, #071018 55%, #050B14 100%)' }}>
      {heroVideos.map((src, i) => (
        <video
          key={src}
          ref={el => { refs.current[i] = el; }}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

/* ─── Component ─────────────────────────────────────────────── */

export default function HomeClient({ cmsHero, cmsClients, cmsTestimonials, cmsWhyUs }: Props) {
  const [activeService, setActiveService]       = useState('01');
  const [activeStack, setActiveStack]           = useState(0);
  const [stackVisible, setStackVisible]         = useState(true);
  const [stackPaused, setStackPaused]           = useState(false);
  const [integrationsPaused, setIntegrationsPaused] = useState(false);
  const [heroSlide, setHeroSlide]               = useState(0);

  // Auto-advance hero background videos one by one.
  useEffect(() => {
    const t = setInterval(() => setHeroSlide(p => (p + 1) % heroVideos.length), 8500);
    return () => clearInterval(t);
  }, []);

  const hero          = cmsHero;
  const clientsList   = cmsClients;
  const testimonialsList = cmsTestimonials;
  const whyUsList     = cmsWhyUs;

  useEffect(() => {
    if (stackPaused) return;
    const t = setTimeout(() => {
      setStackVisible(false);
      setTimeout(() => {
        setActiveStack(p => (p + 1) % techStack.length);
        setStackVisible(true);
      }, 220);
    }, 3400);
    return () => clearTimeout(t);
  }, [activeStack, stackPaused]);

  const navigateStack = (dir: 1 | -1) => {
    setStackVisible(false);
    setTimeout(() => {
      setActiveStack(p => (p + dir + techStack.length) % techStack.length);
      setStackVisible(true);
    }, 200);
  };

  return (
    <div className="w-full overflow-x-hidden" style={{ background: BG }}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden flex flex-col min-h-[82svh] sm:min-h-screen" style={{ background: '#050B14', paddingTop: '96px' }}>

        {/* ── Background ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Cycling video background */}
          <HeroVideoBg active={heroSlide} />
          {/* Dark scrim for text legibility */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(5,11,20,0.74) 0%, rgba(5,11,20,0.55) 38%, rgba(5,11,20,0.8) 76%, #050B14 100%)' }} />
          {/* Brand tint */}
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 34%, rgba(43,128,240,0.20) 0%, transparent 60%)', mixBlendMode: 'screen' }} />
          {/* Fine dot grid */}
          <div className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.5 }} />
          {/* Vignette edges */}
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 45%, rgba(2,2,2,0.62) 100%)' }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-48"
            style={{ background: 'linear-gradient(to top, #020202 0%, transparent 100%)' }} />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 text-center">

          <FadeIn delay={0.07}>
            <h1 className="mb-5"
              style={{ fontWeight: 200, lineHeight: 1.08, letterSpacing: '-0.04em', fontSize: 'clamp(2.75rem,7vw,6.5rem)' }}>
              <span style={{ color: 'rgba(255,255,255,0.92)', display: 'block', paddingBottom: '0.04em' }}>{heroCopy.h1}</span>
              <span style={{
                display: 'block',
                paddingBottom: '0.08em',
                background: 'linear-gradient(135deg, #5FA8FF 0%, #2B80F0 40%, #1A6BD6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{heroCopy.h2}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.13}>
            <p className="mb-8 max-w-[560px] mx-auto" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.75, fontWeight: 300 }}>
              {heroCopy.sub}
            </p>
          </FadeIn>

          <FadeIn delay={0.19}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href={hero.cta1Href}
                className="group inline-flex items-center gap-2.5 font-medium btn-primary">
                {hero.cta1Text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href={hero.cta2Href}
                className="inline-flex items-center gap-2 btn-outline">
                {hero.cta2Text}
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* ── Stats cards ── */}
        <div className="relative z-10 pb-10 pt-2 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { val: hero.stat1Value, lbl: hero.stat1Label, Icon: Target },
              { val: hero.stat2Value, lbl: hero.stat2Label, Icon: Users },
              { val: hero.stat3Value, lbl: hero.stat3Label, Icon: DollarSign },
              { val: hero.stat4Value, lbl: hero.stat4Label, Icon: Repeat },
            ].map(({ val, lbl, Icon }, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Icon className="w-3.5 h-3.5 mb-1.5" style={{ color: '#5FA8FF' }} />
                <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: 'clamp(1rem,1.4vw,1.25rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}><CountUp value={val} /></p>
                <p className="text-[9px] uppercase tracking-[0.15em] mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{lbl}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ══ INTEGRATIONS ════════════════════════════════════════ */}
      <section className="relative isolate py-12 overflow-hidden" style={{ background: '#0B1628', borderTop: BDR, borderBottom: BDR }}>
        <SectionBackdrop behind />
        <FadeIn className="text-center mb-10 px-4">
          <p className="label-overline">Trusted Integrations &amp; Partners</p>
        </FadeIn>
        <div
          className="relative"
          onMouseEnter={() => setIntegrationsPaused(true)}
          onMouseLeave={() => setIntegrationsPaused(false)}
        >
          <div className="absolute inset-y-0 left-0 w-32 sm:w-48 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0B1628, transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-32 sm:w-48 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0B1628, transparent)' }} />
          <div style={{ overflow: 'hidden' }}>
            <div style={{
              display: 'flex', width: 'max-content',
              animation: 'scroll 55s linear infinite',
              animationPlayState: integrationsPaused ? 'paused' : 'running',
              alignItems: 'center', padding: '12px 0',
            }}>
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
      <section id="services" className="relative overflow-hidden py-20 sm:py-28" style={{ background: BG }}>
        <SectionBackdrop />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <div>
              <p className="label-overline mb-4">Services</p>
              <TypewriterH2
                style={{ color: 'rgba(255,255,255,0.92)' }}
                segments={[{ text: 'What we ' }, { text: 'build', accent: true }, { text: ' for you' }]}
              />
            </div>
            <Link href="/services"
              className="inline-flex items-center gap-1.5 font-normal btn-outline">
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <div className="flex flex-col lg:flex-row gap-6">

            {/* Left: tab list (pinned on desktop) */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-[196px] shrink-0 pb-1 lg:pb-0 lg:sticky lg:top-28 lg:self-start">
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
              <Link href="https://calendly.com/jitesh-bawaskar-metlinkai/30min"
                className="mt-2 text-center btn-outline hidden lg:block"
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
      <section className="relative isolate overflow-hidden py-16 sm:py-20" style={{ background: BG2, borderTop: BDR, borderBottom: BDR }}>
        <SectionBackdrop behind />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top accent line */}
          <div className="h-px w-full mb-9"
            style={{ background: 'linear-gradient(to right, transparent, rgba(43,128,240,0.45) 18%, rgba(43,128,240,0.45) 82%, transparent)' }} />

          <FadeIn className="text-center mb-10">
            <p className="label-overline">Trusted by World&apos;s Best</p>
          </FadeIn>

          {/* Infinite auto-scroll loop, pauses on hover */}
          <div
            className="marquee-track relative mb-10"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
          >
            <div className="animate-scroll-fwd gap-16" style={{ width: 'max-content' }}>
              {[...clientsList, ...clientsList].map((c, i) => (
                <ClientCard key={`loop-${i}`} c={c} />
              ))}
            </div>
          </div>

          {/* Bottom divider with label */}
          <div className="flex items-center gap-5">
            <span className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(43,128,240,0.4))' }} />
            <span className="label-overline whitespace-nowrap">More than 15 brands</span>
            <span className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(43,128,240,0.4))' }} />
          </div>
        </div>
      </section>

      {/* ══ CLIENT SUCCESS STORIES ══════════════════════════════ */}
      {testimonialsList.length > 0 && (
      <section className="relative isolate overflow-hidden py-20 sm:py-28" style={{ background: BG }}>
        <SectionBackdrop behind />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="label-overline mb-5">Success Stories</p>
            <TypewriterH2
              style={{ color: 'rgba(255,255,255,0.92)' }}
              segments={[{ text: 'What our clients ' }, { text: 'say', accent: true }]}
            />
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-5">
            {testimonialsList.map((t, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col p-8 rounded-2xl h-full"
                  style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars ?? 5 }).map((_, j) => (
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
      )}

      {/* ══ GET STARTED ════════════════════════════════════════ */}
      <section id="process" className="relative overflow-hidden py-20 sm:py-28" style={{ background: BG2, borderTop: BDR, borderBottom: BDR }}>
        <SectionBackdrop tint="#10B981" tint2="#2B80F0" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="label-overline mb-5">How It Works</p>
            <TypewriterH2
              style={{ color: 'rgba(255,255,255,0.92)' }}
              segments={[{ text: 'Get Started ' }, { text: 'Today', accent: true }]}
            />
            <p className="mt-5 max-w-lg mx-auto text-base font-light" style={{ color: 'rgba(255,255,255,0.40)', lineHeight: 1.7 }}>
              A simple four-step path from first hello to project kickoff.
            </p>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {getStartedSteps.map(({ Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="flex flex-col group">
                  <div className="flex items-center justify-center mb-7 transition-all duration-300 group-hover:scale-105"
                    style={{ width: 64, height: 64, borderRadius: 14,
                      background: 'rgba(43,128,240,0.10)',
                      border: '1px solid rgba(43,128,240,0.40)' }}>
                    <Icon className="w-7 h-7" strokeWidth={1.6} style={{ color: '#5FA8FF' }} />
                  </div>
                  <h3 className="mb-3" style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.01em' }}>{title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══ TECH STACK ═════════════════════════════════════════ */}
      <section id="stack" className="relative overflow-hidden py-20 sm:py-28" style={{ background: BG }}>
        <SectionBackdrop tint="#06B6D4" tint2="#8B5CF6" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span style={{ color: AC, fontSize: 14 }}>✦</span>
              <p className="label-overline" style={{ color: AC, letterSpacing: '0.28em' }}>Our Tech Stack</p>
            </div>
            <TypewriterH2
              style={{ color: 'rgba(255,255,255,0.92)' }}
              segments={[{ text: 'Tech Capabilities Powering\nDigital Transformation' }]}
            />
          </FadeIn>

          {/* Card */}
          <FadeIn>
            <div className="relative">

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 0 1px rgba(43,128,240,0.04), 0 24px 60px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={() => setStackPaused(true)}
              onMouseLeave={() => setStackPaused(false)}
            >
              {/* Thin accent top line */}
              <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(43,128,240,0.5) 40%, rgba(95,168,255,0.7) 50%, rgba(43,128,240,0.5) 60%, transparent)' }} />

              {/* Fade wrapper, smooth category transitions */}
              <div style={{ opacity: stackVisible ? 1 : 0, transform: stackVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.98)', transition: stackVisible ? 'opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)' : 'opacity 0.18s ease, transform 0.18s ease', willChange: 'opacity, transform' }}>

              {/* Category title with divider */}
              <div className="flex items-center gap-6 px-10 pt-9 pb-2">
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
                <h3 className="font-semibold whitespace-nowrap"
                  style={{ color: 'rgba(255,255,255,0.88)', letterSpacing: '0.04em', fontSize: '0.95rem' }}>
                  {techStack[activeStack].category}
                </h3>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
              </div>

              {/* Tool logos grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 px-6 pb-5">
                {techStack[activeStack].tools.map((tool) => (
                  <div key={tool.name}
                    className="flex flex-col items-center justify-center gap-3 py-8 px-4 transition-all duration-200 cursor-default rounded-xl"
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = 'rgba(255,255,255,0.06)';
                      const img = el.querySelector('img') as HTMLImageElement;
                      if (img) img.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = 'transparent';
                      const img = el.querySelector('img') as HTMLImageElement;
                      if (img) img.style.transform = 'scale(1)';
                    }}>
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      style={{
                        height: 54,
                        width: 'auto',
                        maxWidth: 108,
                        objectFit: 'contain',
                        filter: (tool as { invert?: boolean }).invert
                          ? 'brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.3))'
                          : 'brightness(1.15) saturate(1.3) drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
                        transition: 'filter 0.2s ease, transform 0.2s ease',
                      }}
                    />
                    <span className="text-[12px] text-center leading-tight font-medium"
                      style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>

              </div>{/* /fade wrapper */}
            </div>{/* /card */}

            {/* Below-card navigation */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <button
                onClick={() => navigateStack(-1)}
                aria-label="Previous category"
                className="flex items-center gap-1.5 text-sm transition-all duration-200 hover:translate-x-[-2px] active:scale-95"
                style={{ color: 'rgba(255,255,255,0.35)', background: 'none', border: 'none' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#5FA8FF'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)'}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>


              <button
                onClick={() => navigateStack(1)}
                aria-label="Next category"
                className="flex items-center gap-1.5 text-sm transition-all duration-200 hover:translate-x-[2px] active:scale-95"
                style={{ color: 'rgba(255,255,255,0.35)', background: 'none', border: 'none' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#5FA8FF'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)'}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            </div>{/* /relative wrapper */}
          </FadeIn>
        </div>
      </section>

      {/* ══ WHY METLINK ════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: BG2, borderTop: BDR }}>

        <SectionBackdrop />
        {/* Ambient background glow (parallax) */}
        <Parallax speed={70}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </Parallax>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header, centred */}
          <FadeIn className="text-center mb-16">
            <p className="label-overline mb-5">Why MetLink</p>
            <TypewriterH2
              style={{ color: 'rgba(255,255,255,0.92)' }}
              segments={[{ text: 'What sets us ' }, { text: 'apart', accent: true }]}
            />
            <p className="mt-5 max-w-lg mx-auto text-base font-light" style={{ color: 'rgba(255,255,255,0.40)', lineHeight: 1.7 }}>
              One accountable team, AI-native execution, and results you can measure.
            </p>
          </FadeIn>

          {/* Divided columns */}
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border-t border-l border-white/[0.08]">
            {whyUsList.map((item, i) => {
              const color = '#2B80F0';
              const icon = ['/tools/hubspot.svg','/tools/openai.svg','/tools/ga4.svg','/tools/vercel.svg','/tools/google-ads.svg','/tools/kubernetes.svg'][i];
              return (
                <StaggerItem key={item.title}>
                  <div
                    className="group relative h-full p-8 overflow-hidden transition-colors duration-300"
                    style={{ borderRight: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                    onMouseMove={e => {
                      const el = e.currentTarget as HTMLElement;
                      const r = el.getBoundingClientRect();
                      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
                      el.style.setProperty('--my', `${e.clientY - r.top}px`);
                    }}
                  >
                    {/* Mouse-following blue reflection */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `radial-gradient(240px circle at var(--mx,50%) var(--my,30%), ${color}22, transparent 60%)` }} />

                    <div className="relative">
                      {/* Icon tile */}
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                        style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.16)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={icon} alt={item.title} width={30} height={30} style={{ objectFit: 'contain', filter: 'brightness(1.45) saturate(1.2) drop-shadow(0 0 6px rgba(255,255,255,0.18))' }} />
                      </div>

                      {/* Title */}
                      <h3 className="text-[1.25rem] font-semibold mb-3 leading-snug"
                        style={{ color: 'rgba(255,255,255,0.92)', letterSpacing: '-0.02em' }}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.50)', fontWeight: 300 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          {/* Bottom CTA */}
          <FadeIn className="flex justify-center mt-12">
            <Link href="/services" className="group inline-flex items-center gap-2 btn-outline">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeIn>

        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════ */}
      <FAQSection />

    </div>
  );
}