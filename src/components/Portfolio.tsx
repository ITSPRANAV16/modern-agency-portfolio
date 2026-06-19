import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO } from '../data';
import { ArrowUpRight, Download } from 'lucide-react';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handlePrint = (project: typeof PORTFOLIO[0]) => {
    const iframe = document.createElement('iframe');
    // In many browsers, display: none prevents printing from the iframe
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);
    
    // Write printable content into iframe
    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${project.title} - Case Study Summary</title>
          <style>
            @page { margin: 2cm; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
              line-height: 1.6; 
              color: #1e293b;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .header { border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px; }
            .category { color: #3b82f6; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 5px; }
            h1 { font-size: 32px; color: #0f172a; margin: 0; line-height: 1.2; }
            h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; margin-top: 30px; border-bottom: 1px solid #f1f5f9; padding-bottom: 5px; }
            p { margin-top: 10px; color: #475569; font-size: 16px; }
            .tech-stack { margin-top: 30px; display: flex; flex-wrap: wrap; gap: 8px; }
            .tech-item { background: #f1f5f9; padding: 4px 10px; border-radius: 6px; font-family: monospace; font-size: 12px; color: #475569; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="category">${project.category}</div>
            <h1>${project.title}</h1>
          </div>
          
          <h2>The Challenge</h2>
          <p>${project.problem}</p>
          
          <h2>Our Solution</h2>
          <p>${project.solution}</p>
          
          <h2>Technologies Used</h2>
          <div class="tech-stack">
            ${project.tech.map(t => `<span class="tech-item">${t}</span>`).join('')}
          </div>
        </body>
      </html>
    `;
    
    const doc = iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(content);
      doc.close();
      
      // Give it a moment to render, then print and clean up
      setTimeout(() => {
        if (iframe.contentWindow) {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
        }
        
        // Remove the iframe after the print dialog closes (in some browsers this is async, so use a long timeout)
        setTimeout(() => {
          if (document.body.contains(iframe)) {
             document.body.removeChild(iframe);
          }
        }, 10000);
      }, 250);
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-slate-50 border-t border-slate-200 relative z-10">
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
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Selected Work</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
            Digital experiences that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">drive measurable results.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="group flex flex-col animate-pulse">
                <div className="h-[350px] bg-slate-200 rounded-[2rem] shadow-sm mb-8 block"></div>
                <div className="flex-1 flex flex-col pr-6">
                  <div className="h-8 bg-slate-200 rounded-lg w-2/3 mb-6"></div>
                  <div className="mb-6 flex-1 bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm relative overflow-hidden">
                    <div className="space-y-4">
                      <div>
                        <div className="h-3 bg-slate-200 w-16 rounded mb-2"></div>
                        <div className="h-5 bg-slate-200 w-1/2 rounded"></div>
                      </div>
                      <div>
                        <div className="h-3 bg-slate-200 w-20 rounded mb-2"></div>
                        <div className="h-4 bg-slate-200 w-full rounded mb-1"></div>
                        <div className="h-4 bg-slate-200 w-full rounded mb-1"></div>
                        <div className="h-4 bg-slate-200 w-3/4 rounded"></div>
                      </div>
                      <div>
                        <div className="h-3 bg-slate-200 w-20 rounded mb-2"></div>
                        <div className="h-4 bg-slate-200 w-full rounded mb-1"></div>
                        <div className="h-4 bg-slate-200 w-full rounded mb-1"></div>
                        <div className="h-4 bg-slate-200 w-4/5 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <div className="h-6 w-16 bg-slate-200 rounded-lg"></div>
                    <div className="h-6 w-20 bg-slate-200 rounded-lg"></div>
                    <div className="h-6 w-14 bg-slate-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            PORTFOLIO.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col"
              >
                <div className="h-[350px] overflow-hidden relative rounded-[2rem] shadow-sm group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-700 mb-8 border border-slate-200/50 block">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-700 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold text-slate-900 tracking-widest uppercase shadow-sm z-20 border border-slate-100">
                    {project.category}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 shadow-lg border border-slate-100">
                    <span className="font-bold text-slate-900 pl-2">View Case Study</span>
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col pr-6">
                  <h4 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                  
                  <div className="mb-6 flex-1 bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent rounded-bl-full z-0"></div>
                    <div className="relative z-10 relative">
                      <p className="text-xs uppercase tracking-widest font-bold text-blue-500 mb-1">Client</p>
                      <p className="text-base font-semibold text-slate-900 mb-5">{project.id === 'feedback-management-system' || project.id === 'quiz-management-system' ? 'Nanasaheb Mahadik Polytechnic Institute' : 'Confidential Partner'}</p>
                      
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Challenge</p>
                      <p className="text-sm text-slate-600 mb-5 leading-relaxed">{project.problem}</p>
                      
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Solution</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pb-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-slate-200/50 text-slate-700 text-xs font-mono font-bold tracking-wide rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePrint(project)}
                    className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl font-bold transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF Summary
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
