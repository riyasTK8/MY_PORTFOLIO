"use client";

import { motion } from "framer-motion";
import { Laptop, Code, Bug, Rocket, CheckCircle } from "lucide-react";

export default function ExperienceExplainer() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-10 p-4">
      <div className="relative w-full overflow-visible">
        {/* Animated Developer Avatar */}
        <motion.div
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-center mb-8 relative z-10"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass border-cyan-500/20 flex items-center justify-center mx-auto text-cyan-400 relative">
             <Laptop size={32} className="sm:w-10 sm:h-10" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-500 text-black flex items-center justify-center"
              >
                <Code size={10} className="sm:w-3 sm:h-3" />
              </motion.div>
          </div>
        </motion.div>

        {/* Timeline Progress Animation */}
        <div className="relative h-1.5 sm:h-2 bg-white/5 rounded-full mx-6 sm:mx-10 border border-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, repeat: Infinity }}
            className="h-full bg-purple-500 rounded-full"
          />
          
          {/* Milestones */}
          {[
            { delay: 0, icon: Code, label: "Coding" },
            { delay: 1, icon: Bug, label: "Debugging" },
            { delay: 2.5, icon: Rocket, label: "Deployment" },
            { delay: 3.5, icon: CheckCircle, label: "Production" },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: m.delay }}
              className="absolute top-1/2 -mt-3 sm:-mt-4 glass w-6 h-6 sm:w-8 sm:h-8 rounded-full border-cyan-500/20 flex flex-col items-center justify-center text-cyan-400"
              style={{ left: `${(i / 3) * 100}%`, transform: "translateX(-50%)" }}
            >
              <m.icon size={10} className="sm:w-3 sm:h-3" />
              <span className="absolute -bottom-8 sm:-bottom-6 text-[7px] sm:text-[8px] uppercase font-bold text-slate-400 font-mono whitespace-nowrap">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Status Text */}
      <div className="h-12 flex items-center justify-center">
        <motion.span
          key="status"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-cyan-500/50 font-mono text-xs tracking-widest uppercase italic font-bold"
        >
          Continuously delivering scaleable value
        </motion.span>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="glass p-3 rounded-xl border-white/5 flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-green-500" />
           <span className="text-[10px] text-slate-400 font-bold uppercase">Uptime 99.9%</span>
        </div>
        <div className="glass p-3 rounded-xl border-white/5 flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-blue-500" />
           <span className="text-[10px] text-slate-400 font-bold uppercase">Tasks Analyzed</span>
        </div>
      </div>
    </div>
  );
}
