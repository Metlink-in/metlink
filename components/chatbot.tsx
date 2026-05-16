'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Sparkles, Minimize2 } from 'lucide-react';

const QUICK_REPLIES = [
  'What AI services do you offer?',
  'How fast can you deliver?',
  'What is your pricing?',
  'Book a strategy call',
];

interface Message { role: 'user' | 'bot'; text: string; }

export function ChatBot() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi! I'm the MetLink AI assistant. Ask me about our AI automation, software development, digital marketing, or creative media services. How can I help you today?" },
  ]);
  const [input, setInput]   = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef           = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    setMessages(p => [...p, { role: 'user', text }]);
    setInput('');
    setTyping(true);

    try {
      const res  = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages(p => [...p, { role: 'bot', text: data.reply }]);
    } catch {
      setMessages(p => [...p, { role: 'bot', text: 'Sorry, I\'m having trouble connecting. Please email us at hello@metlink.in.' }]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-6 right-6 z-50 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group overflow-hidden"
        style={{ width: 52, height: 52, background: '#2B80F0', boxShadow: '0 6px 24px rgba(43,128,240,0.35)' }}
        aria-label="Chat with MetLink AI"
      >
        <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {open
          ? <X className="relative z-10 w-5 h-5 text-white" />
          : <Bot className="relative z-10 w-5 h-5 text-white" />
        }
        {!open && (
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-white animate-pulse" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[360px] rounded-2xl overflow-hidden flex flex-col animate-slideInUp chatbot-window"
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5DDD5',
            maxHeight: '80vh',
            boxShadow: '0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
          }}
        >
          {/* Header */}
          <div className="relative px-5 py-4 flex items-center gap-3 overflow-hidden"
            style={{ background: '#FAF9F6', borderBottom: '1px solid #E5DDD5' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #2B80F0, #4B9CF4, #2B80F0)' }} />

            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white"
              style={{ background: '#2B80F0', boxShadow: '0 4px 14px rgba(43,128,240,0.3)' }}>
              <Bot className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-black" style={{ color: '#192540' }}>MetLink AI</p>
                <Sparkles className="w-3 h-3" style={{ color: '#2B80F0' }} />
              </div>
              <p className="text-[10px] uppercase font-bold tracking-[0.15em] flex items-center gap-1.5"
                style={{ color: '#16A34A' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Online · Powered by Gemini
              </p>
            </div>

            <button onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg transition-all hover:bg-black/5"
              style={{ color: '#ADA09A' }}>
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: 260, background: '#FAFAF8' }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex items-end gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {m.role === 'bot' && (
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mb-1 text-white"
                    style={{ background: '#2B80F0' }}>
                    <Bot className="w-3 h-3" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-4 py-3 text-[13px] leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'text-white font-semibold rounded-[16px] rounded-br-sm'
                      : 'rounded-[16px] rounded-bl-sm'
                  }`}
                  style={m.role === 'user'
                    ? { background: '#2B80F0' }
                    : { background: '#FFFFFF', border: '1px solid #E5DDD5', color: '#192540' }
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Quick replies — first message only */}
            {messages.length === 1 && !typing && (
              <div className="flex flex-col gap-1.5 mt-2 ml-8 animate-slideInUp">
                <p className="text-[9px] uppercase font-black tracking-[0.2em]" style={{ color: '#ADA09A' }}>Quick Actions</p>
                <div className="flex flex-col gap-1.5">
                  {QUICK_REPLIES.map(qr => (
                    <button key={qr} onClick={() => send(qr)}
                      className="text-left text-[11px] px-4 py-2.5 rounded-xl transition-all border"
                      style={{ background: '#FFFFFF', borderColor: '#E5DDD5', color: '#72645A' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,128,240,0.3)';
                        (e.currentTarget as HTMLElement).style.color = '#2B80F0';
                        (e.currentTarget as HTMLElement).style.background = '#EEF4FE';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = '#E5DDD5';
                        (e.currentTarget as HTMLElement).style.color = '#72645A';
                        (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
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
                style={{ background: '#FFFFFF', border: '1px solid #E5DDD5' }}>
                {[0,1,2].map(i => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{ background: '#2B80F0', animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3.5" style={{ borderTop: '1px solid #E5DDD5', background: '#FFFFFF' }}>
            <form onSubmit={e => { e.preventDefault(); send(input); }} className="flex gap-2 items-center">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-all"
                style={{ background: '#FAF9F6', border: '1px solid #E5DDD5', color: '#192540' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = '#E5DDD5')}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:brightness-95 active:scale-95 disabled:opacity-30 shrink-0 text-white"
                style={{ background: '#2B80F0' }}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="text-center text-[9px] mt-2 uppercase tracking-widest" style={{ color: '#D5CCBF' }}>
              Powered by Google Gemini
            </p>
          </div>
        </div>
      )}
    </>
  );
}
