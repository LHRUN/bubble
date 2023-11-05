import { ICard } from '@/types/config';
import { ListState } from './reducer';
import {
  storage,
  CATEGORY_ACTIVITY_STORAGE_KEY,
  LIKES_STORAGE_KEY,
  LANGUAGE_KEY
} from '@/utils/storage';

/**
 * change markdown content
 * @param categoryActivity current click category
 */
export const changeActivity = (
  oldState: ListState,
  categoryActivity: string
) => {
  console.log('changeActivity', categoryActivity);
  const newState = {
    ...oldState,
    categoryActivity
  };
  storage.set(CATEGORY_ACTIVITY_STORAGE_KEY, categoryActivity);
  return newState;
};

/**
 * show modal
 */
export const showModal = (oldState: ListState, data: ICard) => {
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
