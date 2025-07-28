'use client';

import { useState } from 'react';
import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '@/utils/logout';
import { useAppSelector } from '@store/store';
import { toast } from 'react-toastify';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const userName = useAppSelector((state) => state.auth.username);
  const handleClick = (e: { preventDefault: () => void }) => {
    if (!userName) {
      e.preventDefault();
      toast.error('Сначала войдите в аккаунт');
    }
  };

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => logout(dispatch, router);
  const handleAuthClick = () => {
    if (userName) {
      handleLogout();
    } else {
      router.push('/auth/signin');
    }
  };

  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <Link href="/">
          <Image
            width={250}
            height={170}
            className={styles.logo__image}
            src="/img/logo.png"
            alt={'logo'}
          />
        </Link>
      </div>
      <div className={styles.nav__burger} onClick={handleToggleMenu}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div
        className={classNames(styles.nav__menu, {
          [styles.open]: menuOpen,
        })}
      >
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link href="/" className={styles.menu__link}>
              Главное
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              href="/my-tracks"
              className={styles.menu__link}
              onClick={handleClick}
            >
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menu__item}>
            <button className={styles.menu__link} onClick={handleAuthClick}>
              {userName ? 'Выйти' : 'Войти'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
