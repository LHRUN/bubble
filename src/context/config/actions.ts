import { ConfigState } from './reducer';
import { LANGUAGE_KEY, storage } from '@/utils/storage';
import { IToast } from '@/components/basic/toast';

/**
 * change language
 */
export const changeLanguage = (oldState: ConfigState, language: string) => {
  const newState = {
    ...oldState,
    language
  };
  storage.set(LANGUAGE_KEY, language);
  return newState;
};

/**
 * get localStorage data
 */
export const initStorage = (oldState: ConfigState) => {
  const languageStorage = storage.get(LANGUAGE_KEY) || 'en';
  const newState = {
    ...oldState,
    language: languageStorage
  };
  return newState;
};

export const showToast = (oldState: ConfigState, toast: IToast) => {
  const newState = {
    ...oldState,
    toasts: [...oldState.toasts, toast]
  };
  return newState;
};

export const hideToast = (oldState: ConfigState) => {
  const newState = {
    ...oldState,
    toasts: oldState.toasts.slice(1)
  };
  return newState;
};
