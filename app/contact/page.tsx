'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageCircle, Zap, Target, Bot } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const services = ['Digital Marketing','Performance Marketing','SEO','Social Media','Brand Identity','Video Production','Web Development','Mobile App','AI Development','Business Automation','Data Science','Other'];
const budgets = ['< ₹1L','₹1L – ₹5L','₹5L – ₹20L','₹20L – ₹50L','₹50L+'];

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', company:'', service:'', budget:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const inputBase = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(30,41,59,0.8)',
    color: '#E2E8F0',
  };
  const labelCls = "block text-[10px] font-black uppercase tracking-[0.2em] text-[#06B6D4] mb-3";

  return (
    <div className="w-full overflow-x-hidden relative" style={{ background: '#030712' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-30 animate-blob"
            style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.2) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.4) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
              <MessageCircle className="w-3.5 h-3.5" /> Get In Touch
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[1.05]">
              Let&apos;s <span className="gradient-text-cyan">Build Together</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Share your goals and we&apos;ll craft a custom strategy to reach them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Info cards */}
      <section style={{ background: '#030712', borderTop: '1px solid rgba(30,41,59,0.6)', borderBottom: '1px solid rgba(30,41,59,0.6)' }}>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.3), rgba(139,92,246,0.3), transparent)' }} />
        <StaggerChildren className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { Icon: Mail,  title: 'Email',         value: 'hello@metlink.in',  desc: 'Reply within 2 hours',   href: 'mailto:hello@metlink.in' },
            { Icon: Phone, title: 'Phone',         value: '+91 123 456 7890', desc: '9AM – 6PM IST',           href: 'tel:+911234567890' },
            { Icon: MapPin, title: 'Location',     value: 'Mumbai, India',    desc: 'By appointment',          href: '#' },
            { Icon: Clock, title: 'Response Time', value: '< 2 Hours',       desc: 'Business hours',           href: '#' },
          ].map(({ Icon, title, value, desc, href }) => (
            <StaggerItem key={title}>
              <a href={href}
                className="group p-5 rounded-xl text-center transition-all hover:-translate-y-1 hover:border-[#06B6D4]/30 block h-full"
                style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110"
                  style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}>
                  <Icon className="w-4 h-4 text-[#06B6D4]" />
                </div>
                <p className="text-[10px] text-[#64748B] uppercase tracking-widest mb-1">{title}</p>
                <p className="font-bold text-[#E2E8F0] text-sm mb-0.5">{value}</p>
                <p className="text-xs text-[#64748B]">{desc}</p>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.3), rgba(139,92,246,0.3), transparent)' }} />
      </section>

      {/* Main form — split */}
      <section className="py-20" style={{ background: '#030712' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">

            {/* Left — trust */}
            <FadeIn className="lg:col-span-2">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#06B6D4] mb-4">Why Work With Us</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 tracking-tight">
                The Partner You&apos;ve <span className="gradient-text-cyan">Been Looking For</span>
              </h2>
              <div className="space-y-4 mb-12">
                {[
                  { icon: <Zap className="w-4 h-4 text-[#06B6D4]" />,         t: 'Fast Turnaround',        d: 'First deliverables in 7 days or less.' },
                  { icon: <Target className="w-4 h-4 text-[#06B6D4]" />,      t: 'Data-Driven Results',    d: 'Every strategy backed by analytics and real KPIs.' },
                  { icon: <Bot className="w-4 h-4 text-[#06B6D4]" />,         t: 'AI-Powered Execution',   d: 'We leverage cutting-edge AI to deliver 10x results.' },
                  { icon: <CheckCircle className="w-4 h-4 text-[#06B6D4]" />, t: 'NDA & Confidentiality',  d: 'Your ideas and data are always protected.' },
                ].map(({ icon, t, d }) => (
                  <div key={t} className="flex items-start gap-5 p-5 rounded-2xl transition-all hover:border-[#06B6D4]/30 group"
                    style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                      style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}>
                      {icon}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm mb-1">{t}</p>
                      <p className="text-xs text-[#64748B] leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 rounded-2xl" style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>
                <p className="text-[10px] text-[#64748B] font-black uppercase tracking-[0.2em] mb-4">Trusted By Industries</p>
                <div className="flex flex-wrap gap-2">
                  {['FinTech','Healthcare','E-Commerce','SaaS','Real Estate','Startups'].map(tag => (
                    <span key={tag} className="px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all hover:border-[#06B6D4]/30 hover:text-[#06B6D4]"
                      style={{ background: '#030712', color: '#64748B', border: '1px solid rgba(30,41,59,0.8)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right — form */}
            <FadeIn delay={0.15} className="lg:col-span-3">
              <div className="rounded-3xl overflow-hidden"
                style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>
                <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6, #06B6D4)' }} />
                <div className="p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-16 animate-fadeInScale">
                      <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', boxShadow: '0 0 40px rgba(6,182,212,0.3)' }}>
                        <CheckCircle className="w-12 h-12 text-[#030712]" />
                      </div>
                      <h3 className="text-3xl font-black text-[#E2E8F0] mb-3">Message Received!</h3>
                      <p className="text-[#64748B] mb-8 text-lg">We&apos;ll be in touch within 2 hours during business hours.</p>
                      <Link href="/portfolio"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all"
                        style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712' }}>
                        Explore Our Work <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Project Inquiry</h2>
                      <p className="text-[#64748B] text-sm mb-10">Brief us on your goals and we&apos;ll build the strategy.</p>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className={labelCls}>Full Name</label>
                            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required
                              className="w-full px-5 py-3.5 rounded-xl text-sm focus:outline-none placeholder:text-white/10 transition-all"
                              style={inputBase}
                              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.45)')}
                              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)')} />
                          </div>
                          <div>
                            <label className={labelCls}>Company</label>
                            <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp"
                              className="w-full px-5 py-3.5 rounded-xl text-sm focus:outline-none placeholder:text-white/10 transition-all"
                              style={inputBase}
                              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.45)')}
                              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)')} />
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Work Email</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required
                            className="w-full px-5 py-3.5 rounded-xl text-sm focus:outline-none placeholder:text-white/10 transition-all"
                            style={inputBase}
                            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.45)')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)')} />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className={labelCls}>Service Needed</label>
                            <select name="service" value={form.service} onChange={handleChange}
                              className="w-full px-5 py-3.5 rounded-xl text-sm focus:outline-none appearance-none cursor-pointer transition-all"
                              style={{ ...inputBase, color: form.service ? '#E2E8F0' : 'rgba(255,255,255,0.15)' }}
                              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.45)')}
                              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)')}>
                              <option value="" style={{ background:'#0F172A' }}>Select a service...</option>
                              {services.map(s => <option key={s} value={s} style={{ background:'#0F172A',color:'#E2E8F0' }}>{s}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className={labelCls}>Budget Range</label>
                            <select name="budget" value={form.budget} onChange={handleChange}
                              className="w-full px-5 py-3.5 rounded-xl text-sm focus:outline-none appearance-none cursor-pointer transition-all"
                              style={{ ...inputBase, color: form.budget ? '#E2E8F0' : 'rgba(255,255,255,0.15)' }}
                              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.45)')}
                              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)')}>
                              <option value="" style={{ background:'#0F172A' }}>Select budget...</option>
                              {budgets.map(b => <option key={b} value={b} style={{ background:'#0F172A',color:'#E2E8F0' }}>{b}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Project Details</label>
                          <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                            placeholder="Describe your goals, challenges, and what success looks like..." required
                            className="w-full px-5 py-4 rounded-xl text-sm focus:outline-none placeholder:text-white/10 resize-none transition-all"
                            style={inputBase}
                            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.45)')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)')} />
                        </div>
                        <button type="submit" disabled={loading}
                          className="w-full py-4 rounded-xl font-black text-sm tracking-[0.1em] uppercase transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-3"
                          style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712', boxShadow: '0 0 30px rgba(6,182,212,0.2)' }}>
                          {loading
                            ? <span className="flex items-center gap-3">
                                <span className="w-4 h-4 border-2 border-[#030712]/30 border-t-[#030712] rounded-full animate-spin" />
                                Sending...
                              </span>
                            : <><Send className="w-4 h-4" /> Send Inquiry</>}
                        </button>
                        <p className="text-center text-[10px] text-[#475569]/50 font-bold uppercase tracking-widest">
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
