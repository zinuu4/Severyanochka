import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/shared/ui/icon';

import styles from './styles.module.scss';

interface BreadcrumbsItemProps {
  title: string;
}

export const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = ({ title }) => {
  const active = false;

  return (
    <div className={styles.wrapper}>
      <p className={clsx('text-xs', styles.title, { [styles.active]: active })}>
        {title}
      </p>
      {!active && <Icon name="chevron" className={styles.icon} />}
    </div>
  );
};
