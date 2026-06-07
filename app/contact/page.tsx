'use client';

import Link from 'next/link';
import { SectionBackdrop } from '@/components/section-backdrop';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const services = ['Digital Marketing','Performance Marketing','SEO & Content','Social Media','Brand Identity','Video Production','Web Development','Mobile App','AI Development','Business Automation','Data Science','Other'];
const budgets  = ['Under ₹1 Lakh','₹1L – ₹5L','₹5L – ₹20L','₹20L – ₹50L','₹50L+','Let\'s Discuss'];

export default function ContactPage() {
  const [form, setForm]           = useState({ name:'', email:'', company:'', service:'', budget:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState({
    email: 'hello@metlink.in', emailNote: 'Reply within 2 hours',
    phone: '+91 8602333400',   phoneNote: '9AM to 6PM IST',
    location: 'Indore, MP, India', locationNote: 'By appointment',
    responseTime: '< 2 Hours',
  });

  useEffect(() => {
    fetch('/api/public/content/contact').then(r => r.json()).then(res => { if (res.data) setInfo(res.data); }).catch(() => {});
  }, []);

  const set = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed.');
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inp = {
    base: {
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: '#FFFFFF',
      borderRadius: 12,
    } as React.CSSProperties,
    focus: 'rgba(43,128,240,0.5)',
    blur:  'rgba(255,255,255,0.1)',
  };

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#060D1A' }}>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.14) 0%, transparent 70%)', filter: 'blur(90px)' }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px]"
            style={{ background: 'radial-gradient(ellipse, rgba(95,168,255,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(43,128,240,0.1)', border: '1px solid rgba(43,128,240,0.2)', color: '#5FA8FF' }}>
              Start a Conversation
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="mb-5 max-w-2xl" style={{ color: '#FFFFFF' }}>
              Let&apos;s Build Something{' '}
              <span style={{ color: '#2B80F0' }}>Remarkable</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="pb-28 relative overflow-hidden isolate">
        <SectionBackdrop behind />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 xl:gap-16 items-start">

            {/* ── Left panel ── */}
            <FadeIn className="lg:col-span-2 space-y-6">

              {/* Contact info */}
              <div className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(43,128,240,0.6), transparent)' }} />
                <div className="p-7 space-y-5">
                  {[
                    { Icon: Mail,   label: 'Email',         val: info.email,        note: info.emailNote,    href: `mailto:${info.email}` },
                    { Icon: Phone,  label: 'Phone',         val: info.phone,        note: info.phoneNote,    href: `tel:${info.phone.replace(/\s/g,'')}` },
                    { Icon: MapPin, label: 'Location',      val: info.location,     note: info.locationNote, href: '#' },
                    { Icon: Clock,  label: 'Response Time', val: info.responseTime, note: 'Business hours',  href: '#' },
                  ].map(({ Icon, label, val, note, href }) => (
                    <a key={label} href={href}
                      className="group flex items-center gap-4 py-3 transition-all rounded-xl px-3 -mx-3"
                      style={{}}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-105"
                        style={{ background: 'rgba(43,128,240,0.12)', border: '1px solid rgba(43,128,240,0.22)' }}>
                        <Icon className="w-4 h-4" style={{ color: '#5FA8FF' }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.2em] mb-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</p>
                        <p className="text-sm font-semibold truncate" style={{ color: '#FFFFFF' }}>{val}</p>
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{note}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Why us */}
              <div className="rounded-2xl p-7 space-y-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-[10px] uppercase tracking-[0.25em] mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Why MetLink</p>
                {[
                  { num: '01', t: 'Ship in 7 Days',      d: 'First working deliverable within one week of kickoff.' },
                  { num: '02', t: 'AI-First Approach',   d: 'Every solution integrates cutting-edge AI for 10x leverage.' },
                  { num: '03', t: 'Measurable Results',  d: 'We define KPIs upfront and are accountable to every one.' },
                  { num: '04', t: 'NDA on Day One',      d: 'Your ideas and data are fully protected from the first call.' },
                ].map(({ num, t, d }) => (
                  <div key={num} className="flex gap-4 items-start">
                    <span className="text-[10px] font-black mt-0.5 shrink-0 w-6" style={{ color: 'rgba(43,128,240,0.6)' }}>{num}</span>
                    <div>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: '#FFFFFF' }}>{t}</p>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trusted industries */}
              <div className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Trusted by Industries</p>
                <div className="flex flex-wrap gap-2">
                  {['FinTech','Healthcare','E-Commerce','SaaS','Real Estate','Startups','EdTech','Logistics'].map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider"
                      style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* ── Right: form ── */}
            <FadeIn delay={0.12} className="lg:col-span-3">
              <div className="rounded-3xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}>

                {/* Accent bar */}
                <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, #1A6BD6, #2B80F0, #5FA8FF, #2B80F0, #1A6BD6)' }} />

                <div className="p-8 md:p-12">
                  {submitted ? (
                    <div className="text-center py-20">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-7"
                        style={{ background: 'linear-gradient(135deg, #2B80F0, #5FA8FF)', boxShadow: '0 0 60px rgba(43,128,240,0.3)' }}>
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-light mb-3 tracking-tight" style={{ color: '#FFFFFF' }}>Inquiry Received</h3>
                      <p className="mb-8 text-base font-light" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        We will be in touch within 2 business hours.
                      </p>
                      <Link href="/portfolio"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:brightness-110"
                        style={{ background: 'rgba(43,128,240,0.2)', border: '1px solid rgba(43,128,240,0.3)' }}>
                        Explore Our Work <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div className="mb-10">
                        <h2 className="text-3xl font-light tracking-tight mb-2" style={{ color: '#FFFFFF' }}>
                          Project Inquiry
                        </h2>
                        <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.45)' }}>
                          Share your vision and we will craft a tailored strategy within 24 hours.
                        </p>
                      </div>

                      <form onSubmit={submit} className="space-y-5">

                        {/* Row 1 */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="block text-[10px] uppercase tracking-[0.22em] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Full Name *</label>
                            <input type="text" name="name" value={form.name} onChange={set} placeholder="John Smith" required
                              className="w-full px-4 py-3.5 text-sm focus:outline-none placeholder:text-white/20 transition-all"
                              style={inp.base}
                              onFocus={e => (e.currentTarget.style.borderColor = inp.focus)}
                              onBlur={e => (e.currentTarget.style.borderColor = inp.blur)} />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-[10px] uppercase tracking-[0.22em] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Company</label>
                            <input type="text" name="company" value={form.company} onChange={set} placeholder="Acme Corp"
                              className="w-full px-4 py-3.5 text-sm focus:outline-none placeholder:text-white/20 transition-all"
                              style={inp.base}
                              onFocus={e => (e.currentTarget.style.borderColor = inp.focus)}
                              onBlur={e => (e.currentTarget.style.borderColor = inp.blur)} />
                          </div>
                        </div>

                        {/* Row 2 */}
                        <div className="space-y-2">
                          <label className="block text-[10px] uppercase tracking-[0.22em] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Work Email *</label>
                          <input type="email" name="email" value={form.email} onChange={set} placeholder="you@company.com" required
                            className="w-full px-4 py-3.5 text-sm focus:outline-none placeholder:text-white/20 transition-all"
                            style={inp.base}
                            onFocus={e => (e.currentTarget.style.borderColor = inp.focus)}
                            onBlur={e => (e.currentTarget.style.borderColor = inp.blur)} />
                        </div>

                        {/* Row 3 */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="block text-[10px] uppercase tracking-[0.22em] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Service Needed</label>
                            <select name="service" value={form.service} onChange={set}
                              className="w-full px-4 py-3.5 text-sm focus:outline-none appearance-none cursor-pointer transition-all"
                              style={{ ...inp.base, color: form.service ? '#FFFFFF' : 'rgba(255,255,255,0.3)' }}
                              onFocus={e => (e.currentTarget.style.borderColor = inp.focus)}
                              onBlur={e => (e.currentTarget.style.borderColor = inp.blur)}>
                              <option value="" style={{ background: '#0D1B2E' }}>Select a service</option>
                              {services.map(s => <option key={s} value={s} style={{ background: '#0D1B2E', color: '#FFF' }}>{s}</option>)}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="block text-[10px] uppercase tracking-[0.22em] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Budget Range</label>
                            <select name="budget" value={form.budget} onChange={set}
                              className="w-full px-4 py-3.5 text-sm focus:outline-none appearance-none cursor-pointer transition-all"
                              style={{ ...inp.base, color: form.budget ? '#FFFFFF' : 'rgba(255,255,255,0.3)' }}
                              onFocus={e => (e.currentTarget.style.borderColor = inp.focus)}
                              onBlur={e => (e.currentTarget.style.borderColor = inp.blur)}>
                              <option value="" style={{ background: '#0D1B2E' }}>Select budget</option>
                              {budgets.map(b => <option key={b} value={b} style={{ background: '#0D1B2E', color: '#FFF' }}>{b}</option>)}
                            </select>
                          </div>
                        </div>

                        {/* Row 4 */}
                        <div className="space-y-2">
                          <label className="block text-[10px] uppercase tracking-[0.22em] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Project Details *</label>
                          <textarea name="message" value={form.message} onChange={set} rows={5} required
                            placeholder="Describe your goals, current challenges, and what success looks like for you..."
                            className="w-full px-4 py-4 text-sm focus:outline-none placeholder:text-white/20 resize-none transition-all"
                            style={inp.base}
                            onFocus={e => (e.currentTarget.style.borderColor = inp.focus)}
                            onBlur={e => (e.currentTarget.style.borderColor = inp.blur)} />
                        </div>

                        {/* Error */}
                        {error && (
                          <p className="text-xs px-4 py-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#FCA5A5' }}>
                            {error}
                          </p>
                        )}

                        {/* Submit */}
                        <button type="submit" disabled={loading}
                          className="w-full py-3 rounded-xl text-xs font-semibold tracking-wide transition-all active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2.5 text-white"
                          style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }}>
                          {loading
                            ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending Inquiry...</>
                            : <>Send Inquiry <ArrowRight className="w-4 h-4" /></>}
                        </button>

                        <p className="text-center text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                          Privacy Protected &bull; No Spam Guaranteed
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Bottom info strip ── */}
      <section className="py-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#060D1A' }}>
        <StaggerChildren className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { val: '< 2 hrs',  label: 'Average Response' },
            { val: '150+',     label: 'Projects Delivered' },
            { val: '94%',      label: 'Client Retention' },
          ].map(({ val, label }) => (
            <StaggerItem key={label}>
              <p className="text-3xl font-light mb-1 tracking-tight" style={{ color: '#FFFFFF' }}>{val}</p>
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

    </div>
  );
}
