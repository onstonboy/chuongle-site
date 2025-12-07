import { Project } from '../types';
import { ProjectRepository } from '../repositories/ProjectRepository';

export class GetProjectsUseCase {
  constructor(private repository: ProjectRepository) {}

  async execute(): Promise<Project[]> {
    return await this.repository.getProjects();
  }
}

