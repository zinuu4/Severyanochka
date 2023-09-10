import clsx from 'clsx';
import React from 'react';

import { productColumns } from '../config';

import styles from './styles.module.scss';

interface CatalogMenuProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

export const CatalogMenu: React.FC<CatalogMenuProps> = ({
  isOpen,
  setIsOpen,
}) => (
  <div
    className={clsx(styles.menu, {
      [styles.open]: isOpen,
    })}
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
  >
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
