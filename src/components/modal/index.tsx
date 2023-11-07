import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

interface IProps {
  children: ReactNode;
  visible: boolean;
  changeVisible: (visible: boolean) => void;
}

const Modal: FC<IProps> = ({ children, visible, changeVisible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.shadow} onClick={() => changeVisible(false)}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={classNames([
          styles.content,
          visible ? styles.content_show : styles.content_hide
        ])}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
