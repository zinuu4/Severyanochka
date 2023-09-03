import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.scss';

interface ICheckboxProps {
  disabled?: boolean;
}

export const Checkbox = ({ disabled }: ICheckboxProps) => (
  <div className={clsx(styles.round, { [styles.disabled]: disabled })}>
    <input disabled={disabled} type="checkbox" id="checkbox" />
    <label htmlFor="checkbox" />
  </div>
);
