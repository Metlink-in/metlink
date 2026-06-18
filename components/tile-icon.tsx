import type { LucideIcon } from 'lucide-react';
import {
  TrendingUp, Sparkles, BrainCircuit, Code2, Settings, Cog,
  Search, Target, Share2, PenLine, Zap, Plug, Compass, UserPlus, Bot,
  Navigation, Megaphone, Keyboard, RefreshCw, MessageSquare, Image as ImageIcon,
  Wrench, Rocket, Cloud, Settings2, Building2, MessagesSquare, Handshake,
  Microscope, Package, Palette, Globe, Wand2, Workflow, Cpu, BarChart3,
  Landmark, Shield, Factory, Truck, Hotel, ShoppingCart, HeartPulse, Smartphone,
  Lightbulb, Boxes, Scale, FileText, CreditCard, FileSearch, CalendarClock,
  ClipboardList, Bell, Siren, Wifi, Map, PackageOpen, LineChart, Flag,
  BedDouble, CalendarCheck, BadgePercent, Users, ShoppingBag, Stethoscope,
  ScanLine, Brain, Mic, FlaskConical, Headset,
} from 'lucide-react';

// One white line-icon per service/industry slug, matching the reference style.
const ICONS: Record<string, LucideIcon> = {
  // ── Service categories ──
  'digital-marketing': TrendingUp,
  'generative-ai': Sparkles,
  'ai-ml': BrainCircuit,
  'software-development': Code2,
  'automation-first': Settings,

  // ── Digital Marketing ──
  'seo': Search,
  'performance-marketing': Target,
  'social-media-marketing': Share2,
  'content-marketing': PenLine,
  'social-media-optimization': Zap,

  // ── Generative AI ──
  'generative-ai-development': Sparkles,
  'generative-ai-integration': Plug,
  'generative-ai-consulting': Compass,
  'hire-generative-ai-engineers': UserPlus,
  'ai-agent-development': Bot,
  'ai-copilot-development': Navigation,
  'ai-marketing-agent-development': Megaphone,
  'hire-prompt-engineers': Keyboard,
  'adaptive-ai-development': RefreshCw,
  'chatgpt-developers': MessageSquare,
  'stable-diffusion-developers': ImageIcon,
  'large-language-model-development': Brain,

  // ── AI & ML ──
  'ai-development': Wrench,
  'ai-consulting': Compass,
  'ai-deployment-services': Rocket,
  'hire-ai-engineers': UserPlus,
  'ai-as-a-service': Cloud,
  'hire-action-transformer-developers': Settings2,
  'enterprise-ai-development': Building2,
  'ai-chatbot-development': MessagesSquare,
  'enterprise-ai-chatbot-development': Handshake,
  'transformer-model-development': Microscope,
  'mlops-consulting-services': Package,

  // ── Software Development ──
  'custom-software-development': Code2,
  'saas-development': Cloud,
  'software-consulting': Compass,
  'ui-ux-design': Palette,
  'enterprise-software-development': Building2,
  'web-application-development': Globe,
  'digital-transformation': Wand2,

  // ── Automation First ──
  'workflow-automation': Workflow,
  'ai-agents-automation': Bot,
  'rpa-bots': Cpu,
  'crm-sales-automation': BarChart3,
  'marketing-automation': Megaphone,

  // ── Industry categories (operations-led catalogue) ──
  'restaurant-cafe': Hotel,
  'real-estate': Building2,
  'healthcare-clinics': HeartPulse,
  'education': Users,
  'ecommerce-d2c': ShoppingCart,
  'hr-recruitment': Users,
  'finance-accounting': Landmark,
  'logistics-supply-chain': Truck,
  // legacy industry slugs (kept as harmless fallbacks)
  'finance': Landmark,
  'insurance': Shield,
  'manufacturing': Factory,
  'logistics': Truck,
  'hospitality': Hotel,
  'retail': ShoppingCart,
  'healthcare': HeartPulse,
  'consumer-electronics': Smartphone,
  'startup': Rocket,

  // ── Finance topics ──
  'fintech-ai-consulting': Lightbulb,
  'fintech-software-development': Boxes,
  'ai-use-cases-banking-finance': Landmark,
  'ai-due-diligence': Search,
  'ai-financial-compliance': Scale,
  'genai-finance-banking': Sparkles,
  'genai-asset-management': TrendingUp,
  'ai-loan-underwriting': FileText,
  'ai-credit-scoring': CreditCard,
  'ai-financial-document-processing': FileSearch,
  'ai-financial-modeling': BarChart3,
  'ai-financial-planning': CalendarClock,

  // ── Insurance ──
  'ai-underwriting': ClipboardList,
  'claims-automation': Zap,
  'insurance-fraud-detection': Siren,
  'ai-customer-support-insurance': Headset,
  'risk-assessment-ai': LineChart,
  'insurance-software-development': Boxes,

  // ── Manufacturing ──
  'predictive-maintenance': Wrench,
  'quality-inspection-ai': ScanLine,
  'industrial-iot': Wifi,
  'supply-chain-optimization': Truck,
  'process-automation': Cog,
  'digital-twin-solutions': Boxes,

  // ── Logistics ──
  'route-optimization': Map,
  'warehouse-automation': PackageOpen,
  'demand-forecasting': LineChart,
  'fleet-management-ai': Truck,
  'last-mile-delivery': Flag,
  'logistics-software-development': Boxes,

  // ── Hospitality ──
  'ai-concierge': Bell,
  'personalized-guest-experience': Sparkles,
  'revenue-management-ai': LineChart,
  'booking-automation': CalendarCheck,
  'hospitality-chatbots': MessagesSquare,
  'hospitality-software-development': BedDouble,

  // ── Retail ──
  'personalized-recommendations': Target,
  'inventory-optimization': PackageOpen,
  'retail-chatbots': MessagesSquare,
  'dynamic-pricing': BadgePercent,
  'customer-analytics': BarChart3,
  'ecommerce-development': ShoppingBag,

  // ── Healthcare ──
  'medical-diagnostics-ai': Stethoscope,
  'patient-engagement': Users,
  'healthcare-chatbots': MessagesSquare,
  'medical-imaging-ai': ScanLine,
  'ehr-integration': ClipboardList,
  'healthcare-software-development': HeartPulse,

  // ── Consumer Electronics ──
  'smart-device-software': Smartphone,
  'voice-assistant-integration': Mic,
  'iot-connectivity': Wifi,
  'embedded-ai': Cpu,
  'companion-app-development': Smartphone,
  'ce-firmware-development': Cpu,

  // ── Startup ──
  'mvp-development': Zap,
  'ai-product-development': Bot,
  'technical-cofounder-support': Users,
  'scalable-architecture': Boxes,
  'startup-consulting': Compass,
  'pitch-ready-prototypes': FlaskConical,
};

