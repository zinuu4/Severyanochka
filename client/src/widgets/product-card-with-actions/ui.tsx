import React from 'react';

import { AddToCartButton } from '@/features/add-to-cart';
import { AddToFavoritesButton } from '@/features/add-to-favorites';

import { ProductCard } from '@/entities/product/ui';
import { Product } from '@/shared/types';

import styles from './styles.module.scss';

interface ProductCardWithActionsProps {
  product: Product;
}

export const ProductCardWithActions: React.FC<ProductCardWithActionsProps> = ({ product }) => (
  <ProductCard
    product={product}
    AddToCartButton={<AddToCartButton />}
    AddToFavoritesButton={
      <AddToFavoritesButton className={styles.favoriteButton} />
    }
  />
);
