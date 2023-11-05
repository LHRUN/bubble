'use client';
import classNames from 'classnames';

import Header from '@/components/header';
import Category from '@/components/category';
import List from '@/components/list';
import TopJumper from '@/components/topJumper';

import { AppProviders } from '@/context';
import styles from './page.module.scss';
import { LalezarFont } from '@/common/font';

const Home = () => {
  return (
    <AppProviders>
      <main className={classNames(LalezarFont.className, styles.page)}>
        <Header />
        <div className={styles.main}>
          <Category />
          <List />
        </div>
      </main>
      <TopJumper />
    </AppProviders>
  );
};

export default Home;
