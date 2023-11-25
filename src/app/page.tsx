'use client';

import Header from '@/components/header';
import Category from '@/components/componentCategory';
import ComponentList from '@/components/componentList';
import TopJumper from '@/components/topJumper';
import Tabs from '@/components/tabs';
import ProfileList from '@/components/profileList';
import Pagination from '@/components/pagination';
import { SessionProvider } from 'next-auth/react';
import LoginModal from '@/components/loginModal';
import ToastContainer from '@/components/basic/toast';
import DetailModal from '@/components/componentModal';

import { useList } from '@/context/list';
import { tabTitles } from '@/common/config';

import classNames from 'classnames';
import { LalezarFont } from '@/common/font';
import styles from './page.module.scss';

const Home = () => {
  const { data } = useList();

  return (
    <SessionProvider>
      <main className={classNames(LalezarFont.className, styles.page)}>
        <Header />
        <Tabs />
        <div className={classNames(styles.main, styles[data.currentTab])}>
          {data.currentTab === tabTitles.COMPONENTS ? (
            <>
              <Category />
              <ComponentList />
            </>
          ) : (
            <>
              <ProfileList />
              <Pagination />
            </>
          )}
        </div>
      </main>
      <TopJumper />
      <LoginModal />
      <ToastContainer />
      <DetailModal />
    </SessionProvider>
  );
};

export default Home;
