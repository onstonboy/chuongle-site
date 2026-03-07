import { ProjectRepositoryImpl } from './repositories/ProjectRepositoryImpl';
import { Project } from './types';

const PROJECT_DISPLAY_ORDER: string[] = [
  'maskshot-landing-page',
  'scorecounter-landing-page',
  'genbooth-landing-page',
  'ai-caption-landing-page',
  'led-board-landing-page',
  'daily-quote-landing-page',
  'lucky-card-landing-page',
];

let repository: ProjectRepositoryImpl | null = null;

function getRepository(): ProjectRepositoryImpl {
  if (!repository) {
    repository = new ProjectRepositoryImpl();
  }
  return repository;
}

function sortByDisplayOrder(projects: Project[]): Project[] {
  const orderMap = new Map(PROJECT_DISPLAY_ORDER.map((id, i) => [id, i]));
  return [...projects].sort((a, b) => {
    const aOrder = orderMap.get(a.id) ?? PROJECT_DISPLAY_ORDER.length;
    const bOrder = orderMap.get(b.id) ?? PROJECT_DISPLAY_ORDER.length;
    return aOrder - bOrder;
  });
}

export async function getProjects(): Promise<Project[]> {
  const repo = getRepository();
  const projects = await repo.getProjects();
  return sortByDisplayOrder(projects);
}

