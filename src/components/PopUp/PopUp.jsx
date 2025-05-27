import styles from './PopUp.module.css';

export default function PopUp() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.filter__list}>
        <li>Здесь по умолчанию..................</li>
        <li>Это попап</li>
        <li>Это попап</li>
        <li>Это попап</li>
        <li>Это попап</li>
        <li>Это попап</li>
        <li>Это попап</li>
        <li>Это попап</li>
        <li>Это попап</li>
      </ul>
    </div>
  );
}
