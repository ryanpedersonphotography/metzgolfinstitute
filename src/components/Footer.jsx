
// components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaGolfBall } from 'react-icons/fa';

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
        </div>
        
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#facility">Facility</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> 23521 Nokomis Ave, Nisswa, MN 56468</li>
            <li><i className="fas fa-phone"></i> (218) 330-3402</li>
            <li><i className="fas fa-envelope"></i> gavin.metz@grandviewlodge.com</li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="https://www.instagram.com/metzgolfinstitute/" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
          </div>
          <div className="newsletter">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest news and offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Metz Golf Institute. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;