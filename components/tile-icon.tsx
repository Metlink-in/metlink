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
  'manufacturing': Factory,
  'logistics': Truck,
  'retail': ShoppingCart,
  'healthcare': HeartPulse,
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
