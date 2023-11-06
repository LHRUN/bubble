import { FC, MouseEvent, useMemo } from 'react';
import classNames from 'classnames';

import { ICard } from '@/types/config';
import { LalezarFont } from '@/common/font';
import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';

import Image from 'next/image';
import GreyHeart from '@/assets/image/icons/grey-heart.png';
import SparklingHeart from '@/assets/image/icons/sparkling-heart.png';
import styles from './index.module.scss';

interface IProps {
  data: ICard;
}

const Card: FC<IProps> = ({ data }) => {
  const { data: listData, dispatch } = useList();
  const isLike = useMemo(
    () => listData.likes.includes(data.name),
    [data.name, listData.likes]
  );

  const clickLike = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch({
      type: ACTION_TYPE.UPDATE_LIKES,
      payload: data.name
    });
  };

  const clickCard = () => {
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
          src={isLike ? SparklingHeart : GreyHeart}
          alt="heart"
          width={40}
          height={40}
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
