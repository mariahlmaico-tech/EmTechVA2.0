import React from 'react';
import { Workflow, ArrowUp, MapPin, Mail, Phone } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 py-12 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-0.5">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Workflow className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div>
              <span className="text-base font-bold text-slate-900 dark:text-white font-display">
                Mariah Maico
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                AI Automation Specialist & Workflow Architect
              </p>
            </div>
          </div>

          {/* Quick Contact Links */}
          <div className="flex flex-wrap items-center gap-4 text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              {contactData.location}
            </span>
            <a
              href={`mailto:${contactData.email}`}
              className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              {contactData.email}
            </a>
            <a
              href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              {contactData.phone}
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {contactData.fullName}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
