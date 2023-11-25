import { ACTION_TYPE } from '@/context/list/reducer';
import { useList } from '@/context/list';
import useSWR from 'swr';
import { get } from '@/services';
import { useMemo } from 'react';
import { PROFILE_PAGE_SIZE } from '@/common/config';

import classNames from 'classnames';
import styles from './index.module.scss';
import { LobsterFont } from '@/common/font';

const Pagination = () => {
  const { data: count } = useSWR('/api/profile/count', get);
  const { data, dispatch } = useList();

  const list = useMemo(() => {
    if (count) {
      return Array.from(
        { length: Math.ceil(count / PROFILE_PAGE_SIZE) },
        (_, index) => index + 1
      );
    }
    return [];
  }, [count]);

  const clickPage = (index: number) => {
    if (data.currentPage !== index) {
      const tabs = document.querySelector(`#tabs`) as HTMLDivElement;
      window.scrollTo({
        top: tabs?.offsetTop ? tabs?.offsetTop - 30 : 0,
        behavior: 'smooth'
      });
      dispatch({
        type: ACTION_TYPE.CHANGE_PAGE,
        payload: index
      });
    }
  };

  return (
    <div className={styles.container}>
      {list?.map((item) => (
        <div
          className={classNames({
            [LobsterFont.className]: true,
            [styles.item]: true,
            [styles.activity]: data.currentPage === item
          })}
          key={item}
          onClick={() => clickPage(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
