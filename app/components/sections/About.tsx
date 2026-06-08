import SectionHeader from '@/app/components/ui/SectionHeader';
import { SITE } from '@/app/lib/site';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="About"
          title={`Who is ${SITE.name}?`}
          description={`${SITE.name} is the indie studio of ${SITE.founder} — designing, building, and shipping mobile apps since 2022. Every app is built end-to-end: product design, development, and store publishing.`}
        />

        <div className={styles.focusGrid}>
          {SITE.focusAreas.map((area) => (
            <article key={area.title} className={styles.focusCard}>
              <h3 className={styles.focusTitle}>{area.title}</h3>
              <p className={styles.focusText}>{area.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.techSection}>
            <h3 className={styles.subheading}>Tech stack</h3>
            <div className={styles.techGroups}>
              {SITE.techGroups.map((group) => (
                <div key={group.label} className={styles.techGroup}>
                  <p className={styles.techLabel}>{group.label}</p>
                  <ul className={styles.techList}>
                    {group.items.map((item) => (
                      <li key={item} className={styles.techItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className={styles.contactSection}>
            <h3 className={styles.subheading}>Get in touch</h3>
            <p className={styles.contactText}>
              Questions about our apps, partnerships, or custom development?
              Reach out directly.
            </p>
            <a href={`mailto:${SITE.email}`} className={styles.email}>
              {SITE.email}
            </a>
            <div className={styles.storeLinks}>
              <a
                href={SITE.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeLink}
              >
                App Store
              </a>
              <a
                href={SITE.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeLink}
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
