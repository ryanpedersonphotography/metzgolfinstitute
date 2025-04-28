// components/ContactCTA.jsx
import React from 'react';

const ContactCTA = () => {
  return (
    <section className="contact-cta" id="contact">
      <div className="cta-content">
        <h2>Ready to Elevate Your Game?</h2>
        <p>Contact us today to schedule a lesson or learn more about our programs.</p>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject">
                <option value="lesson">Book a Lesson</option>
                <option value="information">Request Information</option>
                <option value="pricing">Pricing Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactCTA;