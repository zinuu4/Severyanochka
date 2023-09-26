import Image from 'next/image';
import React from 'react';

import { Notice } from '@/shared/ui';

import styles from './styles.module.scss';

interface ProductCardHeaderProps {
  AddToFavoritesButton?: React.ReactNode;
  thumbnail: string;
  name: string;
  discounted?: boolean;
  discountPercentage?: number;
}

export const ProductCardHeader: React.FC<ProductCardHeaderProps> = ({
  AddToFavoritesButton,
  name,
  thumbnail,
  discountPercentage,
}) => (
  <div className={styles.field}>
    <div className={styles.imageWrapper}>
      <Image
        src={thumbnail}
        alt={name}
        fill
        sizes="100%"
        className={styles.image}
      />
      {AddToFavoritesButton}
      {discountPercentage && <Notice label={`-${discountPercentage}%`} className={styles.notice} />}
    </div>
  </div>
);
