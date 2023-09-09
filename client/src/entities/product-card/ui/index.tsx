/* eslint-disable import/order */
import Link from 'next/link';
import React from 'react';

import { ProductCardInfo } from './info';
import { ProductCardHeader } from './top';

import styles from './styles.module.scss';

interface ProductCardProps {
  AddToCartButton?: React.ReactNode;
  AddToFavoritesButton?: React.ReactNode;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  AddToCartButton,
  AddToFavoritesButton,
}) => (
  <Link href="/" className={styles.card}>
    <ProductCardHeader AddToFavoritesButton={AddToFavoritesButton} />
    <div className={styles.content}>
      <ProductCardInfo />
      {AddToCartButton}
    </div>
  </Link>
);
