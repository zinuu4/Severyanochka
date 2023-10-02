import { IconName } from '@/shared/ui';

export interface MenuItem {
  icon: IconName;
  text: string;
}

export const menuItems: MenuItem[] = [
  { icon: 'heart', text: 'Избранное' },
  { icon: 'package', text: 'Заказы' },
  { icon: 'shopping-cart', text: 'Корзина' },
];
