import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Calendar, MapPin } from "lucide-react";
import { WORK_EXPERIENCE, INVOLVEMENT } from "../constants";

const styles = {
  section_experience: `py-24 md:py-32 px-6 md:px-10 bg-slate-50 dark:bg-[#03030B] relative transition-colors duration-500`,
  section_title: `text-4xl md:text-6xl font-black font-medium text-slate-900 dark:text-white tracking-tighter mb-16 text-center`,
  container: `max-w-5xl mx-auto space-y-12`,
  // Uses global glass-card and glow-blue classes
  card: `glass-card rounded-[40px] p-8 md:p-12 border border-slate-200 dark:border-white/5 hover:border-[#4880C9]/30 transition-all duration-700 shadow-xl relative overflow-hidden`,
  role_title: `text-2xl md:text-3xl font-black font-medium text-slate-900 dark:text-white mb-2`,
  company_name: `text-[#4880C9] font-bold font-medium text-lg uppercase tracking-widest mb-4 flex items-center gap-2`,
  meta_text: `flex items-center gap-2 text-slate-500 dark:text-gray-400 text-sm font-medium`,
  bullet_point: `text-slate-600 dark:text-gray-400 leading-relaxed mb-3 last:mb-0 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-[#4880C9]/40 before:rounded-full`,
};

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className={styles.section_experience}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className={styles.container}
      >
        <motion.h2 variants={itemVariants} className={styles.section_title}>
          experience.
        </motion.h2>

        {/* Work Experience Section */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
             <div className="p-3 bg-[#4880C9]/10 rounded-2xl text-[#4880C9]">
                <Briefcase size={28} />
             </div>
             <h3 className="text-2xl font-black font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">Professional</h3>
          </motion.div>

          {WORK_EXPERIENCE.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.card}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h4 className={styles.role_title}>{exp.role}</h4>
                  <p className={styles.company_name}>{exp.company}</p>
                </div>
                <div className="space-y-2">
                  <div className={styles.meta_text}>
                    <Calendar size={14} className="text-[#4880C9]" />
                    {exp.period}
                  </div>
                  <div className={styles.meta_text}>
                    <MapPin size={14} className="text-[#4880C9]" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className={styles.bullet_point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Involvement Section */}
        <div className="pt-20 space-y-8">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
             <div className="p-3 bg-[#4880C9]/10 rounded-2xl text-[#4880C9]">
                <Users size={28} />
             </div>
             <h3 className="text-2xl font-black font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">Involvement</h3>
          </motion.div>

          {INVOLVEMENT.map((inv, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.card}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h4 className={styles.role_title}>{inv.role}</h4>
                  <p className={styles.company_name}>{inv.org}</p>
                </div>
                <div className={styles.meta_text}>
                  <Calendar size={14} className="text-[#4880C9]" />
                  {inv.period}
                </div>
              </div>
              <ul className="space-y-2">
                {inv.points.map((point, i) => (
                  <li key={i} className={styles.bullet_point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;