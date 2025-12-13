import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="page-section" data-aos="fade-up">
      <div className="container">
        <h3>Testimonials</h3>
        <div className="testimonials-grid">
          <div
            className="card testimonial-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="testimonial-quote">
              "Jayden delivered a beautiful, professional website for my
              yachting business. Clean design, fast loading, and exactly what I
              needed. Highly recommend!"
            </p>
            <div className="testimonial-author">
              <strong>Chris C.</strong> — C2C Yachting
            </div>
          </div>

          <div
            className="card testimonial-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="testimonial-quote">
              "Great communication and quick turnaround. Jayden set up Google
              Forms with automated emails perfectly. Saved me so much time!"
            </p>
            <div className="testimonial-author">
              <strong>Sarah M.</strong> — Small Business Owner
            </div>
          </div>

          <div
            className="card testimonial-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="testimonial-quote">
              "Talented developer with a sharp eye for design. The JARVIS app is
              impressive — secure, clean, and futuristic. Looking forward to
              working together again."
            </p>
            <div className="testimonial-author">
              <strong>Anonymous Client</strong> — Tech Enthusiast
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
