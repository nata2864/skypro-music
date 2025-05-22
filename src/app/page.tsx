import SideBar from '@/components/SideBar/SideBar';
import Nav from '@/components/Nav/Nav';
import styles from './page.module.css';
import CenterBlock from '@/components/CenterBlock/CenterBlock';
import Bar from '@/components/Bar/Bar';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <CenterBlock />
          <SideBar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
