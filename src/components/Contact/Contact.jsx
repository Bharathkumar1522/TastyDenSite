'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT } from '@/data/site';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Contact() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.fromTo('.contact-content',
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="py-20 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[500px] md:min-h-[600px]">
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <div className="absolute inset-0 bg-[url('/hero_bg.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#020f0a]/80 backdrop-blur-sm" />
      </div>

      <div className="contact-content relative z-10 max-w-4xl mx-auto px-4 w-full text-center">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-16 shadow-2xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to <span className="gold-gradient-text">Order?</span>
          </h2>
          
          <p className="text-[var(--text-secondary)] text-base sm:text-lg md:text-2xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Feel free to text or call to place an order. We'll have your food ready in no time!
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
            {CONTACT.lines.map((line, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 bg-[#020f0a]/50 p-6 rounded-3xl border border-white/10 w-full max-w-sm hover:border-[var(--gold)]/30 transition-colors">
                <h3 className="text-[var(--gold)] font-display text-2xl font-bold">{line.label}</h3>
                <p className="text-white font-bold text-xl tracking-wide mb-2">{line.phone}</p>
                <div className="flex flex-row items-center gap-3 w-full">
                  {idx === 0 && (
                    <a 
                      href={`https://wa.me/${line.raw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[var(--green-whatsapp)] text-white rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_5px_15px_rgba(37,211,102,0.2)]"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                  )}
                  <a 
                    href={`tel:${line.raw}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold transition-all hover:bg-white/20 hover:border-white/40 active:scale-95"
                  >
                    <Phone className="w-5 h-5" />
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
