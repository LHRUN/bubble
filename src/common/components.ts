import GithubReadmeStats from '@/assets/image/preview/github-readme-stats.svg';
import GithubReadmeLanaguages from '@/assets/image/preview/github-readme-lanaguages.svg';
import GithubUserSnk from '@/assets/image/preview/github-user-snk.svg';
import Mermaid from '@/assets/image/preview/mermaid.svg';
import StreakStats from '@/assets/image/preview/streak-stats.svg';
import SummaryCard from '@/assets/image/preview/summary-card.svg';
import TrophySvg from '@/assets/image/preview/trophy.svg';
import TypingSvg from '@/assets/image/preview/typing.svg';
import StackoverflowSvg from '@/assets/image/preview/stackoverflow.svg';
import LeetcodeStarts from '@/assets/image/preview/leetcodeStarts.svg';
import GithubContributionStats from '@/assets/image/preview/github-contribution-stats.svg';
import RepoStartHistory from '@/assets/image/preview/repo-start-history.svg';
import MediumSvg from '@/assets/image/preview/medium.svg';
import ActivityGraphSvg from '@/assets/image/preview/activity-graph.svg';
import WidgetboxSvg from '@/assets/image/preview/widgetbox.svg';
import CapsuleRender from '@/assets/image/preview/capsule-render.svg';

import { IComponent } from '@/types/config';

export const ComponentCardList: Array<
  Pick<IComponent, 'name' | 'previewImage' | 'previewComponent'>
> = [
  {
    name: 'Buy Me a Coffee',
    previewImage:
      'https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png'
  },
  {
    name: 'Steam Card',
    previewImage:
      'https://card.yuy1n.io/card/76561198340841543/dark,en,badge,group'
  },
  {
    name: 'Commit Snk',
    previewImage: GithubUserSnk
  },
  {
    name: 'Streak Stats',
    previewImage: StreakStats
  },
  {
    name: 'Summary Card',
    previewImage: SummaryCard
  },
  {
    name: 'Github Readme Stats',
    previewImage: GithubReadmeStats
  },
  {
    name: 'Github Readme Lanaguages',
    previewImage: GithubReadmeLanaguages
  },
  {
    name: 'Shields Badges',
    previewComponent: 'badges'
  },
  {
    name: 'Trophy',
    previewImage: TrophySvg
  },
  {
    name: 'Profile 3D Contrib',
    previewImage:
      'https://raw.githubusercontent.com/LHRUN/file-store/main/bubble/components/profile3DContrib.png'
  },
  {
    name: 'Views Counter',
    previewComponent: 'viewsCounter'
  },
  {
    name: 'Github Contribution Stats',
    previewImage: GithubContributionStats
  },
  {
    name: 'StackOverflow Profile',
    previewImage: StackoverflowSvg
  },
  {
    name: 'Random Jokes',
    previewImage:
      'https://raw.githubusercontent.com/LHRUN/file-store/main/bubble/components/randomJokes.png'
  },
  {
    name: 'LeetCode Readme Stats',
    previewImage: LeetcodeStarts
  },
  {
    name: 'Repo Star History',
    previewImage: RepoStartHistory
  },
  {
    name: 'Readme Quotes',
    previewImage:
      'https://raw.githubusercontent.com/LHRUN/file-store/main/bubble/components/readmeQuotes.png'
  },
  {
    name: 'Todoist Stats',
    previewImage:
      'https://raw.githubusercontent.com/abhisheknaiidu/todoist-readme/master/assets/todoist-stat.png'
  },
  {
    name: 'Readme Medium',
    previewImage: MediumSvg
  },
  {
    name: 'Blog Post Workflow',
    previewImage:
      'https://raw.githubusercontent.com/LHRUN/file-store/main/bubble/components/blogPostWorkflow.png'
  },
  {
    name: 'SVG Banner',
    previewImage:
      'https://svg-banners.vercel.app/api?type=origin&text1=Dynamic%20SVG%20%F0%9F%A4%A0&text2=%F0%9F%92%96%20Open%20Source&width=800&height=400'
  },
  {
    name: 'Github Widgetbox',
    previewImage: WidgetboxSvg
  },
  {
    name: 'Contributors Img',
    previewImage:
      'https://raw.githubusercontent.com/LHRUN/file-store/main/bubble/components/contributors.png'
  },
  {
    name: 'Last.fm Recently Played',
    previewImage:
      'https://lastfm-recently-played.vercel.app/api?user=JeffreyCA01'
  },
  {
    name: 'GitHub Stats Terminal Style',
    previewImage:
      'https://raw.githubusercontent.com/yogeshwaran01/github-stats-terminal-style/72b295282f2997c996c0668be71a152d03172496/github_stats.svg'
  },
  {
    name: 'Waka Readme Stats',
    previewImage:
      'https://raw.githubusercontent.com/LHRUN/file-store/main/bubble/components/wakeReadmeStats.png'
  },
  {
    name: 'Mermaid',
    previewImage: Mermaid
  },
  {
    name: 'TechStack Generator',
    previewImage:
      'https://raw.githubusercontent.com/LHRUN/file-store/main/bubble/components/techStackGenreator.png'
  },
  {
    name: 'Typing',
    previewImage: TypingSvg
  },
  {
    name: 'Profile Header Generator',
    previewImage:
      'https://raw.githubusercontent.com/leviarista/github-profile-header-generator/main/social/repo-header-image.png'
  },
  {
    name: 'Page Speed Insights',
    previewImage:
      'https://raw.githubusercontent.com/LHRUN/file-store/main/bubble/components/pageSpeedInsights.png'
  },
  {
    name: 'Recent Activity',
    previewImage:
      'https://user-images.githubusercontent.com/10660468/54499151-062f8900-48e5-11e9-82c9-767d39c9cbbe.png'
  },
  {
    name: 'Github Spray',
    previewImage:
      'https://camo.githubusercontent.com/40946537f361459961c2f65d966d301b105ed19134588bdc275f14af14bbe948/68747470733a2f2f692e696d6775722e636f6d2f6e505a79474e6f2e676966'
  },
  {
    name: 'Activity Graph',
    previewImage: ActivityGraphSvg
  },
  {
    name: 'Github Wrapped',
    previewImage:
      'https://raw.githubusercontent.com/LHRUN/file-store/main/bubble/components/githubWrapped.png'
  },
  {
    name: 'Capsule Render',
    previewImage: CapsuleRender
  },
  {
    name: 'Youtube Cards',
    previewImage:
      'https://camo.githubusercontent.com/0a613d18e71fddac2120c96413ddbb767f7d0bc553049650e78fe5d7ee9a1401/68747470733a2f2f797463617264732e64656d6f6c61622e636f6d2f3f69643d316c58614b457939377145267469746c653d4769744875622b537461722b537761672b556e626f78696e672b616e642b476976656177617973266c616e673d656e2674696d657374616d703d31363936383638373639266261636b67726f756e645f636f6c6f723d253233666666666666267469746c655f636f6c6f723d2532333234323932662673746174735f636f6c6f723d253233353736303661266d61785f7469746c655f6c696e65733d322677696474683d32353026626f726465725f7261646975733d35266475726174696f6e3d313732'
  },
  {
    name: 'Animated Fluent Emojis',
    previewImage:
      'https://raw.githubusercontent.com/LHRUN/file-store/main/bubble/components/animatedFluentEmojis.png'
  }
];
