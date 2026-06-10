// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import { serviceCategories } from '@/lib/services-data';
import { industries } from '@/lib/industries-data';

// ── Knowledge base built from the live site data ─────────────────
const SERVICES_KB = serviceCategories
  .map(c => `- ${c.name} (/services/${c.slug}): ${c.tagline}. Includes: ${c.services.map(s => s.name).join(', ')}.`)
  .join('\n');

const INDUSTRIES_KB = industries
  .map(i => `- ${i.name} (/industries/${i.slug}): ${i.topics.map(t => t.name).join(', ')}.`)
  .join('\n');

const CONTACT = {
  email: 'hello@metlink.in',
  phone: '+91 8602333400',
  location: 'Indore, MP, India',
  calendly: 'https://calendly.com/jitesh-bawaskar-metlinkai/30min',
};

const SYSTEM_PROMPT = `You are the official MetLink AI assistant. MetLink is an AI-first marketing and software development agency based in ${CONTACT.location}.

We help businesses with these service pillars:
${SERVICES_KB}

We serve these industries:
${INDUSTRIES_KB}

Guidelines:
- Be helpful, concise, and professional; use short paragraphs.
- Never invent prices. We work with budgets from ₹50K to ₹50L+. For exact pricing, invite them to share project details via the contact form or a quick call.
- Contact: email ${CONTACT.email}, phone ${CONTACT.phone}. Book a free strategy call: ${CONTACT.calendly}.
- We typically deliver a first working deliverable within ~7 days of kickoff.
- Recommend the most relevant service/industry pages by name when useful.
- If unsure, encourage them to book a call or email us.`;

// ── Local fallback so the bot still answers without the AI API ───
function localReply(message: string): string {
  const m = message.toLowerCase();

  if (/\b(price|pricing|cost|budget|charge|fee|quote)\b/.test(m))
    return `We tailor every engagement to scope, so pricing varies, but we work with budgets from ₹50K to ₹50L+. Share a few project details and we'll send an accurate estimate — email ${CONTACT.email} or book a free call: ${CONTACT.calendly}`;

  if (/\b(fast|deliver|timeline|how long|time|deadline|quick)\b/.test(m))
    return `We move fast — most projects see a first working deliverable within about 7 days of kickoff, with full timelines defined upfront. Want to map yours? Book a free call: ${CONTACT.calendly}`;

  if (/\b(call|book|meeting|consult|talk|schedule|demo)\b/.test(m))
    return `Happy to help — you can book a free 30-minute strategy call here: ${CONTACT.calendly}`;

  if (/\b(contact|email|phone|reach|number)\b/.test(m))
    return `You can reach us at ${CONTACT.email} or ${CONTACT.phone}. We're based in ${CONTACT.location} and reply quickly.`;

  if (/\b(industr|finance|insurance|healthcare|retail|logistics|manufactur|hospitality|startup|electronics)\b/.test(m)) {
    const hit = industries.find(i => m.includes(i.name.toLowerCase().split(' ')[0]));
    if (hit) return `For ${hit.name}, we offer: ${hit.topics.map(t => t.name).join(', ')}. Explore: /industries/${hit.slug} — or book a call: ${CONTACT.calendly}`;
    return `We work across industries including ${industries.map(i => i.name).join(', ')}. Which one are you in? You can also browse /industries.`;
  }

  if (/\b(automat|workflow|rpa|agent|bot)\b/.test(m))
    return `Automation is core to what we do — workflow automation, AI agents & assistants, RPA bots, and CRM/marketing automation. See /services/automation-first or book a call: ${CONTACT.calendly}`;

  if (/\b(ai|ml|machine learning|gpt|llm|generative|chatbot)\b/.test(m))
    return `We build AI and ML solutions — Generative AI development, AI agents, chatbots, LLM development, and MLOps. Explore /services/generative-ai and /services/ai-ml, or book a call: ${CONTACT.calendly}`;

  if (/\b(market|seo|ads|social|content|brand)\b/.test(m))
    return `Our Digital Marketing covers SEO, Performance Marketing, Social Media, Content, and SMO. See /services/digital-marketing or book a call: ${CONTACT.calendly}`;

  if (/\b(software|web|app|develop|saas|cloud|code)\b/.test(m))
    return `We do full-stack Software Development — custom software, SaaS, web apps, UI/UX, and enterprise systems. See /services/software-development or book a call: ${CONTACT.calendly}`;

  if (/\b(service|offer|do you|what can|help with)\b/.test(m))
    return `We offer: ${serviceCategories.map(c => c.name).join(', ')}. Which area interests you? You can also browse /services or book a free call: ${CONTACT.calendly}`;

  if (/\b(hi|hello|hey|good (morning|evening|afternoon))\b/.test(m))
    return `Hi! I'm the MetLink AI assistant. I can tell you about our services (marketing, AI & automation, software) and the industries we serve. What are you working on?`;

  return `Great question! MetLink offers ${serviceCategories.map(c => c.name).join(', ')} across industries like ${industries.slice(0, 4).map(i => i.name).join(', ')} and more. Tell me what you need, or reach us at ${CONTACT.email} / book a call: ${CONTACT.calendly}`;
}

export async function POST(req: Request) {
  let message = '';
  try {
    const body = await req.json();
    message = String(body.message || '');
  } catch {
    return NextResponse.json({ reply: localReply('') });
  }

  // No API key configured → answer locally instead of going "offline".
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ reply: localReply(message) });
  }

  try {
    const payload = {
      contents: [{ parts: [{ text: message }] }],
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      generationConfig: { temperature: 0.6, maxOutputTokens: 320 },
    };

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) },
    );

    const data = await res.json();
    if (!res.ok) {
      console.error('Gemini API Error:', data);
      // Graceful fallback to local knowledge instead of an error.
      return NextResponse.json({ reply: localReply(message) });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || localReply(message);
    return NextResponse.json({ reply: replyText });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ reply: localReply(message) });
  }
}
