import styles from './ProgressBar.module.css';
import { ChangeEvent } from 'react';

type progressBarProp = {
  max: number;
  value: number;
  step: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
};

export default function ProgressBar({
  max,
  value,
  step,
  onChange,
  disabled,
}: progressBarProp) {
  return (
    <input
      className={styles.styledProgressInput}
      type="range"
      min="0"
      max={isNaN(max) ? 0 : max}
      value={value}
      step={step}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
