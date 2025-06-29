'use client';

import styles from './signup.module.css';
import classNames from 'classnames';
import { useFormValidation } from '../useFormValidation';

export default function SighUpPage() {
  const { formData, error, handleChange, validateForm } = useFormValidation({
    login: '',
    password: '',
    repeatpassword: '',
  });

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
        className={styles.modal__input}
        type="password"
        name="password"
        placeholder="Пароль"
        onChange={handleChange}
        value={formData.password}
      />
      <input
        className={styles.modal__input}
        type="password"
        name="repeatpassword"
        placeholder="Повторите пароль"
        onChange={handleChange}
        value={formData.repeatpassword}
      />
      <div className={styles.errorContainer}>{error}</div>
      <button
        type="submit"
        onClick={onSubmit}
        className={styles.modal__btnSignupEnt}
      >
        Зарегистрироваться
      </button>
    </>
  );
}
