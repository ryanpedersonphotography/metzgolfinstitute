// components/CoachProfile.jsx
import React from 'react';

const CoachProfile = () => {
  return (
    <section className="coach-profile" id="about">
      <div className="coach-img-container">
        <div className="coach-img"></div>
        <div className="image-accent"></div>

      </div>
      <div className="coach-info">
        <div className="section-label">Meet Your Coach</div>
        <h2>Gavin Metz</h2>
        <h3>Head Golf Instructor</h3>
        <p>
        As a dedicated Teaching Golf Professional, I specialize in helping golfers of all skill levels elevate their game through a holistic approach that combines technical instruction with golf-specific fitness. With a deep understanding of swing mechanics and biomechanics, I integrate strength, flexibility, and mobility training into my coaching to improve consistency, increase distance, and reduce the risk of injury.
        </p>
        <p>
        I hold certifications from the Titleist Performance Institute (TPI Level 1) and the International Sports Sciences Association (ISSA), allowing me to tailor lessons and training plans to each golfer’s unique needs. Whether you're a competitive player striving to fine-tune your swing or a beginner building a solid foundation, my personalized approach is designed to help you reach your goals—and enjoy the game even more.
        </p>
      </div>
    </section>
  );
};

export default CoachProfile;