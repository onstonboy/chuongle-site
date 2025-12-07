'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.container}>
        <Link href="/" className={styles.logo} onClick={handleLinkClick}>
          CDev
        </Link>
        <ul className={`${styles.links} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          <li><Link href="#home" onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="#projects" onClick={handleLinkClick}>Projects</Link></li>
          <li><Link href="#about" onClick={handleLinkClick}>About</Link></li>
          <li><Link href="#contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </nav>
    </header>
  );
}

