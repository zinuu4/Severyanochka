'use client';

import clsx from 'clsx';
import React, { forwardRef, useState } from 'react';

import { ReactTagProps } from '@/shared/types';

import styles from './styles.module.scss';

interface InputProps extends ReactTagProps<'input'> {
  inputClassName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RightElement?: React.JSXElementConstructor<any>;
  rightElemOnlyIfValue?: boolean;
  disabled?: boolean;
  label?: string;
}

export const INPUT_TEST_IDS = {
  INPUT: 'input',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputClassName,
      RightElement,
      rightElemOnlyIfValue,
      disabled,
      label,
      value,
      ...props
    },
    ref,
  ) => {
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
            data-testid={INPUT_TEST_IDS.INPUT}
            className={clsx(
              'input-reset',
              'text-s',
              styles.input,
              [inputClassName],
              {
                [styles.isFocus]: isFocus,
                [styles.disabled]: disabled,
              },
            )}
            onFocus={() => setIsFocus(true)}
            {...props}
          />
          {RightElement && (rightElemOnlyIfValue ? value !== '' : true) && (
            <RightElement />
          )}
        </div>
      </>
    );
  },
);
