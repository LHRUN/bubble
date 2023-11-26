import { useMemo } from 'react';
import Image from 'next/image';
import Modal from '@/components/basic/modal';
import DynamicComponent from '../preview/dynamicComponent';

import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';
import { PoppinsFont } from '@/common/font';
import { useDescripts } from '@/common/locales';
import { ComponentCardList } from '@/common/components';

import classNames from 'classnames';
import styles from './index.module.scss';

const DetailModal = () => {
  const { data, dispatch } = useList();
  const descripts = useDescripts();
  const detail = useMemo(() => data.currentData, [data.currentData]);
  const preview = useMemo(() => {
    return (
      ComponentCardList?.find((item) => item?.name === detail?.name) ?? {
        previewImage: '',
        previewComponent: ''
      }
    );
  }, [detail?.name]);

  const changeVisible = () => {
    dispatch({
      type: ACTION_TYPE.HIDE_MODAL
    });
  };

  return (
    <Modal zIndex={100} visible={data.visible} changeVisible={changeVisible}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.github}>
            <div className={styles.githubTitle}>Github</div>
            <a
              href={detail?.github}
              target="_blank"
              className={styles.githubText}
            >
              {detail?.github}
            </a>
          </div>
          <div className={classNames(styles.desc, PoppinsFont.className)}>
            {descripts(detail?.name)?.map((item, index) => (
              <div className={styles.descItem} key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          {detail?.example.length ? (
            <div className={styles.example}>
              <div className={styles.exampleTitle}>Example</div>
              <div
                className={classNames(
                  styles.exampleText,
                  PoppinsFont.className
                )}
              >
                {detail?.example}
              </div>
            </div>
          ) : null}
          <div className={styles.preview}>
            {preview?.previewComponent ? (
              <DynamicComponent componentName={preview.previewComponent} />
            ) : preview?.previewImage ? (
              <Image
                className={styles.previewImage}
                src={preview?.previewImage ?? ''}
                alt={detail?.name ?? ''}
                loading="lazy"
                width={300}
                height={240}
              />
            ) : null}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;
