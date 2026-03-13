"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { portfolioData } from "../data";

import Terminal from "./Terminal";
import VisualExplainer from "./VisualExplainer";
import ContactExplainer from "./ContactExplainer";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => setIsSending(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl md:text-7xl font-bold font-space-grotesk mb-6">
              Let&apos;s <span className="text-gradient">Scale.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Ready to bring your ideas to life? Connect with me for collaborations, inquiries, 
              or just to talk about the future of tech.
            </p>
            
            <VisualExplainer className="mb-12">
               <ContactExplainer />
            </VisualExplainer>
          </motion.div>

          <div className="space-y-6">
            <a href={`mailto:${portfolioData.contact.email}`} className="glass p-6 rounded-[2rem] flex items-center gap-6 group hover:bg-white/5 transition-all w-fit">
              <div className="w-16 h-16 rounded-[1.5rem] bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Direct Line</p>
                <p className="text-xl font-bold font-space-grotesk">{portfolioData.contact.email}</p>
              </div>
            </a>
            
            <Terminal 
              title="system.log"
              className="max-w-md hidden md:block"
              commands={[
                "connection: pending",
                isSending ? "sending packet..." : "awaiting input...",
                isSending ? "success: messaged delivered" : "status: online"
              ]}
            />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="glass p-10 md:p-16 rounded-[4rem] border-cyan-500/10 relative min-h-[600px] flex flex-col justify-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Riyas K I" 
                  className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-700 text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Message</label>
              <textarea 
                rows={4} 
                placeholder="How can I help you today?" 
                className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none transition-all resize-none placeholder:text-slate-700 text-white"
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 rounded-[2rem] bg-cyan-500 text-black font-bold flex items-center justify-center gap-3 glow-cyan text-lg"
            >
              {isSending ? "System: Transmitting..." : "Establish Connection"}
              <Send size={20} className={isSending ? "animate-ping" : ""} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
