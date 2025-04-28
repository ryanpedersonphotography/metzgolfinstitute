// components/Features.jsx
import React from 'react';
import { FaGolfBall, FaBrain, FaChartLine } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="features" id="approach">
      <div className="section-title">
        <h2>Our Approach</h2>
        <p>We believe in a comprehensive methodology that addresses all aspects of your game</p>
        <div className="title-underline"></div>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="card-side left-accent"></div>
          <div className="feature-icon">
            <FaGolfBall />
          </div>
          <h3>Technical Excellence</h3>
          <p>Our instruction focuses on developing proper mechanics and technique to create consistency in your swing and overall game.</p>
        </div>
        
        <div className="feature-card">
          <div className="card-side left-accent"></div>
          <div className="feature-icon">
            <FaBrain />
          </div>
          <h3>Mental Approach</h3>
          <p>Learn strategies to improve focus, manage pressure, and make smarter decisions on the course.</p>
        </div>
        
        <div className="feature-card">
          <div className="card-side left-accent"></div>
          <div className="feature-icon">
            <FaChartLine />
          </div>
          <h3>Performance Analysis</h3>
          <p>Using state-of-the-art technology, we analyze your game to identify opportunities for improvement.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;