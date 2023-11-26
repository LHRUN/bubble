import classNames from 'classnames';
import styles from './index.module.scss';
import { useConfig } from '@/context/config';
import { ACTION_TYPE } from '@/context/config/reducer';

const I18NSwitch = () => {
  const { data, dispatch } = useConfig();

  const changeLan = () => {
    const newLanguage = data.language === 'en' ? 'zh' : 'en';
    dispatch({
      type: ACTION_TYPE.CHANGE_LANGUAGE,
      payload: newLanguage
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
