import React from "react";
import Selfie from "../assets/Picture2.jpeg"

const About = () => {
  return (
    <section id="about" className="page-section" data-aos="fade-up">
      <div className="container">
        <h3>About Me</h3>
        <div className="about-grid">
          <img
            src={Selfie}
            alt="Jayden Liebenberg"
            className="about-photo"
            data-aos="fade-left"
          />
          <div className="about-text" data-aos="fade-right">
            <p>
              I'm a passionate Full-Stack Web Developer and IoT enthusiast,
              recently graduated from HyperionDev's immersive bootcamp.
            </p>
            <p>
              I love turning ideas into functional, user-friendly applications
              using modern technologies like React, Express, MongoDB, and more.
            </p>
            <p>
              My projects range from secure credential vaults to interactive
              games and APIs, showcasing my ability to build end-to-end
              solutions. Freelance experience includes building professional
              websites (like yachting service sites).
            </p>
            <p>
              When I'm not coding, you'll find me cycling, paddling, gaming, or
              exploring new tech. I'm adaptable, quick to learn, and always
              excited about new challenges. Open to freelance gigs or full-time
              opportunities — let's connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
