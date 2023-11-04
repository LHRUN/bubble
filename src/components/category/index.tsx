import Image from 'next/image';
import { Categories } from '@/common/config';
import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';
import styles from './index.module.scss';
import classNames from 'classnames';
import { LalezarFont } from '@/common/font';
import GreyHeart from '@/assets/image/icons/grey-heart.png';
import SparklingHeart from '@/assets/image/icons/sparkling-heart.png';

const Category = () => {
  const { data, dispatch } = useList();
  const clickItem = (item: string) => {
    dispatch({
      type: ACTION_TYPE.CHANGE_ACTIVITY,
      payload: item
    });
  };

  return (
    <div className={styles.container}>
      {Object.values(Categories).map((item) => (
        <div
          className={classNames({
            [styles.item]: true,
            [styles.item_activity]: item === data.activity,
            [LalezarFont.className]: true
          })}
          key={item}
          onClick={() => clickItem(item)}
        >
          {item}
        </div>
      ))}
      <div onClick={() => clickItem('like')} className={styles.like}>
        <Image
          className={styles.likeIcon}
          src={data.activity === 'like' ? SparklingHeart : GreyHeart}
          alt="heart"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default Category;
