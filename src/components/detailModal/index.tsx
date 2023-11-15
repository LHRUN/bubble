import { useMemo } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Modal from '@/components/modal';
import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';
import { PoppinsFont } from '@/common/font';
import { useDescripts } from '@/common/locales';
import styles from './index.module.scss';

const DetailModal = () => {
  const { data, dispatch } = useList();
  const descripts = useDescripts();
  const detail = useMemo(() => data.currentData, [data.currentData]);

  const changeVisible = () => {
    dispatch({
      type: ACTION_TYPE.HIDE_MODAL
    });
  };

  return (
    <Modal visible={data.visible} changeVisible={changeVisible}>
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
            {detail?.previewComponent ? (
              detail.previewComponent()
            ) : (
              <Image
                className={styles.previewImage}
                src={detail?.previewImage ?? ''}
                alt={detail?.name ?? ''}
                width={300}
                height={240}
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;
