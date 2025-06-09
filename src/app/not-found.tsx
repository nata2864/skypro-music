import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subTitle}>Страница не найдена</h2>
        <p className={styles.description}>
          Возможно, она была удалена или перенесена на другой адрес 😢
        </p>
        <Link href="/" className={styles.modal__btnSignupEnt}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
