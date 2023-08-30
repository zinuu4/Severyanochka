import clsx from 'clsx';
import React from 'react';

import {
  firstColumnProducts,
  secondColumnProducts,
  thirdColumnProducts,
  fourthColumnProducts,
} from '../config';

import styles from './styles.module.scss';

export const CatalogMenu = () => (
  <div className={clsx(styles.menu, 'catalog-menu')}>
    <div className={styles.row}>
      {firstColumnProducts.map((product) => (
        <button key={product} className={clsx('btn-reset', styles.item)}>
          {product}
        </button>
      ))}
    </div>
    <div className={styles.row}>
      {secondColumnProducts.map((product) => (
        <button key={product} className={clsx('btn-reset', styles.item)}>
          {product}
        </button>
      ))}
    </div>
    <div className={styles.row}>
      {thirdColumnProducts.map((product) => (
        <button key={product} className={clsx('btn-reset', styles.item)}>
          {product}
        </button>
      ))}
    </div>
    <div className={styles.row}>
      {fourthColumnProducts.map((product) => (
        <button key={product} className={clsx('btn-reset', styles.item)}>
          {product}
        </button>
      ))}
    </div>
  </div>
);
