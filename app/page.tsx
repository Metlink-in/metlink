'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Star, TrendingUp, Shield, Zap, BarChart2, Users, Megaphone, Palette, Bot, Code } from 'lucide-react';
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

/* Tool icon — uses downloaded SVG where available, falls back to inline SVG */
const TOOL_IMG: Record<string, { src: string; bg: string }> = {
  'Google Ads':          { src: '/tools/google-ads.svg',     bg: 'rgba(66,133,244,0.18)' },
  'Meta Ads':            { src: '/tools/meta-ads.svg',        bg: 'rgba(24,119,242,0.18)' },
  'Google Analytics 4':  { src: '/tools/ga4.svg',             bg: 'rgba(227,116,0,0.18)' },
  'HubSpot':             { src: '/tools/hubspot.svg',         bg: 'rgba(255,122,89,0.18)' },
  'SEMrush':             { src: '/tools/semrush.svg',         bg: 'rgba(255,100,45,0.18)' },
  'Figma':               { src: '/tools/figma.svg',           bg: 'rgba(242,78,30,0.18)' },
  'Framer':              { src: '/tools/framer.svg',          bg: 'rgba(0,85,255,0.18)' },
  'Claude 3.5':          { src: '/tools/anthropic.svg',       bg: 'rgba(212,162,127,0.18)' },
  'LangChain':           { src: '/tools/langchain.svg',       bg: 'rgba(0,199,165,0.18)' },
  'n8n / Make':          { src: '/tools/n8n.svg',             bg: 'rgba(234,75,113,0.18)' },
  'Next.js':             { src: '/tools/nextjs.svg',          bg: 'rgba(255,255,255,0.1)' },
  'Supabase':            { src: '/tools/supabase.svg',        bg: 'rgba(62,207,142,0.18)' },
  'Node.js':             { src: '/tools/nodejs.svg',          bg: 'rgba(51,153,51,0.18)' },
  'Kubernetes':          { src: '/tools/kubernetes.svg',      bg: 'rgba(50,108,229,0.18)' },
  'GitHub Actions':      { src: '/tools/github-actions.svg',  bg: 'rgba(255,255,255,0.1)' },
};

