import clsx from 'clsx';
import React from 'react';

import { ReactTagProps } from '@/shared/types';

import styles from './styles.module.scss';

interface ToggleButtonProps extends ReactTagProps<'button'> {
  size?: 'large' | 'medium';
  disabled?: boolean;
}

// TODO: implement sizes

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  size = 'large',
  disabled,
  ...props
}) => (
  <button disabled={disabled} className="btn-reset" {...props}>
    <label className={clsx(styles.switch, styles[size])}>
      <input disabled={disabled} type="checkbox" />
      <span
        className={clsx(styles.slider, styles.round, styles[size], {
          [styles.disabled]: disabled,
        })}
      />
    </label>
  </button>
);
