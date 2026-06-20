import React from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Code,
  CheckCircle,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { PROJECT_FEATURES, DOMAINS } from "../data";

export default function CollegeProjects() {
  return (
    <section
      id="college-projects"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
                <GraduationCap className="w-4 h-4" />
                Academic Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
                We Build Software Projects For College Students
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Struggling with your final year project? We provide complete,
                ready-to-submit software projects along with full documentation,
                reports, and code explanations to help you secure top grades.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECT_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-200"
              >
                Get Your Project
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Supported Domains
                  </h3>
                  <p className="text-slate-500">
                    Pick from trending technologies
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {DOMAINS.map((domain, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100/50 hover:border-blue-100 transition-colors"
                  >
                    <BookOpen className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="font-semibold text-slate-700">
                      {domain}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
