import { Categories, ComponentCardList } from '@/common/components';
import { useList } from '@/context/list';
import ComponentCard from '@/components/componentCard';
import styles from './index.module.scss';
import DetailModal from '../detailModal';
import { useMemo } from 'react';

const ComponentList = () => {
  const { data } = useList();
  const listData = useMemo(() => {
    return ComponentCardList.filter((item) => {
      return (
        data.categoryActivity === Categories.All ||
        item.category.includes(data.categoryActivity) ||
        (data.categoryActivity === 'like' && data.likes.includes(item.name))
      );
    });
  }, [data.categoryActivity, data.likes]);

  return (
    <div className={styles.container}>
      {listData.length ? (
        listData.map((item) => (
          <div key={item.name} className={styles.item}>
            <ComponentCard data={item} />
          </div>
        ))
      ) : (
        <div className={styles.empty}>empty</div>
      )}
      <DetailModal />
    </div>
  );
};

export default ComponentList;