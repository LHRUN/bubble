import { tabOptions } from '@/common/config';
import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';

import classNames from 'classnames';
import styles from './index.module.scss';
import { LobsterFont } from '@/common/font';

const Tabs = () => {
  const { data, dispatch } = useList();

  const clickTab = (newTab: string) => {
    if (data.currentTab !== newTab) {
      dispatch({
        type: ACTION_TYPE.CHANGE_TAB,
        payload: newTab
      });
    }
  };

  return (
    <div id="tabs" className={styles['tab-list']}>
      {tabOptions.map((item, index) => (
        <div
          key={index}
          className={classNames([
            styles['tab-item'],
            styles[item.title],
            LobsterFont.className,
            item.title === data.currentTab
              ? styles['tab-selected']
              : styles['tab-no-selected']
          ])}
          onClick={() => clickTab(item.title)}
        >
          <div className={styles.tabBox}>
            <span className={styles.firstChat}>
              {item.title.slice(0, 1).toUpperCase()}
            </span>
            <span className={styles.otherChat}>{item.title.slice(1)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
