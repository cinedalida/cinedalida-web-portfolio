import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Award,
  ExternalLink,
  ShieldCheck,
  Star,
} from "lucide-react";
import { CERTIFICATIONS_DATA } from "../constants";

const styles = {
  section_cert: `py-24 md:py-32 px-6 md:px-10 bg-slate-50 dark:bg-[#03030B] relative transition-colors duration-500`,
  section_title: `text-4xl md:text-6xl font-black font-medium text-slate-900 dark:text-white tracking-tighter mb-16 text-center`,
  container: `max-w-7xl mx-auto`,
  grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`,
  card: `glass-card rounded-[32px] p-8 border border-slate-200 dark:border-white/5 hover:border-[#4880C9]/30 transition-all duration-500 shadow-xl relative overflow-hidden flex flex-col items-center text-center group h-full`,
  icon_box: `p-4 bg-[#4880C9]/10 rounded-2xl text-[#4880C9] mb-6 group-hover:bg-[#4880C9]/20 transition-all duration-500`,
  cert_name: `text-xl font-black font-medium text-slate-900 dark:text-white mb-3 leading-tight`,
  cert_meta: `text-sm font-bold uppercase tracking-widest text-[#4880C9] mb-2`,
  cert_desc: `text-slate-500 dark:text-gray-400 text-xs font-medium leading-relaxed`,
  toggle_btn: `mx-auto mt-8 flex items-center gap-2 px-8 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#4880C9] font-black text-xs uppercase tracking-widest rounded-full hover:shadow-lg transition-all cursor-pointer active:scale-95`,
};

const getIcon = (type) => {
  switch (type) {
    case "shield":
      return <ShieldCheck size={28} />;
    case "award":
      return <Award size={28} />;
    case "external":
      return <ExternalLink size={28} />;
    case "star":
      return <Star size={28} />;
    default:
      return <Award size={28} />;
  }
};

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll
    ? CERTIFICATIONS_DATA
    : CERTIFICATIONS_DATA.slice(0, 4);

  return (
    <section id="certifications" className={styles.section_cert}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square bg-[#4880C9]/5 blur-[120px] rounded-full -z-0 pointer-events-none" />

      <div className={styles.container + " relative z-10"}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.section_title}
        >
          certifications.
        </motion.h2>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {visibleCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={styles.card}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#4880C9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={styles.icon_box}>{getIcon(cert.iconType)}</div>

                <div className="relative z-10">
                  <p className={styles.cert_meta}>{cert.meta}</p>
                  <h3 className={styles.cert_name}>{cert.name}</h3>
                  <p className={styles.cert_desc}>{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {CERTIFICATIONS_DATA.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className={styles.toggle_btn + " relative z-20"}
          >
            {showAll ? (
              <>
                <ChevronUp size={16} /> Show Less
              </>
            ) : (
              <>
                <ChevronDown size={16} /> See More
              </>
            )}
          </button>
        )}
      </div>
    </section>
  );
};

export default Certifications;
