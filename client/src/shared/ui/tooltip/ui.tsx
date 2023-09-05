import clsx from 'clsx';
import React from 'react';

import { Icon, IconName } from '@/shared/ui';

import styles from './styles.module.scss';

interface ToolTipProps {
  label: string;
  theme: 'dark' | 'light';
  position: 'top' | 'right' | 'bottom' | 'left';
  leftIcon?: IconName;
}

export const ToolTip: React.FC<ToolTipProps> = ({
  label,
  theme,
  position,
  leftIcon,
}) => {
  const dark = theme === 'dark';
  const light = theme === 'light';

  return (
    <label
      className={clsx(styles.label, styles[position], {
        [styles.dark]: dark,
        [styles.light]: light,
      })}
    >
      <div
        className={clsx(styles.triangle, styles[position], {
          [styles.dark]: dark,
          [styles.light]: light,
        })}
      />
      {leftIcon && (
        <Icon
          name={leftIcon}
          className={clsx(styles.icon, {
            [styles.dark]: dark,
            [styles.light]: light,
          })}
        />
      )}
      <span
        className={clsx(styles.text, {
          [styles.dark]: dark,
          [styles.light]: light,
        })}
      >
        {label}
      </span>
    </label>
  );
};
