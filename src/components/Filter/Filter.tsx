'use client';

import styles from './Filter.module.css';
import FilterItem from '../FilterItem/FilterItem';
import { useState } from 'react';

type FilterProps = {
  filters: {
    title: string;
    options: string[];
  }[];
};

export default function Filter({ filters }: FilterProps) {
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
