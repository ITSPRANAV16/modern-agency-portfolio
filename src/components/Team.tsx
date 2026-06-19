import React from 'react';
import { motion } from 'motion/react';
import { TEAM } from '../data';
import { Github, Linkedin } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-32 bg-slate-50 border-b border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-px bg-blue-500"></div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Core Team</h2>
            <div className="w-12 h-px bg-blue-500"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
            Experts Behind the Code
          </h3>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Meet the visionaries, strategists, and tech-driven minds that empower our company to deliver exceptional digital experiences and scalable software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white border border-slate-200/60 rounded-[2rem] p-10 text-center hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-500 group flex flex-col items-center relative overflow-hidden"
            >
              <div className="w-32 h-32 rounded-3xl bg-slate-100 group-hover:bg-blue-600 flex items-center justify-center mb-8 border-4 border-white shadow-xl relative z-10 transition-colors duration-500">
                <span className="text-4xl font-black text-slate-300 group-hover:text-white uppercase tracking-tighter transition-colors duration-500">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-2 relative z-10">{member.name}</h4>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-5 bg-blue-50/50 border border-blue-100 px-4 py-1.5 rounded-full relative z-10">{member.role}</p>
              <p className="text-base text-slate-500 mb-8 flex-1 leading-relaxed relative z-10">
                {member.description}
              </p>
              <div className="flex justify-center gap-4 pt-8 border-t border-slate-100 w-full relative z-10">
                <a href={member.links.linkedin} className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:shadow-lg shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.links.github} className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 hover:shadow-lg shadow-sm">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
