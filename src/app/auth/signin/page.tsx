import classNames from 'classnames';
import Link from 'next/link';
import styles from './signin.module.css'

export default function SighInPage() {
   return (
    <>
      <input
        className={classNames(styles.modal__input, styles.login)}
        type="text"
        name="login"
        placeholder="Почта"
      />
      <input
        className={classNames(styles.modal__input)}
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <div className={styles.errorContainer}>{/*Блок для ошибок*/}</div>
      <Link href="./">
        <button className={styles.modal__btnEnter}>Войти</button>
      </Link>

      <Link href="./sign-up" className={styles.modal__btnSignup}>
        Зарегистрироваться
      </Link>
    </>
  );
}