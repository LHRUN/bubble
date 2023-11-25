import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';
import { LalezarFont } from '@/common/font';
import useSWR from 'swr';
import { get } from '@/services';
import { IComponentCategory } from '@/types/config';

import classNames from 'classnames';
import styles from './index.module.scss';

const Category = () => {
  const { data, dispatch } = useList();
  const { data: categoryData } = useSWR<IComponentCategory[]>(
    `/api/component/category/list`,
    get
  );
  const clickItem = (id: string) => {
    dispatch({
      type: ACTION_TYPE.CHANGE_ACTIVITY,
      payload: id
    });
  };

  return (
    <div className={styles.container}>
      <div
        className={classNames({
          [styles.item]: true,
          [styles.item_activity]: data.categoryActivity === '',
          [LalezarFont.className]: true
        })}
        onClick={() => clickItem('')}
      >
        ALL
      </div>
      {categoryData?.length
        ? categoryData?.map((item) => (
            <div
              className={classNames({
                [styles.item]: true,
                [styles.item_activity]: item.id === data.categoryActivity,
                [LalezarFont.className]: true
              })}
              key={item.id}
              onClick={() => clickItem(item.id)}
            >
              {item.name}
            </div>
          ))
        : null}
    </div>
  );
};

export default Category;
