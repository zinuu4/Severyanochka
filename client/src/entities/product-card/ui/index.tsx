/* eslint-disable import/order */
import React from 'react';

import { AddToCartButton } from './add-to-cart';
import { ProductInfo } from './info';
import { ProductTop } from './top';

import styles from './styles.module.scss';

export const ProductCard = () => (
  <div className={styles.card}>
    <ProductTop />
    <div className={styles.content}>
      <ProductInfo />
      <AddToCartButton />
    </div>
  </div>
);
