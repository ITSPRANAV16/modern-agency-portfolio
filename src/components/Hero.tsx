import React from 'react';
import { motion } from 'motion/react';
import { Triangle, ArrowRight, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-24 md:pt-56 md:pb-40 overflow-hidden bg-[#030712] text-white">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-screen"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        
        {/* Animated Technology Stack Marquee */}
        <div className="absolute inset-0 flex flex-col justify-center gap-32 pointer-events-none select-none z-0 overflow-hidden mix-blend-overlay">
          <div className="w-[300%] flex whitespace-nowrap opacity-[0.06] -rotate-[4deg] -translate-x-12 mt-12">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
              className="flex gap-8 text-[120px] font-black uppercase text-white tracking-tighter"
            >
              {[...Array(2)].map((_, i) => (
                <span key={i} className="flex gap-8">
                  <span>REACT</span><span>•</span>
                  <span>NODE.JS</span><span>•</span>
                  <span>TYPESCRIPT</span><span>•</span>
                  <span>NEXT.JS</span><span>•</span>
                  <span>TAILWIND</span><span>•</span>
                  <span>MONGODB</span><span>•</span>
                  <span>AWS</span><span>•</span>
                </span>
              ))}
            </motion.div>
          </div>
          <div className="w-[300%] flex whitespace-nowrap opacity-[0.06] -rotate-[4deg] -translate-x-12">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 70 }}
              className="flex gap-8 text-[120px] font-black uppercase text-white tracking-tighter"
            >
              {[...Array(2)].map((_, i) => (
                <span key={i} className="flex gap-8">
                  <span>PYTHON</span><span>•</span>
                  <span>DJANGO</span><span>•</span>
                  <span>POSTGRESQL</span><span>•</span>
                  <span>DOCKER</span><span>•</span>
                  <span>GRAPHQL</span><span>•</span>
                  <span>REDUX</span><span>•</span>
                  <span>FLUTTER</span><span>•</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] translate-y-1/3 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10"
          >
            <span className="bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs uppercase tracking-[0.25em] font-semibold py-2 px-4 rounded-full flex items-center gap-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:bg-blue-500/15 transition-colors cursor-default">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(96,165,250,0.8)]"></span>
              Maharashtra's Premier Tech Agency
            </span>
            <a href="#contact" className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-sans text-sm font-medium py-2 px-4 rounded-full flex items-center gap-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:bg-emerald-500/20 transition-all cursor-pointer group">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 group-hover:scale-125 transition-transform"></span>
              </span>
              Available for Projects
            </a>
          </motion.div>
          
          {/* Tagline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[1.05]"
          >
            We Build Software<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 drop-shadow-sm">That Scales.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light tracking-wide"
          >
            Custom enterprise solutions, <strong className="font-semibold text-slate-200">billing systems</strong>, and mobile apps engineered to accelerate digital growth for businesses.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a 
              href="#contact"
              className="px-8 py-4.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group text-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a 
              href="#portfolio"
              className="px-8 py-4.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white font-medium transition-all duration-300 flex items-center justify-center gap-3 group text-lg"
            >
              <Code className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              View Our Work
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 flex flex-wrap items-center gap-6 md:gap-12"
          >
            <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="text-white text-4xl font-black tracking-tight">15<span className="text-blue-500">+</span></div>
              <div className="text-xs uppercase text-slate-400 leading-snug tracking-widest font-semibold">Projects<br/>Shipped</div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="text-white text-4xl font-black tracking-tight">10<span className="text-blue-500">+</span></div>
              <div className="text-xs uppercase text-slate-400 leading-snug tracking-widest font-semibold">Enterprise<br/>Clients</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
