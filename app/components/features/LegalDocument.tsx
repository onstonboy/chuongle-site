import styles from './LegalDocument.module.css';

interface LegalDocumentProps {
  readonly title: string;
  readonly html: string;
}

export default function LegalDocument({ title, html }: LegalDocumentProps) {
  return (
    <article className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </article>
  );
}
