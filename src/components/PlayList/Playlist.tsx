import TrackItem from '../Track/Track';
import styles from './PlayList.module.css';
import {Track } from '@/sharesTypes/sharesTypes';

type PlayListProps = {
  data: Track [];
};

export default function PlayList({ data }: PlayListProps) {
  return (
    <div className={styles.content__playlist}>
      {data.map((item) => {
        return <TrackItem key={item._id} item={item} />;
      })}
    </div>
  );
}
