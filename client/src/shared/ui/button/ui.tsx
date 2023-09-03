import clsx from 'clsx';
import React, { ReactNode } from 'react';

import { Icon } from '..';

import styles from './styles.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  chevron?: boolean;
  size: 'large' | 'medium' | 'small';
  orange?: boolean;
  green?: boolean;
  light?: boolean;
  error?: boolean;
  muted?: boolean;
  leftArrow: boolean;
  rightArrow: boolean;
  className?: string;
  children?: ReactNode;
}

export const Button = ({
  chevron,
  size = 'medium',
  orange,
  green,
  light,
  error,
  muted,
  leftArrow,
  rightArrow,
  className,
  children,
  ...props
}: IButtonProps) => (
  <button
    className={clsx(styles.btn, className, 'btn-reset', styles[size], {
      [styles.orange]: orange,
      [styles.green]: green,
      [styles.light]: light,
      [styles.error]: error,
      [styles.muted]: muted,
    })}
    {...props}
  >
    {chevron ? (
      <Icon name="chevron" className={styles.chevronRight} />
    ) : (
      <>
        {leftArrow && <Icon name="chevron" />}
        {children}
        {rightArrow && <Icon name="chevron" className={styles.chevronRight} />}
      </>
    )}
  </button>
);
