export interface ServiceItem {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  /** How this specific service moves the needle on revenue/cost for the client — shown in its own section on the service page. */
  impact: string;
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
  impact: string,
  features: string[],
  subFeatures?: { title: string; items: string[] }[],
): ServiceItem => ({ name, slug, icon, tagline, description, impact, features, subFeatures });

const _serviceCategories: ServiceCategory[] = [
  {
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: '📈',
    tagline: 'Data-Driven Growth at Scale',
    description:
      'Performance-driven digital marketing, SEO, paid media, social, and content, engineered to grow visibility, generate qualified demand, and turn traffic into revenue across every channel that matters to your buyers.',
    services: [
      s('Search Engine Optimization', 'seo', '🔍', 'Rank Higher. Get Found. Convert More.',
        'Technical, on-page, and off-page SEO built on real keyword and competitor research, so your site ranks for the searches your buyers actually make and keeps generating traffic without ongoing ad spend.',
        'Higher rankings put your business in front of buyers who are already searching for what you sell, turning organic traffic into a compounding, low-cost-per-lead channel that keeps generating revenue long after a campaign ends.',
        ['Keyword research & strategy', 'Technical SEO audits & fixes', 'On-page optimization', 'Link building & digital PR', 'Local SEO & Google Business Profile', 'Schema markup & Core Web Vitals']),
      s('Performance Marketing', 'performance-marketing', '🎯', 'Every Rupee Accountable.',
        'ROI-engineered paid media across Google, Meta, and LinkedIn, with continuous testing and attribution so every rupee of ad spend is tracked back to real conversions, not just clicks.',
        'By shifting budget continuously toward the ads and audiences that convert and cutting the ones that don’t, we lower your cost per acquisition and turn ad spend into a predictable, scalable revenue engine.',
        ['Google Ads (Search/Display/YouTube)', 'Meta Ads (Facebook + Instagram)', 'LinkedIn & B2B advertising', 'A/B testing & creative optimization', 'Conversion tracking & attribution', 'ROAS analysis & reporting']),
      s('Social Media Marketing', 'social-media-marketing', '📱', 'Always On. Always Engaging.',
        'Full-funnel social media strategy, content, and community management that builds a genuinely engaged audience and turns social presence into a steady pipeline of leads.',
        'A consistent, engaging presence builds trust with prospects before they ever talk to sales, shortening your sales cycle and turning an engaged following into a warm, repeatable pipeline of leads.',
        ['Channel strategy & content calendars', 'Creative & copy production', 'Community management', 'Paid social campaigns', 'Influencer collaborations', 'Analytics & reporting']),
      s('Content Marketing', 'content-marketing', '✍️', 'Content That Compounds.',
        'Strategic, SEO-optimized content, from blog posts to whitepapers, that answers the questions your audience is already searching for and moves them from first visit to paying customer.',
        'Every article, guide, or lead magnet becomes a permanent sales asset that keeps capturing intent-driven search traffic and nurturing prospects toward a purchase, long after the writing is done.',
        ['Content strategy & planning', 'Blog & long-form articles', 'SEO content optimization', 'Lead magnets & whitepapers', 'Email & newsletter content', 'Performance tracking']),
      s('Social Media Optimization', 'social-media-optimization', '⚡', 'Optimize Every Profile.',
        'Profile, content, and engagement optimization across every platform you’re active on, so more of the people already following you convert into leads and customers.',
        'Optimized profiles and posting cadence convert more of your existing followers and visitors into paying customers, increasing revenue from the audience you already have without spending more on reach.',
        ['Profile & bio optimization', 'Hashtag & discoverability strategy', 'Posting cadence optimization', 'Engagement & growth tactics', 'Cross-platform repurposing', 'Analytics-driven iteration']),
      s('Video Editing and Graphic Designing', 'video-editing-graphic-designing', '🎬', 'Scroll-Stopping Visuals, Every Time.',
        'Professional video editing and graphic design, from short-form Reels to full brand identities, that turns raw footage and rough ideas into polished, on-brand content built to perform across every channel.',
        'Sharper, on-brand visuals lift click-through and conversion rates across ads, social, and your website, so the same traffic and ad spend produce measurably more leads and sales.',
        ['Short-form video editing (Reels, Shorts, TikTok)', 'Long-form & YouTube editing', 'Motion graphics & animation', 'Brand identity & logo design', 'Social media creatives & ad graphics', 'Thumbnails, banners & marketing collateral', 'Color grading, subtitles & sound design', 'Presentation & pitch deck design'],
        [
          { title: 'Video Editing', items: ['Reels & Shorts', 'YouTube long-form', 'Motion graphics', 'Explainer & product videos', 'Ad & promo edits', 'Podcast & webinar editing', 'Color grading', 'Subtitles & captions', 'Sound design & mixing'] },
          { title: 'Graphic Designing', items: ['Logo & brand identity', 'Social media creatives', 'Ad & display graphics', 'Brochures & flyers', 'Pitch & sales decks', 'Infographics', 'Website & UI graphics', 'Packaging & print', 'Thumbnails & banners'] },
        ]),
    ],
  },
  {
    name: 'Generative AI',
    slug: 'generative-ai',
    icon: '✨',
    tagline: 'Build With Generative Intelligence',
    description:
      'End-to-end generative AI development, integration, and consulting that turns large language and diffusion models into production applications, autonomous agents, and copilots built around your real workflows.',
    services: [
      s('Generative AI Development', 'generative-ai-development', '🧬', 'Custom GenAI, Built for You.',
        'Custom generative AI applications built on large language and diffusion models, engineered around your specific workflows instead of forcing you to adapt to an off-the-shelf tool.',
        'A custom GenAI application automates work that currently requires paid staff hours and can unlock entirely new, chargeable product capabilities, cutting operating costs while opening new revenue lines.',
        ['Custom GenAI app development', 'LLM fine-tuning & RAG pipelines', 'Prompt engineering & guardrails', 'Multimodal (text/image/audio) models', 'Vector database integration', 'Secure deployment & monitoring']),
      s('Generative AI Integration Services', 'generative-ai-integration', '🔌', 'Plug GenAI Into Your Stack.',
        'Integration of generative AI into the products, tools, and operations you already run, so new capability ships without disrupting the systems your team depends on.',
        'Embedding GenAI directly into the tools your team already uses removes friction from everyday workflows, increasing output per employee without the cost or delay of adding headcount.',
        ['LLM API integration (OpenAI, Claude, Gemini)', 'Workflow & SaaS embedding', 'Knowledge-base connectors', 'Authentication & rate control', 'Cost & latency optimization', 'Observability & evaluation']),
      s('Generative AI Consulting', 'generative-ai-consulting', '🧭', 'Strategy Before Scale.',
        'Advisory that separates high-ROI generative AI opportunities from expensive experiments, giving you a clear, de-risked roadmap from first use case to production.',
        'A prioritized, de-risked roadmap ensures your AI budget goes toward the use cases with the clearest path to cost savings or new revenue, instead of stalling on expensive experiments that never ship.',
        ['Use-case discovery & prioritization', 'Feasibility & ROI assessment', 'Architecture & model selection', 'Data readiness review', 'Risk, governance & compliance', 'Implementation roadmap']),
      s('Hire Generative AI Engineers', 'hire-generative-ai-engineers', '👩‍💻', 'On-Demand GenAI Talent.',
        'Vetted, senior generative AI engineers who embed directly in your team, ship production-grade GenAI features fast, and scale up or down as your roadmap changes.',
        'Dedicated engineers let you ship revenue-generating GenAI features on your timeline, without the months of recruiting, interviewing, and onboarding a full-time hire would cost you.',
        ['Vetted senior GenAI engineers', 'Flexible engagement models', 'LLM, RAG & agent expertise', 'Fast onboarding', 'Timezone-aligned collaboration', 'Scale up or down anytime']),
      s('AI Agent Development', 'ai-agent-development', '🤖', 'Autonomous AI That Acts.',
        'Goal-driven AI agents that plan, call tools, and complete multi-step tasks across your systems autonomously, with human-in-the-loop controls where they matter.',
        'Autonomous agents complete multi-step tasks that used to require dedicated staff hours, freeing your team to spend more time on strategic, revenue-generating work instead of repetitive execution.',
        ['Custom agent architecture', 'Tool & API calling', 'Multi-agent orchestration', 'Memory & context management', 'Human-in-the-loop controls', 'Monitoring & evaluation']),
      s('AI Copilot Development', 'ai-copilot-development', '🧑‍✈️', 'A Copilot for Every Workflow.',
        'Embedded AI copilots that sit inside your product and give users context-aware suggestions and actions exactly where they’re already working.',
        'An in-product copilot makes your product noticeably easier to use, which increases engagement and retention, directly reducing churn and lifting the lifetime value of every customer.',
        ['In-app copilot UX', 'Context-aware retrieval', 'Action & command execution', 'Domain fine-tuning', 'Feedback & analytics loops', 'Enterprise security']),
      s('AI Marketing Agent Development', 'ai-marketing-agent-development', '📣', 'Marketing on Autopilot.',
        'Autonomous marketing agents that research, draft, schedule, and optimize campaigns around the clock, running far more experiments than a manual team ever could.',
        'Autonomous marketing agents can run and optimize far more campaigns in parallel than a manual team, increasing the volume of qualified leads generated without a proportional increase in marketing spend.',
        ['Campaign research & ideation', 'Content generation at scale', 'Channel scheduling & posting', 'Performance optimization', 'Audience segmentation', 'Reporting & insights']),
      s('Hire Prompt Engineers', 'hire-prompt-engineers', '⌨️', 'Prompts That Perform.',
        'Specialist prompt engineers who design, test, and continuously tune prompts so your AI features stay accurate, cost-efficient, and reliable in production.',
        'Well-engineered, tested prompts reduce costly model errors, hallucinations, and rework, lowering the ongoing operating cost of every AI feature you run in production.',
        ['Prompt design & templating', 'Evaluation & A/B testing', 'Guardrails & safety', 'RAG prompt optimization', 'Cost reduction', 'Documentation & handoff']),
      s('Adaptive AI Development', 'adaptive-ai-development', '🔄', 'Systems That Learn Continuously.',
        'Adaptive AI systems that keep learning from real-world feedback and data, so accuracy improves over time instead of degrading as your business changes.',
        'Systems that keep learning from real usage data stay accurate as your business changes, protecting and compounding the return on your AI investment instead of letting performance decay over time.',
        ['Continuous learning pipelines', 'Real-time feedback loops', 'Model retraining automation', 'Drift detection & monitoring', 'Personalization engines', 'Scalable MLOps']),
      s('ChatGPT Developers', 'chatgpt-developers', '💬', 'Build on GPT.',
        'Expert developers building custom GPT assistants, plugins, and integrations that put ChatGPT’s capabilities to work inside your actual product and processes.',
        'A GPT-powered assistant handles sales and support conversations around the clock, capturing leads and resolving queries outside business hours without adding to your staffing costs.',
        ['Custom GPT assistants', 'ChatGPT API integration', 'Function calling & tools', 'RAG knowledge bases', 'Fine-tuning & evaluation', 'Secure deployment']),
      s('Stable Diffusion Developers', 'stable-diffusion-developers', '🎨', 'Generative Imagery at Scale.',
        'Developers building custom image-generation pipelines on Stable Diffusion and diffusion models, tuned for your brand and optimized for production-scale inference.',
        'A custom image-generation pipeline cuts the cost and turnaround time of producing creative assets, turning what used to be a production bottleneck into an on-demand, scalable capability.',
        ['Custom image generation apps', 'Model fine-tuning & LoRA', 'ControlNet & inpainting', 'Pipeline optimization', 'Brand-safe generation', 'Scalable inference']),
      s('Large Language Model Development', 'large-language-model-development', '🧠', 'Your Own Language Model.',
        'Custom LLM development, fine-tuning, and deployment built around your own data, so the model understands your domain better than any generic, off-the-shelf alternative.',
        'A model tuned on your own data consistently outperforms generic tools on your specific tasks, creating a defensible product advantage that supports premium pricing and stronger retention.',
        ['Domain-specific fine-tuning', 'Dataset curation & labeling', 'Evaluation & benchmarking', 'RAG & retrieval design', 'Inference optimization', 'Private & on-prem deployment']),
    ],
  },
  {
    name: 'Artificial Intelligence & ML',
    slug: 'ai-ml',
    icon: '🧠',
    tagline: 'Intelligence Engineered for Impact',
    description:
      'Full-spectrum artificial intelligence and machine learning services, from strategy and custom model development to enterprise deployment and MLOps, built to automate work and unlock measurable business value.',
    services: [
      s('AI Development', 'ai-development', '🛠️', 'From Idea to Intelligent Product.',
        'Custom AI models, computer vision, and NLP solutions built to automate real work inside your business and integrate cleanly with the systems you already run.',
        'Custom models automate manual, repetitive decisions across your business, cutting operating costs while improving the speed and accuracy of processes that directly affect revenue.',
        ['Custom model development', 'Computer vision & NLP', 'Predictive analytics', 'AI integration into products', 'Data pipelines', 'Deployment & monitoring']),
      s('AI Consulting', 'ai-consulting', '🧭', 'Clarity for Your AI Journey.',
        'Strategic AI advisory that assesses your data, infrastructure, and opportunities, then prioritizes the initiatives most likely to move the business, backed by a clear roadmap and ROI model.',
        'A clear, prioritized AI roadmap means your budget goes to initiatives with a proven path to ROI first, avoiding wasted spend on experiments that never translate into real business impact.',
        ['AI opportunity assessment', 'Use-case prioritization', 'Data & infrastructure review', 'Solution architecture', 'Governance & compliance', 'Roadmap & ROI modeling']),
      s('AI Deployment Services', 'ai-deployment-services', '🚀', 'Production-Ready AI.',
        'Reliable, monitored deployment of AI models into production, with the scaling, security, and observability needed so your investment keeps performing at scale, not just in a demo.',
        'Reliable, monitored production deployment means your AI investment actually reaches users and keeps performing at scale, instead of stalling as an unused pilot that never returned value.',
        ['Model packaging & serving', 'Cloud & on-prem deployment', 'CI/CD for ML', 'Scaling & load management', 'Security & access control', 'Monitoring & alerting']),
      s('Hire AI Engineers', 'hire-ai-engineers', '👨‍🔬', 'Senior AI Talent, On Demand.',
        'Experienced AI and ML engineers who integrate directly into your team, cover the full model lifecycle, and deliver fast without the overhead of a full-time hiring cycle.',
        'On-demand senior AI talent lets you ship revenue-impacting AI features on your own timeline, without the months-long cost and risk of hiring and onboarding full-time engineers.',
        ['Vetted ML engineers', 'Flexible engagement', 'End-to-end ML expertise', 'Quick onboarding', 'Aligned timezones', 'Scalable teams']),
      s('AI as a Service', 'ai-as-a-service', '☁️', 'AI Without the Overhead.',
        'Managed AI capability delivered as a service, prebuilt APIs, hosted models, and usage-based scaling, so you get production AI without building and maintaining infrastructure yourself.',
        'Pay-as-you-scale AI capability removes the upfront infrastructure cost of building AI in-house, letting you get to market faster while protecting margins as usage grows.',
        ['Prebuilt AI APIs', 'Managed model hosting', 'Usage-based scaling', 'Continuous updates', 'SLA-backed reliability', 'Security & compliance']),
      s('Hire Action Transformer Developers', 'hire-action-transformer-developers', '⚙️', 'Models That Take Action.',
        'Developers specialized in action transformer and agentic models that operate your software directly, automating digital tasks that used to require a person at the keyboard.',
        'Agentic models that operate your software directly cut the manual hours spent on repetitive digital tasks, freeing your team for higher-value work that grows the business.',
        ['Action transformer expertise', 'Tool-use & automation', 'Custom agent workflows', 'Integration with apps', 'Evaluation & safety', 'Flexible engagement']),
      s('Enterprise AI Development', 'enterprise-ai-development', '🏢', 'AI Built for the Enterprise.',
        'Secure, scalable AI systems engineered for enterprise governance, legacy integration, and compliance, so large organizations can adopt AI without the usual regulatory risk.',
        'Secure, compliant AI systems let large organizations adopt AI without regulatory or integration risk, unlocking efficiency gains that governance concerns would otherwise block.',
        ['Enterprise architecture', 'Legacy system integration', 'Security & governance', 'Scalable infrastructure', 'Role-based access', 'Compliance & auditability']),
      s('AI Chatbot Development', 'ai-chatbot-development', '💬', 'Conversations That Convert.',
        'Intelligent chatbots that understand intent, answer accurately from your own knowledge base, and hand off to a human exactly when they should, automating support and sales conversations.',
        'An always-on chatbot captures and qualifies leads outside business hours and deflects routine support tickets, increasing conversion rates while lowering the cost of support.',
        ['NLU & intent handling', 'RAG knowledge bases', 'Multi-channel deployment', 'Live-agent handoff', 'Analytics & tuning', 'Multilingual support']),
      s('Enterprise AI Chatbot Development', 'enterprise-ai-chatbot-development', '🤝', 'Enterprise-Grade Conversational AI.',
        'Enterprise-grade conversational AI with SSO, audit logging, and CRM/ERP integrations built in, so large organizations can deploy at scale without compromising security or compliance.',
        'Enterprise-grade conversational AI handles high volumes of customer and employee queries securely, cutting support costs at a scale that legacy chatbot tools simply can’t match.',
        ['Enterprise integrations (CRM/ERP)', 'SSO & access control', 'Data privacy & compliance', 'Scalable concurrency', 'Audit logging', 'Custom domain training']),
      s('Transformer Model Development', 'transformer-model-development', '🔬', 'Custom Transformers.',
        'Custom transformer models designed, trained, and benchmarked against your own performance targets, so you get accuracy off-the-shelf models can’t match.',
        'A model tuned precisely to your data and performance targets outperforms off-the-shelf alternatives, translating directly into better product outcomes and stronger pricing power.',
        ['Architecture design', 'Training & fine-tuning', 'Dataset engineering', 'Benchmarking', 'Inference optimization', 'Deployment']),
      s('MLOps Consulting Services', 'mlops-consulting-services', '📦', 'Operationalize Your ML.',
        'MLOps pipelines and practices, CI/CD for ML, automated retraining, and drift monitoring, that make model deployment reliable and repeatable instead of a one-off manual effort.',
        'Reliable, automated ML pipelines mean fewer failed deployments and faster iteration, so your models start generating business value sooner and keep improving without constant manual firefighting.',
        ['CI/CD for ML', 'Feature stores & versioning', 'Automated retraining', 'Drift & performance monitoring', 'Infrastructure as code', 'Governance & reproducibility']),
    ],
  },
  {
    name: 'Software Development',
    slug: 'software-development',
    icon: '💻',
    tagline: 'Code That Scales. Systems That Last.',
    description:
      'End-to-end custom software engineering, from SaaS products and web applications to enterprise platforms, built to your exact processes and designed to scale as your business grows.',
    services: [
      s('Custom Software Development', 'custom-software-development', '🧩', 'Software Built Around You.',
        'Tailored software solutions engineered around your exact processes and goals, from initial discovery through deployment and long-term support.',
        'Software built around your exact processes removes the manual workarounds that slow teams down, increasing throughput and output without the cost of adding headcount.',
        ['Discovery & solution design', 'Full-stack development', 'API & integrations', 'Testing & QA', 'Deployment & DevOps', 'Maintenance & support']),
      s('SaaS Development', 'saas-development', '☁️', 'Launch Your SaaS, Faster.',
        'Multi-tenant, subscription-ready SaaS products built to scale from your first customer to your ten-thousandth, without a costly re-architecture along the way.',
        'A multi-tenant architecture built for growth from day one lets you onboard new paying customers without re-engineering your product, protecting margins as your subscriber base scales.',
        ['Multi-tenant architecture', 'Subscription & billing', 'Scalable cloud infrastructure', 'Role-based access', 'Analytics & dashboards', 'CI/CD & monitoring']),
      s('Software Consulting', 'software-consulting', '🧭', 'Build the Right Thing.',
        'Independent technical strategy and architecture guidance that stress-tests your assumptions before you build, so engineering budget goes toward the right system the first time.',
        'Getting the architecture and technology choices right upfront prevents costly rebuilds down the line, keeping your engineering budget focused on features that drive revenue instead of paying off technical debt.',
        ['Technology assessment', 'Architecture review', 'Tech stack selection', 'Scalability planning', 'Code & security audits', 'Roadmap planning']),
      s('UI/UX Design Service', 'ui-ux-design', '🎨', 'Experiences People Love.',
        'Research-driven UI/UX design, from user testing to interaction design, that removes friction from your product and turns more visitors into engaged, converting users.',
        'Research-driven design removes friction from your signup, checkout, and onboarding flows, directly increasing the conversion rate of the traffic and leads you already have.',
        ['User research & testing', 'Information architecture', 'Wireframes & prototypes', 'UI design systems', 'Interaction design', 'Usability optimization']),
      s('Enterprise Software Development', 'enterprise-software-development', '🏢', 'Built for Scale and Security.',
        'Robust, secure enterprise systems that integrate with your existing stack and meet the compliance and reliability standards large organizations require.',
        'Systems built for scale and compliance let large organizations move faster on new initiatives without the operational and regulatory risk that typically stalls enterprise projects.',
        ['Enterprise architecture', 'Legacy modernization', 'System integration', 'Security & compliance', 'High availability', 'Long-term support']),
      s('Web Application Development', 'web-application-development', '🌐', 'Fast, Modern Web Apps.',
        'High-performance web applications built with modern frameworks like React and Next.js, optimized for speed, accessibility, and conversion from day one.',
        'A faster, smoother web app keeps visitors engaged instead of bouncing to a competitor, turning more of your existing traffic into leads, sign-ups, and paying customers.',
        ['Responsive web apps', 'Modern frameworks (React/Next.js)', 'API-first development', 'Performance optimization', 'Accessibility', 'Deployment & scaling']),
      s('Digital Transformation', 'digital-transformation', '🔮', 'Modernize Every Process.',
        'Strategy and hands-on execution to digitize manual processes, modernize legacy systems, and move your operations onto a foundation built for growth.',
        'Digitizing manual processes cuts operational overhead and speeds up decision-making across the business, freeing up budget and time that can be reinvested directly into growth.',
        ['Process digitization', 'Legacy modernization', 'Cloud adoption', 'Automation', 'Data-driven operations', 'Change enablement']),
    ],
  },
  {
    name: 'Automation First',
    slug: 'automation-first',
    icon: '⚙️',
    tagline: 'Run Your Business on Autopilot',
    description:
      'Automation-first solutions that connect your tools, remove manual busywork, and let intelligent workflows, RPA bots, and AI agents run core operations around the clock.',
    services: [
      s('Workflow Automation', 'workflow-automation', '🔄', 'Connect Everything. Automate Anything.',
        'Automated workflows built with tools like Zapier, Make, and n8n that connect your apps, sync your data, and remove the repetitive manual steps between them.',
        'Automating the manual steps between your tools frees up hours of staff time every week, directly cutting operating costs while reducing the costly errors that come with manual handoffs.',
        ['No-code/low-code automation (Zapier, Make, n8n)', 'Multi-app integration & sync', 'Trigger-based task automation', 'Approval & notification flows', 'Error handling & monitoring', 'Custom internal tools']),
      s('AI Agents & Assistants', 'ai-agents-automation', '🤖', 'Autonomous AI That Gets Work Done.',
        'Autonomous AI agents that handle support, research, and routine decisions across your channels, freeing your team from repetitive work that doesn’t need a human.',
        'Autonomous agents that handle support, research, and routine decisions let your team focus on strategic, revenue-generating work instead of repetitive tasks that don’t need a human.',
        ['Custom AI agent development', 'Autonomous task agents', 'AI support assistants', 'RAG knowledge assistants', 'Voice & chat deployment', 'Human-in-the-loop controls']),
      s('RPA & Process Bots', 'rpa-bots', '🦾', 'Software Robots for Repetitive Work.',
        'Robotic Process Automation bots that handle high-volume, rule-based work, data entry, document processing, and web scraping, accurately and around the clock.',
        'Software robots handle high-volume, rule-based work around the clock at a fraction of the cost of manual labor, cutting processing costs while eliminating the errors that come with fatigue.',
        ['RPA bot development', 'Data entry & migration bots', 'Document & invoice processing', 'Web scraping & collection', 'Scheduled & event-driven bots', 'Bot monitoring & maintenance']),
      s('CRM & Sales Automation', 'crm-sales-automation', '📊', 'Close More. Chase Less.',
        'Automated lead capture, follow-up sequences, and pipeline management integrated with the CRM you already use, so fewer leads fall through the cracks.',
        'Automated follow-ups and pipeline management mean fewer leads slip through the cracks, directly increasing the number of deals your existing sales team closes each month.',
        ['Lead capture & enrichment', 'Automated follow-up sequences', 'Pipeline & deal-stage automation', 'CRM integration (HubSpot/Salesforce/Zoho)', 'Quote & invoice automation', 'Sales dashboards']),
      s('Marketing Automation', 'marketing-automation', '📣', 'Personalized Campaigns. On Autopilot.',
        'Automated email, SMS, and multi-channel journeys that nurture leads based on real behavior, running personalized campaigns at a scale no manual team could match.',
        'Personalized, automated journeys nurture far more leads in parallel than a manual team could manage, increasing conversion rates without adding to your marketing headcount.',
        ['Email & SMS drip campaigns', 'Behavior-based journeys', 'Lead scoring & segmentation', 'Re-engagement flows', 'Multi-channel orchestration', 'Analytics & A/B testing']),
    ],
  },
];

// Surface "Automation First" at the top of the Services list.
export const serviceCategories: ServiceCategory[] = [
  ..._serviceCategories.filter((c) => c.slug === 'automation-first'),
  ..._serviceCategories.filter((c) => c.slug !== 'automation-first'),
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
