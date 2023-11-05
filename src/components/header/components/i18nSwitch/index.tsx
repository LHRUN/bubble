import classNames from 'classnames';
import styles from './index.module.scss';
import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';

const I18NSwitch = () => {
  const { data, dispatch } = useList();

  const changeLan = () => {
    console.log('changeLan');
    const newLang = data.language === 'en' ? 'zh' : 'en';
    dispatch({
      type: ACTION_TYPE.CHANGE_LANGUAGE,
      payload: newLang
    });
  };

  return (
    <div className={classNames(styles.canToggle, styles.rebrand)}>
      <input
        checked={data.language === 'en'}
        onChange={changeLan}
        id="d"
        type="checkbox"
      />
      <label htmlFor="d">
        <div
          className={styles.canToggleSwitch}
          data-checked="EN"
          data-unchecked="ZH"
        ></div>
      </label>
    </div>
  );
};

export default I18NSwitch;
