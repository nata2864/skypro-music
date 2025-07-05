import styles from './layout.module.css';
import Link from 'next/link';

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form}>
            <Link href="/">
              <div className={styles.modal__logo}>
                <img src="/img/logo_modal.png" alt="logo" />
              </div>
            </Link>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}
