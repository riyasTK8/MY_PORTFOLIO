"use client";

import { motion } from "framer-motion";

interface TerminalProps {
  commands: string[];
  title?: string;
  className?: string;
}

export default function Terminal({ commands, title = "zsh", className = "" }: TerminalProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`glass rounded-2xl border-white/5 overflow-hidden font-mono text-xs shadow-2xl flex flex-col min-h-[180px] ${className}`}
    >
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{title}</span>
      </div>
      <div className="p-4 font-mono text-xs md:text-sm space-y-1.5 min-h-[120px]">
        {commands.map((cmd, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.2 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            <span className="text-cyan-500">➜</span>
            <span className="text-slate-300">{cmd}</span>
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.div 
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="w-2 h-4 bg-cyan-500 inline-block align-middle"
        />
      </div>
    </motion.div>
  );
}
