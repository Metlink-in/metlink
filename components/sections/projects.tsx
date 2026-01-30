'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured e-commerce platform with AI-powered recommendations.',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    stats: ['500K+ Users', '2M+ Transactions', '99.9% Uptime'],
  },
  {
    id: 2,
    title: 'FinTech Mobile App',
    category: 'Mobile Development',
    description: 'Secure banking app with advanced security features.',
    tech: ['React Native', 'Firebase', 'Stripe API'],
    stats: ['100K+ Downloads', '$50M+ Processed', '4.8★ Rating'],
  },
  {
    id: 3,
    title: 'AI Analytics Dashboard',
    category: 'AI Solutions',
    description: 'Real-time data analytics with machine learning insights.',
    tech: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    stats: ['50+ Clients', '1B+ Data Points', '40% Cost Reduction'],
  },
  {
    id: 4,
    title: 'SaaS Management Tool',
    category: 'Web Development',
    description: 'Enterprise-grade project management and collaboration platform.',
    tech: ['Vue.js', 'Laravel', 'WebSocket', 'AWS'],
    stats: ['10K+ Teams', '100M+ Events', '24/7 Support'],
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcase of our most impactful and innovative projects.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Project carousel */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-2xl"></div>

              <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-card/50 backdrop-blur">
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-50">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 to-transparent"></div>
                  </div>

                  <div className="relative z-10 text-center">
                    <div className="inline-block mb-4 px-4 py-2 rounded-lg bg-blue-600/10 border border-blue-500/30">
                      <span className="text-sm font-medium text-blue-400">
                        {projects[currentIndex].category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {projects[currentIndex].title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-foreground/80 mb-6">
                    {projects[currentIndex].description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {projects[currentIndex].stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-blue-400">{stat.split('+')[0]}+</div>
                        <div className="text-xs text-muted-foreground">{stat.split('+')[1] || stat}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600/10 text-blue-400 border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handlePrev}
                  className="rounded-full border-foreground/20 hover:border-blue-500/50 bg-transparent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex items-center gap-2">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex ? 'bg-blue-500 w-6' : 'bg-foreground/20'
                      }`}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>

                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleNext}
                  className="rounded-full border-foreground/20 hover:border-blue-500/50 bg-transparent"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Project info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This project represents our commitment to delivering world-class software solutions. We combine cutting-edge technology with innovative design to create products that make a real impact.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Key Achievements</h4>
                <div className="space-y-3">
                  {projects[currentIndex].stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-foreground/10 hover:border-blue-500/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-foreground">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                View Full Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
