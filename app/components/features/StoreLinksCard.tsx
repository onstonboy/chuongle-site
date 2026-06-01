import { FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from './StoreLinksCard.module.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/dev?id=6296625987520320887';
const APP_STORE_URL = 'https://apps.apple.com/us/developer/chuong-le/id1602451499';

export default function StoreLinksCard() {
  return (
    <div className={styles.card}>
      <div className={styles.glow} />

      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <p className={styles.eyebrow}>More from CDev</p>
          <h3 className={styles.heading}>See all our apps</h3>
          <p className={styles.sub}>
            Browse the full catalogue of mobile apps on the App Store and Google Play.
          </p>
        </div>

        <div className={styles.buttons}>
          <a
            href={APP_STORE_URL}
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
            href={PLAY_STORE_URL}
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
