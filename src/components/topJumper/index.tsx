import Image from 'next/image';
import { useEffect, useState } from 'react';
import BackTop from '@/assets/image/icons/back-top.svg';
import { throttle, isServer } from '@/utils';
import styles from './index.module.scss';

const TopJumper = () => {
  const [show, switchShow] = useState(
    isServer() ? false : window.scrollY > 700
  );

  useEffect(() => {
    const listener = throttle(() => {
      switchShow(window.scrollY > 700);
    }, 500);
    document.addEventListener('scroll', listener);
    return () => document.removeEventListener('scroll', listener);
  }, [show]);

  const clickTop = () => {
    if (document?.body?.scrollIntoView) {
      document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div onClick={clickTop} className={styles.box}>
      <Image
        className={styles.image}
        src={BackTop}
        alt="heart"
        width={50}
        height={50}
      />
    </div>
  );
};

export default TopJumper;
