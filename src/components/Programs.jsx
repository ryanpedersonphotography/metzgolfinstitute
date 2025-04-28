// components/Programs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
  const [activeTab, setActiveTab] = useState('individual');
  
  const programs = {
    individual: [
      {
        title: "Single Lesson",
        description: "One-on-one instruction focused on specific aspects of your game.",
        duration: "60 minutes",
        price: "$85"
      },
      {
        title: "3-Lesson Package",
        description: "Series of lessons to address multiple areas of improvement.",
        duration: "60 minutes each",
        price: "$225"
      },
      {
        title: "Performance Analysis",
        description: "Comprehensive swing analysis using high-speed cameras and launch monitors.",
        duration: "90 minutes",
        price: "$125"
      }
    ],
    group: [
      {
        title: "Beginners Clinic",
        description: "Introduction to golf fundamentals in a supportive group environment.",
        duration: "2 hours",
        price: "$45 per person"
      },
      {
        title: "Short Game Workshop",
        description: "Focused instruction on putting, chipping, and pitching.",
        duration: "2 hours",
        price: "$50 per person"
      },
      {
        title: "Junior Golf Program",
        description: "Age-appropriate instruction for young golfers.",
        duration: "4-week program",
        price: "$180"
      }
    ]
  };

  return (
    <section className="programs" id="programs">
      <div className="section-title">
        <h2>Training Programs</h2>
        <p>Choose from our variety of instructional options</p>
        <div className="title-underline"></div>
      </div>
      
      <div className="program-tabs">
        <button 
          className={`tab-button ${activeTab === 'individual' ? 'active' : ''}`}
          onClick={() => setActiveTab('individual')}
        >
          Individual Lessons
        </button>
        <button 
          className={`tab-button ${activeTab === 'group' ? 'active' : ''}`}
          onClick={() => setActiveTab('group')}
        >
          Group Programs
        </button>
      </div>
      
      <div className="program-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="program-grid"
        >
          {programs[activeTab].map((program, index) => (
            <div className="program-card" key={index}>
              <h3>{program.title}</h3>
              <div className="program-details">
                <span className="duration">
                  <i className="far fa-clock"></i> {program.duration}
                </span>
                <span className="price">{program.price}</span>
              </div>
              <p>{program.description}</p>
              <a href="#contact" className="btn primary-outline">Book Now</a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;