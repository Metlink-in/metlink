'use client';

const WHATSAPP_NUMBER = '918602333400';
const PREFILLED_MESSAGE = "Hi MetLink, I'd like to enquire about your service.";

const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

/**
 * Stacked directly above the chat toggle button (same right offset, one slot
 * up). `visible=false` while the chat window is open — the window is anchored
 * at the same slot this button occupies, so the two can't coexist on screen.
 */
export function WhatsAppButton({ visible = true }: { visible?: boolean }) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-24 right-6 z-50 flex items-center justify-center hover:scale-110 active:scale-95"
      style={{
        width: 56, height: 56,
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.6)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)',
      }}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      aria-label="Chat with MetLink on WhatsApp"
    >
      {/* Soft pulsing ring to draw the eye, matches the chat button's "online" liveliness */}
      <span className="absolute inset-0 rounded-full animate-ping" style={{ background: '#25D366', opacity: 0.35 }} />

      {/* Button body — subtle gradient + inner highlight instead of a flat fill */}
      <span className="relative w-full h-full rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(145deg, #2FE070, #1DA851)',
          boxShadow: '0 6px 22px rgba(29,168,81,0.45), inset 0 1px 1px rgba(255,255,255,0.35), inset 0 -2px 4px rgba(0,0,0,0.15)',
        }}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 relative z-10" fill="#FFFFFF">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.005c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.16c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.11.31.02.5-.09.19-.14.31-.27.48-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.26.09 1.66.78 1.94.92.28.14.47.21.53.33.07.12.07.68-.17 1.36Z"/>
        </svg>
      </span>

      {/* Hover tooltip */}
      <span className="absolute bottom-full right-0 mb-3 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 translate-y-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
        style={{ background: '#0B1628', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
        Chat on WhatsApp
      </span>
    </a>
  );
}
