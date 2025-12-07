import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Project } from '../types';

export class MarkdownFileDataSource {
  private projectsDir: string;

  constructor() {
    this.projectsDir = join(process.cwd(), 'docs', 'info-projects');
  }

  async getProjects(): Promise<Project[]> {
    try {
      const files = readdirSync(this.projectsDir).filter(file => file.endsWith('.md'));
      
      const projects = await Promise.all(
        files.map(async (file) => {
          try {
            const filePath = join(this.projectsDir, file);
            const fileContents = readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContents);
            
            return await this.parseProject(file, data, content);
          } catch (error) {
            console.error(`Error parsing ${file}:`, error);
            return null;
          }
        })
      );
      
      return projects.filter((project): project is Project => project !== null);
    } catch (error) {
      console.error('Error reading projects directory:', error);
      return [];
    }
  }

  private async parseProject(file: string, data: Record<string, unknown>, content: string): Promise<Project> {
    const getName = (): string => {
      const extracted = this.extractName(content);
      if (extracted) return extracted;
      if (typeof data.name === 'string') return data.name;
      return 'Untitled Project';
    };

    const getTagline = (): string => {
      const extracted = this.extractTagline(content);
      if (extracted) return extracted;
      if (typeof data.tagline === 'string') return data.tagline;
      return '';
    };

    const getLandingPageUrl = (): string => {
      const extracted = this.extractLandingPageUrl(content);
      const url = extracted || (typeof data.landingPageUrl === 'string' ? data.landingPageUrl : '');
      return this.normalizeUrl(url);
    };

    const getFeatures = (): string[] => {
      const extracted = this.extractFeatures(content);
      if (extracted.length > 0) return extracted;
      if (Array.isArray(data.features)) {
        return data.features.filter((f): f is string => typeof f === 'string');
      }
      return [];
    };

    const getTechnologies = (): string[] => {
      if (Array.isArray(data.technologies)) {
        return data.technologies.filter((t): t is string => typeof t === 'string');
      }
      return [];
    };

    const getImageUrl = async (): Promise<string> => {
      if (typeof data.imageUrl === 'string' && !data.imageUrl.includes('placeholder')) {
        return data.imageUrl;
      }
      
      const appStoreId = typeof data.appStoreId === 'string' ? data.appStoreId : 
                        typeof data.appStoreId === 'number' ? String(data.appStoreId) : null;
      
      if (appStoreId) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000);
          
          const response = await fetch(`https://itunes.apple.com/lookup?id=${appStoreId}`, {
            signal: controller.signal,
            headers: {
              'User-Agent': 'Mozilla/5.0',
            },
          });
          
          clearTimeout(timeoutId);
          
          if (response.ok) {
            const json = await response.json();
            if (json.results && json.results.length > 0) {
              const artworkUrl = json.results[0].artworkUrl512 || 
                               json.results[0].artworkUrl100?.replace('100x100bb', '512x512bb') ||
                               json.results[0].artworkUrl60?.replace('60x60bb', '512x512bb');
              if (artworkUrl) {
                return artworkUrl;
              }
            }
          }
        } catch (error) {
          console.error(`Error fetching App Store image for ${appStoreId}:`, error);
        }
      }
      
      const playStoreId = typeof data.playStoreId === 'string' ? data.playStoreId : null;
      if (playStoreId) {
        return `https://play-lh.googleusercontent.com/${playStoreId}=w512-h512`;
      }
      
      return `/images/${file.replace('.md', '')}.jpg`;
    };

    const getCategory = (): 'mobile' | 'web' | 'both' => {
      if (data.category === 'mobile' || data.category === 'web' || data.category === 'both') {
        return data.category;
      }
      return 'both';
    };

    const imageUrl = await getImageUrl();

    return {
      id: file.replace('.md', ''),
      name: getName(),
      tagline: getTagline(),
      description: this.extractDescription(content),
      landingPageUrl: getLandingPageUrl(),
      features: getFeatures(),
      technologies: getTechnologies(),
      imageUrl: imageUrl,
      category: getCategory(),
    };
  }

  private extractName(content: string): string {
    const match = content.match(/^#\s+(.+)$/m);
    return match ? match[1] : '';
  }

  private extractTagline(content: string): string {
    const lines = content.split('\n');
    for (let i = 0; i < Math.min(10, lines.length); i++) {
      if (lines[i].startsWith('##') && !lines[i].includes('landing page')) {
        return lines[i].replace(/^##\s*/, '').trim();
      }
    }
    return '';
  }

  private extractDescription(content: string): string {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('**') && lines[i].includes('is')) {
        return lines[i].replace(/\*\*/g, '').trim();
      }
      if (lines[i].startsWith('##') && lines[i].includes('Overview')) {
        if (i + 1 < lines.length) {
          return lines[i + 1].trim();
        }
      }
    }
    return '';
  }

  private extractFeatures(content: string): string[] {
    const features: string[] = [];
    const lines = content.split('\n');
    let inFeaturesSection = false;

    for (const line of lines) {
      if (line.includes('Key Features') || line.includes('Features') || line.includes('✨')) {
        inFeaturesSection = true;
        continue;
      }
      if (inFeaturesSection && (line.startsWith('- ') || line.startsWith('* ') || line.match(/^###?\s+\d+\./))) {
        const feature = line.replace(/^[-*]\s*/, '').replace(/^###?\s+\d+\.\s*/, '').trim();
        if (feature && !feature.startsWith('#')) {
          features.push(feature);
        }
      }
      if (inFeaturesSection && line.startsWith('#') && !line.includes('Features')) {
        break;
      }
      if (features.length >= 5) {
        break;
      }
    }

    return features.slice(0, 5);
  }

  private extractLandingPageUrl(content: string): string {
    const match = content.match(/landing page url:\s*(.+)$/im);
    if (match) {
      return match[1].trim();
    }
    const urlMatch = content.match(/(https?:\/\/[^\s]+\.chuongle\.dev)/i);
    return urlMatch ? urlMatch[1] : '';
  }

  private normalizeUrl(url: string): string {
    if (!url || url === '#') return '#';
    
    // Remove any leading/trailing whitespace
    url = url.trim();
    
    // If it already has a protocol, return as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // If it's a domain (contains .chuongle.dev or similar), add https://
    if (url.includes('.chuongle.dev') || url.includes('.')) {
      return `https://${url}`;
    }
    
    // Otherwise, return as is (might be a relative path)
    return url;
  }
}

