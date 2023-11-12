import { FC, MouseEvent, useMemo } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import GreyHeart from '@/assets/image/icons/grey-heart.png';
import SparklingHeart from '@/assets/image/icons/sparkling-heart.png';
import { IComponentCard } from '@/types/config';
import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';

import styles from './index.module.scss';

interface IProps {
  data: IComponentCard;
  className?: string;
}

const Love: FC<IProps> = ({ data, className }) => {
  const { data: listData, dispatch } = useList();
  const isLike = useMemo(
    () => listData.likes.includes(data.name),
    [data.name, listData.likes]
  );

  const clickLove = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch({
      type: ACTION_TYPE.UPDATE_LIKES,
      payload: data.name
    });
  };

  return (
    <div className={classNames(styles.love, className)} onClick={clickLove}>
      <Image
        className={styles.loveIcon}
        src={isLike ? SparklingHeart : GreyHeart}
        alt="like"
        width={40}
        height={40}
        loading="lazy"
      />
    </div>
  );
};

export default Love;
