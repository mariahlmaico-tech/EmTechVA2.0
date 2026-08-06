import React from 'react';
import {
  Zap,
  Workflow,
  GitBranch,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { contactData, bioSummary } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'motion/react';
import mariahHeadshot from '../assets/images/mariah_headshot_user.png';

interface HeroProps {
  onOpenROICalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenROICalculator }) => {
  const headshotPath = mariahHeadshot;

  const corePlatforms = [
    { name: 'Zapier', icon: Zap, color: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20' },
    { name: 'Make.com', icon: Workflow, color: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20' },
    { name: 'n8n', icon: GitBranch, color: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20' },
    { name: 'GoHighLevel', icon: Layers, color: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' },
  ];

  const heroStats = [
    { value: '50+', label: 'Workflows Deployed' },
    { value: '1,200+', label: 'Hours Saved / Year' },
    { value: '24/7', label: 'Automation Uptime' },
    { value: '< 1 Min', label: 'Lead Response Time' },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-12 pb-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Intro Text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Headline */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono">
                  {contactData.fullName}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] font-display">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent">
                    AI & Workflow Automation
                  </span>{' '}
                  Specialist
                </h1>
              </div>
            </ScrollReveal>

            {/* Professional Summary */}
            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {bioSummary}
              </p>
            </ScrollReveal>

            {/* Core Tech Stack Badges */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2.5 font-mono">
                  Core Automation Ecosystem
                </p>
                <div className="flex flex-wrap gap-2">
                  {corePlatforms.map((p) => {
                    const IconComp = p.icon;
                    return (
                      <div
                        key={p.name}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold ${p.color}`}
                      >
                        <IconComp className="w-4 h-4" />
                        <span>{p.name}</span>
                      </div>
                    );
                  })}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    <span>ChatGPT / OpenAI</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Button */}
            <ScrollReveal direction="up" delay={0.25}>
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
                >
                  Explore Projects
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Headshot & Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative w-full max-w-sm">
                {/* Decorative Frame Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 rounded-3xl blur-md opacity-40 animate-pulse" />

                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-2xl overflow-hidden">
                  {/* Photo Header */}
                  <div className="relative rounded-xl overflow-hidden aspect-square bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80">
                    <img
                      src={headshotPath}
                      alt="Mariah Maico - AI Automation Specialist"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Hero Stats Grid */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {heroStats.map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-4 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-display">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
