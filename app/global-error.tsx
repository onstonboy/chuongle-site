'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: '#0F172A',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#F8FAFC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
            gap: '1rem',
          }}
        >
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#F8FAFC' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#94A3B8', maxWidth: '360px' }}>
            {error.message || 'An unexpected error occurred. Please try again.'}
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: '#6366F1',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
