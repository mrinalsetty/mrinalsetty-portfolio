export interface ProjectLink {
  label: string;
  href: string;
  disabled: boolean;
}

export interface Project {
  id: string;
  tags: string;
  title: string;
  description: string;
  period?: string;
  links: ProjectLink[];
}

export interface SkillCategory {
  title: string;
  skills: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements?: string[];
  description?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  githubRepos: string;
  googleScholar: string;
  resume: string;
  quickFacts: string[];
}
