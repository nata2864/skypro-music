import Link from 'next/link';
import styles from './Track.module.css';
import type { Track } from '@/sharesTypes/sharesTypes';
import { formatTime } from '@/utils/helper';

type TrackProps = {
  item: Track;
};

export default function Track({ item }: TrackProps){
  const { name, author, album,duration_in_seconds } = item;
  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__titleImage}>
            <svg className={styles.track__titleSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className={styles['track__title-text']}>
            <Link className={styles.track__titleLink} href="">
             {name} <span className={styles.track__titleSpan}></span>
            </Link>
          </div>
        </div>
        <div className={styles.track__author}>
          <Link className={styles.track__authorLink} href="">
           {author}
          </Link>
        </div>
        <div className={styles.track__album}>
          <Link className={styles.track__albumLink} href="">
           {album}
          </Link>
        </div>
        <div className={styles.track__time}>
          <svg className={styles.track__timeSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.track__timeText}>{formatTime(duration_in_seconds)}</span>
        </div>
      </div>
    </div>
  );
}
