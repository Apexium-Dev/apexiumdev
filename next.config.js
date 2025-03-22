/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  assetPrefix,
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react', '@headlessui/react', 'framer-motion'],
    optimizeCss: true,
    scrollRestoration: true,
  },
  compress: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      };
    }

    return config;
  },
}

module.exports = nextConfig 