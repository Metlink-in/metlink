'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle, TrendingUp, Shield, Clock, Star, Zap } from 'lucide-react';

export function PopupForm() {
  const [open, setOpen]           = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm]           = useState({ name: '', email: '', phone: '', budget: '', message: '' });
  const [loading, setLoading]     = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('ml_popup')) return;
    const t = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(t);
  }, []);

  const close = () => { sessionStorage.setItem('ml_popup', '1'); setOpen(false); };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); setTimeout(close, 3000); }, 1400);
  };

  if (!open) return null;

  const inputCls = "w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all";
  const inputStyle = { background: '#FAF9F6', border: '1px solid #E5DDD5', color: '#192540' };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="absolute inset-0 animate-fadeInScale"
        style={{ background: 'rgba(28,20,16,0.5)', backdropFilter: 'blur(6px)' }}
        onClick={close} />

      {/* Modal */}
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl animate-slideInUp flex flex-col md:flex-row"
        style={{ maxHeight: '92vh', background: '#FFFFFF', border: '1px solid #E5DDD5', boxShadow: '0 32px 80px rgba(0,0,0,0.15)' }}>

        {/* ── LEFT PANEL ── */}
        <div className="relative md:w-[42%] flex-shrink-0 p-8 flex flex-col justify-between overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #192540 0%, #2D1A12 60%, #192540 100%)' }}>

          {/* BG glow */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(43,128,240,0.2) 0%, transparent 70%)', filter: 'blur(40px)', transform: 'translate(-30%,-30%)' }} />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(232,97,42,0.15) 0%, transparent 70%)', filter: 'blur(40px)', transform: 'translate(30%,30%)' }} />

          <div className="relative z-10">
            {/* Logo mark */}
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
              style={{ background: 'linear-gradient(135deg, #192540, #2B80F0)' }}>
              <svg width="28" height="24" viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 4,92 L 4,6 L 30,6 L 50,54 L 50,92 Z" fill="rgba(255,255,255,0.95)" />
                <path d="M 60,92 L 60,48 C 60,6 108,6 108,48 L 108,92 Z" fill="rgba(255,255,255,0.65)" />
                <line x1="60" y1="46" x2="44" y2="66" stroke="rgba(255,255,255,0.9)" strokeWidth="4.5" strokeLinecap="round" />
                <circle cx="60" cy="46" r="9"   fill="rgba(255,255,255,0.25)" />
                <circle cx="60" cy="46" r="5.5" fill="white" />
                <circle cx="44" cy="66" r="5.5" fill="rgba(255,255,255,0.9)" />
              </svg>
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.35em] mb-3" style={{ color: '#4B9CF4' }}>
              Limited Spots Available
            </p>
            <h2 className="text-2xl font-black text-white leading-tight mb-3">
              Schedule Your<br />
              <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#4B9CF4' }}>
                Success Story
              </em>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Join 250+ businesses growing with AI-powered marketing and development.
            </p>

            {/* Trust points */}
            <div className="space-y-3">
              {[
                { icon: <TrendingUp className="w-3.5 h-3.5" />, text: 'Average 70% revenue growth',  color: '#16A34A' },
                { icon: <Clock className="w-3.5 h-3.5" />,      text: 'First deliverables in 7 days', color: '#2B80F0' },
                { icon: <Shield className="w-3.5 h-3.5" />,     text: 'NDA signed before we begin',   color: '#2563EB' },
                { icon: <Zap className="w-3.5 h-3.5" />,        text: 'AI-powered execution',         color: '#D97706' },
              ].map(p => (
                <div key={p.text} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: `${p.color}20`, color: p.color }}>
                    {p.icon}
                  </div>
                  <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social proof */}
          <div className="relative z-10 mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex gap-0.5 mb-2">
              {[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: '#FBBF24' }} />)}
            </div>
            <p className="text-xs italic leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              &quot;MetLink delivered in half the time and doubled our ROI.&quot;
            </p>
            <p className="text-[10px] font-bold mt-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>— Rohan M., CEO at FinEdge</p>
          </div>
        </div>

        {/* ── RIGHT PANEL — form ── */}
        <div className="flex-1 relative flex flex-col overflow-y-auto" style={{ background: '#FFFFFF' }}>
          {/* Top accent */}
          <div className="h-1 flex-shrink-0" style={{ background: 'linear-gradient(90deg, #2B80F0, #4B9CF4, #2B80F0)' }} />

          <button onClick={close}
            className="absolute top-4 right-4 z-20 p-1.5 rounded-lg transition-all hover:bg-black/5"
            style={{ color: '#ADA09A' }} aria-label="Close">
            <X className="w-4 h-4" />
          </button>

          <div className="p-8 flex-1 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-10 animate-fadeInScale">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #2B80F0, #4B9CF4)', boxShadow: '0 0 32px rgba(43,128,240,0.25)' }}>
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-2" style={{ color: '#192540' }}>You&apos;re In!</h3>
                <p className="text-sm" style={{ color: '#72645A' }}>Our strategy team will reach out within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h3 className="text-xl font-black mb-1" style={{ color: '#192540' }}>Get My Free Proposal 🚀</h3>
                  <p className="text-sm" style={{ color: '#72645A' }}>Complete the form and we&apos;ll validate your idea now.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <input type="text" placeholder="Full Name *" required value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className={inputCls} style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E5DDD5')} />

                  <input type="email" placeholder="Email Address *" required value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className={inputCls} style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E5DDD5')} />

                  <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-3 py-3 rounded-xl text-sm flex-shrink-0 whitespace-nowrap"
                      style={{ ...inputStyle, color: '#72645A' }}>
                      🇮🇳 +91
                    </div>
                    <input type="tel" placeholder="Phone number" value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      className={`${inputCls} flex-1`} style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#E5DDD5')} />
                  </div>

                  <select value={form.budget}
                    onChange={e => setForm(p => ({ ...p, budget: e.target.value }))}
                    className={`${inputCls} appearance-none cursor-pointer`}
                    style={{ ...inputStyle, color: form.budget ? '#192540' : '#ADA09A' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E5DDD5')}>
                    <option value="" style={{ background: '#FAF9F6', color: '#ADA09A' }}>Select a Budget Range</option>
                    {['< ₹1 Lakh','₹1L – ₹5L','₹5L – ₹20L','₹20L – ₹50L','₹50L+'].map(b => (
                      <option key={b} value={b} style={{ background: '#FAF9F6', color: '#192540' }}>{b}</option>
                    ))}
                  </select>

                  <textarea rows={3}
                    placeholder="Please share any information that will help us provide an accurate estimate. *"
                    required value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className={`${inputCls} resize-none`} style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E5DDD5')} />

                  <label className="flex items-center gap-3 cursor-pointer group select-none">
                    <input type="checkbox" className="w-4 h-4 rounded cursor-pointer accent-[#2B80F0]" />
                    <span className="text-xs transition-colors" style={{ color: '#ADA09A' }}>Send me a copy of NDA</span>
                  </label>

                  <button type="submit" disabled={loading}
                    className="w-full py-3.5 rounded-xl font-black text-sm uppercase tracking-[0.08em] transition-all hover:brightness-95 active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2 text-white"
                    style={{ background: '#2B80F0', boxShadow: '0 4px 16px rgba(43,128,240,0.25)' }}>
                    {loading
                      ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</>
                      : 'Submit'}
                  </button>

                  <p className="text-center text-[10px] font-bold" style={{ color: '#2B80F0' }}>
                    ✓ Your idea is 100% protected by our Non Disclosure Agreement.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
