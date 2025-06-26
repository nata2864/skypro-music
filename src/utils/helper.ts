import type { Track } from '@/sharesTypes/sharesTypes';

export function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const inputSeconds = Math.floor(time % 60);
  const outputSeconds = inputSeconds < 10 ? `0${inputSeconds}` : inputSeconds;

  return `${minutes}:${outputSeconds}`;
}


export function getTimePanel(currentTime: number, totalTime: number): string {
  return `${formatTime(currentTime)} / ${formatTime(totalTime)}`;
}




export function getUniqueValuesByKey(arr: Track[], key: keyof Track) : string[]{
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
