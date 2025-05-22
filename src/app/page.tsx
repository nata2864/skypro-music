import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <nav className={styles.main__nav}>
            <div className={styles.nav__logo}>
              <Image
                width={250}
                height={170}
                className={styles.logo__image}
                src="/img/logo.png"
                alt={'logo'}
              />
            </div>
            <div className={styles.nav__burger}>
              <span className={styles.burger__line}></span>
              <span className={styles.burger__line}></span>
              <span className={styles.burger__line}></span>
            </div>
            <div className={styles.nav__menu}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                  <Link href="#" className={styles.menu__link}>
                    Главное
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link href="#" className={styles.menu__link}>
                    Мой плейлист
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link href="../signin.html" className={styles.menu__link}>
                    Войти
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className={styles.centerblock}>
            <div className={styles.centerblock__search}>
              <svg className={styles.search__svg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className={styles.search__text}
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className={styles.centerblock__h2}>Треки</h2>
            <div className={styles.centerblock__filter}>
              <div className={styles.filter__title}>Искать по:</div>
              <div className={styles.filter__button}>исполнителю</div>
              <div className={styles.filter__button}>году выпуска</div>
              <div className={styles.filter__button}>жанру</div>
            </div>
            <div className={styles.centerblock__content}>
              <div className={styles.content__title}>
                <div className={`${styles.playlistTitle__col} ${styles.col01}`}>
                  Трек
                </div>
                <div className={`${styles.playlistTitle__col} ${styles.col02}`}>
                  Исполнитель
                </div>
                <div className={`${styles.playlistTitle__col} ${styles.col03}`}>
                  Альбом
                </div>
                <div className={`${styles.playlistTitle__col} ${styles.col04}`}>
                  <svg className={styles.playlistTitle__svg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              <div className={styles.content__playlist}>
                <div className={styles.playlist__item}>
                  <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles['track__title-text']}>
                        <Link className={styles.track__titleLink} href="">
                          Guilt{' '}
                          <span className={styles.track__titleSpan}></span>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <Link className={styles.track__authorLink} href="">
                        Nero
                      </Link>
                    </div>
                    <div className={styles.track__album}>
                      <Link className={styles.track__albumLink} href="">
                        Welcome Reality
                      </Link>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>4:44</span>
                    </div>
                  </div>
                </div>
                {/* остальные треки — по аналогии */}
              </div>
            </div>
          </div>

          <div className={styles.main__sidebar}>
            <div className={styles.sidebar__personal}>
              <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
              <div className={styles.sidebar__icon}>
                <svg>
                  <use xlinkHref="/img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className={styles.sidebar__block}>
              <div className={styles.sidebar__list}>
                <div className={styles.sidebar__item}>
                  <Link className={styles.sidebar__link} href="#">
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
                  <Link className={styles.sidebar__link} href="#">
                    <Image
                      className={styles.sidebar__img}
                      src="/img/playlist02.png"
                      alt="day's playlist"
                      width={250}
                      height={170}
                    />
                  </Link>
                </div>
                <div className={styles.sidebar__item}>
                  <Link className={styles.sidebar__link} href="#">
                    <Image
                      className={styles.sidebar__img}
                      src="/img/playlist03.png"
                      alt="day's playlist"
                      width={250}
                      height={170}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className={styles.bar}>
          <div className={styles.bar__content}>
            <div className={styles.bar__playerProgress}></div>
            <div className={styles.bar__playerBlock}>
              <div className={styles.bar__player}>
                <div className={styles.player__controls}>
                  <div className={styles.player__btnPrev}>
                    <svg className={styles.player__btnPrevSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  <div className={`${styles.player__btnPlay} btn`}>
                    <svg className={styles.player__btnPlaySvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                    </svg>
                  </div>
                  <div className={styles.player__btnNext}>
                    <svg className={styles.player__btnNextSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>
                  <div className={`${styles.player__btnRepeat} btnIcon`}>
                    <svg className={styles.player__btnRepeatSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                  </div>
                  <div className={`${styles.player__btnShuffle} btnIcon`}>
                    <svg className={styles.player__btnShuffleSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                    </svg>
                  </div>
                </div>
                <div className={styles.player__trackPlay}>
                  <div className={styles.trackPlay__contain}>
                    <div className={styles.trackPlay__image}>
                      <svg className={styles.trackPlay__svg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className={styles.trackPlay__author}>
                      <Link className={styles.trackPlay__authorLink} href="">
                        Ты та...
                      </Link>
                    </div>
                    <div className={styles.trackPlay__album}>
                      <Link className={styles.trackPlay__albumLink} href="">
                        Баста
                      </Link>
                    </div>
                  </div>
                  <div className={styles.trackPlay__dislike}>
                    <div className={`${styles.player__btnShuffle} btnIcon`}>
                      <svg className={styles.trackPlay__likeSvg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                      </svg>
                    </div>
                    <div className={`${styles.trackPlay__dislike} btnIcon`}>
                      <svg className={styles.trackPlay__dislikeSvg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bar__volumeBlock}>
                <div className={styles.volume__content}>
                  <div className={styles.volume__image}>
                    <svg className={styles.volume__svg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                  </div>
                  <div className={`${styles.volume__progress} btn`}>
                    <input
                      className={`${styles.volume__progressLine} btn`}
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
