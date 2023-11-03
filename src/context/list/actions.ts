import { ICard } from '@/types/config';
import { ListState } from './reducer';

/**
 * change markdown content
 */
export const changeActivity = (oldState: ListState, activity: string) => {
  console.log('changeActivity', activity);
  const newState = {
    ...oldState,
    activity
  };
  return newState;
};

/**
 * show modal
 */
export const showModal = (oldState: ListState, data: ICard) => {
  console.log('showModal', data);
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
