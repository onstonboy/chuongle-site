import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET(): Promise<Response> {
  try {
    const filePath = join(process.cwd(), 'app-ads.txt');
    const content = await readFile(filePath, 'utf-8');
    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch {
    return new Response('', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
}
