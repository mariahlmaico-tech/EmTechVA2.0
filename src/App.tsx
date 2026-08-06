import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ClickRippleEffect } from './components/ClickRippleEffect';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechStackBanner } from './components/TechStackBanner';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ROICalculator } from './components/ROICalculator';
import { WorkflowDiagramModal } from './components/WorkflowDiagramModal';
import { ProjectHighlight } from './types';

export default function App() {
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false);
  const [activeDiagramProject, setActiveDiagramProject] = useState<ProjectHighlight | null>(null);
  const [prefilledContactMessage, setPrefilledContactMessage] = useState('');

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledContactMessage(
      `Hi Mariah, I am interested in your "${serviceTitle}" service. Let's schedule a discovery call to discuss our workflow requirements!`
    );
  };

  const handleROICalculatorOption = (customMessage: string) => {
    setPrefilledContactMessage(customMessage);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        {/* Click Ripple Interactive FX */}
        <ClickRippleEffect />

        {/* Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Sticky Header Navigation */}
        <Header onOpenROICalculator={() => setIsROICalculatorOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* Hero Banner */}
          <Hero onOpenROICalculator={() => setIsROICalculatorOpen(true)} />

          {/* Seamless Horizontal Tech Stack Logo Banner */}
          <TechStackBanner />

          {/* Services Section */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* Project Highlights Showcase */}
          <ProjectsSection
            onOpenDiagramModal={(proj) => setActiveDiagramProject(proj)}
          />

          {/* Verified Client Testimonials */}
          <TestimonialsSection />

          {/* Contact / Let's Talk */}
          <ContactSection prefilledMessage={prefilledContactMessage} />
        </main>

        {/* Footer */}
        <Footer />

        {/* ROI Calculator Modal */}
        <ROICalculator
          isOpen={isROICalculatorOpen}
          onClose={() => setIsROICalculatorOpen(false)}
          onSelectOption={handleROICalculatorOption}
        />

        {/* Workflow Diagram Modal */}
        <WorkflowDiagramModal
          project={activeDiagramProject}
          onClose={() => setActiveDiagramProject(null)}
        />
      </div>
    </ThemeProvider>
  );
}
