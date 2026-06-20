import React from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { SERVICES, PORTFOLIO, DOMAINS, PROJECT_FEATURES } from "../data";

export default function Footer() {
  const downloadSummaryInfo = () => {
    const summaryWindow = window.open("", "_blank");
    if (!summaryWindow) return;

    const summaryHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Delta Dev's - Site Summary</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1e293b; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 40px 20px; }
          h1 { color: #0f172a; font-size: 28px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
          h2 { color: #334155; font-size: 22px; margin-top: 30px; margin-bottom: 15px; }
          h3 { color: #0f172a; font-size: 16px; margin-bottom: 4px; margin-top: 15px; }
          p { margin-top: 0px; color: #475569; font-size: 14px; }
          ul { margin-top: 5px; padding-left: 20px; font-size: 14px; }
          li { color: #475569; margin-bottom: 4px; }
          .section { margin-bottom: 40px; }
        </style>
      </head>
      <body>
        <h1>Delta Dev's Software Solutions</h1>
        <p style="font-size: 16px; margin-bottom: 30px;">Premium digital experiences and robust software solutions for modern businesses.</p>

        <div class="section">
          <h2>Our Services</h2>
          ${SERVICES.map(
            (s) => `
            <div>
              <h3>${s.title}</h3>
              <p>${s.description}</p>
            </div>
          `,
          ).join("")}
        </div>

        <div class="section">
          <h2>College Projects for Students</h2>
          <p>Complete, ready-to-submit software projects tailored for academic excellence.</p>
          <h3>Supported Domains</h3>
          <ul>
            ${DOMAINS.map((d) => `<li>${d}</li>`).join("")}
          </ul>
          <h3>Project Features</h3>
          <ul>
            ${PROJECT_FEATURES.map((f) => `<li>${f}</li>`).join("")}
          </ul>
        </div>

        <div class="section">
          <h2>Portfolio</h2>
          ${PORTFOLIO.map(
            (p) => `
            <div>
              <h3>${p.title} (${p.category})</h3>
              <p>${p.solution}</p>
            </div>
          `,
          ).join("")}
        </div>
        
        <script>
          window.onload = () => {
            window.print();
          }
        </script>
      </body>
      </html>
    `;

    summaryWindow.document.write(summaryHTML);
    summaryWindow.document.close();
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-4">
              DELTA DEV'S
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 pe-4">
              Crafting premium digital experiences and robust software solutions
              for modern businesses.
            </p>
            <button
              onClick={downloadSummaryInfo}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-sm font-bold transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download Summary
            </button>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-600 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-blue-600 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-blue-600 transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <a
                  href="#college-projects"
                  className="hover:text-blue-600 transition-colors"
                >
                  College Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  Cloud Architecture
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Let's Talk</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold"
                >
                  Contact Us <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>
            &copy; {new Date().getFullYear()} DELTA DEV'S SOFTWARE SOLUTIONS
          </span>

          <span className="flex items-center gap-1">
            MADE WITH <span className="text-red-500 text-sm">♥</span> IN
            MAHARASHTRA
          </span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              TERMS OF SERVICE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
