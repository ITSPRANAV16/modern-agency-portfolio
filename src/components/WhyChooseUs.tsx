import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-t border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600"></span>
            Why Choose Us?
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Your Local Tech Partners in Maharashtra.
          </h3>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">
            We don't just write code; we build relationships. Our agile process ensures you get high-quality software, fast delivery, and dedicated post-launch support.
          </p>
          <ul className="space-y-4">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-300"
                >
                  <div className="mt-1 bg-white border border-slate-200 text-blue-600 rounded-lg p-2 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg" />
          <div className="absolute inset-0 bg-slate-900 rounded-3xl transform -rotate-3 scale-105" />
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Team collaborating" 
            className="relative rounded-3xl shadow-2xl w-full h-[550px] object-cover border-8 border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
