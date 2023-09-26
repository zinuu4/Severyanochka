import { ProductType } from '@/shared/types';

const LIMIT = 4;
export const productCategories = [
  {
    title: 'Акции',
    subtitle: 'Все акции',
    endpoint: ProductType.Discount,
    params: { limit: LIMIT },
  },
  {
    title: 'Новинки',
    subtitle: 'Все новинки',
    endpoint: ProductType.Novelties,
    params: { limit: LIMIT },
  },
  {
    title: 'Покупали раньше',
    subtitle: 'Все покупки',
    endpoint: ProductType.BoughtBefore,
    params: { limit: LIMIT },
  },
];