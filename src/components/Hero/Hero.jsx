'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { SITE } from '@/data/site';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Content fade up
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-badge', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    )
    .fromTo('.hero-title span',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo('.hero-btn',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.6'
    );
  }, { scope: heroRef });

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      // Offset for navbar
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = menuEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative w-full h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero_bg.png)' }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020f0a]/60 via-[#020f0a]/40 to-[#020f0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020f0a_100%)] opacity-60" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 sm:mb-8 border border-[var(--gold)]/30">
          <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[var(--gold-light)]">
            Est. {SITE.established} • {SITE.type}
          </span>
        </div>

        <h1 className="hero-title font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.1] mb-4 sm:mb-6 flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 items-center justify-center">
          <span className="text-white block">Chill Vibes,</span>
          <span className="gold-gradient-text block">Street Bites</span>
        </h1>

        <p className="hero-subtitle text-base sm:text-lg md:text-2xl text-[var(--text-secondary)] mb-8 sm:mb-10 max-w-3xl leading-relaxed font-light">
          {SITE.description}
        </p>

        <button 
          onClick={scrollToMenu}
          className="hero-btn group relative px-8 py-4 rounded-full bg-[var(--gold)] text-[#020f0a] font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore Menu
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-[var(--gold-light)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </button>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
