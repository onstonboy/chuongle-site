import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import gplay from 'google-play-scraper';
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

  private async parseProject(
    file: string,
    data: Record<string, unknown>,
    content: string
  ): Promise<Project | null> {
    if (data.portfolio === false) return null;

    const getName = (): string => {
      if (typeof data.name === 'string') return data.name;
      const extracted = this.extractName(content);
      if (extracted) return extracted;
      return 'Untitled Project';
    };

    const getTagline = (): string => {
      if (typeof data.tagline === 'string') return data.tagline;
      const extracted = this.extractTagline(content);
      if (extracted) return extracted;
      return '';
    };

    const getDescription = (): string => {
      if (typeof data.description === 'string') return data.description;
      return this.extractDescription(content);
    };

    const getLandingPageUrl = (): string => {
      if (typeof data.landingPageUrl === 'string') {
        return this.normalizeUrl(data.landingPageUrl);
      }
      const extracted = this.extractLandingPageUrl(content);
      return this.normalizeUrl(extracted);
    };

    const getFeatures = (): string[] => {
      if (Array.isArray(data.features) && data.features.length > 0) {
        return data.features.filter((f): f is string => typeof f === 'string');
      }
      return this.extractFeatures(content);
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
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        try {
          const response = await fetch(`https://itunes.apple.com/lookup?id=${appStoreId}`, {
            signal: controller.signal,
            headers: {
              'User-Agent': 'Mozilla/5.0',
            },
          });

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
        } finally {
          clearTimeout(timeoutId);
        }
      }
      
      const playStoreId = typeof data.playStoreId === 'string' ? data.playStoreId : null;
      if (playStoreId) {
        try {
          const app = await gplay.app({
            appId: playStoreId,
            lang: 'en',
            country: 'us',
          });
          if (app.icon) return app.icon;
        } catch (error) {
          console.error(`Error fetching Play Store image for ${playStoreId}:`, error);
        }
      }

      const slug = typeof data.id === 'string' ? data.id : file.replace('.md', '');
      return `/images/${slug}.png`;
    };

    const getCategory = (): 'mobile' | 'web' | 'both' => {
      if (data.category === 'mobile' || data.category === 'web' || data.category === 'both') {
        return data.category;
      }
      return 'both';
    };

    const landingPageUrl = getLandingPageUrl();
    if (!landingPageUrl || landingPageUrl === '#') return null;

    const imageUrl = await getImageUrl();

    return {
      id: typeof data.id === 'string' ? data.id : file.replace('.md', ''),
      name: getName(),
      tagline: getTagline(),
      description: getDescription(),
      landingPageUrl,
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

    return features
      .slice(0, 5)
      .map(f => f.replace(/\*\*/g, '').trim());
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
    
    const domainPattern = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z]{2,})+/;
    if (domainPattern.test(url)) {
      return `https://${url}`;
    }
    
    // Otherwise, return as is (might be a relative path)
    return url;
  }
}

