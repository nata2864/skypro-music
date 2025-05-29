'use client';

import styles from './PopUp.module.css';
import { useState } from 'react';
import { data } from '@/app/data';
import classNames from 'classnames';

export default function PopUp() {
  const [activeFilterItem, setActiveFilterItem] = useState<string | null>(null);

  const handleToggleItem = (itemName: string) => {
  setActiveFilterItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.filter__list}>
        {data.map((item) => {
          return (
            <li
              key={item._id}
              className={classNames(styles.filter__item, {
                [styles.active]: activeFilterItem === item. author,
              })}
              onClick={() => handleToggleItem(item. author)}
            >
              {item. author}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
