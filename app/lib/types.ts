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
  appStoreId?: string;
  playStoreId?: string;
  downloads?: number;
  rating?: number;
  ratingCount?: number;
  screenshots?: string[];
  isRecommended?: boolean;
  isSpotlight?: boolean;
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

