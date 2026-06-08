import Link from 'next/link';
import { SITE } from '@/app/lib/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <p className={styles.name}>{SITE.name}</p>
          <p className={styles.tagline}>{SITE.tagline}</p>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          <Link href="#projects" className={styles.link}>
            Apps
          </Link>
          <Link href="#about" className={styles.link}>
            About
          </Link>
          <Link href="#contact" className={styles.link}>
            Contact
          </Link>
          <a
            href={SITE.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            App Store
          </a>
          <a
            href={SITE.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Google Play
          </a>
        </nav>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
