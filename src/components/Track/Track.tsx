'use client';

import { useAppDispatch, useAppSelector } from '@store/store';
import {
  setCurrentPlayList,
  setCurrentTrack,
} from '@store/features/trackSlice';
import Link from 'next/link';
import styles from './Track.module.css';
import type { Track } from '@/sharesTypes/sharesTypes';
import { formatTime } from '@/utils/helper';
import classNames from 'classnames';
import { useLikeTrack } from '@/hooks/useLikeTrack';

type TrackProps = {
  item: Track;
  playList: Track[];
};

export default function TrackItem({ item, playList }: TrackProps) {
  const { name, author, album, duration_in_seconds } = item;
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const isPlaying = useAppSelector((state) => state.tracks.isPlay);
  const { toggleLike, isLike } = useLikeTrack(item);

  const handleClick = () => {
    dispatch(setCurrentTrack(item));
    dispatch(setCurrentPlayList(playList));
  };

  return (
    <div className={styles.playlist__item} onClick={handleClick}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__titleImage}>
            {currentTrack?._id === item._id ? (
              <span
                className={classNames(styles.playingDot, {
                  [styles.active]: isPlaying,
                })}
              />
            ) : (
              <svg className={styles.track__titleSvg}>
                <use href="/img/icon/sprite.svg#icon-note" />
              </svg>
            )}
          </div>
          <div className={styles['track__title-text']}>
            <Link className={styles.track__titleLink} href="#">
              {name} <span className={styles.track__titleSpan}></span>
            </Link>
          </div>
        </div>
        <div className={styles.track__author}>
          <Link className={styles.track__authorLink} href="#">
            {author}
          </Link>
        </div>
        <div className={styles.track__album}>
          <Link className={styles.track__albumLink} href="#">
            {album}
          </Link>
        </div>
        <div className={styles.track__time}>
          <svg
            className={styles.track__timeSvg}
            onClick={(e) => {
              e.stopPropagation();
              toggleLike();
            }}
          >
            <use
              xlinkHref={`/img/icon/sprite.svg#${isLike ? 'icon-like' : 'icon-dislike'}`}
            ></use>
          </svg>
          <span className={styles.track__timeText}>
            {formatTime(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}
