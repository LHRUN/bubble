import { useUser } from '@/context/user';
import { ACTION_TYPE } from '@/context/user/reducer';
import { signIn } from 'next-auth/react';

import Modal from '@/components/basic/modal';
import Github from '@/assets/image/icons/github-signin.svg';
import Google from '@/assets/image/icons/google-signin.svg';
import Image from 'next/image';

import styles from './index.module.scss';
import classNames from 'classnames';
import { PoppinsFont } from '@/common/font';

const LoginModal = () => {
  const { data, dispatch } = useUser();
  const changeVisible = (show: boolean) => {
    dispatch({
      type: ACTION_TYPE.CHANGE_LOGIN_MODAL_SHOW,
      payload: show
    });
  };

  return (
    <Modal visible={data.showLoginModal} changeVisible={changeVisible}>
      <div className={classNames(styles.card)}>
        <div className={classNames(styles.title, PoppinsFont.className)}>
          Sign In
        </div>
        <button
          onClick={() => signIn('github')}
          className={classNames(styles.btn, styles.git)}
        >
          <Image
            src={Github}
            alt="github"
            width={20}
            height={20}
            loading="lazy"
          />
          <div className={classNames(styles.text, PoppinsFont.className)}>
            Github
          </div>
        </button>
        <button
          onClick={() => signIn('google')}
          className={classNames(styles.btn, styles.google)}
        >
          <Image
            src={Google}
            alt="google"
            width={20}
            height={20}
            loading="lazy"
          />
          <div className={classNames(styles.text, PoppinsFont.className)}>
            Google
          </div>
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;
