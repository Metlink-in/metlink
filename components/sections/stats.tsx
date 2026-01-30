'use client';

import { useEffect, useState } from 'react';

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
}

function StatCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

const stats: StatItem[] = [
  { number: 500, label: 'Projects Completed', suffix: '+' },
  { number: 150, label: 'Team Members', suffix: '+' },
  { number: 98, label: 'Client Satisfaction', suffix: '%' },
  { number: 10, label: 'Years of Experience', suffix: '+' },
];

export function Stats() {
  return (
    <section className="w-full py-24 bg-card/50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            By The Numbers
          </h2>
          <p className="text-lg text-muted-foreground">
            Our track record of success speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-8 rounded-xl border border-foreground/10 bg-background hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">
                      <StatCounter target={stat.number} suffix={stat.suffix} />
                    </span>
                  </div>
                  <p className="text-muted-foreground text-lg">{stat.label}</p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
