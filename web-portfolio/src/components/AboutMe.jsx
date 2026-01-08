import { motion } from "framer-motion";
import { Facebook, Linkedin, Github } from "lucide-react";

const styles = {
  section_about: `py-32 md:py-80 px-4 md:px-10 bg-slate-50 dark:bg-[#03030B] text-center relative overflow-hidden transition-colors duration-500`,
  section_title: `text-4xl md:text-5xl font-bold mb-10 text-slate-900 dark:text-white text-center w-full`,
  about_container: `max-w-5xl mx-auto text-center text-slate-600 dark:text-[#D4D4D4] leading-relaxed border border-slate-200 dark:border-white/5 p-8 md:p-16 rounded-[40px] shadow-2xl glow-blue glass-card relative z-10`,
  section_text: `mb-6 text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200`,
  about_icon:
    "text-4xl mx-4 text-slate-400 dark:text-[#D4D4D4] hover:text-[#4880C9] transition-all duration-300 cursor-pointer",
  about_badge: `px-4 py-2 bg-[#4880C9]/10 rounded-full border border-[#4880C9]/20 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#4880C9] inline-block m-2`,
};

const AboutMe = () => {
  return (
    <section id="about" className={styles.section_about}>
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
            Hello there! I'm{" "}
            <strong className="text-slate-900 dark:text-white">
              Francine Ysabel B. Dalida
            </strong>
            . You can call me{" "}
            <span className="text-[#4880C9] font-black px-2 py-0.5 bg-[#4880C9]/10 rounded-lg">
              Cine
            </span>
            .
          </p>

          <p className="text-slate-600 dark:text-[#D4D4D4] mb-8">
            I am a third-year Computer Science student specializing in
            <span className="text-slate-900 dark:text-white block font-bold mt-2">
              Intelligent Systems at De La Salle University - Dasmariñas.
            </span>
          </p>

          <div className="flex flex-wrap justify-center mb-10">
            <span className={styles.about_badge}>Full-Stack Dev</span>
            <span className={styles.about_badge}>Intelligent Systems</span>
            <span className={styles.about_badge}>Creative Artist</span>
            <span className={styles.about_badge}>Avid Reader</span>
          </div>

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
  );
};

export default AboutMe;
