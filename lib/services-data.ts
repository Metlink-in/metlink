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
  tagline: string;
  description: string;
  services: ServiceItem[];
}

// Concise builder to keep this large catalogue readable.
const s = (
  name: string,
  slug: string,
  icon: string,
  tagline: string,
  description: string,
  features: string[],
): ServiceItem => ({ name, slug, icon, tagline, description, features });

export const serviceCategories: ServiceCategory[] = [
  {
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: '📈',
    tagline: 'Data-Driven Growth at Scale',
    description:
      'Performance-focused digital marketing that grows visibility, demand, and revenue across search, social, and content channels.',
    services: [
      s('Search Engine Optimization', 'seo', '🔍', 'Rank Higher. Get Found. Convert More.',
        'Technical, on-page, and off-page SEO that drives sustainable organic traffic and qualified leads.',
        ['Keyword research & strategy', 'Technical SEO audits & fixes', 'On-page optimization', 'Link building & digital PR', 'Local SEO & Google Business Profile', 'Schema markup & Core Web Vitals']),
      s('Performance Marketing', 'performance-marketing', '🎯', 'Every Rupee Accountable.',
        'ROI-engineered paid campaigns across Google, Meta, LinkedIn, and more, optimized for conversions.',
        ['Google Ads (Search/Display/YouTube)', 'Meta Ads (Facebook + Instagram)', 'LinkedIn & B2B advertising', 'A/B testing & creative optimization', 'Conversion tracking & attribution', 'ROAS analysis & reporting']),
      s('Social Media Marketing', 'social-media-marketing', '📱', 'Always On. Always Engaging.',
        'Full-funnel social campaigns and community management that build brand affinity and drive action.',
        ['Channel strategy & content calendars', 'Creative & copy production', 'Community management', 'Paid social campaigns', 'Influencer collaborations', 'Analytics & reporting']),
      s('Content Marketing', 'content-marketing', '✍️', 'Content That Compounds.',
        'Editorial, SEO, and thought-leadership content that attracts, educates, and converts your audience.',
        ['Content strategy & planning', 'Blog & long-form articles', 'SEO content optimization', 'Lead magnets & whitepapers', 'Email & newsletter content', 'Performance tracking']),
      s('Social Media Optimization', 'social-media-optimization', '⚡', 'Optimize Every Profile.',
        'Profile, content, and engagement optimization that maximizes reach and conversions on every platform.',
        ['Profile & bio optimization', 'Hashtag & discoverability strategy', 'Posting cadence optimization', 'Engagement & growth tactics', 'Cross-platform repurposing', 'Analytics-driven iteration']),
    ],
  },
  {
    name: 'Generative AI',
    slug: 'generative-ai',
    icon: '✨',
    tagline: 'Build With Generative Intelligence',
    description:
      'End-to-end generative AI development, integration, and consulting, from custom LLM apps to autonomous AI agents.',
    services: [
      s('Generative AI Development', 'generative-ai-development', '🧬', 'Custom GenAI, Built for You.',
        'Bespoke generative AI applications powered by large language and diffusion models tailored to your workflows.',
        ['Custom GenAI app development', 'LLM fine-tuning & RAG pipelines', 'Prompt engineering & guardrails', 'Multimodal (text/image/audio) models', 'Vector database integration', 'Secure deployment & monitoring']),
      s('Generative AI Integration Services', 'generative-ai-integration', '🔌', 'Plug GenAI Into Your Stack.',
        'Integrate generative AI into your existing products, tools, and operations with minimal disruption.',
        ['LLM API integration (OpenAI, Claude, Gemini)', 'Workflow & SaaS embedding', 'Knowledge-base connectors', 'Authentication & rate control', 'Cost & latency optimization', 'Observability & evaluation']),
      s('Generative AI Consulting', 'generative-ai-consulting', '🧭', 'Strategy Before Scale.',
        'Advisory that identifies high-ROI generative AI use cases and a clear, de-risked roadmap to production.',
        ['Use-case discovery & prioritization', 'Feasibility & ROI assessment', 'Architecture & model selection', 'Data readiness review', 'Risk, governance & compliance', 'Implementation roadmap']),
      s('Hire Generative AI Engineers', 'hire-generative-ai-engineers', '👩‍💻', 'On-Demand GenAI Talent.',
        'Dedicated generative AI engineers who plug into your team and ship production-grade GenAI features.',
        ['Vetted senior GenAI engineers', 'Flexible engagement models', 'LLM, RAG & agent expertise', 'Fast onboarding', 'Timezone-aligned collaboration', 'Scale up or down anytime']),
      s('AI Agent Development', 'ai-agent-development', '🤖', 'Autonomous AI That Acts.',
        'Goal-driven AI agents that plan, use tools, and complete multi-step tasks across your systems.',
        ['Custom agent architecture', 'Tool & API calling', 'Multi-agent orchestration', 'Memory & context management', 'Human-in-the-loop controls', 'Monitoring & evaluation']),
      s('AI Copilot Development', 'ai-copilot-development', '🧑‍✈️', 'A Copilot for Every Workflow.',
        'Embedded AI copilots that assist users inside your product with context-aware suggestions and actions.',
        ['In-app copilot UX', 'Context-aware retrieval', 'Action & command execution', 'Domain fine-tuning', 'Feedback & analytics loops', 'Enterprise security']),
      s('AI Marketing Agent Development', 'ai-marketing-agent-development', '📣', 'Marketing on Autopilot.',
        'AI agents that research, draft, schedule, and optimize marketing campaigns autonomously.',
        ['Campaign research & ideation', 'Content generation at scale', 'Channel scheduling & posting', 'Performance optimization', 'Audience segmentation', 'Reporting & insights']),
      s('Hire Prompt Engineers', 'hire-prompt-engineers', '⌨️', 'Prompts That Perform.',
        'Specialist prompt engineers who design, test, and optimize prompts for reliable model outputs.',
        ['Prompt design & templating', 'Evaluation & A/B testing', 'Guardrails & safety', 'RAG prompt optimization', 'Cost reduction', 'Documentation & handoff']),
      s('Adaptive AI Development', 'adaptive-ai-development', '🔄', 'Systems That Learn Continuously.',
        'Adaptive AI solutions that adjust to new data and feedback in real time for sustained accuracy.',
        ['Continuous learning pipelines', 'Real-time feedback loops', 'Model retraining automation', 'Drift detection & monitoring', 'Personalization engines', 'Scalable MLOps']),
      s('ChatGPT Developers', 'chatgpt-developers', '💬', 'Build on GPT.',
        'Expert developers building ChatGPT-powered assistants, plugins, and integrations for your business.',
        ['Custom GPT assistants', 'ChatGPT API integration', 'Function calling & tools', 'RAG knowledge bases', 'Fine-tuning & evaluation', 'Secure deployment']),
      s('Stable Diffusion Developers', 'stable-diffusion-developers', '🎨', 'Generative Imagery at Scale.',
        'Developers building image-generation pipelines and products on Stable Diffusion and diffusion models.',
        ['Custom image generation apps', 'Model fine-tuning & LoRA', 'ControlNet & inpainting', 'Pipeline optimization', 'Brand-safe generation', 'Scalable inference']),
      s('Large Language Model Development', 'large-language-model-development', '🧠', 'Your Own Language Model.',
        'Custom LLM development, fine-tuning, and deployment optimized for your domain and data.',
        ['Domain-specific fine-tuning', 'Dataset curation & labeling', 'Evaluation & benchmarking', 'RAG & retrieval design', 'Inference optimization', 'Private & on-prem deployment']),
    ],
  },
  {
    name: 'Artificial Intelligence & ML',
    slug: 'ai-ml',
    icon: '🧠',
    tagline: 'Intelligence Engineered for Impact',
    description:
      'Full-spectrum AI and machine learning, from strategy and development to enterprise deployment and MLOps.',
    services: [
      s('AI Development', 'ai-development', '🛠️', 'From Idea to Intelligent Product.',
        'Custom AI solutions, models, and integrations built to automate work and unlock new capabilities.',
        ['Custom model development', 'Computer vision & NLP', 'Predictive analytics', 'AI integration into products', 'Data pipelines', 'Deployment & monitoring']),
      s('AI Consulting', 'ai-consulting', '🧭', 'Clarity for Your AI Journey.',
        'Strategic guidance to identify, prioritize, and execute the AI initiatives that move your business.',
        ['AI opportunity assessment', 'Use-case prioritization', 'Data & infrastructure review', 'Solution architecture', 'Governance & compliance', 'Roadmap & ROI modeling']),
      s('AI Deployment Services', 'ai-deployment-services', '🚀', 'Production-Ready AI.',
        'Reliable deployment of AI models into production with scalability, security, and observability.',
        ['Model packaging & serving', 'Cloud & on-prem deployment', 'CI/CD for ML', 'Scaling & load management', 'Security & access control', 'Monitoring & alerting']),
      s('Hire AI Engineers', 'hire-ai-engineers', '👨‍🔬', 'Senior AI Talent, On Demand.',
        'Experienced AI/ML engineers who integrate seamlessly into your team and deliver fast.',
        ['Vetted ML engineers', 'Flexible engagement', 'End-to-end ML expertise', 'Quick onboarding', 'Aligned timezones', 'Scalable teams']),
      s('AI as a Service', 'ai-as-a-service', '☁️', 'AI Without the Overhead.',
        'Managed AI capabilities delivered as a service, so you get intelligence without building infrastructure.',
        ['Prebuilt AI APIs', 'Managed model hosting', 'Usage-based scaling', 'Continuous updates', 'SLA-backed reliability', 'Security & compliance']),
      s('Hire Action Transformer Developers', 'hire-action-transformer-developers', '⚙️', 'Models That Take Action.',
        'Developers specialized in action transformer and agentic models that operate software autonomously.',
        ['Action transformer expertise', 'Tool-use & automation', 'Custom agent workflows', 'Integration with apps', 'Evaluation & safety', 'Flexible engagement']),
      s('Enterprise AI Development', 'enterprise-ai-development', '🏢', 'AI Built for the Enterprise.',
        'Secure, scalable AI systems designed for the governance, integration, and reliability enterprises require.',
        ['Enterprise architecture', 'Legacy system integration', 'Security & governance', 'Scalable infrastructure', 'Role-based access', 'Compliance & auditability']),
      s('AI Chatbot Development', 'ai-chatbot-development', '💬', 'Conversations That Convert.',
        'Intelligent chatbots that understand intent, answer accurately, and automate support and sales.',
        ['NLU & intent handling', 'RAG knowledge bases', 'Multi-channel deployment', 'Live-agent handoff', 'Analytics & tuning', 'Multilingual support']),
      s('Enterprise AI Chatbot Development', 'enterprise-ai-chatbot-development', '🤝', 'Enterprise-Grade Conversational AI.',
        'Secure, integrated conversational AI for large organizations with strict compliance needs.',
        ['Enterprise integrations (CRM/ERP)', 'SSO & access control', 'Data privacy & compliance', 'Scalable concurrency', 'Audit logging', 'Custom domain training']),
      s('Transformer Model Development', 'transformer-model-development', '🔬', 'Custom Transformers.',
        'Design, train, and deploy transformer models tuned to your data and performance targets.',
        ['Architecture design', 'Training & fine-tuning', 'Dataset engineering', 'Benchmarking', 'Inference optimization', 'Deployment']),
      s('MLOps Consulting Services', 'mlops-consulting-services', '📦', 'Operationalize Your ML.',
        'MLOps practices and pipelines that make model training, deployment, and monitoring reliable and repeatable.',
        ['CI/CD for ML', 'Feature stores & versioning', 'Automated retraining', 'Drift & performance monitoring', 'Infrastructure as code', 'Governance & reproducibility']),
    ],
  },
  {
    name: 'Data Engineering',
    slug: 'data-engineering',
    icon: '🗄️',
    tagline: 'Turn Raw Data Into Advantage',
    description:
      'Robust data infrastructure, pipelines, and analytics that make your data trustworthy, accessible, and actionable.',
    services: [
      s('Data Engineering Services', 'data-engineering-services', '🏗️', 'Foundations for Data-Driven Decisions.',
        'Design and build scalable data platforms that unify, clean, and serve data across your organization.',
        ['Data architecture design', 'Data lake & warehouse setup', 'Pipeline development', 'Data quality & governance', 'Cloud migration', 'Performance tuning']),
      s('Data Analytics', 'data-analytics', '📊', 'Insights That Drive Action.',
        'Advanced analytics that surface trends, forecasts, and opportunities from your data.',
        ['Descriptive & predictive analytics', 'KPI & metric modeling', 'Customer & product analytics', 'Forecasting models', 'Self-serve analytics', 'Reporting automation']),
      s('Data Visualization', 'data-visualization', '📈', 'See Your Data Clearly.',
        'Interactive dashboards and visualizations that make complex data understandable and actionable.',
        ['Dashboard design', 'BI tool implementation (Power BI/Tableau)', 'Real-time dashboards', 'KPI scorecards', 'Embedded analytics', 'UX-focused reporting']),
      s('ETL Development', 'etl-development', '🔁', 'Clean Data, Everywhere.',
        'Reliable ETL/ELT pipelines that move and transform data accurately between systems.',
        ['ETL/ELT pipeline design', 'Data transformation logic', 'Source integration', 'Incremental & batch loads', 'Error handling & retries', 'Monitoring & alerting']),
      s('Data Pipeline Development', 'data-pipeline-development', '🚰', 'Data That Flows on Time.',
        'Automated, scalable data pipelines for batch and streaming workloads.',
        ['Batch & streaming pipelines', 'Orchestration (Airflow/Dagster)', 'Schema management', 'Scalability & reliability', 'Data lineage', 'Cost optimization']),
      s('Big Data Consulting', 'big-data-consulting', '🌐', 'Scale to Any Volume.',
        'Strategy and engineering for high-volume, high-velocity data workloads.',
        ['Big data strategy', 'Spark & distributed processing', 'Data lake architecture', 'Real-time streaming', 'Cost & performance optimization', 'Governance & security']),
    ],
  },
  {
    name: 'Software Development',
    slug: 'software-development',
    icon: '💻',
    tagline: 'Code That Scales. Systems That Last.',
    description:
      'End-to-end custom software, from SaaS products and web apps to enterprise platforms and digital transformation.',
    services: [
      s('Custom Software Development', 'custom-software-development', '🧩', 'Software Built Around You.',
        'Tailored software solutions engineered to your exact processes, goals, and scale.',
        ['Discovery & solution design', 'Full-stack development', 'API & integrations', 'Testing & QA', 'Deployment & DevOps', 'Maintenance & support']),
      s('SaaS Development', 'saas-development', '☁️', 'Launch Your SaaS, Faster.',
        'Multi-tenant, scalable SaaS products from MVP to enterprise grade.',
        ['Multi-tenant architecture', 'Subscription & billing', 'Scalable cloud infrastructure', 'Role-based access', 'Analytics & dashboards', 'CI/CD & monitoring']),
      s('Software Consulting', 'software-consulting', '🧭', 'Build the Right Thing.',
        'Technical strategy and architecture guidance that de-risks your software investments.',
        ['Technology assessment', 'Architecture review', 'Tech stack selection', 'Scalability planning', 'Code & security audits', 'Roadmap planning']),
      s('UI/UX Design Service', 'ui-ux-design', '🎨', 'Experiences People Love.',
        'Research-driven UI/UX design that delights users and drives conversions.',
        ['User research & testing', 'Information architecture', 'Wireframes & prototypes', 'UI design systems', 'Interaction design', 'Usability optimization']),
      s('Enterprise Software Development', 'enterprise-software-development', '🏢', 'Built for Scale and Security.',
        'Robust enterprise systems that integrate with your stack and meet compliance demands.',
        ['Enterprise architecture', 'Legacy modernization', 'System integration', 'Security & compliance', 'High availability', 'Long-term support']),
      s('Web Application Development', 'web-application-development', '🌐', 'Fast, Modern Web Apps.',
        'High-performance web applications built with modern frameworks and best practices.',
        ['Responsive web apps', 'Modern frameworks (React/Next.js)', 'API-first development', 'Performance optimization', 'Accessibility', 'Deployment & scaling']),
      s('Digital Transformation', 'digital-transformation', '🔮', 'Modernize Every Process.',
        'Strategy and execution to digitize operations, modernize systems, and accelerate growth.',
        ['Process digitization', 'Legacy modernization', 'Cloud adoption', 'Automation', 'Data-driven operations', 'Change enablement']),
    ],
  },
  {
    name: 'Hire Developers',
    slug: 'hire-developers',
    icon: '👨‍💻',
    tagline: 'Top Engineers, On Demand',
    description:
      'Hire vetted, senior developers who integrate into your team and ship production-quality software fast.',
    services: [
      s('Hire AI Developers', 'hire-ai-developers', '🤖', 'AI Talent That Delivers.',
        'Dedicated AI developers experienced in ML, LLMs, and intelligent systems.',
        ['Vetted AI specialists', 'Flexible engagement', 'End-to-end AI delivery', 'Fast onboarding', 'Timezone alignment', 'Scalable teams']),
      s('Hire Full-Stack Developers', 'hire-full-stack-developers', '🧱', 'Front to Back, Covered.',
        'Full-stack engineers who own features end to end across frontend, backend, and infrastructure.',
        ['Modern stacks', 'End-to-end ownership', 'API & database design', 'Cloud & DevOps', 'Agile delivery', 'Flexible contracts']),
      s('Hire MERN Stack Developers', 'hire-mern-stack-developers', '⚛️', 'MongoDB. Express. React. Node.',
        'Experienced MERN developers for fast, scalable JavaScript applications.',
        ['MERN expertise', 'Scalable architecture', 'REST & GraphQL APIs', 'Responsive UIs', 'Performance tuning', 'Quick onboarding']),
      s('Hire Python Developers', 'hire-python-developers', '🐍', 'Pythonistas for Hire.',
        'Senior Python developers for backends, data, automation, and AI workloads.',
        ['Backend & API development', 'Data & automation', 'Django/FastAPI/Flask', 'ML integration', 'Testing & quality', 'Flexible engagement']),
      s('Hire React Developers', 'hire-react-developers', '⚛️', 'Build Beautiful UIs.',
        'React specialists who craft fast, accessible, and maintainable interfaces.',
        ['React & Next.js', 'Component architecture', 'State management', 'Performance optimization', 'Accessibility', 'Reusable design systems']),
      s('Hire Mobile App Developers', 'hire-mobile-app-developers', '📱', 'Apps People Keep.',
        'iOS, Android, and cross-platform developers building polished mobile experiences.',
        ['Native iOS & Android', 'React Native / Flutter', 'App store deployment', 'Performance & UX', 'Push & integrations', 'Maintenance & updates']),
    ],
  },
  {
    name: 'Internet of Things (IoT)',
    slug: 'iot',
    icon: '📡',
    tagline: 'Connect the Physical and Digital',
    description:
      'IoT product engineering, firmware, and industrial solutions that turn connected devices into business value.',
    services: [
      s('IoT Development', 'iot-development', '🔗', 'End-to-End IoT Solutions.',
        'Full-stack IoT development from devices and connectivity to cloud and dashboards.',
        ['Device & sensor integration', 'Connectivity (BLE/WiFi/LoRa)', 'Cloud ingestion & storage', 'Real-time dashboards', 'Security & OTA updates', 'Scalable architecture']),
      s('Industrial IoT Solutions', 'industrial-iot-solutions', '🏭', 'Smarter Operations.',
        'Industrial IoT that monitors equipment, optimizes processes, and prevents downtime.',
        ['Equipment monitoring', 'Predictive maintenance', 'SCADA & edge integration', 'Real-time telemetry', 'Analytics & alerts', 'Industrial security']),
      s('Firmware Development', 'firmware-development', '🔧', 'Code Close to the Metal.',
        'Reliable, efficient firmware for microcontrollers and embedded systems.',
        ['Embedded C/C++', 'RTOS development', 'Driver & peripheral integration', 'Low-power optimization', 'OTA update support', 'Testing & validation']),
      s('IoT Healthcare Software', 'iot-healthcare-software', '🩺', 'Connected Care.',
        'Secure, compliant IoT software for medical devices and remote patient monitoring.',
        ['Remote patient monitoring', 'Medical device integration', 'HIPAA-compliant data', 'Real-time alerts', 'Analytics dashboards', 'Secure connectivity']),
      s('IoT Product Development', 'iot-product-development', '📦', 'From Prototype to Product.',
        'End-to-end IoT product development including hardware, firmware, apps, and cloud.',
        ['Product strategy & design', 'Hardware & firmware', 'Mobile & web apps', 'Cloud backend', 'Prototyping & testing', 'Go-to-market support']),
      s('Hardware Design', 'hardware-design', '🔌', 'Engineered to Spec.',
        'Electronics and PCB design for connected products, from concept to manufacturing.',
        ['Schematic & PCB design', 'Component selection', 'Prototyping', 'Signal & power integrity', 'Design for manufacturing', 'Compliance testing']),
    ],
  },
  {
    name: 'Automation First',
    slug: 'automation-first',
    icon: '⚙️',
    tagline: 'Run Your Business on Autopilot',
    description:
      'Automation-first solutions that connect your tools, remove manual busywork, and let intelligent workflows and AI agents run your operations 24/7.',
    services: [
      s('Workflow Automation', 'workflow-automation', '🔄', 'Connect Everything. Automate Anything.',
        'Automated workflows that link your apps and data and remove repetitive manual steps.',
        ['No-code/low-code automation (Zapier, Make, n8n)', 'Multi-app integration & sync', 'Trigger-based task automation', 'Approval & notification flows', 'Error handling & monitoring', 'Custom internal tools']),
      s('AI Agents & Assistants', 'ai-agents-automation', '🤖', 'Autonomous AI That Gets Work Done.',
        'AI agents that handle support, research, and routine decisions autonomously across channels.',
        ['Custom AI agent development', 'Autonomous task agents', 'AI support assistants', 'RAG knowledge assistants', 'Voice & chat deployment', 'Human-in-the-loop controls']),
      s('RPA & Process Bots', 'rpa-bots', '🦾', 'Software Robots for Repetitive Work.',
        'Robotic Process Automation bots that handle high-volume, rule-based tasks with zero errors.',
        ['RPA bot development', 'Data entry & migration bots', 'Document & invoice processing', 'Web scraping & collection', 'Scheduled & event-driven bots', 'Bot monitoring & maintenance']),
      s('CRM & Sales Automation', 'crm-sales-automation', '📊', 'Close More. Chase Less.',
        'Automated lead capture, follow-ups, and pipeline management so your team sells more.',
        ['Lead capture & enrichment', 'Automated follow-up sequences', 'Pipeline & deal-stage automation', 'CRM integration (HubSpot/Salesforce/Zoho)', 'Quote & invoice automation', 'Sales dashboards']),
      s('Marketing Automation', 'marketing-automation', '📣', 'Personalized Campaigns. On Autopilot.',
        'Automated email, SMS, and multi-channel journeys that nurture leads without manual effort.',
        ['Email & SMS drip campaigns', 'Behavior-based journeys', 'Lead scoring & segmentation', 'Re-engagement flows', 'Multi-channel orchestration', 'Analytics & A/B testing']),
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getServiceBySlug(categorySlug: string, serviceSlug: string): ServiceItem | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.services.find((s) => s.slug === serviceSlug);
}

export function getAllServiceSlugs(): { category: string; service: string }[] {
  return serviceCategories.flatMap((cat) =>
    cat.services.map((svc) => ({ category: cat.slug, service: svc.slug }))
  );
}
