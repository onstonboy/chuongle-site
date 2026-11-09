import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/#projects" className={styles.back}>
          <span>← All apps</span>
        </Link>
        <h1 className={styles.name}>App not found</h1>
        <p className={styles.tagline}>
          This app does not exist or is no longer listed.
        </p>
      </div>
    </main>
  );
}
