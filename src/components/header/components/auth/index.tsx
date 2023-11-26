import { useSession, signOut } from 'next-auth/react';
import { useEffect, useCallback, useState } from 'react';
import { get } from '@/services';
import { useUser } from '@/context/user';
import { ACTION_TYPE } from '@/context/user/reducer';

import SparklingHeart from '@/assets/image/icons/like.svg';
import SignOutSVG from '@/assets/image/icons/signout.svg';
import SignInSVG from '@/assets/image/icons/signin.svg';
import Loading from '@/components/basic/loading';
import Image from 'next/image';
import LikeModal from '../likedModal';

import classNames from 'classnames';
import styles from './index.module.scss';
import { LobsterFont, LalezarFont } from '@/common/font';
import { useConfig } from '@/context/config';

const AuthBtn = () => {
  const { data, status } = useSession();
  const { dispatch } = useUser();
  const { dispatch: configDispatch } = useConfig();
  const [showLikedModal, setShowLikedModal] = useState(false);
  const [likeType, setLikeType] = useState('');

  const clickSignIn = () => {
    dispatch({
      type: ACTION_TYPE.CHANGE_LOGIN_MODAL_SHOW,
      payload: true
    });
  };

  const clickLikedMenu = (type: string) => {
    setShowLikedModal(true);
    setLikeType(type);
  };

  const clickSignOut = async () => {
    await signOut();
    dispatch({
      type: ACTION_TYPE.UPDATE_USERINFO,
      payload: {}
    });
    dispatch({
      type: ACTION_TYPE.UPDATE_LIKED,
      payload: {
        likedProfiles: [],
        likedComponents: []
      }
    });
  };

  const updateUserLiked = useCallback(async () => {
    const res = await get(`/api/user/liked`, configDispatch);
    const likedProfiles = res?.likedProfiles ?? [];
    const likedComponents = res?.likedComponents ?? [];
    dispatch({
      type: ACTION_TYPE.UPDATE_LIKED,
      payload: {
        likedProfiles,
        likedComponents
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (data?.user?.userId) {
      updateUserLiked();
    }
  }, [data?.user?.userId, dispatch, updateUserLiked]);

  if (status === 'loading') {
    return <Loading size={24} />;
  }

  if (!data && status === 'unauthenticated') {
    return (
      <div className={styles.signIn} onClick={clickSignIn}>
        <Image
          src={SignInSVG}
          alt="like"
          width={24}
          height={24}
          loading="lazy"
        />
        <div className={styles.signInText}>Sign In</div>
      </div>
    );
  }

  return (
    <div className={styles.user}>
      <div className={classNames(styles.name, LobsterFont.className)}>
        Hi,{' '}
        <span className={classNames(LalezarFont.className, styles.nickname)}>
          {data?.user?.name}
        </span>
      </div>
      <div className={classNames([styles.conTooltip, styles['bottom']])}>
        <Image
          className={styles.avatar}
          src={data?.user?.image || ''}
          alt="avatar"
          width={36}
          height={36}
        />
        <div className={styles.tooltip}>
          <div
            onClick={() => clickLikedMenu('profile')}
            className={styles.line}
          >
            <Image
              className={styles.lineIcon}
              src={SparklingHeart}
              alt="like"
              width={18}
              height={18}
              loading="lazy"
            />
            <div className={styles.lineTitle}>Profiles</div>
          </div>
          <div
            onClick={() => clickLikedMenu('component')}
            className={styles.line}
          >
            <Image
              className={styles.lineIcon}
              src={SparklingHeart}
              alt="like"
              width={18}
              height={18}
              loading="lazy"
            />
            <div className={styles.lineTitle}>Components</div>
          </div>
          <div
            onClick={clickSignOut}
            className={classNames(styles.line, styles.signOut)}
          >
            <Image
              className={styles.lineIcon}
              src={SignOutSVG}
              alt="like"
              width={24}
              height={24}
              loading="lazy"
            />
            <div className={styles.lineTitle}>Sign Out</div>
          </div>
        </div>
      </div>
      {showLikedModal && (
        <LikeModal
          visible={showLikedModal}
          changeVisible={setShowLikedModal}
          type={likeType}
        />
      )}
    </div>
  );
};

export default AuthBtn;
