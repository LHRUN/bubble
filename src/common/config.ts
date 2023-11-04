import { ICard } from '@/types/config';
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
  Commit: 'Commit',
  Lanaguages: 'Lanaguages'
};

export const CardList: Array<ICard> = [
  {
    name: 'Github Readme Stats',
    previewImage: GithubReadmeStats,
    descript: [
      '1. 要创建 GitHub 统计卡片，只需在你的 README 文件中添加一行代码，并将其中的 ?username= 替换为你的 GitHub 用户名，即可展示你的 GitHub 记录。',
      '2. 此外，GitHub 统计卡片支持多个内置主题，并允许你通过自定义URL参数来个性化样式。'
    ],
    github: 'https://github.com/anuraghazra/github-readme-stats',
    example: `<img src="https://github-readme-stats.vercel.app/api?username=anuraghazra" />`,
    category: [Categories.Analyse, Categories.Commit]
  },
  {
    name: 'Github Readme Lanaguages',
    previewImage: GithubReadmeLanaguages,
    descript: [
      '1. Github 常用语言展示，只需复制一行代码，然后把?username=改为你的Github用户名就可以展示你最🐮的编程语言',
      '2. 此外，GitHub 常用语言展示支持多个内置主题和布局风格，你还可以通过自定义URL参数来自行定制样式。'
    ],
    github: 'https://github.com/anuraghazra/github-readme-stats',
    example: `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact" />`,
    category: [Categories.Analyse, Categories.Lanaguages]
  },
  {
    name: 'Badges',
    previewComponent: Badges,
    descript: [
      '1. 如果你希望配置徽章来展示你的项目的运行状况和展示你的技术栈，Shields 是一个出色的选择。',
      '2. 此外，Shields 提供了多个内置主题和布局风格，同时你还可以通过修改URL参数来自定义样式。'
    ],
    github: 'https://github.com/anuraghazra/github-readme-stats',
    example: `
      <div>
        <img src="https://img.shields.io/badge/-React-00599C?logo=React&style=for-the-badge"/>
        <img src="https://img.shields.io/badge/-TypeScript-16213E?logo=TypeScript&style=for-the-badge" />
      </div>
    `,
    category: [Categories.Lanaguages]
  },
  {
    name: 'Commit Snk',
    previewImage: GithubUserSnk,
    descript: [
      '1. 通过获取用户的提交记录，创建了一个贪吃蛇游戏。',
      '2. 使用方式：通过 GitHub Actions，每天自动生成一张新图片，然后在你的 README 文件中使用特定语法来展示。',
      `
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="github-snake-dark.svg" />
        <source media="(prefers-color-scheme: light)" srcset="github-snake.svg" />
        <img alt="github-snake" src="github-snake.svg" />
      </picture>
      `
    ],
    github: 'https://github.com/Platane/snk',
    example: '',
    category: [Categories.Analyse, Categories.Commit]
  },
  {
    name: 'Waka Readme Stats',
    previewComponent: WakeTimePreview,
    descript: [
      '1. 统计你每天的数据，是早起还是晚起，什么时候效率最高，使用什么语言编写',
      '2. 使用方式：通过 Git Actions 每天0点自动执行 waka-readme-stats, 然后在你的 README 文件中将以下标记放到你想要统计的位置',
      `
        <!--START_SECTION:waka-->
        <!--END_SECTION:waka-->
      `
    ],
    github: 'https://github.com/anmol098/waka-readme-stats',
    example: '',
    category: [Categories.Analyse, Categories.Commit]
  },
  {
    name: 'Mermaid',
    previewImage: Mermaid,
    descript: [
      '1. 目前 GitHub 官方已经支持 Mermaid，你可以直接在 README 中使用它，Mermaid 支持流程图、时序图、饼图等等。你可以查看官方网站以获取详细的语法和示例。'
    ],
    github: 'https://github.com/mermaid-js/mermaid',
    example: `${'```'}mermaid
  graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
  ${'```'}`,
    category: []
  },
  {
    name: 'Streak Stats',
    previewImage: StreakStats,
    descript: [
      '1. 要展示你的总贡献次数、当前连续贡献天数以及最长连续贡献天数，只需在你的 README 文件中添加一行代码，将其中的 ?username= 替换为你的 GitHub 用户名。',
      '2. 支持多个内置主题，并允许你通过自定义URL参数来定制样式。',
      '3. 你也可以通过访问 https://streak-stats.demolab.com/ 来实时预览效果。'
    ],
    github: 'https://github.com/DenverCoder1/github-readme-streak-stats',
    example: `<img src="https://streak-stats.demolab.com/?user=DenverCoder1" />`,
    category: [Categories.Analyse, Categories.Commit]
  },
  {
    name: 'Summary Card',
    previewImage: SummaryCard,
    descript: [
      '1. 自动生成 summary card, 支持多个内置主题和统计展示，如柱状图，饼形图等',
      '3. 你也可以通过访问 https://github-profile-summary-cards.vercel.app/ 来实时预览效果。',
      '4. 另外可以通过 Github Actions 自动生成，具体设置可以看 https://github.com/vn7n24fzkq/github-profile-summary-cards#github-actions-usage'
    ],
    github: 'https://github.com/vn7n24fzkq/github-profile-summary-cards',
    example: `<img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=LHRUN&theme=default" />`,
    category: [Categories.Analyse, Categories.Commit]
  },
  {
    name: 'TechStack Generator',
    previewImage: TechStackReact,
    descript: ['1. 生成 html 和 markdown 格式的动画 techstack 图标'],
    github: 'https://techstack-generator.vercel.app/',
    example: `<img src="https://techstack-generator.vercel.app/react-icon.svg" />`,
    category: [Categories.Lanaguages]
  },
  {
    name: 'Trophy',
    previewImage: TrophySvg,
    descript: [
      '1. 动态生成 GitHub Stat Trophies，只需在你的 README 文件中添加一行代码，并将其中的 ?username= 替换为你的 GitHub 用户名即可',
      '2. 提供多个内置主题和奖杯类型过滤'
    ],
    github: 'https://github.com/ryo-ma/github-profile-trophy',
    example: `<img src="https://github-profile-trophy.vercel.app/?username=ryo-ma" />`,
    category: [Categories.Analyse, Categories.Commit]
  },
  {
    name: 'Views Counter',
    previewComponent: ViewsCounter,
    descript: [
      '1. 如果你想记录有多少人访问你的 Profile，只需在你的 README 文件中添加一行代码，并将其中的 ?username= 替换为你的 GitHub 用户名即可'
    ],
    github: 'https://github.com/antonkomarev/github-profile-views-counter',
    example: `<img src="https://komarev.com/ghpvc/?username=your-github-username&style=for-the-badge" />`,
    category: [Categories.Analyse]
  },
  {
    name: 'Typing',
    previewImage: TypingSvg,
    descript: [
      '1. 将 ?lines= 替换为所需要的文本，空格通过 + 或 %20 代替',
      '2. 可以通过 https://readme-typing-svg.demolab.com/demo/ 实时预览打字机效果'
    ],
    github: 'https://github.com/DenverCoder1/readme-typing-svg',
    example: `<img src="https://readme-typing-svg.demolab.com/?lines=First+line+of+text;Second+line+of+text" />`,
    category: []
  },
  {
    name: 'Readme StackOverflow',
    previewImage: StackoverflowSvg,
    descript: [
      '1. 在 Readme 中展示你的 StackOverflow',
      '2. 只需把 ?userID= 替换为你的 userID, 内置多个主题和布局'
    ],
    github: 'https://github.com/omidnikrah/github-readme-stackoverflow',
    example: `<img src="https://github-readme-stackoverflow.vercel.app/?userID=6558042" />`,
    category: [Categories.Analyse]
  },
  {
    name: 'Readme Jokes',
    previewImage: 'https://readme-jokes.vercel.app/api',
    descript: ['1. 在 Readme 中随机展示一个笑话。', '2. 支持自定义样式。'],
    github: 'https://github.com/ABSphreak/readme-jokes',
    example: `<img src="https://readme-jokes.vercel.app/api" />`,
    category: []
  },
  {
    name: 'Profile 3D Contrib',
    previewImage:
      'https://raw.githubusercontent.com/yoshi389111/github-profile-3d-contrib/main/docs/demo/profile-green-animate.svg',
    descript: [
      '1. 将你的数据统计以 3D 方式呈现。',
      '2. 需要使用 GitHub Actions 来进行图片生成。',
      '3. 目前提供多种内置主题。'
    ],
    github: 'https://github.com/yoshi389111/github-profile-3d-contrib',
    example: '',
    category: [Categories.Analyse, Categories.Commit]
  },
  {
    name: 'Profile Header Generator',
    previewImage:
      'https://raw.githubusercontent.com/leviarista/github-profile-header-generator/main/social/repo-header-image.png',
    descript: [
      '1. Github Profile 标题图片生成器',
      '2. 高度定制化，可以通过 https://leviarista.github.io/github-profile-header-generator 实时预览'
    ],
    github: 'https://github.com/leviarista/github-profile-header-generator',
    example: '![Header](./[Your header image])',
    category: []
  },
  {
    name: 'LeetCode Readme Stats',
    previewImage: LeetcodeStarts,
    descript: [
      '1. LeetCode 统计，只需将 ?username= 更改为您的 LeetCode 用户名',
      '2. 目前支持 light 和 dark 两个主题'
    ],
    github: 'https://github.com/KnlnKS/leetcode-stats',
    example:
      '<img src="https://leetcode-stats-six.vercel.app/?username=KnlnKS />',
    category: [Categories.Analyse]
  },
  {
    name: 'Github Contribution Stats',
    previewImage: GithubContributionStats,
    descript: [],
    github: 'https://github.com/LordDashMe/github-contribution-stats',
    example:
      '<img src="https://github-contribution-stats.vercel.app/api/?username=lorddashme />',
    category: [Categories.Analyse, Categories.Commit]
  },
  {
    name: 'Repo Star History',
    previewImage: RepoStartHistory,
    descript: [],
    github: 'https://github.com/star-history/star-history',
    example:
      '<img src="https://api.star-history.com/svg?repos=star-history/star-history&type=Date />',
    category: [Categories.Analyse, Categories.Commit]
  },
  {
    name: 'Readme Quotes',
    previewImage:
      'https://quotes-github-readme.vercel.app/api?type=vertical&theme=dark',
    descript: [],
    github: 'https://github.com/PiyushSuthar/github-readme-quotes',
    example:
      '<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark />',
    category: []
  },
  {
    name: 'Todoist Stats',
    previewImage:
      'https://raw.githubusercontent.com/abhisheknaiidu/todoist-readme/master/assets/todoist-stat.png',
    descript: [],
    github: 'https://github.com/abhisheknaiidu/todoist-readme',
    example: '',
    category: []
  },
  {
    name: 'Readme Medium',
    previewImage: MediumSvg,
    descript: [],
    github: 'https://github.com/omidnikrah/github-readme-medium',
    example: '',
    category: []
  },
  {
    name: 'Blog Post Workflow',
    previewImage:
      'https://user-images.githubusercontent.com/8397274/88047382-29b8b280-cb6f-11ea-9efb-2af2b10f3e0c.png',
    descript: [],
    github: 'https://github.com/gautamkrishnar/blog-post-workflow',
    example: '',
    category: []
  },
  {
    name: 'Page Speed Insights',
    previewImage: PagespeedSvg,
    descript: [],
    github: 'https://github.com/ankurparihar/readme-pagespeed-insights',
    example: '',
    category: []
  },
  {
    name: 'Recent Activity',
    previewImage:
      'https://user-images.githubusercontent.com/10660468/54499151-062f8900-48e5-11e9-82c9-767d39c9cbbe.png',
    descript: [],
    github: 'https://github.com/JasonEtco/activity-box',
    example: '',
    category: []
  },
  {
    name: 'Github Spray',
    previewImage:
      'https://camo.githubusercontent.com/40946537f361459961c2f65d966d301b105ed19134588bdc275f14af14bbe948/68747470733a2f2f692e696d6775722e636f6d2f6e505a79474e6f2e676966',
    descript: [],
    github: 'https://github.com/Annihil/github-spray',
    example: '',
    category: []
  },
  {
    name: 'Activity Graph',
    previewImage: ActivityGraphSvg,
    descript: [],
    github: 'https://github.com/Ashutosh00710/github-readme-activity-graph',
    example:
      '<img src="https://github-readme-activity-graph.vercel.app/graph?username=yyx990803" />',
    category: []
  },
  {
    name: 'Github Wrapped',
    previewImage:
      'https://raw.githubusercontent.com/rzashakeri/beautify-github-profile/master/wrapped.png',
    descript: [],
    github: 'https://github.com/neat-run/wrapped',
    example: '',
    category: []
  },
  {
    name: 'Github Widgetbox',
    previewImage: WidgetboxSvg,
    descript: [],
    github: 'https://github.com/Jurredr/github-widgetbox',
    example: '',
    category: []
  },
  {
    name: 'Contributors Img',
    previewImage: ContribRocks,
    descript: [],
    github: 'https://contrib.rocks/',
    example: '',
    category: []
  },
  {
    name: 'Last.fm Recently Played',
    previewImage:
      'https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01',
    descript: [],
    github: 'https://github.com/JeffreyCA/lastfm-recently-played-readme',
    example: '',
    category: []
  },
  {
    name: 'GitHub Stats Terminal Style',
    previewImage:
      'https://raw.githubusercontent.com/yogeshwaran01/github-stats-terminal-style/72b295282f2997c996c0668be71a152d03172496/github_stats.svg',
    descript: [],
    github: 'https://github.com/yogeshwaran01/github-stats-terminal-style',
    example: '',
    category: []
  },
  {
    name: 'Capsule Render',
    previewImage: CapsuleRender,
    descript: [],
    github: 'https://github.com/kyechan99/capsule-render',
    example: '',
    category: []
  },
  {
    name: 'SVG Banner',
    previewImage:
      'https://svg-banners.vercel.app/api?type=origin&text1=Dynamic%20SVG%20%F0%9F%A4%A0&text2=%F0%9F%92%96%20Open%20Source&width=800&height=400',
    descript: [],
    github: 'https://github.com/Akshay090/svg-banners',
    example: '',
    category: []
  },
  {
    name: 'Youtube Cards',
    previewImage:
      'https://camo.githubusercontent.com/0a613d18e71fddac2120c96413ddbb767f7d0bc553049650e78fe5d7ee9a1401/68747470733a2f2f797463617264732e64656d6f6c61622e636f6d2f3f69643d316c58614b457939377145267469746c653d4769744875622b537461722b537761672b556e626f78696e672b616e642b476976656177617973266c616e673d656e2674696d657374616d703d31363936383638373639266261636b67726f756e645f636f6c6f723d253233666666666666267469746c655f636f6c6f723d2532333234323932662673746174735f636f6c6f723d253233353736303661266d61785f7469746c655f6c696e65733d322677696474683d32353026626f726465725f7261646975733d35266475726174696f6e3d313732',
    descript: [],
    github: 'https://github.com/DenverCoder1/github-readme-youtube-cards',
    example: '',
    category: []
  },
  {
    name: 'Animated Fluent Emojis',
    previewImage:
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png',
    descript: [],
    github: 'https://animated-fluent-emoji.vercel.app/',
    example: '',
    category: []
  }
];
