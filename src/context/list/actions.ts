import { IComponentCard } from '@/types/config';
import { ListState } from './reducer';
import {
  storage,
  CATEGORY_ACTIVITY_STORAGE_KEY,
  LIKES_STORAGE_KEY,
  LANGUAGE_KEY,
  CURRENT_TAB_KEY
} from '@/utils/storage';
import { tabOptions } from '@/common/config';
import { Categories } from '@/common/components';

/**
 * change markdown content
 * @param categoryActivity current click category
 */
export const changeActivity = (
  oldState: ListState,
  categoryActivity: string
) => {
  const newState = {
    ...oldState,
    categoryActivity
  };
  storage.set(CATEGORY_ACTIVITY_STORAGE_KEY, categoryActivity);
  return newState;
};

/**
 * show modal
 * @param data Data to be displayed in modal
 */
export const showModal = (oldState: ListState, data: IComponentCard) => {
  const newState = {
    ...oldState,
    visible: true,
    currentData: data
  };
  document.body.style.overflow = 'hidden';
  return newState;
};

/**
 * hide modal
 */
export const hideModal = (oldState: ListState) => {
  const newState = {
    ...oldState,
    visible: false,
    currentData: null
  };

  document.body.style.overflow = 'visible';
  return newState;
};

/**
 * update likes
 * @param currentLike current click card name
 */
export const updateLikes = (oldState: ListState, currentLike: string) => {
  const newLikes = new Set([...oldState.likes]);

  if (newLikes.has(currentLike)) {
    newLikes.delete(currentLike);
  } else {
    newLikes.add(currentLike);
  }

  const newState = {
    ...oldState,
    likes: Array.from(newLikes)
  };
  storage.set(LIKES_STORAGE_KEY, Array.from(newLikes));
  return newState;
};

/**
 * change language
 */
export const changeLanguage = (oldState: ListState, language: string) => {
  const newState = {
    ...oldState,
    language
  };
  storage.set(LANGUAGE_KEY, language);
  return newState;
};

/**
 * change tab
 */
export const changeTabs = (oldState: ListState, currentTab: string) => {
  const newState = {
    ...oldState,
    currentTab
  };
  storage.set(CURRENT_TAB_KEY, currentTab);
  return newState;
};

/**
 * get localStorage data
 */
export const initStorage = (oldState: ListState) => {
  const likesStorage = storage.get(LIKES_STORAGE_KEY) || [];
  const languageStorage = storage.get(LANGUAGE_KEY) || 'en';
  const categoryActivityStorage =
    storage.get(CATEGORY_ACTIVITY_STORAGE_KEY) || Categories.All;
  const currentTabStorage = storage.get(CURRENT_TAB_KEY) || tabOptions[0].title;
  const newState = {
    ...oldState,
    categoryActivity: categoryActivityStorage,
    likes: likesStorage,
    language: languageStorage,
    currentTab: currentTabStorage.toLowerCase()
  };
  return newState;
};
