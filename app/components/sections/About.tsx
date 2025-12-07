import styles from './About.module.css';

export default function About() {
  const skills = [
    'Next.js',
    'React',
    'TypeScript',
    'Flutter',
    'Firebase',
    'Node.js',
    'UI/UX Design',
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.heading}>About</h2>
          <p className={styles.text}>
            I&apos;m a passionate developer focused on creating innovative mobile and web applications.
            With expertise in modern frameworks and technologies, I build user-friendly solutions
            that solve real-world problems.
          </p>
          <p className={styles.text}>
            My work spans across mobile app development, web applications, and UI/UX design,
            always prioritizing user experience and performance.
          </p>
        </div>
        <div>
          <h3 className={styles.subheading}>Skills</h3>
          <ul className={styles.skills}>
            {skills.map((skill) => (
              <li key={skill} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
          <div className={styles.contact}>
            <h3 className={styles.subheading}>Contact</h3>
            <p>
              <a href="mailto:chuongdev97@gmail.com" className={styles.email}>
                chuongdev97@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

