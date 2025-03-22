/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react', '@headlessui/react'],
  },
}

module.exports = nextConfig 