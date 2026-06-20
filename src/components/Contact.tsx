import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, User, Briefcase, MessageSquare, X } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      // Sending email straight to the user's email via FormSubmit (No Keys Needed)
      const response = await fetch("https://formsubmit.co/ajax/pranavsp2810@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: data.user_name,
          Email: data.user_email,
          ProjectType: data.project_type || 'Not specified',
          Message: data.message,
          _subject: "New Inquiry from Delta Studio Profile!"
        })
      });

      if (response.ok) {
        toast.success('Inquiry sent successfully! We will get back to you soon.');
        if (formRef.current) formRef.current.reset();
      } else {
        toast.error('Failed to send inquiry. Please try again later.');
      }
    } catch (error) {
      toast.error('Failed to send inquiry. Please check your internet connection.');
      console.error('Submission Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative z-10 flex justify-center items-center px-4">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-screen pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-[#0a0a0c] border border-white/5 rounded-[2rem] p-8 md:p-14 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
      >
        <a href="#home" className="absolute top-6 right-6 md:top-8 md:right-8 text-slate-500 hover:text-white transition-colors cursor-pointer">
          <X className="w-6 h-6" />
        </a>

        <div className="mb-10 text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-2 drop-shadow-md">
            Let's Craft
          </h2>
          <p className="text-slate-400 text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-8">
            Initiate your 3D collaboration
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="flex items-center gap-2 text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-3">
              <User className="w-3.5 h-3.5" /> Full Name
            </label>
            <input 
              type="text" 
              name="user_name"
              placeholder="Aditya Patil"
              required
              className="w-full px-5 py-4 bg-[#121214] border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 text-white placeholder:text-slate-600 transition-all font-medium shadow-inner"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="flex items-center gap-2 text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-3">
              <Mail className="w-3.5 h-3.5" /> Email Address
            </label>
            <input 
              type="email" 
              name="user_email"
              placeholder="aditya@example.com"
              required
              className="w-full px-5 py-4 bg-[#121214] border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 text-white placeholder:text-slate-600 transition-all font-medium shadow-inner"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="flex items-center gap-2 text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-3">
              <Briefcase className="w-3.5 h-3.5" /> Project Type (Optional)
            </label>
            <div className="relative">
              <select name="project_type" defaultValue="" className="w-full px-5 py-4 bg-[#121214] border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 text-white transition-all font-medium appearance-none shadow-inner cursor-pointer">
                <option value="" disabled className="text-slate-600">Select services needed...</option>
                <option value="custom">Custom Software</option>
                <option value="web">Web Development</option>
                <option value="3d">3D Rendering / Design</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Tell me about your project */}
          <div>
            <label className="flex items-center gap-2 text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-3">
              <MessageSquare className="w-3.5 h-3.5" /> Tell me about your project
            </label>
            <textarea 
              rows={3}
              name="message"
              placeholder="Briefly describe what you'd like to build together..."
              required
              className="w-full px-5 py-4 bg-[#121214] border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 text-white placeholder:text-slate-600 transition-all font-medium resize-none shadow-inner"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full mt-10 relative overflow-hidden group px-8 py-5 rounded-[2rem] font-bold tracking-widest uppercase text-sm text-white flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(167,85,247,0.15)] disabled:opacity-70 disabled:hover:scale-100"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#031139] via-[#4338ca] to-[#e11d48] md:to-[#ea580c] z-0"></div>
            {/* Border glow */}
            <div className="absolute inset-0 rounded-[2rem] border-b-2 border-white/60 z-10 group-hover:border-white/90 transition-colors"></div>
            {/* Button text and Icon */}
            <span className="relative z-20 flex items-center gap-3 text-white drop-shadow-md">
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'} {!isSubmitting && <Send className="w-4 h-4" />}
            </span>
          </button>
        </form>
      </motion.div>
    </section>
  );
}

