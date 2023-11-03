'use client';

import Header from '@/components/header';
import Category from '@/components/category';
import List from '@/components/list';
import { AppProviders } from '@/context';

import styles from './page.module.scss';
import classNames from 'classnames';
import { LalezarFont } from '@/common/font';

export default function Home() {
  return (
    <AppProviders>
      <main className={classNames(LalezarFont.className, styles.page)}>
        <Header />
        <div className={styles.main}>
          <Category />
          <List />
        </div>
      </main>
    </AppProviders>
  );
}
