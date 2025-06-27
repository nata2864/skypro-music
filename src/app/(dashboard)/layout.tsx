import Nav from '@/components/Nav/Nav';
import SideBar from '@/components/SideBar/SideBar';
import Bar from '@/components/Bar/Bar';
import styles from './layout.module.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <div>{children}</div>
          <SideBar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
