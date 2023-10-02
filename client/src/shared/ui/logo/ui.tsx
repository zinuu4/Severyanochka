import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

interface LogoProps {
  type: 'text-right' | 'text-bottom' | 'text-rounded' | 'no-text';
  wrapperClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ type, wrapperClassName }) => {
  const src = `/logo/logo-${type}.png`;

  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      <Image src={src} alt="Logo" fill sizes="100%" />
    </div>
  );
};
