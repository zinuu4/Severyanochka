import { IconName } from '@/shared/ui';

export interface MenuItem {
  icon: IconName;
  label: string;
}

export const menuItems: MenuItem[] = [
  { icon: 'heart', label: 'Избранное' },
  { icon: 'package', label: 'Заказы' },
  { icon: 'shopping-cart', label: 'Корзина' },
];
