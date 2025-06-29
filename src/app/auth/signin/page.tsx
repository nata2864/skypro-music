'use client';

import classNames from 'classnames';
import Link from 'next/link';
import styles from './signin.module.css';
import { useFormValidation } from '../useFormValidation';

export default function SighInPage() {
  const {
    formData,
    error,
    handleChange,
    validateForm,
  } = useFormValidation({ login: '', password: '' });

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateForm(['login', 'password'])) {
      console.log('Все поля заполнены');
    }
  };

  return (
    <>
      <input
        className={classNames(styles.modal__input, styles.login)}
        type="text"
        name="login"
        placeholder="Почта"
        onChange={handleChange}
        value={formData.login}
      />
      <input
        className={classNames(styles.modal__input)}
        type="password"
        name="password"
        placeholder="Пароль"
        onChange={handleChange}
        value={formData.password}
      />
      <div className={styles.errorContainer}>{error}</div>
      <Link href="./">
        <button
          type="submit"
          onClick={onSubmit}
          className={styles.modal__btnEnter}
        >
          Войти
        </button>
      </Link>

      <Link href="./signup" className={styles.modal__btnSignup}>
        Зарегистрироваться
      </Link>
    </>
  );
}
