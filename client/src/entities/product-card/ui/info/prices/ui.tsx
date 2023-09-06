import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.scss';

export const ProductPrices = () => (
  <div className={styles.field}>
    <div className={styles.row}>
      <div className="text-m-bold">44,50 ₽</div>
      <span className={clsx(styles.descr, 'text-xs')}>С картой</span>
    </div>
    <div className={styles.row}>
      <div className={styles.priceCommon}>50,50 ₽</div>
      <span className={clsx(styles.descr, 'text-xs')}>Обычная</span>
    </div>
  </div>
);
