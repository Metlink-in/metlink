'use client';

import { useState, useEffect } from 'react';
import { X, Zap } from 'lucide-react';

function MetLinkLogoSm() {
  return (
    <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="pRing" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#64FFDA"/><stop offset="0.45" stopColor="#64FFDA"/><stop offset="1" stopColor="#112240"/>
        </linearGradient>
        <linearGradient id="pMono" x1="18" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#007BFF"/><stop offset="0.4" stopColor="#64FFDA"/><stop offset="1" stopColor="#007BFF"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="#112240" stroke="url(#pRing)" strokeWidth="2.5"/>
      <path d="M18 70 L18 32 L36 54 L50 32 L64 54 L64 32" stroke="url(#pMono)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M64 70 L82 70" stroke="url(#pMono)" strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      <text x="50" y="90" textAnchor="middle" fill="url(#pRing)" fontSize="9" fontWeight="700" letterSpacing="3" fontFamily="system-ui,sans-serif">METLINK</text>
    </svg>
  );
}

export function PopupForm() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', service: '' });

  useEffect(() => {
    if (sessionStorage.getItem('ml_popup')) return;
    const t = setTimeout(() => setOpen(true), 8000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    sessionStorage.setItem('ml_popup', '1');
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(close, 2800);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#0A192F]/75 backdrop-blur-sm" onClick={close} />
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl shadow-black/70 animate-fadeInScale"
        style={{ background: '#112240', border: '1px solid #233554' }}>
        {/* Gold top line */}
        <div className="h-0.5" style={{ background: '#64FFDA' }} />

        <button onClick={close} className="absolute top-4 right-4 z-10 transition-colors"
          style={{ color: '#8892B0' }} onMouseEnter={e => (e.currentTarget.style.color='#ccd6f6')}
          onMouseLeave={e => (e.currentTarget.style.color='#8892B0')}>
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: '#233554', border: '1px solid #233554' }}>
                <Zap className="w-8 h-8 text-[#64FFDA]" />
              </div>
              <h3 className="text-2xl font-black text-[#ccd6f6] mb-2">You are in!</h3>
              <p className="text-[#8892B0] text-sm">Our team will reach out within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-7">
                <div className="flex justify-center mb-4"><MetLinkLogoSm /></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#64FFDA] mb-2">Limited Spots Available</p>
                <h2 className="text-2xl font-black text-[#ccd6f6] mb-1">Become a MetLink Client</h2>
                <p className="text-[#8892B0] text-sm">Join 80+ businesses growing with AI-powered strategy.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {[
                  { name: 'name', placeholder: 'Full Name', type: 'text' },
                  { name: 'company', placeholder: 'Company / Project Name', type: 'text' },
                  { name: 'email', placeholder: 'Work Email Address', type: 'email' },
                ] .map((f) => (
                  <input key={f.name} type={f.type} name={f.name}
                    value={form[f.name as keyof typeof form]}
                    onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                    placeholder={f.placeholder} required
                    className="w-full px-4 py-3 rounded-xl text-sm text-[#ccd6f6] placeholder:text-[#233554] focus:outline-none transition-colors"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #233554' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#233554')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#233554')}
                  />
                ))}
                <select name="service" value={form.service}
                  onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none appearance-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #233554', color: form.service ? '#ccd6f6' : '#233554' }}>
                  <option value="" style={{ background: '#112240' }}>Select a Service (optional)</option>
                  {['Digital Marketing', 'Performance Marketing', 'AI Development', 'Software Development', 'Brand Identity', 'SEO', 'Business Automation', 'Other'].map(s => (
                    <option key={s} value={s} style={{ background: '#112240', color: '#ccd6f6' }}>{s}</option>
                  ))}
                </select>
                <button type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 mt-1"
                  style={{ background: '#64FFDA', color: '#0A192F', boxShadow: "none" }}>
                  Submit & Get Started →
                </button>
              </form>

              <p className="text-center text-xs mt-4" style={{ color: '#3A3026' }}>
                No spam. We respond within 24 hours.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
