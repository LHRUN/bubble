import { ICard } from '@/types/config';
import GithubReadmeStats from '@/assets/image/preview/github-readme-stats.svg';
import GithubReadmeLanaguages from '@/assets/image/preview/github-readme-lanaguages.svg';

export const Categories = {
  All: 'All',
  Commit: 'Commit',
  Analyse: 'Analyse',
  Lanaguages: 'Lanaguages'
};

export const CardList: Array<ICard> = [
  {
    name: 'github-readme-stats',
    preview: GithubReadmeStats,
    descript: [
      '1. Github 统计卡片，只需复制一行代码，然后把?username=改为你的Github用户名，就可以展示你的Github记录',
      '2. 有多个内置主题并可以通过修改URL参数自行DIY样式'
    ],
    github: 'https://github.com/anuraghazra/github-readme-stats',
    example: [
      `<img src="https://github-readme-stats.vercel.app/api?username=anuraghazra" ></img>`
    ],
    category: [Categories.Analyse, Categories.Commit]
  },
  {
    name: 'github-readme-lanaguages',
    preview: GithubReadmeLanaguages,
    descript: [
      '1. Github 常用语言展示，只需复制一行代码，然后把?username=改为你的Github用户名就可以展示你最🐮的编程语言',
      '2. 有多个内置主题和布局风格，并可以通过修改URL参数自行DIY样式'
    ],
    github: 'https://github.com/anuraghazra/github-readme-stats',
    example: [
      `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact" ></img>`
    ],
    category: [Categories.Analyse, Categories.Lanaguages]
  }
];
