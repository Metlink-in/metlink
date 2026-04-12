export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  date: string;
  tech: string[];
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  gradientFrom: string;
  gradientTo: string;
  colorClass: string;
}

export const projects: Project[] = [
  {
    slug: 'ecommerce-ai-platform',
    title: 'AI-Powered E-Commerce Platform',
    category: 'Software + AI',
    client: 'RetailTech Co.',
    date: 'October 2024',
    tech: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
    tagline: 'Personalized shopping at scale',
    description:
      "Built an end-to-end AI-powered e-commerce platform with personalized recommendations, dynamic pricing, and automated inventory management that transformed the client's revenue.",
    problem:
      'The client was losing 35% of potential revenue due to poor product discovery, manual inventory processes, and generic user experiences that failed to engage repeat customers.',
    solution:
      'We implemented a custom recommendation engine using collaborative filtering, automated inventory predictions, and a dynamic pricing algorithm that responds in real-time to market conditions and user behavior.',
    results: [
      '40% increase in average order value',
      '65% reduction in cart abandonment',
      '2M+ products processed daily',
      '99.9% platform uptime',
    ],
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-cyan-500',
    colorClass: 'text-blue-400',
  },
  {
    slug: 'fintech-analytics-dashboard',
    title: 'FinTech Real-Time Analytics Dashboard',
    category: 'AI & Data Science',
    client: 'CapitalFlow Finance',
    date: 'August 2024',
    tech: ['React', 'Python', 'Apache Kafka', 'MongoDB', 'GCP'],
    tagline: 'Real-time financial intelligence',
    description:
      'Developed a real-time financial analytics dashboard with ML-based fraud detection, predictive forecasting, and automated executive reporting capabilities.',
    problem:
      'Manual reporting processes consumed 20+ hours per week, and the team had zero proactive visibility into fraud risk before financial damage occurred.',
    solution:
      'Implemented real-time ML fraud detection with 97% accuracy, automated report generation, and interactive BI dashboards with predictive forecasting models.',
    results: [
      '$2M+ fraud prevented in Q1',
      '95% reduction in manual reporting time',
      '50+ real-time KPI dashboards deployed',
      '40% more accurate revenue forecasting',
    ],
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-pink-500',
    colorClass: 'text-purple-400',
  },
  {
    slug: 'healthcare-automation',
    title: 'Healthcare Process Automation Suite',
    category: 'Business Automation + AI',
    client: 'MedCare Hospitals',
    date: 'June 2024',
    tech: ['Python', 'FastAPI', 'NLP', 'AWS Lambda', 'React'],
    tagline: 'Automating care. Enabling focus.',
    description:
      'Automated patient intake, appointment scheduling, insurance billing, and document processing for a multi-location hospital chain using AI and intelligent automation.',
    problem:
      'Administrative staff were spending 60% of their time on repetitive tasks, leading to delays in care coordination and costly billing errors.',
    solution:
      'Built an intelligent automation layer with NLP-based document processing, smart scheduling algorithms, integrated billing automation, and real-time compliance monitoring.',
    results: [
      '60% reduction in admin workload',
      '3x faster patient onboarding',
      '98% billing accuracy achieved',
      '500+ hours saved per month',
    ],
    gradientFrom: 'from-emerald-600',
    gradientTo: 'to-teal-500',
    colorClass: 'text-emerald-400',
  },
  {
    slug: 'saas-marketing-platform',
    title: 'SaaS Growth Marketing Platform',
    category: 'Digital Marketing + Software',
    client: 'GrowthStack Inc.',
    date: 'March 2024',
    tech: ['Vue.js', 'Node.js', 'OpenAI API', 'Stripe', 'Vercel'],
    tagline: 'Marketing that grows itself',
    description:
      'Built a unified SaaS marketing automation platform with AI-generated content, multi-channel campaign management, and centralized performance analytics.',
    problem:
      'The client was managing 5 disconnected tools for marketing, creating data silos, inconsistent messaging, and poor campaign performance that wasted $50K/month in ad spend.',
    solution:
      'Created a unified platform integrating all marketing channels, GPT-4-powered content generation, and a centralized analytics engine that optimizes spend across channels automatically.',
    results: [
      '300% increase in organic reach',
      '50% lower customer acquisition cost',
      '10K+ active users within 3 months',
      '$500K MRR achieved at launch',
    ],
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-rose-500',
    colorClass: 'text-orange-400',
  },
  {
    slug: 'brand-transformation',
    title: 'Complete Brand Transformation',
    category: 'Creative Media + Performance Marketing',
    client: 'NovaTech Startup',
    date: 'January 2024',
    tech: ['Figma', 'Adobe Suite', 'Webflow', 'Meta Ads', 'Google Ads'],
    tagline: 'From zero to recognized brand',
    description:
      'Full brand identity creation, website redesign, and integrated performance marketing campaign that launched a B2B SaaS startup into a well-recognized industry brand.',
    problem:
      'The startup had a strong product but zero brand recognition. 3% landing page conversion rates and a $180 CPL were making growth financially unsustainable.',
    solution:
      'Rebuilt brand identity from scratch, launched hyper-targeted performance campaigns, and redesigned the website with conversion-optimized landing pages and a new design system.',
    results: [
      '185% increase in brand search volume',
      '4x lower cost-per-lead achieved',
      '23% landing page conversion rate',
      '500% ROI on total ad spend',
    ],
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-blue-600',
    colorClass: 'text-cyan-400',
  },
  {
    slug: 'enterprise-conversational-ai',
    title: 'Enterprise Conversational AI System',
    category: 'NLP & Conversational AI',
    client: 'GlobalCorp Ltd.',
    date: 'November 2023',
    tech: ['Python', 'LangChain', 'GPT-4', 'Pinecone', 'FastAPI'],
    tagline: 'AI that understands your entire business',
    description:
      "Built a custom enterprise chatbot system with RAG architecture, fine-tuned on the company's knowledge base for accurate, legally-compliant, context-aware responses at scale.",
    problem:
      'Customer support was handling 10,000+ queries per month manually, with a 48-hour average response time and 72% ticket repetition causing severe team burnout.',
    solution:
      'Deployed a RAG-based conversational AI trained on 50,000+ company documents, integrated with CRM, with multi-language support, escalation logic, and live agent handoff.',
    results: [
      '85% of all queries resolved by AI',
      '2-minute average response time',
      '45% reduction in support operational costs',
      '4.8/5 average customer satisfaction score',
    ],
    gradientFrom: 'from-pink-600',
    gradientTo: 'to-purple-600',
    colorClass: 'text-pink-400',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
