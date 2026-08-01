export function formatDownloads(count: number): string {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(count % 1_000_000 === 0 ? 0 : 1)}M+`;
  }
  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(count % 1_000 === 0 ? 0 : 1)}K+`;
  }
  if (count > 0) return `${count}+`;
  return '';
}

export function formatRating(rating: number): string {
  if (rating <= 0) return '';
  return rating.toFixed(1);
}
