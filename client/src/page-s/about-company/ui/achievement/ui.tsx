import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

type AchievementProps = {
  title: string
  description: string
}

export const Achievement: React.FC<AchievementProps> = ({ title, description }) => (
  <div className={styles.achievement}>
    <Image
      src="icons/interactive-check-mark.svg"
      alt="interactive check mark"
      width={30}
      height={30}
      style={{ marginRight: '10px' }}
    />
    <div className={styles.achievementText}>
      <p className={styles.achievementTitle}>{title}</p>
      <p className={clsx('text-l-bold', styles.achievementDescription)}>{description}</p>
    </div>
  </div>
);
