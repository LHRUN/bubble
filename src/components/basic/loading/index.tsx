import { FC } from 'react';
import styles from './index.module.scss';

interface IProps {
  size?: number;
}

const Loading: FC<IProps> = ({ size = 64 }) => {
  return (
    <div>
      <svg
        className={styles.spinner}
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={styles.path}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  );
};

export default Loading;
