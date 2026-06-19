import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Triangle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 transition-all duration-500 rounded-full ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="px-6 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 xl:gap-4 group">
            <div className="flex items-center justify-center transition-all duration-500 group-hover:scale-105">
              <img 
                src="/PNG-BLACK.png" 
                alt="Delta Devs Logo" 
                className={`h-10 w-auto object-contain transition-all duration-500 ${
                  isScrolled ? 'drop-shadow-sm' : 'brightness-0 invert'
                }`}
              />
            </div>
            <span className={`font-black text-xl md:text-2xl tracking-tight transition-colors duration-500 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              Delta<span className={`transition-colors duration-500 ${isScrolled ? 'text-blue-600' : 'text-blue-400'}`}>Devs</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-300 tracking-wide ${
                  isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className={`px-7 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                isScrolled 
                  ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/20' 
                  : 'bg-white hover:bg-slate-100 text-slate-900 shadow-lg shadow-white/10'
              }`}
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 transition-colors duration-500 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl border border-white/50 rounded-3xl p-6 flex flex-col gap-5 shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-slate-800 hover:text-blue-600 p-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors"
          >
            Get a Quote
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
