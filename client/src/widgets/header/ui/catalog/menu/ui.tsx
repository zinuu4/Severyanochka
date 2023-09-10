import clsx from 'clsx';
import React from 'react';

import { productColumns } from '../config';

import styles from './styles.module.scss';

export const CatalogMenu = () => (
  <div className={clsx(styles.menu, 'catalog-menu')}>
    {productColumns.map((column, columnIndex) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={columnIndex} className={styles.row}>
        {column.map((product) => (
          <button key={product} className={clsx('btn-reset', styles.item)}>
            {product}
          </button>
        ))}
      </div>
    ))}
  </div>
);
