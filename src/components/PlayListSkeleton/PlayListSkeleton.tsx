import Skeleton from 'react-loading-skeleton';
import styles from './PlayListSkeleton.module.css';
import 'react-loading-skeleton/dist/skeleton.css';

export default function PlayListSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className={styles.skeletonRow}>
          <Skeleton className={styles.image} width={40} height={40} />
          <Skeleton className={styles.title} height={12} />
          <Skeleton className={styles.artist} height={12} />
          <Skeleton className={styles.album} height={12} />
        </div>
      ))}
    </>
  );
}
