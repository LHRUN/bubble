import { useList } from '@/context/list';
import { descripts as DescriptsEn } from './en/descripts';
import { descripts as DescriptsZh } from './zh/descripts';

export const useDescripts = () => {
  const { data } = useList();
  return (name: string | undefined) => {
    if (!name) {
      return [];
    }
    switch (data.language) {
      case 'en':
        return DescriptsEn[name];
      case 'zh':
        return DescriptsZh[name];
      default:
        break;
    }
  };
};
