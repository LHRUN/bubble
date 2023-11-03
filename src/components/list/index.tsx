import { Categories, CardList } from '@/common/config';
import { useList } from '@/context/list';
import Card from '@/components/card';
import styles from './index.module.scss';
import DetailModal from '../detailModal';

const List = () => {
  const { data } = useList();

  return (
    <div className={styles.container}>
      {CardList.map((item) => {
        if (
          data.activity === Categories.All ||
          item.category.includes(data.activity)
        ) {
          return (
            <div key={item.name} className={styles.item}>
              <Card data={item} />
            </div>
          );
        }
        return null;
      })}
      <DetailModal />
    </div>
  );
};

export default List;
