import { IUser } from '@/types/config';
import { updateUserInfo, changeLoginModalShow, updateLiked } from './actions';

export interface UserState {
  userInfo: IUser;
  likedProfiles: Array<{ profileId: string }>;
  likedComponents: Array<{ componentId: string }>;
  showLoginModal: boolean;
}

export interface UserAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export type UserReducer = (state: UserState, action: UserAction) => UserState;

export const ACTION_TYPE = {
  UPDATE_USERINFO: 'signIn',
  UPDATE_LIKED: 'updateLiked',
  CHANGE_LOGIN_MODAL_SHOW: 'changeLoginModalShow'
};

export const userReducer: UserReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_USERINFO:
      return updateUserInfo(state, action.payload);
    case ACTION_TYPE.CHANGE_LOGIN_MODAL_SHOW:
      return changeLoginModalShow(state, action.payload);
    case ACTION_TYPE.UPDATE_LIKED:
      return updateLiked(state, action.payload);
    default:
      return state;
  }
};
