import styles from './FilterItem.module.css';

type FilterItemProps = {
  title: string;
};

export default function FilterItem({ title }: FilterItemProps) {
  return <div className={styles.filter__button}>{title}</div>;
}
