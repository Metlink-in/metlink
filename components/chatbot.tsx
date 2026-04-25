'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Sparkles, Minimize2 } from 'lucide-react';

const QUICK_REPLIES = [
  'What AI services do you offer?',
  'How does automation work?',
  'What is your pricing?',
  'Book a strategy call',
];

interface Message { role: 'user' | 'bot'; text: string; }

export function ChatBot() {
  const [open, setOpen]       = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! I\'m the MetLink AI assistant — powered by Gemini. Ask me about our AI automation, custom model development, or any of our services. How can I help?' },
  ]);
  const [input, setInput]     = useState('');
  const [typing, setTyping]   = useState(false);
  const scrollRef             = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    setMessages((p) => [...p, { role: 'user', text }]);
    setInput('');
    setTyping(true);

    try {
      const res  = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((p) => [...p, { role: 'bot', text: data.reply }]);
    } catch {
      setMessages((p) => [...p, { role: 'bot', text: 'Sorry, I\'m having trouble connecting right now. Please email us at hello@metlink.in.' }]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group overflow-hidden"
        style={{ width: 56, height: 56, background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', boxShadow: '0 8px 32px rgba(6,182,212,0.35)' }}
        aria-label="Chat with MetLink AI"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        {open
          ? <X className="relative z-10 w-5 h-5 text-[#030712]" />
          : <Bot className="relative z-10 w-5 h-5 text-[#030712]" />
        }
        {!open && (
          <span className="absolute top-1.5 right-1.5 w-3 h-3 rounded-full bg-[#34D399] border-2 border-[#030712] animate-pulse" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[370px] rounded-[24px] overflow-hidden flex flex-col animate-slideInUp chatbot-window"
          style={{
            background: 'rgba(3,7,18,0.97)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(30,41,59,0.8)',
            maxHeight: '80vh',
            boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(6,182,212,0.1)',
          }}
        >
          {/* Header */}
          <div className="relative px-5 py-4 flex items-center gap-3 overflow-hidden"
            style={{ borderBottom: '1px solid rgba(30,41,59,0.6)' }}>
            {/* BG gradient */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(139,92,246,0.04) 100%)' }} />

            {/* Avatar */}
            <div className="relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', boxShadow: '0 0 20px rgba(6,182,212,0.3)' }}>
              <Bot className="w-5 h-5 text-[#030712]" />
            </div>

            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-black text-white">MetLink AI</p>
                <Sparkles className="w-3 h-3" style={{ color: '#06B6D4' }} />
              </div>
              <p className="text-[10px] uppercase font-bold tracking-[0.15em] flex items-center gap-1.5"
                style={{ color: '#34D399' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" style={{ boxShadow: '0 0 6px #34D399' }} />
                Online · Gemini Powered
              </p>
            </div>

            <button onClick={() => setOpen(false)}
              className="relative z-10 p-1.5 rounded-lg transition-all hover:bg-white/10"
              style={{ color: '#475569' }}>
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4" style={{ minHeight: 280 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex items-end gap-2 animate-fadeInScale ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {m.role === 'bot' && (
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mb-1"
                    style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}>
                    <Bot className="w-3 h-3 text-[#030712]" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-4 py-3 text-[13px] leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'text-[#030712] font-semibold rounded-[18px] rounded-br-none'
                      : 'text-white/90 rounded-[18px] rounded-bl-none'
                  }`}
                  style={m.role === 'user'
                    ? { background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }
                    : { background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(30,41,59,0.6)' }
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Quick replies — only on first message */}
            {messages.length === 1 && !typing && (
              <div className="flex flex-col gap-2.5 mt-2 ml-8 animate-slideInUp">
                <p className="text-[9px] uppercase font-black tracking-[0.2em]" style={{ color: '#334155' }}>Quick Actions</p>
                <div className="flex flex-col gap-1.5">
                  {QUICK_REPLIES.map((qr) => (
                    <button key={qr} onClick={() => send(qr)}
                      className="text-left text-[11px] px-4 py-2.5 rounded-xl transition-all border"
                      style={{ background: 'rgba(15,23,42,0.6)', borderColor: 'rgba(30,41,59,0.6)', color: '#64748B' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.3)';
                        (e.currentTarget as HTMLElement).style.color = '#06B6D4';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.05)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,41,59,0.6)';
                        (e.currentTarget as HTMLElement).style.color = '#64748B';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(15,23,42,0.6)';
                      }}>
                      {qr}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl w-fit ml-8"
                style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(30,41,59,0.6)' }}>
                {[0, 1, 2].map((i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{ background: '#06B6D4', animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 relative" style={{ borderTop: '1px solid rgba(30,41,59,0.5)' }}>
            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2.5 items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI services..."
                className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none transition-all"
                style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(30,41,59,0.6)' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.6)')}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:brightness-110 active:scale-95 disabled:opacity-20 shrink-0"
                style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712' }}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-center text-[9px] mt-2.5 uppercase tracking-widest" style={{ color: '#1E293B' }}>
              Powered by Google Gemini
            </p>
          </div>
        </div>
      )}
    </>
  );
}
