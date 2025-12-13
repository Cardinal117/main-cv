import React from "react";

const Education = () => {
  return (
    <section id="education" className="page-section" data-aos="fade-up">
      <div className="container">
        <h3>Education</h3>
        <div className="cards-grid">
          <div className="card" data-aos="fade-up">
            <div className="education-header">
              <img
                src="/HyperionDevLogo.jpg"
                alt="HyperionDev Logo"
                className="education-logo"
              />
              <div>
                <h5>
                  HyperionDev Immersive Full-stack Web and Software Engineering
                  Bootcamp (awaiting certificate)
                </h5>
                <p className="date">2025–(late) 2025</p>
              </div>
            </div>
            <ul>
              <li>
                Completed a 60-credit, QCTO/MICT SETA-accredited program focused
                on full-stack development.
              </li>
              <li>
                Mastered Java, JavaScript, React, Express.js, MongoDB, MySQL,
                PHP, WordPress, Git, and Docker.
              </li>
              <li>
                Built a JARVIS-inspired credential management app with React,
                Express, MongoDB, and JWT authentication.
              </li>
            </ul>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <div className="education-header">
              <img
                src="/TeneoLogo.jpeg"
                alt="IEB Teneo Online School Logo"
                className="education-logo"
              />
              <div>
                <h5>IEB Teneo Online School - High School</h5>
                <p className="date">Graduated 2024, Bachelor’s Pass</p>
              </div>
            </div>
            <ul>
              <li>
                Achieved 70% in Information Technology (Java, SQL) and 80%+ in
                Computer Applications Technology (CAT).
              </li>
              <li>
                Developed foundational skills in Java programming, advanced SQL,
                and Microsoft Office Suite.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
