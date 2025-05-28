'use client';

import styles from './Filter.module.css';
import FilterItem from '../FilterItem/FilterItem';
import { useState } from 'react';

// Константы фильтров позже вынести
const filterTitles = ['исполнителю', 'году выпуска', 'жанру'] as const;

type FilterTitle = (typeof filterTitles)[number];


export default function Filter() {
  const [activeFilter, setActiveFilter] = useState<FilterTitle | null>(null);

const handleToggle = (title: FilterTitle)  => {
  setActiveFilter((prev) => (prev === title ? null : title));
};
  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>

      {filterTitles.map((title) => (
        <FilterItem key={title} title={title} 
          isActive={activeFilter === title}
          onToggle={() => handleToggle(title)}
        />
      ))}
    </div>
  );
}
