import { LalezarFont, LobsterFont } from '@/common/font';
import styles from './index.module.scss';
import classNames from 'classnames';

const Header = () => {
  return (
    <div className={classNames(styles.container, LalezarFont.className)}>
      <div className={styles.title}>
        <h1 className={styles.titleText}>Awesome</h1>
        <div className={styles.subTitle}>
          <h2 className={classNames(styles.titleText, styles.subTitleText)}>
            Profile
          </h2>
          <div
            className={classNames(styles.subTitleIcon, LobsterFont.className)}
          >
            Bubble
          </div>
        </div>
      </div>
      <h3 className={styles.desc}>Let{`'`}s start changing your profile.</h3>
    </div>
  );
};

export default Header;
