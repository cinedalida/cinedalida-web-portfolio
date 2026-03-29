import { motion } from "framer-motion";
import { Facebook, Linkedin, Github } from "lucide-react";

// TO DO: Add Experience section: Work and Org
// Add Certifications section

const styles = {
  section_about: `py-32 md:py-80 px-4 md:px-10 bg-slate-50 dark:bg-[#03030B] text-center relative overflow-hidden transition-colors duration-500`,
  section_title: `text-4xl md:text-5xl font-medium mb-10 text-slate-900 dark:text-white text-center w-full`,
  about_container: `max-w-5xl mx-auto text-center text-slate-600 dark:text-[#D4D4D4] leading-relaxed border border-slate-200 dark:border-white/5 p-8 md:p-16 rounded-[40px] shadow-2xl glow-blue glass-card relative z-10`,
  section_text: `mb-6 text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200`,
  about_icon:
    "text-4xl mx-4 text-slate-400 dark:text-[#D4D4D4] hover:text-[#4880C9] transition-all duration-300 cursor-pointer",
  about_badge: `px-4 py-2 bg-[#4880C9]/10 rounded-full border border-[#4880C9]/20 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#4880C9] inline-block m-2`,
};

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15, // Sequential timing for each child
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
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-[#4880C9]/5 blur-[120px] rounded-full -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.about_container} relative z-20`}
      >
        <motion.h2 variants={itemVariants} className={styles.section_title}>
          Cine Dalida
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">

          <motion.p
            variants={itemVariants}
            className="text-slate-600 dark:text-[#D4D4D4] mb-8"
          >
            A Full-stack developer with a passion for data. I bridge design and technology to create intuitive, inclusive, human-centered digital experiences—projects that transcend barriers, solve problems, and empower users through thoughtful functionality.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center mb-10"
          >
            <span className={styles.about_badge}>Caffeine-fueled workaholic</span>
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
            className="flex justify-center gap-2"
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
    </section>
  );
};

export default AboutMe;
