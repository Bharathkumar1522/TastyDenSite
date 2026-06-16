import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FoodMaker from './components/FoodMaker';
import Menu from './components/Menu';
import Ambience from './components/Ambience';
import FoodGallery from './components/FoodGallery';
import TestimonialsSection from './components/TestimonialSections';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <CartProvider>
      <Navbar />
      <Home />

      <div className="section-divider" />
      <FoodMaker />

      <div className="section-divider" />
      <Menu />

      <div className="section-divider" />
      <Ambience />

      <div className="section-divider" />
      <FoodGallery />

      <div className="section-divider" />
      <TestimonialsSection />

      <div className="section-divider" />
      <Contact />

      <Footer />

      {/* Cart FAB + Drawer */}
      <Cart />

      {/* Scroll to Top FAB */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            aria-label="Scroll to top"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </CartProvider>
  );
}

export default App;
