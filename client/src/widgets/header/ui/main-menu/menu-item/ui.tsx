import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { Icon } from '@/shared/ui';

import { MenuItem } from '../config';

import styles from './styles.module.scss';

interface MainMenuItemProps extends MenuItem {}

export const MainMenuItem: React.FC<MainMenuItemProps> = ({ icon, text }) => (
  <Link href="/" className={styles.wrapper}>
    <Icon name={icon} className={styles.icon} />
    <div className={clsx(styles.text, 'text-xs')}>{text}</div>
  </Link>
);
