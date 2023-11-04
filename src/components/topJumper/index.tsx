import Image from 'next/image';
import Tornado from '@/assets/image/icons/Tornado.png';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { throttle } from '@/utils';

const TopJumper = () => {
  const [show, switchShow] = useState(false);

  useEffect(() => {
    const listener = throttle(() => {
      switchShow(window.scrollY > 700);
    }, 500);
    document.addEventListener('scroll', listener);
    return () => document.removeEventListener('scroll', listener); // 组件销毁后，取消监听
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
        src={Tornado}
        alt="heart"
        width={50}
        height={50}
      />
    </div>
  );
};

export default TopJumper;
