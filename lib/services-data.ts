export interface ServiceItem {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  subFeatures?: { title: string; items: string[] }[];
}

export interface ServiceCategory {
  name: string;
  slug: string;
  icon: string;
  colorClass: string;
  gradientFrom: string;
  gradientTo: string;
  bgGlow: string;
  tagline: string;
  description: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: '📊',
    colorClass: 'text-blue-400',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-cyan-500',
    bgGlow: 'rgba(37,99,235,0.15)',
    tagline: 'Data-Driven Growth at Scale',
    description:
      'Comprehensive digital marketing strategies that drive measurable growth, establish brand authority, and convert audiences into loyal customers.',
    services: [
      {
        name: 'Personal Branding',
        slug: 'personal-branding',
        tagline: 'Build Authority. Lead Your Industry.',
        description:
          'We craft compelling personal brands that position executives and founders as industry authorities and thought leaders across all major platforms.',
        icon: '👤',
        features: [
          'LinkedIn profile management & optimization',
          'Twitter/X thought leadership content',
          'Instagram content & reels strategy',
          'Content calendar planning & scheduling',
          'Community engagement & growth',
          'Audience growth strategies',
          'Analytics tracking & reporting',
        ],
        subFeatures: [
          { title: 'Platforms', items: ['LinkedIn', 'Twitter/X', 'Instagram', 'YouTube'] },
          { title: 'Goals', items: ['Build industry authority', 'Establish thought leadership', 'Grow professional networks'] },
        ],
      },
      {
        name: 'Performance Marketing',
        slug: 'performance-marketing',
        tagline: 'Every Rupee Accountable. Every Ad Optimized.',
        description:
          'Data-driven paid advertising campaigns across all major platforms, engineered for maximum ROI, conversion rate, and measurable business impact.',
        icon: '🎯',
        features: [
          'Meta Ads (Facebook + Instagram)',
          'Google Ads (Search / Display / YouTube)',
          'LinkedIn Ads for B2B',
          'Amazon Advertising',
          'TikTok Ads',
          'Twitter/X Ads',
          'A/B testing & creative optimization',
          'ROAS analysis & reporting',
          'Audience targeting & segmentation',
          'Conversion tracking setup',
        ],
      },
      {
        name: 'Social Media Management',
        slug: 'social-media',
        tagline: 'Always On. Always Engaging.',
        description:
          'Full-service social media management including content creation, 24/7 community management, and brand monitoring across all major platforms.',
        icon: '📱',
        features: [
          'Content creation & scheduling',
          'Platform-specific format optimization',
          '24/7 community management',
          'Brand monitoring & reputation management',
          'Analytics dashboards & reporting',
          'Influencer collaboration strategy',
        ],
        subFeatures: [
          { title: 'Platforms', items: ['LinkedIn', 'Instagram', 'Facebook', 'Twitter/X', 'YouTube'] },
        ],
      },
      {
        name: 'Search Engine Optimization',
        slug: 'seo',
        tagline: 'Rank Higher. Get Found. Convert More.',
        description:
          'Comprehensive SEO strategies covering all aspects of search visibility — from technical health to content strategy — to drive sustainable organic growth.',
        icon: '🔍',
        features: [
          'Keyword research & optimization',
          'Content structure & strategy',
          'Technical SEO audits & fixes',
          'Backlink building & digital PR',
          'Google My Business optimization',
          'Local citations & geo-targeting',
          'Website speed optimization',
          'Schema markup implementation',
          'Crawlability & indexability fixes',
        ],
        subFeatures: [
          { title: 'SEO Types', items: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Local SEO'] },
        ],
      },
    ],
  },
  {
    name: 'Creative Media',
    slug: 'creative-media',
    icon: '🎨',
    colorClass: 'text-purple-400',
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-pink-500',
    bgGlow: 'rgba(124,58,237,0.15)',
    tagline: 'Visuals That Stop Scrolling',
    description:
      'World-class creative production — from brand identity to high-volume video content — that captivates audiences and drives real business results.',
    services: [
      {
        name: 'Video & UGC Production',
        slug: 'video-ugc',
        tagline: 'High-Volume. High-Impact. Fast.',
        description:
          'AI-powered video production at scale, delivering platform-optimized creatives and UGC-style content that performs across every advertising channel.',
        icon: '🎬',
        features: [
          'AI-generated video ads',
          'Large-scale creative variations',
          'Multi-language content production',
          'Platform-optimized video formats',
          'Performance-based creative optimization',
          'UGC-style ad production',
          'Scriptwriting & storyboarding',
        ],
      },
      {
        name: 'Brand Identity Design',
        slug: 'brand-identity',
        tagline: 'Your Brand. Unmistakable.',
        description:
          'Comprehensive brand identity systems that create lasting impressions and communicate your core values consistently across every single touchpoint.',
        icon: '✨',
        features: [
          'Logo design & brand marks',
          'Brand color systems & palettes',
          'Typography systems',
          'Brand guidelines documentation',
          'Stationery & business card design',
          'Social media brand asset kits',
          'Packaging and merchandise branding',
        ],
      },
      {
        name: 'Graphic Design & Motion',
        slug: 'graphic-design',
        tagline: 'Design That Moves. Content That Sells.',
        description:
          'On-demand design support and motion graphics animation that brings your brand to life across social media, advertising, and every digital format.',
        icon: '🖼️',
        features: [
          'On-demand design support',
          'Brand asset management',
          'Multi-format graphic creation',
          'Motion graphics animation',
          'Professional video editing',
          'Social media creative packs',
          'Promotional & advertising graphics',
        ],
      },
      {
        name: 'Website Design & UI/UX',
        slug: 'website-ui-ux',
        tagline: 'Beautiful. Fast. Conversion-Optimized.',
        description:
          'End-to-end website development and UI/UX design that delivers exceptional user experiences, drives conversions, and represents your brand perfectly.',
        icon: '💻',
        features: [
          'Custom web design',
          'Full-stack development',
          'CMS integration (WordPress, Webflow)',
          'Hosting setup & deployment',
          'User research & usability testing',
          'Information architecture',
          'Wireframes & interactive prototyping',
          'UI design systems & documentation',
        ],
        subFeatures: [
          { title: 'Capabilities', items: ['Landing Pages', 'Corporate Sites', 'E-Commerce', 'Web Applications'] },
        ],
      },
    ],
  },
  {
    name: 'AI & Automation',
    slug: 'ai-automation',
    icon: '🤖',
    colorClass: 'text-cyan-400',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-blue-600',
    bgGlow: 'rgba(8,145,178,0.15)',
    tagline: 'Intelligent Systems. Infinite Scale.',
    description:
      'Cutting-edge AI and automation solutions that transform operations, reduce costs, and unlock unprecedented business intelligence and competitive advantage.',
    services: [
      {
        name: 'AI Development & Integration',
        slug: 'ai-development',
        tagline: 'Custom AI. Real Results.',
        description:
          'Build and deploy custom AI models, LLM integrations, and intelligent systems that automate complex tasks and deliver actionable insights at scale.',
        icon: '🧠',
        features: [
          'Custom AI model development',
          'LLM integrations (GPT-4, Claude, Gemini)',
          'Computer vision solutions',
          'Chatbots & AI assistants',
          'Recommendation systems',
          'Voice recognition systems',
          'Customer support automation',
          'Predictive analytics & forecasting',
        ],
      },
      {
        name: 'Data Science & Analytics',
        slug: 'data-science',
        tagline: 'Data Into Decisions. Insights Into Revenue.',
        description:
          'Transform raw data into actionable business intelligence through advanced analytics, predictive modeling, and beautiful BI dashboards that guide strategy.',
        icon: '📈',
        features: [
          'Predictive forecasting models',
          'Data mining & ETL pipelines',
          'BI dashboards & visualization',
          'Customer behavior modeling',
          'Fraud detection systems',
          'Statistical testing & A/B analysis',
          'Real-time data streaming pipelines',
        ],
      },
      {
        name: 'Machine Learning Solutions',
        slug: 'machine-learning',
        tagline: 'Systems That Learn. Businesses That Grow.',
        description:
          'End-to-end ML solutions from data preparation to production deployment — including advanced generative AI, RAG systems, and MLOps pipelines.',
        icon: '⚙️',
        features: [
          'Data preprocessing & feature engineering',
          'Model training & hyperparameter tuning',
          'Model evaluation & testing',
          'Production deployment & monitoring',
          'Reinforcement learning systems',
          'Generative AI & fine-tuning',
          'RAG (Retrieval-Augmented Generation)',
          'MLOps pipelines & CI/CD for ML',
        ],
      },
      {
        name: 'NLP & Conversational AI',
        slug: 'nlp-conversational',
        tagline: 'Language That Scales. Conversations That Convert.',
        description:
          'Advanced natural language processing and conversational AI systems that understand, analyze, and generate human language — powering smarter automation.',
        icon: '💬',
        features: [
          'Advanced chatbot development',
          'Text classification & routing',
          'Sentiment analysis systems',
          'OCR & document understanding',
          'Automated text summarization',
          'Multi-language translation systems',
          'Semantic search engines',
          'RAG-based knowledge chatbots',
        ],
      },
    ],
  },
  {
    name: 'Software Development',
    slug: 'software-development',
    icon: '💻',
    colorClass: 'text-emerald-400',
    gradientFrom: 'from-emerald-600',
    gradientTo: 'to-teal-500',
    bgGlow: 'rgba(5,150,105,0.15)',
    tagline: 'Code That Scales. Systems That Last.',
    description:
      'End-to-end custom software development — from web and mobile applications to enterprise systems and cloud infrastructure — built to scale with your business.',
    services: [
      {
        name: 'Application Development',
        slug: 'app-development',
        tagline: 'Web. Mobile. Enterprise. Delivered.',
        description:
          'Custom application development across all platforms — web, mobile, and enterprise — built with modern tech stacks that perform and scale flawlessly.',
        icon: '📱',
        features: [
          'Web application development',
          'Mobile app development (iOS & Android)',
          'Enterprise software solutions',
          'Cross-platform development (React Native)',
          'Progressive web apps (PWA)',
          'Full-stack development',
          'API development & third-party integrations',
        ],
      },
      {
        name: 'Cloud & API Development',
        slug: 'cloud-api',
        tagline: 'Scalable Infrastructure. Seamless Integrations.',
        description:
          'Robust cloud infrastructure and API development ensuring your systems scale effortlessly, integrate seamlessly, and run with maximum reliability.',
        icon: '☁️',
        features: [
          'Cloud infrastructure setup (AWS, GCP, Azure)',
          'API design, development & documentation',
          'Microservices architecture',
          'Docker & Kubernetes deployment',
          'CI/CD pipeline setup',
          'Infrastructure as Code (Terraform)',
          'Performance optimization & scaling',
        ],
      },
      {
        name: 'AI + Software Integration',
        slug: 'ai-software-integration',
        tagline: 'Where Intelligence Meets Software.',
        description:
          'Seamlessly integrate AI capabilities into existing software platforms, creating intelligent systems that automate workflows and optimize every process.',
        icon: '🔗',
        features: [
          'AI-powered SaaS product development',
          'Intelligent automation systems',
          'Smart workflow & decision engines',
          'AI model deployment in production',
          'Integration with existing enterprise systems',
          'Custom AI dashboards & reporting',
          'Scalable AI APIs & microservices',
        ],
      },
      {
        name: 'Business Automation',
        slug: 'business-automation',
        tagline: 'Automate Everything. Focus on What Matters.',
        description:
          'Comprehensive business automation solutions that streamline operations, eliminate repetitive manual work, and accelerate organizational growth.',
        icon: '⚡',
        features: [
          'Marketing automation systems',
          'Sales automation & CRM integration',
          'Operations & logistics automation',
          'IT automation & monitoring',
          'Workflow design & optimization',
          'RPA (Robotic Process Automation) bots',
          'Internal system integrations',
        ],
        subFeatures: [
          { title: 'Automation Areas', items: ['Marketing', 'Sales', 'Operations', 'IT & DevOps'] },
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getServiceBySlug(
  categorySlug: string,
  serviceSlug: string
): ServiceItem | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.services.find((s) => s.slug === serviceSlug);
}

export function getAllServiceSlugs(): { category: string; service: string }[] {
  return serviceCategories.flatMap((cat) =>
    cat.services.map((svc) => ({ category: cat.slug, service: svc.slug }))
  );
}
