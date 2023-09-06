'use client';

import clsx from 'clsx';
import React, { forwardRef, useState } from 'react';

import { ReactTagProps } from '@/shared/types';
import { Icon, IconName } from '@/shared/ui';

import styles from './styles.module.scss';

interface InputProps extends ReactTagProps<'input'> {
  inputClassName?: string;
  rightBtn?: IconName;
  disabled?: boolean;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputClassName, rightBtn, disabled, label, value, ...props }, ref) => {
    const [isFocus, setIsFocus] = useState(false);

    const handleOnBlur = () => {
      if (value === '') {
        setIsFocus(false);
      }
    };

    return (
      <>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.field}>
          <input
            ref={ref}
            value={value}
            onBlur={handleOnBlur}
            className={clsx(
              'input-reset',
              'text-s',
              styles.input,
              inputClassName,
              isFocus && styles.isFocus,
              disabled && styles.disabled,
            )}
            onFocus={() => setIsFocus(true)}
            {...props}
          />
          {rightBtn && (
            <button
              className={clsx('btn-reset', styles.btn, value && styles.visible)}
              type="button"
            >
              <Icon name={rightBtn} />
            </button>
          )}
        </div>
      </>
    );
  },
);
