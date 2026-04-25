'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

export function CTA() {
  return (
    <section className="w-full py-32 bg-background relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Main card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative p-12 md:p-16 rounded-2xl border border-foreground/10 bg-card/80 backdrop-blur">
              <div className="text-center space-y-8">
                {/* Badge */}
                <div className="inline-block">
                  <span className="text-sm font-semibold text-blue-500 bg-blue-500/10 px-4 py-2 rounded-full flex items-center gap-2 w-fit mx-auto">
                    <Zap className="w-4 h-4" />
                    Ready to Get Started?
                  </span>
                </div>

                {/* Heading */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                    Let's Build Something Extraordinary
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Partner with MetLink to transform your ideas into powerful software solutions. Let's collaborate and create something that makes a real difference.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2 group/btn">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-foreground/20 bg-transparent">
                    Schedule a Call
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="pt-8 border-t border-foreground/10">
                  <p className="text-sm text-muted-foreground mb-4">
                    Trusted by leading companies worldwide
                  </p>
                  <div className="flex justify-center items-center gap-8 flex-wrap">
                    {['TechCorp', 'InnovateLabs', 'FutureSoft', 'CloudVision', 'DataHub'].map((brand) => (
                      <div key={brand} className="text-muted-foreground font-medium opacity-60 hover:opacity-100 transition-opacity">
                        {brand}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
              { icon: '🛡️', title: 'Secure & Reliable', desc: 'Enterprise-grade security for your peace of mind' },
              { icon: '📈', title: 'Scalable Solutions', desc: 'Grow your business with our scalable tech' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-foreground/10 bg-card/50 backdrop-blur hover:border-blue-500/50 transition-all duration-300 text-center"
                style={{
                  animation: `slideInUp 0.6s ease-out ${0.3 + idx * 0.1}s both`,
                }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
