// Hooks
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

// Local Assets
import mainLogo from "../assets/main-logo.png";
import logoShadow from "../assets/main-logo-float.png";

const styles = {
  section_hero: `relative min-h-[120vh] flex flex-col items-center justify-center text-slate-900 dark:text-white text-center transition-colors duration-500 overflow-hidden z-0 px-6 pt-10 pb-40`,
  title: `text-4xl sm:text-5xl md:text-6xl font-medium mb-4 text-slate-900 dark:text-white leading-tight`,
  subtitle: `text-lg sm:text-xl mb-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto`,
  hero_buttons: `flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 md:mt-12 w-full max-w-[280px] sm:max-w-none mx-auto`,
  btn_hero: `group relative w-full sm:w-auto px-8 md:px-10 py-4 bg-[#4880C9] text-white rounded-2xl md:rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_5px_rgba(72,128,201,0.6)] shadow-xl`,
  btn_secondary: `group relative w-full sm:w-auto px-8 md:px-10 py-4 bg-[#4880C9] border-2 border-[#4880C9] rounded-2xl md:rounded-full font-bold text-white overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_5px_rgba(72,128,201,0.5)] flex items-center justify-center gap-2`,
};

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDarkMode(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  const scrollImages = [
    "CareerCove_proj.png",
    "Laspot_proj.png",
    "GameArtGal_proj.png",
    "ProdLangPage_proj.png"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className={styles.section_hero}>
      {/* Base Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#03030B] -z-30 transition-colors duration-500" />
      
      {/* Mesh Gradient Replacement */}
      <div className="hero-mesh-gradient animate-mesh" />

      {/* Background Images Wrapper */}
      <div className="absolute top-0 left-0 right-0 -bottom-32 -z-10 overflow-hidden opacity-40 pointer-events-none"> 
      
        <div className="flex w-[200%] h-full animate-scroll-left items-end pb-40 gap-8 px-4" style={{ transform: "translateX(0)" }}>
          {[...scrollImages, ...scrollImages].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-[220px] md:h-[300px] rounded-2xl object-cover shadow-md transform translate-y-20"
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-slate-50 dark:from-[#03030B] to-transparent pointer-events-none z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="relative flex items-center justify-center mb-12"
        >
          <motion.img
            src={logoShadow}
            alt="Shadow"
            className="absolute w-48 h-48 md:w-64 md:h-64 opacity-20 dark:opacity-40 blur-sm transition-opacity"
            initial={{ scale: 0.85, y: 10, opacity: 0.4 }}
            animate={{ scale: 0.9, y: -10 }}
            transition={{
              duration: 6,
              repeat: Infinity, // Changed from 2 to Infinity to stay synced
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={mainLogo}
            alt="Main Logo"
            className="relative z-10 w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_0_20px_rgba(72,128,201,0.3)]"
            initial={{ scale: 1, y: -15 }}
            animate={{ scale: 1.05, y: 15 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.h1 variants={itemVariants} className={styles.title}>
          Hiraya Manawari
        </motion.h1>

        <motion.p variants={itemVariants} className={styles.subtitle}>
          A space where creativity meets intention, with curiosity as its compass.
        </motion.p>

        <motion.div variants={itemVariants} className={styles.hero_buttons}>
          <a
            href="/[DALIDA] Resume (2026).pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <button className={`${styles.btn_hero} cursor-pointer`}>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Download
                  size={18}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
                Get Resume
              </span>
            </button>
          </a>
          <a
            href="mailto:francine.dalida@gmail.com"
            className="w-full sm:w-auto"
          >
            <button className={`${styles.btn_secondary} cursor-pointer`}>
              <Mail size={18} />
              Let's Talk
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
