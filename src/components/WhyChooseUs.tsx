import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-t border-slate-200 relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600"></span>
            Why Choose Us?
            <span className="w-8 h-[2px] bg-blue-600"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight text-center">
            Your Local Tech Partners in Maharashtra.
          </h3>
          <p className="text-slate-500 text-lg mb-12 leading-relaxed text-center">
            We don't just write code; we build relationships. Our agile process ensures you get high-quality software, fast delivery, and dedicated post-launch support.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-300"
                >
                  <div className="mt-1 bg-white border border-slate-200 text-blue-600 rounded-lg p-2 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
