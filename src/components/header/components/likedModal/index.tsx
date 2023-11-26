import { FC, useMemo } from 'react';
import { get } from '@/services';
import { IProfile, IComponent } from '@/types/config';
import useSWR from 'swr';

import Modal from '@/components/basic/modal';
import ProfileCard from '@/components/profileCard';
import ComponentCard from '@/components/componentCard';
import List from '@/components/basic/list';

import styles from './index.module.scss';

interface IProps {
  visible: boolean;
  changeVisible: (visible: boolean) => void;
  type: string;
}

const LikeModal: FC<IProps> = ({ type, visible, changeVisible }) => {
  const { data, isLoading, error } = useSWR<
    {
      profile: IProfile;
      component: IComponent;
    }[]
  >(`/api/user/liked/detail?type=${type}`, get);

  const listData = useMemo(() => {
    switch (type) {
      case 'profile':
        return data?.map((item) => item?.profile) ?? [];
      case 'component':
        return data?.map((item) => item?.component) ?? [];
      default:
        return [];
    }
  }, [data, type]);

  return (
    <Modal visible={visible} changeVisible={changeVisible}>
      <div
        className={styles.container}
        style={{
          backgroundColor: type === 'component' ? '#2C3333' : '#395B64'
        }}
      >
        <List
          isLoading={isLoading}
          error={error}
          listLength={listData?.length ?? 0}
        >
          {listData?.map((item, index: number) => {
            if (type === 'profile') {
              return (
                <ProfileCard
                  data={item as IProfile}
                  key={index}
                  showLike={false}
                />
              );
            } else if (type === 'component') {
              return (
                <div className={styles.item} key={index}>
                  <ComponentCard data={item as IComponent} showLike={false} />
                </div>
              );
            }
            return null;
          })}
        </List>
      </div>
    </Modal>
  );
};

export default LikeModal;
