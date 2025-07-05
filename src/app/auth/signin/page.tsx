'use client';

import classNames from 'classnames';
import Link from 'next/link';
import styles from './signin.module.css';
import { useFormValidation } from '../useFormValidation';
import { postToken, signInUser } from '@/services/auth/authApi';
import { useRouter } from 'next/navigation';

import { handleAxiosError } from '@/utils/handleAxiosError';

export default function SighInPage() {
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
    await signInUser({
      email: formData.email,
      password: formData.password,
    });

    const response = await postToken({
      email: formData.email,
      password: formData.password,
    });

    console.log(response);
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

      <Link href="./auth/signup" className={styles.modal__btnSignup}>
        Зарегистрироваться
      </Link>
    </>
  );
}
