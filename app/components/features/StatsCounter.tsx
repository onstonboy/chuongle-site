import { getAppStats } from '@/app/lib/stats';
import AnimatedCount from '@/app/components/ui/AnimatedCount';
import styles from './StatsCounter.module.css';

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  formatNumber?: boolean;
}

export default async function StatsCounter() {
  const stats = await getAppStats();

  if (stats.isPartial) return null;

  const items: StatItem[] = [
    {
      label: 'App Store apps',
      value: stats.apple.apps,
      formatNumber: false,
    },
    {
      label: 'Google Play apps',
      value: stats.google.apps,
      formatNumber: false,
    },
    {
      label: 'Play Store downloads',
      value: stats.google.downloads,
      suffix: '+',
      formatNumber: true,
    },
    {
      label: 'Store ratings',
      value: stats.totalRatings,
      suffix: '+',
      formatNumber: true,
    },
    {
      label: 'Years building',
      value: stats.yearsBuilding,
      suffix: '+',
      formatNumber: false,
    },
  ].filter((item) => item.value > 0);

  if (items.length === 0) return null;

  return (
    <section className={styles.section} aria-label="App statistics">
      <div className={styles.bar}>
        {items.map((item, index) => (
          <div key={item.label} className={styles.item}>
            {index > 0 && <span className={styles.divider} aria-hidden="true" />}
            <div className={styles.stat}>
              <p className={styles.value}>
                <AnimatedCount
                  target={item.value}
                  suffix={item.suffix}
                  formatNumber={item.formatNumber}
                />
              </p>
              <p className={styles.label}>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
