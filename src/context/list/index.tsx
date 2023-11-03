'use client';

import {
  Dispatch,
  FC,
  ReactNode,
  createContext,
  useContext,
  useReducer
} from 'react';
import { ListAction, ListReducer, ListState, listReducer } from './reducer';
import { Categories } from '@/common/config';

const ListContext = createContext<{
  data: ListState;
  dispatch: Dispatch<ListAction>;
} | null>(null);
ListContext.displayName = 'ListContext';

export const ListProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, dispatch] = useReducer<ListReducer>(listReducer, {
    activity: Categories.All,
    visible: false,
    currentData: null
  });
  return (
    <ListContext.Provider value={{ data, dispatch }}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useFile must be used in FileProvider');
  }
  return context;
};
