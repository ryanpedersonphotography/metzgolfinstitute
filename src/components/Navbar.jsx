// components/Navbar.jsx
import React, { useState } from 'react';
import { FaGolfBall } from 'react-icons/fa';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="logo">
          <FaGolfBall className="logo-icon" />
          <span>METZ <span className="accent">GOLF</span> INSTITUTE</span>
        </a>
        
        <div className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#approach">Our Approach</a></li>
          <li><a href="#about">Meet Your Coach</a></li>
          <li><a href="#facility">Facility</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#schedule">Schedule Lesson</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;