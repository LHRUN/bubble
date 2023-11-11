import { IComponentCard } from '@/types/config';
import GithubReadmeStats from '@/assets/image/preview/github-readme-stats.svg';
import GithubReadmeLanaguages from '@/assets/image/preview/github-readme-lanaguages.svg';
import GithubUserSnk from '@/assets/image/preview/github-user-snk.svg';
import Mermaid from '@/assets/image/preview/mermaid.svg';
import StreakStats from '@/assets/image/preview/streak-stats.svg';
import SummaryCard from '@/assets/image/preview/summary-card.svg';
import TechStackReact from '@/assets/image/preview/techstack-react.svg';
import TrophySvg from '@/assets/image/preview/trophy.svg';
import TypingSvg from '@/assets/image/preview/typing.svg';
import StackoverflowSvg from '@/assets/image/preview/stackoverflow.svg';
import LeetcodeStarts from '@/assets/image/preview/leetcodeStarts.svg';
import GithubContributionStats from '@/assets/image/preview/github-contribution-stats.svg';
import RepoStartHistory from '@/assets/image/preview/repo-start-history.svg';
import MediumSvg from '@/assets/image/preview/medium.svg';
import PagespeedSvg from '@/assets/image/preview/pagespeed.svg';
import ActivityGraphSvg from '@/assets/image/preview/activity-graph.svg';
import WidgetboxSvg from '@/assets/image/preview/widgetbox.svg';
import ContribRocks from '@/assets/image/preview/contrib-rocks.svg';
import CapsuleRender from '@/assets/image/preview/capsule-render.svg';

import Badges from '@/components/preview/badges';
import WakeTimePreview from '@/components/preview/wakeTime';
import ViewsCounter from '@/components/preview/viewsCounter';

export const Categories = {
  All: 'All',
  Analyse: 'Analyse',
  OnlyImage: 'Only Image',
  NeedActions: 'Need Actions',
  Contribution: 'Contribution',
  Lanaguages: 'Lanaguages',
  Icon: 'Icon',
  Chart: 'Chart',
  ExternalWebsite: 'External Website'
};

