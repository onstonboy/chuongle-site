import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1E293B' }}>
        404 - Page Not Found
      </h2>
      <p style={{ color: '#64748B', marginBottom: '2rem' }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        style={{
          padding: '0.75rem 1.5rem',
          background: '#3B82F6',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontWeight: 500,
        }}
      >
        Go back home
      </Link>
    </div>
  );
}

