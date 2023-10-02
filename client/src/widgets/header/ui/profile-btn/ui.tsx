import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Icon } from '@/shared/ui';

import styles from './styles.module.scss';

export const ProfileButton = () => (
  <div className={styles.wrapper}>
    <button className={clsx(styles.profileButton, 'btn-reset')}>
      <Image
        src="/avatar.png"
        alt="Avatar"
        fill
        sizes="100%"
        className={styles.avatar}
      />
    </button>
    <span className={styles.name}>Алексей</span>
    <button className="btn-reset">
      <Icon name="chevron" className={styles.chevron} />
    </button>
  </div>
);
