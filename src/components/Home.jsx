import React from "react";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage:
          "ur[](https://static.vecteezy.com/system/resources/previews/017/293/788/non_2x/abstract-dark-blue-gradient-color-background-with-flowing-particles-digital-future-technology-concept-free-vector.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content" data-aos="fade-up">
        <img
          src="/Picture2.jpeg"
          alt="Jayden Liebenberg"
          className="hero-photo"
        />
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
