'use client';

import { Code, Smartphone, Brain, Zap, Shield, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites and applications built with the latest technologies.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by advanced AI and ML algorithms.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications that deliver exceptional user experiences.',
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description: 'Enterprise-grade security to protect your digital assets.',
  },
  {
    icon: TrendingUp,
    title: 'Business Solutions',
    description: 'Scalable software solutions tailored to your business needs.',
  },
];

export function Services() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive software solutions designed to accelerate your business growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-foreground/10 bg-card hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10 cursor-pointer overflow-hidden"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity pt-4">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
