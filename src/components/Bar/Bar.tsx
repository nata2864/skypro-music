'use client';

import styles from './Bar.module.css';
import Link from 'next/link';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@store/store';
import { useRef, useEffect, useState } from 'react';
import { setIsPlay } from '@store/features/trackSlice';
import { getTimePanel } from '@/utils/helper';
import ProgressBar from '../ProgressBar/ProgressBar';
import {
  setNextTrack,
  setPreviousTrack,
  toggleShuffle,
} from '@store/features/trackSlice';
import { useLikeTrack } from '@/hooks/useLikeTrack';

export default function Bar() {
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const isPlaying = useAppSelector((state) => state.tracks.isPlay);
  const isShuffle = useAppSelector((state) => state.tracks.isShuffle);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const getAudio = () => audioRef.current;
  const dispatch = useAppDispatch();
  const [isRepeatActive, setIsRepeatActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const { toggleLike, isLike } = useLikeTrack(currentTrack);

  useEffect(() => {
    if (currentTrack && getAudio()) {
      getAudio()?.load();
    }
  }, [currentTrack]);

  useEffect(() => {
    const audio = getAudio();
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  if (!currentTrack) return null;

  const onTogglePlay = () => {
    const audio = getAudio();
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      dispatch(setIsPlay(false));
    } else {
      audio.play();
      dispatch(setIsPlay(true));
    }
  };

  const onToggleRepeat = () => {
    setIsRepeatActive(!isRepeatActive);
  };

  const onShuffle = () => {
    dispatch(toggleShuffle());
  };

  const onLoadedMetadata = () => {
    const audio = getAudio();
    if (audio) {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
      audio.play();
      dispatch(setIsPlay(true));
    }
  };

  const onTimeUpdate = () => {
    const audio = getAudio();
    if (audio) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    }
  };
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const renderTimePanel = () => {
    return duration > 0 ? getTimePanel(currentTime, duration) : null;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = getAudio();
    const newTime = parseFloat(e.target.value);
    if (audio) {
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const onNextTrack = () => {
    dispatch(setNextTrack());
  };

  const onPreviousTrack = () => {
    dispatch(setPreviousTrack());
  };

  const onEndedTrack = () => {
    if (!isRepeatActive) {
      onNextTrack();
    }
  };

  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <div className={styles.timeDisplay}>{renderTimePanel()}</div>

        <ProgressBar
          max={duration}
          value={currentTime}
          step={0.1}
          onChange={handleProgressChange}
          disabled={!audioRef.current}
        />
        <div className={styles.bar__playerBlock}>
          <div className={styles.bar__player}>
            <audio
              ref={audioRef}
              src={currentTrack?.track_file}
              loop={isRepeatActive}
              onTimeUpdate={onTimeUpdate}
              onEnded={onEndedTrack}
              onLoadedMetadata={onLoadedMetadata}
            ></audio>
            <div className={styles.player__controls}>
              <div className={styles.player__btnPrev} onClick={onPreviousTrack}>
                <svg className={styles.player__btnPrevSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div
                className={classNames(styles.player__btnPlay, styles.btn)}
                onClick={onTogglePlay}
              >
                {isPlaying ? (
                  <svg className={styles.player__btnPlaySvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-pause"></use>
                  </svg>
                ) : (
                  <svg className={styles.player__btnPlaySvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                  </svg>
                )}
              </div>
              <div className={styles.player__btnNext} onClick={onNextTrack}>
                <svg className={styles.player__btnNextSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div
                className={classNames(
                  styles.player__btnRepeat,
                  styles.btnIcon,
                  { [styles.active]: isRepeatActive },
                )}
                onClick={onToggleRepeat}
              >
                <svg className={styles.player__btnRepeatSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div
                className={classNames(
                  styles.player__btnShuffle,
                  styles.btnIcon,
                  { [styles.active]: isShuffle },
                )}
                onClick={onShuffle}
              >
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
                  <Link className={styles.trackPlay__authorLink} href="#">
                    {currentTrack.name}
                  </Link>
                </div>
                <div className={styles.trackPlay__album}>
                  <Link className={styles.trackPlay__albumLink} href="#">
                    {currentTrack.author}
                  </Link>
                </div>
              </div>
              <div className={styles.trackPlay__dislike}>
                <div
                  className={classNames(
                    styles.player__btnShuffle,
                    styles.btnIcon,
                  )}
                >
                  <svg
                    className={styles.trackPlay__likeSvg}
                    onClick={toggleLike}
                  >
                    <use
                      xlinkHref={`/img/icon/sprite.svg#${isLike ? 'icon-like' : 'icon-dislike'}`}
                    ></use>
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
              <div className={classNames(styles.volume__progress, styles.btn)}>
                <input
                  className={classNames(
                    styles.volume__progressLine,
                    styles.btn,
                  )}
                  type="range"
                  name="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
