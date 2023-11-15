import classNames from 'classnames';
import { ProfileCardList } from '@/common/profiles';
import { ACTION_TYPE } from '@/context/list/reducer';
import { useList } from '@/context/list';
import styles from './index.module.scss';
import { LobsterFont } from '@/common/font';

const list = Array.from(
  { length: Math.ceil(ProfileCardList.length / 20) },
  (_, index) => index + 1
);

const Pagination = () => {
  const { data, dispatch } = useList();
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
      {list.map((item, index) => (
        <div
          className={classNames({
            [LobsterFont.className]: true,
            [styles.item]: true,
            [styles.activity]: data.currentPage === index
          })}
          key={item}
          onClick={() => clickPage(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
