import I18NSwitch from './components/i18nSwitch';
import githubIcon from '@/assets/image/icons/gitHub.svg';
import AuthBtn from './components/auth';
import Image from 'next/image';

import { LalezarFont, LobsterFont } from '@/common/font';
import classNames from 'classnames';
import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={classNames(styles.container, LalezarFont.className)}>
      <div className={styles.nav}>
        <div className={styles.navLeft}>
          <div className={styles.i18nSwitch}>
            <I18NSwitch />
          </div>
          <a
            className={styles.githubIcon}
            href="https://github.com/LHRUN/bubble"
            target="_blank"
          >
            <Image src={githubIcon} alt="icon" width={32} height={32} />
          </a>
        </div>
        <AuthBtn />
      </div>
      <div className={styles.title}>
        <div className={classNames(styles.titleText, LobsterFont.className)}>
          Awesome
          <div className={classNames(styles.titleIcon, LobsterFont.className)}>
            Bubble
          </div>
        </div>
        <div
          className={classNames(
            styles.titleText,
            styles.subTitleText,
            LobsterFont.className
          )}
        >
          Profile
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.descTextContainer}>
          <div className={styles.descTextContainerVal}>
            Let{`'`}s start changing your profile.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
