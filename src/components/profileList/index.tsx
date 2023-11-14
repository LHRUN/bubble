import { ProfileCardList } from '@/common/profiles';
import styles from './index.module.scss';
import ProfileCard from '@/components/profileCard';
import { useList } from '@/context/list';
import { useMemo } from 'react';

const pageSize = 20;

const ProfileList = () => {
  const { data } = useList();
  const list = useMemo(
    () =>
      ProfileCardList.slice(
        data.currentPage * pageSize,
        (data.currentPage + 1) * pageSize
      ),
    [data.currentPage]
  );

  return (
    <>
      <div className={styles.list}>
        {list.map((item, index) => (
          <ProfileCard data={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default ProfileList;
