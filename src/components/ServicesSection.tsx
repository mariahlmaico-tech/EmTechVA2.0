import React, { useState } from 'react';
import {
  Cpu,
  LayoutDashboard,
  Bot,
  Code2,
  Video,
  FileText,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  X,
  Send,
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-6 h-6 text-blue-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-purple-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'Video':
        return <Video className="w-6 h-6 text-rose-400" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-amber-400" />;
      default:
        return <Zap className="w-6 h-6 text-indigo-400" />;
    }
  };

  const handleServiceClick = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Specialized Automation Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Services & Technical Capabilities
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Custom-built workflow automation, CRM architectures, and AI integrations tailored to your business operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <ScrollReveal key={service.id} direction="up" delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-sm dark:shadow-2xl hover:shadow-indigo-500/10 group h-full"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="p-3 w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables List */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Tools Used Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      View Full Details
                    </button>

                    <button
                      onClick={() => handleServiceClick(service.title)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 rounded-lg border border-indigo-200 dark:border-indigo-800/60 transition-all cursor-pointer"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Detailed Modal */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 rounded-lg bg-slate-100 dark:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  {getIcon(activeModalService.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                    {activeModalService.title}
                  </h3>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-mono font-semibold">
                    Recommended For: {activeModalService.recommendedFor}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeModalService.fullDesc}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Detailed Deliverables Included:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {activeModalService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    handleServiceClick(title);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  Request Discovery Call
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
