'use client';

import { useMemo } from 'react';
import styles from './HeroMeteorField.module.css';

export interface HeroMeteorIcon {
  id: string;
  name: string;
  imageUrl: string;
}

interface HeroMeteorFieldProps {
  icons: HeroMeteorIcon[];
}

interface MeteorConfig {
  id: string;
  name: string;
  imageUrl: string;
  xStart: number;
  yStart: number;
  xEnd: number;
  yEnd: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  opacity: number;
  trailAngle: number;
}

function hashUnit(seed: number): number {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function buildMeteorConfig(icon: HeroMeteorIcon, index: number): MeteorConfig {
  const a = hashUnit(index + 1);
  const b = hashUnit(index + 17);
  const c = hashUnit(index + 31);
  const d = hashUnit(index + 47);
  const e = hashUnit(index + 61);
  const f = hashUnit(index + 79);
  const pathType = index % 4;

  let xStart = 0;
  let yStart = 0;
  let xEnd = 0;
  let yEnd = 0;

  if (pathType === 0) {
    xStart = -18 - a * 12;
    yStart = 5 + c * 75;
    xEnd = 108 + b * 14;
    yEnd = 10 + d * 70;
  } else if (pathType === 1) {
    xStart = 108 + a * 12;
    yStart = 5 + c * 75;
    xEnd = -18 - b * 14;
    yEnd = 15 + d * 65;
  } else if (pathType === 2) {
    xStart = 5 + a * 80;
    yStart = -22 - c * 10;
    xEnd = 10 + b * 75;
    yEnd = 112 + d * 12;
  } else {
    xStart = 8 + a * 75;
    yStart = 112 + c * 10;
    xEnd = 12 + b * 70;
    yEnd = -22 - d * 10;
  }

  const trailAngle =
    (Math.atan2(yEnd - yStart, xEnd - xStart) * 180) / Math.PI;

  return {
    id: icon.id,
    name: icon.name,
    imageUrl: icon.imageUrl,
    xStart,
    yStart,
    xEnd,
    yEnd,
    size: 28 + e * 22,
    duration: 34 + f * 26,
    delay: a * 28,
    rotate: -18 + b * 36,
    opacity: 0.14 + c * 0.12,
    trailAngle,
  };
}

export default function HeroMeteorField({ icons }: HeroMeteorFieldProps) {
  const meteors = useMemo(() => {
    if (icons.length === 0) return [];

    const base = icons.filter((icon) => Boolean(icon.imageUrl));
    if (base.length === 0) return [];

    const count = Math.min(base.length, 10);
    const expanded: MeteorConfig[] = [];

    for (let i = 0; i < count; i += 1) {
      const icon = base[i % base.length];
      expanded.push(
        buildMeteorConfig(
          {
            ...icon,
            id: `${icon.id}-${i}`,
          },
          i
        )
      );
    }

    return expanded;
  }, [icons]);

  if (meteors.length === 0) return null;

  return (
    <div className={styles.field} aria-hidden="true">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className={styles.meteor}
          style={
            {
              '--x-start': `${meteor.xStart}%`,
              '--y-start': `${meteor.yStart}%`,
              '--x-end': `${meteor.xEnd}%`,
              '--y-end': `${meteor.yEnd}%`,
              '--size': `${meteor.size}px`,
              '--duration': `${meteor.duration}s`,
              '--delay': `${meteor.delay}s`,
              '--rotate': `${meteor.rotate}deg`,
              '--opacity': meteor.opacity,
              '--trail-angle': `${meteor.trailAngle}deg`,
            } as React.CSSProperties
          }
        >
          <span className={styles.trail} />
          <img
            src={meteor.imageUrl}
            alt=""
            className={styles.icon}
            width={Math.round(meteor.size)}
            height={Math.round(meteor.size)}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
