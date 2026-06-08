import styles from './GradientBackground.module.css';

export default function GradientBackground() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.glow} />
    </div>
  );
}
