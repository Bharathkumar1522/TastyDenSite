import dynamic from 'next/dynamic';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';

const About = dynamic(() => import('@/components/About/About'));
const Menu = dynamic(() => import('@/components/Menu/Menu'));
const Ambience = dynamic(() => import('@/components/Ambience/Ambience'));
const Gallery = dynamic(() => import('@/components/Gallery/Gallery'));
const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials'));
const Contact = dynamic(() => import('@/components/Contact/Contact'));
const Footer = dynamic(() => import('@/components/Footer/Footer'));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020f0a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Ambience />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
