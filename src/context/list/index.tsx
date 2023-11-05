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
import {
  storage,
  CATEGORY_ACTIVITY_STORAGE_KEY,
  LIKES_STORAGE_KEY,
  LANGUAGE_KEY
} from '@/utils/storage';

const ListContext = createContext<{
  data: ListState;
  dispatch: Dispatch<ListAction>;
} | null>(null);
ListContext.displayName = 'ListContext';

const likesStorage = storage.get(LIKES_STORAGE_KEY) || [];
const languageStorage = storage.get(LANGUAGE_KEY) || 'en';
const categoryActivityStorage =
  storage.get(CATEGORY_ACTIVITY_STORAGE_KEY) || Categories.All;

export const ListProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, dispatch] = useReducer<ListReducer>(listReducer, {
    categoryActivity: categoryActivityStorage,
    visible: false,
    currentData: null,
    likes: likesStorage,
    language: languageStorage
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
