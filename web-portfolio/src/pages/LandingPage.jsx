// External Libraries
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Github, Download, Mail } from "lucide-react";

// Local Components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TechStack from "../components/TechStack.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import NormalCard from "../components/NormalCard.jsx";

// Media Assets
import mainLogo from "../assets/main-logo.png";
import logoShadow from "../assets/main-logo-float.png";

// Local Styles
import "../css/landingPage.css";

const styles = {
  // Hero Section Styles
  section_hero: `h-screen flex flex-col items-center justify-center bg-[#03030B] text-white text-center 0 -20px 30px -10px rgba(255, 255, 255, 0.5)`,
  title: `text-5xl font-bold mb-4`,
  subtitle: `text-xl mb-8`,
  // Hero Button Container (Responsive)
  hero_buttons: `flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-10 md:mt-12 w-full max-w-xs sm:max-w-none mx-auto`,

  // Primary Button (Download)
  btn_hero: `group relative px-8 md:px-10 py-3.5 md:py-4 bg-[#4880C9] text-white rounded-2xl md:rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_5px_rgba(72,128,201,0.6)] shadow-xl`,

  // Secondary Button (Contact)
  btn_secondary: `px-8 md:px-10 py-3.5 md:py-4 bg-transparent border-2 border-slate-800 rounded-2xl md:rounded-full font-bold text-slate-300 hover:border-[#4880C9] hover:text-[#4880C9] hover:bg-[#4880C9]/5 transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_2px_rgba(72,128,201,0.3)]`,

  // about me
  section_about: `py-32 md:py-80 px-4 md:px-10 bg-[#03030B] text-center relative overflow-hidden`,
  section_title: `text-4xl md:text-5xl font-bold mb-10 text-white`,
  about_container: `max-w-5xl mx-auto text-center text-[#D4D4D4] leading-relaxed border border-white/5 p-8 md:p-16 rounded-[40px] shadow-2xl glow-blue glass-card relative z-10`,
  section_text: `mb-6 text-lg md:text-xl font-medium`,
  about_icon:
    "text-4xl mx-4 text-[#D4D4D4] hover:text-[#4880C9] transition-all duration-300 cursor-pointer",

  // badge styling aligned to your naming logic
  about_badge: `px-4 py-2 bg-[#4880C9]/10 rounded-full border border-[#4880C9]/20 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#4880C9] inline-block m-2`,

  // tech
  section_tech: `py-32 md:py-40 px-6 md:px-10 bg-[#03030B] text-center relative`,
  section_subtitle: `mb-12 text-2xl md:text-3xl font-bold tracking-tight text-white`,

  // Tab and Grid styles
  tech_tab_container: `flex flex-wrap justify-center gap-4 mb-16`,
  tech_card: `group flex flex-col items-center p-6 bg-[#181A20] rounded-3xl border border-white/5 hover:border-[#4880C9]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(72,128,201,0.2)]`,
  tech_icon: `w-12 h-12 mb-4 object-contain group-hover:scale-110 transition-transform duration-300`,
  tech_label: `text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-[#4880C9] transition-colors`,

  // porjects
  section_projects: `py-80 px-10 bg-[#03030B] text-center`,
  project_section: `border border-red-500`,

  // art & posters
  section_artPosters: `py-80 px-10 bg-[#03030B] text-center`,
};

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        {/* ========== Section 1: Hero Page ========== */}
        <section id="hero" className={styles.section_hero}>
          <div className="relative flex items-center justify-center mb-12">
            {/* Shadow Logo (Behind) */}
            <motion.img
              src={logoShadow}
              alt="Shadow"
              className="absolute w-70 h-100 md:w-64 md:h-64 opacity-40 blur-sm"
              initial={{ scale: 0.85, y: 10, opacity: 0.4 }}
              animate={{
                scale: 0.9,
                y: -10,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />

            {/* Main Logo (Front) */}
            <motion.img
              src={mainLogo}
              alt="Main Logo"
              className="relative z-10 w-100 h-100 md:w-64 md:h-64 drop-shadow-[0_0_20px_rgba(72,128,201,0.3)]"
              initial={{ scale: 1, y: -15 }}
              animate={{
                scale: 1.05,
                y: 15,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className={styles.title}
          >
            Hiraya Manawari
          </motion.h1>

          <p className={styles.subtitle}>
            Want an application that is both captivating and creative?
          </p>

          <div className={styles.hero_buttons}>
            <button className={styles.btn_hero}>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Download
                  size={18}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
                Get Resume
              </span>
            </button>

            {/* Secondary Button */}
            <button className={styles.btn_secondary}>
              <Mail size={18} />
              Let's Talk
            </button>
          </div>
        </section>

        {/* ========== Section 2: About Me ========== */}
        <section id="about" className={styles.section_about}>
          {/* Floating Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-[#4880C9]/5 blur-[120px] rounded-full -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.about_container}
          >
            <h2 className={styles.section_title}>about me.</h2>

            <div className="max-w-3xl mx-auto">
              <p className={styles.section_text}>
                hello there! I'm{" "}
                <strong className="text-white">
                  Francine Ysabel B. Dalida
                </strong>
                . You can call me{" "}
                <span className="text-[#4880C9] font-black px-2 py-0.5 bg-[#4880C9]/10 rounded-lg">
                  Cine
                </span>
                .
              </p>

              <p className="text-[#D4D4D4] mb-8">
                I am a third-year Computer Science student specializing in
                <span className="text-white block font-bold mt-2">
                  Intelligent Systems at De La Salle University - Dasmariñas.
                </span>
              </p>

              {/* Skill Badges from AI Studio */}
              <div className="flex flex-wrap justify-center mb-10">
                <span className={styles.about_badge}>Full-Stack Dev</span>
                <span className={styles.about_badge}>Intelligent Systems</span>
                <span className={styles.about_badge}>Creative Artist</span>
                <span className={styles.about_badge}>Avid Reader</span>
              </div>

              {/* Social Icons using Lucide & your about_icon style */}
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.facebook.com/ysabel.dalida.15"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className={styles.about_icon} size={32} />
                </a>
                <a
                  href="https://www.linkedin.com/in/cinedalida"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className={styles.about_icon} size={32} />
                </a>
                <a
                  href="https://github.com/cinedalida"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className={styles.about_icon} size={32} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========== Section 3: Tech ========== */}
        <section id="tech" className={styles.section_tech}>
          <h2 className={styles.section_title}>tech.</h2>
          <TechStack />
        </section>

        {/* ========== Section 4: Projects ========== */}
        <section id="projects" className={styles.section_projects}>
          <h2 className={styles.section_title}>pojects.</h2>
          <div className="project-wrapper">
            {/* ========== Project: Application Development ========== */}
            <div className={styles.project_section} id="app-dev">
              <h3 className={styles.section_subtitle}>
                application development
              </h3>
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
            <div className="project-section mt-100" id="prototypes">
              <h3 className={styles.section_subtitle}>prototypes</h3>
              <div className="rgrid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                <div className="col">
                  <NormalCard
                    title="Lauviah"
                    description="A productivity and wellness prototype app for personal growth."
                  />
                </div>
                <div className="col">
                  <NormalCard
                    title="Apo Kalinga"
                    description="Community-based health services prototype for indigenous groups."
                  />
                </div>
                <div className="col">
                  <NormalCard
                    title="Cha-Ching"
                    description="A financial literacy app prototype focused on gamified learning."
                  />
                </div>
              </div>
            </div>
            {/* ========== Project: Arts and Posters ========== */}
            <div className="art section" id="arts-posters">
              <h3 className={styles.section_subtitle}>arts & posters</h3>
            </div>
            <div className="rgrid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="col">
                <NormalCard
                  title="art portfolio"
                  description="Canva presentation for my art compilation. From organizational works, school projects to personal projects."
                />
              </div>
              <div className="col">
                <NormalCard
                  title="Artworks"
                  description="A compilation of my commissioned works both digital and traditional art in Instagram."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
