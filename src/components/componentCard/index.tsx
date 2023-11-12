import { FC } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { IComponentCard } from '@/types/config';
import { LalezarFont } from '@/common/font';
import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';

import styles from './index.module.scss';

const Love = dynamic(() => import('./components/love'), { ssr: false });

interface IProps {
  data: IComponentCard;
}

const ComponentCard: FC<IProps> = ({ data }) => {
  const { dispatch } = useList();

  const clickCard = () => {
    dispatch({
      type: ACTION_TYPE.SHOW_MODAL,
      payload: data
    });
  };
  return (
    <div onClick={() => clickCard()} className={styles.card}>
      <div className={styles.background}></div>
      <Love data={data} className={styles.love} />
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

export default ComponentCard;
