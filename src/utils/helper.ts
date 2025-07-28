import type { Track } from '@/sharesTypes/sharesTypes';

export function formatTime(time: number): string {
  if (typeof time !== 'number' || isNaN(time) || time < 0) {
    return '--:--';
  }

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const outputSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${outputSeconds}`;
}


export function getTimePanel(currentTime: number, totalTime: number): string {
  return `${formatTime(currentTime)} / ${formatTime(totalTime)}`;
}

export function getUniqueValuesByKey(arr: Track[], key: keyof Track): string[] {
  const unigueValues = new Set<string>();
  arr.forEach((item) => {
    const value = item[key];

    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (v) {
          unigueValues.add(v);
        }
      });
    } else if (typeof value === 'string') {
      unigueValues.add(value);
    }
  });

  return Array.from(unigueValues);
}
