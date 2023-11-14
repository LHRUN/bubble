export const descripts: Record<string, string[]> = {
  'Github Readme Stats': [
    '1. 要创建 GitHub 统计卡片，只需在你的 README 文件中添加一行代码，并将其中的 ?username= 替换为你的 GitHub 用户名，即可展示你的 GitHub 记录。',
    '2. 此外，GitHub 统计卡片支持多个内置主题，并允许你通过自定义 URL 参数来定制样式。'
  ],
  'Github Readme Lanaguages': [
    '1. Github 常用语言展示，只需复制一行代码，然后把 ?username= 改为你的 Github 用户名就可以展示你最常用的编程语言。',
    '2. 此外，GitHub 常用语言展示支持多个内置主题和布局风格，你还可以通过自定义 URL 参数来自行定制样式。'
  ],
  'Shields Badges': [
    '1. 如果你希望配置徽章来展示你的项目的运行状况和你的技术栈，Shields 是一个很好的选择。',
    '2. 此外，Shields 提供了多个内置主题和布局风格，同时你还可以通过修改URL参数来自定义样式。'
  ],
  'Commit Snk': [
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
  'Waka Readme Stats': [
    '1. 统计你每天的数据，是早起还是晚起，什么时候效率最高，使用什么语言编写',
    '2. 使用方式：通过 Git Actions 每天0点自动执行 waka-readme-stats, 然后在你的 README 文件中将以下标记放到你想要统计的位置',
    `
      <!--START_SECTION:waka-->
      <!--END_SECTION:waka-->
    `
  ],
  Mermaid: [
    '1. 目前 GitHub 官方已经支持 Mermaid，你可以直接在 README 中使用它，Mermaid 支持流程图、时序图、饼图等等。你可以查看官方网站以获取详细的语法和示例。'
  ],
  'Streak Stats': [
    '1. 通过 Streak Stats 展示你的总贡献次数、当前连续贡献天数以及最长连续贡献天数，只需在你的 README 文件中添加一行代码，将其中的 ?username= 替换为你的 GitHub 用户名。',
    '2. 支持多个内置主题，并允许你通过自定义URL参数来定制样式。',
    '3. 你也可以通过访问 https://streak-stats.demolab.com/ 来实时预览效果。'
  ],
  'Summary Card': [
    '1. 自动生成 summary card, 支持多个内置主题和统计展示，如柱状图，饼形图等',
    '2. 你也可以通过访问 https://github-profile-summary-cards.vercel.app/ 来实时预览效果。',
    '3. 另外可以通过 Github Actions 自动生成，具体设置可以看 https://github.com/vn7n24fzkq/github-profile-summary-cards#github-actions-usage'
  ],
  'TechStack Generator': ['1. 生成 html 和 markdown 格式的动画 techstack 图标'],
  Trophy: [
    '1. 动态生成 GitHub Stat Trophies，只需在你的 README 文件中添加一行代码，并将其中的 ?username= 替换为你的 GitHub 用户名即可',
    '2. 提供多个内置主题和奖杯类型过滤'
  ],
  'Views Counter': [
    '1. 如果你想记录有多少人访问你的 Profile，只需在你的 README 文件中添加一行代码，并将其中的 ?username= 替换为你的 GitHub 用户名即可'
  ],
  Typing: [
    '1. 将 ?lines= 替换为所需要的文本，空格通过 + 或 %20 代替',
    '2. 可以通过 https://readme-typing-svg.demolab.com/demo/ 实时预览打字机效果'
  ],
  'StackOverflow Profile': [
    '1. 在 Readme 中展示你的 StackOverflow',
    '2. 只需把 ?userID= 替换为你的 userID, 内置多个主题和布局'
  ],
  'Random Jokes': ['1. 在 Readme 中随机展示一个笑话。', '2. 支持自定义样式。'],
  'Profile 3D Contrib': [
    '1. 将你的数据统计以 3D 方式呈现。',
    '2. 需要使用 GitHub Actions 来进行图片生成。',
    '3. 目前提供多种内置主题。'
  ],
  'Profile Header Generator': [
    '1. Github Profile 头部图片生成器。',
    '2. 高度定制化，可以通过 https://leviarista.github.io/github-profile-header-generator 实时预览。'
  ],
  'LeetCode Readme Stats': [
    '1. LeetCode 统计，只需将 ?username= 更改为您的 LeetCode 用户名。',
    '2. 目前支持 light 和 dark 两个主题。'
  ],
  'Github Contribution Stats': [
    '1. 获取动态生成的 Github 贡献统计信息。',
    '2. 只需在你的 README 文件中添加一行代码，并将其中的 ?username= 替换为你的 GitHub 用户名即可。'
  ],
  'Repo Star History': [
    '1. 获取仓库的 star 历史图表。',
    '2. 只需将 ?repos= 改为你的仓库名字即可。'
  ],
  'Readme Quotes': [
    '1. 在 Readme 中添加 Programming Quotes。',
    '2. 只需添加一个url，目前支持多个主题。'
  ],
  'Todoist Stats': [
    '1. 在 Readme 中记录你的 Todoist 数据。',
    '2. 需要通过 Github Actions 自动生成。'
  ],
  'Readme Medium': [
    '1. 在 Readme 中显示你最新的 Medium 文章。',
    '2. 只需在你的 README 文件中添加一行代码，并将其中的 ?username= 替换为你的 Medium 用户名即可。'
  ],
  'Blog Post Workflow': [
    '1. 通过 RSS, 在 README 中显示来自任意来源的最新 Blog、StackOverflow 或 Youtube。',
    '2. 需要通过 Github Actions 自动生成。支持高度定制化'
  ],
  'Page Speed Insights': ['1. 在 Readme 中显示网站的 Google lighthouse 数据'],
  'Recent Activity': [
    '1. 在 pinned gist 中更新你的最新工作。',
    '2, 需要通过 Github Actions 自动生成。'
  ],
  'Github Spray': ['1. 根据你的 Github contribution 进行生成绘制 ░▒▓█'],
  'Activity Graph': [
    '1. 动态生成图表，可显示过去 31 天的 GitHub 活动。',
    '2. 只需在你的 README 文件中添加一行代码，并将其中的 ?username= 替换为你的 GitHub 用户名即可。'
  ],
  'Github Wrapped': [
    '1. 在 https://wrapped.run/ 网站上可以动态生成你的统计数据图片，支持分享和定制化内容。'
  ],
  'Github Widgetbox': [
    '1. 动态生成小组件，支持Languages、Frameworks、Libraries、Tools等内容展示，只需改变url参数即可。'
  ],
  'Contributors Img': [
    '1. 在 https://contrib.rocks/ 上可以生成仓库的贡献者图片。',
    '2. 支持数量，列数，匿名用户等参数配置'
  ],
  'Last.fm Recently Played': [
    '1. 在 Readme 中展示 Last.fm 的最近记录。',
    '2. 只需在你的 README 文件中添加一行代码，并将其中的 ?username= 替换为你的用户名即可。',
    '3. 内置多种主题和布局方式。'
  ],
  'GitHub Stats Terminal Style': [
    '1. 动态生成 Github 统计信息，风格类似终端',
    '2. 需要通过 Github Actions 自动生成。'
  ],
  'Capsule Render': ['1. 动态生成彩色图片，高度支持各种主题以及样式配置'],
  'SVG Banner': [
    '1. 通过 SVG Banner 可以轻松制作符合你风格的 Banner 图片。',
    '2. 内置多种动画和主题。'
  ],
  'Youtube Cards': [
    '1. 在 Readme 中以 SVG 的形式展示你最近的 Youtube。',
    '2. 需要通过 Github Actions 自动生成。'
  ],
  'Animated Fluent Emojis': [
    '1. 微软所有的 animated fluent emojis 都在这里，可以在 Readme 中随时使用。'
  ],
  'Steam Card': [
    '1. 生成你的 Steam 资料卡片。',
    '2. 内置多种主题和多种语言配置，支持超过10项的个性化设置，并可通过 https://card.yuy1n.io/ 进行预览。',
    '3. 支持以Vercel、Netlify、Railway或 Docker 方式进行部署。'
  ],
  'Buy Me a Coffee': [
    '1. 如果你希望获得一些小额赞助，以激励你的开源项目更进一步，Buy Me a Coffee 是一个不错的选择。',
    '2. 只需在 https://www.buymeacoffee.com 注册，然后将这张图片和你的链接嵌入到你希望展示的位置即可。'
  ]
};
