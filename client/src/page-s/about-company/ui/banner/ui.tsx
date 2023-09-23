import clsx from 'clsx';
import Image from 'next/image';

import { bannerContent } from './config';
import styles from './styles.module.scss';

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerText}>
          <h1 className={clsx('text-xl-header', styles.bannerTitle)}>{bannerContent.bannerTitle}</h1>
          <p className={clsx('text-s-header', styles.bannerDescription)}>{bannerContent.bannerDescription}</p>
        </div>
        <div className={styles.bannerWrapperImage}>
          <Image
            src={bannerContent.bannerImage}
            alt="employees"
            fill
            sizes="100%"
          />
        </div>
      </div>
    </div>
  );
}
