import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send,
  Calendar,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  FileDown,
} from 'lucide-react';
import { contactData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'motion/react';

interface ContactSectionProps {
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledMessage = '' }) => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'message'>('calendar');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Zapier / Make / n8n AI Automation',
    message: prefilledMessage,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Update message & switch to message tab when prefilledMessage prop changes
  React.useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }));
      setActiveTab('message');
    }
  }, [prefilledMessage]);

  // Dynamically load Calendly widget script
  React.useEffect(() => {
    const scriptId = 'calendly-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Start Your Automation Project</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Let's Talk — Work With Mariah
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Ready to streamline your business operations and reclaim 20+ hours every week? Get in touch today.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Profiles */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="space-y-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-2xl">
                <div>
                  <span className="text-xs font-bold font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                    DIRECT CONTACT
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 font-display">
                    {contactData.fullName}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    AI Automation Specialist & Workflow Architect
                  </p>
                </div>

                {/* Quick Details Cards */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <a
                    href={`mailto:${contactData.email}`}
                    className="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/50 rounded-xl transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono uppercase">
                        Direct Email
                      </div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {contactData.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/50 rounded-xl transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono uppercase">
                        Phone / WhatsApp
                      </div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {contactData.phone}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-xl">
                    <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono uppercase">
                        Location
                      </div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">
                        {contactData.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marketplace & Social Profiles */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                    Hire Profiles:
                  </div>

                  <div className="flex flex-col gap-2 text-xs">
                    <a
                      href={contactData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 rounded-xl text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
                    >
                      <span className="font-semibold">LinkedIn Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    </a>

                    <a
                      href={contactData.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 rounded-xl text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                    >
                      <span className="font-semibold">Upwork Top Rated Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    </a>

                    <a
                      href={contactData.olj}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 rounded-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                    >
                      <span className="font-semibold">OnlineJobs.ph Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Calendly Calendar & Project Inquiry */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-2xl space-y-6">
                {/* View Switcher Tabs */}
                <div className="flex p-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setActiveTab('calendar')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'calendar'
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Call (Calendly)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('message')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'message'
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Direct Message</span>
                  </button>
                </div>

                {/* TAB 1: CALENDLY EMBEDDED WIDGET */}
                {activeTab === 'calendar' && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                          30-Minute Discovery Call
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                          Select a date and time directly on Mariah's live calendar below:
                        </p>
                      </div>
                      <a
                        href="https://calendly.com/mariahlmaico/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=111111&text_color=faf7f7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300 rounded-lg transition-colors self-start sm:self-auto"
                      >
                        <span>Open in Calendly</span>
                        <ExternalLink className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                      </a>
                    </div>

                    {/* Calendly Inline Widget Container */}
                    <div className="relative w-full rounded-2xl overflow-hidden bg-[#111111] border border-slate-200 dark:border-slate-800/80 shadow-inner min-h-[700px]">
                      <div
                        className="calendly-inline-widget w-full"
                        data-url="https://calendly.com/mariahlmaico/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=111111&text_color=faf7f7"
                        style={{ minWidth: '320px', height: '700px' }}
                      />
                    </div>
                  </div>
                )}

                {/* TAB 2: DIRECT MESSAGE FORM */}
                {activeTab === 'message' && (
                  <div>
                    {submitted ? (
                      <div className="py-12 text-center space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                          Message Received!
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                          Thank you for reaching out, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>! Mariah will review your project details and respond via email (<span className="text-indigo-600 dark:text-indigo-400 font-medium">{formData.email}</span>) within 12 hours.
                        </p>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: '',
                              email: '',
                              phone: '',
                              service: 'Zapier / Make / n8n AI Automation',
                              message: '',
                            });
                          }}
                          className="px-4 py-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-950/60 rounded-xl"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                            Send Direct Project Inquiry
                          </h3>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Fill out your requirements below for an accurate project roadmap and quote.
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                              Your Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Alex Rivera"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                              Work Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="alex@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                              Phone / WhatsApp (Optional)
                            </label>
                            <input
                              type="text"
                              placeholder="+1 (555) 000-0000"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                              Primary Service Interest
                            </label>
                            <select
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                            >
                              <option value="Zapier / Make / n8n AI Automation">Zapier / Make / n8n AI Automation</option>
                              <option value="GoHighLevel CRM & Funnel Setup">GoHighLevel CRM & Funnel Setup</option>
                              <option value="Custom AI Agent & Chatbot">Custom AI Agent & Chatbot</option>
                              <option value="API Integration & Custom Webhooks">API Integration & Custom Webhooks</option>
                              <option value="Social Media Video Publishing Pipeline">Social Media Video Publishing Pipeline</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Project Description / Bottlenecks *
                          </label>
                          <textarea
                            required
                            rows={5}
                            placeholder="Describe your current manual tasks, tools in your tech stack, or workflow goals..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                          />
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Sending Message...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Submit Inquiry to Mariah</span>
                            </>
                          )}
                        </motion.button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
