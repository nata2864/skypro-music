'use client';

import classNames from 'classnames';
import Link from 'next/link';
import styles from './signin.module.css';
import { useFormValidation } from '../useFormValidation';
import { signInUser } from '@/services/auth/authApi';
import { useState } from 'react';
import { handleAxiosError } from '@/utils/handleAxiosError';


export default function SighInPage() {
  const [errorServer, setErrorServer] = useState('');
  const { formData, error, handleChange, validateForm } = useFormValidation({
    email: '',
    password: '',
  });

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Клик');

    if (!validateForm(['email', 'password'])) {
      console.log('❌ Валидация не прошла');
      return;
    }

    console.log('✅ Валидация прошла');
    console.log('Форма:', formData);
    signInUser({
      email: formData.email,
      password: formData.password,
    })
      .then((response) => {
        console.log('Успех:', response);
        // тут можешь сделать редирект, очистку формы и т.п.
      })
      .catch((errorServer) => {
        handleAxiosError(errorServer);
      });
  };

  return (
    <>
      <input
        className={classNames(styles.modal__input, styles.login)}
        type="email"
        name="email"
        placeholder="Почта"
        onChange={handleChange}
        value={formData.email}
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
      <div className={styles.errorContainer}>{errorServer}</div>
      <Link href="./">
        <button
          type="button"
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
