'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

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

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid #233554',
    color: '#ccd6f6',
  };

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#0A192F' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden" style={{ background: '#0A192F' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, #233554, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(#233554 1px, transparent 1px), linear-gradient(90deg, #233554 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: '#233554', border: '1px solid #233554', color: '#64FFDA', letterSpacing: '0.08em' }}>
            <MessageCircle className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#ccd6f6] mb-6 leading-tight">
            Let's{' '}
            <span style={{ color: '#64FFDA' }}>
              Build Together
            </span>
          </h1>
          <p className="text-xl text-[#8892B0] max-w-2xl mx-auto">
            Have a project in mind? Share your goals and we'll craft a custom strategy to reach them.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-10" style={{ background: '#0A192F', borderTop: '1px solid #233554', borderBottom: '1px solid #233554' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { Icon: Mail, title: 'Email', value: 'hello@metlink.in', desc: 'Reply within 2 hours', href: 'mailto:hello@metlink.in' },
              { Icon: Phone, title: 'Phone', value: '+91 123 456 7890', desc: '9AM – 6PM IST', href: 'tel:+911234567890' },
              { Icon: MapPin, title: 'Location', value: 'Mumbai, India', desc: 'By appointment', href: '#' },
              { Icon: Clock, title: 'Response Time', value: '< 2 Hours', desc: 'Business hours', href: '#' },
            ].map(({ Icon, title, value, desc, href }) => (
              <a key={title} href={href}
                className="group p-5 rounded-xl text-center transition-all hover:-translate-y-0.5"
                style={{ background: '#233554', border: '1px solid #233554' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110"
                  style={{ background: '#233554', border: '1px solid #233554' }}>
                  <Icon className="w-4 h-4 text-[#64FFDA]" />
                </div>
                <p className="text-[10px] text-[#8892B0] uppercase tracking-widest mb-1">{title}</p>
                <p className="font-bold text-[#ccd6f6] text-sm mb-0.5">{value}</p>
                <p className="text-xs text-[#8892B0]">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main form — split */}
      <section className="py-20" style={{ background: '#0A192F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">

            {/* Left — trust */}
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#64FFDA] mb-3">Why Work With Us</p>
              <h2 className="text-3xl font-black text-[#ccd6f6] mb-6">The Partner You've Been Looking For</h2>
              <div className="space-y-4 mb-10">
                {[
                  { icon: '', t: 'Fast Turnaround', d: 'First deliverables in 7 days or less.' },
                  { icon: '', t: 'Data-Driven Results', d: 'Every strategy backed by analytics and real KPIs.' },
                  { icon: '', t: 'AI-Powered Execution', d: 'We leverage cutting-edge AI to deliver 10x results.' },
                  { icon: '', t: 'Dedicated Account Manager', d: 'One point of contact. Always responsive.' },
                  { icon: '', t: 'NDA & Confidentiality', d: 'Your ideas and data are always protected.' },
                ].map(({ icon, t, d }) => (
                  <div key={t} className="flex items-start gap-4 p-4 rounded-xl transition-all"
                    style={{ background: '#233554', border: '1px solid #233554' }}>
                    <span className="text-xl flex-shrink-0">{icon}</span>
                    <div>
                      <p className="font-semibold text-[#ccd6f6] text-sm mb-0.5">{t}</p>
                      <p className="text-xs text-[#8892B0]">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 rounded-xl" style={{ background: '#233554', border: '1px solid #233554' }}>
                <p className="text-xs text-[#8892B0] uppercase tracking-wider mb-3">Trusted By Industries</p>
                <div className="flex flex-wrap gap-2">
                  {['FinTech','Healthcare','E-Commerce','SaaS','Real Estate','Startups'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #233554', color: '#8892B0' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl overflow-hidden"
                style={{ background: '#112240', border: '1px solid #233554' }}>
                <div className="h-0.5" style={{ background: '#64FFDA' }} />
                <div className="p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}>
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-3xl font-black text-[#ccd6f6] mb-3">Message Received!</h3>
                      <p className="text-[#8892B0] mb-8 text-lg">We'll be in touch within 2 hours during business hours.</p>
                      <Link href="/portfolio"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                        style={{ background: '#64FFDA', color: '#0A192F' }}>
                        Explore Our Work <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-black text-[#ccd6f6] mb-1">Tell Us About Your Project</h2>
                      <p className="text-[#8892B0] text-sm mb-8">Fill in the details and we'll respond shortly.</p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-[#8892B0] mb-2">Full Name *</label>
                            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required
                              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none placeholder:text-[#233554]"
                              style={inputStyle}
                              onFocus={e => (e.currentTarget.style.borderColor='#233554')}
                              onBlur={e => (e.currentTarget.style.borderColor='#233554')} />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#8892B0] mb-2">Company</label>
                            <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp"
                              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none placeholder:text-[#233554]"
                              style={inputStyle}
                              onFocus={e => (e.currentTarget.style.borderColor='#233554')}
                              onBlur={e => (e.currentTarget.style.borderColor='#233554')} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#8892B0] mb-2">Work Email *</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required
                            className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none placeholder:text-[#233554]"
                            style={inputStyle}
                            onFocus={e => (e.currentTarget.style.borderColor='#233554')}
                            onBlur={e => (e.currentTarget.style.borderColor='#233554')} />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-[#8892B0] mb-2">Service Needed</label>
                            <select name="service" value={form.service} onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none appearance-none"
                              style={{ ...inputStyle, color: form.service ? '#ccd6f6' : '#233554' }}>
                              <option value="" style={{ background:'#112240' }}>Select a service...</option>
                              {services.map(s => <option key={s} value={s} style={{ background:'#112240',color:'#ccd6f6' }}>{s}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#8892B0] mb-2">Budget Range</label>
                            <select name="budget" value={form.budget} onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none appearance-none"
                              style={{ ...inputStyle, color: form.budget ? '#ccd6f6' : '#233554' }}>
                              <option value="" style={{ background:'#112240' }}>Select budget...</option>
                              {budgets.map(b => <option key={b} value={b} style={{ background:'#112240',color:'#ccd6f6' }}>{b}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#8892B0] mb-2">Tell Us About Your Project *</label>
                          <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                            placeholder="Describe your goals, challenges, and what success looks like..." required
                            className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none placeholder:text-[#233554] resize-none"
                            style={inputStyle}
                            onFocus={e => (e.currentTarget.style.borderColor='#233554')}
                            onBlur={e => (e.currentTarget.style.borderColor='#233554')} />
                        </div>
                        <button type="submit" disabled={loading}
                          className="w-full py-4 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
                          style={{ background: '#64FFDA', color: '#0A192F', boxShadow: "none" }}>
                          {loading
                            ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />Sending...</span>
                            : <><Send className="w-4 h-4" /> Send Message — We Reply in 2 Hours</>}
                        </button>
                        <p className="text-center text-xs" style={{ color: '#3A3026' }}>By submitting, you agree to our Privacy Policy. No spam, ever.</p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
