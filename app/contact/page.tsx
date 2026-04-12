'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const contactInfo = [
  { Icon: Mail, title: 'Email Us', value: 'hello@metlink.in', desc: 'We reply within 2 hours', href: 'mailto:hello@metlink.in' },
  { Icon: Phone, title: 'Call Us', value: '+91 (123) 456-7890', desc: 'Available 9AM – 6PM IST', href: 'tel:+911234567890' },
  { Icon: MapPin, title: 'Visit Us', value: 'Mumbai, India', desc: 'By appointment only', href: '#' },
  { Icon: Clock, title: 'Response Time', value: '< 2 Hours', desc: 'During business hours', href: '#' },
];

const services = [
  'Digital Marketing', 'Performance Marketing', 'SEO', 'Social Media',
  'Brand Identity', 'Video Production', 'Web Development', 'Mobile App',
  'AI Development', 'Business Automation', 'Data Science', 'Other',
];

const budgets = ['< ₹1L', '₹1L – ₹5L', '₹5L – ₹20L', '₹20L – ₹50L', '₹50L+'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium mb-6">
            <MessageCircle className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Build Together
            </span>
          </h1>
          <p className="text-xl text-foreground/50 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Share your goals and we'll craft a custom strategy to get you there.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map(({ Icon, title, value, desc, href }, i) => (
              <a key={title} href={href}
                className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all text-center"
                style={{ animation: `slideInUp 0.5s ease-out ${i * 0.1}s both` }}>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-xs text-foreground/40 uppercase tracking-wider mb-1">{title}</p>
                <p className="font-bold text-foreground mb-1">{value}</p>
                <p className="text-xs text-foreground/40">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main form section — split layout */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Left — why us recap */}
            <div className="lg:col-span-2">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Why Work With Us</p>
              <h2 className="text-3xl font-black text-foreground mb-6">We're the Partner You've Been Looking For</h2>

              <div className="space-y-5 mb-10">
                {[
                  { icon: '⚡', title: 'Fast Turnaround', desc: 'First deliverables in 7 days or less.' },
                  { icon: '📊', title: 'Data-Driven Results', desc: 'Every strategy backed by analytics and real KPIs.' },
                  { icon: '🤖', title: 'AI-Powered Execution', desc: 'We leverage cutting-edge AI to deliver 10x results.' },
                  { icon: '🤝', title: 'Dedicated Account Manager', desc: 'One point of contact. Always responsive.' },
                  { icon: '🔒', title: 'NDA & Confidentiality', desc: 'Your ideas and data are always protected.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-all group">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">{item.title}</p>
                      <p className="text-xs text-foreground/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <p className="text-xs text-foreground/40 uppercase tracking-wider mb-4">Trusted By</p>
                <div className="flex flex-wrap gap-2">
                  {['FinTech', 'Healthcare', 'E-Commerce', 'SaaS', 'Real Estate', 'Startups'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs border border-white/10 text-foreground/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500" />

                {submitted ? (
                  <div className="text-center py-16 animate-slideInUp">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-black text-foreground mb-3">Message Received!</h3>
                    <p className="text-foreground/60 mb-8 text-lg">
                      Our team will review your request and get back to you within 2 hours during business hours.
                    </p>
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                      Explore Our Work <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-foreground mb-2">Tell Us About Your Project</h2>
                    <p className="text-foreground/50 text-sm mb-8">Fill in the details below and we'll be in touch shortly.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name & Company */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-foreground/60 mb-2">Full Name *</label>
                          <input
                            type="text" name="name" value={form.name} onChange={handleChange}
                            placeholder="John Smith" required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-foreground/60 mb-2">Company / Project</label>
                          <input
                            type="text" name="company" value={form.company} onChange={handleChange}
                            placeholder="Acme Corp"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-foreground/60 mb-2">Work Email *</label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="john@acmecorp.com" required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>

                      {/* Service & Budget */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-foreground/60 mb-2">Service Needed</label>
                          <select
                            name="service" value={form.service} onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                          >
                            <option value="" className="bg-zinc-900">Select a service...</option>
                            {services.map((s) => (
                              <option key={s} value={s} className="bg-zinc-900">{s}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-foreground/60 mb-2">Budget Range</label>
                          <select
                            name="budget" value={form.budget} onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                          >
                            <option value="" className="bg-zinc-900">Select budget...</option>
                            {budgets.map((b) => (
                              <option key={b} value={b} className="bg-zinc-900">{b}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-foreground/60 mb-2">Tell Us About Your Project *</label>
                        <textarea
                          name="message" value={form.message} onChange={handleChange}
                          placeholder="Describe your goals, challenges, and what success looks like for you..."
                          rows={5} required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-xl shadow-blue-600/20 disabled:opacity-60 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message & Get a Response in 2 Hours
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-foreground/30">
                        By submitting, you agree to our Privacy Policy. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
