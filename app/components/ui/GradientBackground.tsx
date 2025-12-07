import styles from './GradientBackground.module.css';

export default function GradientBackground() {
  return (
    <div className={styles.container}>
      <div className={styles.gradient}></div>
      <div className={styles.grid}></div>
      <div className={styles.scanlines}></div>
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>
      
      <div className={styles.neutronsContainer}>
        <div className={`${styles.neutron} ${styles.neutronHR1}`}></div>
        <div className={`${styles.neutron} ${styles.neutronHR2}`}></div>
        
        <div className={`${styles.neutron} ${styles.neutronHL1}`}></div>
        <div className={`${styles.neutron} ${styles.neutronHL2}`}></div>
        
        <div className={`${styles.neutron} ${styles.neutronVD1}`}></div>
        <div className={`${styles.neutron} ${styles.neutronVD2}`}></div>
        
        <div className={`${styles.neutron} ${styles.neutronVU1}`}></div>
        <div className={`${styles.neutron} ${styles.neutronVU2}`}></div>
      </div>
    </div>
  );
}

