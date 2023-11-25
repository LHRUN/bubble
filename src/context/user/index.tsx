'use client';

import {
  Dispatch,
  FC,
  ReactNode,
  createContext,
  useContext,
  useReducer
} from 'react';
import { UserAction, UserReducer, UserState, userReducer } from './reducer';

const UserContext = createContext<{
  data: UserState;
  dispatch: Dispatch<UserAction>;
} | null>(null);
UserContext.displayName = 'UserContext';

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, dispatch] = useReducer<UserReducer>(userReducer, {
    userInfo: {},
    likedProfiles: [],
    likedComponents: [],
    showLoginModal: false
  });

  return (
    <UserContext.Provider value={{ data, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used in UserProvider');
  }
  return context;
};
