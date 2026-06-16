'use client';
import { useState, useEffect, useContext } from 'react';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { SITE, NAV_LINKS } from '@/data/site';
import { CartContext } from '@/context/CartContext';
import gsap from 'gsap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Animate mobile menu links
      gsap.fromTo('.mobile-link', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? '' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div 
            className={`flex items-center justify-between rounded-full transition-all duration-500 ${
              scrolled 
                ? 'bg-[#020f0a]/80 backdrop-blur-md border border-white/10 px-6 py-3 shadow-lg shadow-black/50' 
                : 'bg-transparent py-2 border border-transparent'
            }`}
          >
            {/* Logo */}
            <div 
              className="cursor-pointer flex items-center gap-3"
              onClick={() => scrollTo('hero')}
            >
              <img 
                src="/logo2.png" 
                alt={SITE.name} 
                className="h-10 w-auto rounded-lg"
              />
              <span className="font-display font-bold text-xl tracking-wider text-white hidden sm:block">
                {SITE.name.toUpperCase()}
              </span>
            </div>

            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.to}
                  onClick={() => scrollTo(link.to)}
                  className="text-sm font-medium text-gray-300 hover:text-[var(--gold)] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-white hover:text-[var(--gold)] transition-colors"
                aria-label="Open Cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--gold)] text-[#020f0a] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>

              <button 
                onClick={() => scrollTo('menu')}
                className="hidden md:flex bg-[var(--gold)] text-[#020f0a] px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
              >
                Order Now
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden p-2 text-white"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Menu"
              >
                <MenuIcon className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-[#020f0a]/95 backdrop-blur-xl transition-all duration-500 flex flex-col ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <img src="/logo2.png" alt="Logo" className="h-12 w-auto rounded-xl" />
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-white hover:text-[var(--gold)] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center gap-8 p-6 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <button
              key={link.to}
              onClick={() => scrollTo(link.to)}
              className="mobile-link font-display text-4xl text-white hover:text-[var(--gold)] transition-colors"
            >
              {link.label}
            </button>
          ))}
          
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              scrollTo('menu');
            }}
            className="mobile-link mt-8 bg-[var(--gold)] text-[#020f0a] py-4 rounded-full font-bold text-xl w-full max-w-sm text-center"
          >
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}
