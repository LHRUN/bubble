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
  ConfigAction,
  ConfigReducer,
  ConfigState,
  configReducer
} from './reducer';

const ConfigContext = createContext<{
  data: ConfigState;
  dispatch: Dispatch<ConfigAction>;
} | null>(null);
ConfigContext.displayName = 'ConfigContext';

export const ConfigProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, dispatch] = useReducer<ConfigReducer>(configReducer, {
    language: 'en',
    toasts: []
  });

  useEffect(() => {
    dispatch({
      type: ACTION_TYPE.INIT_STORAGE
    });
  }, []);

  return (
    <ConfigContext.Provider value={{ data, dispatch }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used in ConfigProvider');
  }
  return context;
};
