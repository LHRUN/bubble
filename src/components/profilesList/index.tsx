import { ProfileCardList } from '@/common/profiles';
import Image from 'next/image';
import styles from './index.module.scss';
import classNames from 'classnames';
import { PoppinsFont } from '@/common/font';

const ProfilesList = () => {
  return (
    <div className={styles.list}>
      {ProfileCardList.map((item, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.bg}></div>
          <div className={styles.header}>
            <div className={styles.name}>{item.name}</div>
            <div className={classNames(styles.time, PoppinsFont.className)}>
              Snapshot Time:{' '}
              <span className={styles.timeText}>{item.snapshootTime}</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={item.imageUrl}
              alt={item.name}
              width={300}
              height={500}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilesList;
