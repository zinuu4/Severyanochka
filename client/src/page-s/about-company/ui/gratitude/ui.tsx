import clsx from 'clsx';
import Image from 'next/image';

import { gratitudeContent } from './config';
import styles from './styles.module.scss';

export const Gratitude = () => (
  <div className={styles.gratitude}>
    <Image
      src={gratitudeContent.image}
      alt="gratitude"
      width={127}
      height={103}
    />
    <div className={styles.wrapperContent}>
      <div className={clsx('text-l-bold', styles.content)}>
        {gratitudeContent.text}
      </div>
    </div>
  </div>
);
