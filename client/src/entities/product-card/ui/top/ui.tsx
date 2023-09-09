import Image from 'next/image';
import React from 'react';

import { Notice } from '@/shared/ui';

import styles from './styles.module.scss';

interface ProductCardHeaderProps {
  AddToFavoritesButton?: React.ReactNode;
}

export const ProductCardHeader: React.FC<ProductCardHeaderProps> = ({
  AddToFavoritesButton,
}) => (
  <div className={styles.field}>
    <div className={styles.imageWrapper}>
      <Image
        src="/lays.png"
        alt="Product image"
        fill
        sizes="100%"
        className={styles.image}
      />
      {AddToFavoritesButton}
      <Notice label="-50%" className={styles.notice} />
    </div>
  </div>
);
