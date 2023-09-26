import React from 'react';
import Link from 'next/link';

import { Product, ProductType } from '@/shared/types';

import { ProductsList } from '@/entities/product/ui';
import { ProductCardWithActions } from '@/widgets/product-card-with-actions';

import { Icon } from '@/shared/ui';

import styles from './styles.module.scss';

type Params = {
  limit: number;
}

interface CategoriesListItemProps {
  title: string;
  subtitle: string;
  endpoint: ProductType;
  params: Params;
}

export const CategoriesListItem: React.FC<CategoriesListItemProps> = async ({
  title,
  subtitle,
  endpoint,
  params,
}) => {
  const data = await getCategoryProducts(endpoint, params);

  return (
    <div className={styles.container}>
      <div className={styles.categoryTitle}>
        <h3 className={styles.title}>{title}</h3>
        <Link href='/'>
          <div className={styles.subtitleChevron}>
            <span>{subtitle}</span>
            <Icon name='chevron' className={styles.chevron} />
          </div>
        </Link>
      </div>
      <ProductsList 
        renderProducts={(product: Product) => <ProductCardWithActions product={product} key={product.id} />}
        error={null}
        isLoading={false}
        isError={false}
        products={data}
        />
    </div>
  )
}

async function getCategoryProducts(endpoint: string, params: Params) {
  await new Promise(res => setTimeout(res,  1000));

  const mockData: Product[] = new Array(4).fill(0).map((_, index) => (
    {
      article: 371431, // amount of product
      available: true,
      bonusAmount: 100,
      category: { name: 'Молоко, Сыр, Яйцо' },
      createdAt: new Date(),
      updatedAt: new Date(),
      id: `some-random-product-${index}`,
      images: [{ url: '/lays.png' }],
      info: {
        brand: 'Idonktoe',
        manufacturerCountry: 'someone',
        weight: '180 g'
      },
      name: 'Idontknow ' + index,
      price: 12121,
      reviews: [{
        id: '0-dusaojsdvj',
        user: {
          createdAt: new Date(),
          email: 'idk@gmail.com',
          id: 'some-stenage',
          isEmailVerified: true,
          name: 'idk',
          role: 'user',
          updatedAt: new Date(),
        },
        score: 2,
        text: 'text',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      reviewsSummary: {
        finalEvaluation: 5,
        fivePointsQuantity: 3,
        fourPointsQuantity: 4,
        onePointsQuantity: 2,
        threePointsQuantity: 4,
        totalReviewsQuantity: 4,
        twoPointsQuantity: 4,
      },
      discounted: true,
      discountedPrice: 45,
      discountPercentage: 12,
      subCategory: ['sjbigf'],
    }
  ));

  return mockData;
}
