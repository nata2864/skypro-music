'use client';

import styles from './Seach.module.css';
import { useAppDispatch, useAppSelector } from '@store/store';
import { setSearchInput } from '@store/features/trackSlice';

export default function Search() {
  const dispatch = useAppDispatch();
  const searchInput = useAppSelector((store) => store.tracks.searchInput);

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(e.target.value));
  };

  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchInput}
        onChange={onSearchInput}
      />
    </div>
  );
}
