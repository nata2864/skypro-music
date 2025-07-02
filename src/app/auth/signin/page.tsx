'use client';

import classNames from 'classnames';
import Link from 'next/link';
import styles from './signin.module.css';
import { useFormValidation } from '../useFormValidation';
import { signInUser } from '@/services/auth/authApi';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { ERROR_MESSAGES } from '@/constans/errorMessages';


export default function SighInPage() {

  const [errorServer, setErrorServer]= useState('');
  const {
    formData,
    error,
    handleChange,
    validateForm,
  } = useFormValidation({ login: '', password: '' });

const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log('Клик');

  if (!validateForm(['login', 'password'])) {
    console.log('❌ Валидация не прошла');
    return;
  }

  console.log('✅ Валидация прошла');

  signInUser({
    login: formData.login,
    password: formData.password,
  })
    .then((response) => {
      console.log('Успех:', response);
      // тут можешь сделать редирект, очистку формы и т.п.
    })
    .catch((errorServer) => {
      if (errorServer instanceof AxiosError) {
        if (errorServer.response) {
          console.log('Ответ сервера с ошибкой:', errorServer.response.data);
          setErrorServer(errorServer.response.data.message);
        } else if (errorServer.request) {
          console.log('Ошибка сети:', errorServer.request);
          setErrorServer(ERROR_MESSAGES.NETWORK_ERROR);
        } else {
          console.log('Неизвестная ошибка:', errorServer.message);
          setErrorServer(ERROR_MESSAGES.UNKNOWN_ERROR);
        }
      } else {
        console.log('Нестандартная ошибка:', errorServer);
        setErrorServer(ERROR_MESSAGES.UNKNOWN_ERROR);
      }

      console.log('Ошибка пришла:', errorServer);
    });
};

  return (
    <>
      <input
        className={classNames(styles.modal__input, styles.login)}
       type="email"
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
