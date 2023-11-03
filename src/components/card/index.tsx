import Image from 'next/image';
import { ICard } from '@/types/config';
import { FC } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { LalezarFont } from '@/common/font';
import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';

interface IProps {
  data: ICard;
}

const Card: FC<IProps> = ({ data }) => {
  const { dispatch } = useList();

  const clickCard = () => {
    console.log('clickCard');
    dispatch({
      type: ACTION_TYPE.SHOW_MODAL,
      payload: data
    });
  };

  return (
    <div onClick={() => clickCard()} className={styles.card}>
      <Image className={styles.image} src={data.preview} alt={data.name} />
      <div className={classNames(styles.name, LalezarFont.className)}>
        {data.name}
      </div>
    </div>
  );
};

export default Card;
