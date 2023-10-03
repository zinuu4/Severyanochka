import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { capitalizeFirstLetter } from '@/shared/lib';
import { Icon } from '@/shared/ui/icon';

import { BreadcrumbsItem } from '../lib';

import styles from './styles.module.scss';

interface CrumbProps extends BreadcrumbsItem {
  isLastCrumb: boolean;
}

export const Crumb: React.FC<CrumbProps> = ({ title, path, isLastCrumb }) => {
  const Element = isLastCrumb ? 'div' : Link;

  return (
    <Element href={path} className={styles.wrapper}>
      <p
        className={clsx('text-xs', styles.title, {
          [styles.last]: isLastCrumb,
        })}
      >
        {capitalizeFirstLetter(title)}
      </p>
      {!isLastCrumb && <Icon name="chevron" className={styles.icon} />}
    </Element>
  );
};
