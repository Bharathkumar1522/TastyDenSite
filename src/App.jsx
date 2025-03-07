import { useState } from 'react';
import { motion } from "motion/react";
import './index.css';  // Or the path to your CSS file
import Navbar from './components/Navbar'
import Home from './components/Home'
import FoodMaker from './components/FoodMaker'
import Menu from './components/Menu'
import Ambience from './components/Ambience';
import FoodGallery from './components/FoodGallery';
import TestimonialsSection from './components/TestimonialSections';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <FoodMaker/>
      <Menu/>
      <Ambience/>
      <FoodGallery />
      <TestimonialsSection/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
