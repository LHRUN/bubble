-- Manual SQL to insert the two new components requested in issues #11 and #12
-- Run with: psql $POSTGRES_PRISMA_URL -f prisma/add-new-components.sql
-- Or via Prisma: npx prisma db execute --file=./prisma/add-new-components.sql

INSERT INTO "components" ("id", "name", "github", "example", "likes")
VALUES
  (
    gen_random_uuid(),
    'GitHub Contribution Globe Badge',
    'https://github.com/turbolego/github-contrib-globe-badge',
    '[![My contributions badge](https://raw.githubusercontent.com/turbolego/github-contrib-globe-badge/main/badge.gif)](https://turbolego.github.io/github-contrib-globe-badge/)',
    0
  ),
  (
    gen_random_uuid(),
    'Spotify GitHub Profile Badge',
    'https://github.com/turbolego/iPad2Spotify',
    '[![Last played on Spotify](https://ipad2spotify.vercel.app/api/badge/b0fqqgncucvgw2e.svg)](https://ipad2spotify.vercel.app/)',
    0
  )
ON CONFLICT DO NOTHING;
-- If your Postgres lacks pgcrypto, use cuid fallback: replace gen_random_uuid() with a generated cuid string.

-- Verify:
-- SELECT name, github, example FROM "components" WHERE name IN ('GitHub Contribution Globe Badge','Spotify GitHub Profile Badge');
