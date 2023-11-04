import Image from 'next/image';
import ViewsCounterSvg from '@/assets/image/preview/views-counter.svg';

import styles from './index.module.scss';

const ViewsCounter = () => {
  return (
    <div className={styles.box}>
      <Image className={styles.image} src={ViewsCounterSvg} alt="badge-react" />
    </div>
  );
};

export default ViewsCounter;
