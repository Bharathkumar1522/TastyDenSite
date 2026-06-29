'use client';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '@/data/menu';
import SectionHeading from '../ui/SectionHeading';
import MenuItem from './MenuItem';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [filteredItems, setFilteredItems] = useState(MENU_ITEMS.filter(item => item.category === CATEGORIES[0]));
  const gridRef = useRef(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 250, behavior: 'smooth' });
    }
  };

  const scrollMenu = (direction) => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: direction * window.innerWidth * 0.8, behavior: 'smooth' });
    }
  };

  // Filter items when category changes
  useEffect(() => {
    const newItems = MENU_ITEMS.filter(item => item.category === activeCategory);
    
    // Fade out
    gsap.to(gridRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      stagger: 0.02,
      onComplete: () => {
        setFilteredItems(newItems);
        // Fade in handled by useEffect below
      }
    });
  }, [activeCategory]);

  // Animate items in when filteredItems changes
  useEffect(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', clearProps: 'all' }
    );
  }, [filteredItems]);

  return (
    <section id="menu" className="py-20 md:py-32 bg-[#020f0a] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          label="Our Menu"
          title="Street Bites & Delights"
          subtitle="Explore our extensive menu of 98+ items crafted for the perfect chill evening."
        />

        {/* Category Filter - Sticky on mobile */}
        <div className="sticky top-[70px] z-40 bg-[#020f0a]/95 backdrop-blur-xl py-4 -mx-4 px-4 mb-8 border-b border-white/5 md:border-none md:static md:bg-transparent md:mx-0 md:px-0">
          <div className="relative group flex items-center">
            {/* Left Arrow */}
            <button 
              onClick={() => scroll(-1)} 
              className="hidden md:flex absolute left-0 z-10 bg-[#08281b] text-white p-1.5 rounded-full shadow-lg border border-white/10 hover:bg-[var(--gold)] hover:text-[#020f0a] transition-all -ml-3 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Left Fade */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#020f0a] to-transparent z-[5] pointer-events-none" />

            <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar gap-3 pb-2 snap-x scroll-smooth mx-4 w-full">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    whitespace-nowrap px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all snap-start
                    ${activeCategory === category 
                      ? 'bg-[var(--gold)] text-[#020f0a] shadow-[0_0_15px_rgba(212,168,83,0.3)]' 
                      : 'bg-white/5 text-white hover:bg-white/10 hover:text-[var(--gold)]'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Right Fade */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#020f0a] to-transparent z-[5] pointer-events-none" />

            {/* Right Arrow */}
            <button 
              onClick={() => scroll(1)} 
              className="hidden md:flex absolute right-0 z-10 bg-[#08281b] text-white p-1.5 rounded-full shadow-lg border border-white/10 hover:bg-[var(--gold)] hover:text-[#020f0a] transition-all -mr-3 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Menu Items Area */}
        <div className="relative mt-8">
          {/* Mobile Left Arrow */}
          <button 
            onClick={() => scrollMenu(-1)} 
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#08281b]/90 text-white p-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10 active:bg-[var(--gold)] active:text-[#020f0a] transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Menu Grid / Mobile Carousel */}
          <div 
            ref={gridRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 no-scrollbar scroll-smooth"
          >
            {filteredItems.map(item => (
              <div key={item.id} className="w-[280px] shrink-0 snap-center sm:w-auto sm:min-w-0 sm:flex-shrink h-full">
                <MenuItem item={item} />
              </div>
            ))}
          </div>

          {/* Mobile Right Arrow */}
          <button 
            onClick={() => scrollMenu(1)} 
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#08281b]/90 text-white p-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10 active:bg-[var(--gold)] active:text-[#020f0a] transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Delivery Note */}
        <div className="mt-16 text-center">
          <p className="text-[var(--text-muted)] italic text-sm">
            *₹40 delivery fee. Delivery available within 4km radius only. Minimum 10-15 mins to complete order.
          </p>
        </div>
      </div>
    </section>
  );
}
