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
              completed the intensive bootcamp, at HyperionDev.F
            </p>
            <p>
              I enjoy transforming concepts into easy-to-use applications by
              utilizing contemporary technologies such, as React, Express,
              MongoDB and others.
            </p>
            <p>
              My work encompasses credential storage systems, interactive gaming
              and APIs demonstrating my capability to develop comprehensive
              solutions. My freelance portfolio involves creating websites, such
              as those, for yachting services.
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
