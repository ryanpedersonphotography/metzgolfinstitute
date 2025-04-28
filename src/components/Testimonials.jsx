// components/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Working with Gavin has completely transformed my game. His technical knowledge and personalized approach helped me immensely.",
      author: "Michael S.",
      handicap: "Handicap: 12"
    },
    {
      text: "The Metz Golf Institute has the perfect blend of technical instruction and mental game coaching. I've never felt more confident on the course.",
      author: "Jennifer L.",
      handicap: "Handicap: 18"
    },
    {
      text: "As a beginner, I was intimidated to start lessons, but Gavin made the process enjoyable and accessible. Now I look forward to every round!",
      author: "David T.",
      handicap: "Handicap: 24"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <div className="testimonial-container">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="testimonial"
          >
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            <div className="testimonial-author">
              <p className="author-name">{testimonials[currentIndex].author}</p>
              <p className="author-handicap">{testimonials[currentIndex].handicap}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;