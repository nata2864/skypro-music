import { formatTime, getTimePanel } from './helper';

describe('formatTime', () => {
  it('Добавляет 0 если секунд меньше 10', () => {
    expect(formatTime(61)).toBe('1:01');
  });
  it('Форматирует время < 1 минуты', () => {
    expect(formatTime(35)).toBe('0:35');
  });
  it('Обрабатывает 0:00 секунд', () => {
    expect(formatTime(0)).toBe('0:00');
  });
  it('Возвращает "--:--" при отрицательном числе ', () => {
    expect(formatTime(-10)).toBe('--:--');
  });
  it('Возвращает "--:--" при NaN', () => {
    expect(formatTime(NaN)).toBe('--:--');
  });
  it('Возвращает "--:--" при undefined', () => {
    // @ts-expect-error
    expect(formatTime(undefined)).toBe('--:--');
  });
  it('Возвращает "--:--" при NaN', () => {
    // @ts-expect-error
    expect(formatTime('60')).toBe('--:--');
  });
});

describe('getTimePanel', () => {
  it('Отображает панель загрузки треков при корректных значениях', () => {
    expect(getTimePanel(125, 300)).toBe('2:05 / 5:00');
    expect(getTimePanel(0, 59)).toBe('0:00 / 0:59');
  });
  it('Обрабатывает некорректное currentTime через formatTime', () => {
    expect(getTimePanel(60, -1)).toBe('1:00 / --:--');
  });
  it('обрабатывает оба значения как некорректные', () => {
    expect(getTimePanel(NaN, -10)).toBe('--:-- / --:--');
  });
});
