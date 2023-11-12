'use client';
import classNames from 'classnames';
import { LalezarFont } from '@/common/font';

import Header from '@/components/header';
import Category from '@/components/componentsCategory';
import ComponentList from '@/components/componentList';
import TopJumper from '@/components/topJumper';
import Tabs from '@/components/tabs';
import ProfileList from '@/components/profileList';

import { useList } from '@/context/list';
import { tabTitles } from '@/common/config';

import styles from './page.module.scss';

const Home = () => {
  const { data } = useList();

  return (
    <>
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
            <ProfileList />
          )}
        </div>
      </main>
      <TopJumper />
    </>
  );
};

export default Home;
