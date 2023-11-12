'use client';

import {
  Dispatch,
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer
} from 'react';
import {
  ACTION_TYPE,
  ListAction,
  ListReducer,
  ListState,
  listReducer
} from './reducer';
import { Categories } from '@/common/components';
import { tabOptions } from '@/common/config';

const ListContext = createContext<{
  data: ListState;
  dispatch: Dispatch<ListAction>;
} | null>(null);
ListContext.displayName = 'ListContext';

export const ListProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, dispatch] = useReducer<ListReducer>(listReducer, {
    categoryActivity: Categories.All,
    visible: false,
    currentData: null,
    likes: [],
    language: 'en',
    currentTab: tabOptions[0].title
  });

  useEffect(() => {
    dispatch({
      type: ACTION_TYPE.INIT_STORAGE
    });
  }, []);

  return (
    <ListContext.Provider value={{ data, dispatch }}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useList must be used in ListProvider');
  }
  return context;
};
