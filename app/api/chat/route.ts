// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import { serviceCategories } from '@/lib/services-data';
import { industries } from '@/lib/industries-data';
import { automationIndustries } from '@/lib/automation-data';
import { getSection } from '@/lib/get-section';

interface TeamMember { name: string; role: string; specialty: string }

// ── Knowledge base built from the live site data ─────────────────
const SERVICES_KB = serviceCategories
  .map(c => `- ${c.name} (/services/${c.slug}): ${c.tagline}. Includes: ${c.services.map(s => s.name).join(', ')}.`)
  .join('\n');

const INDUSTRIES_KB = industries
  .map(i => `- ${i.name} (/industries/${i.slug}): ${i.topics.map(t => t.name).join(', ')}.`)
  .join('\n');

const AUTOMATION_KB = automationIndustries
  .map(i => `- ${i.name} (/automation/${i.slug}): ${i.tagline}. Use cases include: ${i.topics.slice(0, 8).map(t => t.name).join(', ')}, and more.`)
  .join('\n');

const CONTACT = {
  email: 'hello@metlink.in',
  phone: '+91 8602333400',
  location: 'Indore, MP, India',
  contactUrl: 'https://www.metlinkai.com/contact',
};

function buildSystemPrompt(teamKb: string): string {
  return `You are the official MetLink AI assistant. MetLink is an AI-first marketing and software development agency based in ${CONTACT.location}.
${teamKb}
We help businesses with these service pillars:
${SERVICES_KB}

We serve these industries:
${INDUSTRIES_KB}

We also offer deep, industry-specific automation playbooks with dozens of ready-to-build use cases per industry:
${AUTOMATION_KB}

Style:
- Sound warm, human, and confident — like a helpful team member, not a brochure.
- Keep it short: 2–4 sentences. No markdown headings, no bullet dumps unless asked to list.
- Never invent prices. Budgets range from ₹50K to ₹50L+; for an exact quote, invite them to share project details or get in touch.
- We deliver a first working deliverable within ~7 days of kickoff.
- Mention the right service/industry naturally (e.g. "our Generative AI services").
- To take things forward, point people to the contact page or email — never mention phone calls, Calendly, or "booking a call".
- If you don't know something, say so briefly and point them to ${CONTACT.email} or the contact page.
- Contact page: ${CONTACT.contactUrl}.`;
}

function buildTeamKb(team: TeamMember[] | null): string {
  if (!team || team.length === 0) return '';
  const lines = team.map(m => `- ${m.name} — ${m.role}${m.specialty ? ` (${m.specialty})` : ''}`).join('\n');
  return `\nOur team:\n${lines}\n`;
}

const ALL_SERVICES = serviceCategories.flatMap(c => c.services.map(s => ({ ...s, cat: c })));
const contact = `Reach us via our contact page: ${CONTACT.contactUrl}`;

