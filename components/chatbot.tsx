'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';

const QUICK_REPLIES = [
  'Tell me about your services',
  'I need AI development',
  'Performance marketing pricing',
  'How do I get started?',
];

interface Message { role: 'user' | 'bot'; text: string; }

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! I\'m the MetLink AI assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: Message = { role: 'user', text };
    setMessages((p) => [...p, userMsg]);
    setInput('');
    setTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((p) => [...p, { role: 'bot', text: data.reply }]);
    } catch (error) {
      setMessages((p) => [...p, { role: 'bot', text: "Sorry, I am having trouble connecting to the network right now. Please email us at hello@metlink.in." }]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-13 h-13 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        style={{
          width: 52, height: 52,
          background: '#64FFDA',
          boxShadow: "none",
        }}
        aria-label="Chat with us"
      >
        {open ? <X className="w-5 h-5 text-[#0A192F]" /> : <MessageCircle className="w-5 h-5 text-[#0A192F]" />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0A192F]" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/70 flex flex-col animate-slideInUp"
          style={{ background: '#112240', border: '1px solid #233554', maxHeight: '70vh' }}
        >
          {/* Header */}
          <div className="px-4 py-3 flex items-center gap-3" style={{ background: '#112240', borderBottom: '1px solid #233554' }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black shrink-0"
              style={{ background: '#64FFDA', color: '#0A192F' }}>ML</div>
            <div>
              <p className="text-sm font-bold text-[#ccd6f6]">MetLink Assistant</p>
              <p className="text-xs text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Online now</p>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-[#8892B0] hover:text-[#ccd6f6] transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: 200 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-wrap"
                  style={m.role === 'user'
                    ? { background: '#64FFDA', color: '#0A192F', fontWeight: 500 }
                    : { background: 'rgba(255,255,255,0.06)', color: '#ccd6f6', border: '1px solid #233554' }
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-1 px-3 py-2 rounded-xl w-fit" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid #233554' }}>
                {[0, 1, 2].map((i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div className="px-3 pb-2 flex gap-1.5 flex-wrap" style={{ borderTop: '1px solid #233554' }}>
            {QUICK_REPLIES.map((qr) => (
              <button key={qr} onClick={() => send(qr)}
                className="text-xs px-2.5 py-1 rounded-lg transition-all hover:opacity-80 mt-2"
                style={{ background: '#233554', color: '#64FFDA', border: '1px solid #233554' }}>
                {qr}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3" style={{ borderTop: '1px solid #233554' }}>
            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 rounded-xl text-sm text-[#ccd6f6] placeholder:text-[#233554] focus:outline-none"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #233554' }}
              />
              <button type="submit" disabled={!input.trim()} className="p-2 rounded-xl transition-opacity hover:opacity-80 disabled:opacity-50"
                style={{ background: '#64FFDA', color: '#0A192F' }}>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
