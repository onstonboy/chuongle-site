'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const BANNER_PATH = '/images/banner.png';
const LOGO_PATH = '/images/logo.png';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [hasBanner, setHasBanner] = useState(false);
  const [hasLogo, setHasLogo] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkBanner = () => {
      const img = new window.Image();
      img.onload = () => setHasBanner(true);
      img.onerror = () => setHasBanner(false);
      img.src = BANNER_PATH;
    };

    const checkLogo = () => {
      const img = new window.Image();
      img.onload = () => setHasLogo(true);
      img.onerror = () => setHasLogo(false);
      img.src = LOGO_PATH;
    };

    checkBanner();
    checkLogo();
  }, []);

  const title = 'CDev';
  const letters = title.split('');

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroWrapper}>
        {hasBanner && (
          <div className={styles.bannerBackground}>
            <div className={styles.bannerOverlay}></div>
            <Image
              src={BANNER_PATH}
              alt="Portfolio Banner"
              fill
              className={styles.bannerImage}
              priority
              quality={90}
              sizes="100vw"
            />
            <div className={styles.bannerGlow}></div>
          </div>
        )}
        
        <div className={styles.heroContent}>
          {hasLogo ? (
            <div className={styles.logoFloating}>
              <div className={styles.logoGlow}></div>
              <div className={styles.logoWrapper}>
                <Image
                  src={LOGO_PATH}
                  alt="Logo"
                  width={280}
                  height={280}
                  className={styles.logo}
                  priority
                />
              </div>
              <div className={styles.logoRing}></div>
            </div>
          ) : (
            <div className={styles.titleContainer}>
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className={`${styles.letter} ${mounted ? styles.visible : ''}`}
                  style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
          )}
          
          <div className={styles.textContent}>
            <p className={styles.tagline}>
              Building Innovative Mobile & Web Applications
            </p>
            <p className={styles.description}>
              Passionate developer creating user-friendly applications with modern technologies.
              Explore my projects below.
            </p>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}
