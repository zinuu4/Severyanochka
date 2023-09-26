import clsx from 'clsx';
import React from 'react';

import { getPriceWithBonus } from '@/shared/lib/utils/price';

import styles from './styles.module.scss';

interface ProductPricesProps {
  price: number;
  bonusAmount: number;
  cardBonus?: boolean;
  discountedPrice?: number;
}

export const ProductPrices: React.FC<ProductPricesProps> = ({ 
  cardBonus,
  bonusAmount,
  price,
  discountedPrice,
}) => {
  const endPrice = discountedPrice ?? price;

  return (
    <div className={styles.field}>
      {cardBonus && (
        <div className={styles.row}>
          <div className="text-m-bold">{getPriceWithBonus(endPrice, bonusAmount)} ₽</div>
          <span className={clsx(styles.descr, 'text-xs')}>С картой</span>
        </div>
      )}
      <div className={styles.row}>
        <div className={clsx(styles.priceCommon, !cardBonus && "text-m-bold")}>{endPrice} ₽</div>
        {cardBonus && (
          <span className={clsx(styles.descr, 'text-xs')}>Обычная</span>
        )}
      </div>
    </div>
  )
};
