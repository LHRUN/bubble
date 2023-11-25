import { ReactNode } from 'react';
import { ListProvider } from './list';
import { UserProvider } from './user';
import { ConfigProvider } from './config';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider>
      <ListProvider>
        <UserProvider>{children}</UserProvider>
      </ListProvider>
    </ConfigProvider>
  );
};
