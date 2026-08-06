import React from 'react';
import { X, ArrowRight, Zap, Bot, Database, Filter, Send, Play } from 'lucide-react';
import { ProjectHighlight } from '../types';

interface WorkflowDiagramModalProps {
  project: ProjectHighlight | null;
  onClose: () => void;
  onRunSimulator?: (simulatorType: string) => void;
}

export const WorkflowDiagramModal: React.FC<WorkflowDiagramModalProps> = ({
  project,
  onClose,
  onRunSimulator,
}) => {
  if (!project) return null;

  const getActionBadge = (type: string) => {
    switch (type) {
      case 'trigger':
        return <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">Trigger</span>;
      case 'ai':
        return <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">AI Logic</span>;
      case 'filter':
        return <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Filter / Branch</span>;
      case 'action':
        return <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Action Step</span>;
      case 'output':
        return <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Destination / Log</span>;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-600 text-white font-mono">
                {project.platform}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
              {project.title} — Workflow Architecture Map
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Diagram Content */}
        <div className="p-6 overflow-y-auto space-y-8">
          {/* Full Workflow Diagram Screenshot/Image Preview */}
          {project.imageUrl && (
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 p-2 shadow-inner">
              <img
                src={project.imageUrl}
                alt={`${project.title} Diagram`}
                className="w-full h-auto max-h-[380px] object-contain rounded-lg bg-slate-100 dark:bg-slate-950"
              />
            </div>
          )}

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.detailedDescription}
          </p>

          {/* Visual Step-by-step Node Chain */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
              Live Automated Execution Sequence:
            </h4>

            <div className="space-y-4 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 before:z-0">
              {project.workflowSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="relative z-10 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 hover:border-indigo-500/40 rounded-xl p-4 transition-all duration-200 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-sm shadow-indigo-600/30">
                        {step.stepNumber}
                      </div>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h5>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded">
                        {step.tool}
                      </span>
                      {getActionBadge(step.actionType)}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-11">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics Banner */}
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-3">
              Verified Business Impact:
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              {project.impactMetrics.map((m, i) => (
                <div key={i} className="bg-white dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 font-display">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Tools: {project.toolsUsed.join(' • ')}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
          >
            Close Map
          </button>
        </div>
      </div>
    </div>
  );
};
