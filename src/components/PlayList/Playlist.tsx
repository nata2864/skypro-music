import TrackItem from '../Track/Track';
import styles from './PlayList.module.css';
import { Track } from '@/sharesTypes/sharesTypes';
import { useAppSelector } from '@store/store';
import { useMemo } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import PlayListSkeleton from '../PlayListSkeleton/PlayListSkeleton';

type PlayListProps = {
  tracks: Track[];
  isLoading: boolean;
};

export default function PlayList({ tracks, isLoading }: PlayListProps) {
  const allTracks = tracks;
  const selectedAuthors = useAppSelector(
    (state) => state.tracks.selectedAuthors,
  );
  const selectedGenres = useAppSelector((state) => state.tracks.selectedGenres);

  const sortOption = useAppSelector((state) => state.tracks.sortOption);
  const searchInput = useAppSelector((store) => store.tracks.searchInput);

  const filteredTracks = useMemo(() => {
    return allTracks

      .filter((track) => {
        if (!searchInput.trim()) return true;

        const lowerSearch = searchInput.toLowerCase();

        return track.name.toLowerCase().includes(lowerSearch);
      })

      .filter((track) =>
        selectedAuthors.length > 0
          ? selectedAuthors.includes(track.author)
          : true,
      )

      .filter((track) =>
        selectedGenres.length > 0
          ? track.genre.some((g: string) => selectedGenres.includes(g))
          : true,
      )

      .sort((a, b) => {
        const yearA = new Date(a.release_date).getFullYear();
        const yearB = new Date(b.release_date).getFullYear();

        if (sortOption === 'Сначала новые') return yearB - yearA;
        if (sortOption === 'Сначала старые') return yearA - yearB;
        return 0;
      });
  }, [allTracks, selectedAuthors, selectedGenres, sortOption, searchInput]);

  if (isLoading) {
    return (
      <SkeletonTheme
        baseColor="rgba(49, 49, 49, 1)"
        highlightColor="rgba(173, 97, 255, 1)"
        duration={2}
      >
        <PlayListSkeleton />
      </SkeletonTheme>
    );
  }

  if (filteredTracks.length === 0) {
    return <div className={styles.emptyText}>...Нет выбранных треков</div>;
  }

  return (
    <div className={styles.content__playlist}>
      {filteredTracks.map((item) => (
        <TrackItem key={item._id} item={item} playList={tracks} />
      ))}
    </div>
  );
}
