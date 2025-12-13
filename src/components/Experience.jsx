import React from 'react';
import BlackEagleLogo from "../assets/BlackEagleLogo.png"
import C2CLogo from "../assets/LogoC2C.jpg"
import KreatifMarkLogo from "../assets/KreatifMark.jpg"

const Experience = () => {
  return (
    <section id="experience" className="page-section" data-aos="fade-up">
      <div className="container">
        <h3>Work Experience</h3>
        <div className="cards-grid">
          <div className="card" data-aos="fade-up">
            <div className="experience-header">
              <img src={C2CLogo} alt="C2C Yachting Logo" className="experience-logo" />
              <div>
                <h5>Freelance Web Developer - C2C Yachting (Australia)</h5>
                <p className="date">2025</p>
              </div>
            </div>
            <ul>
              <li>Designed and developed a professional single-page website for an Australian yachting tuition and delivery service.</li>
              <li>Created a clean, nautical-themed responsive layout with smooth navigation, service highlights, and clear calls-to-action.</li>
              <li>Inspired by the client's existing site (c2cyachting.com.au), delivered a modern, mobile-friendly version hosted on GitHub Pages.</li>
              <li>
                <a href="https://cardinal117star-eng.github.io/cycyachting/" target="_blank" rel="noopener noreferrer" className="btn-primary">Live Site</a>
              </li>
            </ul>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <div className="experience-header">
              <img src={BlackEagleLogo} alt="Black Eagle Brewery Logo" className="experience-logo" />
              <div>
                <h5>Black Eagle Brewery - Bartender & POS Operator</h5>
                <p className="date">2025–Present</p>
              </div>
            </div>
            <ul>
              <li>Serve beer and alcoholic beverages on tap, ensuring excellent customer service in a fast-paced environment.</li>
              <li>Operate POS system.</li>
            </ul>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <div className="experience-header">
              <img src={KreatifMarkLogo} alt="POS System Icon" className="experience-logo" />
              <div>
                <h5>Market - Retail & Bar Staff</h5>
                <p className="date">2024–2025</p>
              </div>
            </div>
            <ul>
              <li>Managed bar operations and retail transactions using POS systems.</li>
              <li>Assisted in setting up and fixing POS systems to ensure smooth operations.</li>
              <li>Assisted in setting up vendor stalls and ensured stock on stalls remained high.</li>
            </ul>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="300">
            <h5>Freelance - House Sitter</h5>
            <p className="date">2020–Present</p>
            <ul>
              <li>Provided reliable pet care for various people.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;