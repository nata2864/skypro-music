'use client';

import styles from './signup.module.css';
import classNames from 'classnames';
import { useFormValidation } from '../useFormValidation';
import { useRouter } from 'next/navigation';
import { signUpUser } from '@/services/auth/authApi';
import { handleAxiosError } from '@/utils/handleAxiosError';

export default function SighUpPage() {
  const router = useRouter();
  const { formData, error, handleChange, validateForm } = useFormValidation({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm(['email', 'password', 'username', 'confirmPassword'])) {
      return;
    }

    const dataToSend = {
      email: formData.email,
      password: formData.password,
      username: formData.username,
    };

    signUpUser(dataToSend)
      .then((response) => {
        router.push('/auth/signin');
      })
      .catch((error) => {
        handleAxiosError(error);
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
        name="confirmPassword"
        placeholder="Повторите пароль"
        onChange={handleChange}
        value={formData.confirmPassword}
      />

      <input
        className={styles.modal__input}
        type="text"
        name="username"
        placeholder="Ник"
        onChange={handleChange}
        value={formData.username}
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
