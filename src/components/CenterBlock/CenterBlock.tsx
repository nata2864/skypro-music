import styles from './CenterBlock.module.css';
import PlayList from '../PlayList/Playlist';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import PlayListHeader from '../PlaylistHeader/PlaylistHeader';
import { Track } from '@/sharesTypes/sharesTypes';
import { getUniqueValuesByKey } from '@/utils/helper';

type FilterOption = {
  title: string;
  options: string[];
};

export default function CenterBlock({
  title,
  tracks,
}: {
  title: string;
  tracks: Track[];
}) {
  const genres = getUniqueValuesByKey(tracks, 'genre');
  const authors = getUniqueValuesByKey(tracks, 'author');

  const filters: FilterOption[] = [
    { title: 'исполнителю', options: authors },
    {
      title: 'году выпуска',
      options: ['По умолчанию', 'Сначала новые', 'Сначала старые'],
    },
    { title: 'жанру', options: genres },
  ];
  return (
    <div className={styles.centerblock}>
      <Search />

      <h2 className={styles.centerblock__h2}>{title}</h2>
      <Filter filters={filters} />
      <div className={styles.centerblock__content}>
        <PlayListHeader />
        <PlayList data={tracks} />
      </div>
    </div>
  );
}
