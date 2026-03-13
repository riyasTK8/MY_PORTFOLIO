"use client";

import { motion } from "framer-motion";
import { Terminal, Github, Rocket, CheckCircle2 } from "lucide-react";

export default function ProjectsExplainer() {
  return (
    <div className="flex flex-col h-full gap-6 p-4">
      {/* Terminal Animation */}
      <div className="glass bg-black/40 p-4 sm:p-6 rounded-3xl border border-white/5 font-mono text-[10px] sm:text-xs space-y-2 relative overflow-hidden">
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-4">
          <Terminal size={14} className="text-cyan-500" />
          <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">deploy.sh</span>
        </div>
        
        {[
          "git add .",
          "git commit -m 'feat: complete project'",
          "pushing to origin...",
          "v0 deployment in progress...",
          "checking build health...",
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.4 }}
            className="flex gap-2"
          >
            <span className="text-cyan-500 font-bold">➜</span>
            <span className="text-slate-300 mb-0.5">{line}</span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 }}
          className="bg-green-500/10 border border-green-500/20 text-green-500 p-2 rounded-lg flex items-center gap-2 mt-4"
        >
          <CheckCircle2 size={14} />
          <span>Production Live</span>
        </motion.div>
      </div>

      {/* Visual Deployment Flow */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <Github size={24} className="text-slate-400" />
          <span className="text-[8px] uppercase font-bold text-slate-500">Committed</span>
        </motion.div>

        <div className="flex-1 h-px bg-white/10 relative mx-4">
          <motion.div 
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
          />
        </div>

        <motion.div 
          animate={{ rotate: [0, 45, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <Rocket size={24} className="text-cyan-500" />
          <span className="text-[8px] uppercase font-bold text-cyan-500">Deployed</span>
        </motion.div>
      </div>

      <div className="text-center text-[10px] text-cyan-500 font-bold uppercase tracking-[0.2em] animate-pulse">
        System Live: High Availability Mode
      </div>
    </div>
  );
}
