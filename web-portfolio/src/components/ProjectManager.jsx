import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppProjects from "./Projects";
import Prototypes from "./Prototypes";
import ArtsPosters from "./ArtsPosters";
import { PROJECT_CATEGORIES } from "../constants";

const ProjectManager = () => {
  const [filter, setFilter] = useState("app-dev");

  return (
    <section id="projects" className="py-24 bg-[#03030B] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-white text-center tracking-tighter mb-16">
          projects.
        </h2>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === cat.id
                  ? "bg-[#4880C9] text-white shadow-[0_0_25px_rgba(72,128,201,0.4)]"
                  : "bg-white/5 text-gray-500 hover:text-white border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default ProjectManager;
