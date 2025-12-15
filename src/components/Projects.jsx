import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import HangManScreenshot from "../assets/HangManSCR.png";
import WebsiteShowcaseScreenShot from "../assets/WebsiteShowCaseSCR.png";
import JarvisCredentialsVaultSCR from "../assets/JarvisCredentialsVaultSCR.png";
import MontyHallReactAppSCR from "../assets/MontyHallReactAppSCR.png";
import BackToJSSCR from "../assets/BackToJSSCR.png";
import CarAPISCR from "../assets/CarAPISCR.png";
import SimpleWebsiteSCR from "../assets/SimpleWebsiteSCR.png";

const Projects = () => {
  return (
    <section id="projects" className="page-section" data-aos="fade-up">
      <div className="container">
        <h3>Fun Projects</h3>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="project-carousel"
        >
            <SwiperSlide>
              <div className="card project-card">
                <img
                  src={JarvisCredentialsVaultSCR}
                  alt="JARVIS Credential Vault"
                />
                <h5>JARVIS Credential Vault</h5>
                <p>
                  Developed a full-stack app with React, Express.js, MongoDB,
                  and JWT for secure credential management.
                </p>
                <p>
                  Implemented role-based access and a responsive admin panel for
                  user and division management.
                </p>
                <a
                  href="https://github.com/Cardinal117/jarvis-credential-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  GitHub
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card project-card">
                <img
                  src={WebsiteShowcaseScreenShot}
                  alt="Website Showcase"
                />
                <h5>Website Showcase</h5>
                <p>
                  Built an interactive site with SCSS, HTML, and JavaScript,
                  featuring animations and a “Save for Later” function.
                </p>
                <p>
                  Added comment/like functionality and a Playground page for
                  testing effects.
                </p>
                <div className="project-links">
                  <a
                    href="https://cardinal117.github.io/Website-showcase/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Cardinal117/Website-showcase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card project-card">
                <img
                  src={HangManScreenshot}
                  alt="Hangman Game"
                />
                <h5>Hangman Game</h5>
                <p>
                  Created a React-based game with dynamic word guessing and
                  score tracking (+50 points per letter).
                </p>
                <p>Styled with CSS and deployed on Vercel for accessibility.</p>
                <div className="project-links">
                  <a
                    href="https://hangman-react-app-ruddy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Cardinal117/hangman-react-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card project-card">
                <img
                  src={MontyHallReactAppSCR}
                  alt="Monty Hall React App"
                />
                <h5>Monty Hall React App</h5>
                <p>
                  Developed a React app simulating the Monty Hall problem with
                  an interactive three-door interface.
                </p>
                <p>Deployed on Vercel with CSS styling for clarity.</p>
                <div className="project-links">
                  <a
                    href="https://monty-hall-react.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Cardinal117/monty-hall-react"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card project-card">
                <img
                  src={CarAPISCR}
                  alt="CarListener API"
                />
                <h5>CarListener API</h5>
                <p>
                  Built a full-stack API with Node.js and Express.js for
                  managing car-related data.
                </p>
                <p>
                  Deployed frontend on Vercel and backend on a separate service.
                </p>
                <div className="project-links">
                  <a
                    href="https://carlistener-api.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Cardinal117/carlistener_api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card project-card">
                <img
                  src={BackToJSSCR}
                  alt="Back to JavaScript Website"
                />
                <h5>Back to JavaScript Website</h5>
                <p>
                  Created a JavaScript refresher site with navigable sections
                  for core concepts.
                </p>
                <p>
                  Hosted on GitHub Pages with CSS styling for accessibility.
                </p>
                <div className="project-links">
                  <a
                    href="https://cardinal117.github.io/Back-to-JS-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Cardinal117/Back-to-JS-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card project-card">
                <img
                  src={SimpleWebsiteSCR}
                  alt="Simple Website"
                />
                <h5>Simple Website</h5>
                <p>
                  Built a minimalist static site to practice HTML and CSS
                  skills.
                </p>
                <p>Hosted on GitHub Pages for deployment practice.</p>
                <div className="project-links">
                  <a
                    href="https://cardinal117.github.io/SimpleWebsite/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Cardinal117/SimpleWebsite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </section>
  );
};

export default Projects;
