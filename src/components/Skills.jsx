import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="page-section" data-aos="fade-up">
      <div className="container">
        <h3>Skills & Competencies</h3>
        <div className="skills-section">
          <h5>Technical Skills</h5>
          <div className="skills-container">
            <span className="skill-badge java">Java</span>
            <span className="skill-badge javascript">JavaScript</span>
            <span className="skill-badge react">React</span>
            <span className="skill-badge express">Express.js</span>
            <span className="skill-badge mongodb">MongoDB</span>
            <span className="skill-badge mysql">MySQL</span>
            <span className="skill-badge sql">SQL</span>
            <span className="skill-badge html">HTML</span>
            <span className="skill-badge css">CSS</span>
            <span className="skill-badge scss">SCSS</span>
            <span className="skill-badge php">PHP</span>
            <span className="skill-badge wordpress">WordPress</span>
            <span className="skill-badge jquery">jQuery</span>
            <span className="skill-badge git">Git</span>
            <span className="skill-badge docker">Docker</span>
            <span className="skill-badge google-forms">Google Forms</span>
            <span className="skill-badge google-sheets">Google Sheets</span>
            <span className="skill-badge google-apps-script">
              Google Apps Script
            </span>
          </div>
        </div>
        <div className="skills-section">
          <h5>Other Tools</h5>
          <div className="skills-container">
            <span className="skill-badge word">Microsoft Word</span>
            <span className="skill-badge excel">Microsoft Excel</span>
            <span className="skill-badge access">Microsoft Access</span>
            <span className="skill-badge powerpoint">Microsoft PowerPoint</span>
            <span className="skill-badge github">GitHub</span>
          </div>
        </div>
        <div className="skills-section">
          <h5>Soft Skills</h5>
          <ul className="soft-skills">
            <li>Adaptable to various scenarios and flexible with hours.</li>
            <li>Strong problem-solving under pressure.</li>
            <li>Experienced with POS system operations and troubleshooting.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
