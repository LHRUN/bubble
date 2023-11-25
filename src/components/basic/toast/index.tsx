import React, { FC, useEffect } from 'react';
import { useConfig } from '@/context/config';
import { ACTION_TYPE } from '@/context/config/reducer';

import Image from 'next/image';
import ToastBugSVG from '@/assets/image/icons/toast_bug.svg';
import ToastSuccessSVG from '@/assets/image/icons/toast_success.svg';

import styles from './index.module.scss';

export interface IToast {
  type: 'success' | 'error';
  text: string;
}

interface ToastProps {
  message: IToast;
  onClose: () => void;
}

const Toast: FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    // 1.5s auto close
    const timeoutId = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div className={styles.toast}>
      <Image
        src={message.type === 'success' ? ToastSuccessSVG : ToastBugSVG}
        alt="toast_icon"
        width={24}
        height={24}
      />
      <div className={styles.toastText}>{message.text}</div>
    </div>
  );
};

const ToastContainer = () => {
  const { data, dispatch } = useConfig();

  const handleClose = () => {
    dispatch({
      type: ACTION_TYPE.HIDE_TOAST
    });
  };

  return (
    <div className={styles.container}>
      {data?.toasts?.map((message, index) => (
        <Toast key={index} message={message} onClose={handleClose} />
      ))}
    </div>
  );
};

export default ToastContainer;