// ── Local fallback so the bot still answers cleanly without the AI API ──
function localReply(raw: string, team: TeamMember[] | null = null): string {
  const m = raw.toLowerCase().trim();

  // Greetings / smalltalk
  if (/^(hi|hello|hey|yo|hiya|namaste|good (morning|afternoon|evening))\b/.test(m) || m === '')
    return `Hi there! 👋 I'm the MetLink assistant. I can help with our marketing, AI & automation, and software services — or the industries we work in. What are you looking to build?`;

  // Founder / team
  if (/\b(founder|who (owns|runs|started|leads|is behind)|ceo|co-?founder|leadership)\b/.test(m)) {
    if (team && team.length > 0)
      return `${team.map(t => `${t.name} (${t.role})`).join(', ')} — that's who's behind MetLink AI. Want to get in touch with the team? ${contact}`;
    return `MetLink AI is driven by a passionate, experienced team dedicated to helping businesses grow with AI and automation. Reach out at ${CONTACT.email} or our contact page if you'd like to know more about the team: ${CONTACT.contactUrl}`;
  }

  if (/\b(thanks|thank you|thx|appreciate|great|awesome|cool|nice)\b/.test(m))
    return `Happy to help! If you'd like, I can point you to the right service or share your details on our contact page: ${CONTACT.contactUrl}`;

  if (/\b(bye|goodbye|see you|that'?s all|nothing)\b/.test(m))
    return `Thanks for stopping by! Whenever you're ready, reach us at ${CONTACT.email} or reach us via our contact page: ${CONTACT.contactUrl}`;

  // Who / about / why
  if (/\b(who are you|what is metlink|about you|about metlink|tell me about)\b/.test(m))
    return `MetLink is an AI-first marketing and software development agency based in ${CONTACT.location}. We help businesses grow with digital marketing, generative AI, machine learning, custom software, and automation — built around clear, measurable goals.`;

  if (/\b(why (should|choose|metlink|you)|what makes|different|better|trust)\b/.test(m))
    return `Teams choose MetLink because we're AI-first, move fast (a first working deliverable in ~7 days), and tie our work to real outcomes you can measure. One accountable team handles strategy, build, and delivery — no hand-offs.`;

  // Process / how it works
  if (/\b(process|how (do you|does it|it work)|steps|approach|methodology|get started|begin)\b/.test(m))
    return `Our process is simple: 1) Discovery & strategy, 2) Design & build in tight iterations, 3) Test & launch (first deliverable in ~7 days), 4) Optimize & scale. Want to start? ${contact}`;

  // Support / retainer
  if (/\b(support|maintenance|ongoing|retainer|after launch|long term)\b/.test(m))
    return `Yes — we offer ongoing support, optimization, and monitoring after launch. Many clients start with a project and move to a retainer once they see results. ${contact}`;

  // Hiring / dedicated devs
  if (/\b(hire|dedicated|developer|engineer|team|staff|outsourc|remote)\b/.test(m))
    return `We can provide dedicated, vetted developers and AI engineers who plug into your team with flexible engagement models. Tell me what skills you need, or reach us via our contact page: ${CONTACT.contactUrl}`;

  // Tech stack
  if (/\b(tech|stack|technolog|tools|framework|language|react|next|python|node|aws|cloud)\b/.test(m))
    return `We work across modern stacks — React/Next.js, Node, Python, and major cloud platforms (AWS, GCP, Azure) — choosing the right tools for your goals. What are you planning to build?`;

  // NDA / security / privacy
  if (/\b(nda|confidential|privacy|secure|security|data protect|safe)\b/.test(m))
    return `Absolutely — we sign an NDA before we begin, and follow strong security practices (encryption, access control, and your data kept private). Your idea is protected from day one.`;

  // Pricing
  if (/\b(price|pricing|cost|budget|charge|fee|quote|expensive|afford)\b/.test(m))
    return `Pricing depends on scope, so it varies — we work with budgets from ₹50K to ₹50L+. Share a few details about your project and we'll send an accurate estimate. ${contact}`;

  // Timeline
  if (/\b(fast|deliver|timeline|how long|time|deadline|quick|when|duration)\b/.test(m))
    return `We move fast — most projects see a first working deliverable within about 7 days of kickoff, with the full timeline agreed upfront. Want to map yours? ${contact}`;

  // Booking
  if (/\b(call|book|meeting|consult|talk to|schedule|demo|appointment)\b/.test(m))
    return `Sounds good — ${contact}`;

  // Contact / location
  if (/\b(contact|email|phone|reach|number|address|located|location|where|office)\b/.test(m))
    return `You can reach us at ${CONTACT.email} or ${CONTACT.phone}. We're based in ${CONTACT.location} and reply quickly — or reach us via our contact page: ${CONTACT.contactUrl}`;

  // Specific service match (by name keyword across all services)
  const svc = ALL_SERVICES.find(s => {
    const key = s.name.toLowerCase();
    return m.includes(key) || key.split(' ').filter(w => w.length > 4).some(w => m.includes(w));
  });
  if (svc)
    return `Yes — ${svc.name} is part of our ${svc.cat.name} services. ${svc.description} Want to explore it further or get a quote? ${contact}`;

  // Industry match
  const ind = industries.find(i => m.includes(i.name.toLowerCase().split(' ')[0]));
  if (ind)
    return `We do a lot in ${ind.name} — including ${ind.topics.slice(0, 4).map(t => t.name).join(', ')} and more. Tell me your use case, or reach us via our contact page: ${CONTACT.contactUrl}`;

  if (/\b(industr|sector|vertical)\b/.test(m))
    return `We serve ${industries.map(i => i.name).join(', ')}. Which industry are you in? I can share exactly how we help.`;

  // Industry-specific automation playbook match
  const autoInd = automationIndustries.find(i => m.includes(i.name.toLowerCase().split(' ')[0].split('&')[0].trim()));
  if (autoInd)
    return `For ${autoInd.name}, we have a ready automation playbook: ${autoInd.topics.slice(0, 5).map(t => t.name).join(', ')}, and more. See it at metlinkai.com/automation/${autoInd.slug} — or ${contact}`;

  // Category buckets
  if (/\b(automat|workflow|rpa|agent\b|bots?)\b/.test(m))
    return `Automation is core to what we do — we have ready-to-build playbooks for ${automationIndustries.map(i => i.name).join(', ')}, plus custom workflow automation, AI agents, RPA, and CRM/marketing automation. Want to automate something specific? ${contact}`;

  if (/\b(ai|ml|machine learning|gpt|llm|generative|chatbot|model)\b/.test(m))
    return `We build practical AI — generative AI apps, AI agents and chatbots, custom LLMs, and full ML/MLOps. What problem are you trying to solve with AI?`;

  if (/\b(market|seo|ads|advertis|social|content|brand|lead)\b/.test(m))
    return `Our Digital Marketing covers SEO, performance marketing, social media, content, and SMO — all focused on measurable growth. What's your main goal: traffic, leads, or sales?`;

  if (/\b(software|web ?site|web ?app|app\b|mobile|develop|saas|cloud|code|platform|product)\b/.test(m))
    return `We build full-stack software — custom apps, SaaS products, web and mobile apps, UI/UX, and enterprise systems built to scale. What are you looking to build?`;

  if (/\b(service|offer|do you do|what can you|help with|provide|capabilit)\b/.test(m))
    return `We help across five areas: ${serviceCategories.map(c => c.name).join(', ')}. Which one fits what you need? I can go deeper on any of them.`;

  if (/\b(portfolio|work|case stud|example|project|client)\b/.test(m))
    return `We've delivered projects across marketing, AI, and software for clients in many industries. You can see our work on the Portfolio page — or tell me your space and I'll share what's relevant.`;

  // Default — helpful, not a dead end
  return `Good question! MetLink helps businesses with ${serviceCategories.map(c => c.name).join(', ')} across industries like ${industries.slice(0, 4).map(i => i.name).join(', ')} and more. Tell me a bit about your goal and I'll point you the right way — or reach us at ${CONTACT.email} / ${CONTACT.contactUrl}`;
}

export async function POST(req: Request) {
  let message = '';
  try {
    const body = await req.json();
    message = String(body.message || '');
  } catch {
    return NextResponse.json({ reply: localReply('') });
  }

  const team = await getSection<TeamMember[]>('team').catch(() => null);

  // No API key configured → answer locally instead of going "offline".
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ reply: localReply(message, team) });
  }

  try {
    const payload = {
      contents: [{ parts: [{ text: message }] }],
      systemInstruction: { parts: [{ text: buildSystemPrompt(buildTeamKb(team)) }] },
      generationConfig: { temperature: 0.6, maxOutputTokens: 600 },
    };

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) },
    );

    const data = await res.json();
    if (!res.ok) {
      console.error('Gemini API Error:', data);
      // Graceful fallback to local knowledge instead of an error.
      return NextResponse.json({ reply: localReply(message, team) });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || localReply(message, team);
    return NextResponse.json({ reply: replyText });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ reply: localReply(message, team) });
  }
}
