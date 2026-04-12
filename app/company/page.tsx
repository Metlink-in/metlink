'use client';

import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Users, Award, Clock, Globe } from 'lucide-react';

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'Every decision we make is anchored to one goal — measurable results for our clients.', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: Eye, title: 'Radical Transparency', desc: 'No hidden fees, no smoke and mirrors. You always know exactly where your investment is going.', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { icon: Heart, title: 'Client-Obsessed', desc: 'Your success is the only metric we care about. We treat every client\'s business like our own.', color: 'text-pink-400', bg: 'bg-pink-500/10' },
  { icon: Globe, title: 'Global Perspective', desc: 'We bring international best practices and diverse insights to every project we take on.', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { icon: Award, title: 'Excellence Always', desc: 'We don\'t ship mediocre. Every deliverable meets the highest standard of quality — always.', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { icon: Clock, title: 'Speed & Reliability', desc: 'Fast execution without cutting corners. We deliver on time, every time, with zero excuses.', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
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
  { year: '2024', event: 'Global Expansion', desc: 'Serving clients in 15+ countries with a 80+ person remote team.' },
  { year: '2025', event: 'AI-First Agency', desc: 'Positioned as India\'s leading AI marketing & development agency.' },
];

export default function CompanyPage() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium mb-6">
            About Us
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
            We Are{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              MetLink
            </span>
          </h1>
          <p className="text-xl text-foreground/50 max-w-3xl mx-auto mb-10 leading-relaxed">
            An AI-first marketing and development agency — founded on the belief that every business deserves access to world-class technology, creativity, and strategic thinking.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-xl shadow-blue-600/20">
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { v: '5+', l: 'Years in Business' },
              { v: '80+', l: 'Global Clients' },
              { v: '150+', l: 'Projects Delivered' },
              { v: '40+', l: 'Team Members' },
            ].map(({ v, l }) => (
              <div key={l}>
                <p className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{v}</p>
                <p className="text-sm text-foreground/40 mt-1 uppercase tracking-wider">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">About MetLink</h2>
              <div className="space-y-4 text-foreground/60 leading-relaxed">
                <p>
                  MetLink was founded with a single conviction: that the gap between ambitious businesses and world-class digital execution doesn't have to exist.
                </p>
                <p>
                  We're a full-service AI marketing and development agency — combining the strategic horsepower of a top-tier marketing firm with the technical depth of a software studio. We don't do cookie-cutter. Every engagement is custom-built around your goals.
                </p>
                <p>
                  From brand identity to machine learning systems, from performance ads to enterprise software — we handle the full stack of what it takes to grow a modern digital business.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slideInRight">
              {[
                { icon: '🎯', title: 'Our Mission', desc: 'To empower businesses with AI-powered marketing and technology that creates lasting competitive advantages.' },
                { icon: '🔭', title: 'Our Vision', desc: 'To become the most trusted AI marketing and development partner for ambitious businesses worldwide.' },
                { icon: '💡', title: 'Our Approach', desc: 'Data-first strategy, creative excellence, and ruthless focus on metrics that actually move the needle.' },
                { icon: '🤝', title: 'Our Promise', desc: 'Transparent pricing, honest communication, and zero-compromise quality on every single project.' },
              ].map((item, i) => (
                <div key={item.title} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all"
                  style={{ animation: `slideInUp 0.5s ease-out ${i * 0.1}s both` }}>
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-foreground/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why MetLink */}
      <section className="py-24 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">Our Differentiators</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Why Choose MetLink?</h2>
            <p className="text-foreground/50 mt-4 text-lg max-w-2xl mx-auto">
              What separates us from the hundreds of agencies you could choose instead.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                  style={{ animation: `slideInUp 0.6s ease-out ${i * 0.1}s both` }}>
                  <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${v.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">How We Got Here</h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-cyan-600 opacity-30" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex gap-8 pl-16"
                  style={{ animation: `slideInLeft 0.5s ease-out ${i * 0.1}s both` }}>
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-blue-600/20 flex-shrink-0">
                    {m.year.slice(2)}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-blue-400">{m.year}</span>
                      <h3 className="font-bold text-foreground">{m.event}</h3>
                    </div>
                    <p className="text-sm text-foreground/50 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-3">The People</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Meet the Leadership</h2>
            <p className="text-foreground/50 mt-4 text-lg max-w-2xl mx-auto">
              A diverse team of builders, strategists, and creatives — united by a passion for results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={member.name} className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 text-center"
                style={{ animation: `slideInUp 0.6s ease-out ${i * 0.1}s both` }}>
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-4xl shadow-xl shadow-blue-600/20 group-hover:scale-105 transition-transform">
                  {member.emoji}
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-1">{member.role}</p>
                <p className="text-foreground/40 text-xs">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-foreground mb-4">
            Ready to Grow With Us?
          </h2>
          <p className="text-foreground/50 mb-8 text-lg">
            Whether you're a startup or an enterprise, we're the growth partner you've been looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:opacity-90 transition-opacity shadow-xl shadow-blue-600/20">
              Start the Conversation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl border border-white/10 text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all font-semibold">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
