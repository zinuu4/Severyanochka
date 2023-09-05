import clsx from 'clsx';
import React from 'react';

import { ReactTagProps } from '@/shared/types';

import styles from './styles.module.scss';

interface CheckboxProps extends ReactTagProps<'input'> {
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ disabled }) => (
  <div className={clsx(styles.round, { [styles.disabled]: disabled })}>
    <input disabled={disabled} type="checkbox" />
    <label htmlFor="checkbox" />
  </div>
);
