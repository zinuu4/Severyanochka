import clsx from 'clsx';
import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  isOrange?: boolean;
  className?: string;
  children?: ReactNode;
}

export const Button = ({
  isActive,
  isOrange,
  className,
  children,
  ...props
}: IButtonProps) => (
  <button
    className={clsx(
      styles.btn,
      isActive && styles.active,
      isOrange && styles.orange,
      className,
      'btn-reset',
    )}
    {...props}
  >
    {children}
  </button>
);
