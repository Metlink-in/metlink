'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';

const QUICK_REPLIES = [
  'Explore Services',
  'AI Solutions',
  'Pricing Plans',
  'Book a Call',
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
        className="fixed bottom-6 right-6 z-50 rounded-2xl flex items-center justify-center shadow-xl shadow-teal-900/20 transition-all duration-500 hover:scale-110 active:scale-95 group overflow-hidden"
        style={{
          width: 56, height: 56,
          background: 'linear-gradient(135deg, #64FFDA 0%, #007BFF 100%)',
        }}
        aria-label="Chat with us"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        {open ? <X className="relative z-10 w-6 h-6 text-[#0A192F]" /> : <MessageCircle className="relative z-10 w-6 h-6 text-[#0A192F]" />}
        {!open && (
          <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500 border-2 border-[#0A192F] animate-pulse" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[360px] rounded-[28px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)] flex flex-col animate-slideInUp border border-white/10"
          style={{ 
            background: 'rgba(13, 25, 47, 0.95)', 
            backdropFilter: 'blur(20px)',
            maxHeight: '75vh' 
          }}
        >
          {/* Header */}
          <div className="px-6 py-5 flex items-center gap-4 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-[#64FFDA]/10 to-transparent pointer-events-none" />
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-[10px] font-black shrink-0 shadow-2xl border border-white/20"
              style={{ background: 'linear-gradient(135deg, #64FFDA 0%, #007BFF 100%)', color: '#0A192F' }}>ML</div>
            <div className="relative z-10">
              <p className="text-base font-black text-white tracking-tight">MetLink AI</p>
              <p className="text-[10px] text-[#64FFDA] flex items-center gap-1.5 uppercase font-black tracking-[0.15em] opacity-90">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA] shadow-[0_0_8px_#64FFDA]" /> 
                Live Support
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto p-2 rounded-xl hover:bg-white/10 text-white/50 hover:text-white transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar" style={{ minHeight: 320 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex items-end gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-fadeInScale`}>
                {m.role === 'bot' && (
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[6px] font-black shrink-0 bg-[#233554] text-[#64FFDA] mb-1 border border-white/5">ML</div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-3 text-[13px] leading-relaxed whitespace-pre-wrap shadow-xl ${
                    m.role === 'user' 
                      ? 'bg-gradient-to-br from-[#64FFDA] to-[#007BFF] text-[#0A192F] font-semibold rounded-[20px] rounded-br-none'
                      : 'bg-white/5 text-white/90 border border-white/10 rounded-[20px] rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            
            {/* Quick replies integrated in flow */}
            {messages.length === 1 && !typing && (
              <div className="flex flex-col gap-3 mt-4 ml-8 animate-slideInUp">
                <p className="text-[9px] text-white/30 uppercase font-black tracking-[0.2em]">Quick Actions</p>
                <div className="flex gap-2 flex-wrap">
                  {QUICK_REPLIES.map((qr) => (
                    <button key={qr} onClick={() => send(qr)}
                      className="text-[11px] px-4 py-2 rounded-full transition-all border border-white/10 bg-white/5 text-white/70 hover:border-[#64FFDA] hover:text-[#64FFDA] hover:bg-[#64FFDA]/5 hover:scale-105 active:scale-95">
                      {qr}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {typing && (
              <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl w-fit ml-8 bg-white/5 border border-white/10">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-[#64FFDA] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            )}
          </div>



          {/* Input Area */}
          <div className="p-5 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-3 items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message MetLink..."
                className="flex-1 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#64FFDA]/50 transition-all focus:bg-white/[0.08]"
              />
              <button type="submit" disabled={!input.trim()} 
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-20 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #64FFDA 0%, #007BFF 100%)', color: '#0A192F' }}>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
