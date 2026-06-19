import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';

export default function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="py-32 bg-slate-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-blue-500"></div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Our Services</h2>
          </div>
          <p className="text-4xl md:text-5xl font-black text-slate-900 max-w-3xl leading-[1.1]">
            Everything you need to accelerate your business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">in the digital age.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="p-10 bg-white border border-slate-200/60 rounded-[2rem] shadow-sm flex flex-col relative overflow-hidden animate-pulse">
                <div className="w-16 h-16 bg-slate-200 rounded-2xl mb-8"></div>
                <div className="h-6 bg-slate-200 rounded-lg w-3/4 mb-6"></div>
                <div className="space-y-3 mt-2">
                  <div className="h-4 bg-slate-200 rounded w-full"></div>
                  <div className="h-4 bg-slate-200 rounded w-full"></div>
                  <div className="h-4 bg-slate-200 rounded w-4/5"></div>
                </div>
              </div>
            ))
          ) : (
            SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-10 bg-white border border-slate-200/60 rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-500 group flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full translate-x-8 -translate-y-8 group-hover:scale-150 group-hover:from-blue-100/50 transition-transform duration-700 ease-out z-[1]"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-50/50 group-hover:bg-blue-600 border border-blue-100/50 group-hover:border-blue-500 text-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-base text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
