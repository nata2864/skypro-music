'use client';

import styles from './Filter.module.css';
import FilterItem from '../FilterItem/FilterItem';
import { useState } from 'react';
import { getUniqueValuesByKey } from '@/utils/helper';
import { Track } from '@/sharesTypes/sharesTypes';

type FilterOptionProps = {
  title: string;
  options: string[];
};

type FilterProps = {
  tracks: Track[];
};

export default function Filter({ tracks }: FilterProps) {
  const genres = getUniqueValuesByKey(tracks, 'genre');
  const authors = getUniqueValuesByKey(tracks, 'author');

  const filters: FilterOptionProps[] = [
    { title: 'исполнителю', options: authors },
    {
      title: 'году выпуска',
      options: ['По умолчанию', 'Сначала новые', 'Сначала старые'],
    },
    { title: 'жанру', options: genres },
  ];

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setActiveFilter((prev) => (prev === title ? null : title));
  };

  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>

      {filters.map((filter) => (
        <FilterItem
          key={filter.title}
          title={filter.title}
          options={filter.options}
          isActive={activeFilter === filter.title}
          onToggle={() => handleToggle(filter.title)}
        />
      ))}
    </div>
  );
}
