import clsx from 'clsx';
import React from 'react';

import { Rating } from '@/shared/ui';

import { ProductPrices } from './prices';

import styles from './styles.module.scss';

export const ProductInfo = () => (
  <>
    <ProductPrices />
    <div className={clsx('text-s', styles.name)}>Чипсы Lays</div>
    <Rating size="small" rating={4} />
  </>
);
