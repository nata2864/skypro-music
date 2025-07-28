'use client';

import styles from './SideBarUserInfo.module.css';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '@/utils/logout';
import { useAppSelector } from '@store/store';

function SidebarUserInfo() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => logout(dispatch, router);
  const userName = useAppSelector((state) => state.auth.username);

  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personalName}>{userName || null}</p>

      <button
        className={styles.sidebar__icon}
        title="Выйти"
        aria-label="Выйти из аккаунта"
        type="button"
        onClick={handleLogout}
      >
        <svg>
          <use xlinkHref="/img/icon/sprite.svg#logout"></use>
        </svg>
      </button>
    </div>
  );
}

export default SidebarUserInfo;
