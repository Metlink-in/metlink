'use client';

import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Globe, Award, Clock } from 'lucide-react';

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'Every decision we make is anchored to one goal — measurable results for our clients.' },
  { icon: Eye, title: 'Radical Transparency', desc: 'No hidden fees, no smoke and mirrors. You always know exactly where your investment is going.' },
  { icon: Heart, title: 'Client-Obsessed', desc: "Your success is the only metric we care about. We treat every client's business like our own." },
  { icon: Globe, title: 'Global Perspective', desc: 'We bring international best practices and diverse insights to every project we take on.' },
  { icon: Award, title: 'Excellence Always', desc: "We don't ship mediocre. Every deliverable meets the highest standard of quality." },
  { icon: Clock, title: 'Speed & Reliability', desc: 'Fast execution without cutting corners. We deliver on time, every time.' },
];

const team = [
  { name: 'Aryan Shah', role: 'Founder & CEO', specialty: 'AI Strategy & Business Development', emoji: '👨‍💼' },
  { name: 'Priya Nair', role: 'CTO & Lead Architect', specialty: 'AI Systems & Cloud Infrastructure', emoji: '👩‍💻' },
  { name: 'Rahul Mehta', role: 'Head of Engineering', specialty: 'Full-Stack & Backend Systems', emoji: '👨‍🔧' },
  { name: 'Neha Kapoor', role: 'Creative Director', specialty: 'Brand Identity & UI/UX Design', emoji: '👩‍🎨' },
  { name: 'Vikram Patel', role: 'Performance Marketing Lead', specialty: 'Paid Media & Growth Strategy', emoji: '📊' },
  { name: 'Aisha Khan', role: 'AI/ML Engineer', specialty: 'Machine Learning & NLP', emoji: '🧠' },
];

const milestones = [
  { year: '2020', event: 'MetLink Founded', desc: 'Started as a 3-person digital marketing consultancy in Mumbai.' },
  { year: '2021', event: 'AI Division Launch', desc: 'Expanded into AI development, delivering first custom ML models.' },
  { year: '2022', event: '50 Clients Milestone', desc: 'Crossed 50 active clients across 10+ industries globally.' },
  { year: '2023', event: 'Software Studio', desc: 'Launched full-service software development — web, mobile, cloud.' },
  { year: '2024', event: 'Global Expansion', desc: 'Serving clients in 15+ countries with a 40+ person remote team.' },
  { year: '2025', event: 'AI-First Agency', desc: "Positioned as India's leading AI marketing & development agency." },
];

export default function CompanyPage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#000000' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, #1A1A1A, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px,transparent 1px),linear-gradient(90deg,#1A1A1A 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: '#1A1A1A', border: '1px solid #1A1A1A', color: '#FACC15', letterSpacing: '0.08em' }}>
            About Us
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#FFFFFF] mb-6 leading-tight">
            We Are{' '}
            <span style={{ color: '#FACC15' }}>
              MetLink
            </span>
          </h1>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto mb-10 leading-relaxed">
            An AI-first marketing and development agency — founded on the belief that every business deserves access to world-class technology, creativity, and strategic thinking.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 shadow-xl"
              style={{ background: '#FACC15', color: '#000000', boxShadow: "none" }}>
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:bg-white/5"
              style={{ border: '1px solid #1A1A1A', color: '#E5E5E5' }}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ background: '#000000', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[['5+','Years'],['80+','Clients'],['150+','Projects'],['40+','Team']].map(([v,l]) => (
            <div key={l}>
              <p className="text-4xl font-black" style={{ color: '#FACC15' }}>{v}</p>
              <p className="text-sm text-[#525252] mt-1 uppercase tracking-wider">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24" style={{ background: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6">About MetLink</h2>
              <div className="space-y-4 text-[#A3A3A3] leading-relaxed">
                <p>MetLink was founded with a single conviction: that the gap between ambitious businesses and world-class digital execution doesn't have to exist.</p>
                <p>We're a full-service AI marketing and development agency — combining the strategic horsepower of a top-tier marketing firm with the technical depth of a software studio. We don't do cookie-cutter. Every engagement is custom-built around your goals.</p>
                <p>From brand identity to machine learning systems, from performance ads to enterprise software — we handle the full stack of what it takes to grow a modern digital business.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎯', title: 'Our Mission', desc: 'To empower businesses with AI-powered marketing and technology that creates lasting competitive advantages.' },
                { icon: '🔭', title: 'Our Vision', desc: 'To become the most trusted AI marketing and development partner for ambitious businesses worldwide.' },
                { icon: '💡', title: 'Our Approach', desc: 'Data-first strategy, creative excellence, and ruthless focus on metrics that actually move the needle.' },
                { icon: '🤝', title: 'Our Promise', desc: 'Transparent pricing, honest communication, and zero-compromise quality on every single project.' },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl transition-all hover:-translate-y-0.5"
                  style={{ background: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-bold text-[#FFFFFF] mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-[#737373] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Our Differentiators</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF]">Why Choose MetLink?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{ background: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-[#FFFFFF] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ background: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF]">How We Got Here</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #1A1A1A, #1A1A1A)' }} />
            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="relative flex gap-8 pl-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 shadow-lg"
                    style={{ background: '#FACC15', color: '#000000', boxShadow: "none" }}>
                    {m.year.slice(2)}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-amber-400">{m.year}</span>
                      <h3 className="font-bold text-[#FFFFFF]">{m.event}</h3>
                    </div>
                    <p className="text-sm text-[#737373] leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24" style={{ background: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">The People</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF]">Meet the Leadership</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member) => (
              <div key={member.name} className="group p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-4xl shadow-xl group-hover:scale-105 transition-transform"
                  style={{ background: '#FACC15', boxShadow: "none" }}>
                  {member.emoji}
                </div>
                <h3 className="font-bold text-[#FFFFFF] text-lg mb-1">{member.name}</h3>
                <p className="text-amber-400 text-sm font-medium mb-1">{member.role}</p>
                <p className="text-[#525252] text-xs">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#000000' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, #1A1A1A, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-black text-[#FFFFFF] mb-4">Ready to Grow With Us?</h2>
          <p className="text-[#A3A3A3] mb-8 text-lg">Whether you're a startup or an enterprise, we're the growth partner you've been looking for.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-xl"
              style={{ background: '#FACC15', color: '#000000', boxShadow: "none" }}>
              Start the Conversation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all"
              style={{ border: '1px solid #1A1A1A', color: '#E5E5E5' }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
