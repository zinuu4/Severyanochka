import clsx from 'clsx';
import React from 'react';

import { Icon, IconName } from '@/shared/ui';

import styles from './styles.module.scss';

interface NoticeProps {
  size?: 'small' | 'medium';
  accent?: 'primary' | 'secondary' | 'grayscale' | 'success' | 'error';
  label: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  className?: string;
}

export const Notice: React.FC<NoticeProps> = ({
  size = 'medium',
  accent = 'primary',
  label,
  leftIcon,
  rightIcon,
  className,
}) => {
  const small = size === 'small';
  return (
    <div
      className={clsx(styles.notice, styles[size], styles[accent], className)}
    >
      {leftIcon && <Icon name={leftIcon} className={styles.icon} />}
      <span
        className={clsx(styles.text, {
          'text-xs': small,
        })}
      >
        {label}
      </span>
      {rightIcon && (
        <Icon name={rightIcon} className={clsx(styles.icon, styles[size])} />
      )}
    </div>
  );
};
