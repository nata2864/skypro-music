import styles from './Filter.module.css';
import FilterItem from '../FilterItem/FilterItem';

// Константы фильтров
const filterTitles = ['исполнителю', 'году выпуска', 'жанру'];

export default function Filter() {
  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>

      {filterTitles.map((title) => (
        <FilterItem key={title} title={title} />
      ))}
    </div>
  );
}
