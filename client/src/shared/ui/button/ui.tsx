import clsx from 'clsx';
import React, { ReactNode, ElementType } from 'react';

import { ReactTagProps } from '@/shared/types';
import { Icon, IconName } from '@/shared/ui';

import styles from './styles.module.scss';

interface ButtonProps extends ReactTagProps<'button'> {
  as?: ElementType;
  href?: string;
  onlyIcon?: IconName;
  size?: 'large' | 'medium' | 'small';
  accent?: 'primary' | 'secondary' | 'grayscale' | 'error';
  outlined?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  className?: string;
  children?: ReactNode;
}

const DEFAULT_ELEMENT: ElementType = 'button';

export const Button: React.FC<ButtonProps> = ({
  as,
  href,
  onlyIcon,
  size = 'medium',
  accent = 'primary',
  outlined,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}) => {
  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element
      className={clsx(
        styles.btn,
        className,
        'btn-reset',
        styles[size],
        styles[accent],
        outlined && styles.outline,
      )}
      href={href}
      {...props}
    >
      {onlyIcon ? (
        <Icon name={onlyIcon} />
      ) : (
        <>
          {leftIcon && <Icon name={leftIcon} />}
          {children}
          {rightIcon && <Icon name={rightIcon} />}
        </>
      )}
    </Element>
  );
};
