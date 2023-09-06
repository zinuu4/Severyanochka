import Image from 'next/image';
import React from 'react';

import { AddToFavoritesButton } from '@/features/add-to-favorites';
import { Notice } from '@/shared/ui';

import styles from './styles.module.scss';

export const ProductTop = () => (
  <div className={styles.field}>
    <div className={styles.imageWrapper}>
      <Image
        src="/lays.png"
        alt="Product image"
        fill
        sizes="100%"
        className={styles.image}
      />
      <AddToFavoritesButton className={styles.favoriteButton} />
      <Notice label="-50%" className={styles.notice} />
    </div>
  </div>
);