export const ComponentCardList: Array<IComponentCard> = [
  {
    name: 'Steam Card',
    previewImage:
      'https://card.yuy1n.io/card/76561198340841543/dark,en,badge,group',
    github: 'https://github.com/yuyinws/steam-card',
    example: '',
    category: [Categories.ExternalWebsite]
  },
  {
    name: 'Commit Snk',
    previewImage: GithubUserSnk,
    github: 'https://github.com/Platane/snk',
    example: '',
    category: [
      Categories.Analyse,
      Categories.Contribution,
      Categories.NeedActions
    ]
  },
  {
    name: 'Streak Stats',
    previewImage: StreakStats,
    github: 'https://github.com/DenverCoder1/github-readme-streak-stats',
    example: `<img src="https://streak-stats.demolab.com/?user=DenverCoder1" />`,
    category: [
      Categories.Analyse,
      Categories.Contribution,
      Categories.OnlyImage
    ]
  },
  {
    name: 'Summary Card',
    previewImage: SummaryCard,
    github: 'https://github.com/vn7n24fzkq/github-profile-summary-cards',
    example: `<img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=LHRUN&theme=default" />`,
    category: [
      Categories.Analyse,
      Categories.Contribution,
      Categories.Chart,
      Categories.NeedActions
    ]
  },
  {
    name: 'Github Readme Stats',
    previewImage: GithubReadmeStats,
    github: 'https://github.com/anuraghazra/github-readme-stats',
    example: `<img src="https://github-readme-stats.vercel.app/api?username=anuraghazra" />`,
    category: [
      Categories.Analyse,
      Categories.Contribution,
      Categories.OnlyImage
    ]
  },
  {
    name: 'Github Readme Lanaguages',
    previewImage: GithubReadmeLanaguages,
    github: 'https://github.com/anuraghazra/github-readme-stats',
    example: `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact" />`,
    category: [Categories.Analyse, Categories.Lanaguages, Categories.OnlyImage]
  },
  {
    name: 'Shields Badges',
    previewComponent: Badges,
    github: 'https://github.com/badges/shields',
    example: `
      <div>
        <img src="https://img.shields.io/badge/-React-00599C?logo=React&style=for-the-badge"/>
        <img src="https://img.shields.io/badge/-TypeScript-16213E?logo=TypeScript&style=for-the-badge" />
      </div>
    `,
    category: [Categories.Lanaguages, Categories.Icon, Categories.OnlyImage]
  },
  {
    name: 'Trophy',
    previewImage: TrophySvg,
    github: 'https://github.com/ryo-ma/github-profile-trophy',
    example: `<img src="https://github-profile-trophy.vercel.app/?username=ryo-ma" />`,
    category: [
      Categories.Analyse,
      Categories.Contribution,
      Categories.OnlyImage
    ]
  },
  {
    name: 'Profile 3D Contrib',
    previewImage:
      'https://raw.githubusercontent.com/yoshi389111/github-profile-3d-contrib/main/docs/demo/profile-green-animate.svg',
    github: 'https://github.com/yoshi389111/github-profile-3d-contrib',
    example: '',
    category: [
      Categories.Analyse,
      Categories.Contribution,
      Categories.Chart,
      Categories.NeedActions
    ]
  },
  {
    name: 'Views Counter',
    previewComponent: ViewsCounter,
    github: 'https://github.com/antonkomarev/github-profile-views-counter',
    example: `<img src="https://komarev.com/ghpvc/?username=your-github-username&style=for-the-badge" />`,
    category: [Categories.Analyse, Categories.OnlyImage]
  },
  {
    name: 'Github Contribution Stats',
    previewImage: GithubContributionStats,
    github: 'https://github.com/LordDashMe/github-contribution-stats',
    example:
      '<img src="https://github-contribution-stats.vercel.app/api/?username=lorddashme />',
    category: [
      Categories.Analyse,
      Categories.Contribution,
      Categories.OnlyImage
    ]
  },
  {
    name: 'StackOverflow Profile',
    previewImage: StackoverflowSvg,
    github: 'https://github.com/omidnikrah/github-readme-stackoverflow',
    example: `<img src="https://github-readme-stackoverflow.vercel.app/?userID=6558042" />`,
    category: [
      Categories.Analyse,
      Categories.ExternalWebsite,
      Categories.OnlyImage
    ]
  },
  {
    name: 'Random Jokes',
    previewImage: 'https://readme-jokes.vercel.app/api',
    github: 'https://github.com/ABSphreak/readme-jokes',
    example: `<img src="https://readme-jokes.vercel.app/api" />`,
    category: [Categories.OnlyImage]
  },
  {
    name: 'LeetCode Readme Stats',
    previewImage: LeetcodeStarts,
    github: 'https://github.com/KnlnKS/leetcode-stats',
    example:
      '<img src="https://leetcode-stats-six.vercel.app/?username=KnlnKS />',
    category: [
      Categories.Analyse,
      Categories.ExternalWebsite,
      Categories.OnlyImage
    ]
  },
  {
    name: 'Repo Star History',
    previewImage: RepoStartHistory,
    github: 'https://github.com/star-history/star-history',
    example:
      '<img src="https://api.star-history.com/svg?repos=star-history/star-history&type=Date />',
    category: [
      Categories.Analyse,
      Categories.Contribution,
      Categories.Chart,
      Categories.OnlyImage
    ]
  },
  {
    name: 'Readme Quotes',
    previewImage:
      'https://quotes-github-readme.vercel.app/api?type=vertical&theme=dark',
    github: 'https://github.com/PiyushSuthar/github-readme-quotes',
    example:
      '<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark />',
    category: [Categories.OnlyImage]
  },
  {
    name: 'Todoist Stats',
    previewImage:
      'https://raw.githubusercontent.com/abhisheknaiidu/todoist-readme/master/assets/todoist-stat.png',
    github: 'https://github.com/abhisheknaiidu/todoist-readme',
    example: '',
    category: [
      Categories.Analyse,
      Categories.ExternalWebsite,
      Categories.NeedActions
    ]
  },
  {
    name: 'Readme Medium',
    previewImage: MediumSvg,
    github: 'https://github.com/omidnikrah/github-readme-medium',
    example:
      '<img src="https://github-readme-medium.vercel.app/?username=omidnikrah />',
    category: [Categories.ExternalWebsite]
  },
  {
    name: 'Blog Post Workflow',
    previewImage:
      'https://user-images.githubusercontent.com/8397274/88047382-29b8b280-cb6f-11ea-9efb-2af2b10f3e0c.png',
    github: 'https://github.com/gautamkrishnar/blog-post-workflow',
    example: '',
    category: [
      Categories.Analyse,
      Categories.ExternalWebsite,
      Categories.NeedActions
    ]
  },
  {
    name: 'SVG Banner',
    previewImage:
      'https://svg-banners.vercel.app/api?type=origin&text1=Dynamic%20SVG%20%F0%9F%A4%A0&text2=%F0%9F%92%96%20Open%20Source&width=800&height=400',
    github: 'https://github.com/Akshay090/svg-banners',
    example:
      '<img src="https://svg-banners.vercel.app/api?type=origin&text1=Dynamic%20SVG%20%F0%9F%A4%A0&text2=%F0%9F%92%96%20Open%20Source&width=800&height=400" />',
    category: [Categories.OnlyImage]
  },
  {
    name: 'Github Widgetbox',
    previewImage: WidgetboxSvg,
    github: 'https://github.com/Jurredr/github-widgetbox',
    example:
      '<img src="https://github-widgetbox.vercel.app/api/skills?frameworks=vue,react,next,nuxt" />',
    category: [Categories.Icon, Categories.Lanaguages, Categories.OnlyImage]
  },
  {
    name: 'Contributors Img',
    previewImage: ContribRocks,
    github: 'https://github.com/lacolaco/contributors-img',
    example: '',
    category: [Categories.OnlyImage]
  },
  {
    name: 'Last.fm Recently Played',
    previewImage:
      'https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01',
    github: 'https://github.com/JeffreyCA/lastfm-recently-played-readme',
    example:
      '<img src="https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01" />',
    category: [Categories.ExternalWebsite, Categories.OnlyImage]
  },
  {
    name: 'GitHub Stats Terminal Style',
    previewImage:
      'https://raw.githubusercontent.com/yogeshwaran01/github-stats-terminal-style/72b295282f2997c996c0668be71a152d03172496/github_stats.svg',
    github: 'https://github.com/yogeshwaran01/github-stats-terminal-style',
    example: '',
    category: [
      Categories.Contribution,
      Categories.Analyse,
      Categories.NeedActions
    ]
  },
  {
    name: 'Waka Readme Stats',
    previewComponent: WakeTimePreview,
    github: 'https://github.com/anmol098/waka-readme-stats',
    example: '',
    category: [
      Categories.Analyse,
      Categories.Contribution,
      Categories.NeedActions
    ]
  },
  {
    name: 'Mermaid',
    previewImage: Mermaid,
    github: 'https://github.com/mermaid-js/mermaid',
    example: `${'```'}mermaid
  graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
  ${'```'}`,
    category: [Categories.Chart]
  },
  {
    name: 'TechStack Generator',
    previewImage: TechStackReact,
    github: 'https://techstack-generator.vercel.app/',
    example: `<img src="https://techstack-generator.vercel.app/react-icon.svg" />`,
    category: [Categories.Lanaguages, Categories.Icon, Categories.OnlyImage]
  },
  {
    name: 'Typing',
    previewImage: TypingSvg,
    github: 'https://github.com/DenverCoder1/readme-typing-svg',
    example: `<img src="https://readme-typing-svg.demolab.com/?lines=First+line+of+text;Second+line+of+text" />`,
    category: [Categories.OnlyImage]
  },
  {
    name: 'Profile Header Generator',
    previewImage:
      'https://raw.githubusercontent.com/leviarista/github-profile-header-generator/main/social/repo-header-image.png',
    github: 'https://github.com/leviarista/github-profile-header-generator',
    example: '![Header](./[Your header image])',
    category: [Categories.OnlyImage]
  },
  {
    name: 'Page Speed Insights',
    previewImage: PagespeedSvg,
    github: 'https://github.com/ankurparihar/readme-pagespeed-insights',
    example: '',
    category: [Categories.Analyse, Categories.OnlyImage]
  },
  {
    name: 'Recent Activity',
    previewImage:
      'https://user-images.githubusercontent.com/10660468/54499151-062f8900-48e5-11e9-82c9-767d39c9cbbe.png',
    github: 'https://github.com/JasonEtco/activity-box',
    example: '',
    category: [Categories.Contribution, Categories.NeedActions]
  },
  {
    name: 'Github Spray',
    previewImage:
      'https://camo.githubusercontent.com/40946537f361459961c2f65d966d301b105ed19134588bdc275f14af14bbe948/68747470733a2f2f692e696d6775722e636f6d2f6e505a79474e6f2e676966',
    github: 'https://github.com/Annihil/github-spray',
    example: '',
    category: [Categories.Contribution]
  },
  {
    name: 'Activity Graph',
    previewImage: ActivityGraphSvg,
    github: 'https://github.com/Ashutosh00710/github-readme-activity-graph',
    example:
      '<img src="https://github-readme-activity-graph.vercel.app/graph?username=yyx990803" />',
    category: [
      Categories.Analyse,
      Categories.Chart,
      Categories.Contribution,
      Categories.OnlyImage
    ]
  },
  {
    name: 'Github Wrapped',
    previewImage:
      'https://raw.githubusercontent.com/rzashakeri/beautify-github-profile/master/wrapped.png',
    github: 'https://github.com/neat-run/wrapped',
    example: '',
    category: [Categories.OnlyImage, Categories.Analyse]
  },
  {
    name: 'Capsule Render',
    previewImage: CapsuleRender,
    github: 'https://github.com/kyechan99/capsule-render',
    example:
      '<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />',
    category: [Categories.OnlyImage]
  },
  {
    name: 'Youtube Cards',
    previewImage:
      'https://camo.githubusercontent.com/0a613d18e71fddac2120c96413ddbb767f7d0bc553049650e78fe5d7ee9a1401/68747470733a2f2f797463617264732e64656d6f6c61622e636f6d2f3f69643d316c58614b457939377145267469746c653d4769744875622b537461722b537761672b556e626f78696e672b616e642b476976656177617973266c616e673d656e2674696d657374616d703d31363936383638373639266261636b67726f756e645f636f6c6f723d253233666666666666267469746c655f636f6c6f723d2532333234323932662673746174735f636f6c6f723d253233353736303661266d61785f7469746c655f6c696e65733d322677696474683d32353026626f726465725f7261646975733d35266475726174696f6e3d313732',
    github: 'https://github.com/DenverCoder1/github-readme-youtube-cards',
    example: '',
    category: [Categories.ExternalWebsite, Categories.NeedActions]
  },
  {
    name: 'Animated Fluent Emojis',
    previewImage:
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png',
    github: 'https://animated-fluent-emoji.vercel.app/',
    example: '',
    category: [Categories.OnlyImage, Categories.Icon]
  }
];
