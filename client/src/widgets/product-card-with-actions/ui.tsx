import React from 'react';

import { AddToCartButton } from '@/features/add-to-cart';
import { AddToFavoritesButton } from '@/features/add-to-favorites';

import { ProductCard } from '@/entities/product-card';

import styles from './styles.module.scss';

export const ProductCardWithActions = () => (
  <ProductCard
    AddToCartButton={<AddToCartButton />}
    AddToFavoritesButton={
      <AddToFavoritesButton className={styles.favoriteButton} />
    }
  />
);
