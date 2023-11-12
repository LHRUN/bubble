import { ProfileCardList } from '@/common/profiles';
import styles from './index.module.scss';
import ProfileCard from '@/components/profileCard';

const ProfileList = () => {
  return (
    <div className={styles.list}>
      {ProfileCardList.map((item, index) => (
        <ProfileCard data={item} key={index} />
      ))}
    </div>
  );
};

export default ProfileList;
