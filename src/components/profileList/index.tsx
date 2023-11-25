import ProfileCard from '@/components/profileCard';
import List from '@/components/basic/list';

import { useList } from '@/context/list';
import useSWR from 'swr';
import { get } from '@/services';
import { PROFILE_PAGE_SIZE } from '@/common/config';
import { IProfile } from '@/types/config';

import styles from './index.module.scss';

const ProfileList = () => {
  const { data } = useList();
  const {
    data: listData,
    isLoading,
    error
  } = useSWR<IProfile[]>(
    `/api/profile/list?pageNum=${data.currentPage}&pageSize=${PROFILE_PAGE_SIZE}`,
    get
  );

  return (
    <List
      isLoading={isLoading}
      error={error}
      listLength={listData?.length ?? 0}
    >
      <div className={styles.list}>
        {listData?.length
          ? listData?.map((item, index) => (
              <ProfileCard data={item} key={index} />
            ))
          : null}
      </div>
    </List>
  );
};

export default ProfileList;
