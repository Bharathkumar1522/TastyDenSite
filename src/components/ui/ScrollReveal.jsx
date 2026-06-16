'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null);

  useGSAP(() => {
    let y = 0;
    let x = 0;
    
    switch (direction) {
      case 'up': y = 50; break;
      case 'down': y = -50; break;
      case 'left': x = 50; break;
      case 'right': x = -50; break;
      default: y = 50;
    }

    gsap.fromTo(
      ref.current,
      { opacity: 0, y, x },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: ref });

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
