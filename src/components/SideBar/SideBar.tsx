import Link from 'next/link';
import styles from './Sidebar.module.css';
import Image from 'next/image';

export default function SideBar() {
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
        <Link href="/sign-in">
          <div className={styles.sidebar__icon} role="button" title="Выйти">
            <svg>
              <use xlinkHref="/img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </Link>
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="/category/1">
              <Image
                className={styles.sidebar__img}
                src="/img/playlist01.png"
                alt="day's playlist"
                width={250}
                height={170}
              />
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="/category/2">
              <Image
                className={styles.sidebar__img}
                src="/img/playlist02.png"
                alt="dance-hits"
                width={250}
                height={170}
              />
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="/category/3">
              <Image
                className={styles.sidebar__img}
                src="/img/playlist03.png"
                alt="indie-boost"
                width={250}
                height={170}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
