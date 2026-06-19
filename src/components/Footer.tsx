import React from 'react';
import { Send, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Successfully subscribed to the newsletter!');
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h4 className="text-2xl font-black text-slate-900 mb-2">Stay Updated</h4>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Subscribe to our newsletter for the latest insights on software engineering, tech trends, and agency updates.
            </p>
          </div>
          <form className="flex w-full md:max-w-md md:ml-auto" onSubmit={handleSubscribe}>
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-l-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 font-medium"
              />
            </div>
            <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-r-2xl flex items-center justify-center gap-2 transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} DELTA DEV'S SOFTWARE SOLUTIONS</span>
          
          <span className="flex items-center gap-1">
            MADE WITH <span className="text-red-500 text-sm">♥</span> IN MAHARASHTRA
          </span>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-slate-900 transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
