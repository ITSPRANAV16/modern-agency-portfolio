import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRICING, SERVICE_MATRIX } from '../data';
import { Check, X, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);

  return (
    <section id="pricing" className="py-32 bg-white border-y border-slate-200 relative z-10">
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
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Pricing Packages</h2>
            <div className="w-12 h-px bg-blue-500"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 max-w-2xl mx-auto leading-[1.1]">
            Transparent Pricing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Every Stage of Growth</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mb-16">
          {PRICING.map((pkg, index) => (
            <motion.div
              key={pkg.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`rounded-[2rem] p-10 lg:p-12 flex flex-col relative transition-all duration-500 ${
                pkg.popular 
                  ? 'bg-slate-900 text-white shadow-[0_20px_60px_rgba(37,99,235,0.2)] md:scale-105 z-10 border border-slate-800' 
                  : 'bg-white border border-slate-200/60 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 z-0'
              }`}
            >
              {pkg.popular && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent rounded-[2rem] pointer-events-none"></div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg shadow-blue-500/25 border border-blue-400/30">
                      Most Popular
                    </span>
                  </div>
                </>
              )}
              <div className="mb-8 relative z-10">
                <h4 className={`text-3xl font-black mb-3 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>{pkg.tier}</h4>
                <p className={`text-base h-14 ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.description}</p>
                <div className="mt-8 border-t border-slate-200/20 pt-8">
                  <span className={`text-xs font-bold uppercase tracking-[0.2em] ${pkg.popular ? 'text-blue-400' : 'text-slate-400'}`}>Starting From</span>
                  <div className={`text-6xl font-black mt-2 tracking-tighter ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.price}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-5 mb-10 flex-1 relative z-10">
                {pkg.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.popular ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={`text-sm font-medium ${pkg.popular ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-4.5 px-6 rounded-2xl text-center font-bold text-base transition-all duration-300 relative z-10 focus:ring-4 focus:outline-none ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30 focus:ring-blue-500/50 hover:-translate-y-1' 
                    : 'bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:-translate-y-1'
                }`}
              >
                {pkg.price === 'Custom' ? 'Contact for Quote' : 'Get Started'}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button 
            onClick={() => setIsMatrixOpen(true)}
            className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors duration-300 shadow-xl shadow-slate-900/10 hover:shadow-blue-600/25"
          >
            Compare All Features
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMatrixOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" aria-modal="true" role="dialog">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMatrixOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10 shrink-0">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Service Feature Matrix</h3>
                  <p className="text-slate-500 font-medium text-sm">Compare features across our structural tiers.</p>
                </div>
                <button 
                  onClick={() => setIsMatrixOpen(false)}
                  className="p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors focus:ring-4 focus:ring-slate-100 focus:outline-none"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto min-h-0 flex-1">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="py-5 px-6 border-b-2 border-slate-200 text-sm font-bold uppercase tracking-wider text-slate-500 w-1/4">Feature</th>
                        <th className="py-5 px-6 border-b-2 border-slate-200 text-sm font-bold uppercase tracking-wider text-slate-900 w-1/4">Basic</th>
                        <th className="py-5 px-6 border-b-2 border-slate-200 text-sm font-bold uppercase tracking-wider text-blue-600 w-1/4 bg-blue-50/50 rounded-tl-xl">Standard</th>
                        <th className="py-5 px-6 border-b-2 border-slate-200 text-sm font-bold uppercase tracking-wider text-slate-900 w-1/4">Premium</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {SERVICE_MATRIX.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-5 px-6 text-sm font-semibold text-slate-700">{row.feature}</td>
                          <td className="py-5 px-6 text-sm text-slate-600 font-medium">{row.basic}</td>
                          <td className="py-5 px-6 text-sm text-slate-900 font-bold bg-blue-50/30">{row.standard}</td>
                          <td className="py-5 px-6 text-sm text-slate-600 font-medium">{row.premium}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
