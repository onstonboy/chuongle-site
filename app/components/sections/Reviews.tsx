import { FaStar } from 'react-icons/fa';
import SectionHeader from '@/app/components/ui/SectionHeader';
import { AppReview } from '@/app/lib/reviews';
import styles from './Reviews.module.css';

interface ReviewsProps {
  reviews: AppReview[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  if (reviews.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Reviews"
          title="What users say"
          description="Real reviews from Google Play across our apps."
        />

        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <figure key={index} className={styles.card}>
              <div
                className={styles.stars}
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} aria-hidden="true" />
                ))}
              </div>
              <blockquote className={styles.quote}>
                {review.content}
              </blockquote>
              <div className={styles.meta}>
                <span className={styles.appName}>{review.appName}</span>
                {review.author && (
                  <span className={styles.author}>— {review.author}</span>
                )}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
