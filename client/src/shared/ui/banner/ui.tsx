import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { bannerContent } from './config';

import styles from './styles.module.scss';

interface BannerProps {
  type: 'loyaltyCard' | 'promotion';
}

export const Banner: React.FC<BannerProps> = ({ type }) => (
  <Link
    href={bannerContent[`${type}Link`]}
    className={clsx(styles.banner, styles[type])}
  >
    <div className={styles.content}>
      <h6 className={clsx('text-s-header', styles.title)}>
        {bannerContent[`${type}Title`]}
      </h6>
      <p>{bannerContent[`${type}Text`]}</p>
    </div>
    <div className={styles.imageWrapper}>
      <Image
        src={bannerContent[`${type}Image`]}
        alt="loyalty-card"
        className={styles.image}
        objectFit="contain"
        layout="fill"
      />
    </div>
  </Link>
);
