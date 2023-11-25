import ComponentCard from '@/components/componentCard';
import List from '@/components/basic/list';

import { useList } from '@/context/list';
import useSWR from 'swr';
import { get } from '@/services';
import { IComponent } from '@/types/config';

import styles from './index.module.scss';

const ComponentList = () => {
  const { data } = useList();
  const {
    data: listData,
    isLoading,
    error
  } = useSWR<IComponent[]>(
    `/api/component/list?categoryId=${data.categoryActivity}`,
    get
  );

  return (
    <List
      isLoading={isLoading}
      error={error}
      listLength={listData?.length ?? 0}
    >
      <div className={styles.container}>
        {listData?.length
          ? listData?.map((item) => (
              <div key={item.id} className={styles.item}>
                <ComponentCard data={item} />
              </div>
            ))
          : null}
      </div>
    </List>
  );
};

export default ComponentList;
