import { ImageResponse } from 'next/og';
import { SITE } from '@/app/lib/site';

export const runtime = 'edge';
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'linear-gradient(145deg, #09090B 0%, #18181B 55%, #1e1b4b 100%)',
          color: '#FAFAFA',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            fontSize: 28,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#A5B4FC',
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 14,
              background: '#6366F1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            C
          </div>
          {SITE.name}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: 920,
            }}
          >
            {SITE.headline}
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#A1A1AA',
              maxWidth: 860,
              lineHeight: 1.4,
            }}
          >
            {SITE.tagline} by {SITE.founder}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: '#71717A',
          }}
        >
          <span>App Store · Google Play</span>
          <span>{SITE.url.replace(/^https?:\/\//, '')}</span>
        </div>
      </div>
    ),
    size
  );
}
