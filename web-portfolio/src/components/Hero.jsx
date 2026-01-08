// External Libraries
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Aurora from "./animations/Aurora.jsx";
import mainLogo from "../assets/main-logo.png";
import logoShadow from "../assets/main-logo-float.png";

// TODO: fix the aurora for light mode

const styles = {
  section_hero: `relative h-screen flex flex-col items-center justify-center text-slate-900 dark:text-white text-center transition-colors duration-500 overflow-hidden z-0`,
  title: `text-5xl font-bold mb-4 text-slate-900 dark:text-white`,
  subtitle: `text-xl mb-8 text-slate-600 dark:text-slate-300`,
  hero_buttons: `flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-10 md:mt-12 w-full max-w-xs sm:max-w-none mx-auto`,
  btn_hero: `group relative px-8 md:px-10 py-3.5 md:py-4 bg-[#4880C9] text-white rounded-2xl md:rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_5px_rgba(72,128,201,0.6)] shadow-xl`,
  btn_secondary: `px-8 md:px-10 py-3.5 md:py-4 bg-transparent border-2 border-slate-300 dark:border-slate-800 rounded-2xl md:rounded-full font-bold text-slate-600 dark:text-slate-300 hover:border-[#4880C9] hover:text-[#4880C9] hover:bg-[#4880C9]/5 transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_2px_rgba(72,128,201,0.3)]`,
};

const Hero = () => {
  return (
    <section id="hero" className={styles.section_hero}>
      {/* BASE BACKGROUND LAYER (Lowest Z-index) */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#03030B] -z-30 transition-colors duration-500" />

      {/* AURORA LAYER (Middle Z-index) */}
      <div className="absolute inset-0 -z-10 pointer-events-none w-full h-full">
        <Aurora
          colorStops={["#0C1B53", "#4880C9", "#03030B"]}
          // colorStops={["#00FF00", "#FF0000", "#0000FF"]}
          amplitude={1.2}
          blend={0.5}
          speed={1.0}
        />
      </div>

      {/* CONTENT LAYER (Implicitly higher Z-index) */}
      <div className="relative z-10">
        <div className="relative flex items-center justify-center mb-12">
          {/* Shadow Logo */}
          <motion.img
            src={logoShadow}
            alt="Shadow"
            className="absolute w-70 h-100 md:w-64 md:h-64 opacity-10 dark:opacity-40 blur-sm transition-opacity"
            initial={{ scale: 0.85, y: 10, opacity: 0.4 }}
            animate={{ scale: 0.9, y: -10 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />

          {/* Main Logo */}
          <motion.img
            src={mainLogo}
            alt="Main Logo"
            className="relative z-10 w-100 h-100 md:w-64 md:h-64 drop-shadow-[0_0_20px_rgba(72,128,201,0.3)]"
            initial={{ scale: 1, y: -15 }}
            animate={{ scale: 1.05, y: 15 }}
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
          <a
            href="/Francine-Dalida-Resume2025.pdf"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <button className={styles.btn_hero}>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Download
                  size={18}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
                Get Resume
              </span>
            </button>
          </a>
          <a href="mailto:francine.dalida@gmail.com" className="cursor-pointer">
            <button className={styles.btn_secondary}>
              <Mail size={18} />
              Let's Talk
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