export function TileIcon({ slug, className, strokeWidth = 1.4 }: { slug: string; className?: string; strokeWidth?: number }) {
  const Icon = ICONS[slug] ?? Sparkles;
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

export function hasIcon(slug: string): boolean {
  return slug in ICONS;
}

/**
 * Deterministic "generated image" cover for a card — a unique on-brand gradient
 * derived from the slug, so every service tile gets a distinct visual without
 * needing an uploaded image.
 */
export function genCover(slug: string): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const base = 200 + (h % 60);          // 200–260: blue → indigo → violet
  const second = 180 + ((h >> 3) % 80); // 180–260: teal → blue → violet
  const angle = 120 + (h % 80);
  return `linear-gradient(${angle}deg, hsl(${base} 72% 24%) 0%, hsl(${second} 60% 14%) 55%, #091421 100%)`;
}

function hashStr(s: string): number {
  let h = 1779033703 ^ s.length;
  for (let i = 0; i < s.length; i++) { h = Math.imul(h ^ s.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  return h >>> 0;
}
function mulberry32(a: number) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Procedurally generated illustration (a unique abstract "AI network" scene per
 * slug) returned as an SVG data-URI — a real generated image, not a flat gradient.
 * Use as a backgroundImage with background-size: cover.
 */
export function genCoverSvg(slug: string): string {
  const rng = mulberry32(hashStr(slug));
  const W = 400, H = 250;
  const h1 = 200 + Math.floor(rng() * 60);
  const h2 = 170 + Math.floor(rng() * 90);
  const accent = `hsl(${190 + Math.floor(rng() * 70)} 90% 68%)`;

  const n = 7 + Math.floor(rng() * 5);
  const pts: { x: number; y: number; r: number }[] = [];
  for (let i = 0; i < n; i++) pts.push({ x: 30 + rng() * (W - 60), y: 25 + rng() * (H - 50), r: 2 + rng() * 4 });

  // connect each point to its 1–2 nearest neighbours
  let lines = '';
  for (let i = 0; i < pts.length; i++) {
    const dists = pts.map((p, j) => ({ j, d: (p.x - pts[i].x) ** 2 + (p.y - pts[i].y) ** 2 })).filter(o => o.j !== i).sort((a, b) => a.d - b.d);
    const links = 1 + Math.floor(rng() * 2);
    for (let k = 0; k < links && k < dists.length; k++) {
      const p = pts[dists[k].j];
      lines += `<line x1="${pts[i].x.toFixed(0)}" y1="${pts[i].y.toFixed(0)}" x2="${p.x.toFixed(0)}" y2="${p.y.toFixed(0)}" stroke="${accent}" stroke-width="0.8" stroke-opacity="0.28"/>`;
    }
  }
  const dots = pts.map(p => `<circle cx="${p.x.toFixed(0)}" cy="${p.y.toFixed(0)}" r="${p.r.toFixed(1)}" fill="${accent}" fill-opacity="0.85"/><circle cx="${p.x.toFixed(0)}" cy="${p.y.toFixed(0)}" r="${(p.r * 2.4).toFixed(1)}" fill="${accent}" fill-opacity="0.10"/>`).join('');
  const bx = rng() * W, by = rng() * H;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="hsl(${h1} 70% 22%)"/>
<stop offset="0.55" stop-color="hsl(${h2} 58% 13%)"/>
<stop offset="1" stop-color="#091421"/>
</linearGradient>
<radialGradient id="blob" cx="50%" cy="50%" r="50%">
<stop offset="0" stop-color="${accent}" stop-opacity="0.30"/>
<stop offset="1" stop-color="${accent}" stop-opacity="0"/>
</radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
<circle cx="${bx.toFixed(0)}" cy="${by.toFixed(0)}" r="120" fill="url(#blob)"/>
${lines}${dots}
</svg>`;

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// Original, per-industry themed line motifs (drawn around centre of a 400×250 frame).
function industryMotif(industry: string, color: string): string {
  const s = `stroke="${color}" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"`;
  switch (industry) {
    case 'restaurant-cafe':
      return `<g ${s}><circle cx="200" cy="125" r="40"/><circle cx="200" cy="125" r="26" opacity="0.45"/><path d="M150 92 v66 M150 92 q-9 16 0 24 M150 92 q9 16 0 24"/><path d="M250 92 q11 5 11 25 q0 13 -11 13 v33"/></g>`;
    case 'real-estate':
      return `<g ${s}><path d="M158 162 v-42 l32 -26 l32 26 v42 z"/><path d="M178 162 v-24 h24 v24"/><rect x="228" y="120" width="34" height="42"/><path d="M228 120 h34 M236 132 h6 M250 132 h6 M236 144 h6 M250 144 h6"/></g>`;
    case 'healthcare-clinics':
      return `<g ${s}><path d="M146 130 h24 l8 -20 l13 40 l10 -30 l8 10 h33"/><g opacity="0.85"><path d="M252 106 v34 M235 123 h34"/></g></g>`;
    case 'education':
      return `<g ${s}><path d="M200 100 l54 23 l-54 23 l-54 -23 z"/><path d="M174 134 v24 q26 15 52 0 v-24"/><path d="M254 123 v28 M254 151 a3.5 3.5 0 1 0 0.1 0"/></g>`;
    case 'ecommerce-d2c':
      return `<g ${s}><path d="M166 114 h68 l9 52 a6 6 0 0 1 -6 6 h-74 a6 6 0 0 1 -6 -6 z"/><path d="M184 114 a16 16 0 0 1 32 0"/></g>`;
    case 'hr-recruitment':
      return `<g ${s}><circle cx="182" cy="112" r="13"/><path d="M160 160 q22 -28 44 0"/><circle cx="224" cy="118" r="10"/><path d="M208 160 q16 -22 34 0"/></g>`;
    case 'finance-accounting':
      return `<g ${s}><path d="M158 162 v-22 M180 162 v-36 M202 162 v-28 M224 162 v-50"/><path d="M150 150 l26 -24 l16 14 l32 -36"/><path d="M214 104 h14 v14"/></g>`;
    default:
      return `<g ${s}><circle cx="200" cy="125" r="38"/><path d="M200 87 v76 M162 125 h76"/></g>`;
  }
}

/** Original industry-themed illustration cover (SVG data-URI) — varies per service. */
export function genThemedCover(industry: string, slug: string): string {
  const rng = mulberry32(hashStr(slug));
  const W = 400, H = 250;
  const h1 = 200 + Math.floor(rng() * 55);
  const h2 = 170 + Math.floor(rng() * 90);
  const accent = `hsl(${190 + Math.floor(rng() * 70)} 90% 70%)`;
  const bx = (60 + rng() * 280).toFixed(0);
  const by = (40 + rng() * 170).toFixed(0);
  const rot = (rng() * 8 - 4).toFixed(1);

  // faint scattered nodes for depth
  let dots = '';
  for (let i = 0; i < 5; i++) dots += `<circle cx="${(rng() * W).toFixed(0)}" cy="${(rng() * H).toFixed(0)}" r="${(1 + rng() * 1.6).toFixed(1)}" fill="${accent}" fill-opacity="0.5"/>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="hsl(${h1} 68% 20%)"/>
<stop offset="0.55" stop-color="hsl(${h2} 56% 12%)"/>
<stop offset="1" stop-color="#091421"/>
</linearGradient>
<radialGradient id="blob" cx="50%" cy="50%" r="50%">
<stop offset="0" stop-color="${accent}" stop-opacity="0.30"/>
<stop offset="1" stop-color="${accent}" stop-opacity="0"/>
</radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
<circle cx="${bx}" cy="${by}" r="130" fill="url(#blob)"/>
${dots}
<g transform="rotate(${rot} 200 125)" opacity="0.92">${industryMotif(industry, accent)}</g>
</svg>`;

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
