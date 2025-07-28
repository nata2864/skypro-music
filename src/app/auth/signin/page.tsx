'use client';

import classNames from 'classnames';
import Link from 'next/link';
import styles from './signin.module.css';
import { useFormValidation } from '../useFormValidation';
import { getToken, signInUser } from '@/services/auth/authApi';
import { useRouter } from 'next/navigation';

import { handleAxiosError } from '@/utils/handleAxiosError';
import { useAppDispatch } from '@store/store';
import {
  setAccessToken,
  setRefreshToken,
  setUserName,
} from '@store/features/authSlice';

export default function SighInPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { formData, error, handleChange, validateForm } = useFormValidation({
    email: '',
    password: '',
  });

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm(['email', 'password'])) {
      return;
    }

    try {
      const userData = await signInUser({
        email: formData.email,
        password: formData.password,
      });

      const username = userData.username;
      dispatch(setUserName(username));

      const response = await getToken({
        email: formData.email,
        password: formData.password,
      });

      dispatch(setAccessToken(response.access));
      dispatch(setRefreshToken(response.refresh));
      router.push('/');
    } catch (error) {
      handleAxiosError(error);
    }
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

      <Link href="./">
        <button
          type="button"
          onClick={onSubmit}
          className={styles.modal__btnEnter}
        >
          Войти
        </button>
      </Link>

      <Link href="/auth/signup" className={styles.modal__btnSignup}>
        Зарегистрироваться
      </Link>
    </>
  );
}
