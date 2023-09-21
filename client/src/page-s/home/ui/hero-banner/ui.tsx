import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './styles.module.scss';

export const HeroBanner = () => (
  <section className={styles.banner}>
    <div className={styles.imageWrapper}>
      <Image 
        src="/vegetables-card-banner.png"
        alt="vegetables card"
        sizes="100%"
        fill
        className={styles.image}
      />
    </div>
    <div className={styles.content}>
      <h1 className={clsx('text-s-header', styles.title)}>
        Доставка бесплатно от 1000 ₽
      </h1>
    </div>
  </section>
);
