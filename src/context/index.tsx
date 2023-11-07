import { ReactNode } from 'react';
import { ListProvider } from './list';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <ListProvider>{children}</ListProvider>;
};
