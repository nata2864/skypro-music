'use client';

import styles from './signup.module.css';
import classNames from 'classnames';
import { useFormValidation } from '../useFormValidation';
import { useState } from 'react';
;
import { signUpUser } from '@/services/auth/authApi';
import { handleAxiosError } from '@/utils/handleAxiosError';

export default function SighUpPage() {
  const [errorServer, setErrorServer]= useState('');
    const {
      formData,
      error,
      handleChange,
      validateForm,
    } = useFormValidation({ email: '', username: '', password: '' });
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Клик');
  
    if (!validateForm(['email', 'password','username'])) {
      console.log('❌ Валидация не прошла');
      return;
    }
  
    console.log('✅ Валидация прошла');
  console.log('Форма:', formData);
    signUpUser({
      email: formData.email,
      password: formData.password,
      username:formData.username
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
        name="username"
        placeholder="Повторите пароль"
        onChange={handleChange}
        value={formData.username}
      />
      <div className={styles.errorContainer}>{error}</div>
        <div className={styles.errorContainer}>{errorServer}</div>
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
