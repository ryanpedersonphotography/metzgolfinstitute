// components/Facility.jsx
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Facility = () => {
  // In a real implementation, you would add state and logic to handle the slider
  return (
    <section className="facility" id="facility">
      <div className="section-title">
        <h2>Our Facility</h2>
        <p>A state-of-the-art environment designed for your improvement</p>
        <div className="title-underline"></div>
      </div>
      
      <div className="facility-slider">
        <button className="slider-arrow left">
          <FaChevronLeft />
        </button>
        
        <div className="slider-content">
          <div className="facility-slide active">
            <div className="facility-image"></div>
            <div className="facility-info">
              <h3>Indoor Training Bay</h3>
              <p>Equipped with high-speed cameras and launch monitors to analyze every aspect of your swing.</p>
            </div>
          </div>
        </div>
        
        <button className="slider-arrow right">
          <FaChevronRight />
        </button>
      </div>
      
      <div className="facility-features">
        <div className="facility-feature">
          <div className="feature-icon">
            <i className="fas fa-video"></i>
          </div>
          <h4>Video Analysis</h4>
          <p>High-speed cameras capture every detail of your swing</p>
        </div>
        
        <div className="facility-feature">
          <div className="feature-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h4>Performance Tracking</h4>
          <p>Monitor your progress with detailed stats and analysis</p>
        </div>
        
        <div className="facility-feature">
          <div className="feature-icon">
            <i className="fas fa-golf-ball"></i>
          </div>
          <h4>Putting Lab</h4>
          <p>Perfect your stroke on our professional putting surface</p>
        </div>
        
        <div className="facility-feature">
          <div className="feature-icon">
            <i className="fas fa-laptop"></i>
          </div>
          <h4>Simulator</h4>
          <p>Practice on virtual versions of the world's best courses</p>
        </div>
      </div>
    </section>
  );
};

export default Facility;