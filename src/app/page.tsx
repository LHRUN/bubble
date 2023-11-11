'use client';
import { useEffect } from 'react';
import classNames from 'classnames';
import { LalezarFont } from '@/common/font';

import Header from '@/components/header';
import Category from '@/components/componentsCategory';
import ComponentsList from '@/components/componentsList';
import TopJumper from '@/components/topJumper';
import Tabs from '@/components/tabs';
import ProfilesList from '@/components/profilesList';

import { useList } from '@/context/list';
import { ACTION_TYPE } from '@/context/list/reducer';
import { tabTitles } from '@/common/config';

import styles from './page.module.scss';

const Home = () => {
  const { data, dispatch } = useList();

  useEffect(() => {
    dispatch({
      type: ACTION_TYPE.INIT_STORAGE
    });
  }, []);

  return (
    <>
      <main className={classNames(LalezarFont.className, styles.page)}>
        <Header />
        <Tabs />
        <div className={classNames(styles.main, styles[data.currentTab])}>
          {data.currentTab === tabTitles.COMPONENTS ? (
            <>
              <Category />
              <ComponentsList />
            </>
          ) : (
            <ProfilesList />
          )}
        </div>
      </main>
      <TopJumper />
    </>
  );
};

export default Home;
