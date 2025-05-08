// components/SchedulingForm.jsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const SchedulingForm = () => {
  const [formspreeState, handleSubmit] = useForm("xwpobqkd");
  
  // Define lesson options
  const lessonOptions = [
    { value: 'single-lesson', label: 'Single Golf Lesson with TPI Screen (45 min - $75)' },
    { value: 'series-3', label: 'Series of 3 Lessons (45 min each - $210)' },
    { value: 'series-5', label: 'Series of 5 Lessons (45 min each - $310)' },
    { value: 'workout-plan', label: 'Golf Workout Plan Through TPI (30 min - $50/Month)' },
    { value: 'training-session', label: 'Golf Training Session (30 min - $30)' },
    { value: 'course-management', label: 'Course Management Lesson (9 Holes - $150)' },
    { value: 'junior-10-15', label: 'Junior Lesson (30 min - $60) - Ages 10-15' },
    { value: 'junior-5-9', label: 'Junior Lesson (30 min - $50) - Ages 5-9' },
    { value: 'full-bag-fitting', label: 'Full Bag Fitting (2 hours - $150)' },
    { value: 'driver-fitting', label: 'Driver/Wood Fitting (45 min - $75)' },
    { value: 'irons-fitting', label: 'Irons Fitting (1 hour - $100)' },
    { value: 'putter-fitting', label: 'Putter Fitting (30 min - $50)' },
    { value: 'gap-analysis', label: 'Gap Analysis (30 min - $50)' }
  ];
    { value: 'series-5', label: 'Series of 5 Lessons (45 min each - $310)' },
    { value: 'workout-plan', label: 'Golf Workout Plan Through TPI (30 min - $50/Month)' },
    { value: 'training-session', label: 'Golf Training Session (30 min - $30)' },
    { value: 'course-management', label: 'Course Management Lesson (9 Holes - $150)' },
    { value: 'junior-10-15', label: 'Junior Lesson (30 min - $60) - Ages 10-15' },
    { value: 'junior-5-9', label: 'Junior Lesson (30 min - $50) - Ages 5-9' },
    { value: 'full-bag-fitting', label: 'Full Bag Fitting (2 hours - $150)' },
    { value: 'driver-fitting', label: 'Driver/Wood Fitting (45 min - $75)' },
    { value: 'irons-fitting', label: 'Irons Fitting (1 hour - $100)' },
    { value: 'putter-fitting', label: 'Putter Fitting (30 min - $50)' },
    { value: 'gap-analysis', label: 'Gap Analysis (30 min - $50)' }
  ];
  
  // Time slots based on typical golf lesson availability
  const timeSlots = [
    '7:00 AM - 8:00 AM',
    '8:00 AM - 9:00 AM',
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM'
  ];
  
  return (
    <section className="scheduling-form-section" id="schedule">
      <div className="container">
        <div className="section-title">
          <h2>Schedule a Lesson</h2>
          <p>Submit your information and preferred times to request an appointment</p>
          <div className="title-underline"></div>
        </div>
        
        {formspreeState.succeeded ? (
          <div className="form-success">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>Request Submitted</h3>
            <p>Thank you! Your scheduling request has been submitted. We will contact you shortly to confirm your appointment.</p>
            <button 
              className="btn primary"
              onClick={() => window.location.reload()}
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <div className="form-container">
            <form 
              onSubmit={handleSubmit}
              className="scheduling-form"
            >
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                  />
                  <ValidationError prefix="Name" field="name" errors={formspreeState.errors} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                  />
                  <ValidationError prefix="Email" field="email" errors={formspreeState.errors} />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                  />
                  <ValidationError prefix="Phone" field="phone" errors={formspreeState.errors} />
                </div>
                <div className="form-group">
                  <label htmlFor="lessonType">Type of Lesson *</label>
                  <select 
                    id="lessonType" 
                    name="lessonType"
                    required
                  >
                    {lessonOptions.map(option => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ValidationError prefix="Lesson Type" field="lessonType" errors={formspreeState.errors} />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="preferredDates">Preferred Dates * (mm/dd/yyyy)</label>
                  <input 
                    type="text" 
                    id="preferredDates" 
                    name="preferredDates" 
                    placeholder="e.g., 05/15/2025, 05/16/2025"
                    required 
                  />
                  <ValidationError prefix="Preferred Dates" field="preferredDates" errors={formspreeState.errors} />
                  <small className="form-hint">Please list multiple dates in order of preference</small>
                </div>
                <div className="form-group">
                  <label htmlFor="preferredTimes">Preferred Times *</label>
                  <select 
                    id="preferredTimes" 
                    name="preferredTimes"
                    required
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  <ValidationError prefix="Preferred Times" field="preferredTimes" errors={formspreeState.errors} />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="notes">Additional Notes</label>
                <textarea 
                  id="notes" 
                  name="notes" 
                  rows="4"
                  placeholder="Any special requirements or questions?"
                ></textarea>
                <ValidationError prefix="Notes" field="notes" errors={formspreeState.errors} />
              </div>
              
              {formspreeState.errors && formspreeState.errors.length > 0 && (
                <div className="form-error">
                  <p>There was an error submitting your request. Please check the form and try again.</p>
                </div>
              )}
              
              <div className="form-actions">
                <button type="submit" className="btn primary" disabled={formspreeState.submitting}>
                  {formspreeState.submitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
              
              <div className="form-disclaimer">
                <p>
                  <i className="fas fa-info-circle"></i> 
                  This is a scheduling request only. We will contact you to confirm your appointment.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default SchedulingForm;