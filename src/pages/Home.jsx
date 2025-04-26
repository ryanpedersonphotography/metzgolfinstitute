import React from 'react';
import './Pages.css';

function Home() {
  return (
    <div className="page-container">
      <header className="hero">
        <div className="hero-content">
          <h1>Metz Golf Institute</h1>
          <p className="tagline">Elevate Your Game at The Pines</p>
          {/* <button className="cta-button">Book a Lesson</button> */}
        </div>
      </header>

      <section className="about-section">
        <div className="section-container">
          <h2>Welcome to the Metz Golf Institute</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Located at The Pines Golf Course in beautiful Nissaw, Minnesota, 
                the Metz Golf Institute offers premier golf instruction for players 
                of all skill levels. Whether you're just starting your golf journey 
                or looking to refine your technique, our personalized approach will 
                help you achieve your goals.
              </p>
              <p>
                Founded on the principles of technical excellence and a passion for 
                the game, we provide a supportive environment where every golfer can thrive.
              </p>
            </div>
            <div className="about-image">
              <img src="https://placehold.co/600x400/2a5e35/ffffff?text=Golf+Course" alt="The Pines Golf Course" />
            </div>
          </div>
        </div>
      </section>

      <section className="instructor-section">
        <div className="section-container">
          <h2>Meet Your Instructor</h2>
          <div className="instructor-content">
            <div className="instructor-image">
              <img src="https://placehold.co/400x500/2a5e35/ffffff?text=Gavin+Metz" alt="Gavin Metz, Head Instructor" />
            </div>
            <div className="instructor-text">
              <h3>Gavin Metz</h3>
              <p className="instructor-title">Founder & Head Instructor</p>
              <p>
                Gavin Metz brings 
                passion and expertise to every lesson. His teaching philosophy 
                combines technical precision with a holistic approach to the mental game.
              </p>
              <p>
                Gavin's students range from beginners to professional competitors, 
                all benefiting from his personalized instruction methods and deep 
                understanding of golf mechanics.
              </p>
              <div className="credentials">
                {/* <span className="credential">PGA Certified</span>
                <span className="credential">Former Tour Professional</span> */}
                <span className="credential">Biomechanics Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="https://placehold.co/300x200/2a5e35/ffffff?text=Private+Lessons" alt="Private Lessons" />
              <h3>Private Lessons</h3>
              <p>One-on-one instruction tailored to your specific needs and goals.</p>
            </div>
            <div className="service-card">
              <img src="https://placehold.co/300x200/2a5e35/ffffff?text=Group+Clinics" alt="Group Clinics" />
              <h3>Group Clinics</h3>
              <p>Learn alongside others in a collaborative and fun environment.</p>
            </div>
            <div className="service-card">
              <img src="https://placehold.co/300x200/2a5e35/ffffff?text=Course+Management" alt="Course Management" />
              <h3>Course Management</h3>
              <p>On-course lessons to improve your strategy and decision-making.</p>
            </div>
            <div className="service-card">
              <img src="https://placehold.co/300x200/2a5e35/ffffff?text=Video+Analysis" alt="Video Analysis" />
              <h3>Video Analysis</h3>
              <p>Detailed breakdown of your swing using advanced technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="testimonials-section">
        <div className="section-container">
          <h2>What Our Students Say</h2>
          <div className="testimonials-carousel">
            <div className="testimonial">
              <p className="quote">
                "Working with Gavin transformed my approach to the game. My handicap dropped 
                from 18 to 12 in just one season of lessons!"
              </p>
              <p className="author">- Michael T.</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="cta-section">
        <div className="section-container">
          <h2>Ready to Improve Your Game?</h2>
          <p>Join us at The Pines and start your journey to better golf today.</p>
          <div className="cta-buttons">
            {/* <button className="cta-button">Book a Lesson</button>
            <button className="cta-button secondary">Learn More</button> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;