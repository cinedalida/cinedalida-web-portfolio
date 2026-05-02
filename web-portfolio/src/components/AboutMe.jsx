import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Github, MapPin, Briefcase } from "lucide-react";

const styles = {
  section_about: `py-32 md:py-80 px-4 md:px-10 bg-slate-50 dark:bg-[#03030B] text-center relative overflow-hidden transition-colors duration-500`,
  section_title: `text-4xl md:text-5xl font-medium mb-10 text-slate-900 dark:text-white text-center w-full`,
  about_container: `max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-stretch relative z-10`,
  // Profile Card Styles
  profile_card: `w-full lg:w-1/3 glass-card rounded-[40px] p-8 border border-slate-200 dark:border-white/5 shadow-2xl glow-blue flex flex-col items-center text-center`,
  profile_image: `w-full aspect-square rounded-[30px] object-cover mb-6 border border-slate-200 dark:border-white/10`,
  info_badge: `w-full py-3 px-4 mb-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-gray-300`,
  // Content Wrapper
  content_side: `w-full lg:w-2/3 flex flex-col justify-center text-left`,
  section_text: `mb-6 text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200`,
  about_icon:
    "text-4xl mx-4 text-slate-400 dark:text-[#D4D4D4] hover:text-[#4880C9] transition-all duration-300 cursor-pointer",
  about_badge: `px-4 py-2 bg-[#4880C9]/10 rounded-full border border-[#4880C9]/20 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#4880C9] inline-block m-2`,
};

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className={`${styles.section_about} relative z-10`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-[#4880C9]/5 blur-[120px] rounded-full -z-10" />

      <div className={styles.about_container}>
        {/* Left Column: Profile Card */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.profile_card}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? "/pic2.jpg" : "/pic1.jpg"}
            alt="Cine Dalida"
            className={styles.profile_image}
          />
          <div className="w-full space-y-3">
            <div className={styles.info_badge}>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to Work
            </div>
            <div className={styles.info_badge}>
              <Briefcase size={18} className="text-[#4880C9]" />
              Software and Data Enthusiast
            </div>
            <div className={styles.info_badge}>
              <MapPin size={18} className="text-[#4880C9]" />
              Imus, Cavite
            </div>
          </div>
        </motion.div>

        {/* Right Column: Original Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={styles.content_side}
        >
          <motion.h2
            variants={itemVariants}
            className={styles.section_title + " !text-left"}
          >
            Cine Dalida
          </motion.h2>

          <div className="max-w-3xl">
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-[#D4D4D4] mb-8"
            >
              A Computer Science student at De La Salle University – Dasmariñas,
              specializing in Intelligent Systems and an OWWA scholar, driven by
              curiosity, innovation and the joy for service. As a full-stack
              developer with a passion for data, I aim to build, collaborate and
              form solutions that not only function efficiently but also
              inspire, empower, and make a meaningful impact.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-start mb-10"
            >
              <span className={styles.about_badge}>
                Caffeine-fueled workaholic
              </span>
              <span className={styles.about_badge}>Project Management</span>
              <span className={styles.about_badge}>Agile Leader</span>
              <span className={styles.about_badge}>Intelligent Systems</span>
              <span className={styles.about_badge}>UI/UX</span>
              <span className={styles.about_badge}>Automation</span>
              <span className={styles.about_badge}>SQL</span>
              <span className={styles.about_badge}>Python</span>
              <span className={styles.about_badge}>ReactJS</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-start gap-2"
            >
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
