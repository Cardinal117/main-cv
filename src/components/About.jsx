import React from "react";
import Selfie from "../assets/Picture2.jpeg";

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
              I am a Full-Stack Web Developer and IoT Enthusiast having just
              completed the intensive bootcamp, at HyperionDev and some parts of
              the Complete Web Dev at ZTM Academy(Great place to study IT btw)
            </p>
            <p>
              I enjoy transforming concepts into easy-to-use applications by
              using contemporary, but occasionally frustrating, technologies
              such, as React, Express, MongoDB and others.
            </p>
            <p>
              My work includes credential storage systems, interactive gaming
              websites and APIs demonstrating my capability to develop
              comprehensive solutions. My freelance portfolio involves creating
              websites and connecting google forms to sheet scrip apps.
            </p>
            <p>
              My time away from my computer will be cycling, paddling, gaming,
              or exploring new tech. I'm adaptable, quick to learn and always
              excited about new challenges. Open to freelance new gigs or
              full-time opportunities, contact me below!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
