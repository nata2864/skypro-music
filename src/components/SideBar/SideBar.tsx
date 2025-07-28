import SidebarUserInfo from '../SideBarUserInfo/SideBarUserInfo';
import styles from './Sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';

function SideBar() {
  return (
    <div className={styles.main__sidebar}>
      <SidebarUserInfo />
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

export default SideBar;
