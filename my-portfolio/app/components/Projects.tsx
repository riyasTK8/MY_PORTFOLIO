"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "../data";

import Terminal from "./Terminal";
import VisualExplainer from "./VisualExplainer";
import ProjectsExplainer from "./ProjectsExplainer";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">

      <div className="flex flex-wrap items-center justify-between gap-12 mb-20">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6"
          >
            Proof of <span className="text-gradient">Work.</span>
          </motion.h2>
          <p className="text-slate-400">
            Architecting high-performance digital ecosystems with a focused engineering mindset.
          </p>
        </div>
        
        <VisualExplainer className="w-full md:w-96">
          <ProjectsExplainer />
        </VisualExplainer>

        <Terminal 
          title="git deploy"
          className="w-full md:w-80 bg-white/5"
          commands={["git push", "v0 deploying...", "deploy success --ssl"]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group glass rounded-3xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl"
          >
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
               {/* Project Mockup Background */}
               <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.2),transparent)]" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center p-8">
                  <span className="text-2xl font-bold font-space-grotesk text-slate-400 group-hover:text-pink-600 group-hover:scale-110 transition-all">
                    {project.title}
                  </span>
               </div>
               {project.status === "In-Progress" && (
                 <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-yellow-500/20 backdrop-blur-md">
                   {project.status}
                 </div>
               )}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-bold font-space-grotesk mb-3 text-white">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12 overflow-hidden">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(", ").slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] uppercase font-bold tracking-tighter text-slate-500 bg-white/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.link ? (
                    <motion.a 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      href={project.link}
                      className="w-12 h-12 rounded-2xl bg-cyan-500 border border-cyan-400 flex items-center justify-center text-black hover:bg-white hover:border-white transition-all shadow-lg glow-cyan"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  ) : (
                    <span className="p-2 rounded-full glass opacity-20 cursor-not-allowed">
                      <ExternalLink size={18} />
                    </span>
                  )}
                  <motion.a 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href={`https://github.com/riyasTK8`} 
                    target="_blank" 
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all shadow-lg"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
