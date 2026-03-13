"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-2xl font-bold font-space-grotesk tracking-tighter">
            Muhammed <span className="text-cyan-500">Riyas.</span>
          </span>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={`https://${portfolioData.contact.github}`} target="_blank" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Github size={20} />
          </a>
          <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Muhammed Riyas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
