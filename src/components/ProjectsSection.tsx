import React, { useState } from 'react';
import {
  Zap,
  Workflow,
  GitBranch,
  Layers,
  Sparkles,
  Search,
  FileCode2,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { projectHighlights } from '../data/portfolioData';
import { ProjectHighlight } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'motion/react';

interface ProjectsSectionProps {
  onOpenDiagramModal: (project: ProjectHighlight) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenDiagramModal,
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const platforms = ['All', 'Zapier', 'Make.com', 'n8n', 'GoHighLevel'];

  const filteredProjects = projectHighlights.filter((p) => {
    const matchesPlatform =
      selectedPlatform === 'All' || p.platform === selectedPlatform;
    const matchesQuery =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.toolsUsed.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPlatform && matchesQuery;
  });

  const getPlatformBadge = (platform: string) => {
    switch (platform) {
      case 'Zapier':
        return (
          <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20 font-mono">
            <Zap className="w-3.5 h-3.5" /> Zapier
          </span>
        );
      case 'Make.com':
        return (
          <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-mono">
            <Workflow className="w-3.5 h-3.5" /> Make.com
          </span>
        );
      case 'n8n':
        return (
          <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 font-mono">
            <GitBranch className="w-3.5 h-3.5" /> n8n
          </span>
        );
      case 'GoHighLevel':
        return (
          <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-mono">
            <Layers className="w-3.5 h-3.5" /> GoHighLevel
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-mono">
            {platform}
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Featured Case Studies & Workflows</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Project Highlights
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Explore real-world automation systems engineered across Zapier, Make.com, n8n, and GoHighLevel.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Bar & Search */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            {/* Platform Filters */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {platforms.map((plat) => (
                <button
                  key={plat}
                  onClick={() => setSelectedPlatform(plat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                    selectedPlatform === plat
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                      : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {plat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects or tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 shadow-sm"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 hover:border-indigo-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm dark:shadow-2xl hover:shadow-indigo-500/10 group h-full"
              >
                <div>
                  <div className="p-6 sm:p-7">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      {getPlatformBadge(project.platform)}
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2.5 py-1 rounded-md border border-indigo-200 dark:border-indigo-500/30 shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-start justify-between gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </h3>

                    {/* Short Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {project.shortSummary}
                    </p>

                    {/* Key Workflow Core Steps */}
                    <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 rounded-xl p-4 mb-6 space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                        Workflow Core Execution Steps:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {project.workflowSteps.slice(0, 3).map((step) => (
                          <li key={step.stepNumber} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded bg-indigo-100 dark:bg-indigo-950 border border-indigo-300 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {step.stepNumber}
                            </span>
                            <span>
                              <strong className="text-slate-900 dark:text-white">{step.title}:</strong>{' '}
                              {step.description}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                      {project.impactMetrics.map((m, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-900/90 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80">
                          <div className="text-sm sm:text-base font-extrabold text-emerald-600 dark:text-emerald-400 font-display">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Tools & Action Buttons */}
                <div className="p-6 sm:p-7 pt-0 border-t border-slate-200 dark:border-slate-800/80 space-y-4">
                  {/* Tools Used Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Architecture Map Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenDiagramModal(project)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 border border-indigo-200 dark:border-indigo-800/60 rounded-xl transition-all cursor-pointer shadow-sm"
                  >
                    <FileCode2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    View Workflow Architecture Map
                  </motion.button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-600 dark:text-slate-400">
            No projects found matching "{searchQuery}". Try selecting "All" or clearing your search.
          </div>
        )}
      </div>
    </section>
  );
};
