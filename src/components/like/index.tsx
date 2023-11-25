import { FC, useEffect, useMemo, useState, MouseEvent } from 'react';
import { ACTION_TYPE } from '@/context/user/reducer';
import { useUser } from '@/context/user';
import { post } from '@/services';
import { useConfig } from '@/context/config';
import { useSession } from 'next-auth/react';

import Image from 'next/image';
import LikeSVG from '@/assets/image/icons/like.svg';
import DisLikeSVG from '@/assets/image/icons/dislike.svg';
import Loading from '@/components/basic/loading';

import styles from './index.module.scss';
import classNames from 'classnames';
import { LobsterFont } from '@/common/font';

interface IProps {
  id: string;
  likeNum: number;
  type: 'component' | 'profile';
}

const Like: FC<IProps> = ({ likeNum: originLikeNum, type, id }) => {
  const { data: userData, dispatch } = useUser();
  const { data: session } = useSession();
  const [likeNum, setLikeNum] = useState(0);
  const [likeLoading, setLikeLoading] = useState(false);
  const { dispatch: configDispatch } = useConfig();

  useEffect(() => {
    if (originLikeNum !== likeNum) {
      setLikeNum(originLikeNum);
    }
  }, [originLikeNum]);

  const isLike = useMemo(() => {
    if (type === 'component') {
      const likedComponents = userData?.likedComponents ?? [];
      return likedComponents.some((item) => item.componentId === id);
    } else if (type === 'profile') {
      const likedProfiles = userData?.likedProfiles ?? [];
      return likedProfiles.some((item) => item.profileId === id);
    }
    return false;
  }, [id, type, userData?.likedComponents, userData?.likedProfiles]);

  const clickLike = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!session?.user?.userId) {
      dispatch({
        type: ACTION_TYPE.CHANGE_LOGIN_MODAL_SHOW,
        payload: true
      });
      return;
    }
    if (likeLoading) {
      return;
    }
    setLikeLoading(true);
    if (type === 'profile') {
      const res = await post(
        '/api/profile/like',
        {
          profileId: id,
          likeStatus: isLike ? 0 : 1
        },
        configDispatch
      );
      const { likedProfiles, likes } = res;
      if (likes !== undefined) {
        setLikeNum(likes);
      }
      if (likedProfiles !== undefined) {
        dispatch({
          type: ACTION_TYPE.UPDATE_LIKED,
          payload: {
            likedProfiles
          }
        });
      }
    } else {
      const res = await post(
        '/api/component/like',
        {
          componentId: id,
          likeStatus: isLike ? 0 : 1
        },
        configDispatch
      );
      const { likedComponents, likes } = res;
      if (likes !== undefined) {
        setLikeNum(likes);
      }
      if (likedComponents !== undefined) {
        dispatch({
          type: ACTION_TYPE.UPDATE_LIKED,
          payload: {
            likedComponents
          }
        });
      }
    }

    setLikeLoading(false);
  };

  if (likeLoading) {
    return <Loading size={32} />;
  }

  return (
    <div onClick={(e) => clickLike(e)} className={styles.box}>
      <Image
        src={isLike ? LikeSVG : DisLikeSVG}
        alt="like"
        width={30}
        height={30}
        className={styles.likeImage}
      />
      {likeNum > 0 && (
        <div className={classNames(styles.likeNum, LobsterFont.className)}>
          {likeNum}
        </div>
      )}
    </div>
  );
};

export default Like;
