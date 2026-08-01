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
  const subtitle = `${SITE.tagline} by ${SITE.founder}`;
  const host = SITE.url.replace(/^https?:\/\//, '');

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
            flexDirection: 'row',
            alignItems: 'center',
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
              marginRight: 18,
            }}
          >
            C
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#A5B4FC',
            }}
          >
            {SITE.name}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: 920,
              marginBottom: 20,
            }}
          >
            {SITE.headline}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              color: '#A1A1AA',
              maxWidth: 860,
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: '#71717A',
          }}
        >
          <div style={{ display: 'flex' }}>App Store · Google Play</div>
          <div style={{ display: 'flex' }}>{host}</div>
        </div>
      </div>
    ),
    size
  );
}
