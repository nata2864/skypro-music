import styles from './CenterBlock.module.css';
import classNames from 'classnames';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import Track from '../Track/Track';
import { data } from '@/app/data';

type CenterBlockProps = { 
  title: string
 };

export default function CenterBlock({ title }: CenterBlockProps) {
  return (
    <div className={styles.centerblock}>
      <Search />

      <h2 className={styles.centerblock__h2}>{title}</h2>
      <Filter/>
      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div className={classNames(styles.playlistTitle__col, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col04)}>
            <svg className={styles.playlistTitle__svg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>

        <div className={styles.content__playlist}>
          {data.map((item) => {
            return <Track key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
