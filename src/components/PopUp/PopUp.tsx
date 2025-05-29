'use client';

import styles from './PopUp.module.css';
import { useState } from 'react';

import classNames from 'classnames';

type PopUpProps = {
  options: string[];
};

export default function PopUp({ options }: PopUpProps){
  const [activeFilterItem, setActiveFilterItem] = useState<string | null>(null);

  const handleToggleItem = (itemName: string) => {
  setActiveFilterItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.filter__list}>
        {options.map((item,index) => {
          return (
            <li
              key={index}
              className={classNames(styles.filter__item, {
                [styles.active]: activeFilterItem === item,
              })}
              onClick={() => handleToggleItem(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
