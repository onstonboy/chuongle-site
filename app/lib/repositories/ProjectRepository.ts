import { Project } from '../types';

export interface ProjectRepository {
  getProjects(): Promise<Project[]>;
}

