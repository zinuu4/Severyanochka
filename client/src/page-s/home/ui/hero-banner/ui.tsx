import clsx from 'clsx';
import Image from 'next/image';

import { heroBannerContent } from './config';
import styles from './styles.module.scss';

export const HeroBanner = () => (
  <section className={styles.banner}>
    <div className={styles.imageWrapper}>
      <Image
        src={heroBannerContent.heroBannerImage}
        alt="vegetables card"
        sizes="100%"
        fill
        className={styles.image}
      />
    </div>
    <div className={styles.content}>
      <h1 className={clsx('text-s-header', styles.title)}>
        {heroBannerContent.heroBannerTitle}
      </h1>
    </div>
  </section>
);
