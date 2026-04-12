'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import Link from 'next/link';

interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
}

const quickReplies = [
  'Tell me about your services',
  'I need a website built',
  'AI automation solutions',
  'Performance marketing',
  'Request a quote',
];

const botResponses: Record<string, string> = {
  default:
    "Thanks for reaching out! I'm MetLink's assistant. You can ask me about our services, or I'll connect you with our team directly.",
  services:
    'We offer Digital Marketing, Creative Media, AI & Automation, and Custom Software Development. Which area interests you most?',
  website:
    'Great! Our team specializes in custom web development, UI/UX design, and full-stack applications. Let me connect you with a specialist → ',
  ai: 'We build custom AI models, automation systems, ML pipelines, and conversational AI. Would you like to discuss your specific use case?',
  marketing:
    'Our performance marketing team runs campaigns across Meta, Google, LinkedIn, and more — with full analytics and ROAS optimization.',
  quote:
    "I'd love to help you get a quote! Please visit our Contact page or share your email here and our team will reach out within 2 hours.",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('service') || lower.includes('what do')) return botResponses.services;
  if (lower.includes('website') || lower.includes('web') || lower.includes('built'))
    return botResponses.website;
  if (lower.includes('ai') || lower.includes('automat') || lower.includes('machine'))
    return botResponses.ai;
  if (lower.includes('marketing') || lower.includes('ads') || lower.includes('seo'))
    return botResponses.marketing;
  if (lower.includes('quote') || lower.includes('price') || lower.includes('cost'))
    return botResponses.quote;
  return botResponses.default;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: 'bot',
      text: "👋 Hi! I'm MetLink's assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    const userMsg: Message = { id: Date.now(), from: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotResponse(text);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: 'bot', text: reply },
      ]);
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) sendMessage(input.trim());
  };

  return (
    <>
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 flex flex-col animate-slideInUp"
          style={{ maxHeight: '480px' }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">MetLink Assistant</p>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                Online
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-auto text-white/70 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-900"
            style={{ minHeight: '220px', maxHeight: '280px' }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 items-end ${msg.from === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.from === 'bot'
                      ? 'bg-blue-600'
                      : 'bg-purple-600'
                  }`}
                >
                  {msg.from === 'bot' ? (
                    <Bot className="w-3 h-3 text-white" />
                  ) : (
                    <User className="w-3 h-3 text-white" />
                  )}
                </div>
                <div
                  className={`px-3 py-2 rounded-xl text-sm max-w-[200px] ${
                    msg.from === 'bot'
                      ? 'bg-white/10 text-foreground rounded-bl-none'
                      : 'bg-blue-600 text-white rounded-br-none'
                  }`}
                >
                  {msg.text}
                  {msg.text.endsWith('→ ') && (
                    <Link href="/contact" className="underline text-blue-300 hover:text-blue-100">
                      Contact us
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-end">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <div className="px-3 py-2 rounded-xl rounded-bl-none bg-white/10 flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          <div className="px-3 py-2 bg-zinc-900 border-t border-white/5 flex gap-1.5 overflow-x-auto">
            {quickReplies.map((qr) => (
              <button
                key={qr}
                onClick={() => sendMessage(qr)}
                className="flex-shrink-0 text-xs px-2.5 py-1 rounded-full border border-white/10 text-foreground/70 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
              >
                {qr}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border-t border-white/10"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-blue-500/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-40 transition-colors"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/30 hover:scale-110 transition-transform"
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
        )}
      </button>
    </>
  );
}
