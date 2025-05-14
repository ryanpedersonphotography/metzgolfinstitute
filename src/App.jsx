// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CoachProfile from './components/CoachProfile';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Facility from './components/Facility';
// import PricingSection from './components/PricingSection';
import Gallery from './components/Gallery';
import CertificationInfo from './components/CertificationInfo';
import SchedulingForm from './components/SchedulingForm.jsx';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <CoachProfile />
      {/* <Programs /> */}
      {/* <Testimonials /> */}
      <Facility />
      <CertificationInfo />
      {/* <PricingSection /> */}
      {/* <Gallery /> */}
      {/* <ContactCTA /> */}
      <SchedulingForm />
      <Footer />
    </div>
  );
}

export default App;