import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.scss';

interface ProductPricesProps {
  cardBonus?: boolean;
}

export const ProductPrices: React.FC<ProductPricesProps> = ({ cardBonus }) => (
  <div className={styles.field}>
    {cardBonus && (
      <div className={styles.row}>
        <div className="text-m-bold">44,50 ₽</div>
        <span className={clsx(styles.descr, 'text-xs')}>С картой</span>
      </div>
    )}
    <div className={styles.row}>
      <div className={styles.priceCommon}>50,50 ₽</div>
      {cardBonus && (
        <span className={clsx(styles.descr, 'text-xs')}>Обычная</span>
      )}
    </div>
  </div>
);
