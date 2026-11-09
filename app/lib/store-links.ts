import { Project } from './types';

export function appStoreLink(appStoreId: string): string {
  return `https://apps.apple.com/app/id${appStoreId}`;
}

export function playStoreLink(playStoreId: string): string {
  return `https://play.google.com/store/apps/details?id=${playStoreId}`;
}

export interface StoreLinks {
  apple?: string;
  google?: string;
}

export function getStoreLinks(project: Project): StoreLinks {
  return {
    ...(project.appStoreId ? { apple: appStoreLink(project.appStoreId) } : {}),
    ...(project.playStoreId
      ? { google: playStoreLink(project.playStoreId) }
      : {}),
  };
}
