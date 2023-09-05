import clsx from 'clsx';
import React from 'react';

import { ReactTagProps } from '@/shared/types';

import styles from './styles.module.scss';

interface CheckboxProps extends ReactTagProps<'input'> {
  disabled?: boolean;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  disabled,
  className,
  ...props
}) => (
  <div
    className={clsx(styles.round, { [styles.disabled]: disabled }, className)}
  >
    <input disabled={disabled} type="checkbox" {...props} />
    <label htmlFor="checkbox" />
  </div>
);
