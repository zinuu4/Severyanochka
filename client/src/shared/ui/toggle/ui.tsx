import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.scss';

interface ToggleButtonProps {
  size?: 'large' | 'medium';
  disabled?: boolean;
}

// TODO: implement sizes

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  disabled,
  size = 'large',
}) => (
  <button disabled={disabled} className="btn-reset">
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
