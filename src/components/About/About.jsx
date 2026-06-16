'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    // Parallax on image
    gsap.to(imageRef.current, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Animate numbers
    countersRef.current.forEach((counter) => {
      if (!counter) return;
      const target = parseInt(counter.getAttribute('data-target'), 10);
      gsap.to(counter, {
        innerHTML: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 90%',
          once: true,
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-32 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_right_center,var(--bg-card)_0%,transparent_70%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1">
          <SectionHeading 
            label="The Vibe"
            title="Puttur's First Cinema Cafe"
            alignment="left"
          />

          <ScrollReveal delay={0.2}>
            <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
              <p>
                Experience the perfect blend of great food and entertainment at The Tasty Den. 
                Our open-air container kitchen brings a unique industrial-chic vibe to Puttur.
              </p>
              <p>
                With gravel flooring, exposed metal aesthetics, and warm ambient lighting, 
                it's the ultimate hang-out spot. Enjoy live IPL screenings and movies on our 
                massive outdoor projector while savoring the city's best comfort food.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <div className="pt-12 mt-12 border-t border-white/5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <ScrollReveal delay={0.3}>
              <div>
                <div className="font-display text-4xl md:text-5xl font-bold text-white flex items-baseline mb-2">
                  <span ref={el => countersRef.current[0] = el} data-target="98">0</span>+
                </div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider block font-medium">Menu Items</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div>
                <div className="font-display text-4xl md:text-5xl font-bold text-white flex items-baseline mb-2">
                  <span ref={el => countersRef.current[1] = el} data-target="2">0</span>+
                </div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider block font-medium">Years Exp.</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div>
                <div className="font-display text-4xl md:text-5xl font-bold text-white flex items-baseline mb-2">
                  <span ref={el => countersRef.current[2] = el} data-target="1">0</span>K+
                </div>
                <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider block font-medium">Happy Customers</div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-1 lg:order-2 relative">
          <ScrollReveal direction="left" delay={0.2} className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div ref={imageRef} className="scale-110 origin-top">
              <img 
                src="/about-image.png" 
                alt="The Tasty Den Ambience" 
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-square lg:aspect-[4/5]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollReveal>
          
          {/* Gold Glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--gold)] rounded-full blur-[100px] opacity-20 -z-10" />
        </div>
      </div>
    </section>
  );
}
