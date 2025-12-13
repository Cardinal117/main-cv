import React from "react";
import { HashLink } from "react-router-hash-link";
import Selfie from "../assets/Picture2.jpeg";

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div> {/* New background layer */}
      <div className="hero-overlay"></div> {/* Dark tint overlay */}
      <div className="hero-content" data-aos="fade-up">
        <img src={Selfie} alt="Jayden Liebenberg" className="hero-photo" />
        <h1>Jayden Liebenberg</h1>
        <h2>Full-Stack Web Developer & IoT Enthusiast</h2>
        <p>
          Building modern, responsive web applications with React, Node.js, and
          more. Passionate about clean code, user experience, and innovative
          solutions.
        </p>
        <div className="hero-buttons">
          <HashLink to="#projects" className="btn-primary">
            View Projects
          </HashLink>
          <HashLink to="#contact" className="btn-secondary">
            Get In Touch
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
