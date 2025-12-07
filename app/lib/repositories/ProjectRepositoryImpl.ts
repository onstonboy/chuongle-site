import { ProjectRepository } from './ProjectRepository';
import { MarkdownFileDataSource } from '../data/MarkdownFileDataSource';
import { Project } from '../types';

export class ProjectRepositoryImpl implements ProjectRepository {
  private dataSource: MarkdownFileDataSource;

  constructor() {
    this.dataSource = new MarkdownFileDataSource();
  }

  async getProjects(): Promise<Project[]> {
    return await this.dataSource.getProjects();
  }
}

