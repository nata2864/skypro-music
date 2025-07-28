import PopUp from '../PopUp/PopUp';
import styles from './FilterItem.module.css';
import classNames from 'classnames';

type FilterItemProps = {
  title: string;
  options: string[];
  isActive: boolean;
  onToggle: () => void;
};

export default function FilterItem({
  title,
  options,
  isActive,
  onToggle,
}: FilterItemProps) {
  return (
    <div className={styles.filterItemWrapper}>
      <div
        className={classNames(styles.filter__button, {
          [styles.active]: isActive,
        })}
        onClick={onToggle}
      >
        {title}
      </div>
      <PopUp options={options} title={title} isVisible={isActive} />
    </div>
  );
}
