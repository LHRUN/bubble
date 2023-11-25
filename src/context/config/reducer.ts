import { changeLanguage, initStorage, showToast, hideToast } from './actions';
import { IToast } from '@/components/basic/toast';

export interface ConfigState {
  language: string;
  toasts: IToast[];
}

export interface ConfigAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export type ConfigReducer = (
  state: ConfigState,
  action: ConfigAction
) => ConfigState;

export const ACTION_TYPE = {
  INIT_STORAGE: 'initStorage',
  CHANGE_LANGUAGE: 'changeLanguage',
  SHOW_TOAST: 'showToast',
  HIDE_TOAST: 'hideToast'
};

export const configReducer: ConfigReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INIT_STORAGE:
      return initStorage(state);
    case ACTION_TYPE.CHANGE_LANGUAGE:
      return changeLanguage(state, action.payload);
    case ACTION_TYPE.SHOW_TOAST:
      return showToast(state, action.payload);
    case ACTION_TYPE.HIDE_TOAST:
      return hideToast(state);
    default:
      return state;
  }
};
