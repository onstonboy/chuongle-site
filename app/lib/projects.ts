import { ProjectRepositoryImpl } from './repositories/ProjectRepositoryImpl';
import { Project } from './types';

let repository: ProjectRepositoryImpl | null = null;

function getRepository(): ProjectRepositoryImpl {
  if (!repository) {
    repository = new ProjectRepositoryImpl();
  }
  return repository;
}

export async function getProjects(): Promise<Project[]> {
  const repo = getRepository();
  return await repo.getProjects();
}

