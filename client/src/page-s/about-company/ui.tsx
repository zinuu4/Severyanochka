import styles from './styles.module.scss';
import { Achievement } from './ui/achievement';
import { achievementsContent } from './ui/achievement/config';
import { Banner } from './ui/banner';
import { Gratitude } from './ui/gratitude';

export function AboutCompanyPage() {
  return (
    <div className={styles.aboutCompany}>
      <Banner />
      <div className={styles.achievements}>
        <div className={styles.achievementsList}>
          {achievementsContent.map(
            ({ title, description }) => <Achievement key={title} title={title} description={description} />,
          )}
        </div>
      </div>
      <div className={styles.gratitudeMessage}>
        <Gratitude />
      </div>
    </div>
  );
}
