import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Users,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Eye,
} from "lucide-react";
import { WORK_EXPERIENCE, INVOLVEMENT, DEFAULT_SKILL_TAGS } from "../constants";

const styles = {
  section_experience: `py-24 md:py-32 px-6 md:px-10 bg-slate-50 dark:bg-[#03030B] relative transition-colors duration-500`,
  section_title: `text-4xl md:text-6xl font-black font-medium text-slate-900 dark:text-white tracking-tighter mb-16 text-center`,
  container: `max-w-5xl mx-auto space-y-12`,
  card: `glass-card rounded-[40px] p-8 md:p-12 border border-slate-200 dark:border-white/5 hover:border-[#4880C9]/30 transition-all duration-700 shadow-xl relative overflow-hidden`,
  role_title: `text-2xl md:text-3xl font-black font-medium text-slate-900 dark:text-white mb-2`,
  company_name: `text-[#4880C9] font-bold font-medium text-lg uppercase tracking-widest mb-4 flex items-center gap-2`,
  meta_text: `flex items-center gap-2 text-slate-500 dark:text-gray-400 text-sm font-medium`,
  bullet_point: `text-slate-600 dark:text-gray-400 leading-relaxed mb-3 last:mb-0 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-[#4880C9]/40 before:rounded-full`,
  // New structural styles maintaining your aesthetic
  company_logo: `w-14 h-14 md:w-16 md:h-16 rounded-2xl object-contain bg-white dark:bg-white/5 p-2 border border-slate-200 dark:border-white/10 shadow-sm`,
  skill_tag: `px-3 py-1 bg-[#4880C9]/10 text-[#4880C9] text-[10px] font-black uppercase tracking-widest rounded-lg border border-[#4880C9]/20`,
  toggle_btn: `mx-auto mt-8 flex items-center gap-2 px-8 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#4880C9] font-black text-xs uppercase tracking-widest rounded-full hover:shadow-lg transition-all cursor-pointer active:scale-95`,
};

const ExperienceCard = ({ item }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className={styles.card + " mb-8"}
  >
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
      <div className="flex items-start gap-5">
        <img
          src={item.image || "/logos/default.png"}
          alt={item.company || item.org}
          className={styles.company_logo}
          onError={(e) => {
            e.target.src = "/logos/default.png";
          }}
        />
        <div>
          <h4 className={styles.role_title}>{item.role}</h4>
          <p className={styles.company_name}>{item.company || item.org}</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className={styles.meta_text}>
          <Calendar size={14} className="text-[#4880C9]" />
          {item.period}
        </div>

        {item.location && (
          <div className={styles.meta_text}>
            <MapPin size={14} className="text-[#4880C9]" />
            {item.location}
          </div>
        )}
      </div>
    </div>

    <ul className="space-y-2 mb-8">
      {item.points.map((point, i) => (
        <li key={i} className={styles.bullet_point}>
          {point}
        </li>
      ))}
    </ul>

    {/* Skill Tags */}
    <div className="flex flex-wrap gap-2">
      {(item.tags || DEFAULT_SKILL_TAGS).map((tag) => (
        <span key={tag} className={styles.skill_tag}>
          {tag}
        </span>
      ))}
    </div>

    {item.demoLink && (
      <div className="mt-6">
        <a href={item.demoLink} target="_blank" rel="noreferrer">
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white rounded-xl font-black text-xs hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all cursor-pointer">
            View <Eye size={16} />
          </button>
        </a>
      </div>
    )}
  </motion.div>
);

const Experience = () => {
  const [showAllWork, setShowAllWork] = useState(false);
  const [showAllInv, setShowAllInv] = useState(false);

  const visibleWork = showAllWork
    ? WORK_EXPERIENCE
    : WORK_EXPERIENCE.slice(0, 2);
  const visibleInv = showAllInv ? INVOLVEMENT : INVOLVEMENT.slice(0, 2);

  return (
    <section id="experience" className={styles.section_experience}>
      <motion.div className={styles.container}>
        <h2 className={styles.section_title}>experience.</h2>

        {/* Professional Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-[#4880C9]/10 rounded-2xl text-[#4880C9]">
              <Briefcase size={28} />
            </div>
            <h3 className="text-2xl font-black font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Professional
            </h3>
          </div>
          <AnimatePresence mode="popLayout">
            {visibleWork.map((exp, index) => (
              <ExperienceCard key={`work-${index}`} item={exp} />
            ))}
          </AnimatePresence>
          {WORK_EXPERIENCE.length > 2 && (
            <button
              onClick={() => setShowAllWork(!showAllWork)}
              className={styles.toggle_btn}
            >
              {showAllWork ? (
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

        {/* Involvement Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-[#4880C9]/10 rounded-2xl text-[#4880C9]">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-black font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Involvement
            </h3>
          </div>
          <AnimatePresence mode="popLayout">
            {visibleInv.map((inv, index) => (
              <ExperienceCard key={`inv-${index}`} item={inv} />
            ))}
          </AnimatePresence>
          {INVOLVEMENT.length > 2 && (
            <button
              onClick={() => setShowAllInv(!showAllInv)}
              className={styles.toggle_btn}
            >
              {showAllInv ? (
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
      </motion.div>
    </section>
  );
};

export default Experience;
