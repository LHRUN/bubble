import { LalezarFont, LobsterFont } from '@/common/font';
import styles from './index.module.scss';
import classNames from 'classnames';
import I18NSwitch from './components/i18nSwitch';
import githubIcon from '@/assets/image/icons/gitHub.svg';
import buyMeACoffeeIcon from '@/assets/image/icons/buyMeACoffee.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <div className={classNames(styles.container, LalezarFont.className)}>
      <div className={styles.nav}>
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
        <a
          className={styles.coffeeIcon}
          href="https://www.buymeacoffee.com/leo0808"
          target="_blank"
        >
          <Image src={buyMeACoffeeIcon} alt="icon" width={28} height={28} />
        </a>
      </div>
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
