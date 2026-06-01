import { getAppStats } from '@/app/lib/stats';
import AnimatedCount from '@/app/components/ui/AnimatedCount';
import styles from './StatsCounter.module.css';

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  formatNumber?: boolean;
  icon: string;
}

export default async function StatsCounter() {
  const stats = await getAppStats();

  if (stats.isPartial) return null;

  const items: StatItem[] = [
    {
      icon: '📱',
      label: 'Apps Published',
      value: stats.totalApps,
      formatNumber: false,
    },
    {
      icon: '⬇️',
      label: 'Downloads',
      value: stats.totalDownloads,
      suffix: '+',
      formatNumber: true,
    },
    {
      icon: '⭐',
      label: 'Ratings',
      value: stats.totalRatings,
      suffix: '+',
      formatNumber: true,
    },
    {
      icon: '🚀',
      label: 'Years Building',
      value: stats.yearsBuilding,
      suffix: '+',
      formatNumber: false,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.label} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
            <div className={styles.value}>
              <AnimatedCount
                target={item.value}
                suffix={item.suffix}
                formatNumber={item.formatNumber}
              />
            </div>
            <p className={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
