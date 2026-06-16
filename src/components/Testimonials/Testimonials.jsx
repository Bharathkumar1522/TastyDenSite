'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';
import SectionHeading from '../ui/SectionHeading';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Testimonials() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.testimonial-card');
    
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="testimonials" ref={containerRef} className="py-20 md:py-32 bg-[#051a11] relative">
      <div className="absolute inset-0 bg-[url('/hero_bg.png')] opacity-5 mix-blend-overlay bg-cover bg-fixed pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          label="Reviews"
          title="What Our Guests Say"
          subtitle="Don't just take our word for it. Here's what the city thinks about The Tasty Den."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="testimonial-card bg-[#020f0a]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-2 hover:border-[var(--gold)]/30 flex flex-col h-full"
            >
              <div className="text-[var(--gold)] text-6xl font-display leading-none opacity-20 absolute top-6 right-8">
                "
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-[var(--gold)] text-[var(--gold)]' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              
              <p className="text-[var(--text-secondary)] text-lg mb-8 flex-1 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-[var(--gold)]/30 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h4 className="text-white font-bold font-display tracking-wide">{testimonial.name}</h4>
                  <p className="text-[var(--text-muted)] text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
