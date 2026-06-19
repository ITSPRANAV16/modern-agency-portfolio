import React from 'react';
import { motion } from 'motion/react';
import { TECH_STACK } from '../data';

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-[#030712] border-y border-white/5 relative z-10">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 relative hover:scale-105 transition-transform">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-300">
              Modern & Reliable
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-md">
            Technologies We Master
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-medium">
            We use the latest and most stable technologies to build high-performance, secure, and scalable solutions for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {TECH_STACK.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center gap-4 bg-[#0a0a0c] border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-[#121214] border border-white/5 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <Icon className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
