import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { PROJECTS } from "../constants";

const Projects = () => {
  const appProjects = PROJECTS.filter((p) => p.category === "app-dev");

  return (
    <section
      id="projects"
      className="py-10 px-4 relative overflow-hidden bg-[#03030B]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-24">
          <AnimatePresence>
            {appProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group glass-card rounded-[40px] p-6 md:p-10 border border-white/5 flex flex-col lg:flex-row gap-12 hover:border-[#4880C9]/30 transition-all duration-700 shadow-2xl"
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 rounded-[30px] overflow-hidden border border-white/10 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03030B]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-[#4880C9]/10 text-[#4880C9] rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl font-black text-white tracking-tighter leading-none">
                    {project.title}
                  </h3>

                  <div className="prose prose-invert prose-slate max-w-none text-gray-400 text-lg leading-relaxed">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                    >
                      {project.description}
                    </ReactMarkdown>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer"
                    >
                      <button className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-2xl font-black text-sm hover:bg-[#4880C9] hover:text-white transition-all cursor-pointer active:scale-95">
                        View Github <Github size={18} />
                      </button>
                    </a>
                    {project.hasFrontend && (
                      <a
                        href={project.frontendLink || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer"
                      >
                        <button className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-2xl font-black text-sm hover:bg-white hover:text-black transition-all cursor-pointer active:scale-95">
                          View Frontend
                          <ExternalLink size={18} />
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
