import React from 'react';
import clsx from 'clsx';

import { Rating } from '@/shared/ui';

import { ProductPrices } from './prices';

import styles from './styles.module.scss';

interface ProductCardInfoProps {
  price: number;
  bonusAmount: number;
  discountedPrice?: number;
  discounted?: boolean;
  rating: number;
}

export const ProductCardInfo: React.FC<ProductCardInfoProps> = ({
  bonusAmount,
  discountedPrice,
  discounted,
  price,
  rating
}) => (
  <>
    <ProductPrices 
      cardBonus={discounted} 
      bonusAmount={bonusAmount}
      price={price}
      discountedPrice={discountedPrice}
    />
    <div className={clsx('text-s', styles.name)}>Чипсы Lays</div>
    <Rating size="small" rating={rating} />
  </>
);
