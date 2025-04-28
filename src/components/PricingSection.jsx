// components/PricingSection.jsx
import React, { useState } from 'react';



const PricingSection = () => {
  const [activeCategory, setActiveCategory] = useState('adults');

  return (
    <section className="pricing" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Services & Pricing</h2>
          <p>Professional instruction packages to fit your goals and budget</p>
          <div className="title-underline"></div>
        </div>
        
        <div className="pricing-tabs">
          <button 
            className={`pricing-tab ${activeCategory === 'adults' ? 'active' : ''}`}
            onClick={() => setActiveCategory('adults')}
          >
            Adult Programs
          </button>
          <button 
            className={`pricing-tab ${activeCategory === 'juniors' ? 'active' : ''}`}
            onClick={() => setActiveCategory('juniors')}
          >
            Junior Programs
          </button>
          <button 
            className={`pricing-tab ${activeCategory === 'fittings' ? 'active' : ''}`}
            onClick={() => setActiveCategory('fittings')}
          >
            Club Fittings
          </button>
        </div>
        
        {activeCategory === 'adults' && (
          <div className="pricing-table-container">
            <div className="pricing-header">
              <p>Professional instruction tailored for adults of all skill levels</p>
            </div>
            <div className="pricing-table">
              <div className="table-head">
                <div className="th service">Service</div>
                <div className="th time">Duration</div>
                <div className="th price">Price</div>
                <div className="th action"></div>
              </div>
              
              <div className="table-body">
                <div className="pricing-row">
                  <div className="td service">Single Golf Lesson with TPI Screen</div>
                  <div className="td time">45 min</div>
                  <div className="td price">$75</div>
                  <div className="td action"></div>
                </div>
                
                <div className="pricing-row">
                  <div className="td service">Series of 3 Lessons</div>
                  <div className="td time">45 min each</div>
                  <div className="td price">$210</div>
                  <div className="td action"></div>
                </div>
                
                <div className="pricing-row">
                  <div className="td service">Series of 5 Lessons</div>
                  <div className="td time">45 min each</div>
                  <div className="td price">$310</div>
                  <div className="td action"></div>
                </div>
                
                <div className="pricing-row">
                  <div className="td service">Golf Workout Plan Through TPI</div>
                  <div className="td time">30 min</div>
                  <div className="td price">$50/Month</div>
                  <div className="td action"></div>
                </div>
                
                <div className="pricing-row">
                  <div className="td service">Golf Training Session</div>
                  <div className="td time">30 min</div>
                  <div className="td price">$30</div>
                  <div className="td action"></div>
                </div>
                
                <div className="pricing-row">
                  <div className="td service">Course Management Lesson</div>
                  <div className="td time">9 Holes</div>
                  <div className="td price">$150</div>
                  <div className="td action"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeCategory === 'juniors' && (
          <div className="pricing-table-container">
            <div className="pricing-header">
              <p>Age-appropriate instruction to help young golfers develop their skills</p>
            </div>
            <div className="pricing-table">
              <div className="table-head">
                <div className="th service">Service</div>
                <div className="th time">Duration</div>
                <div className="th price">Price</div>
                <div className="th age">Age Group</div>
                <div className="th action"></div>
              </div>
              
              <div className="table-body">
                <div className="pricing-row">
                  <div className="td service">Single Junior Lesson</div>
                  <div className="td time">30 min</div>
                  <div className="td price">$60</div>
                  <div className="td age">10-15 years</div>
                  <div className="td action"></div>
                </div>
                
                <div className="pricing-row">
                  <div className="td service">Single Junior Lesson</div>
                  <div className="td time">30 min</div>
                  <div className="td price">$50</div>
                  <div className="td age">5-9 years</div>
                  <div className="td action"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeCategory === 'fittings' && (
          <div className="pricing-table-container">
            <div className="pricing-header">
              <p>Expert fitting services to optimize your equipment performance *Fitting fee applies only if you don't purchase clubs</p>
            </div>
            <div className="pricing-table">
              <div className="table-head">
                <div className="th service">Service</div>
                <div className="th time">Duration</div>
                <div className="th price">Price</div>
                <div className="th action"></div>
              </div>
              
              <div className="table-body">
                <div className="pricing-row">
                  <div className="td service">Full Bag Fitting</div>
                  <div className="td time">2 hours</div>
                  <div className="td price">$150</div>
                  <div className="td action"></div>
                </div>
                
                <div className="pricing-row">
                  <div className="td service">Driver/Wood Fitting</div>
                  <div className="td time">45 min</div>
                  <div className="td price">$75</div>
                  <div className="td action"></div>
                </div>
                
                <div className="pricing-row">
                  <div className="td service">Irons Fitting</div>
                  <div className="td time">1 hour</div>
                  <div className="td price">$100</div>
                  <div className="td action"></div>
                </div>
                
                <div className="pricing-row">
                  <div className="td service">Putter Fitting</div>
                  <div className="td time">30 min</div>
                  <div className="td price">$50</div>
                  <div className="td action"></div>
                </div>
                
                <div className="pricing-row">
                  <div className="td service">Gap Analysis</div>
                  <div className="td time">30 min</div>
                  <div className="td price">$50</div>
                  <div className="td action"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default PricingSection;