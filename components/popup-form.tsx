'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle } from 'lucide-react';

export function PopupForm() {
  const [open, setOpen]           = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm]           = useState({ name: '', company: '', email: '', service: '' });

  useEffect(() => {
    if (sessionStorage.getItem('ml_popup')) return;
    const t = setTimeout(() => setOpen(true), 9000);
    return () => clearTimeout(t);
  }, []);

  const close = () => { sessionStorage.setItem('ml_popup', '1'); setOpen(false); };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(close, 2800);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm animate-fadeInScale"
        style={{ background: 'rgba(3,7,18,0.75)' }}
        onClick={close}
      />

      {/* Card */}
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-slideInUp"
        style={{
          background: '#0F172A',
          border: '1px solid rgba(30,41,59,0.8)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(6,182,212,0.06)',
        }}
      >
        {/* Top gradient bar */}
        <div style={{ height: 2, background: 'linear-gradient(90deg, #06B6D4, #8B5CF6, #06B6D4)' }} />

        {/* Close */}
        <button onClick={close}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-lg transition-all hover:bg-white/10"
          style={{ color: '#475569' }}>
          <X className="w-4 h-4" />
        </button>

        <div className="p-8">
          {submitted ? (
            /* Success state */
            <div className="text-center py-8 animate-fadeInScale">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', boxShadow: '0 0 40px rgba(6,182,212,0.3)' }}>
                <CheckCircle className="w-10 h-10 text-[#030712]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">You&apos;re In!</h3>
              <p className="text-sm" style={{ color: '#64748B' }}>
                Our AI strategy team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-7">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))', border: '1px solid rgba(6,182,212,0.2)' }}>
                  <Sparkles className="w-6 h-6" style={{ color: '#06B6D4' }} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2" style={{ color: '#06B6D4' }}>
                  Limited Spots Available
                </p>
                <h2 className="text-2xl font-black text-white mb-2">Become a MetLink Client</h2>
                <p className="text-sm" style={{ color: '#475569' }}>
                  Join 80+ businesses growing with AI-powered strategy.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {[
                  { name: 'name',    placeholder: 'Full Name',              type: 'text'  },
                  { name: 'company', placeholder: 'Company / Project Name', type: 'text'  },
                  { name: 'email',   placeholder: 'Work Email Address',     type: 'email' },
                ].map((f) => (
                  <input
                    key={f.name}
                    type={f.type}
                    name={f.name}
                    value={form[f.name as keyof typeof form]}
                    onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                    placeholder={f.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm text-white focus:outline-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(30,41,59,0.8)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)')}
                    onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)')}
                  />
                ))}

                <select
                  name="service"
                  value={form.service}
                  onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none appearance-none cursor-pointer transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(30,41,59,0.8)',
                    color: form.service ? '#E2E8F0' : '#475569',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)')}
                  onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)')}
                >
                  <option value="" style={{ background: '#0F172A', color: '#64748B' }}>Select a Service (optional)</option>
                  {['Digital Marketing', 'Performance Marketing', 'AI Development', 'Software Development', 'Brand Identity', 'SEO', 'Business Automation', 'Other'].map(s => (
                    <option key={s} value={s} style={{ background: '#0F172A', color: '#E2E8F0' }}>{s}</option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:brightness-110 active:scale-[0.98] text-[#030712]"
                  style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', boxShadow: '0 0 30px rgba(6,182,212,0.2)' }}>
                  Submit &amp; Get Started →
                </button>
              </form>

              <p className="text-center text-[10px] mt-4" style={{ color: '#1E293B' }}>
                No spam. We respond within 24 hours.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
