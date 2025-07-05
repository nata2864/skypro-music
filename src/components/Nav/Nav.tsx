'use client';

import { useState } from 'react';
import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
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
            <Link href="/my-tracks" className={styles.menu__link}>
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link href="/auth/signin" className={styles.menu__link}>
              Выйти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
