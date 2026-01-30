'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-background flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-md w-full px-4 text-center">
        <div className="animate-slideInUp mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInUp" style={{ animationDelay: '100ms' }}>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card text-foreground font-semibold rounded-lg hover:border-primary transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Contact Us
          </Link>
        </div>

        {/* Animated floating elements */}
        <div className="mt-16">
          <div className="inline-block animate-float">
            <div className="text-6xl opacity-50">🚀</div>
          </div>
        </div>
      </div>
    </main>
  );
}
