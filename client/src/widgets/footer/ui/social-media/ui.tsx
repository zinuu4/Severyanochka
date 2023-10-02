import Link from 'next/link';
import React from 'react';

import { Icon } from '@/shared/ui';

import { socialMediaItems } from './config';

import styles from './styles.module.scss';

export const SocialMedia = () => (
  <div className={styles.wrapper}>
    {socialMediaItems.map(({ icon, href }) => (
      <Link key={href} href={href} className={styles.item}>
        <Icon name={icon} className={styles.icon} />
      </Link>
    ))}
  </div>
);
