/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    dangerouslyAllowSVG: true,
    loader: 'custom',
    loaderFile: './loader/image.js',
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgur.com/**'
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com/**'
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app/**'
      }
    ]
  }
};

module.exports = nextConfig;
