// components/CertificationInfo.jsx
import React from 'react';

const CertificationInfo = () => {
  return (
    <section className="certification-section" id="certifications">
      <div className="container">
        <div className="section-title">
          <h2>Professional Certifications</h2>
          <p>Training backed by industry-leading golf and fitness certifications</p>
          <div className="title-underline"></div>
        </div>
        
        <div className="certification-grid">
          <div className="certification-card">
            <div className="cert-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>Titleist Performance Institute (TPI)</h3>
            <p>
              As a TPI Level 1 Certified instructor, Gavin understands the critical 
              connection between the body and the golf swing. TPI is recognized as the 
              world's leading educational organization for golf-specific fitness and 
              performance, used by 18 of the last 20 Major Championship winners.
            </p>
            <div className="cert-benefits">
              <h4>What This Means For You:</h4>
              <ul>
                <li>Science-backed swing analysis that accounts for your unique physical capabilities</li>
                <li>Customized training that addresses your specific limitations and strengths</li>
                <li>Reduced risk of injury through proper technique and body mechanics</li>
                <li>Access to the same evaluation systems used by top PGA Tour professionals</li>
              </ul>
            </div>
          </div>
          
          <div className="certification-card">
            <div className="cert-icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h3>International Sports Sciences Association (ISSA)</h3>
            <p>
              With ISSA certification, Gavin combines expert fitness training with golf instruction 
              for a comprehensive approach to your game. This globally recognized certification ensures 
              that your training is built on sound exercise science principles specific to golf performance.
            </p>
            <div className="cert-benefits">
              <h4>What This Means For You:</h4>
              <ul>
                <li>Golf-specific strength and conditioning programs to improve power and endurance</li>
                <li>Targeted exercises to enhance mobility and flexibility for your swing</li>
                <li>Training methods that translate directly to on-course performance</li>
                <li>Comprehensive understanding of how proper fitness impacts your golf game</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="certification-summary">
          <p>
            The combination of TPI and ISSA certifications provides a powerful foundation for improving 
            your golf game through both technical swing instruction and physical performance training. 
            This integrated approach ensures you'll not only swing better but maintain your improvements 
            through proper fitness and body mechanics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationInfo;