/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      $primary-color: #2C3333;
      $secondary-color: #395B64;
      $tertiary-color: #A5C9CA;
      $light-color: #E7F6F2;
    `
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
