import Modal from '@/components/modal';
import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';
import styles from './index.module.scss';
import { useMemo } from 'react';
import Image from 'next/image';

const DetailModal = () => {
  const { data, dispatch } = useList();
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
          <div className={styles.desc}>
            {detail?.descript.map((item, index) => (
              <div className={styles.descItem} key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.example}>
            <div className={styles.exampleTitle}>Example</div>
            <div className={styles.exampleText}>
              {detail?.example.map((item, index) => {
                return (
                  <div className={styles.exampleTextLine} key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <Image
            className={styles.preview}
            src={detail?.preview ?? ''}
            alt={detail?.name ?? ''}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;
