import { IUser } from '@/types/config';
import { UserState } from './reducer';

/**
 * update user info
 */
export const updateUserInfo = (oldState: UserState, userInfo: IUser) => {
  const newState = {
    ...oldState,
    userInfo
  };
  return newState;
};

/**
 * update like profiles
 */
export const updateLiked = (
  oldState: UserState,
  liked: {
    likedProfiles: { profileId: string }[];
    likedComponents: { componentId: string }[];
  }
) => {
  const likedProfiles = liked?.likedProfiles ?? [];
  const likedComponents = liked?.likedComponents ?? [];
  const newState = {
    ...oldState
  };
  if (likedProfiles?.length) {
    newState.likedProfiles = likedProfiles;
  }
  if (likedComponents?.length) {
    newState.likedComponents = likedComponents;
  }
  return newState;
};

/**
 * change login modal show
 */
export const changeLoginModalShow = (oldState: UserState, show: boolean) => {
  const newState = {
    ...oldState,
    showLoginModal: show
  };
  return newState;
};
