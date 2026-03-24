import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET(): Promise<Response> {
  const filePath = join(process.cwd(), 'app-ads.txt');
  const content = await readFile(filePath, 'utf-8');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
