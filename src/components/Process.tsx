import React from 'react';
import { motion } from 'motion/react';
import { PROCESS } from '../data';
import { CheckCircle2, Clock } from 'lucide-react';

const TIMELINE_ESTIMATES = [
  'Week 1-2',
  'Week 3-4',
  'Week 5-8',
  'Week 9',
  'Week 10+'
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-slate-50 relative z-10 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 relative z-10"
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-px bg-blue-500"></div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Project Timeline</h2>
            <div className="w-12 h-px bg-blue-500"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">
            From Concept to Launch
          </h3>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto font-medium">
            Our structured development process ensures clear communication, timely delivery, and a final product that exceeds expectations.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting line timeline */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-0 w-1 bg-slate-200 md:-translate-x-1/2 rounded-full z-0">
            <motion.div 
              style={{ originY: 0 }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="w-full h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-600 rounded-full"
            />
          </div>
          
          <div className="relative z-10 flex flex-col gap-12 md:gap-24">
            {PROCESS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 w-full ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Box */}
                  <div className={`flex-1 w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}>
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 group">
                      <div className={`flex flex-wrap items-center gap-4 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{TIMELINE_ESTIMATES[index]}</span>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Phase 0{index + 1}</span>
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[30px] md:left-1/2 w-14 h-14 bg-white border-4 border-slate-100 outline outline-[8px] outline-slate-50 rounded-full flex items-center justify-center font-black text-slate-400 -translate-x-1/2 shadow-sm z-10 transition-colors duration-300">
                     <span className="relative z-10">{index + 1}</span>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1 w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
