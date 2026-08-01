import { ProjectRepositoryImpl } from './repositories/ProjectRepositoryImpl';
import { enrichProjectsWithMetrics } from './project-metrics';
import { Project } from './types';

const PROJECT_DISPLAY_ORDER: string[] = [
  'maskshot-landing-page',
  'scorecounter-landing-page',
  'subkit-landing-page',
  'ai-caption-landing-page',
  'led-board-landing-page',
  'daily-quote-landing-page',
  'lucky-card-landing-page',
  'lucky-wheel-landing-page',
];

const SPOTLIGHT_COUNT = 2;

let repository: ProjectRepositoryImpl | null = null;

function getRepository(): ProjectRepositoryImpl {
  if (!repository) {
    repository = new ProjectRepositoryImpl();
  }
  return repository;
}

function pickRandomSpotlights(projects: Project[]): Project[] {
  const candidates = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => !project.isRecommended);

  if (candidates.length === 0) return projects;

  const count = Math.min(SPOTLIGHT_COUNT, candidates.length);
  const selectedIndexes = new Set<number>();

  while (selectedIndexes.size < count) {
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    selectedIndexes.add(pick.index);
  }

  return projects.map((project, index) =>
    selectedIndexes.has(index) ? { ...project, isSpotlight: true } : project
  );
}

function sortByDisplayOrder(projects: Project[]): Project[] {
  const orderMap = new Map(PROJECT_DISPLAY_ORDER.map((id, i) => [id, i]));
  return [...projects].sort((a, b) => {
    if (a.isRecommended && !b.isRecommended) return -1;
    if (!a.isRecommended && b.isRecommended) return 1;
    if (a.isSpotlight && !b.isSpotlight) return -1;
    if (!a.isSpotlight && b.isSpotlight) return 1;

    const aOrder = orderMap.get(a.id) ?? PROJECT_DISPLAY_ORDER.length;
    const bOrder = orderMap.get(b.id) ?? PROJECT_DISPLAY_ORDER.length;
    return aOrder - bOrder;
  });
}

export async function getProjects(): Promise<Project[]> {
  const repo = getRepository();
  const projects = await repo.getProjects();
  const enriched = await enrichProjectsWithMetrics(projects);
  const withSpotlights = pickRandomSpotlights(enriched);
  return sortByDisplayOrder(withSpotlights);
}

