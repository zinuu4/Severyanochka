import { IconName } from '@/shared/ui';

export interface socialMediaItem {
  icon: IconName;
  href: string;
}

export const socialMediaItems: socialMediaItem[] = [
  { icon: 'instagram', href: '/1' },
  { icon: 'vkontakte', href: '/2' },
  { icon: 'facebook', href: '/3' },
  { icon: 'odnoklassniki', href: '/4' },
];
