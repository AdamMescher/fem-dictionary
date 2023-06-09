/** @type {import('next').NextConfig} */
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
