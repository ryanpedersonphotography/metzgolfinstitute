// components/SchedulingForm.jsx
import React, { useEffect } from 'react';

const SchedulingForm = () => {
  // Add effect to load the Acuity script after component mounts
  useEffect(() => {
    // Create and load the Acuity script if it doesn't already exist
    if (!document.getElementById('acuity-embed-script')) {
      const script = document.createElement('script');
      script.id = 'acuity-embed-script';
      script.src = 'https://embed.acuityscheduling.com/js/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Clean up script when component unmounts
        if (document.getElementById('acuity-embed-script')) {
          document.getElementById('acuity-embed-script').remove();
        }
      };
    }
  }, []);

  return (
    <section className="scheduling-form-section" id="schedule">
      <div className="container">
        <div className="section-title">
          <h2>Schedule a Lesson</h2>
          <p>Select a service and time that works for you</p>
          <div className="title-underline"></div>
        </div>

        <div className="acuity-embed-container">
          <iframe
            src="https://app.acuityscheduling.com/schedule.php?owner=35733292&ref=embedded_csp"
            title="Schedule Appointment"
            width="100%"
            height="800"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SchedulingForm;