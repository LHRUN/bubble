import { Categories, CardList } from '@/common/config';
import { useList } from '@/context/list';
import Card from '@/components/card';
import styles from './index.module.scss';
import DetailModal from '../detailModal';
import { useMemo } from 'react';

const List = () => {
  const { data } = useList();
  const listData = useMemo(() => {
    return CardList.filter((item) => {
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
            <Card data={item} />
          </div>
        ))
      ) : (
        <div className={styles.empty}>empty</div>
      )}
      <DetailModal />
    </div>
  );
};

export default List;
