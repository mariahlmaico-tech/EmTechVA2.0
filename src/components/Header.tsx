import React, { useState } from 'react';
import {
  Workflow,
  Menu,
  X,
  Send,
  Calculator,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  FileDown,
  Sun,
  Moon,
} from 'lucide-react';
import { contactData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenROICalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenROICalculator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Project Highlights', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: "Let's Talk", href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Top Banner Contact Strip */}
      <div className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs py-1.5 px-4 border-b border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              {contactData.location}
            </span>
            <a
              href={`mailto:${contactData.email}`}
              className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hidden sm:inline-flex"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              {contactData.email}
            </a>
            <a
              href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hidden md:inline-flex"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              {contactData.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contactData.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400"
              title="Download Resume (PDF)"
            >
              <FileDown className="w-3 h-3" /> Resume PDF
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1"
            >
              LinkedIn <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href={contactData.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              Upwork <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href={contactData.olj}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              OLJ <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Mariah Maico Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Workflow className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Mariah Maico
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              AI Automation Specialist
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Header Action Buttons & Theme Switcher */}
        <div className="hidden sm:flex items-center space-x-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-amber-400 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm"
            title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <a
            href={contactData.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700/50 rounded-lg transition-all cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900/60"
            title="Download Mariah's Resume (PDF)"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Resume
          </a>

          <button
            onClick={onOpenROICalculator}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-300 dark:border-indigo-700/50 rounded-lg transition-all cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900/60"
            title="Calculate how many hours & dollars AI automation can save you"
          >
            <Calculator className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            ROI Calculator
          </button>

          <button
            onClick={() => handleNavClick('#contact')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-600/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="w-3.5 h-3.5" />
            Let's Talk
          </button>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-indigo-600 dark:text-amber-400"
            title="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 px-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={contactData.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 rounded-lg"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              Download Resume (PDF)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenROICalculator();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-indigo-300 bg-indigo-950/80 border border-indigo-700/60 rounded-lg"
            >
              <Calculator className="w-4 h-4 text-indigo-400" />
              Calculate Automation ROI
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 rounded-lg shadow-sm"
            >
              <Send className="w-4 h-4" />
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
