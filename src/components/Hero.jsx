// components/Hero.jsx
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToContent = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="animated fadeInUp">ELEVATE YOUR GAME</h1>
        <p className="animated fadeInUp delay-1">
          Professional golf instruction tailored to your individual needs and goals. 
          Join Metz Golf Institute and transform your approach to the game.
        </p>
        <div className="hero-buttons animated fadeInUp delay-2">
          <a href="#approach" className="btn primary">Learn About Our Approach</a>
          <a href="#schedule" className="btn secondary">Contact Us</a>
        </div>
      </div>
      <div className="scroll-indicator" onClick={scrollToContent}>
        <span>Explore</span>
        <FaAngleDown />
      </div>
    </section>
  );
};

export default Hero;
