import React, { useState } from 'react';
import { Calculator, X, Sparkles, Send, Clock, DollarSign, Users, ArrowRight } from 'lucide-react';

interface ROICalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOption?: (message: string) => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ isOpen, onClose, onSelectOption }) => {
  const [teamSize, setTeamSize] = useState<number>(3);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(35);
  const [selectedTools, setSelectedTools] = useState<string[]>(['Zapier', 'Make.com', 'ChatGPT']);

  if (!isOpen) return null;

  // Calculation Logic (Assuming 75% automation efficiency)
  const totalWeeklyManualHours = teamSize * manualHoursPerWeek;
  const automatedHoursPerWeek = Math.round(totalWeeklyManualHours * 0.75);
  const monthlyHoursSaved = automatedHoursPerWeek * 4.3;
  const annualHoursSaved = Math.round(automatedHoursPerWeek * 52);

  const monthlyCostSaved = Math.round(monthlyHoursSaved * hourlyRate);
  const annualCostSaved = Math.round(annualHoursSaved * hourlyRate);

  const toggleTool = (tool: string) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  const handleSendEstimate = () => {
    const message = `Hi Mariah, I used your ROI calculator! Our team of ${teamSize} loses approx ${totalWeeklyManualHours} hours/week on manual tasks. We want to automate with ${selectedTools.join(
      ', '
    )} to save ~$${annualCostSaved.toLocaleString()}/yr. Let's discuss!`;
    if (onSelectOption) {
      onSelectOption(message);
    }
    onClose();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Automation ROI Calculator
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Estimate hours and dollars saved by automating your team's workflow
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Sliders Grid */}
          <div className="space-y-5">
            {/* Team Size Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Team Size
                </span>
                <span className="font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/60 px-2.5 py-0.5 rounded text-xs">
                  {teamSize} {teamSize === 1 ? 'person' : 'people'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            {/* Manual Task Hours per Week Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" /> Manual Task Hours / Week (per person)
                </span>
                <span className="font-mono text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800/60 px-2.5 py-0.5 rounded text-xs">
                  {manualHoursPerWeek} hrs/wk
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                value={manualHoursPerWeek}
                onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>

            {/* Average Hourly Rate Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Average Hourly Rate ($)
                </span>
                <span className="font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 px-2.5 py-0.5 rounded text-xs">
                  ${hourlyRate}/hr
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="150"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Tools Toggles */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Target Automation Stack
              </label>
              <div className="flex flex-wrap gap-2">
                {['Zapier', 'Make.com', 'n8n', 'GoHighLevel', 'ChatGPT API', 'Google Apps Script'].map(
                  (tool) => {
                    const isSelected = selectedTools.includes(tool);
                    return (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => toggleTool(tool)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600 border-indigo-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        {tool}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Results Display Grid */}
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-5 grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">
                Annual Time Saved
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-display">
                {annualHoursSaved.toLocaleString()} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">hrs</span>
              </div>
              <div className="text-[11px] text-slate-500">
                ~{Math.round(monthlyHoursSaved)} hours saved / month
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">
                Estimated Annual Savings
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-display">
                ${annualCostSaved.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-500">
                ~${monthlyCostSaved.toLocaleString()} saved / month
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
            <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>Calculated with streamlined task efficiency estimates</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleSendEstimate}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Discuss With Mariah <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
