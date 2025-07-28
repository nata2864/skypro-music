'use client';

import Nav from '@/components/Nav/Nav';
import SideBar from '@/components/SideBar/SideBar';
import styles from './layout.module.css';
import { useInitAuth } from '@/hooks/useInitAuth';
import { lazy, Suspense } from 'react';
import { useAppSelector } from '@store/store';
const LazyBar = lazy(() => import('@/components/Bar/Bar'));

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useInitAuth();

  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <div>{children}</div>
          <SideBar />
        </main>
        {currentTrack && (
          <Suspense fallback={null}>
            <LazyBar />
          </Suspense>
        )}
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
