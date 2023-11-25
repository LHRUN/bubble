import { IComponent } from '@/types/config';
import { ListState } from './reducer';
import { storage, CURRENT_TAB_KEY, CURRENT_PAGE_KEY } from '@/utils/storage';
import { tabOptions } from '@/common/config';

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
  return newState;
};

/**
 * show modal
 * @param data Data to be displayed in modal
 */
export const showModal = (oldState: ListState, data: IComponent) => {
  const newState = {
    ...oldState,
    visible: true,
    currentData: data
  };

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
 * change page
 */
export const changePage = (oldState: ListState, currentPage: number) => {
  const newState = {
    ...oldState,
    currentPage
  };
  storage.set(CURRENT_PAGE_KEY, currentPage);
  return newState;
};

/**
 * get localStorage data
 */
export const initStorage = (oldState: ListState) => {
  const currentTabStorage = storage.get(CURRENT_TAB_KEY) || tabOptions[0].title;
  const currentPageStorage = storage.get(CURRENT_PAGE_KEY) || 1;
  const newState = {
    ...oldState,
    currentTab: currentTabStorage.toLowerCase(),
    currentPage: currentPageStorage
  };
  return newState;
};
