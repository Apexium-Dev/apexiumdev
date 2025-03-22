import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://apexium-dev.github.io';
  const basePath = '/apexiumdev';

  // Define your routes
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/contact',
    '/blog',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${basePath}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
} 