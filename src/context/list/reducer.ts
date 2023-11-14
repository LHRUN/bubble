import { IComponentCard } from '@/types/config';
import {
  changeActivity,
  hideModal,
  showModal,
  updateLikes,
  changeLanguage,
  changeTabs,
  initStorage,
  changePage
} from './actions';

export interface ListState {
  categoryActivity: string;
  visible: boolean;
  currentData: IComponentCard | null;
  likes: string[];
  language: string;
  currentTab: string;
  currentPage: number;
}

export interface ListAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export type ListReducer = (state: ListState, action: ListAction) => ListState;

export const ACTION_TYPE = {
  INIT_STORAGE: 'initStorage',
  CHANGE_ACTIVITY: 'changeActivity',
  SHOW_MODAL: 'showModal',
  HIDE_MODAL: 'hidenModal',
  UPDATE_LIKES: 'updateLikes',
  CHANGE_LANGUAGE: 'changeLanguage',
  CHANGE_TAB: 'changeTab',
  CHANGE_PAGE: 'changePage'
};

export const listReducer: ListReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_ACTIVITY:
      return changeActivity(state, action.payload);
    case ACTION_TYPE.SHOW_MODAL:
      return showModal(state, action.payload);
    case ACTION_TYPE.HIDE_MODAL:
      return hideModal(state);
    case ACTION_TYPE.UPDATE_LIKES:
      return updateLikes(state, action.payload);
    case ACTION_TYPE.CHANGE_LANGUAGE:
      return changeLanguage(state, action.payload);
    case ACTION_TYPE.CHANGE_TAB:
      return changeTabs(state, action.payload);
    case ACTION_TYPE.INIT_STORAGE:
      return initStorage(state);
    case ACTION_TYPE.CHANGE_PAGE:
      return changePage(state, action.payload);
    default:
      return state;
  }
};
