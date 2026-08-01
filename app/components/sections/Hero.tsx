'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/app/lib/site';
import HeroMeteorField, { HeroMeteorIcon } from './HeroMeteorField';
import styles from './Hero.module.css';

const BANNER_PATH = '/images/banner.png';
const LOGO_PATH = '/images/logo.png';

interface HeroProps {
  projectIcons?: HeroMeteorIcon[];
}

export default function Hero({ projectIcons = [] }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const [bannerError, setBannerError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headlineWords = SITE.headline.split(' ');
  let letterIndex = 0;

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroWrapper}>
        {!bannerError && (
          <div className={styles.bannerBackground}>
            <div className={styles.bannerOverlay} />
            <Image
              src={BANNER_PATH}
              alt=""
              fill
              className={styles.bannerImage}
              priority
              quality={90}
              sizes="100vw"
              onError={() => setBannerError(true)}
            />
            <div className={styles.bannerGlow} />
          </div>
        )}

        <HeroMeteorField icons={projectIcons} />

        <div className={styles.inner}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              {SITE.founder} · {SITE.tagline}
            </p>

            <h1 className={styles.headline}>
              {headlineWords.map((word, wordIndex) => {
                const wordStart = letterIndex;
                letterIndex += word.length + 1;

                return (
                  <span key={wordIndex}>
                    <span className={styles.word}>
                      {word.split('').map((letter, i) => (
                        <span
                          key={i}
                          className={`${styles.letter} ${mounted ? styles.letterAnimated : ''}`}
                          style={
                            {
                              '--delay': `${((wordStart + i) * 0.04).toFixed(2)}s`,
                            } as React.CSSProperties
                          }
                        >
                          {letter}
                        </span>
                      ))}
                    </span>
                    {wordIndex < headlineWords.length - 1 ? ' ' : null}
                  </span>
                );
              })}
            </h1>

            <p className={styles.description}>{SITE.description}</p>

            <div className={styles.actions}>
              <Link href="#projects" className={styles.primaryBtn}>
                Browse apps
              </Link>
              <a
                href={SITE.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                App Store
              </a>
              <a
                href={SITE.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                Google Play
              </a>
            </div>

            <ul className={styles.platforms} aria-label="Platforms">
              {SITE.platforms.map((platform) => (
                <li key={platform} className={styles.platform}>
                  {platform}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.visual}>
            {!logoError ? (
              <div className={styles.logoFloating}>
                <div className={styles.logoGlow} />
                <div className={styles.logoWrapper}>
                  <Image
                    src={LOGO_PATH}
                    alt={`${SITE.name} logo`}
                    width={200}
                    height={200}
                    className={styles.logo}
                    priority
                    onError={() => setLogoError(true)}
                  />
                </div>
                <div className={styles.logoRing} />
              </div>
            ) : (
              <div className={styles.titleFallback}>
                {SITE.name.split('').map((letter, index) => (
                  <span
                    key={index}
                    className={`${styles.fallbackLetter} ${mounted ? styles.letterAnimated : ''}`}
                    style={
                      { '--delay': `${(index * 0.1).toFixed(2)}s` } as React.CSSProperties
                    }
                  >
                    {letter}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </div>
    </section>
  );
}
