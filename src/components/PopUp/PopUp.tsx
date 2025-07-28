'use client';

import styles from './PopUp.module.css';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@store/store';
import {
  toggleAuthor,
  toggleGenre,
  setSortOption,
  resetFilters,
} from '@store/features/trackSlice';
import { useEffect } from 'react';

type PopUpProps = {
  options: string[];
  isVisible: boolean;
  title: string;
};

export default function PopUp({ options, isVisible, title }: PopUpProps) {
  const dispatch = useAppDispatch();
  const { selectedAuthors, selectedGenres, sortOption } = useAppSelector(
    (state) => state.tracks,
  );

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, []);

  const handleToggleItem = (itemName: string) => {
    if (title === 'исполнителю') {
      dispatch(toggleAuthor(itemName));
    } else if (title === 'жанру') {
      dispatch(toggleGenre(itemName));
    } else if (title === 'году выпуска') {
      dispatch(setSortOption(itemName));
    }
  };

  const isItemActive = (item: string) => {
    if (title === 'исполнителю') {
      return selectedAuthors.includes(item);
    } else if (title === 'жанру') {
      return selectedGenres.includes(item);
    } else if (title === 'году выпуска') {
      return sortOption === item;
    }
    return false;
  };

  return (
    <div
      className={styles.wrapper}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <ul className={styles.filter__list}>
        {options.map((item, index) => (
          <li
            key={index}
            className={classNames(styles.filter__item, {
              [styles.active]: isItemActive(item),
            })}
            onClick={() => handleToggleItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
