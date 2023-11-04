import BadgeReact from '@/assets/image/preview/badge-react.svg';
import BadgeTS from '@/assets/image/preview/badge-ts.svg';
import Image from 'next/image';
import styles from './index.module.scss';

const BadgesPreview = () => {
  return (
    <div className={styles.badge}>
      <Image className={styles.image} src={BadgeReact} alt="badge-react" />
      <Image className={styles.image} src={BadgeTS} alt="badge-ts" />
    </div>
  );
};

export default BadgesPreview;
