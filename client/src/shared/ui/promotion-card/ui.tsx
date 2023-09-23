import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { promotionCardContent } from './config';

import styles from './styles.module.scss';

interface PromotionCardProps {
  type: 'loyaltyCard' | 'promotion';
}

export const PromotionCard: React.FC<PromotionCardProps> = ({ type }) => (
  <Link
    href={promotionCardContent[`${type}Link`]}
    className={clsx(styles.promotionCard, styles[type])}
  >
    <div className={styles.content}>
      <h6 className={clsx('text-s-header', styles.title)}>
        {promotionCardContent[`${type}Title`]}
      </h6>
      <p>{promotionCardContent[`${type}Text`]}</p>
    </div>
    <div className={styles.imageWrapper}>
      <Image
        src={promotionCardContent[`${type}Image`]}
        alt="loyalty-card"
        className={styles.image}
        objectFit="contain"
        layout="fill"
      />
    </div>
  </Link>
);
