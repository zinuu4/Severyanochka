import clsx from 'clsx';
import React from 'react';

import { Icon, IconName } from '@/shared/ui';

import styles from './styles.module.scss';

interface TooltipProps {
  label: string;
  theme: 'dark' | 'light';
  position?: 'top' | 'right' | 'bottom' | 'left';
  leftIcon?: IconName;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  label,
  theme,
  position = 'top',
  leftIcon,
  className,
}) => {
  const dark = theme === 'dark';
  const light = theme === 'light';
  const themeMods = { [styles.dark]: dark, [styles.light]: light };

  return (
    <label
      className={clsx(styles.label, styles[position], className, themeMods)}
    >
      <div className={clsx(styles.triangle, styles[position], themeMods)} />
      {leftIcon && (
        <Icon name={leftIcon} className={clsx(styles.icon, themeMods)} />
      )}
      <span className={clsx(styles.text, themeMods)}>{label}</span>
    </label>
  );
};
