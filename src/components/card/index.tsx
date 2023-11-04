import Image from 'next/image';
import { ICard } from '@/types/config';
import { FC, MouseEvent, useState } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { LalezarFont } from '@/common/font';
import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';
import GreyHeart from '@/assets/image/icons/grey-heart.png';
import SparklingHeart from '@/assets/image/icons/sparkling-heart.png';

interface IProps {
  data: ICard;
}

const Card: FC<IProps> = ({ data }) => {
  const [like, changeLike] = useState(false);
  const { dispatch } = useList();

  const clickLike = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    changeLike(!like);
  };

  const clickCard = () => {
    console.log('clickCard');
    dispatch({
      type: ACTION_TYPE.SHOW_MODAL,
      payload: data
    });
  };
  return (
    <div onClick={() => clickCard()} className={styles.card}>
      <div className={styles.background}></div>
      <div className={styles.like} onClick={clickLike}>
        <Image
          className={styles.likeIcon}
          src={like ? SparklingHeart : GreyHeart}
          alt="heart"
          width={25}
          height={25}
          loading="lazy"
        />
      </div>
      <div className={styles.main}>
        <div className={styles.preview}>
          {data?.previewComponent ? (
            data.previewComponent()
          ) : (
            <Image
              className={styles.image}
              src={data?.previewImage ?? ''}
              alt={data.name}
              loading="lazy"
              width={300}
              height={240}
            />
          )}
        </div>
        <div className={classNames(styles.name, LalezarFont.className)}>
          {data.name}
        </div>
      </div>
    </div>
  );
};

export default Card;
