import React, { useState } from 'react';
import { Star, MessageSquare, Plus, CheckCircle2, Sparkles, X, Send } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';
import { TestimonialItem } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  const [testimonialsList, setTestimonialsList] = useState<TestimonialItem[]>(testimonialsData);
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // New review form state
  const [newClientName, setNewClientName] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newPlatform, setNewPlatform] = useState('Zapier & AI');
  const [newReviewText, setNewReviewText] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const tags = ['All', 'Zapier & AI', 'GoHighLevel', 'Make.com & n8n', 'n8n & ChatGPT'];

  const filteredTestimonials = testimonialsList.filter(
    (t) => selectedTag === 'All' || t.platformTag === selectedTag
  );

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName || !newReviewText) return;

    const newEntry: TestimonialItem = {
      id: `test-${Date.now()}`,
      name: newClientName,
      role: newRole || 'Business Owner',
      company: newCompany || 'Private Client',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
      rating: newRating,
      text: newReviewText,
      platformTag: newPlatform,
    };

    setTestimonialsList([newEntry, ...testimonialsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setIsModalOpen(false);
      setNewClientName('');
      setNewCompany('');
      setNewRole('');
      setNewReviewText('');
    }, 1500);
  };

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Verified Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Client Testimonials & Recommendations
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Hear what agency founders, practice owners, and operations leaders say about working with Mariah.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Bar & Add Review CTA */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                    selectedTag === tag
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                      : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 rounded-xl text-xs font-semibold transition-colors cursor-pointer shadow-sm"
            >
              <Plus className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Leave Client Feedback
            </motion.button>
          </div>
        </ScrollReveal>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredTestimonials.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl shadow-sm hover:border-indigo-500/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 dark:fill-amber-400 text-amber-500 dark:text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800/60">
                      {item.platformTag}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed mb-6 font-serif">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-indigo-500/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.role} • <span className="text-indigo-600 dark:text-indigo-400">{item.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Modal for adding feedback */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 rounded-lg bg-slate-100 dark:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  Submit Client Recommendation
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Share your experience working with Mariah Maico on your automation system.
                </p>
              </div>

              {submittedMessage ? (
                <div className="p-6 bg-emerald-950/60 border border-emerald-800/60 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-300">Thank You!</h4>
                  <p className="text-xs text-slate-300">Your testimonial has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={newClientName}
                        onChange={(e) => setNewClientName(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Dental Group"
                        value={newCompany}
                        onChange={(e) => setNewCompany(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Role / Title
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Operations Director"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Primary System Built
                      </label>
                      <select
                        value={newPlatform}
                        onChange={(e) => setNewPlatform(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Zapier & AI">Zapier & AI</option>
                        <option value="GoHighLevel">GoHighLevel</option>
                        <option value="Make.com & n8n">Make.com & n8n</option>
                        <option value="n8n & ChatGPT">n8n & ChatGPT</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Feedback / Review *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe the impact Mariah's work had on your business operations..."
                      value={newReviewText}
                      onChange={(e) => setNewReviewText(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewRating(star)}
                          className="focus:outline-none cursor-pointer"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= newRating
                                ? 'fill-amber-500 dark:fill-amber-400 text-amber-500 dark:text-amber-400'
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/30 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Post Review
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
