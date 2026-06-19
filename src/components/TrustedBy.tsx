import React from 'react';
import { motion } from 'motion/react';
import { Library, Gem, PlusCircle } from 'lucide-react';

const PARTNERS = [
  { name: 'NMPI College', icon: Library },
  { name: 'Amar Jewellers', icon: Gem },
  { name: 'Your Brand Next', icon: PlusCircle },
];

export default function TrustedBy() {
  // We duplicate the items multiple times so that when it translates by -50%, 
  // it seamlessly loops without showing empty space at the end.
  const items = [...Array(12)].flatMap(() => PARTNERS);

  return (
    <section className="py-12 bg-[#030712] border-b border-white/5 overflow-hidden relative z-10 flex flex-col justify-center">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Partnering with growing startups & local businesses
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden z-10">
        {/* Gradient fades on the edges for a smoother entry/exit */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-56 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-56 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          className="flex gap-16 md:gap-32 items-center pl-16 md:pl-32 will-change-transform w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {items.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 shrink-0 text-slate-600 opacity-80 hover:opacity-100 hover:text-white transition-all duration-300 group cursor-default"
              >
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5] group-hover:stroke-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all" />
                </div>
                <span className="text-2xl md:text-3xl font-black tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
