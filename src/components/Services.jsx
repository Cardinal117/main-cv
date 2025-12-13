import React from "react";
import { HashLink } from "react-router-hash-link";

const Services = () => {
  return (
    <section id="services" className="page-section" data-aos="fade-up">
      <div className="container">
        <h3>Freelance Services</h3>
        <div className="projects-grid">
          <div
            className="card service-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="https://ainal.me/wp-content/uploads/2020/10/Hire-Freelancer.jpg"
              alt="Website Development"
            />
            <h5>Website Development</h5>
            <p>
              Custom, responsive websites built with modern technologies like
              React, HTML/CSS/JS, or WordPress. From personal portfolios to
              business sites.
            </p>
          </div>
          <div
            className="card service-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="https://images.ctfassets.net/lzny33ho1g45/Gdv6CdCFWrTQSEHAAWOTI/ced8c00b8a2e4e04fe1853eb86027afe/how-to-use-google-forms-image18.png"
              alt="Google Forms & Sheets Setup"
            />
            <h5>Google Forms + Sheets Setup</h5>
            <p>
              Professional setup of Google Forms linked to Sheets for data
              collection, surveys, bookings, or feedback systems.
            </p>
          </div>
          <div
            className="card service-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="https://formapprovals.com/static/images/homepage-concept-02.svg"
              alt="Automated Emails"
            />
            <h5>Automated Review & Thank You Emails</h5>
            <p>
              Configure Google Forms to automatically send reviews to your email
              and a personalized thank you email to the respondent (using Google
              Apps Script or add-ons).
            </p>
          </div>
        </div>
        <p className="service-cta">
          Interested?{" "}
          <HashLink to="#contact" className="btn-primary">
            Contact Me
          </HashLink>
        </p>
      </div>
    </section>
  );
};

export default Services;
