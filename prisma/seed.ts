import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const components = [
    {
      name: 'GitHub Contribution Globe Badge',
      github: 'https://github.com/turbolego/github-contrib-globe-badge',
      example:
        '[![My contributions badge](https://raw.githubusercontent.com/turbolego/github-contrib-globe-badge/main/badge.gif)](https://turbolego.github.io/github-contrib-globe-badge/)',
      likes: 0
    },
    {
      name: 'Spotify GitHub Profile Badge',
      github: 'https://github.com/turbolego/iPad2Spotify',
      example:
        '[![Last played on Spotify](https://ipad2spotify.vercel.app/api/badge/b0fqqgncucvgw2e.svg)](https://ipad2spotify.vercel.app/)',
      likes: 0
    }
  ];

  for (const c of components) {
    const exists = await prisma.component.findFirst({ where: { name: c.name } });
    if (exists) {
      console.log(`Skip existing component: ${c.name}`);
      continue;
    }
    await prisma.component.create({ data: c });
    console.log(`Created component: ${c.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
