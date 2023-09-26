import React from 'react'

import { Product } from '@/shared/types'

import styles from './styles.module.scss';

interface ProductsListProps {
  isLoading: boolean;
  isError: boolean;
  products: Product[];
  error: { message: string } | null;
  renderProducts: (product: Product) => React.ReactNode;
}

export const ProductsList: React.FC<ProductsListProps> = ({
  isLoading,
  isError,
  products,
  error,
  renderProducts,
}) => {
  return (
    <div className={styles.container}>
      {isLoading && <div>Loading...</div>}

      {isError && <div>{error?.message}</div>}

      <div className={styles.list}>
        {products.map(renderProducts)}
      </div>
    </div>
  )
}