function ToolIcon({ name }: { name: string }) {
  if (TOOL_IMG[name]) {
    const { src, bg } = TOOL_IMG[name];
    return (
      <div style={{ width: 60, height: 60, borderRadius: 16, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={src} alt={name} style={{ width: 38, height: 38, objectFit: 'contain' }} />
      </div>
    );
  }
  /* ── Inline SVG fallbacks for tools without downloaded images ── */
  const fallbacks: Record<string, { bg: string; el: React.ReactNode }> = {
    'Klaviyo':    { bg: 'rgba(255,222,0,0.18)',   el: <svg viewBox="0 0 24 24" width="34" height="34" fill="#FFDE00"><path d="M16.63 19.2c.84.665 1.883 1.05 3.037 1.05H21V3.75h-1.333c-1.154 0-2.197.386-3.037 1.05l-8.04 6.313a1.875 1.875 0 000 2.774zM3 3.75v16.5h1.875V3.75H3z"/></svg> },
    'After Effects': { bg: 'rgba(153,153,255,0.18)', el: <svg viewBox="0 0 24 24" width="34" height="34"><rect width="24" height="24" rx="5" fill="#00005B"/><path fill="#9999FF" d="M5.5 17l2.8-8 2.8 8M6.4 14.5h3.8M13 9.5v7M13 13.5h2.5c1.1 0 2-.9 2-2s-.9-2-2-2H13"/></svg> },
    'Premiere Pro': { bg: 'rgba(153,153,255,0.18)', el: <svg viewBox="0 0 24 24" width="34" height="34"><rect width="24" height="24" rx="5" fill="#00005B"/><path fill="#9999FF" d="M4 9.5h3c1.4 0 2.5 1.1 2.5 2.5S8.4 14.5 7 14.5H5.2V17H4V9.5zm1.2 4h1.8c.7 0 1.3-.6 1.3-1.5s-.6-1.4-1.3-1.4H5.2V13.5zM12 9.5h3c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-1.8V17H12V9.5zm1.2 4h1.8c.7 0 1.3-.6 1.3-1.5s-.6-1.4-1.3-1.4h-1.8V13.5z"/></svg> },
    'Midjourney': { bg: 'rgba(255,255,255,0.1)',   el: <svg viewBox="0 0 24 24" width="34" height="34" fill="white"><path d="M2 20.5h3L12 5l7 15.5h3L12 1 2 20.5z"/></svg> },
    'CapCut':     { bg: 'rgba(255,255,255,0.1)',   el: <svg viewBox="0 0 24 24" width="34" height="34"><rect width="24" height="24" rx="6" fill="#111"/><path fill="white" d="M16 8H8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-2.5 6l-3.5-2.5v5l3.5-2.5z"/></svg> },
    'GPT-4o':     { bg: 'rgba(255,255,255,0.1)',   el: <svg viewBox="0 0 24 24" width="34" height="34" fill="white"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/></svg> },
    'AWS / GCP':  { bg: 'rgba(255,153,0,0.18)',   el: <svg viewBox="0 0 32 20" width="44" height="28"><path fill="#FF9900" d="M8.7 7.8c0-.4.1-.7.2-1 .2-.3.4-.5.7-.7.5-.3 1-.5 1.6-.5.4 0 .8.1 1.1.3.4.2.6.5.8.8.1.3.2.6.2 1v.1H12v-.1c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.2-.2.1-.3.3-.4.5-.1.2-.1.4-.1.7v1.5c0 .3 0 .5.1.7.1.2.2.4.4.5.2.1.4.2.6.2.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7v-.1H13v.1c0 .4-.1.7-.3 1-.2.3-.4.5-.7.7-.3.1-.7.2-1.1.2-.7 0-1.2-.2-1.6-.5-.3-.2-.5-.4-.6-.7-.1-.3-.2-.6-.2-1V7.8zm5.3 3V7.4h1l2.2 3.1V7.4H18v4.4h-1l-2.2-3v3H14zm4.2 0V7.4h2c.5 0 1 .1 1.3.4.3.3.5.6.5 1.1 0 .2-.1.5-.2.7-.1.2-.3.3-.5.4.3.1.5.3.6.5.2.2.3.5.3.8 0 .4-.2.8-.5 1-.3.3-.7.4-1.2.4h-2.3zm1-2.5h1c.2 0 .4 0 .5-.2.1-.1.2-.3.2-.4 0-.2-.1-.4-.2-.4-.1-.1-.3-.1-.5-.1h-1v1.1zm0 1.7h1.1c.3 0 .4-.1.5-.2.1-.2.2-.3.2-.5s-.1-.3-.2-.4c-.1-.1-.3-.2-.5-.2H19v1.3z"/><path fill="#4285F4" d="M2 17l2.5-5h23l2.5 5H2zm2.5 1.5h20l1 2H3.5l1-2z" opacity="0.8"/></svg> },
    'Pinecone':   { bg: 'rgba(87,209,127,0.18)',  el: <svg viewBox="0 0 24 24" width="34" height="34"><rect width="24" height="24" rx="6" fill="#0a0a0a"/><path fill="#57D17F" d="M12 3L21 19H3L12 3z"/><line x1="12" y1="19" x2="12" y2="22" stroke="#57D17F" strokeWidth="1.5"/><circle cx="12" cy="23" r="1" fill="#57D17F"/></svg> },
    'LlamaIndex': { bg: 'rgba(124,58,237,0.18)',  el: <svg viewBox="0 0 24 24" width="34" height="34"><rect width="24" height="24" rx="6" fill="#1A1A2E"/><path fill="#7C3AED" d="M4 19c.8-5 3-8 8-10 5 2 7 5 8 10H4z"/><ellipse cx="9" cy="14" rx="1.5" ry="2" fill="white"/><ellipse cx="15" cy="14" rx="1.5" ry="2" fill="white"/><circle cx="9" cy="14" r="0.7" fill="#1A1A2E"/><circle cx="15" cy="14" r="0.7" fill="#1A1A2E"/></svg> },
  };
  const fb = fallbacks[name];
  if (fb) {
    return (
      <div style={{ width: 52, height: 52, borderRadius: 14, background: fb.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {fb.el}
      </div>
    );
  }
  return (
    <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(43,128,240,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#5FA8FF', fontWeight: 700 }}>
      {name.slice(0, 2).toUpperCase()}
    </div>
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

function ClientCard({ c }: { c: { name: string; industry: string; color: string } }) {
  return (
    <div
      className="flex flex-col items-center gap-3.5 rounded-2xl text-center transition-all duration-300 cursor-default shrink-0"
      style={{
        width: 148,
        padding: '22px 16px 18px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${c.color}45`;
        el.style.background  = `${c.color}0C`;
        el.style.transform   = 'translateY(-4px)';
        el.style.boxShadow   = `0 12px 32px ${c.color}18`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(255,255,255,0.08)';
        el.style.background  = 'rgba(255,255,255,0.04)';
        el.style.transform   = 'translateY(0)';
        el.style.boxShadow   = 'none';
      }}
    >
      <div
        className="flex items-center justify-center font-black text-xl"
        style={{
          width: 52, height: 52,
          borderRadius: 14,
          background: `${c.color}18`,
          border: `1px solid ${c.color}30`,
          color: c.color,
        }}
      >
        {c.name[0]}
      </div>
      <div>
        <p className="text-[13.5px] font-medium" style={{ color: 'rgba(255,255,255,0.82)' }}>{c.name}</p>
        <p className="text-[11px] mt-0.5 font-light tracking-wide" style={{ color: 'rgba(255,255,255,0.38)' }}>{c.industry}</p>
      </div>
    </div>
  );
}

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


const BG   = '#07111F';
const BG2  = '#0B1628';
const BDR  = '1px solid rgba(255,255,255,0.05)';
const AC   = '#2B80F0';

/* ─── Component ─────────────────────────────────────────────── */

export default function HomePage() {
  const [activeService, setActiveService]       = useState('01');
  const [activeStack, setActiveStack]           = useState(0);
  const [stackVisible, setStackVisible]         = useState(true);
  const [stackPaused, setStackPaused]           = useState(false);
  const [integrationsPaused, setIntegrationsPaused] = useState(false);

  useEffect(() => {
    if (stackPaused) return;
    const t = setTimeout(() => {
      setStackVisible(false);
      setTimeout(() => {
        setActiveStack(p => (p + 1) % techStack.length);
        setStackVisible(true);
      }, 220);
    }, 2200);
    return () => clearTimeout(t);
  }, [activeStack, stackPaused]);

  return (
    <div className="w-full overflow-x-hidden" style={{ background: BG }}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden flex flex-col" style={{ background: '#050B14', height: '100vh', paddingTop: '80px' }}>

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
            style={{ background: 'radial-gradient(circle, rgba(43,128,240,0.14) 0%, transparent 65%)', filter: 'blur(70px)' }} />
          {/* Bottom-right orb */}
          <div className="absolute bottom-0 right-0 w-[480px] h-[480px]"
            style={{ background: 'radial-gradient(circle, rgba(43,128,240,0.1) 0%, transparent 65%)', filter: 'blur(80px)' }} />
          {/* Vignette edges */}
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(2,2,2,0.7) 100%)' }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-48"
            style={{ background: 'linear-gradient(to top, #020202 0%, transparent 100%)' }} />
        </div>

        {/* ── Floating card — left (deploy metric) ── */}
        <div className="absolute bottom-[24%] left-[4%] hidden xl:block animate-float" style={{ zIndex: 20, animationDelay: '0.6s', width: 180 }}>
          <div className="p-5 rounded-2xl"
            style={{ background: 'rgba(2,2,2,0.75)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)', backdropFilter: 'blur(28px)' }}>
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

        {/* ── Floating card — right bottom (ROAS metric) ── */}
        <div className="absolute bottom-[26%] right-[4%] w-[200px] hidden xl:block animate-float" style={{ zIndex: 20, animationDelay: '1s' }}>
          <div className="p-4 rounded-2xl"
            style={{ background: 'rgba(2,2,2,0.75)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)', backdropFilter: 'blur(28px)' }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.25)' }}>
                <TrendingUp className="w-3.5 h-3.5" style={{ color: '#4ADE80' }} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.3)' }}>ROAS</span>
            </div>
            <p style={{ color: '#4ADE80', fontSize: '1.9rem', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1 }}>4.2×</p>
            <p className="text-[11px] mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>avg. return on ad spend</p>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 text-center">

          <FadeIn delay={0.07}>
            <h1 className="mb-5"
              style={{ fontWeight: 200, lineHeight: 0.9, letterSpacing: '-0.055em', fontSize: 'clamp(3rem,7.5vw,7rem)' }}>
              <span style={{ color: 'rgba(255,255,255,0.9)', display: 'block' }}>We build</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #5FA8FF 0%, #2B80F0 40%, #1A6BD6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>AI systems</span>
              <span style={{ color: 'rgba(255,255,255,0.85)', display: 'block' }}>that scale</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.13}>
            <p className="mb-8 max-w-[480px] mx-auto" style={{ color: 'rgba(255,255,255,0.38)', fontSize: '1rem', lineHeight: 1.75, fontWeight: 300 }}>
              Strategy, design, and engineering — one team shipping production AI for ambitious brands. From idea to live product in days.
            </p>
          </FadeIn>

          <FadeIn delay={0.19}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium btn-primary">
                Start building with AI
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm btn-outline">
                View our work
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* ── Stats strip ── */}
        <div className="relative z-10 pb-10 px-4">
          <div className="max-w-2xl mx-auto flex items-center justify-center"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            {[['150+','Projects'],['80+','Clients'],['$10M+','Revenue'],['94%','Retention']].map(([val,lbl], i) => (
              <div key={lbl} className="flex-1 flex flex-col items-center py-5"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(1.3rem,2vw,1.75rem)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1 }}>{val}</p>
                <p className="text-[9px] uppercase tracking-[0.25em] mt-1.5" style={{ color: 'rgba(255,255,255,0.22)' }}>{lbl}</p>
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
      <section id="services" className="py-20 sm:py-28" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <div>
              <p className="label-overline mb-4">Services</p>
              <h2 style={{ color: 'rgba(255,255,255,0.92)' }}>
                What we <span style={{ color: AC }}>build</span> for you
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
      <section className="py-20 sm:py-28 overflow-hidden" style={{ background: BG2, borderTop: BDR, borderBottom: BDR }}>
        <FadeIn className="text-center mb-14 px-4">
          <p className="label-overline mb-5">Our Clients</p>
          <h2 style={{ color: 'rgba(255,255,255,0.92)' }}>
            Trusted by <span style={{ color: AC }}>ambitious teams</span>
          </h2>
          <p className="mt-5 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.40)', fontSize: '1rem', fontWeight: 300 }}>
            From early-stage startups to scaling enterprises — we partner with businesses that want to lead.
          </p>
        </FadeIn>

        {/* Single continuous loop */}
        <div
          className="marquee-track relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div className="animate-scroll-fwd gap-6" style={{ width: 'max-content' }}>
            {[...clients, ...clients].map((c, i) => (
              <ClientCard key={`loop-${i}`} c={c} />
            ))}
          </div>
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
      <section id="process" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

        {/* Circuit grid bg */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(43,128,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(43,128,240,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        {/* Centre radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(43,128,240,0.09) 0%, transparent 70%)',
        }} />
        {/* Scanlines overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)',
        }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header — centred */}
          <FadeIn className="text-center mb-20">
            <p className="label-overline mb-5">How We Work</p>
            <h2 style={{ color: 'rgba(255,255,255,0.92)' }}>
              From idea to <span style={{ color: AC }}>live product</span>
            </h2>
            <p className="mt-5 max-w-lg mx-auto text-base font-light" style={{ color: 'rgba(255,255,255,0.40)', lineHeight: 1.7 }}>
              A focused three-phase process designed for speed, quality, and compounding results.
            </p>
          </FadeIn>

          {/* Step cards — icon 64px at p-8 (32px) padding → centre at 32+32 = 64px */}
          <div className="relative grid md:grid-cols-3 gap-6">

            {/* Glowing connector line at icon centres */}
            <div className="absolute hidden md:block"
              style={{ top: 64, left: 'calc(33.33% + 26px)', right: 'calc(33.33% + 26px)', height: 2,
                background: 'linear-gradient(to right, rgba(43,128,240,0.7), rgba(95,168,255,0.5) 50%, rgba(43,128,240,0.7))',
                boxShadow: '0 0 10px rgba(43,128,240,0.4)',
              }} />
            {/* Node circles at 64px centre → top = 64 - 10 = 54 */}
            {[0,1].map(k => (
              <div key={k} className="absolute hidden md:flex items-center justify-center"
                style={{ top: 54, left: k === 0 ? 'calc(33.33% - 10px)' : 'calc(66.66% - 10px)', width: 20, height: 20,
                  background: '#000000', border: '1.5px solid rgba(43,128,240,0.7)', borderRadius: '50%',
                  boxShadow: '0 0 12px rgba(43,128,240,0.5)',
                }}>
                <ArrowRight className="w-3 h-3" style={{ color: '#5FA8FF' }} />
              </div>
            ))}

            {steps.map((step, i) => {
              const stepSvgs = [
                /* Discover & Define — magnifying glass + target */
                <svg key="d" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="#2B80F0" strokeWidth="2.2"/>
                  <circle cx="11" cy="11" r="3.5" fill="#2B80F0" fillOpacity="0.25" stroke="#5FA8FF" strokeWidth="1.4"/>
                  <circle cx="11" cy="11" r="1.2" fill="#5FA8FF"/>
                  <line x1="16.5" y1="16.5" x2="23" y2="23" stroke="#2B80F0" strokeWidth="2.4" strokeLinecap="round"/>
                </svg>,
                /* Build & Integrate — circuit/code chip */
                <svg key="b" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <rect x="7" y="7" width="12" height="12" rx="3" fill="#1A6BD6" fillOpacity="0.3" stroke="#2B80F0" strokeWidth="1.8"/>
                  <rect x="10" y="10" width="6" height="6" rx="1.5" fill="#5FA8FF"/>
                  <line x1="13" y1="2" x2="13" y2="7" stroke="#2B80F0" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="13" y1="19" x2="13" y2="24" stroke="#2B80F0" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="2" y1="13" x2="7" y2="13" stroke="#2B80F0" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="19" y1="13" x2="24" y2="13" stroke="#2B80F0" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>,
                /* Scale & Optimize — rocket */
                <svg key="s" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M13 3C13 3 20 6 20 14L16 18H10L6 14C6 6 13 3 13 3Z" fill="#1A6BD6" fillOpacity="0.35" stroke="#2B80F0" strokeWidth="1.8" strokeLinejoin="round"/>
                  <circle cx="13" cy="12" r="2.5" fill="#5FA8FF"/>
                  <path d="M10 18L8 23L13 21L18 23L16 18" fill="#2B80F0" fillOpacity="0.5" stroke="#5FA8FF" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>,
              ];
              const highlights = [
                ['Strategy & goal mapping', 'AI opportunity audit', 'Scope & timeline'],
                ['Rapid prototyping', 'System integration', 'Testing & QA'],
                ['Live performance tracking', 'Model retraining', 'Continuous growth'],
              ][i];
              return (
                <FadeIn key={step.num} delay={i * 0.12}>
                  <div
                    className="relative group flex flex-col rounded-2xl transition-all duration-300 h-full"
                    style={{
                      background: 'rgba(12,12,12,0.95)',
                      border: '1px solid rgba(43,128,240,0.18)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(43,128,240,0.55)';
                      el.style.background  = 'rgba(10,18,38,0.98)';
                      el.style.transform   = 'translateY(-6px)';
                      el.style.boxShadow   = '0 28px 60px rgba(43,128,240,0.18), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(43,128,240,0.15)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(43,128,240,0.18)';
                      el.style.background  = 'rgba(12,12,12,0.95)';
                      el.style.transform   = 'translateY(0)';
                      el.style.boxShadow   = 'inset 0 1px 0 rgba(255,255,255,0.04)';
                    }}
                  >
                    {/* Glowing top border */}
                    <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
                      style={{ background: 'linear-gradient(to right, transparent, rgba(43,128,240,0.9) 50%, transparent)' }} />

                    {/* Corner bracket accents — TL */}
                    <div className="absolute top-3 left-3 w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ borderTop: '1.5px solid #2B80F0', borderLeft: '1.5px solid #2B80F0', borderRadius: '2px 0 0 0' }} />
                    {/* TR */}
                    <div className="absolute top-3 right-3 w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ borderTop: '1.5px solid #2B80F0', borderRight: '1.5px solid #2B80F0', borderRadius: '0 2px 0 0' }} />
                    {/* BL */}
                    <div className="absolute bottom-3 left-3 w-5 h-5 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                      style={{ borderBottom: '1.5px solid #5FA8FF', borderLeft: '1.5px solid #5FA8FF', borderRadius: '0 0 0 2px' }} />
                    {/* BR */}
                    <div className="absolute bottom-3 right-3 w-5 h-5 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                      style={{ borderBottom: '1.5px solid #5FA8FF', borderRight: '1.5px solid #5FA8FF', borderRadius: '0 0 2px 0' }} />


                    <div className="relative flex flex-col flex-1 p-8">

                      {/* Icon — 64px so connector line centres at 32+32=64px */}
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: 'rgba(43,128,240,0.12)',
                          border: '1px solid rgba(43,128,240,0.45)',
                          boxShadow: '0 0 0 5px rgba(43,128,240,0.07), 0 0 22px rgba(43,128,240,0.2)',
                        }}>
                        {stepSvgs[i]}
                      </div>

                      {/* Bracket-style phase label */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <span style={{ color: 'rgba(43,128,240,0.45)', fontFamily: 'monospace', fontSize: 11 }}>[</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.35em]"
                          style={{ color: '#2B80F0', fontFamily: 'monospace' }}>
                          PHASE {step.num}
                        </span>
                        <span style={{ color: 'rgba(43,128,240,0.45)', fontFamily: 'monospace', fontSize: 11 }}>]</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-light mb-3 leading-tight"
                        style={{ color: '#FFFFFF', letterSpacing: '-0.03em' }}>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed mb-7 flex-1"
                        style={{ color: 'rgba(255,255,255,0.40)', fontWeight: 300, lineHeight: 1.8 }}>
                        {step.desc}
                      </p>

                      {/* Circuit-trace divider */}
                      <div className="flex items-center gap-2 mb-5">
                        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(43,128,240,0.35), transparent)' }} />
                        <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(43,128,240,0.6)', boxShadow: '0 0 4px #2B80F0' }} />
                        <div className="w-3 h-px" style={{ background: 'rgba(43,128,240,0.3)' }} />
                        <div className="w-1 h-1 rounded-sm rotate-45" style={{ background: 'rgba(43,128,240,0.4)' }} />
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3">
                        {highlights.map(h => (
                          <li key={h} className="flex items-center gap-3 text-[13px]"
                            style={{ color: 'rgba(255,255,255,0.52)', fontWeight: 300 }}>
                            <span className="shrink-0 transition-all duration-200 group-hover:scale-125"
                              style={{ width: 6, height: 6, borderRadius: 2, background: '#2B80F0', boxShadow: '0 0 6px rgba(43,128,240,0.7)', display: 'block', transform: 'rotate(45deg)' }} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ TECH STACK ═════════════════════════════════════════ */}
      <section id="stack" className="py-20 sm:py-28" style={{ background: BG }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span style={{ color: AC, fontSize: 14 }}>✦</span>
              <p className="label-overline" style={{ color: AC, letterSpacing: '0.28em' }}>Our Tech Stack</p>
            </div>
            <h2 style={{ color: 'rgba(255,255,255,0.92)' }}>
              Tech Capabilities Powering<br />Digital Transformation
            </h2>
            <p className="mt-5 text-sm max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.40)', lineHeight: 1.8, fontWeight: 300 }}>
              A modern, flexible stack designed to support evolving business and technical requirements.
            </p>
          </FadeIn>

          {/* Card */}
          <FadeIn>
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

              {/* Fade wrapper — smooth category transitions */}
              <div style={{ opacity: stackVisible ? 1 : 0, transition: 'opacity 0.22s ease', willChange: 'opacity' }}>

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
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ WHY METLINK ════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: BG2, borderTop: BDR }}>

        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <FadeIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <p className="label-overline mb-5">Why MetLink</p>
              <h2 style={{ color: 'rgba(255,255,255,0.92)' }}>
                What sets us <span style={{ color: AC }}>apart</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm font-light sm:text-right" style={{ color: 'rgba(255,255,255,0.38)', lineHeight: 1.7 }}>
              Six reasons ambitious teams choose MetLink over a traditional agency.
            </p>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((item, i) => {
              const colors = ['#2B80F0','#8B5CF6','#06B6D4','#F59E0B','#10B981','#EC4899'];
              const stats  = ['1 Team','AI-Native','Live Data','7 Days','3× ROI','10M+ Scale'];
              const color  = colors[i] || AC;
              const stat   = stats[i];
              return (
                <StaggerItem key={item.title}>
                  <div
                    className="group relative flex flex-col rounded-2xl overflow-hidden h-full cursor-default transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${color}45`;
                      el.style.background  = `${color}08`;
                      el.style.transform   = 'translateY(-5px)';
                      el.style.boxShadow   = `0 24px 60px ${color}14`;
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(255,255,255,0.08)';
                      el.style.background  = 'rgba(255,255,255,0.03)';
                      el.style.transform   = 'translateY(0)';
                      el.style.boxShadow   = 'none';
                    }}
                  >
                    {/* Top gradient bar — appears on hover */}
                    <div className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }} />

                    <div className="flex flex-col flex-1 p-7">

                      {/* Top row: icon + stat badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: `${color}18`,
                            border: `1px solid ${color}35`,
                            boxShadow: `0 4px 20px ${color}20`,
                          }}
                        >
                          {[
                            /* 0 End-to-End Partner — interlocked team rings */
                            <svg key={0} width="26" height="26" viewBox="0 0 26 26" fill="none">
                              <circle cx="9" cy="10" r="4" fill={`${color}30`} stroke={color} strokeWidth="1.8"/>
                              <circle cx="17" cy="10" r="4" fill={`${color}20`} stroke={color} strokeWidth="1.8" strokeDasharray="2 1.5"/>
                              <path d="M3 22c0-3.3 2.7-6 6-6h8c3.3 0 6 2.7 6 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                            </svg>,
                            /* 1 AI-First Execution — neural / AI chip */
                            <svg key={1} width="26" height="26" viewBox="0 0 26 26" fill="none">
                              <rect x="8" y="8" width="10" height="10" rx="2.5" fill={`${color}25`} stroke={color} strokeWidth="1.8"/>
                              <circle cx="13" cy="13" r="2" fill={color}/>
                              <line x1="13" y1="3" x2="13" y2="8" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
                              <line x1="13" y1="18" x2="13" y2="23" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
                              <line x1="3" y1="13" x2="8" y2="13" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
                              <line x1="18" y1="13" x2="23" y2="13" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
                              <line x1="5.5" y1="5.5" x2="8" y2="8" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.6"/>
                              <line x1="18" y1="18" x2="20.5" y2="20.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.6"/>
                            </svg>,
                            /* 2 Real-Time Insights — live chart bars */
                            <svg key={2} width="26" height="26" viewBox="0 0 26 26" fill="none">
                              <rect x="4" y="16" width="4" height="7" rx="1.2" fill={`${color}50`}/>
                              <rect x="11" y="11" width="4" height="12" rx="1.2" fill={`${color}80`}/>
                              <rect x="18" y="6" width="4" height="17" rx="1.2" fill={color}/>
                              <polyline points="4,14 11,9 18,4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.5"/>
                              <circle cx="18" cy="4" r="2" fill={color}/>
                            </svg>,
                            /* 3 Ship in 7 Days — lightning bolt */
                            <svg key={3} width="26" height="26" viewBox="0 0 26 26" fill="none">
                              <path d="M15 2L4 15h8l-1 9 13-13h-8z" fill={`${color}30`} stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
                              <path d="M15 2L4 15h8" fill={`${color}50`} stroke="none"/>
                            </svg>,
                            /* 4 Measurable ROI — arrow + coin */
                            <svg key={4} width="26" height="26" viewBox="0 0 26 26" fill="none">
                              <circle cx="17" cy="16" r="7" fill={`${color}20`} stroke={color} strokeWidth="1.8"/>
                              <text x="17" y="20" textAnchor="middle" fontSize="8" fontWeight="700" fill={color}>$</text>
                              <polyline points="3,18 8,12 12,15 17,7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                              <polyline points="14,7 17,7 17,10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                            </svg>,
                            /* 5 Scalable Systems — stacked server layers */
                            <svg key={5} width="26" height="26" viewBox="0 0 26 26" fill="none">
                              <rect x="3" y="5" width="20" height="5" rx="2" fill={`${color}25`} stroke={color} strokeWidth="1.7"/>
                              <rect x="3" y="12" width="20" height="5" rx="2" fill={`${color}35`} stroke={color} strokeWidth="1.7"/>
                              <rect x="3" y="19" width="20" height="5" rx="2" fill={`${color}45`} stroke={color} strokeWidth="1.7"/>
                              <circle cx="20" cy="7.5" r="1" fill={color}/>
                              <circle cx="20" cy="14.5" r="1" fill={color}/>
                              <circle cx="20" cy="21.5" r="1" fill={color}/>
                            </svg>,
                          ][i]}
                        </div>
                        <span
                          className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                          style={{ background: `${color}14`, border: `1px solid ${color}28`, color }}
                        >
                          {stat}
                        </span>
                      </div>

                      {/* Number label */}
                      <span className="text-[10px] font-black uppercase tracking-[0.28em] mb-2 block"
                        style={{ color: `${color}70` }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Title */}
                      <h3 className="text-[1.2rem] font-semibold mb-3 leading-snug"
                        style={{ color: 'rgba(255,255,255,0.92)', letterSpacing: '-0.02em' }}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed flex-1"
                        style={{ color: 'rgba(255,255,255,0.50)', fontWeight: 300 }}>
                        {item.desc}
                      </p>

                      {/* Bottom accent line */}
                      <div className="mt-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(to right, ${color}40, transparent)` }} />
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section id="contact" className="py-16 sm:py-20" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl"
              style={{ background: '#050E1A', border: '1px solid rgba(43,128,240,0.18)', boxShadow: '0 0 80px rgba(43,128,240,0.06), inset 0 1px 0 rgba(43,128,240,0.08)' }}>

              {/* Background glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[320px]"
                  style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
                <div className="absolute bottom-0 right-0 w-[400px] h-[300px]"
                  style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.07) 0%, transparent 70%)', filter: 'blur(50px)' }} />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-stretch">

                {/* Left: content */}
                <div className="flex-1 px-10 sm:px-14 py-14 sm:py-16 flex flex-col justify-center">
                  <p className="text-[10px] uppercase tracking-[0.28em] mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Let&apos;s build together
                  </p>
                  <h2 className="mb-5 leading-[1.05]"
                    style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 300, letterSpacing: '-0.03em', maxWidth: 480 }}>
                    Let&apos;s Turn Ideas Into <span style={{ color: '#5FA8FF' }}>Execution</span>
                  </h2>
                  <p className="mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.52)', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.75 }}>
                    Need support with your tech roadmap? Our team works closely with you to define priorities and deliver steady progress.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="mailto:hello@metlink.ai"
                      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium btn-primary">
                      Become a Client
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <Link href="/services"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)' }}>
                      See services
                    </Link>
                  </div>
                </div>

                {/* Right: team photo */}
                <div className="relative hidden lg:block shrink-0 overflow-hidden rounded-r-3xl" style={{ width: 480 }}>
                  {/* Photo */}
                  <Image
                    src="/cta-team.jpg"
                    alt="MetLink team collaborating"
                    fill
                    className="object-cover"
                    style={{ opacity: 1, objectPosition: '50% 30%' }}
                    sizes="480px"
                  />
                  {/* Left-edge fade */}
                  <div className="absolute inset-y-0 left-0 w-40 pointer-events-none z-10"
                    style={{ background: 'linear-gradient(to right, #050E1A 30%, rgba(5,14,26,0.6) 65%, transparent)' }} />
                  {/* Bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10"
                    style={{ background: 'linear-gradient(to top, #050E1A 10%, transparent)' }} />
                  {/* Top fade */}
                  <div className="absolute inset-x-0 top-0 h-12 pointer-events-none z-10"
                    style={{ background: 'linear-gradient(to bottom, #050E1A 10%, transparent)' }} />

                  {/* Placeholder SVG — remove once real team photo is added */}
                  <svg
                    style={{ display: 'none' }}
                    viewBox="0 0 460 340"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* Desk surface */}
                    <ellipse cx="230" cy="298" rx="195" ry="18" fill="rgba(43,128,240,0.07)" />
                    <rect x="55" y="285" width="350" height="14" rx="7" fill="rgba(43,128,240,0.12)" />

                    {/* Laptop base */}
                    <rect x="130" y="220" width="200" height="70" rx="8" fill="#0D1E36" stroke="rgba(43,128,240,0.45)" strokeWidth="1.5" />
                    {/* Keyboard rows */}
                    {[0,1,2].map(row => (
                      <g key={row}>
                        {Array.from({length: 10}).map((_, k) => (
                          <rect key={k} x={138 + k * 18} y={230 + row * 17} width="13" height="10" rx="2.5"
                            fill="rgba(43,128,240,0.12)" stroke="rgba(43,128,240,0.2)" strokeWidth="0.5" />
                        ))}
                      </g>
                    ))}
                    {/* Touchpad */}
                    <rect x="190" y="265" width="80" height="22" rx="4" fill="rgba(43,128,240,0.1)" stroke="rgba(43,128,240,0.25)" strokeWidth="0.8" />

                    {/* Laptop screen lid */}
                    <rect x="120" y="90" width="220" height="140" rx="10" fill="#0A1828" stroke="rgba(43,128,240,0.5)" strokeWidth="1.5" />
                    {/* Screen bezel inner */}
                    <rect x="128" y="98" width="204" height="124" rx="6" fill="#060E1C" />
                    {/* Screen glow */}
                    <rect x="128" y="98" width="204" height="124" rx="6" fill="url(#screenGrad)" />
                    {/* Screen content lines */}
                    <rect x="140" y="112" width="80" height="8" rx="3" fill="rgba(43,128,240,0.6)" />
                    <rect x="140" y="126" width="120" height="5" rx="2" fill="rgba(255,255,255,0.12)" />
                    <rect x="140" y="137" width="95" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
                    <rect x="140" y="148" width="110" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
                    {/* Chart on screen */}
                    {[0,1,2,3,4].map((b,i) => {
                      const heights = [28, 42, 20, 52, 35];
                      const h = heights[i];
                      return <rect key={b} x={260 + i * 13} y={210 - h} width="10" height={h} rx="2"
                        fill={i === 3 ? '#2B80F0' : 'rgba(43,128,240,0.35)'} />;
                    })}
                    <rect x="256" y="210" width="72" height="1.5" rx="1" fill="rgba(255,255,255,0.15)" />
                    {/* Laptop hinge */}
                    <rect x="130" y="226" width="200" height="6" rx="3" fill="rgba(43,128,240,0.2)" />

                    {/* ── Person 1 — far left, standing, looking at screen ── */}
                    {/* Head */}
                    <circle cx="78" cy="148" r="22" fill="#1A3050" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                    <circle cx="78" cy="148" r="18" fill="#243D5C" />
                    {/* Face */}
                    <ellipse cx="72" cy="148" rx="3" ry="3.5" fill="rgba(255,255,255,0.55)" />
                    <ellipse cx="84" cy="148" rx="3" ry="3.5" fill="rgba(255,255,255,0.55)" />
                    <path d="M73 155 Q78 159 83 155" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    {/* Hair */}
                    <path d="M57 140 Q68 126 78 130 Q88 126 99 140 Q88 128 78 132 Q68 128 57 140Z" fill="rgba(255,255,255,0.18)" />
                    {/* Body */}
                    <rect x="56" y="172" width="44" height="72" rx="12" fill="#1A3050" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    {/* Collar */}
                    <path d="M72 172 L78 184 L84 172" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
                    {/* Left arm pointing at screen */}
                    <path d="M100 190 Q126 175 148 168" stroke="#1A3050" strokeWidth="14" strokeLinecap="round" fill="none" />
                    <path d="M100 190 Q126 175 148 168" stroke="rgba(43,128,240,0.15)" strokeWidth="12" strokeLinecap="round" fill="none" />
                    {/* Pointing finger */}
                    <circle cx="148" cy="168" r="5" fill="#243D5C" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                    {/* Right arm */}
                    <path d="M56 185 Q42 200 44 218" stroke="#1A3050" strokeWidth="14" strokeLinecap="round" fill="none" />
                    {/* Legs */}
                    <rect x="58" y="240" width="16" height="55" rx="8" fill="#122034" />
                    <rect x="82" y="240" width="16" height="55" rx="8" fill="#122034" />
                    {/* Shoes */}
                    <ellipse cx="66" cy="295" rx="10" ry="5" fill="#0B1828" />
                    <ellipse cx="90" cy="295" rx="10" ry="5" fill="#0B1828" />

                    {/* ── Person 2 — center-left, sitting, typing ── */}
                    {/* Head */}
                    <circle cx="178" cy="118" r="24" fill="#1D3555" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <circle cx="178" cy="118" r="20" fill="#2A4870" />
                    {/* Face */}
                    <ellipse cx="171" cy="117" rx="3.5" ry="4" fill="rgba(255,255,255,0.6)" />
                    <ellipse cx="185" cy="117" rx="3.5" ry="4" fill="rgba(255,255,255,0.6)" />
                    <path d="M172 125 Q178 130 184 125" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    {/* Hair */}
                    <path d="M155 110 Q165 93 178 97 Q191 93 201 110 Q190 98 178 102 Q166 98 155 110Z" fill="#2B80F0" opacity="0.7" />
                    {/* Body */}
                    <rect x="155" y="143" width="46" height="80" rx="13" fill="#1D3555" />
                    {/* Collar detail */}
                    <path d="M173 143 L178 157 L183 143" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" />
                    {/* Arms reaching to keyboard */}
                    <path d="M155 165 Q140 200 155 225" stroke="#1D3555" strokeWidth="15" strokeLinecap="round" fill="none" />
                    <path d="M201 165 Q216 200 210 222" stroke="#1D3555" strokeWidth="15" strokeLinecap="round" fill="none" />
                    {/* Hands on keyboard */}
                    <ellipse cx="155" cy="228" rx="10" ry="7" fill="#243D5C" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                    <ellipse cx="210" cy="225" rx="10" ry="7" fill="#243D5C" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                    {/* Chair seat */}
                    <rect x="142" y="222" width="72" height="12" rx="6" fill="#102030" stroke="rgba(43,128,240,0.2)" strokeWidth="1" />
                    {/* Chair back */}
                    <rect x="152" y="185" width="52" height="40" rx="8" fill="#0C1A2E" stroke="rgba(43,128,240,0.15)" strokeWidth="1" />
                    {/* Legs of chair */}
                    <line x1="150" y1="234" x2="145" y2="290" stroke="#0C1A2E" strokeWidth="5" strokeLinecap="round" />
                    <line x1="206" y1="234" x2="211" y2="290" stroke="#0C1A2E" strokeWidth="5" strokeLinecap="round" />

                    {/* ── Person 3 — center-right, standing, smiling ── */}
                    {/* Head */}
                    <circle cx="290" cy="125" r="26" fill="#1E3B5C" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <circle cx="290" cy="125" r="22" fill="#2D4F78" />
                    {/* Face */}
                    <ellipse cx="282" cy="124" rx="4" ry="4.5" fill="rgba(255,255,255,0.65)" />
                    <ellipse cx="298" cy="124" rx="4" ry="4.5" fill="rgba(255,255,255,0.65)" />
                    {/* Smile */}
                    <path d="M283 134 Q290 140 297 134" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                    {/* Hair */}
                    <path d="M265 116 Q275 97 290 100 Q305 97 315 116 Q303 101 290 105 Q277 101 265 116Z" fill="rgba(255,255,255,0.22)" />
                    {/* Body */}
                    <rect x="264" y="152" width="52" height="82" rx="14" fill="#1E3B5C" />
                    {/* Collar */}
                    <path d="M282 152 L290 168 L298 152" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
                    {/* Arms at sides slightly raised */}
                    <path d="M264 170 Q245 188 242 210" stroke="#1E3B5C" strokeWidth="15" strokeLinecap="round" fill="none" />
                    <path d="M316 170 Q335 185 336 205" stroke="#1E3B5C" strokeWidth="15" strokeLinecap="round" fill="none" />
                    {/* Hands */}
                    <ellipse cx="242" cy="214" rx="10" ry="7" fill="#2D4F78" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                    <ellipse cx="336" cy="208" rx="10" ry="7" fill="#2D4F78" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                    {/* Legs */}
                    <rect x="266" y="230" width="18" height="62" rx="9" fill="#142A44" />
                    <rect x="296" y="230" width="18" height="62" rx="9" fill="#142A44" />
                    {/* Shoes */}
                    <ellipse cx="275" cy="292" rx="11" ry="5" fill="#0B1828" />
                    <ellipse cx="305" cy="292" rx="11" ry="5" fill="#0B1828" />

                    {/* ── Person 4 — right, standing, arm around 3 ── */}
                    {/* Head */}
                    <circle cx="382" cy="135" r="23" fill="#1A3050" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <circle cx="382" cy="135" r="19" fill="#253C5A" />
                    {/* Face */}
                    <ellipse cx="375" cy="134" rx="3.5" ry="4" fill="rgba(255,255,255,0.55)" />
                    <ellipse cx="389" cy="134" rx="3.5" ry="4" fill="rgba(255,255,255,0.55)" />
                    <path d="M376 143 Q382 148 388 143" stroke="rgba(255,255,255,0.4)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                    {/* Hair — different style, curly-ish */}
                    <path d="M360 126 Q363 112 374 110 Q382 107 390 110 Q401 112 404 126 Q396 116 382 119 Q368 116 360 126Z" fill="#2B80F0" opacity="0.55" />
                    <circle cx="363" cy="124" r="5" fill="#1A3050" opacity="0.7" />
                    <circle cx="401" cy="124" r="5" fill="#1A3050" opacity="0.7" />
                    {/* Body */}
                    <rect x="360" y="160" width="44" height="78" rx="12" fill="#1A3050" />
                    {/* Collar */}
                    <path d="M376 160 L382 174 L388 160" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" />
                    {/* Arm reaching toward person 3 */}
                    <path d="M360 174 Q340 185 326 198" stroke="#1A3050" strokeWidth="15" strokeLinecap="round" fill="none" />
                    <path d="M404 174 Q418 192 420 214" stroke="#1A3050" strokeWidth="15" strokeLinecap="round" fill="none" />
                    {/* Hands */}
                    <ellipse cx="326" cy="200" rx="9" ry="7" fill="#253C5A" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                    <ellipse cx="420" cy="216" rx="9" ry="7" fill="#253C5A" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                    {/* Legs */}
                    <rect x="362" y="234" width="16" height="58" rx="8" fill="#122034" />
                    <rect x="388" y="234" width="16" height="58" rx="8" fill="#122034" />
                    {/* Shoes */}
                    <ellipse cx="370" cy="292" rx="10" ry="5" fill="#0B1828" />
                    <ellipse cx="396" cy="292" rx="10" ry="5" fill="#0B1828" />

                    {/* Screen gradient def */}
                    <defs>
                      <linearGradient id="screenGrad" x1="128" y1="98" x2="332" y2="222" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#0C1E3A" />
                        <stop offset="50%" stopColor="#0A1828" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#060E1C" />
                      </linearGradient>
                      <radialGradient id="deskGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(43,128,240,0.15)" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>
                    </defs>

                    {/* Floating accent dots */}
                    <circle cx="420" cy="60" r="4" fill="rgba(43,128,240,0.5)" />
                    <circle cx="405" cy="75" r="2.5" fill="rgba(95,168,255,0.35)" />
                    <circle cx="435" cy="80" r="2" fill="rgba(43,128,240,0.3)" />
                    <circle cx="40" cy="200" r="3" fill="rgba(43,128,240,0.35)" />
                    <circle cx="28" cy="215" r="2" fill="rgba(95,168,255,0.25)" />

                    {/* Connection lines between people (team vibe) */}
                    <path d="M78 155 Q128 140 155 143" stroke="rgba(43,128,240,0.15)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
                    <path d="M316 168 Q350 160 360 160" stroke="rgba(43,128,240,0.15)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
                  </svg>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}