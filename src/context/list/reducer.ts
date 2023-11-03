import { ICard } from '@/types/config';
import { changeActivity, hideModal, showModal } from './actions';

export interface ListState {
  activity: string;
  visible: boolean;
  currentData: ICard | null;
}

export interface ListAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export type ListReducer = (state: ListState, action: ListAction) => ListState;

export const ACTION_TYPE = {
  CHANGE_ACTIVITY: 'changeActivity',
  SHOW_MODAL: 'showModal',
  HIDE_MODAL: 'hidenModal'
};

export const listReducer: ListReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_ACTIVITY:
      return changeActivity(state, action.payload);
    case ACTION_TYPE.SHOW_MODAL:
      return showModal(state, action.payload);
    case ACTION_TYPE.HIDE_MODAL:
      return hideModal(state);
    default:
      return state;
  }
};
