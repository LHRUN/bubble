import { FC, useMemo } from 'react';
import { useConfig } from '@/context/config';
import { tips as TipsEN } from '@/common/locales/en/tip';
import { tips as TipsZH } from '@/common/locales/zh/tip';

import Loading from '@/components/basic/loading';

import styles from './index.module.scss';

interface IProps {
  isLoading: boolean;
  error: boolean;
  listLength: number;
  children: React.ReactNode;
}

const List: FC<IProps> = ({ isLoading, error, listLength, children }) => {
  const { data } = useConfig();
  const tips = useMemo(() => {
    return data?.language === 'en' ? TipsEN : TipsZH;
  }, [data?.language]);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingText}>{tips.loading}</div>
        <Loading size={48} />
      </div>
    );
  }

  if (error) {
    return <div className={styles.textBox}>{tips.error}</div>;
  }

  if (listLength === 0) {
    return <div className={styles.textBox}>{tips.empty}</div>;
  }

  return <>{children}</>;
};

export default List;
