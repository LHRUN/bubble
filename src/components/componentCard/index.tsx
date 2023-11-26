import { FC, useMemo } from 'react';
import Image from 'next/image';
import DynamicComponent from '../preview/dynamicComponent';
import Like from '@/components/like';

import { IComponent } from '@/types/config';
import { LalezarFont } from '@/common/font';
import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';
import { ComponentCardList } from '@/common/components';

import classNames from 'classnames';
import styles from './index.module.scss';

interface IProps {
  data: IComponent;
  showLike?: boolean;
}

const ComponentCard: FC<IProps> = ({ data, showLike = true }) => {
  const { dispatch } = useList();

  const preview = useMemo(() => {
    return (
      ComponentCardList?.find((item) => item?.name === data?.name) ?? {
        previewComponent: '',
        previewImage: ''
      }
    );
  }, [data?.name]);

  const clickCard = () => {
    dispatch({
      type: ACTION_TYPE.SHOW_MODAL,
      payload: data
    });
  };

  return (
    <div onClick={() => clickCard()} className={styles.card}>
      <div className={styles.background}></div>
      {showLike ? (
        <div className={styles.like}>
          <Like id={data.id} type="component" likeNum={data.likes} />
        </div>
      ) : null}
      <div className={styles.main}>
        <div className={styles.preview}>
          {preview?.previewComponent ? (
            <DynamicComponent componentName={preview.previewComponent} />
          ) : preview?.previewImage ? (
            <Image
              className={styles.image}
              src={preview?.previewImage ?? ''}
              alt={data.name}
              loading="lazy"
              width={300}
              height={240}
            />
          ) : null}
        </div>
        <div className={classNames(styles.name, LalezarFont.className)}>
          {data.name}
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
