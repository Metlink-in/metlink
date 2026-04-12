'use client';

import { useEffect, useState } from 'react';
import { X, Zap, CheckCircle } from 'lucide-react';

export function PopupForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '' });
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show popup after 8 seconds if not already dismissed in this session
    if (typeof window !== 'undefined') {
      const dismissed = sessionStorage.getItem('popup_dismissed');
      if (dismissed) return;
    }

    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('popup_dismissed', '1');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsDismissed(true);
      sessionStorage.setItem('popup_dismissed', '1');
    }, 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/60 overflow-hidden animate-fadeInScale">
        {/* Gradient top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500" />

        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-10 text-foreground/50 hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {isSubmitted ? (
            <div className="text-center py-6 animate-slideInUp">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">You're in!</h3>
              <p className="text-foreground/60 text-sm">
                Our team will reach out within 24 hours to discuss your project.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs font-semibold text-blue-400">Limited Spots Available</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Ready to Grow with{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    MetLink?
                  </span>
                </h2>
                <p className="text-foreground/60 text-sm">
                  Tell us a bit about yourself and we'll reach out to start the conversation.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-foreground/70 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground/70 mb-1.5">
                    Company / Project *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    required
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground/70 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@acmecorp.com"
                    required
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Become a Client
                </button>

                <p className="text-center text-xs text-foreground/40">
                  No spam. No commitments. Just a conversation.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
