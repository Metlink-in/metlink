// app/api/chat/route.ts
import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are the official MetLink agency AI assistant. 
MetLink is an AI Marketing & Development Agency based in Mumbai, India.
We provide 4 main pillars of service:
1. Digital Marketing (SEO, Social Media, Performance Marketing, Personal Branding)
2. Creative Media (Video Production, Web Design, UI/UX, Brand Identity)
3. AI & Automation (AI Development, NLP, Chatbots, Data Science)
4. Software Development (App/Web Dev, Cloud API, Business Automation)

Be helpful, concise, and professional. 
Never make up prices. We work with budgets from ₹50K to ₹50L+. 
Our email is hello@metlink.in and phone is +91 123 456 7890.
If they ask for specific contact info or pricing, encourage them to fill out the contact form or email us directly.
Use short paragraphs and an engaging tone.`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured.' },
        { status: 500 }
      );
    }

    const payload = {
      contents: [{
        parts: [{ text: message }]
      }],
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 256,
      }
    };

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
        console.error("Gemini API Error:", data);
        throw new Error('Failed to generate response from Gemini');
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble connecting right now. Please email us at hello@metlink.in.";

    return NextResponse.json({ reply: replyText });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: "Sorry, I am currently offline. Please reach out to hello@metlink.in." },
      { status: 500 }
    );
  }
}
