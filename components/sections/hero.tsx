'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background pt-32 pb-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-blue-500 bg-blue-500/10 px-4 py-2 rounded-full">Welcome to MetLink</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-balance text-foreground">
                Software Innovation at Its Peak
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Transform your vision into reality with cutting-edge software solutions. We craft digital experiences that matter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2 group">
                Explore Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/20 bg-transparent">
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-6 pt-8">
              <a href="#" className="p-3 rounded-lg bg-foreground/5 hover:bg-blue-600/10 transition-colors group">
                <Github className="w-6 h-6 text-foreground group-hover:text-blue-500 transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-foreground/5 hover:bg-blue-600/10 transition-colors group">
                <Linkedin className="w-6 h-6 text-foreground group-hover:text-blue-500 transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-foreground/5 hover:bg-blue-600/10 transition-colors group">
                <Mail className="w-6 h-6 text-foreground group-hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right animated cards */}
          <div className="relative h-96 md:h-full perspective">
            <div className={`absolute inset-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {/* Card 1 */}
              <div className="absolute top-0 right-0 w-64 h-40 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl border border-blue-500/30 shadow-2xl shadow-blue-600/20 animate-float"
                style={{ animationDelay: '0s', transformOrigin: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/20 rounded-2xl"></div>
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="text-blue-200 text-sm font-medium">Web Development</div>
                  <div className="text-3xl font-bold text-white">500+</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="absolute top-1/3 left-1/4 w-60 h-36 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-600/20 animate-float"
                style={{ animationDelay: '0.5s', transformOrigin: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-900/20 rounded-2xl"></div>
                <div className="relative h-full flex flex-col justify-between p-5">
                  <div className="text-purple-200 text-sm font-medium">App Development</div>
                  <div className="text-2xl font-bold text-white">150+</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="absolute bottom-0 right-1/4 w-64 h-40 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-600/20 animate-float"
                style={{ animationDelay: '1s', transformOrigin: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cyan-900/20 rounded-2xl"></div>
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="text-cyan-200 text-sm font-medium">AI Solutions</div>
                  <div className="text-3xl font-bold text-white">75+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-blue-500/30 rounded-full flex justify-center animate-pulse">
              <div className="w-1 h-2 bg-blue-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
