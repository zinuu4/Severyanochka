import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { footerMenuItem } from '../config';

import styles from './styles.module.scss';

interface FooterMenuItemProps extends footerMenuItem {}

export const FooterMenuItem: React.FC<FooterMenuItemProps> = ({
  label,
  href,
}) => (
  <Link href={href} className={clsx(styles.item, 'text-xs')}>
    {label}
  </Link>
);
