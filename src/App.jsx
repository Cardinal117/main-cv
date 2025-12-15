import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Logo from "./assets/Logo-main-horizontal_noBG.png"

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > window.innerHeight - 100) {
        navbar.classList.add("visible");
      } else {
        navbar.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <nav className="navbar">
      <div className="nav-container">
        <HashLink to="#home" className="nav-logo">
          <img
            src={Logo}
            alt="CardCore Logo"
            className="nav-logo-img"
          />
          <span className="nav-logo-text">| Jayden Liebenberg</span>
        </HashLink>

        <div className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <HashLink
            to="#about"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </HashLink>
          <HashLink
            to="#services"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </HashLink>
          <HashLink
            to="#projects"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </HashLink>
          <HashLink
            to="#testimonials"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </HashLink>

          <a
            href="/Jayden_Liebenberg_CV.pdf"
            download
            className="nav-contact-btn nav-cv-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            Download CV
          </a>

          <HashLink
            to="#contact"
            className="nav-contact-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Me
          </HashLink>
        </div>

        <div
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="footer">
    <img
      src={Logo}
      alt="CardCore"
      className="footer-logo"
    />
    <p>© 2025 CardCore | Jayden Liebenberg</p>
    <div className="footer-links">
      <a
        href="https://github.com/Cardinal117"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/jayden-liebenberg-679794336/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </footer>
);

const MainLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Home />
      <About />
      <Services />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <MainLayout />
      <Footer />

      {/* Floating WhatsApp Bubble - appears on ALL pages */}
      <a
        href="https://wa.me/27836020904?text=Hi%20Jayden%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20chat!"
        className="whatsapp-bubble"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Jayden on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </Router>
  );
};

export default App;
