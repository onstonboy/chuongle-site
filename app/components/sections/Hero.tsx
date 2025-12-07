'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const title = 'CDev';
  const letters = title.split('');

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.titleContainer}>
        {letters.map((letter, index) => (
          <span
            key={index}
            className={styles.letter}
            style={{
              animationDelay: `${index * 0.1}s`,
              opacity: mounted ? 1 : 0,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
      <p className={styles.tagline}>
        Building Innovative Mobile & Web Applications
      </p>
      <p className={styles.description}>
        Passionate developer creating user-friendly applications with modern technologies.
        Explore my projects below.
      </p>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}
