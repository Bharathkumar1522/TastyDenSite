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

export default function Ambience() {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useGSAP(() => {
    // Parallax on cards
    gsap.to(card1Ref.current, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(card2Ref.current, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section id="ambience" ref={containerRef} className="py-20 md:py-32 bg-[#051a11] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          label="The Space"
          title="Designed for Connection"
          subtitle="More than just a restaurant, The Tasty Den is your social hub in Puttur."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {/* Card 1 */}
          <ScrollReveal delay={0.1} direction="up">
            <div className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div ref={card1Ref} className="absolute inset-0 h-[120%] -top-[10%] w-full">
                <img 
                  src="https://res.cloudinary.com/dyecmgvcy/image/upload/w_1200/v1741173420/ambience_b7rmjt.webp" 
                  alt="Industrial Chic Ambience"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020f0a] via-[#020f0a]/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-display text-3xl text-white mb-2">Industrial Chic</h3>
                <p className="text-[var(--text-secondary)] text-lg line-clamp-3">
                  A raw, street-style setting with gravel flooring, DIY tire seating, and warm Edison lights that create the perfect mood for a chill evening.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={0.3} direction="up">
            <div className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl md:mt-24">
              <div ref={card2Ref} className="absolute inset-0 h-[120%] -top-[10%] w-full">
                <img 
                  src="https://res.cloudinary.com/dyecmgvcy/image/upload/w_1200/v1741173420/ambience2_vjzmdl.webp" 
                  alt="Screening Lounge"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020f0a] via-[#020f0a]/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-display text-3xl text-white mb-2">Screening Lounge</h3>
                <p className="text-[var(--text-secondary)] text-lg line-clamp-3">
                  The ultimate hang-out spot featuring a massive outdoor projector for movies, cricket matches, and unforgettable game nights with friends.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
