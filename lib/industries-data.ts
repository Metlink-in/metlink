export interface IndustryTopic {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Industry {
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  topics: IndustryTopic[];
}

const t = (
  name: string,
  slug: string,
  icon: string,
  tagline: string,
  description: string,
  features: string[],
): IndustryTopic => ({ name, slug, icon, tagline, description, features });

// Generic, reusable feature set generator for industry topics.
const f = (domain: string): string[] => [
  `${domain} strategy & roadmap`,
  'Use-case discovery & prioritization',
  'Custom solution development',
  'Integration with existing systems',
  'Security, privacy & compliance',
  'Deployment, monitoring & support',
];

export const industries: Industry[] = [
  {
    name: 'Finance',
    slug: 'finance',
    icon: '🏦',
    tagline: 'AI-Powered Finance and Banking',
    description:
      'AI and software solutions for banking, fintech, and asset management, from credit scoring to financial document processing.',
    topics: [
      t('Fintech AI Consulting and Development', 'fintech-ai-consulting', '💡', 'Build the Future of Fintech.', 'Consulting and development that brings AI into fintech products, payments, and platforms.', f('Fintech AI')),
      t('Fintech Software Development', 'fintech-software-development', '🧱', 'Robust Fintech Platforms.', 'Secure, scalable fintech software from digital banking to payments and lending.', f('Fintech software')),
      t('AI Use Cases for Banking and Finance', 'ai-use-cases-banking-finance', '🏛️', 'AI Where It Matters Most.', 'Identify and implement high-ROI AI use cases across banking and finance operations.', f('Banking AI')),
      t('AI in Due Diligence', 'ai-due-diligence', '🔎', 'Smarter, Faster Diligence.', 'AI that accelerates document review, risk assessment, and due diligence workflows.', f('Due diligence AI')),
      t('AI for Financial Compliance', 'ai-financial-compliance', '⚖️', 'Compliance, Automated.', 'AI systems that automate KYC, AML, and regulatory compliance monitoring.', f('Compliance AI')),
      t('GenAI for Finance and Banking', 'genai-finance-banking', '✨', 'Generative AI for Finance.', 'Generative AI applications for advisory, reporting, and customer engagement in finance.', f('GenAI finance')),
      t('GenAI for Asset Management', 'genai-asset-management', '📈', 'Intelligent Asset Management.', 'Generative AI for research, portfolio insights, and client reporting in asset management.', f('Asset management AI')),
      t('AI Loan Underwriting', 'ai-loan-underwriting', '📝', 'Faster, Fairer Lending.', 'AI underwriting models that assess risk accurately and speed up loan decisions.', f('Loan underwriting AI')),
      t('AI-based Credit Scoring', 'ai-credit-scoring', '💳', 'Credit Decisions, Reinvented.', 'Machine learning credit scoring that improves accuracy and expands access responsibly.', f('Credit scoring AI')),
      t('AI for Financial Document Processing', 'ai-financial-document-processing', '📄', 'Documents, Understood.', 'AI that extracts, classifies, and processes financial documents at scale.', f('Document processing AI')),
      t('AI for Financial Modeling', 'ai-financial-modeling', '📊', 'Models That Predict.', 'AI-driven financial modeling and forecasting for sharper decisions.', f('Financial modeling AI')),
      t('AI for Financial Planning', 'ai-financial-planning', '🗓️', 'Plan With Intelligence.', 'AI-powered financial planning and advisory that personalizes recommendations.', f('Financial planning AI')),
    ],
  },
  {
    name: 'Insurance',
    slug: 'insurance',
    icon: '🛡️',
    tagline: 'AI for the Insurance Value Chain',
    description: 'AI and automation across underwriting, claims, fraud detection, and customer experience for insurers.',
    topics: [
      t('AI Underwriting', 'ai-underwriting', '📋', 'Underwrite Smarter.', 'AI models that improve risk assessment and accelerate underwriting decisions.', f('Underwriting AI')),
      t('Claims Automation', 'claims-automation', '⚡', 'Faster Claims, Happier Customers.', 'Automated claims intake, assessment, and settlement workflows.', f('Claims automation')),
      t('Insurance Fraud Detection', 'insurance-fraud-detection', '🚨', 'Stop Fraud Early.', 'AI that detects fraudulent claims and anomalies in real time.', f('Fraud detection')),
      t('AI Customer Support for Insurance', 'ai-customer-support-insurance', '💬', 'Always-On Policyholder Support.', 'AI assistants that handle policy questions, quotes, and service 24/7.', f('Customer support AI')),
      t('Risk Assessment AI', 'risk-assessment-ai', '📉', 'Quantify Every Risk.', 'AI-driven risk modeling for pricing and portfolio decisions.', f('Risk assessment AI')),
      t('Insurance Software Development', 'insurance-software-development', '🧱', 'Modern Insurance Platforms.', 'Custom software for policy administration, claims, and distribution.', f('Insurance software')),
    ],
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    icon: '🏭',
    tagline: 'Smart Manufacturing, Powered by AI',
    description: 'AI, IoT, and automation that boost quality, uptime, and efficiency on the factory floor.',
    topics: [
      t('Predictive Maintenance', 'predictive-maintenance', '🔧', 'Prevent Downtime.', 'AI that predicts equipment failures before they happen.', f('Predictive maintenance')),
      t('Quality Inspection AI', 'quality-inspection-ai', '🔍', 'Zero-Defect Quality.', 'Computer vision that detects defects faster and more accurately than manual checks.', f('Quality inspection AI')),
      t('Industrial IoT', 'industrial-iot', '📡', 'Connected Factories.', 'IoT systems that monitor and optimize manufacturing operations in real time.', f('Industrial IoT')),
      t('Supply Chain Optimization', 'supply-chain-optimization', '🔗', 'Resilient Supply Chains.', 'AI that optimizes inventory, demand forecasting, and logistics.', f('Supply chain AI')),
      t('Process Automation', 'process-automation', '⚙️', 'Automate the Floor.', 'Automation that streamlines repetitive manufacturing and back-office tasks.', f('Process automation')),
      t('Digital Twin Solutions', 'digital-twin-solutions', '🧬', 'Simulate Before You Build.', 'Digital twins that model and optimize physical assets and processes.', f('Digital twin')),
    ],
  },
  {
    name: 'Logistics',
    slug: 'logistics',
    icon: '🚚',
    tagline: 'Intelligent Logistics and Supply Chain',
    description: 'AI and automation that optimize routing, warehousing, and fleet operations end to end.',
    topics: [
      t('Route Optimization', 'route-optimization', '🗺️', 'Every Mile, Optimized.', 'AI route planning that cuts costs and delivery times.', f('Route optimization')),
      t('Warehouse Automation', 'warehouse-automation', '📦', 'Smarter Warehouses.', 'Automation and AI for inventory, picking, and fulfillment.', f('Warehouse automation')),
      t('Demand Forecasting', 'demand-forecasting', '📈', 'Stock the Right Things.', 'AI forecasting that reduces stockouts and overstock.', f('Demand forecasting')),
      t('Fleet Management AI', 'fleet-management-ai', '🚛', 'Run a Smarter Fleet.', 'AI for vehicle tracking, maintenance, and utilization.', f('Fleet management AI')),
      t('Last-Mile Delivery Optimization', 'last-mile-delivery', '🏁', 'Win the Last Mile.', 'AI that optimizes last-mile delivery cost and speed.', f('Last-mile delivery')),
      t('Logistics Software Development', 'logistics-software-development', '🧱', 'Platforms That Move.', 'Custom logistics and supply chain software.', f('Logistics software')),
    ],
  },
  {
    name: 'Hospitality',
    slug: 'hospitality',
    icon: '🏨',
    tagline: 'AI-Enhanced Guest Experiences',
    description: 'AI and automation that personalize guest experiences and streamline hospitality operations.',
    topics: [
      t('AI Concierge', 'ai-concierge', '🛎️', 'A Concierge That Never Sleeps.', 'AI assistants that handle bookings, requests, and recommendations 24/7.', f('AI concierge')),
      t('Personalized Guest Experience', 'personalized-guest-experience', '✨', 'Tailored to Every Guest.', 'AI personalization across the guest journey.', f('Guest personalization')),
      t('Revenue Management AI', 'revenue-management-ai', '💹', 'Price It Right.', 'AI-driven dynamic pricing and revenue optimization.', f('Revenue management AI')),
      t('Booking Automation', 'booking-automation', '📅', 'Effortless Bookings.', 'Automated reservation, upsell, and confirmation workflows.', f('Booking automation')),
      t('Hospitality Chatbots', 'hospitality-chatbots', '💬', 'Instant Guest Answers.', 'Chatbots for reservations, FAQs, and service requests.', f('Hospitality chatbot')),
      t('Hospitality Software Development', 'hospitality-software-development', '🧱', 'Run the Whole Property.', 'Custom property management and guest experience software.', f('Hospitality software')),
    ],
  },
  {
    name: 'Retail',
    slug: 'retail',
    icon: '🛒',
    tagline: 'AI Commerce That Converts',
    description: 'AI and automation that personalize shopping, optimize inventory, and grow retail revenue.',
    topics: [
      t('Personalized Recommendations', 'personalized-recommendations', '🎯', 'Show Shoppers What They Want.', 'AI recommendation engines that lift conversion and AOV.', f('Recommendation AI')),
      t('Inventory Optimization', 'inventory-optimization', '📦', 'Right Stock, Right Time.', 'AI that forecasts demand and optimizes inventory.', f('Inventory optimization')),
      t('Retail Chatbots', 'retail-chatbots', '💬', 'Shopping Assistants on Demand.', 'AI chatbots for product discovery and support.', f('Retail chatbot')),
      t('Dynamic Pricing', 'dynamic-pricing', '💲', 'Price for Profit.', 'AI dynamic pricing that responds to demand and competition.', f('Dynamic pricing')),
      t('Customer Analytics', 'customer-analytics', '📊', 'Know Your Shoppers.', 'AI analytics that reveal behavior, segments, and lifetime value.', f('Customer analytics')),
      t('E-commerce Development', 'ecommerce-development', '🛍️', 'Stores That Sell.', 'Custom e-commerce platforms and integrations.', f('E-commerce')),
    ],
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    icon: '🏥',
    tagline: 'AI for Better Patient Outcomes',
    description: 'Secure, compliant AI and software that improve care, diagnostics, and healthcare operations.',
    topics: [
      t('Medical Diagnostics AI', 'medical-diagnostics-ai', '🩺', 'Diagnose With Confidence.', 'AI that assists clinicians with faster, more accurate diagnostics.', f('Diagnostics AI')),
      t('Patient Engagement', 'patient-engagement', '💬', 'Connected Patients.', 'AI assistants and tools that improve patient communication and adherence.', f('Patient engagement')),
      t('Healthcare Chatbots', 'healthcare-chatbots', '🤖', 'Care Conversations, 24/7.', 'HIPAA-aware chatbots for triage, scheduling, and FAQs.', f('Healthcare chatbot')),
      t('Medical Imaging AI', 'medical-imaging-ai', '🧠', 'See What Matters.', 'Computer vision for medical image analysis and detection.', f('Medical imaging AI')),
      t('EHR Integration', 'ehr-integration', '📋', 'Data Where Clinicians Need It.', 'Integration with EHR systems and interoperability standards.', f('EHR integration')),
      t('Healthcare Software Development', 'healthcare-software-development', '🧱', 'Compliant Health Platforms.', 'Custom, compliant healthcare software and telehealth platforms.', f('Healthcare software')),
    ],
  },
  {
    name: 'Consumer Electronics',
    slug: 'consumer-electronics',
    icon: '📱',
    tagline: 'Intelligent, Connected Devices',
    description: 'AI, embedded software, and IoT that power smart, connected consumer products.',
    topics: [
      t('Smart Device Software', 'smart-device-software', '📲', 'Software That Delights.', 'Embedded and companion software for smart consumer devices.', f('Smart device software')),
      t('Voice Assistant Integration', 'voice-assistant-integration', '🗣️', 'Hands-Free Experiences.', 'Voice and assistant integration for connected products.', f('Voice assistant')),
      t('IoT Connectivity', 'iot-connectivity', '📡', 'Always Connected.', 'Reliable, secure connectivity for consumer IoT devices.', f('IoT connectivity')),
      t('Embedded AI', 'embedded-ai', '🧠', 'Intelligence on the Edge.', 'On-device AI for responsive, private smart features.', f('Embedded AI')),
      t('Companion App Development', 'companion-app-development', '📱', 'The App That Completes It.', 'Mobile companion apps for connected devices.', f('Companion app')),
      t('Firmware Development', 'ce-firmware-development', '🔧', 'Rock-Solid Firmware.', 'Efficient firmware for consumer electronics.', f('Firmware')),
    ],
  },
  {
    name: 'Startup',
    slug: 'startup',
    icon: '🚀',
    tagline: 'Build, Launch, and Scale Faster',
    description: 'AI and product engineering that help startups validate ideas and ship MVPs fast.',
    topics: [
      t('MVP Development', 'mvp-development', '⚡', 'Ship Your MVP, Fast.', 'Lean MVP development to validate and launch quickly.', f('MVP')),
      t('AI Product Development', 'ai-product-development', '🤖', 'AI at Your Core.', 'AI-first product development for startups.', f('AI product')),
      t('Technical Co-Founder Support', 'technical-cofounder-support', '🧑‍💻', 'Your Tech Partner.', 'Fractional CTO and engineering leadership for early-stage startups.', f('Technical leadership')),
      t('Scalable Architecture', 'scalable-architecture', '🏗️', 'Built to Scale.', 'Architecture that grows with your traction.', f('Scalable architecture')),
      t('Startup Consulting', 'startup-consulting', '🧭', 'From Idea to Traction.', 'Product and tech strategy for founders.', f('Startup consulting')),
      t('Pitch-Ready Prototypes', 'pitch-ready-prototypes', '🎬', 'Impress Investors.', 'Polished prototypes that win demos and funding.', f('Prototyping')),
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getTopicBySlug(industrySlug: string, topicSlug: string): IndustryTopic | undefined {
  return getIndustryBySlug(industrySlug)?.topics.find((tp) => tp.slug === topicSlug);
}

export function getAllIndustryTopicSlugs(): { industry: string; topic: string }[] {
  return industries.flatMap((ind) =>
    ind.topics.map((tp) => ({ industry: ind.slug, topic: tp.slug }))
  );
}
