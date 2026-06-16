'use client';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GALLERY_IMAGES } from '@/data/gallery';
import SectionHeading from '../ui/SectionHeading';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function GalleryImage({ img }) {
  const [error, setError] = useState(false);

  return (
    <div className="gallery-item break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 shadow-xl">
      {!error ? (
        <img 
          src={img.url} 
          alt={img.alt}
          onError={() => setError(true)}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="w-full aspect-[4/5] flex items-center justify-center text-[var(--gold)]/20 font-display text-2xl font-bold bg-gradient-to-br from-[#051a11] to-[#020f0a]">
          TASTY DEN
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

function MobileGalleryImage({ img }) {
  const [error, setError] = useState(false);

  return (
    <div className="snap-center shrink-0 w-[85vw] max-w-[350px] relative rounded-2xl overflow-hidden shadow-2xl border border-white/5">
      <div className="aspect-[4/5] w-full">
        {!error ? (
          <img 
            src={img.url} 
            alt={img.alt}
            onError={() => setError(true)}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--gold)]/20 font-display text-2xl font-bold bg-gradient-to-br from-[#051a11] to-[#020f0a]">
            TASTY DEN
          </div>
        )}
      </div>
    </div>
  );
}

export default function Gallery() {
  const galleryRef = useRef(null);

  useGSAP(() => {
    const images = gsap.utils.toArray('.gallery-item');
    
    // Ensure ScrollTrigger refreshes after images load
    const refreshST = () => ScrollTrigger.refresh();
    window.addEventListener('load', refreshST);

    images.forEach((img, i) => {
      gsap.fromTo(img,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 90%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    return () => window.removeEventListener('load', refreshST);
  }, { scope: galleryRef });

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#020f0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          label="Food Gallery"
          title="Feast Your Eyes"
          subtitle="A glimpse into the delicious world of The Tasty Den."
        />

        {/* Desktop Masonry */}
        <div ref={galleryRef} className="hidden md:block md:columns-2 lg:columns-3 gap-6 space-y-6 mt-16">
          {GALLERY_IMAGES.map((img) => (
            <GalleryImage key={img.id} img={img} />
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden mt-12 flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar px-4 -mx-4 pb-8">
          {GALLERY_IMAGES.map((img) => (
            <MobileGalleryImage key={img.id} img={img} />
          ))}
        </div>
      </div>
    </section>
  );
}
