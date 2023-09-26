/* eslint-disable import/order */
import Link from 'next/link';
import React from 'react';

import { Product } from '@/shared/types';

import { ProductCardInfo } from './info';
import { ProductCardHeader } from './top';

import styles from './styles.module.scss';

interface ProductCardProps {
  AddToCartButton?: React.ReactNode;
  AddToFavoritesButton?: React.ReactNode;
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  AddToCartButton,
  AddToFavoritesButton,
  product,
}) => (
  <Link href="/" className={styles.card}>
    <ProductCardHeader 
      AddToFavoritesButton={AddToFavoritesButton} 
      name={product.name}
      thumbnail={product.images?.[0].url}
      discountPercentage={product.discountPercentage}
      discounted={product.discounted}
    />
    <div className={styles.content}>
      <ProductCardInfo 
        bonusAmount={product.bonusAmount}
        price={product.price}
        rating={product.reviewsSummary.finalEvaluation}
        discounted={product.discounted}
        discountedPrice={product.discountedPrice}
      />
      <div className={styles.cartContainer}>
        {AddToCartButton}
      </div>
    </div>
  </Link>
);
