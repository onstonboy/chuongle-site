import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { SITE } from '@/app/lib/site';
import styles from './StoreLinksCard.module.css';

export default function StoreLinksCard() {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <p className={styles.eyebrow}>Full catalogue</p>
          <h3 className={styles.heading}>All apps on the stores</h3>
          <p className={styles.sub}>
            Browse every CDev app on the App Store and Google Play — including
            apps not featured on this page.
          </p>
        </div>

        <div className={styles.buttons}>
          <a
            href={SITE.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.storeBtn} ${styles.apple}`}
          >
            <FaApple className={styles.storeLogo} aria-hidden="true" />
            <span className={styles.storeBtnText}>
              <span className={styles.storeBtnSmall}>Download on the</span>
              <span className={styles.storeBtnBig}>App Store</span>
            </span>
          </a>

          <a
            href={SITE.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.storeBtn} ${styles.google}`}
          >
            <FaGooglePlay className={styles.storeLogo} aria-hidden="true" />
            <span className={styles.storeBtnText}>
              <span className={styles.storeBtnSmall}>Get it on</span>
              <span className={styles.storeBtnBig}>Google Play</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
