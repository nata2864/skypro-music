import PopUp from '../PopUp/PopUp';
import styles from './FilterItem.module.css';
import classNames from 'classnames';

type FilterItemProps = {
  title: string;
  isActive:boolean;
   onToggle: () => void;
};

export default function FilterItem({ title, isActive, onToggle }: FilterItemProps) {
  return (
  
  <div className={styles.filterItemWrapper}>
      <div className={classNames(styles.filter__button, {
  [styles.active]: isActive,
})} onClick={onToggle}>
        {title}
      </div>

      {isActive && (
        <div className={styles.popUpContainer}>
          <PopUp />
        </div>
      )}
    </div>
  
 );
}
