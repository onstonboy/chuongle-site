export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  landingPageUrl: string;
  features: string[];
  technologies: string[];
  imageUrl: string;
  category: 'mobile' | 'web' | 'both';
}

export interface ContactInfo {
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

