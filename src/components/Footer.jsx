
// components/Footer.jsx
import React from 'react';
import { FaInstagram, FaGolfBall, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <div className="footer-logo">
            <FaGolfBall className="logo-icon" />
            <span>METZ <span className="accent">GOLF</span> INSTITUTE</span>
          </div>
          <p>Providing professional golf instruction to help you reach your full potential on the course.</p>
          <div className="certification-info">
            <h4>Professional Certifications</h4>
            <p>Gavin is certified by the Titleist Performance Institute (TPI Level 1) and the International Sports Sciences Association (ISSA).</p>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#approach">Our Approach</a></li>
            <li><a href="#about">Meet Your Coach</a></li>
            <li><a href="#facility">Facility</a></li>
            <li><a href="#schedule">Schedule Lesson</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> 23521 Nokomis Ave, Nisswa, MN 56468</li>
            <li><i className="fas fa-phone"></i> (218) 330-3402</li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:gavin.metz@grandviewlodge.com" className="email-link">
                gavin.metz@grandviewlodge.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/metzgolfinstitute/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>

          {/* Newsletter form temporarily removed
          <div className="newsletter">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest news and offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
          */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Metz Golf Institute. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;