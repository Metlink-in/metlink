'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageCircle, Zap, Target, Bot } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const services = ['Digital Marketing','Performance Marketing','SEO','Social Media','Brand Identity','Video Production','Web Development','Mobile App','AI Development','Business Automation','Data Science','Other'];
const budgets  = ['< ₹1L','₹1L – ₹5L','₹5L – ₹20L','₹20L – ₹50L','₹50L+'];

export default function ContactPage() {
  const [form, setForm]         = useState({ name:'', email:'', company:'', service:'', budget:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const inputBase = { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#FFFFFF' };
  const labelCls  = "block text-[10px] font-black uppercase tracking-[0.2em] mb-2.5" ;

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#07111F' }}>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: '#07111F' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#2B80F0',  }}>
              <MessageCircle className="w-3.5 h-3.5" /> Get In Touch
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-black mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
              Let&apos;s{' '}
              <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#2B80F0' }}>Build Together</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Have a project in mind? Share your goals and we&apos;ll craft a custom strategy to reach them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Info cards */}
      <section style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
        <StaggerChildren className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { Icon: Mail,   title: 'Email',         value: 'hello@metlink.in',  desc: 'Reply within 2 hours', href: 'mailto:hello@metlink.in' },
            { Icon: Phone,  title: 'Phone',         value: '+91 123 456 7890',  desc: '9AM – 6PM IST',         href: 'tel:+911234567890' },
            { Icon: MapPin, title: 'Location',      value: 'Mumbai, India',     desc: 'By appointment',        href: '#' },
            { Icon: Clock,  title: 'Response Time', value: '< 2 Hours',         desc: 'Business hours',        href: '#' },
          ].map(({ Icon, title, value, desc, href }) => (
            <StaggerItem key={title}>
              <a href={href}
                className="group p-5 rounded-xl text-center transition-all hover:-translate-y-1 block h-full"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,128,240,0.3)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110"
                  style={{ background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.3)' }}>
                  <Icon className="w-4 h-4" style={{ color: '#2B80F0' }} />
                </div>
                <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{title}</p>
                <p className="font-bold text-sm mb-0.5" style={{ color: '#FFFFFF' }}>{value}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* Main form — split */}
      <section className="py-20" style={{ background: '#07111F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">

            {/* Left — trust */}
            <FadeIn className="lg:col-span-2">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-4" style={{ color: '#2B80F0' }}>Why Work With Us</p>
              <h2 className="font-black mb-8" style={{ color: '#FFFFFF' }}>
                The Partner You&apos;ve{' '}
                <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#2B80F0' }}>Been Looking For</em>
              </h2>
              <div className="space-y-4 mb-12">
                {[
                  { icon: <Zap className="w-4 h-4" />,         t: 'Fast Turnaround',       d: 'First deliverables in 7 days or less.' },
                  { icon: <Target className="w-4 h-4" />,      t: 'Data-Driven Results',   d: 'Every strategy backed by analytics and real KPIs.' },
                  { icon: <Bot className="w-4 h-4" />,         t: 'AI-Powered Execution',  d: 'We leverage cutting-edge AI to deliver 10x results.' },
                  { icon: <CheckCircle className="w-4 h-4" />, t: 'NDA & Confidentiality', d: 'Your ideas and data are always protected.' },
                ].map(({ icon, t, d }) => (
                  <div key={t} className="flex items-start gap-4 p-5 rounded-2xl transition-all group"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,128,240,0.3)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                      style={{ background: 'rgba(43,128,240,0.15)', color: '#2B80F0' }}>
                      {icon}
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1" style={{ color: '#FFFFFF' }}>{t}</p>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Trusted By Industries</p>
                <div className="flex flex-wrap gap-2">
                  {['FinTech','Healthcare','E-Commerce','SaaS','Real Estate','Startups'].map(tag => (
                    <span key={tag}
                      className="px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-default transition-all hover:text-[#2B80F0]"
                      style={{ background: '#07111F', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.12)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right — form */}
            <FadeIn delay={0.15} className="lg:col-span-3">
              <div className="rounded-3xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 4px 32px rgba(0,0,0,0.3)' }}>
                <div className="h-1" style={{ background: 'linear-gradient(90deg, #2B80F0, #4B9CF4, #2B80F0)' }} />
                <div className="p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-16 animate-fadeInScale">
                      <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        style={{ background: 'linear-gradient(135deg, #2B80F0, #4B9CF4)', boxShadow: '0 0 40px rgba(43,128,240,0.2)' }}>
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-black mb-3" style={{ color: '#FFFFFF' }}>Message Received!</h3>
                      <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>We&apos;ll be in touch within 2 hours during business hours.</p>
                      <Link href="/portfolio"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white transition-all hover:brightness-95"
                        style={{ background: '#2B80F0' }}>
                        Explore Our Work <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-black mb-2" style={{ color: '#FFFFFF' }}>Project Inquiry</h2>
                      <p className="text-sm mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>Brief us on your goals and we&apos;ll build the strategy.</p>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className={labelCls} style={{ color: '#2B80F0' }}>Full Name</label>
                            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required
                              className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none placeholder:text-white/25 transition-all"
                              style={inputBase}
                              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                          </div>
                          <div>
                            <label className={labelCls} style={{ color: '#2B80F0' }}>Company</label>
                            <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp"
                              className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none placeholder:text-white/25 transition-all"
                              style={inputBase}
                              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                          </div>
                        </div>
                        <div>
                          <label className={labelCls} style={{ color: '#2B80F0' }}>Work Email</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required
                            className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none placeholder:text-white/25 transition-all"
                            style={inputBase}
                            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className={labelCls} style={{ color: '#2B80F0' }}>Service Needed</label>
                            <select name="service" value={form.service} onChange={handleChange}
                              className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none appearance-none cursor-pointer transition-all"
                              style={{ ...inputBase, color: form.service ? '#FFFFFF' : 'rgba(255,255,255,0.4)' }}
                              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}>
                              <option value="" style={{ background:'#07111F' }}>Select a service...</option>
                              {services.map(s => <option key={s} value={s} style={{ background:'#07111F',color:'#FFFFFF' }}>{s}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className={labelCls} style={{ color: '#2B80F0' }}>Budget Range</label>
                            <select name="budget" value={form.budget} onChange={handleChange}
                              className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none appearance-none cursor-pointer transition-all"
                              style={{ ...inputBase, color: form.budget ? '#FFFFFF' : 'rgba(255,255,255,0.4)' }}
                              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}>
                              <option value="" style={{ background:'#07111F' }}>Select budget...</option>
                              {budgets.map(b => <option key={b} value={b} style={{ background:'#07111F',color:'#FFFFFF' }}>{b}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className={labelCls} style={{ color: '#2B80F0' }}>Project Details</label>
                          <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                            placeholder="Describe your goals, challenges, and what success looks like..." required
                            className="w-full px-4 py-4 rounded-xl text-sm focus:outline-none placeholder:text-white/25 resize-none transition-all"
                            style={inputBase}
                            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(43,128,240,0.45)')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                        </div>
                        <button type="submit" disabled={loading}
                          className="w-full py-4 rounded-full font-black text-sm tracking-[0.08em] uppercase transition-all hover:brightness-95 active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-3 text-white"
                          style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.25)' }}>
                          {loading
                            ? <span className="flex items-center gap-3">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </span>
                            : <><Send className="w-4 h-4" /> Send Inquiry</>}
                        </button>
                        <p className="text-center text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
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
    </div>
  );
}
