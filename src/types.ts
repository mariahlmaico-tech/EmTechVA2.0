export interface ContactInfo {
  fullName: string;
  shortName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  upwork: string;
  olj: string;
  resumeUrl: string;
  resumePdfUrl: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; icon?: string; level?: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  tools: string[];
  deliverables: string[];
  recommendedFor: string;
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  tool: string;
  actionType: 'trigger' | 'ai' | 'filter' | 'action' | 'output';
  description: string;
}

export interface ProjectHighlight {
  id: string;
  title: string;
  platform: 'Zapier' | 'Make.com' | 'n8n' | 'GoHighLevel' | 'Cross-Platform';
  category: string;
  shortSummary: string;
  detailedDescription: string;
  workflowSteps: WorkflowStep[];
  impactMetrics: { label: string; value: string }[];
  toolsUsed: string[];
  imageUrl?: string;
  hasSimulator?: boolean;
  simulatorType?: 'doc_renamer' | 'ai_bot' | 'content_repurposer';
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  platformTag: string;
}
