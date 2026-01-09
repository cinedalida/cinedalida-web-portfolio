// External Libraries
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Local Components/Constants
import AppProjects from "./Projects";
import Prototypes from "./Prototypes";
import ArtsPosters from "./ArtsPosters";
import { PROJECT_CATEGORIES } from "../constants";

const ProjectManager = () => {
  const [filter, setFilter] = useState("app-dev");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-[#03030B] px-6 transition-colors duration-500"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-16 text-center"
        >
          projects.
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`relative px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === cat.id
                  ? "text-white" // Text color white when active
                  : "bg-white dark:bg-white/5 text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5"
              }`}
            >
              {filter === cat.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-[#4880C9] rounded-full shadow-[0_0_25px_rgba(72,128,201,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* The Dynamic Switcher Logic */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Swapping Designs Based on Category */}
            {filter === "app-dev" && <AppProjects />}
            {filter === "prototypes" && <Prototypes />}
            {filter === "arts-posters" && <ArtsPosters />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectManager;
