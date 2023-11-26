import { IComponent } from '@/types/config';
import {
  changeActivity,
  hideModal,
  showModal,
  changeTabs,
  initStorage,
  changePage
} from './actions';

export interface ListState {
  categoryActivity: string;
  visible: boolean;
  currentData: IComponent | null;
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
