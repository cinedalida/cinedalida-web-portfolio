import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "../css/landingPage.css";

const styles = {
  // Hero Section Styles
  section_hero: `h-screen flex flex-col items-center justify-center bg-[#03030B] text-white text-center 0 -20px 30px -10px rgba(255, 255, 255, 0.5)`,
  title: `text-5xl font-bold mb-4`,
  subtitle: `text-xl mb-8`,
  hero_buttons: `flex space-x-4 mt-6`,
  btn_hero: `bg-[#4880C9] text-white px-4 py-3 rounded-3xl hover:shadow-[0_0_20px_5px_rgba(72,128,201,0.8)] transition duration-300`,

  // about me
  section_about: `py-80 px-10 bg-[#03030B] text-center`,
  section_title: `text-4xl mb-6`, // global
  about_container: `max-w-3xl mx-auto text-center text-[#D4D4D4] leading-relaxed border border-[#444] p-8 rounded-2xl shadow-lg glow-blue`,
  section_text: `mb-4 text-lg`, // global
  about_icon:
    "text-4xl mx-4 text-[#D4D4D4] hover:text-[#4880C9] transition-colors duration-300 cursor-pointer",

  // tech.
  section_tech: `py-40 px-10 bg-[#03030B] text-center`,
  section_subtitle: `text-2xl`,

  // porjects
  section_projects: `py-80 px-10 bg-[#03030B] text-center`,
  project_section: `border border-red-500`,

  // art & posters
  // section_artPosters: `py-80 px-10 bg-[#03030B] text-center`,
};

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* ========== Section 1: Hero Page ========== */}
      <section id="hero" className={styles.section_hero}>
        <h1 className={styles.title}>Hiraya Manawari</h1>
        <p className={styles.subtitle}>
          Want an application that is both captivating and creative?
        </p>

        <div className={styles.hero_buttons}>
          <button className={styles.btn_hero}>Download Resume</button>
          <button className={styles.btn_hero}>Contact Me</button>
        </div>
      </section>

      {/* ========== Section 2: About Me ========== */}
      <section id="about" className={styles.section_about}>
        <div className={styles.about_container}>
          <h2 className={styles.section_title}>about me.</h2>
          <p className={styles.section_text}>
            Hello, I’m Francine Dalida, you can call me{" "}
            <span className="font-bold">Cine</span> for short! A third year
            Computer Science student with specialization in{" "}
            <span className="font-bold">Intelligent Systems</span> at De La
            Salle University - Dasmariñas
          </p>
          <p className={styles.section_text}>
            almost a <span className="font-bold">full-stack developer</span>, an
            <span className="font-bold"> artist wannabe</span>, and a{" "}
            <span className="font-bold">reader</span> by choice.
          </p>

          <div className="contact-icons">
            <a
              href="https://www.facebook.com/ysabel.dalida.15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.about_icon}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/cinedalida/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.about_icon}
              />
            </a>
            <a
              href="https://github.com/cinedalida"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className={styles.about_icon} />
            </a>
          </div>
        </div>
      </section>

      {/* ========== Section 3: Tech ========== */}
      <section id="tech" className={styles.section_tech}>
        <h2 className={styles.section_title}>tech.</h2>
        <div id="tech-stack">
          {/* Front-End Category */}
          <div id="frontend-stack" className="tech-category">
            <div className="tech-item"></div>
            <div className="tech-item"></div>
            <div className="tech-item"></div>
          </div>
          {/* Back-End Category */}
          <div id="backend-stack" className="tech-category">
            <div className="tech-item"></div>
            <div className="tech-item"></div>
            <div className="tech-item"></div>
          </div>
          {/* Other Tools Category */}
          <div id="other-tools-stack" className="tech-category">
            <div className="tech-item"></div>
            <div className="tech-item"></div>
            <div className="tech-item"></div>
          </div>
        </div>
      </section>

      {/* ========== Section 4: Projects ========== */}
      <section id="projects" className={styles.section_projects}>
        <h2 className={styles.section_title}>pojects.</h2>
        <div className="project-wrapper">
          {/* ========== Project: Application Development ========== */}
          <div className={styles.project_section} id="app-dev">
            <h3 className={styles.section_subtitle}>application development</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <ProjectCard
                  image="la-spot.jpg"
                  alt="La Spot"
                  title="La Spot"
                  description="A university parking system web app with live maps and admin control."
                />
              </div>
              <div className="col">
                <ProjectCard
                  image="hollow-knight.jpg"
                  alt="HK Gallery"
                  title="Hollow Knight Gallery"
                  description="A fan-made gallery showcasing Hollow Knight characters and art."
                />
              </div>
              <div className="col">
                <ProjectCard
                  image="product-landing.jpg"
                  alt="Product Landing Page"
                  title="Landing Page"
                  description="A stylish landing page built with HTML, CSS, and Bootstrap."
                />
              </div>
            </div>
          </div>
          {/* ========== Project: Prototypes ========== */}
          <div className="project-section mb-5" id="prototypes">
            <h3 className={styles.section_subtitle}>prototypes</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Lauviah</h5>
                    <p className="card-text">
                      A productivity and wellness prototype app for personal
                      growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Apo Kalinga</h5>
                    <p className="card-text">
                      Community-based health services prototype for indigenous
                      groups.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Cha-Ching</h5>
                    <p className="card-text">
                      A financial literacy app prototype focused on gamified
                      learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========== Project: Arts and Posters ========== */}
          <div className="art section" id="arts-posters">
            <h3 className={styles.section_subtitle}>arts & posters</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img
                    src="art-portfolio.jpg"
                    className="card-img-top"
                    alt="Art Portfolio"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Art Portfolio</h5>
                    <p className="card-text">
                      A collection of my digital artworks and illustration
                      experiments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img
                    src="posters.jpg"
                    className="card-img-top"
                    alt="Posters"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Event Posters</h5>
                    <p className="card-text">
                      Various posters designed for school events and
                      organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 5: Footer ========== */}
      <footer className="section-footer">
        <div className="footer-content">
          <p>&copy; 2023 Francine Dalida. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              GitHub
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
