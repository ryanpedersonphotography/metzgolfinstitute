// components/Facility.jsx
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Facility = () => {
  return (
    <section className="facility" id="facility">
      <div className="section-title">
        <h2>Our Facility</h2>
        <p>Experience golf instruction in a beautiful Northwoods setting</p>
        <div className="title-underline"></div>
      </div>

      <div className="facility-description">
        <p>
          Training takes place at The Pines Golf Course, located in beautiful Nisswa, Minnesota and owned by
          Grand View Lodge. This premier facility features a comprehensive practice area with a full driving range,
          bunker practice area, and short game facilities to help you improve every aspect of your game.
        </p>
        <p>
          Beyond traditional lessons, Gavin also offers the unique opportunity to play a round with you,
          providing real-time coaching and course management strategies in actual playing conditions.
          This on-course instruction is invaluable for translating practice improvements to your scorecard.
        </p>
      </div>

      {/* Slider temporarily commented out
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
      */}

      <div className="facility-features">
        <div className="facility-feature">
          <div className="feature-icon">
            <i className="fas fa-golf-ball"></i>
          </div>
          <h4>Driving Range</h4>
          <p>Full-size practice area to work on all aspects of your full swing</p>
        </div>

        <div className="facility-feature">
          <div className="feature-icon">
            <i className="fas fa-mountain"></i>
          </div>
          <h4>Bunker Practice</h4>
          <p>Dedicated sand practice area to master those tricky bunker shots</p>
        </div>

        <div className="facility-feature">
          <div className="feature-icon">
            <i className="fas fa-flag"></i>
          </div>
          <h4>Short Game Area</h4>
          <p>Perfect your chipping, pitching and putting on specialized practice greens</p>
        </div>

        <div className="facility-feature">
          <div className="feature-icon">
            <i className="fas fa-user-friends"></i>
          </div>
          <h4>Playing Lessons</h4>
          <p>Join Gavin for a round to receive real-time coaching on the course</p>
        </div>
      </div>
    </section>
  );
};

export default Facility;