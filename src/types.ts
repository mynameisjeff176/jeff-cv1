export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  category: 'tech-ops' | 'leadership' | 'consulting';
  summary?: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface VolunteerItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period?: string;
  notes?: string;
}

export interface AiProject {
  category: string;
  title: string;
  description: string;
  tech: string[];
}
