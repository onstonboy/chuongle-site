'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE } from '@/app/lib/site';
import styles from './Navigation.module.css';

const NAV_LINKS = [
  { href: '#projects', label: 'Apps' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.container}>
        <Link href="/" className={styles.logo} onClick={handleLinkClick}>
          {SITE.name}
        </Link>

        <ul className={`${styles.links} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={handleLinkClick}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={SITE.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
              onClick={handleLinkClick}
            >
              Download
            </a>
          </li>
        </ul>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
        </button>
      </nav>
    </header>
  );
}
